export interface BlogTable {
  headers: string[];
  rows: string[][];
}

export interface BlogSection {
  heading: string;

  paragraphs: string[];

  points?: string[];

  table?: BlogTable;

  image?: {
    src: string;
    alt: string;
    caption?: string;
  };

  code?: {
    language: string;
    content: string;
    caption?: string;
  };
}

export interface BlogFaq {
  question: string;

  answer: string;
}

export interface BlogSource {
  title: string;
  url: string;
  publisher: string;
  publishedDate?: string;
}

export interface Blog {
  slug: string;

  title: string;

  seoTitle: string;

  seoDescription: string;

  description: string;

  category: string;

  author: string;

  publishedDate: string;

  readingTime: string;

  image: string;

  imageAlt?: string;

  keywords?: string[];

  lastVerified?: string;

  effectiveDate?: string;

  sources?: BlogSource[];

  relatedCalculatorSlugs?: string[];

  content: BlogSection[];

  faqs: BlogFaq[];
}
