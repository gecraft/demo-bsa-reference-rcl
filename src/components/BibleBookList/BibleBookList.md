Show list of books

```jsx
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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

<Card>
  <CardContent>
    <Typography variant="body2" component="p">
      <BibleBookList
        bibleBook={titleBook}
        bookList={bookList}
        label="show existing book"
      />
    </Typography>
  </CardContent>
</Card>;
```
