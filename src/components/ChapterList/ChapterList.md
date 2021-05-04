Array of buttons - selected current chapter

```jsx
import React from "react";
import { ChapterList } from "demo-bsa-reference-rcl";
import { makeStyles } from "@material-ui/core/styles";

const selectedChapter = "3";
const title = "Chapter";
const chapters = ["1", "2", "3", "4"];
const onClickChapter = (onClick = (chapterKey) => {
  alert("Click" + chapterKey);
});

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  list: {
    display: "flex",
  },
}));
const classes = useStyles();
<ChapterList
  selectedChapter={selectedChapter}
  chapters={chapters}
  title={title}
  onClickChapter={onClickChapter}
  chapterWrapClass={classes.root}
  className={classes.list}
/>;
```
