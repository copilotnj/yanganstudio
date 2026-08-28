import app from 'vinext/server/app-router-entry';

type WorkerEnv = Cloudflare.Env & {
  ASSETS?: Fetcher;
};

function responseHeaders(object: R2ObjectBody) {
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('cache-control', object.httpMetadata?.cacheControl ?? 'public, max-age=86400, stale-while-revalidate=604800');
  headers.set('x-content-type-options', 'nosniff');
  return headers;
}

async function serveR2Image(request: Request, env: WorkerEnv, key: string) {
  if (!key || key.split('/').some((segment) => !segment || segment === '.' || segment === '..')) {
    return new Response('Image not found', { status: 404 });
  }

  const object = await env.FILES.get(key);
  if (!object) return new Response('Image not found', { status: 404 });

  const headers = responseHeaders(object);
  if (request.headers.get('if-none-match') === object.httpEtag) {
    return new Response(null, { status: 304, headers });
  }

  return new Response(request.method === 'HEAD' ? null : object.body, { headers });
}

const worker = {
  async fetch(request: Request, env: WorkerEnv, context: ExecutionContext) {
    const url = new URL(request.url);
    if ((request.method === 'GET' || request.method === 'HEAD') && url.pathname.startsWith('/media/')) {
      return serveR2Image(request, env, decodeURIComponent(url.pathname.slice('/media/'.length)));
    }

    return app.fetch(request, env, context);
  },
};

export default worker;
