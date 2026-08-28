import { FaEnvelope, FaFacebookF, FaInstagram, FaWordpress, FaYoutube } from 'react-icons/fa6';

export function SocialIcon({ label }: { label: string }) {
  if (label === 'Facebook') return <FaFacebookF aria-hidden="true" />;
  if (label === 'Instagram') return <FaInstagram aria-hidden="true" />;
  if (label === 'YouTube') return <FaYoutube aria-hidden="true" />;
  if (label === 'Email') return <FaEnvelope aria-hidden="true" />;
  if (label === 'WordPress') return <FaWordpress aria-hidden="true" />;
  return null;
}
