import { Link } from 'react-router-dom';
import { sitePath, socialLinks } from '../lib/site';
import { SocialIcon } from './social-icon';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="kicker">READY WHEN YOU ARE</p>
        <h2>把此刻，好好留下。</h2>
        <Link className="button button-light" to="/contact/">開始聊聊 <span>↗</span></Link>
      </div>
      <div className="footer-meta">
        <Link className="footer-brand" to="/">YANG AN<br />STUDIO</Link>
        <div>
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href.startsWith('/') ? sitePath(item.href) : item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <SocialIcon label={item.label} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <p>台中 · 全台拍攝<br />© 2026 Yang An Liu</p>
      </div>
    </footer>
  );
}
