import React from "react";
import BookList from "../BookList";
import PropTypes from "prop-types";
import {bibleList,ALL_BIBLE_BOOKS} from "./config";

function BibleBookList({
  bibleBook,
  bookList
 
}) {
  
  const currentBookList =bookList.map((el) => {
    return {...el,text:(bibleBook[el.identifier])}
    }
    );
    
  return (
    <>
      <BookList
      bookList={currentBookList}
      
      />

      
    </>
  );
}

BibleBookList.defaultProps = {
  
};

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
