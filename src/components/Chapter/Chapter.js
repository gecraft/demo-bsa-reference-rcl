import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Chapter({ currentChapter, className, chapterKey, title, onClick }) {
  return (
    <div className={className}>
      <Button
        color={currentChapter ? "primary" : "inherit"}
        variant="contained"
        onClick={() => onClick(chapterKey)}
      >
        {title} {chapterKey}
      </Button>
    </div>
  );
}

Chapter.defaultProps = {
  currentChapter: false,
  onClick: (chapterKey) => {},
};

Chapter.propTypes = {
  /** Текущая глава */
  currentChapter: PropTypes.bool,
  /** Идентификатор главы */
  chapterKey: PropTypes.string,
  /** Обозначение главы */
  title: PropTypes.string,
  /** Событие при нажатии на главу */
  onClick: PropTypes.func,
  className: PropTypes.object,
};

export default Chapter;
