
'use client';

import {useTranslations} from 'next-intl';
import {Link} from '../../navigation';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-8">{t('description')}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        {t('goHome')}
      </Link>
    </div>
  );
}
