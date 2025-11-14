import {NextIntlClientProvider, useMessages} from 'next-intl';
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({
  children, 
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Using useMessages() is a good practice to grab all messages.
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
       <head>
        <title>WebBuildGE - Creating websites in Georgia</title>
        <meta name="description" content="Development of modern websites on Next.js. We turn your ideas into digital solutions that attract customers and grow your business in Georgia." />
        <meta name="keywords" content="website development Georgia, create website Georgia, Next.js development, web applications, landing pages, e-commerce, SEO"/>
        <meta property="og:title" content="WebBuildGE - Creating websites in Georgia" />
        <meta property="og:description" content="Development of modern websites on Next.js. We turn your ideas into digital solutions that attract customers and grow your business in Georgia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webbuildge.com/" />
        {/* Add an og:image later when you have one */}
        {/* <meta property="og:image" content="/og-image.jpg" /> */}

        <link rel="canonical" href={`https://www.webbuildge.com/${locale}`} />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
