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
  /* singleTestament, */
  titleOT,
  titleNT,
  availableBookList,
  titleBook,
  bookListClasses,
  bookClasses,
  Testaments,
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

  const testamentList = [
    Testaments === "all"
      ? ({ title: titleOT ? titleOT : "Old Testament", id: currentBookListOT },
        { title: titleNT ? titleNT : "New Testament", id: currentBookListNT })
      : { title: titleNT ? titleNT : "New Testament", id: currentBookListNT },
  ];

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
      {
        /* allTestaments ? ( */
        testamentList.map((el, index) => {
          return (
            <BookList
              title={showTitle === true ? el.title : ""}
              bookList={el.id}
              showInactive={!checkState}
              onClickBook={onClickBook}
              selectedBookId={selectedBookId}
              bookListClasses={bookListClasses}
              bookClasses={bookClasses}
              key={index}
            />
          );
        })
        /* ) : (
        <BookList
          title={
            showTitle === true
              ? singleTestament === "ot"
                ? titleOT
                  ? titleOT
                  : "Old Testament"
                : singleTestament === "nt"
                ? titleNT
                  ? titleNT
                  : "New Testament"
                : titleNT
              : []
          }
          bookList={
            singleTestament === "ot"
              ? currentBookListOT
              : "nt"
              ? currentBookListNT
              : currentBookList
          }
          showInactive={!checkState}
          onClickBook={onClickBook}
          selectedBookId={selectedBookId}
          bookListClasses={bookListClasses}
          bookClasses={bookClasses}
        />
        ) */
      }
    </>
  );
}

BibleBookList.defaultProps = {};

BibleBookList.propTypes = {
  /**
   * When prop is true, show 2 Testaments
   */
  allTestaments: PropTypes.bool,
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
  singleTestament: PropTypes.string,
  /**
   * True/false ===show/not show checkbox
   */
  check: PropTypes.bool,
  /**
   * label of check
   */
  label: PropTypes.string,

  bookListClasses: PropTypes.string,
  bookClasses: PropTypes.object,
  /** An open book, a different style will be applied to it */
  selectedBookId: PropTypes.string,
  /** Event by clicking on the book. Receives a book ID at the entrance.  */
  onClickBook: PropTypes.func,
};

export default BibleBookList;
