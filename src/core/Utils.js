import { BOOK_CHAPTERS } from '../components/BibleChapterList/config';

export const getBookChapters = (bookId) => {
  return BOOK_CHAPTERS[bookId];
};
