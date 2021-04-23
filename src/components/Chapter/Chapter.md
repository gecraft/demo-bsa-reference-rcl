Button - selected current chapter

```jsx
import React from "react";

import { Chapter } from "demo-bsa-reference-rcl";

const currentChapter = true;
const chapterKey = 1;
const title = "Chapter";
const marginSize = 10;
const onClick = () => {
  alert("Click");
};
<Chapter
  currentChapter={currentChapter}
  chapterKey={chapterKey}
  title={title}
  marginSize={marginSize}
  onClick={onClick}
/>;
```
