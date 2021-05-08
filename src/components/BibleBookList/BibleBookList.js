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
  singleTestament,
  singleTitle,
  titleOT,
  titleNT,
  availableBookList,
  titleBook,
  bookListClassName,
  bookClasses,
  allTestaments,
  showTitle,
  sortFirstNT
}) {
  // const[testamentState,setTestamentState]=useState(false);
  const [checkState, setCheckState] = useState(false); 
  const currentBookList = bibleList.map((el) => {
    return {...el, text: titleBook && titleBook[el.identifier] ? titleBook[el.identifier] : ALL_BIBLE_BOOKS[el.identifier],
       isset: availableBookList ?.includes(el.identifier) ? true : false}
    });

  const currentBookListOT = currentBookList.filter((el) => 
     el.categories === 'bible-ot' );
    
     const currentBookListNT = currentBookList.filter((el) => 
     el.categories  ==='bible-nt' );
     const handleChange = () => {
    setCheckState((prev) => !prev);
  };
  
  const testamentList=[{title:titleOT?titleOT:"Old Testament", id:currentBookListOT},{title:titleNT?titleNT:"New Testament", id:currentBookListNT}]
  //  testamentList.sort();
  if (sortFirstNT === true) {testamentList.reverse()};
  
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
    <>{hideCheckRender}
     {allTestaments?(testamentList.map((el,index) => {
        return        (<BookList
  title={showTitle===true?el.title:[]}
  bookList={el.id}
  showInactive={!checkState}
  onClickBook={onClickBook}
  selectedBookId={selectedBookId}
  bookListClassName={bookListClassName}
  bookClasses={bookClasses}
  
  key={index}/>)
}
)):(<BookList
  title={showTitle===true?((singleTestament==='ot')?(singleTitle?singleTitle:"Old Testament"):(singleTestament==='nt')?(singleTitle?singleTitle:"New Testament"):singleTitle):[]}
  bookList={(singleTestament==='ot')?(currentBookListOT):('nt')?(currentBookListNT):(currentBookList)}
  showInactive={!checkState}
  onClickBook={onClickBook}
  selectedBookId={selectedBookId}
  bookListClassName={bookListClassName}
  bookClasses={bookClasses}/>)
}      
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
