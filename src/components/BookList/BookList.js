import React from "react";
import Book from "../Book";
import PropTypes from "prop-types";

function BookList({
  title,
  className,
  bookList,
  bookWrapClass,
  selectedBookId,
  onClickBook,
}) {
  return (
    <>
      <h2>{title}</h2>
      <div className={className}>
        {bookList.map((el, index) => (
          <Book
            isset={el.isset}
            bookId={el.identifier}
            key={index}
            className={bookWrapClass}
            isSelected={selectedBookId == el.identifier}
            text={el.text}
            onClick={onClickBook}
          />
        ))}
      </div>
    </>
  );
}

BookList.defaultProps = {
  bookList: [],
  selectedBookId: false,
};

BookList.propTypes = {
  /**
   * Block header, for example "New Testament"
   */
  title: PropTypes.string,
  className: PropTypes.string,
  /**
   * array of books
   */
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
  bookWrapClass: PropTypes.string,
  /** An open book, a different style will be applied to it */
  selectedBookId: PropTypes.string,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClickBook: PropTypes.func,
};

export default BookList;
