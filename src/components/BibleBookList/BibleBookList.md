Show list of books

```jsx
import React from "react";
import { BibleBookList } from "demo-bsa-reference-rcl";

const titleBook = {
  mat: "Матфей",
  mrk: "Марк",
  luk: "Лука",
  tit: "Титу",
};
const bookList = [
  {
    isset: true,
    identifier: "mat",
  },
  {
    isset: false,
    identifier: "mrk",
  },
  {
    isset: true,
    identifier: "luk",
    text: "Luke",
  },
  {
    isset: true,
    identifier: "tit",
    text: "Titus",
  },
];

<>
  <BibleBookList
    bibleBook={titleBook}
    bookList={bookList}
    label="show existing book"
    check={true}
    selectedBookId="luk"
  />
</>;
```
