'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
        const paths = pathname.split('/');
        const currentPath = paths[paths.length - 1];
        router.push(`/${newLocale}/${currentPath}`);
    });
  };

  return (
    <select 
      value={locale} 
      onChange={(e) => switchLanguage(e.target.value)}
      className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded transition duration-300 cursor-pointer appearance-none"
      style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
      disabled={isPending}
    >
      <option value="en" className="bg-white text-gray-700">English</option>
      {/* <option value="zh" className="bg-white text-gray-700">中文</option> */}
      <option value="es" className="bg-white text-gray-700">Español</option>
      {/* <option value="hi" className="bg-white text-gray-700">हिन्दी</option>
      <option value="ja" className="bg-white text-gray-700">日本語</option>
      <option value="ko" className="bg-white text-gray-700">한국어</option> */}
    </select>
  );
}
