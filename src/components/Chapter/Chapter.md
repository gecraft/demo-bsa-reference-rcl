Button - selected current chapter

```jsx
import React from "react";

import { Chapter } from "demo-bsa-reference-rcl";

const currentChapter = true;
const chapterKey = '1';
const title = "Chapter";

const onClick = (chapterKey) => {
  alert("Click" + chapterKey);
};
<Chapter
  currentChapter={currentChapter}
  chapterKey={chapterKey}
  title={title}
  onClick={onClick}
/>;
```
