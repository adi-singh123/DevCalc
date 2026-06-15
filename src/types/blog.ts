export interface BlogSection {
  heading: string;

  paragraphs: string[];
}

export interface BlogFaq {
  question: string;

  answer: string;
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

  content: BlogSection[];

  faqs: BlogFaq[];
}