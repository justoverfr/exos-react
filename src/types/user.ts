export interface User {
  id: number;
  first_name: string;
  last_name: string;
  title: string;
  tags: string[];
  bio: string;
  picture_url: string;
  relations: number;
  publications: number;
}
