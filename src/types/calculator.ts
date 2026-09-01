export interface Calculator {
  slug: string;

  name: string;

  description: string;

  category: string;

  isPopular?: boolean;
  compareWith?: string[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  seoContent?: string;

  editorialIntro?: string;

  benchmarkContext?: {
    title: string;
    badge: string;
    stat: string;
    description: string;
    source: string;
    lastUpdated: string;
  };

  steps: {
    step: number;
    title: string;
    description: string;
    icon: string;
  }[];

  formula: {
    title: string;
    formula: string;
    explanation: string;

    example?: {
      input: string;
      output: string;
    };

    useCases?: string[];
  };

  faqs: {
    question: string;
    answer: string;
  }[];
}