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
  titleOT,
  titleNT,
  availableBookList,
  titleBook,
  bookListClasses,
  bookClasses,
  testaments,
  showTitle,
  sortFirstNT,
}) {
  const [checkState, setCheckState] = useState(false);

  const currentBookList = bibleList.map((el) => {
    return {
      ...el,
      text:
        titleBook && titleBook[el.identifier]
          ? titleBook[el.identifier]
          : ALL_BIBLE_BOOKS[el.identifier],
      isset: availableBookList?.includes(el.identifier) ? true : false,
    };
  });

  const currentBookListOT = currentBookList.filter(
    (el) => el.categories === "bible-ot"
  );

  const currentBookListNT = currentBookList.filter(
    (el) => el.categories === "bible-nt"
  );
  const handleChange = () => {
    setCheckState((prev) => !prev);
  };

  let testamentList = [
    { title: titleOT ? titleOT : "Old Testament", bookList: currentBookListOT },
    { title: titleNT ? titleNT : "New Testament", bookList: currentBookListNT },
  ];

  if (testaments === "nt") {
    testamentList = [
      {
        title: titleNT ? titleNT : "New Testament",
        bookList: currentBookListNT,
      },
    ];
  } else if (testaments === "ot") {
    testamentList = [
      {
        title: titleOT ? titleOT : "Old Testament",
        bookList: currentBookListOT,
      },
    ];
  }

  if (sortFirstNT === true) {
    testamentList.reverse();
  }

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
      {testamentList.map((el, index) => {
        return (
          <BookList
            title={showTitle === true ? el.title : ""}
            bookList={el.bookList}
            showInactive={!checkState}
            onClickBook={onClickBook}
            selectedBookId={selectedBookId}
            bookListClasses={bookListClasses}
            bookClasses={bookClasses}
            key={index}
          />
        );
      })}
    </>
  );
}

BibleBookList.defaultProps = {
  check: false,
  testaments: "all",
};

BibleBookList.propTypes = {
  /**
   * When prop is all, show 2 Testaments
   */
  testaments: PropTypes.string,
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
   * When true, show first NT, second - OT
   */
  sortFirstNT: PropTypes.bool,
  /**
   * Array of bookId
   */
  availableBookList: PropTypes.array,
  /**
   * Array of bookId with titles ,needfull to translate
   */
  titleBook: PropTypes.object,
  /**
   * When show 1 Testament, need to write title of Testament
   */
  check: PropTypes.bool,
  /**
   * label of check
   */
  label: PropTypes.string,

  chapterListClasses: PropTypes.objectOf(
    PropTypes.shape({
      /** chapter className */
      chapter: PropTypes.string,
      /** chapterList className */
      chapterList: PropTypes.string,
    })
  ),
  chapterClasses: PropTypes.object,
  /** An open chapter, a different style will be applied to it */

  bookListClasses: PropTypes.string,
  bookClasses: PropTypes.object,
  /** An open book, a different style will be applied to it */
  selectedBookId: PropTypes.string,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClickBook: PropTypes.func,
};

export default BibleBookList;
