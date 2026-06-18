import Footer from "@/app/components/Footer";
import Game from "@/app/components/Game";
import Header from "@/app/components/Header";
import { getPostData } from "@/lib/posts";
import { LocaleProps, PageContentProps } from "@/types/Index";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export const runtime = 'edge';

import ShareButtons from "@/app/components/ShareButtons";
import * as LucideIcons from "lucide-react";
import GameLinks from "../components/GameLinks";

export async function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params: { locale },
}: LocaleProps): Promise<Metadata> {
  const postData = await getPostData(locale, "traffic-rider");
  const canonicalLocale = locale === "en" ? "" : `/${locale}`;
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://traffic-rider.org/"),
    title: postData.title,
    description: postData.description,
    alternates: {
      canonical: `${canonicalLocale}/`,
    },
  };
}

function PageContent({ postData, locale }: PageContentProps) {
  const index = useTranslations("Index");
  const title = postData.title;
  const name = postData.name || postData.title;
  
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header t={index} showNavItems={false} />
      <main className="max-w-7xl mx-auto p-4 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            {/* Hero Game Card */}
            <div id="play" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {postData.gameSrc && (
                <div className="aspect-video w-full bg-black">
                  <Game 
                    src={postData.gameSrc} 
                    title={name} 
                  />
                </div>
              )}
              <div className="p-4 md:p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <LucideIcons.Zap className="text-cyan-600" size={24} />
                  <span className="text-2xl font-bold text-slate-900">{name}</span>
                </div>
                <ShareButtons url={process.env.NEXT_PUBLIC_SITE_URL || "https://traffic-rider.org/"} title={title} />
              </div>
            </div>

            {/* Main Content Area */}
            <div id="strategies" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200">
              <article
                className="prose max-w-none prose-slate prose-lg prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-cyan-600 prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-li:text-slate-700"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>

            {/* Features Module */}
            {postData.features && postData.features.length > 0 && (
              <div id="bikes" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {postData.features.map((feature, idx) => {
                  const iconName = feature.icon as keyof typeof LucideIcons;
                  const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;
                  return (
                    <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-cyan-200 transition-colors">
                      <div className="flex items-start gap-4">
                        {Icon && (
                          <div className="p-2.5 bg-cyan-50 rounded-lg text-cyan-600">
                            <Icon size={20} />
                          </div>
                        )}
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 mb-1.5">{feature.title}</h2>
                          <p className="text-base text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Steps Module */}
            {postData.steps && postData.steps.length > 0 && (
              <div id="steps" className="space-y-6">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
                  <LucideIcons.ListChecks className="text-cyan-600" />
                  <h2 className="text-xl font-bold">Quick Start Guide</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {postData.steps.map((step, idx) => (
                    <div key={idx} className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl font-black text-slate-900">{idx + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 relative z-10 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 bg-cyan-600 text-white text-xs rounded-full">
                          {idx + 1}
                        </span>
                        {step.title}
                      </h3>
                      <ul className="space-y-4 relative z-10">
                        {step.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-base text-slate-700 flex items-start gap-3">
                            <LucideIcons.CheckCircle2 className="text-green-500 mt-1 shrink-0" size={18} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Module */}
            {postData.faq && postData.faq.length > 0 && (
              <>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": postData.faq.map((item) => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": item.answer,
                        },
                      })),
                    }),
                  }}
                />
                <div id="faq" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-slate-900">
                    <LucideIcons.HelpCircle className="text-cyan-600" size={28} />
                    <h2 className="text-2xl font-bold">Traffic Rider FAQ</h2>
                  </div>
                  <div className="space-y-6">
                    {postData.faq.map((item, idx) => (
                      <div key={idx} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                          <span className="text-cyan-600 shrink-0">Q:</span>
                          {item.question}
                        </h3>
                        <p className="text-base text-slate-600 pl-8 relative leading-relaxed">
                          <span className="absolute left-0 text-slate-400 font-bold">A:</span>
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center gap-2 mb-4 font-bold text-slate-900">
                <LucideIcons.Flame className="text-cyan-600" size={20} />
                <h3>Other Rider Games</h3>
              </div>
              <GameLinks locale={locale} excludeId="traffic-rider" />
              
              {/* <div className="mt-8">
                <div className="flex items-center gap-2 mb-4 font-bold text-slate-900">
                  <LucideIcons.MessageSquare className="text-cyan-600" size={20} />
                  <h3>Community</h3>
                </div>
                <GitalkComponent title={name} id="traffic-rider-home" />
              </div> */}
            </div>
          </aside>
        </div>
      </main>
      <Footer t={index} />
    </div>
  );
}

export default async function Page({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const postData = await getPostData(locale, "traffic-rider");
  return <PageContent postData={postData} locale={locale} />;
}
