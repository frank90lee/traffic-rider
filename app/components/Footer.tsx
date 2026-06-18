import { LinkItem, TranslationProps } from '@/types/Index'
import React from 'react'

const Footer = ({ t }: TranslationProps) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 font-sans font-black text-xl">R</span>
                {t("footer.title")}
              </h2>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">{t("footer.sections.guides.title")}</h3>
            <ul className="space-y-4 text-sm">
              {t.raw("footer.sections.guides.items").map((item: LinkItem, index: number) => (
                <li key={index}>
                  <a href={item.link} className="hover:text-cyan-400 transition-colors">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">{t("footer.sections.legal.title")}</h3>
            <ul className="space-y-4 text-sm">
              {t.raw("footer.sections.legal.items").map((item: LinkItem, index: number) => (
                <li key={index}>
                  <a href={item.link} className="hover:text-cyan-400 transition-colors">{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Language selection hidden as requested */}
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer