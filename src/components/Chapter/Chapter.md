Button - selected current chapter

```jsx
import React from "react";

import { Chapter } from "@texttree/tt-reference-rcl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    background: theme.palette.success.main,
    borderRadius: 6,
    color: "#eee",
    height: 30,
    padding: "0 15px",
  },
  textPrimary: {
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
  textSecondary: {
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const classes = useStyles();

<Chapter
  chapterId="1"
  classes={classes}
  isSelected={true}
  chapterPrefix="Chapter"
  onClick={(chapterId) => {
    alert("chapterId " + chapterId);
  }}
/>;
```
