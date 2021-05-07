import React, { useState } from "react";
import BookList from "../BookList";
import PropTypes from "prop-types";
import { bibleList, ALL_BIBLE_BOOKS } from "./config";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";

function BibleBookList({
  label,
  check,
  onClickBook,
  selectedBookId,
  testament,
  title,
  availableBookList,
  titleBook,
  bookListClassName,
  bookClasses,
}) {
  const [checkState, setCheckState] = useState(false); 
  const currentBookList = bibleList.map((el) => {
    return {...el, text: titleBook && titleBook[el.identifier] ? titleBook[el.identifier] : ALL_BIBLE_BOOKS[el.identifier],
       isset: availableBookList ?.includes(el.identifier) ? true : false}
    }).filter((el) => 
    testament ? el.categories === testament :
     el.categories === 'bible-ot' ||'bible-nt');
  const handleChange = () => {
    setCheckState((prev) => !prev);
  };
  const hideCheckRender = check ? (
    <FormControlLabel
      control={
        <Checkbox
          checked={checkState}
          onChange={handleChange}
          color="primary"
        />
      }
      label={label}
    />
  ) : (
    []
  );
  return (
    <>
      {hideCheckRender}
      <BookList
        title={title}
        bookList={currentBookList}
        showInactive={!checkState}
        onClickBook={onClickBook}
        selectedBookId={selectedBookId}
        bookListClassName={bookListClassName}
        bookClasses={bookClasses}

      />
    </>
  );
}

BibleBookList.defaultProps = {};

BibleBookList.propTypes = {
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

export default BibleBookList;
