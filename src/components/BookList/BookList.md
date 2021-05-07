Show list of Books

### Minimal example

```jsx
import React from "react";

import { BookList } from "demo-bsa-reference-rcl";

<BookList
  title="New Testament"
  bookList={[
    {
      identifier: "mat",
    },
    {
      identifier: "mar",
    },
    {
      identifier: "luk",
    },
  ]}
  onClickBook={(bookId) => {
    alert("bookId " + bookId);
  }}
/>;
```

### An example of using the showInactive attribute

Whether to show books that don't exist.

```jsx
import React, { useState } from "react";

import { Button } from "@material-ui/core";

import { BookList } from "demo-bsa-reference-rcl";

const [showInactive, setShowInactive] = useState(false);

<>
  <Button
    variant="contained"
    color="primary"
    size="small"
    style={{margin: 15}}
    onClick={() => setShowInactive((prev) => !prev)}
  >
    {showInactive ? "Hide" : "Show"}
  </Button>

  <BookList
    title="New Testament"
    showInactive={showInactive}
    bookList={[
      {
        isset: false,
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
  />
</>;
```
