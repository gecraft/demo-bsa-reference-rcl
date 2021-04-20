import React from 'react';
import BookButton from '../BookButton';
import PropTypes from 'prop-types';

function SectionBlock({ title, className, bookList, bookWrapClass, selectedBookId, onClickBook }) {

return (<>
        <h2>{title}</h2>
      <div className={className}>
          {bookList.map((el, index) => (
        <BookButton
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
    </>)
}

SectionBlock.defaultProps = {
  bookList: [],
};

SectionBlock.propTypes = {
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

export default SectionBlock;
