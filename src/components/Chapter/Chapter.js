import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Chapter({ isSelected, classes, className, chapterId, text, onClick }) {
  return (
      <Button
        className={className}
        classes={classes}
        color={isSelected ? "secondary" : "primary"}
        onClick={() => onClick(chapterId)}
      >
        {text}  {chapterId}
      </Button>    
  );
}

Chapter.defaultProps = {
  isSelected: false,
  onClick: (chapterId) => {},
};

Chapter.propTypes = {
  /** chapter identifier  */
  chapterId: PropTypes.string,
  /** chapter title */
  text: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  /** An open chapter, a different style will be applied to it */
  isSelected: PropTypes.bool,
  /** Event by clicking on the chapter. Receives a chapter ID at the entrance. */
  onClick: PropTypes.func,
};

export default Chapter;
