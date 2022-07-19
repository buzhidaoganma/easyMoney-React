import Id from "lib/Id";
import { useState } from "react";

const useTags = () => {
  //封装一个自定义HOOK
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    { id: new Id().value, name: "衣" },
    { id: new Id().value, name: "食" },
    { id: new Id().value, name: "住" },
    { id: new Id().value, name: "行" },
  ]);
  return {
    tags,
    setTags,
  };
};

export default useTags;
