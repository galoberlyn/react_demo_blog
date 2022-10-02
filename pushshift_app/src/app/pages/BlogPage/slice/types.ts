/* --- STATE --- */
export interface BlogState {
  loading: boolean;
  blogs: Array<BlogData>;
  error: string;
}

export type BlogData = {
  id: number;
  ps_id: string;
  link: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  score: number;
  upvote_ratio: number; 
  image: string;
}
