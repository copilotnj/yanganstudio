import { AssetImage } from '../components/asset-image';
import { PageMeta } from '../components/page-meta';
import { SiteFooter } from '../components/site-footer';

const projects = [
  ['portfolio-yoga-water.webp', '瑜珈攝影｜水石間的身體雕塑', '個人寫真 · 體態紀錄', '01'],
  ['portfolio-yoga-sunset.webp', '瑜珈攝影｜夕陽光影與夜燈氛圍', '個人寫真 · 光影', '02'],
  ['portfolio-yoga-teacher.webp', '柔韌與力量的展現', '瑜珈老師寫真', '03'],
  ['portfolio-village.webp', '復古眷村裡的人像練習', '高雄 · 街頭寫真', '04'],
  ['portfolio-factory.webp', '懷舊與工業之間', '苗栗 · 場景人像', '05'],
  ['portfolio-beach.webp', '海風與身體的線條', '男體攝影 · 海邊', '06'],
  ['portfolio-park.webp', '光影交織的青春紀錄', '台中 · 中央公園', '07'],
  ['portfolio-retro.webp', '舊時光裡的青春記憶', '南投 · 中興新村', '08'],
];

export function CollectionsPage() {
  return (
    <main>
      <PageMeta
        title="作品集"
        description="揚安的人像、體態、伴侶、婚禮與生活紀實攝影作品。"
      />
      <section className="page-hero image-page-hero">
        <div>
          <p className="kicker">SELECTED STORIES · 2022—2026</p>
          <h1>作品集</h1>
          <p>把人物放回故事裡，讓每張照片都保留當時的空氣、關係與心情。</p>
        </div>
        <AssetImage name="page-header-image.webp" alt="揚安攝影作品集封面" eager />
      </section>

      <section className="portfolio-grid section-pad">
        {projects.map(([image, title, category, number], index) => (
          <article className={index % 3 === 1 ? 'portfolio-item offset' : 'portfolio-item'} key={number}>
            <div className="portfolio-image">
              <AssetImage name={image} alt={title} />
              <span>{number}</span>
            </div>
            <p>{category}</p>
            <h2>{title}</h2>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
