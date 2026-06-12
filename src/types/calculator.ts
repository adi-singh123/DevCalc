export interface Calculator {
  slug: string;
  name: string;
  description: string;

  category: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  faqKey: string;
  contentKey: string;

  isPopular?: boolean;
}