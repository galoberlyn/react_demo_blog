import { HttpStatusTypes } from "../types/CommonTypes";

export const HTTP_STATUS: HttpStatusTypes = {
  ok: 200,
  notFound: 404,
  serverError: 500,
}

export const REDDIT_URL = 'https://api.pushshift.io/reddit/submission/search?q=jwst&subreddit=jameswebb';