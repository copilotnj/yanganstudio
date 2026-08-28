'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { imageUrl, navItems, sitePath, socialLinks } from '../lib/site';
import { SocialIcon } from './social-icon';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label="開啟主選單"
        onClick={() => setOpen(true)}
      >
        <span className="hamburger" aria-hidden="true"><i /><i /><i /></span>
      </button>

      <Link className="brand" href={sitePath('/')} onClick={() => setOpen(false)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl('logo-colored.png')} alt="揚安在這｜人像攝影與創作基地" />
      </Link>

      <nav id="primary-navigation" className={open ? 'nav-panel is-open' : 'nav-panel'} aria-label="主要導覽">
        <Link className="drawer-brand" href={sitePath('/')} onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl('logo-colored.png')} alt="揚安在這｜人像攝影與創作基地" />
        </Link>
        <span className="drawer-rule" aria-hidden="true" />
        <div className="nav-actions">
          <div className="nav-socials">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href.startsWith('/') ? sitePath(item.href) : item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={item.label}>
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
        </div>
        <div className="nav-primary">
          {navItems.map((item) => (
            <Link key={item.href} href={sitePath(item.href)} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <button
        className={open ? 'menu-backdrop is-open' : 'menu-backdrop'}
        type="button"
        aria-label="關閉主選單"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
      <button
        className={open ? 'drawer-close is-open' : 'drawer-close'}
        type="button"
        aria-label="關閉主選單"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      >
        <span aria-hidden="true">×</span>
      </button>
    </header>
  );
}
