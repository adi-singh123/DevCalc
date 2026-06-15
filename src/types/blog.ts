export interface BlogSection {
  heading: string;

  paragraphs: string[];
}

export interface Blog {
  slug: string;
  title: string;
  icon:any;
  description: string;
  category: string;
  author: string;
  publishedDate: string;
  readingTime: string;
  image: string;

  content: BlogSection[];
}