
import {useTranslations} from 'next-intl';

export default function Portfolio() {
  const t = useTranslations('Navigation');

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{t('portfolio')}</h1>
    </div>
  );
}
