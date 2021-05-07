import React from "react";
import Chapter from "../Chapter";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

function ChapterList({
  text,
  chapterList,
  chapterListClasses,
  chapterClasses,
  selectedChapter,
  onClickChapter,
}) {
  return (
    <>
    <Box classname={chapterListClasses?.chapterList}>
      {chapterList.map((el, index) => (
        <Chapter
          chapterId={el}
          key={index}
          className={chapterListClasses?.chapter}
          classes={chapterClasses} 
          isSelected={String(selectedChapter) === String(el)}
          text={text}
          onClick={onClickChapter}
        />
      ))}
    </Box>
    </> 
  );
}

ChapterList.defaultProps = {
  chapterList: [],
  selectedChapter: '',
};

ChapterList.propTypes = {
  /** chapter's title */
  text: PropTypes.string,
  /** array of chapters*/
  chapterList: PropTypes.array,
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

export default ChapterList;
