import { BOOK_CHAPTERS } from '../config/chapters';
import {
  OLD_TESTAMENT_LIST,
  NEW_TESTAMENT_LIST,
  OBS_LIST,
  OLD_TESTAMENT,
  NEW_TESTAMENT,
  OBS,
} from '../config/books';

export const getBookChapters = (bookId) => {
  return BOOK_CHAPTERS[bookId] ?? {};
};

export const getAllChapters = () => {
  return BOOK_CHAPTERS;
};

const bookBlocks = { nt: NEW_TESTAMENT, ot: OLD_TESTAMENT, obs: OBS };

const bookDataBlocks = { nt: NEW_TESTAMENT_LIST, ot: OLD_TESTAMENT_LIST, obs: OBS_LIST };

export const getBookNames = (types = []) => {
  let bookNames = {};
  if (types && Array.isArray(types) && types.length > 0) {
    types.forEach((el) => {
      if (['nt', 'ot', 'obs'].includes(el)) {
        bookNames = { ...bookNames, ...bookBlocks[el] };
      }
    });
  }
  return bookNames;
};

export const getBookData = (types = []) => {
  let bookData = [];
  if (types && Array.isArray(types) && types.length > 0) {
    types.forEach((el) => {
      if (['nt', 'ot', 'obs'].includes(el)) {
        bookData = bookData.concat(bookDataBlocks[el]);
      }
    });
  }
  return bookData;
};
