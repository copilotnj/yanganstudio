import { ContactForm } from '../components/contact-form';
import { PageMeta } from '../components/page-meta';
import { SiteFooter } from '../components/site-footer';

export function ContactPage() {
  return (
    <main>
      <PageMeta
        title="聯絡揚安"
        description="預約人像、婚禮、家庭或品牌影像拍攝。"
      />
      <section className="contact-page section-pad">
        <header>
          <p className="kicker">LET’S START A CONVERSATION</p>
          <h1>寫信給我，<br />讓我們開始討論這段影像旅程。</h1>
          <p>無論你已經有完整想法，或還在猶豫怎麼開始，都可以寫下來。我會在 1～3 個工作天內親自回覆。</p>
          <div className="contact-direct">
            <span>DIRECT CONTACT</span>
            <a href="mailto:yangan@yanganstudio.com">yangan@yanganstudio.com</a>
            <a href="https://instagram.com/yangan.liu" target="_blank" rel="noreferrer">Instagram @yangan.liu</a>
          </div>
        </header>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
