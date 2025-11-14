
'use client';

import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage.hero');

  return (
    <section className="hero bg-primary text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl mb-8">{t('subtitle')}</p>
        <div>
          <a href="/services" className="btn btn-light mx-2">{t('orderButton')}</a>
          <a href="/portfolio" className="btn btn-outline-light mx-2">{t('portfolioButton')}</a>
        </div>
      </div>
    </section>
  );
}
