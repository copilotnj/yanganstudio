import { useEffect } from 'react';

export function PageMeta({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    document.title = title ? `${title}｜揚安在這` : '揚安在這｜人像攝影與創作基地';
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
