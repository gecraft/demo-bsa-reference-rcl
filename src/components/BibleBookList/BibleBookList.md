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
const testament = "bible-nt";
<>
  <BibleBookList
    titleBook={titleBook}
    availableBookList={availableBookList}
    title="New Testament"
    testament={testament}
    label="show existing book"
    check={true}
    selectedBookId="exo"
    onClickBook={onClickBook}
  />
</>;
```
