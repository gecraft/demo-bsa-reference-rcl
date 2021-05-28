Show chapters from a specific book

```jsx
import React from "react";
import { BibleChapterList } from "@texttree/tt-reference-rcl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chapterList: {
    margin: theme.spacing(1),
  },
  chapter: {
    margin: 2,
    padding: 2,
    fontSize: 12,
    width:72,
    textTransform:"inherit",
    border:"1px solid #ccc",
  },
}));

const classes = useStyles();

const [selectedChapter, setSelectedChapter] = React.useState(1);

<BibleChapterList
  selectedChapter={selectedChapter}
  bookId="psa"
  chapterPrefix="Psalm"
  onClickChapter={(chapterId) => {
    setSelectedChapter(chapterId);
  }}
  chapterListClasses={classes}
/>;
```
