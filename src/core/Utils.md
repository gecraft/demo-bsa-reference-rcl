## Utils

---

### getBookChapters(bookId)

```jsx
import React from 'react';
import { getBookChapters } from './Utils.js';

const tit = getBookChapters('tit');
let data = [];
for (const el in tit) {
  data.push(`${el}: ${tit[el]}\n`);
}

<pre>{data}</pre>;
```

### getAllChapters()

return all book with chapters

---

### getBookNames(array['ot', 'nt', 'obs'])

```jsx
import React from 'react';
import { getBookNames } from './Utils.js';

const all = getBookNames(['ot' /*'nt', 'obs'*/]);

let data = [];
for (const el in all) {
  data.push(`${el}: ${all[el]}\n`);
}

<pre>{data}</pre>;
```

### getBookData(array['ot', 'nt', 'obs'])

```jsx
import React from 'react';
import { getBookData } from './Utils.js';

const all = getBookData(['nt' /*'ot', 'obs'*/]);

let data = [];
all.forEach((book) => {
  for (const el in book) {
    data.push(`${el}: ${book[el]}\n`);
  }
  data.push('\n');
});

<pre>{data}</pre>;
```
