Show list of books

```jsx
import React from "react";

import { BookList } from "demo-bsa-reference-rcl";

<BookList
  title="New Testament"
  showInactive={true}
  bookList={[
    {
      isset: true,
      identifier: "mat",
      text: "Mathew",
    },
    {
      isset: false,
      identifier: "mar",
      text: "Mark",
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
  ]}
  selectedBookId="tit"
  onClickBook={(bookId) => {
    alert("bookId " + bookId);
  }}
/>;
```
