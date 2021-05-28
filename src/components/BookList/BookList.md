Show list of Books

### Minimal example

```jsx
import React from "react";

import { BookList } from "@texttree/tt-reference-rcl";

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

import { BookList } from "@texttree/tt-reference-rcl";

const [showInactive, setShowInactive] = useState(false);

<>
  <Button
    variant="contained"
    color="primary"
    size="small"
    style={{ margin: 15 }}
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

### Using MUI Styles

```jsx
import React from "react";
import { BookList } from "@texttree/tt-reference-rcl";
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
}));

const classes = useStyles();

const onClickBook = (bookId) => alert("bookId " + bookId);

<>
  <BookList
    title="New Testament"
    bookListClasses={classes}
    bookList={[
      {
        identifier: "mat",
        text: "Mathew",
      },
      {
        identifier: "mar",
        text: "Mark",
      },
      {
        identifier: "luk",
        text: "Luke",
      },
      {
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
