import Link from 'next/link';
import { AssetImage } from './components/asset-image';
import { SiteFooter } from './components/site-footer';
import { imageUrl, sitePath } from './lib/site';

const services = [
  {
    number: '01',
    title: '個人寫真與體態紀錄',
    copy: '不需要特別的理由。現在的你，就值得好好被看見。',
    image: 'cover-portrait-body-record.webp',
    alt: '台中男性個人寫真與棚拍形象照',
    href: '/service/',
  },
  {
    number: '02',
    title: '伴侶與婚禮攝影',
    copy: '從日常相伴到重要時刻，留下只屬於你們的溫度。',
    image: 'cover-couple-wedding-lgbtq.webp',
    alt: '同志伴侶日常生活寫真',
    href: '/service/',
  },
  {
    number: '03',
    title: '家庭與紀實影像',
    copy: '那些笑聲、奔跑和擁抱，都是你們故事的一頁。',
    image: 'cover-family-lifestyle.webp',
    alt: '家庭親子寫真與自然互動照片',
    href: '/service/',
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="kicker">PORTRAIT · LOVE · LIFE</p>
          <h1>每個人，<br />都值得被<span>真實地</span>看見</h1>
          <p className="hero-intro">
            為 LGBTQ+ 族群與每一個走自己路的人，拍下溫柔的影像。
            不用變得更好，現在的你，就值得被記錄下來。
          </p>
          <div className="button-row">
            <Link className="button button-solid" href={sitePath('/collections/')}>看看作品</Link>
            <Link className="button button-light" href={sitePath('/about/')}>認識揚安</Link>
          </div>
        </div>
        <div className="home-hero-image">
          <AssetImage
            name="yangan-taichung-lgbtq-photographer-portrait.webp"
            alt="台中 LGBTQ+ 攝影師揚安人像"
            eager
          />
          <p>TAICHUNG, TAIWAN<br />PHOTOGRAPHER / CREATOR</p>
        </div>
      </section>

      <section className="belief-section section-pad">
        <div className="section-index"><span>01</span><p>WHY I PHOTOGRAPH</p></div>
        <div className="belief-copy">
          <p>我知道，有時我們走得很小心。</p>
          <h2>我想拍下你真正放鬆、自在的樣子，為那份勇敢留下記錄。</h2>
          <AssetImage className="signature" name="yangan-signature.webp" alt="揚安手寫簽名" />
        </div>
      </section>

      <section className="home-services section-pad">
        <div className="section-index"><span>02</span><p>PHOTOGRAPHY SERVICES</p></div>
        <header className="section-title split-title">
          <h2>捕捉真實的樣子，<br />記錄重要的時刻。</h2>
          <p>我相信每段關係、每一種樣子，都值得被好好看見。用影像留下這些溫柔與勇敢，是我最想做的事。</p>
        </header>
        <div className="service-cards">
          {services.map((service) => (
            <Link className="service-card" href={sitePath(service.href)} key={service.number}>
              <div className="service-image-wrap">
                <AssetImage name={service.image} alt={service.alt} />
                <span className="image-arrow">↗</span>
              </div>
              <div className="service-card-copy">
                <small>{service.number}</small>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="brand-film section-pad" id="youtube">
        <div className="section-index light"><span>03</span><p>MOVING IMAGE</p></div>
        <header className="brand-film-heading">
          <div>
            <p className="kicker">FROM IDEA TO FINAL CUT</p>
            <h2>讓影像，說出<br />你的品牌價值。</h2>
          </div>
          <p className="body-copy">從企劃、腳本、拍攝到剪輯後製，一站式打造兼具美感與行銷力的影音內容。</p>
        </header>
        <div className="brand-videos">
          <article className="video-card">
            <div className="youtube-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/YlnTtwHGTIU"
                title="品牌短影音｜社群推廣影片"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p>品牌短影音｜社群推廣影片</p>
            <h3>腳本設計｜攝影剪輯｜特效後製｜網紅行銷</h3>
            <p className="video-description">在台中新時代商場現場拍攝，透過動態節奏、現場聲音與視覺剪輯，展現品牌互動力與親和度。</p>
          </article>
          <article className="video-card">
            <div className="youtube-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/qLKLcCJj4Fw"
                title="品牌形象影片｜轉職人生微電影"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p>品牌形象影片｜轉職人生微電影</p>
            <h3>概念發想｜腳本分鏡｜攝影剪輯｜音樂設計</h3>
            <p className="video-description">以微電影與訪談融合的手法，紀錄一段重新理解工作、價值與生活的轉職旅程。</p>
          </article>
        </div>
        <div className="media-links">
          <a className="button button-solid" href="https://www.youtube.com/channel/UCiCnfNSkqxTtLrSAkm60bqg" target="_blank" rel="noreferrer">前往 YouTube 頻道</a>
          <a className="text-link" href="https://podcasts.apple.com/podcast/1804222187" target="_blank" rel="noreferrer">收聽 Podcast 節目 <span>→</span></a>
        </div>
      </section>

      <section className="about-teaser section-pad">
        <div className="about-teaser-images">
          <AssetImage name="yangan-portrait-fun-moment.webp" alt="創作者揚安的自然人像" />
          <AssetImage name="yangan-youtube-photo-portrait.webp" alt="揚安形象照" />
        </div>
        <div className="about-teaser-copy">
          <p className="kicker">ABOUT YANG AN</p>
          <h2>從教室走進鏡頭，<br />一路走進創作人生。</h2>
          <p>身為一位同志創作者，我想拍下的不只是影像，更是每個人獨特的生命片段。從櫃子裡到陽光下，我學會了用鏡頭看見更多可能。</p>
          <Link className="text-link" href={sitePath('/about/')}>進一步認識我 <span>→</span></Link>
        </div>
      </section>

      <section className="newsletter-strip" style={{ '--newsletter-image': `url(${imageUrl('couple-holding-hands-on-road-taichung-photo-by-yangan.webp')})` } as React.CSSProperties}>
        <div>
          <p className="kicker">A LETTER EVERY WEEK</p>
          <h2>訂閱揚安的<br />影像週記</h2>
          <p>每週一封信，關於影像、創作，也關於生活。</p>
          <Link className="button button-solid" href={sitePath('/newsletter/')}>免費訂閱 <span>↗</span></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
