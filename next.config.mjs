import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,  // 强制所有页面使用尾部斜杠
    output: 'standalone', // 兼容 Cloudflare 等 serverless 环境
    headers: async () => {
      return [
        {
          source: '/games/:path*',
          headers: [
            {
              key: 'Content-Type',
              value: 'text/html',
            },
          ],
        },
      ]
    },
  }

export default withNextIntl(nextConfig);
