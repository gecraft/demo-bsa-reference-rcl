import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Book({ isset, bookId, classes, isSelected, text, onClick }) {
  return (
    <Button
      classes={classes}
      disabled={!Boolean(isset)}
      color={isSelected ? "secondary" : "primary"}
      onClick={() => onClick(bookId)}
    >
      {text}
    </Button>
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
  classes: PropTypes.object,
  /** An open book, a different style will be applied to it */
  isSelected: PropTypes.bool,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClick: PropTypes.func,
};

export default Book;
