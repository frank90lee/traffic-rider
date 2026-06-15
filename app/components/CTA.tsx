import React from "react";
import { TranslationProps } from "@/types/Index";

const CTA = ({ t }: TranslationProps) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t("cta.title")}
        </h2>
        <p className="text-xl mb-12 text-gray-300">{t("cta.description")}</p>
        <a href="#play">
          <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity">
            {t("cta.button")}
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
