Show book button

### Minimal example

```jsx
import React from 'react';

import { Book } from '@texttree/tt-reference-rcl';

<Book
  bookId="mar"
  text="Mark"
  onClick={(bookId) => {
    alert('bookId ' + bookId);
  }}
/>;
```

### An example of using the isset and isSelected attributes

If isset = false, then there is no book and the button is inactive. isSelected and onClick not working.

If isset = true, the book exists. isSelected indicates whether this is the current book or not.

```jsx
import React from 'react';

import { Book } from '@texttree/tt-reference-rcl';

const onClickBook = (bookId) => alert('bookId ' + bookId);

<>
  <Book isset={false} bookId="tit" text="Inactive" />

  <Book
    isset={true}
    bookId="tit"
    isSelected={false}
    text="Active"
    onClick={onClickBook}
  />

  <Book
    isset={true}
    bookId="tit"
    isSelected={true}
    text="Current"
    onClick={onClickBook}
  />
</>;
```

### Using MUI Styles

You can override the styles of the entire Button component.

```jsx
import React from 'react';
import { Book } from '@texttree/tt-reference-rcl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    background: theme.palette.success.main,
    borderRadius: 6,
    color: '#eee',
    height: 30,
    padding: '0 15px',
  },
  textPrimary: {
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  textSecondary: {
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  disabled: {
    background: '#ccc',
    fontWeight: 'bold',
    border: '1px solid #777',
  },
}));

const classes = useStyles();

const onClickBook = (bookId) => alert('bookId ' + bookId);

<>
  <Book isset={false} classes={classes} bookId="gen" text="Genesis" />
  <Book
    isset={true}
    classes={classes}
    bookId="tit"
    isSelected={false}
    text="Titus"
    onClick={onClickBook}
  />
  <Book
    isset={true}
    classes={classes}
    bookId="mar"
    isSelected={true}
    text="Mark"
    onClick={onClickBook}
  />
</>;
```

You can also use a regular class.

```jsx
import React from 'react';
import { Book } from '@texttree/tt-reference-rcl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  orangeButton: {
    padding: '10px 30px',
    color: 'black',
  },
  smallButton: {
    fontSize: '12px',
    fontWeight: 'bold',
    height: 24,
  },
}));

const classes = useStyles();

const onClickBook = (bookId) => alert('bookId ' + bookId);

<>
  <Book
    className={classes.orangeButton}
    bookId="tit"
    text="Titus"
    onClick={onClickBook}
  />
  <Book className={classes.smallButton} bookId="mar" text="Mark" onClick={onClickBook} />
</>;
```
