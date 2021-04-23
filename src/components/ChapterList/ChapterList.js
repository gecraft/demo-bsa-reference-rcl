import React from "react";
import Chapter from "../Chapter";
import PropTypes from "prop-types";

function ChapterList({
  chapters,
  title,
  selectedChapter,
  marginSize,
  onClickChapter,
}) {
  return (
    <>
      {chapters.map((key) => (
        <Chapter
          marginSize={marginSize}
          currentChapter={selectedChapter === key}
          title={title}
          chapterKey={key}
          onClick={() => onClickChapter(key)}
        />
      ))}
    </>
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
  marginSize: PropTypes.number,
  /** Событие при нажатии на главу */
  onClickChapter: PropTypes.func,
};

export default ChapterList;
