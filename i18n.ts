
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const messages = {
  en: () => import('./messages/en.json').then((module) => module.default),
  ru: () => import('./messages/ru.json').then((module) => module.default),
  ka: () => import('./messages/ka.json').then((module) => module.default),
};

export default getRequestConfig(async ({locale}) => {
  if (!messages.hasOwnProperty(locale)) {
    return notFound();
  }

  return {
    messages: await messages[locale as keyof typeof messages](),
  };
});
