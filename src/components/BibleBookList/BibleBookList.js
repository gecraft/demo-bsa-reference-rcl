import React, { useState } from "react";
import BookList from "../BookList";
import PropTypes from "prop-types";
import { bibleList, ALL_BIBLE_BOOKS } from "./config";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";

function BibleBookList({
  bibleBook,
  bookList,
  label,
  check,
  onClickBook,
  selectedBookId,
}) {
  const [checkState, setCheckState] = useState(false);
  const currentBookList = bookList.map((el) => {
    return { ...el, text: bibleBook[el.identifier] };
  });
  const handleChange = () => {
    setCheckState((prev) => !prev);
  };
  const hideCheckRender = check ? (
    <FormControlLabel
      control={
        <Checkbox
          checked={checkState}
          onChange={handleChange}
          name="checkedA"
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
        bookList={currentBookList.filter((el) =>
          checkState ? el.isset === true : []
        )}
        onClickBook={onClickBook}
        selectedBookId={selectedBookId}
        onClickBook={(bookId) => {
          alert("bookId " + bookId);
        }}
      />
    </>
  );
}

BibleBookList.defaultProps = {};

BibleBookList.propTypes = {
  // /**
  //  * Block header, for example "New Testament"
  //  */
  // title: PropTypes.string,
  // titleClassName: PropTypes.string,
  // /**
  //  * array of books
  //  */
  // bookList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     /** Is there a book or not */
  //     isset: PropTypes.bool,
  //     /** unique three-letter identifier */
  //     identifier: PropTypes.string,
  //     /** book title */
  //     text: PropTypes.string,
  //   })
  // ),
  // bookListClassName: PropTypes.string,
  // bookClasses: PropTypes.object,
  // /** An open book, a different style will be applied to it */
  // selectedBookId: PropTypes.string,
  // /** Event by clicking on the book. Receives a book ID at the entrance.  */
  // onClickBook: PropTypes.func,
};

export default BibleBookList;
