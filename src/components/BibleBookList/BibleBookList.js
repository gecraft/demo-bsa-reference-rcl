import React, { useState } from 'react';
import BookList from '../BookList';
import PropTypes from 'prop-types';
import { BIBLE_LIST, BIBLE_BOOKS } from './config';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';

function BibleBookList({
  labelForCheckbox,
  showCheckbox,
  showInactive,
  onClickBook,
  selectedBookId,
  titleOT,
  titleNT,
  availableBookList,
  titleBooks,
  BibleBookListClasses,
  bookClasses,
  testaments,
  showTitle,
  sortFirstNT,
}) {
  const [checkState, setCheckState] = useState(!showInactive);
  const currentBookList = BIBLE_LIST.map((el) => {
    return {
      ...el,
      text: titleBooks[el.identifier] ?? BIBLE_BOOKS[el.identifier],
      isset: availableBookList.includes(el.identifier),
    };
  });

  const currentBookListOT = currentBookList.filter(
    (el) => el.categories === 'bible-ot'
  );

  const currentBookListNT = currentBookList.filter(
    (el) => el.categories === 'bible-nt'
  );
  const handleChange = () => {
    setCheckState((prev) => !prev);
  };

  let testamentList = [];

  switch (testaments) {
    case 'nt':
      testamentList = [
        {
          title: titleNT,
          bookList: currentBookListNT,
        },
      ];
      break;

    case 'ot':
      testamentList = [
        {
          title: titleOT,
          bookList: currentBookListOT,
        },
      ];
      break;
    case 'all':
      testamentList = [
        { title: titleOT, bookList: currentBookListOT },
        { title: titleNT, bookList: currentBookListNT },
      ];
      if (sortFirstNT) {
        testamentList.reverse();
      }
      break;

    default:
      break;
  }

  const checkboxRender = showCheckbox ? (
    <FormControlLabel
      classes={{
        label: BibleBookListClasses?.label,
      }}
      control={
        <Checkbox
          checked={checkState}
          onChange={handleChange}
          color='primary'
        />
      }
      label={labelForCheckbox}
    />
  ) : (
    ''
  );

  return (
    <>
      {checkboxRender}
      {testamentList.map((el, index) => {
        return (
          <BookList
            title={showTitle ? el.title : ''}
            bookList={el.bookList}
            showInactive={!checkState}
            onClickBook={onClickBook}
            selectedBookId={selectedBookId}
            bookListClasses={{
              title: BibleBookListClasses?.title,
              book: BibleBookListClasses?.book,
              bookList: BibleBookListClasses?.bookList,
            }}
            bookClasses={bookClasses}
            key={index}
          />
        );
      })}
    </>
  );
}

BibleBookList.defaultProps = {
  showCheckbox: false,
  testaments: 'all',
  titleOT: 'Old Testament',
  titleNT: 'New Testament',
  showInactive: true,
  onClickBook: () => {},
  labelForCheckbox: 'Show only existing books',
  titleBooks: {},
  BibleBookListClasses: {},
  availableBookList: [],
};

BibleBookList.propTypes = {
  testaments: PropTypes.oneOf(['all', 'nt', 'ot']),
  /**
   * Block header of "New Testament"
   */
  titleNT: PropTypes.string,
  /**
   * Block header of "New Testament"
   */
  titleOT: PropTypes.string,
  /**
   * Show block header
   */
  showTitle: PropTypes.bool,
  /**
   * When true, show first New Testament, second - Old Testament
   */
  sortFirstNT: PropTypes.bool,
  /**
   * Array of existing bookId's
   */
  availableBookList: PropTypes.array,
  /**
   * Array of bookId with the titles to be translated. If not set - get the default value in English
   */
  titleBooks: PropTypes.object,
  /**
   * show or hide checkbox that show only existing books
   */
  showCheckbox: PropTypes.bool,
  /** Whether to display inactive books */
  showInactive: PropTypes.bool,
  /**
   * label of checkbox
   */
  labelForCheckbox: PropTypes.string,

  BibleBookListClasses: PropTypes.objectOf(
    PropTypes.shape({
      /** title className */
      title: PropTypes.string,
      /** book className */
      book: PropTypes.string,
      /** bookList className */
      bookList: PropTypes.string,
      /** className for label of checkbox */
      label: PropTypes.string,
    })
  ),
  bookClasses: PropTypes.object,
  /** An open book, a different style will be applied to it */
  selectedBookId: PropTypes.string,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClickBook: PropTypes.func,
};

export default BibleBookList;
