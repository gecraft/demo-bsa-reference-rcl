import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function BookButton({ isset, bookId, className, isSelected, text, onClick }) {
return (<div className={className}>
        {isset ? (
            isSelected ? (
                <Button color="secondary" onClick={() => onClick(bookId)}>{text}</Button>
            ) : (
                <Button color="primary" onClick={() => onClick(bookId)}>{text}</Button>
            )
        ) : (
            <Button disabled>{text}</Button>
        )}
    </div>)
}

BookButton.defaultProps = {
  isset: false,
  isSelected: false,
};

BookButton.propTypes = {
  /** Is there a book or not. */
  isset: PropTypes.bool,
  /** unique three-letter identifier */
  bookId: PropTypes.string,
  /** book title */
  text: PropTypes.string,
  className: PropTypes.string,
  /** An open book, a different style will be applied to it */
  isSelected: PropTypes.bool,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClick: PropTypes.func,
};

export default BookButton;
