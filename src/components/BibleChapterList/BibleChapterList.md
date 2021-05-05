Array of buttons - selected current chapter

```jsx
import React from "react";
import { BibleChapterList } from "demo-bsa-reference-rcl";
import { makeStyles } from "@material-ui/core/styles";

const selectedChapter = "3";
const title = "Chapter";
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
<BibleChapterList
  selectedChapter={selectedChapter}
  bookId="gen"
  title={title}
  onClickChapter={onClickChapter}
  chapterWrapClass={classes.root}
  className={classes.list}
/>;
```
