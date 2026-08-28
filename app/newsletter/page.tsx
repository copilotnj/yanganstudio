import type { Metadata } from 'next';
import { AssetImage } from '../components/asset-image';
import { NewsletterForm } from '../components/newsletter-form';
import { SiteFooter } from '../components/site-footer';

export const metadata: Metadata = {
  title: '揚安的影像週記',
  description: '一週一封，寫下影像裡的片段、拍攝技巧與生活心情。',
};

export default function NewsletterPage() {
  return (
    <main>
      <section className="newsletter-page">
        <div className="newsletter-page-copy">
          <p className="kicker">A WEEKLY LETTER ABOUT IMAGES & LIFE</p>
          <h1>寫影像，<br />也寫生活背後的風景。</h1>
          <h2>揚安的影像週記</h2>
          <p>一週一封，寫下影像裡的片段與心情。我會記錄創作背後的故事、拍攝時的小技巧，還有生活中那些值得回頭看的時刻。</p>
          <p>喜歡創作或正在走自己路的你，歡迎每週來坐坐。</p>
          <NewsletterForm />
        </div>
        <AssetImage name="yangan-newsletter-cover.webp" alt="攝影師揚安於健身房中自拍，展現創作與生活融合的樣貌" eager />
      </section>
      <SiteFooter />
    </main>
  );
}
