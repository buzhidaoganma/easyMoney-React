import Id from "lib/Id";
import { useState } from "react";

const defaultTags = [
  { id: new Id().value, name: "衣" },
  { id: new Id().value, name: "食" },
  { id: new Id().value, name: "住" },
  { id: new Id().value, name: "行" },
]; //为了解决ID函数被反复调用的问题

const useTags = () => {
  //封装一个自定义HOOK
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  return {
    tags,
    setTags,
    findTag,
  };
};

export default useTags;
