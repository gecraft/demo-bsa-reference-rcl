Show 2 Testaments

```jsx
import React from "react";
import { BibleBookList } from "demo-bsa-reference-rcl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bookList: {
    title: "",
  },
  formControlLabel: {
    label: "",
  }
}));
const classes = useStyles();

const titleBook = {
  mat: " Матфей ",
  mrk: " Марк ",
  luk: " Лука ",
  tit: " Титу ",
};

const onClickBook = (bookId) => alert("bookId " + bookId);
const availableBookList = [
  "gen",
  "exo",
  "lev",
  "num",
  "deu",
  "mat",
  "mrk",
  "luk",
  "tit",
];

<>
  <BibleBookList
    titleBook={titleBook}
    availableBookList={availableBookList}
    label="show existing book"
    check={true}
    selectedBookId="exo"
    onClickBook={onClickBook}
    testaments="all"
    titleOT="Ветхий завет"
    showTitle={true}
    sortFirstNT={true}
  />
</>;
```

Show 1 Testament

```jsx
import React from "react";
import { BibleBookList } from "demo-bsa-reference-rcl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chapter: {
    margin: theme.spacing(1),
  },
  chapterList: {
    display: "flex",
  },
}));
const classes = useStyles();

const titleBook = {
  mat: " Матфей ",
  mrk: " Марк ",
  luk: " Лука ",
  tit: " Титу ",
};

const onClickBook = (bookId) => alert("bookId " + bookId);
const availableBookList = [
  "gen",
  "exo",
  "lev",
  "num",
  "deu",
  "mat",
  "mrk",
  "luk",
  "tit",
];

<>
  <BibleBookList
    titleBook={titleBook}
    availableBookList={availableBookList}
    label="show existing book"
    check={true}
    selectedBookId="exo"
    onClickBook={onClickBook}
    testaments="nt"
    showTitle={true}
  />
</>;
```
