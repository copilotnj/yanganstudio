import type { Metadata } from 'next';
import { SiteHeader } from './components/site-header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yanganstudio.com'),
  title: {
    default: '揚安在這｜人像攝影與創作基地',
    template: '%s｜揚安在這',
  },
  description: '為 LGBTQ+ 族群與每一個走自己路的人，拍下溫柔的影像。台中人像、同志婚禮、家庭紀實與品牌影像。',
  icons: { icon: '/media/logo-colored.png' },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    title: '揚安在這｜每個人，都值得被真實地看見',
    description: '為 LGBTQ+ 族群與每一個走自己路的人，拍下溫柔的影像。',
    images: [{ url: '/media/og.png', width: 1200, height: 630, alt: '揚安在這' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '揚安在這｜每個人，都值得被真實地看見',
    description: '為 LGBTQ+ 族群與每一個走自己路的人，拍下溫柔的影像。',
    images: ['/media/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
