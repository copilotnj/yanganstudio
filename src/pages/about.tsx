import { Link } from 'react-router-dom';
import { AssetImage } from '../components/asset-image';
import { PageMeta } from '../components/page-meta';
import { SiteFooter } from '../components/site-footer';

export function AboutPage() {
  return (
    <main>
      <PageMeta
        title="關於揚安"
        description="從物理老師到攝影創作者，認識台中攝影師揚安。"
      />
      <section className="about-hero section-pad">
        <div>
          <p className="kicker">ABOUT YANG AN</p>
          <h1>從黑板到鏡頭，<br />這是一段找回自我的旅程。</h1>
          <p>我是揚安，曾是十多年教書的物理老師，後來選擇踏上創作這條路。</p>
        </div>
        <blockquote>「我的鏡頭，不是為了讓你成為誰，而是幫你記住你就是誰。」</blockquote>
      </section>

      <section className="about-story section-pad">
        <AssetImage name="yangan-travel-photographer-hokkaido.webp" alt="揚安站在北海道雪景中，肩上掛著相機" eager />
        <article>
          <p className="kicker">01 · THE WAY I SEE</p>
          <h2>從世界的風景裡，看見創作的靈感</h2>
          <p>我喜歡觀察人的神情與故事。那些笑容、沉思與互動，總讓我想按下快門，把當下留住。旅行對我來說，不只是放鬆，更是觀察與記錄的過程。</p>
          <p>作為一位同志創作者，我更能理解那種「不想被定義、但想被好好看見」的渴望。</p>
        </article>
      </section>

      <section className="about-life section-pad">
        <div className="about-life-copy">
          <p className="kicker">02 · OUTSIDE THE FRAME</p>
          <h2>健身、吉他、日文，<br />還有兩隻貓。</h2>
          <p>工作之外，我喜歡重訓、彈吉他，也享受接觸日本文化。這些習慣為日子帶來節奏，也讓我與自己靠得更近。</p>
          <p>我和伴侶一起生活、旅行，也一起錄 Podcast 分享創作與人生。真實相處的每一天，成為我理解愛、記錄愛的養分。</p>
        </div>
        <div className="about-life-images">
          <AssetImage name="yangan-lifestyle-fitness-catlover.webp" alt="揚安與貓的生活照" />
          <AssetImage name="yangan-gay-couple-wedding-portrait.webp" alt="揚安與伴侶的結婚人像" />
        </div>
      </section>

      <section className="about-closing section-pad">
        <AssetImage name="yangan-photographer-taipei-street-shooting.webp" alt="揚安在街頭專注拍攝" />
        <div>
          <p className="kicker">YOUR STORY, HONESTLY TOLD</p>
          <h2>每個故事都值得被記錄，而我想為你留下這一刻。</h2>
          <p>不管是關係中的某一天、人生的轉折點，還是你此刻的樣子，都值得被真誠地看見、被好好記住。</p>
          <Link className="button button-solid" to="/contact/">預約拍攝 <span>↗</span></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
