import { Item, TranslationProps } from '@/types/Index'
import React from 'react'

const FAQ = ({ t }: TranslationProps) => {
  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("faq.title")}</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {t.raw("faq.questions").map((faq: Item, index: number) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{faq.title}</h3>
              <p>{faq.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ