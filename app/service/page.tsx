import type { Metadata } from 'next';
import Link from 'next/link';
import { AssetImage } from '../components/asset-image';
import { SiteFooter } from '../components/site-footer';
import { sitePath } from '../lib/site';

export const metadata: Metadata = {
  title: '攝影服務',
  description: '人像寫真、同志婚禮、家庭紀實與品牌影音服務。',
};

const serviceTypes = [
  {
    image: 'service-personal-portrait.webp',
    number: '01',
    title: '個人寫真與體態紀錄',
    text: '適合想為自己留下樣子的你。無論是體態、生日、人生轉折，都是一場關於認識自己的拍攝旅程。',
  },
  {
    image: 'service-couple-wedding.webp',
    number: '02',
    title: '伴侶與婚禮攝影',
    text: '適合想拍下彼此日常、紀念相愛歷程的伴侶。從求婚、結婚到週年，留下屬於你們的默契。',
  },
  {
    image: 'service-family-lifestyle.webp',
    number: '03',
    title: '家庭與紀實影像',
    text: '記錄全家福、家庭日常與親子相處時光，讓自然發生的笑聲與擁抱被柔和地保存。',
  },
];

const faqs = [
  ['還沒確定拍攝，可以詢問嗎？', '當然可以。如果你還在考慮時間、預算或形式，很歡迎先來聊聊，一段對話常常就能釐清想法。'],
  ['沒有經驗也可以拍攝嗎？', '可以。拍攝前會一起討論期待的感覺，現場也會提供姿勢與互動引導，你只需要放心做自己。'],
  ['我的作品會被公開嗎？', '所有公開使用都會事先取得你的同意。若希望全程保密，也會完整尊重你的選擇。'],
  ['可以在家裡或指定地點拍攝嗎？', '可以。台中為主要服務地區，也接受全台拍攝；交通與場地費會在確認前說明清楚。'],
  ['照片會全給嗎？', '每個方案的成品數量不同，會交付經過色調與細節整理的高畫質檔案，洽詢時會提供完整規格。'],
];

export default function ServicePage() {
  return (
    <main>
      <section className="page-hero service-page-hero">
        <p className="kicker">SERVICES · PHOTOGRAPHY & FILM</p>
        <h1>每個階段的你，<br />都值得一張好好記錄的照片。</h1>
        <p>無論是身體的改變、一段感情的紀錄，還是品牌的起點，我會用影像替你留下這一刻的故事。</p>
      </section>

      <section className="service-list-page section-pad">
        {serviceTypes.map((service) => (
          <article key={service.number}>
            <AssetImage name={service.image} alt={service.title} />
            <div>
              <small>{service.number}</small>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <Link className="text-link" href={sitePath('/contact/')}>詢問這項服務 <span>→</span></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="video-service section-pad">
        <div>
          <p className="kicker">BRAND STORYTELLING</p>
          <h2>為品牌量身打造的影像服務</h2>
          <p>產品介紹、品牌開場片、社群短影音，從企劃到後製，讓品牌的價值被清楚看見。</p>
        </div>
        <div className="video-service-cards">
          <article><span>01</span><h3>品牌形象影片</h3><p>講述品牌故事、理念與人物視角，打造有溫度、有記憶點的專屬影片。</p></article>
          <article><span>02</span><h3>社群短影音</h3><p>專為 Reels 與 Shorts 設計的吸睛影片，節奏流暢、易於分享。</p></article>
          <article><span>03</span><h3>產品業配合作</h3><p>腳本設計、現場拍攝與後製一次完成，精準呈現商品特色。</p></article>
        </div>
      </section>

      <section className="process-section section-pad">
        <header className="section-title split-title">
          <h2>影像的故事，<br />從一句對話開始。</h2>
          <p>一個清楚、安心的合作流程，讓注意力回到你真正想留下的畫面。</p>
        </header>
        <AssetImage name="service-process.webp" alt="揚安攝影服務五步驟" />
      </section>

      <section className="faq-section section-pad">
        <p className="kicker">BEFORE WE BEGIN</p>
        <h2>常見問題</h2>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>0{index + 1}</span>{question}<i>＋</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
