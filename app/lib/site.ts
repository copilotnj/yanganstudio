export const navItems = [
  { href: '/collections/', label: '作品集總覽' },
  { href: '/service/', label: '攝影服務' },
  { href: '/blog/', label: '攝影專欄' },
  { href: '/contact/', label: '聯絡我' },
  { href: '/newsletter/', label: '訂閱電子報' },
  { href: '/about/', label: '關於揚安' },
];

export const socialLinks = [
  { href: 'https://www.facebook.com/yanganstudio', label: 'Facebook' },
  { href: 'https://www.instagram.com/yangan.liu/', label: 'Instagram' },
  { href: 'https://www.youtube.com/channel/UCiCnfNSkqxTtLrSAkm60bqg', label: 'YouTube' },
  { href: 'mailto:sniper7685@hotmail.com', label: 'Email' },
  { href: '/', label: 'WordPress' },
];

export function sitePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${base}${path}`;
}

export function imageUrl(name: string) {
  return sitePath(`/media/${name}`);
}
