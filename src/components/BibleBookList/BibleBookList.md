Show 2 Testaments

```jsx
import React from "react";
import { BibleBookList } from "demo-bsa-reference-rcl";

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
    Testaments="all"
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
    Testaments="nt"
    showTitle={true}
  />
</>;
```
