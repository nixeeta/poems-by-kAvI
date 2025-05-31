export interface Poem {
  id: string;
  title: string;
  content: string;
  authorName?: string;
  authorId?: string;
  isPublic?: boolean;
  createdAt?: string;
}
