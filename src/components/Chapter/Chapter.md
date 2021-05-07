Button - selected current chapter

```jsx
import React from "react";

import { Chapter } from "demo-bsa-reference-rcl";

const onClick = (chapterKey) => {
  alert("Click" + chapterKey);
};
<Chapter
  chapterId="1"
  isSelected={true}
  text="Chapter"
  onClick={(chapterId) => {
    alert("chapterId " + chapterId);
  }}
/>;
```
