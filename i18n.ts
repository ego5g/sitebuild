import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// A list of all locales that are supported
const locales = ['en', 'ru', 'ka'];
 
export default getRequestConfig(async (params) => {
  const locale = params.locale;
 
  // Validate that the incoming `locale` parameter is one of the supported ones
  if (locales.indexOf(locale) === -1) {
    // If the locale is not supported, trigger a 404 page. 
    // This function throws an error, so the code below will not execute.
    notFound();
  }
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});