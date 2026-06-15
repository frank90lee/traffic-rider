import { useTranslations } from "next-intl";

export interface TranslationProps {
  t: ReturnType<typeof useTranslations>;
}

export interface LocaleProps {
  params: {
    locale: string;
  };
}

export interface Item {
  title: string;
  description: string;
}

export interface MenuItem {
  id: string;
  title: string;
  link: string;
}

export interface Review {
  rating: string;
  author: string;
  text: string;
}

export interface VideoItem {
  id: string;
  title: string;
}

export interface LinkItem {
  link: string;
  title: string;
}

export interface PostData {
  slug: string;
  name?: string;
  title: string;
  description: string;
  contentHtml: string;
  gameSrc?: string;
  features?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  tags?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
  steps?: {
    title: string;
    items: string[];
  }[];
}

export interface PageContentProps {
  postData: PostData;
  locale: string;
}
