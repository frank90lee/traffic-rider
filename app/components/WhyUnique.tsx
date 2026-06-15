import { Item, TranslationProps } from '@/types/Index'
import React from 'react'

const WhyUnique = ({ t }: TranslationProps) => {
  return (
    <section id="why-unique" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("whyUnique.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.raw("whyUnique.items").map((item: Item, index: number) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUnique
