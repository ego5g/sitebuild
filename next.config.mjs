
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Temporarily disable Strict Mode for debugging
    swcMinify: true, // Ensure SWC minification is enabled for performance
};
 
export default withNextIntl(nextConfig);
