import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'ru', 'ka'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed'
});
 
export const config = {
  matcher: [
    // Исключаем Next.js internals и static файлы
    '/((?!_next|api|.*\\..*|favicon|robots|sitemap|apple-touch-icon).*)',
  ]
};