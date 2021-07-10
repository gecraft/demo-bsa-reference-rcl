import React from 'react';
import ChapterList from '../ChapterList';
import { getBookChapters } from '../../core/Utils';
import PropTypes from 'prop-types';

function BibleChapterList({
  chapterPrefix,
  bookId,
  chapterListClasses,
  chapterClasses,
  selectedChapter,
  onClickChapter,
}) {
  const chapters = bookId ? Object.keys(getBookChapters(bookId)) : [];

  return (
    <ChapterList
      chapterClasses={chapterClasses}
      chapterList={chapters}
      chapterListClasses={chapterListClasses}
      chapterPrefix={chapterPrefix}
      onClickChapter={onClickChapter}
      selectedChapter={selectedChapter}
    />
  );
}

BibleChapterList.defaultProps = {
  onClickChapter: (chapterId) => {},
};

BibleChapterList.propTypes = {
  /** chapter prefix (chapter, psalm, etc. ) */
  chapterPrefix: PropTypes.string,
  /** unique three-letter identifier of book from which the chapters are shown  */
  bookId: PropTypes.string.isRequired,
  /** object of className */
  chapterListClasses: PropTypes.shape({
    /** chapter className */
    chapter: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** chapterList className */
    chapterList: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  /** override the style of the Button mui component */
  chapterClasses: PropTypes.object,
  /** an open chapter, a different style will be applied to it */
  selectedChapter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Event by clicking on the chapter. Receives a chapter ID at the entrance. */
  onClickChapter: PropTypes.func,
};

export default BibleChapterList;
