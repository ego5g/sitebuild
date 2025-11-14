import { useTranslations } from 'next-intl';
import { Link } from '../../../navigation';

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function PricesPage() {
  const t = useTranslations('PricesPage');

  const plans = [
    {
      name: t('plans.basic.title'),
      price: t('plans.basic.price'),
      description: t('plans.basic.description'),
      features: t.raw('plans.basic.features'),
      buttonText: t('plans.basic.button'),
      isPopular: false,
    },
    {
      name: t('plans.standard.title'),
      price: t('plans.standard.price'),
      description: t('plans.standard.description'),
      features: t.raw('plans.standard.features'),
      buttonText: t('plans.standard.button'),
      isPopular: true,
    },
    {
      name: t('plans.premium.title'),
      price: t('plans.premium.price'),
      description: t('plans.premium.description'),
      features: t.raw('plans.premium.features'),
      buttonText: t('plans.premium.button'),
      isPopular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text">
          {t('title')}
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          {t('subtitle')}
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3 items-center">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`rounded-2xl border ${plan.isPopular ? 'border-purple-600 shadow-purple-500/20' : 'border-slate-800'} bg-slate-900 p-8 shadow-lg transform transition-all duration-300 ${plan.isPopular ? 'scale-105' : 'hover:scale-105'}`}>
            
            {plan.isPopular && (
                <div className="absolute top-0 right-8 -mt-4">
                    <div className="inline-flex items-center text-xs tracking-wider font-semibold uppercase px-3 py-1 bg-purple-600 text-white rounded-full">
                        Популярный
                    </div>
                </div>
            )}

            <h3 className="text-2xl font-bold text-slate-100">{plan.name}</h3>
            <p className="mt-2 text-base text-slate-400">{plan.description}</p>
            <p className="mt-6 text-4xl font-extrabold text-white">{plan.price}</p>
            
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature: string) => (
                <li key={feature} className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className={`mt-10 block w-full text-center rounded-md px-6 py-3 text-base font-medium transition-colors ${plan.isPopular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}>
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center border-t border-slate-800 pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">{t('custom.title')}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">{t('custom.subtitle')}</p>
        <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-pink-700">
                {t('custom.button')}
            </Link>
        </div>
      </div>
    </div>
  );
}
