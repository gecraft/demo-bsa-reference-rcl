import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Book({ isset, bookId, className, isSelected, text, onClick }) {
  return (
    <div className={className}>
      {isset ? (
        isSelected ? (
          <Button color="secondary" onClick={() => onClick(bookId)}>
            {text}
          </Button>
        ) : (
          <Button color="primary" onClick={() => onClick(bookId)}>
            {text}
          </Button>
        )
      ) : (
        <Button disabled>{text}</Button>
      )}
    </div>
  );
}

Book.defaultProps = {
  isset: true,
  isSelected: false,
  onClick: (bookId) => {},
};

Book.propTypes = {
  /** Is there a book or not. */
  isset: PropTypes.bool,
  /** unique three-letter identifier */
  bookId: PropTypes.string,
  /** book title */
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  /** An open book, a different style will be applied to it */
  isSelected: PropTypes.bool,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClick: PropTypes.func,
};

export default Book;
