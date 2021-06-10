Show 2 Testaments

```jsx
import React from 'react';
import { BibleBookList } from '@texttree/tt-reference-rcl';

const titleBooks = {
  mat: 'Матфей',
  mrk: 'Марк',
  luk: 'Лука',
  tit: 'Титу',
};

const [selectedBookId, setSelectedBookId] = React.useState('exo');

const onClickBook = (bookId) => setSelectedBookId(bookId);

const availableBookList = ['gen', 'exo', 'lev', 'num', 'mat', 'mrk', 'luk', 'tit'];

const NTBookList = [
    'mat', 'mrk', 'luk', 'jhn', 'act', 'rom', '1co',
    '2co', 'gal', 'eph', 'php', 'col', '1th', '2th',
    '1ti', '2ti', 'tit', 'phm', 'heb', 'jas', '1pe',
    '2pe', '1jn', '2jn', '3jn', 'jud', 'rev'];

<BibleBookList
  testaments="all"
  sortFirstNT={true}
  showInactive={false}
  titleOT="Old Testament"
  titleNT="New Testament"
  titleBooks={titleBooks}
  availableBookList={availableBookList} // replace to NTBookList
  selectedBookId={selectedBookId}
  onClickBook={onClickBook}
/>;
```

Show 1 Testament

```jsx
import React from 'react';
import { BibleBookList } from '@texttree/tt-reference-rcl';

const titleBooks = {
  mat: 'Матфей',
  mrk: 'Марк',
  luk: 'Лука',
  tit: 'Титу',
};

const availableBookList = ['gen', 'jon', 'lev', 'num', 'mat', '1ko', 'rev', 'tit'];

<BibleBookList
  testaments="ot"
  titleOT="OT"
  titleNT="NT"
  showCheckbox={false}
  titleBooks={titleBooks}
  availableBookList={availableBookList}
/>;
```

Use styles

```jsx
import React from 'react';
import { BibleBookList } from '@texttree/tt-reference-rcl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3),
    fontSize: 24,
  },
  book: {
    margin: theme.spacing(1),
  },
  bookList: {
    border: '2px solid ' + theme.palette.info.main,
  },
  label: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
}));

const classes = useStyles();

const availableBookList = ['gen', 'exo', 'lev', 'num', '1sa', '2sa', '1ch', 'isa', 'mal'];

<BibleBookList
  testaments="ot"
  titleOT="Ветхий завет"
  availableBookList={availableBookList}
  selectedBookId="exo"
  BibleBookListClasses={classes}
/>;
```
