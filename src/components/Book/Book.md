Show button book

1. Минимальная пример
2. Что означает isset и selected
3. Применение стилей и классов

```jsx
import React from "react";

import { Book } from "demo-bsa-reference-rcl";

<Book
  isset={true}
  bookId="tit"
  isSelected={false}
  text="test"
  onClick={(bookId) => {
    alert("bookId " + bookId);
  }}
/>;
```
