import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Chapter({ currentChapter, chapterKey, title, marginSize, onClick }) {
  return (
    <Button
      style={{ margin: marginSize }}
      color={currentChapter ? "primary":"inherit"}
      variant="contained"
      onClick={onClick}
    >
      {title} {chapterKey}
    </Button>
  );
}

Chapter.defaultProps = {
  currentChapter: false,
};

Chapter.propTypes = {
  /** Текущая глава */
  currentChapter: PropTypes.bool,
  /** Идентификатор главы */
  chapterKey: PropTypes.string,
  /** Обозначение главы */
  title: PropTypes.string,
  /** Границы кнопки */
  marginSize: PropTypes.string,
  /** Событие при нажатии на главу */
  onClick: PropTypes.func,
};

export default Chapter;
