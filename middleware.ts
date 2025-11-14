
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'ru', 'ka'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed'
});
 
export const config = {
  matcher: ['/', '/(ru|en|ka)/:path*']
};
