import React from "react";
import Book from "../Book";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

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
                isset={el.isset}
                bookId={el.identifier}
                key={index}
                className={bookListClasses?.book}
                classes={bookClasses}
                isSelected={selectedBookId == el.identifier}
                text={el.text}
                onClick={onClickBook}
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
};

BookList.propTypes = {
  /** Block header, for example "New Testament" */
  title: PropTypes.string,
  /** array of books */
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      /** Is there a book or not */
      isset: PropTypes.bool,
      /** unique three-letter identifier */
      identifier: PropTypes.string,
      /** book title */
      text: PropTypes.string,
    })
  ),
  bookListClasses: PropTypes.objectOf(
    PropTypes.shape({
      /** title className */
      title: PropTypes.string,
      /** book className */
      book: PropTypes.string,
      /** bookList className */
      bookList: PropTypes.string,
    })
  ),
  bookClasses: PropTypes.object,
  /** An open book, a different style will be applied to it */
  selectedBookId: PropTypes.string,
  /** Whether to display inactive books */
  showInactive: PropTypes.bool,
  /** Event by clicking on the book. Receives a book ID at the entrance */
  onClickBook: PropTypes.func,
};

export default BookList;
