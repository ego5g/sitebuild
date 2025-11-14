import { useTranslations } from 'next-intl';
import { Link } from '../../navigation';

// Иконки для карточек услуг. В реальном проекте их лучше вынести в отдельные компоненты.
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function Home() {
  const t = useTranslations('HomePage');
  const services = [
    { 
      icon: <CodeIcon className="w-8 h-8 mb-4 text-purple-400" />,
      title: t('services.development.title'),
      description: t('services.development.description')
    },
    {
      icon: <LayersIcon className="w-8 h-8 mb-4 text-pink-400" />,
      title: t('services.design.title'),
      description: t('services.design.description')
    },
    {
      icon: <SearchIcon className="w-8 h-8 mb-4 text-sky-400" />,
      title: t('services.seo.title'),
      description: t('services.seo.description')
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center">
      
      {/* Hero Section */}
      <section className="w-full text-center py-20 sm:py-28 lg:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-balance">
            {t('hero.line1')}
            <span className="gradient-text"> {t('hero.gradientText')} </span>
            {t('hero.line2')}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-purple-700">
              {t('hero.ctaButton')}
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-800">
              {t('hero.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-slate-900 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('services.title')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-400">{t('services.subtitle')}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-800 bg-slate-800/50 p-6 sm:p-8 shadow-lg transform transition-transform hover:-translate-y-2">
                {service.icon}
                <h3 className="text-xl font-bold text-slate-100">{service.title}</h3>
                <p className="mt-2 text-base text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="w-full py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">{t('cta.title')}</h2>
           <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300">{t('cta.subtitle')}</p>
           <div className="mt-8">
             <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-pink-700">
                {t('cta.button')}
             </Link>
           </div>
        </div>
      </section>

    </main>
  );
}
