Show list of books

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
    title="New Testament"
    label="show existing book"
    check={true}
    selectedBookId="exo"
    onClickBook={onClickBook}
    allTestament={true}
    titleOT="Ветхий завет"
  />
</>;
```
