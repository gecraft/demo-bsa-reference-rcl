import React from 'react';
import Chapter from '../Chapter';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

function ChapterList({
  chapterPrefix,
  chapterList,
  chapterListClasses,
  chapterClasses,
  selectedChapter,
  onClickChapter,
}) {
  return (
    <>
      <Box className={chapterListClasses?.chapterList}>
        {chapterList.map((el, index) => (
          <Chapter
            chapterId={el}
            key={index}
            className={chapterListClasses?.chapter}
            classes={chapterClasses}
            isSelected={String(selectedChapter) === String(el)}
            chapterPrefix={chapterPrefix}
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
  chapterPrefix: '',
  onClickChapter: (chapterId) => {},
};

ChapterList.propTypes = {
  /** chapter prefix (chapter, psalm, etc. ) */
  chapterPrefix: PropTypes.string,
  /** array of chapters */
  chapterList: PropTypes.array,
  /** object of className */
  chapterListClasses: PropTypes.shape({
    /** chapter className */
    chapter: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    /** chapterList className */
    chapterList: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  /** override the style of the Button mui component */
  chapterClasses: PropTypes.object,
  /** an open chapter, a different style will be applied to it */
  selectedChapter: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  /** Event by clicking on the chapter. Receives a chapter ID at the entrance. */
  onClickChapter: PropTypes.func,
};

export default ChapterList;
