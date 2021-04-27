import React from "react";
import Book from "../Book";
import PropTypes from "prop-types";

function BookList({
  title,
  titleClassName,
  bookList,
  bookListClassName,
  bookClasses,
  selectedBookId,
  onClickBook,
}) {
  return (
    <>
      <h3 className={titleClassName}>{title}</h3>
      <div className={bookListClassName}>
        {bookList.map((el, index) => (
          <Book
            isset={el.isset}
            bookId={el.identifier}
            key={index}
            classes={bookClasses}
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
  titleClassName: PropTypes.string,
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
  bookListClassName: PropTypes.string,
  bookClasses: PropTypes.object,
  /** An open book, a different style will be applied to it */
  selectedBookId: PropTypes.string,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClickBook: PropTypes.func,
};

export default BookList;
