import React from "react";
import Chapter from "../Chapter";
import PropTypes from "prop-types";

function ChapterList({
  chapters,
  className,
  title,
  selectedChapter,
  onClickChapter,
  chapterWrapClass
}) {
  return (
    <div className={className}>
      {chapters.map((el, index) => (
        <Chapter
          currentChapter={String(selectedChapter) === String(el)}
          key={index}
          title={title}
          chapterKey={el}
          onClick={onClickChapter}
          className ={chapterWrapClass}
        />
      ))}
    </div>
  );
}

ChapterList.defaultProps = {
  chapters: [],
  onClickChapter: (chapterId) => {},
};

ChapterList.propTypes = {
  /** Обозначение глав в массиве */
  title: PropTypes.string,
  /** Массив глав*/
  chapters: PropTypes.array,
  /** Номер текущей главы */
  selectedChapter: PropTypes.string,
  /** Расстояние между кнопками */
 
  onClickChapter: PropTypes.func,
};

export default ChapterList;
