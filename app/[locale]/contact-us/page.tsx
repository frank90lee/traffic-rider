import React from 'react';

export const runtime = "edge";

import { Metadata } from 'next'
import FeedbackForm from '@/app/components/FeedbackForm';
import Header from '@/app/components/Header';
import { LocaleProps } from '@/types/Index';
import { useTranslations } from "next-intl";
import Footer from "@/app/components/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import Breadcrumb from "@/app/components/Breadcrumb";

export async function generateStaticParams() {
  return [{ locale: 'en' }];
}

export const metadata: Metadata = {
  title: 'Contact Us - Sprunki Pyramixed Games',
  description: 'Submit your feedback and suggestions',
  robots: "noindex, nofollow"
}

export default function FeedbackPage({ params: { locale } }: LocaleProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <div className="min-h-screen flex flex-col">
      <Header t={t} showNavItems={true} />
      <div className="flex-grow max-w-3xl mx-auto p-4 w-full">
        <Breadcrumb items={[{ label: "Contact Us" }]} />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          We value your feedback. Your suggestions will help us continuously improve and provide better service.
        </p>
      </div>
      
      <div className="grid grid-cols-1">
        <div>
          <FeedbackForm />
        </div>
      </div>
      <Footer t={t} />
    </div>
  )
} 