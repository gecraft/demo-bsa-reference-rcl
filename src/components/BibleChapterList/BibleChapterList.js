import React from "react";
import ChapterList from "../ChapterList";
import { ChaptersConfig } from "./config";
import PropTypes from "prop-types";

function BibleChapterList({
    bookId,
  className,
  title,
  selectedChapter,
  onClickChapter,
  chapterWrapClass,
}) {
    console.log(ChaptersConfig[bookId]);
    const chapters = Object.keys(ChaptersConfig[bookId]);
  return (
      <ChapterList
  selectedChapter={selectedChapter}
  chapters={chapters}
  title={title}
  onClickChapter={onClickChapter}
/>
  );
}

BibleChapterList.defaultProps = {
  bookId: "mat",
  onClickChapter: (chapterKey) => {},
};

BibleChapterList.propTypes = {
  /** Обозначение глав в массиве */
  title: PropTypes.string,
  /** Book ID */
  bookId: PropTypes.string.isRequired,
  /** Номер текущей главы */
  selectedChapter: PropTypes.string,
  className: PropTypes.string,
  chapterWrapClass: PropTypes.string,
  onClickChapter: PropTypes.func,
};

export default BibleChapterList;
