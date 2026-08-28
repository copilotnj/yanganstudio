import { FormEvent, useState } from 'react';

export function NewsletterForm() {
  const [status, setStatus] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `稱呼：${data.get('name') || '未填寫'}\n訂閱信箱：${data.get('email')}`;
    setStatus('已為你準備好訂閱信件，正在開啟郵件程式。');
    window.location.href = `mailto:yangan@yanganstudio.com?subject=${encodeURIComponent('訂閱揚安的影像週記')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label>EMAIL ADDRESS<input required type="email" name="email" placeholder="你的信箱" /></label>
      <label>HOW SHOULD I CALL YOU?<input name="name" placeholder="你的稱呼（選填）" /></label>
      <button className="button button-solid" type="submit">免費訂閱電子報 <span>↗</span></button>
      <p aria-live="polite">{status}</p>
    </form>
  );
}
