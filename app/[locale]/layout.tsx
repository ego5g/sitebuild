
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({children, params: {locale}}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>
        <NextIntlClientProvider 
          messages={{
            // Передаем только необходимые для клиента пространства имен
            Navigation: messages.Navigation,
            HomePage: messages.HomePage,
            Footer: messages.Footer,
            NotFound: messages.NotFound,
          }}
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
