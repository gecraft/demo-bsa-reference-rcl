Show button book

```jsx
import React from 'react';

import { BookButton } from "demo-button-component-rcl";

<BookButton isset={true}
    identifier='tit'
    className={{}}
    bookId='tit'
    text="test"
    onClick={(bookId) => {
        alert('bookId ' + bookId);
    }} />
```
