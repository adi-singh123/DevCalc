export interface Calculator {
  slug: string;

  name: string;

  description: string;

  category: string;

  isPopular?: boolean;

  seo: {
    title: string;
    description: string;
    keywords: string[];
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