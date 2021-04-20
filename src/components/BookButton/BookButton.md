Show button book

```jsx
import React from 'react';

import { BookButton } from "demo-button-component-rcl";

<BookButton isset={true}
    bookId='tit'
    className={{}}
    isSelected={false}
    text="test"
    onClick={(bookId) => {
        alert('bookId ' + bookId);
    }} />
```
