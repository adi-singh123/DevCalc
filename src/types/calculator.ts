export interface CalculatorSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface CalculatorFAQ {
  question: string;
  answer: string;
}

export interface Calculator {
  slug: string;
  name: string;
  description: string;

  category:
    | "Finance"
    | "Health"
    | "Vehicle"
    | "Utility"
    | "Education";

  seo: CalculatorSEO;

  faq: CalculatorFAQ[];

  isPopular?: boolean;
}