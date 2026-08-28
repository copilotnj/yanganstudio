'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const services = data.getAll('service').join('、') || '尚未確定';
    const body = [
      `名稱：${data.get('name')}`,
      `信箱：${data.get('email')}`,
      `感興趣的服務：${services}`,
      `預計日期：${data.get('date') || '尚未確定'}`,
      `預計地點：${data.get('place') || '尚未確定'}`,
      '',
      String(data.get('message') || ''),
    ].join('\n');

    setStatus('已為你整理好信件，正在開啟郵件程式。');
    window.location.href = `mailto:yangan@yanganstudio.com?subject=${encodeURIComponent('攝影合作洽詢')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>名稱 *<input name="name" required placeholder="本名或綽號都可以" /></label>
        <label>信箱 *<input type="email" name="email" required placeholder="your@email.com" /></label>
      </div>
      <fieldset>
        <legend>你感興趣的服務</legend>
        {['個人寫真與體態紀錄', '伴侶與婚禮攝影', '家庭與生活紀實', '品牌影像與短影片', '其他合作'].map((service) => (
          <label className="check-label" key={service}><input type="checkbox" name="service" value={service} /><span>{service}</span></label>
        ))}
      </fieldset>
      <div className="form-row">
        <label>預計拍攝日期<input name="date" placeholder="不確定可填大約月份" /></label>
        <label>預計拍攝地點<input name="place" placeholder="地區或場地都可以" /></label>
      </div>
      <label>想說的話或其他問題 *<textarea name="message" required rows={7} placeholder="把你的想法、期待或疑問寫在這裡" /></label>
      <button className="button button-solid" type="submit">寄信詢問揚安 <span>↗</span></button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
