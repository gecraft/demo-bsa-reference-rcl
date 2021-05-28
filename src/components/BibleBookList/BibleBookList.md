Show 2 Testaments

```jsx
import React from "react";
import { BibleBookList } from "demo-bsa-reference-rcl";

const titleBooks = {
  mat: "Матфей", mrk: "Марк", luk: "Лука", tit: "Титу",
};

const [selectedBookId, setSelectedBookId] = React.useState("exo");

const onClickBook = (bookId) => setSelectedBookId(bookId);

const availableBookList = [
  "gen", "exo", "lev", "num",
  "mat", "mrk", "luk", "tit",
];

<BibleBookList
  titleBooks={titleBooks}
  showInactive={false}
  availableBookList={availableBookList}
  showCheckbox={true}
  selectedBookId={selectedBookId}
  onClickBook={onClickBook}
  testaments="all"
  titleOT="Ветхий завет"
  showTitle={true}
  sortFirstNT={true}
/>;
```

Show 1 Testament

```jsx
import React from "react";
import { BibleBookList } from "demo-bsa-reference-rcl";

const titleBooks = {
  mat: "Матфей", mrk: "Марк",
  luk: "Лука", tit: "Титу",
};

const availableBookList = [
  "gen", "jon", "lev", "num",
  "mat", "1ko", "rev", "tit",
];

  <BibleBookList
  titleBooks={titleBooks}
  availableBookList={availableBookList}
  testaments="ot"
  titleOT="OT"
  titleNT="NT"
  showTitle={true}/>;
```

Use styles

```jsx
import React from "react";
import { BibleBookList } from "demo-bsa-reference-rcl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3),
    fontSize: 24,
  },
  book: {
    margin: theme.spacing(1),
  },
  bookList: {
    border: "2px solid " + theme.palette.info.main,
  },
  label: {
    fontWeight: "bold",
    textDecoration: "underline",
  }
}));

const classes = useStyles();

const availableBookList = [
  "gen", "exo", "lev", "num", '1sa', '2sa', '1ch', 'isa', 'mal',
];

<BibleBookList
  availableBookList={availableBookList}
  selectedBookId="exo"
  BibleBookListClasses={classes}
  showCheckbox={true}
  testaments="ot"
  titleOT="Ветхий завет"
  showTitle={true}
/>;
```
