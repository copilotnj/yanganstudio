import type { Metadata } from 'next';
import { AssetImage } from '../components/asset-image';
import { SiteFooter } from '../components/site-footer';

export const metadata: Metadata = {
  title: '攝影專欄',
  description: '攝影觀念、拍攝技巧、光影運用與器材分享。',
};

const posts = [
  ['blog-iphone-pet.webp', '拍攝實戰', '2026.08.25', 'iPhone 拍寵物的 6 個技巧', '蹲低、2 倍鏡、連拍與曝光補償，不用買相機也能把毛孩拍得更好。'],
  ['blog-fireworks.webp', '拍攝實戰', '2026.08.17', '煙火拍攝全攻略', '相機設定、構圖與手機拍法一次講清楚，先看懂煙火的節奏。'],
  ['blog-hard-soft-light.webp', '光影運用', '2026.06.16', '搞懂硬光與柔光', '別再把光線強弱與影子銳利度混為一談，從光源大小開始理解。'],
  ['blog-bounce-flash.webp', '器材討論', '2026.06.02', '閃光燈跳燈教學', '改善直打死白，新手也能掌握自然的室內補光與 TTL 設定。'],
  ['blog-buy-camera.webp', '攝影觀念', '2026.05.20', '你真的需要買相機嗎？', '在下單之前，先用六個問題確認相機會不會真正改變你的創作。'],
  ['blog-blurry-photos.webp', '拍攝實戰', '2026.05.08', '照片不清楚，不一定是手震', '對焦、快門、景深與空氣感，找出模糊照片背後真正的原因。'],
];

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero journal-hero">
        <p className="kicker">JOURNAL · PHOTOGRAPHY & LIFE</p>
        <h1>攝影專欄</h1>
        <p>把拍攝現場的經驗、影像觀念與生活裡的靈感，整理成可以慢慢讀的文字。</p>
      </section>

      <section className="journal-grid section-pad">
        {posts.map(([image, category, date, title, excerpt], index) => (
          <article className={index === 0 ? 'journal-card featured' : 'journal-card'} key={title}>
            <AssetImage name={image} alt={title} />
            <div className="journal-meta"><span>{category}</span><time>{date}</time></div>
            <h2>{title}</h2>
            <p>{excerpt}</p>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
