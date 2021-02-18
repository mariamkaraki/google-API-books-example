export default interface Book {
    authors: string[];
    title: string;
    subtitle: string;
    description: string;
    publisher: string;
    publishedDate: string;
    imageLinks: string | undefined;
    link: string;
  }