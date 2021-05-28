import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function Chapter({
  isSelected,
  classes,
  className,
  chapterId,
  chapterPrefix,
  onClick,
}) {
  return (
    <Button
      className={className}
      classes={classes}
      color={isSelected ? 'secondary' : 'primary'}
      onClick={() => onClick(chapterId)}
    >
      {chapterPrefix} {chapterId}
    </Button>
  );
}

Chapter.defaultProps = {
  isSelected: false,
  chapterPrefix: '',
  onClick: (chapterId) => {},
};

Chapter.propTypes = {
  /** chapter identifier  */
  chapterId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  /** chapter prefix (chapter, psalm, etc. ) */
  chapterPrefix: PropTypes.string,
  /** override the style of the Button mui component */
  classes: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** an open chapter, a different style will be applied to it */
  isSelected: PropTypes.bool,
  /** Event by clicking on the chapter. Receives a chapter ID at the entrance. */
  onClick: PropTypes.func,
};

export default Chapter;
