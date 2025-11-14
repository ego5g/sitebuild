'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../navigation';
import {
    LandingPageIcon,
    CorporateIcon,
    EcommerceIcon,
    PromoIcon,
    WebPortalIcon,
    WebAppIcon,
    RedesignIcon,
    SeoIcon
} from '../../../components/ServiceIcons';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    'Сайт-визитка / Лендинг': LandingPageIcon,
    'Landing Page': LandingPageIcon,
    'სავიზიტო ბარათი / ლენდინგი': LandingPageIcon,
    'Корпоративный сайт': CorporateIcon,
    'Corporate Website': CorporateIcon,
    'კორპორატიული საიტი': CorporateIcon,
    'Интернет-магазин': EcommerceIcon,
    'E-commerce Store': EcommerceIcon,
    'ინტერნეტ-მაღაზია': EcommerceIcon,
    'Промо-сайт': PromoIcon,
    'Promo Website': PromoIcon,
    'პრომო-საიტი': PromoIcon,
    'Веб-портал': WebPortalIcon,
    'Web Portal': WebPortalIcon,
    'ვებ-პორტალი': WebPortalIcon,
    'Веб-приложение': WebAppIcon,
    'Web Application': WebAppIcon,
    'ვებ-აპლიკაცია': WebAppIcon,
    'Редизайн и поддержка': RedesignIcon,
    'Redesign and Support': RedesignIcon,
    'რედიზაინი და მხარდაჭერა': RedesignIcon,
    'SEO-продвижение': SeoIcon,
    'SEO Promotion': SeoIcon,
    'SEO-პოპულარიზაცია': SeoIcon,
};

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const services = t.raw('list') as { title: string; description: string; price: string }[];

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

      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
            const Icon = iconMap[service.title] || LandingPageIcon; // Fallback to a default icon
            return(
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col rounded-2xl bg-slate-900 border border-slate-800 shadow-lg hover:shadow-purple-500/20 hover:border-purple-600 transition-all duration-300 group">
            
            <div className="p-8 flex-grow">
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-slate-800 group-hover:bg-purple-600 rounded-full transition-colors duration-300">
                    <Icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 h-14">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-400 flex-grow">{service.description}</p>
            </div>

            <div className="px-8 pb-8">
                <p className="text-2xl font-bold text-white">{service.price}</p>
                <Link href="/contact" className="mt-6 block w-full text-center rounded-md px-6 py-3 text-base font-medium bg-slate-800 text-slate-200 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                    {t('button')}
                </Link>
            </div>
          </motion.div>
        )})}
      </div>
    </div>
  );
}
