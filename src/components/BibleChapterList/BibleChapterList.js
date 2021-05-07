import React from "react";
import ChapterList from "../ChapterList";
import { ChaptersConfig } from "./config";
import PropTypes from "prop-types";

function BibleChapterList({
  text,  
  bookId,
  chapterListClasses,
  chapterClasses,
  selectedChapter,
  onClickChapter,
  
}) {
    
  const chapters = Object.keys(ChaptersConfig[bookId]);
  console.log(chapters)
  return (
      <ChapterList
        text={text}
        chapterListClasses={chapterListClasses}
        chapterClasses={chapterClasses}
        selectedChapter={selectedChapter}
        chapterList={chapters}
        onClickChapter={onClickChapter}
      />
  );
}

BibleChapterList.defaultProps = {
  bookId: "mat",
  onClickChapter: (chapterId) => {},
};

BibleChapterList.propTypes = {
  /** chapter's title */
  text: PropTypes.string,
  /** bookId*/
  bookID: PropTypes.string,
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
  selectedChapter: PropTypes.string,
  /** Event by clicking on the chapter. Receives a chapter ID at the entrance. */
  onClickChapter: PropTypes.func,
};

export default BibleChapterList;
