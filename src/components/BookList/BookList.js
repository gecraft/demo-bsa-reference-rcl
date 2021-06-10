import React from 'react';
import Book from '../Book';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

function BookList({
  title,
  bookList,
  bookListClasses,
  bookClasses,
  selectedBookId,
  onClickBook,
  showInactive,
}) {
  return (
    <>
      <div className={bookListClasses?.title}>{title}</div>
      <Box className={bookListClasses?.bookList}>
        {bookList.map(
          (el, index) =>
            (showInactive || el.isset) && (
              <Book
                bookId={el.identifier}
                className={bookListClasses?.book}
                classes={bookClasses}
                isSelected={selectedBookId == el.identifier}
                isset={el.isset}
                key={index}
                onClick={onClickBook}
                text={el.text}
              />
            )
        )}
      </Box>
    </>
  );
}

BookList.defaultProps = {
  bookList: [],
  showInactive: true,
  selectedBookId: '',
  onClickBook: (bookId) => {},
};

BookList.propTypes = {
  /** block header, for example "New Testament" */
  title: PropTypes.string,
  /** array of books */
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      /** is the book exists or not */
      isset: PropTypes.bool,
      /** unique three-letter identifier */
      identifier: PropTypes.string,
      /** book title */
      text: PropTypes.string,
    })
  ),
  /** object of className */
  bookListClasses: PropTypes.shape({
    /** title className */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** book className */
    book: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** bookList className */
    bookList: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  /** override the style of the Button mui component */
  bookClasses: PropTypes.object,
  /** an open book, a different style will be applied to it */
  selectedBookId: PropTypes.string,
  /** whether to display inactive books */
  showInactive: PropTypes.bool,
  /** Event by clicking on the book. Receives a book ID at the entrance */
  onClickBook: PropTypes.func,
};

export default BookList;
