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
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    // 这行代码的效果和底下的几行代码的效果一样setTags(tags.map((tag) => (tag.id === id ? { id, name: obj.name } : tag)));
    const index = findTagIndex(id);
    //获取你要改的tag的下标
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //因为我们要在标签页更改标签名，又不使得原来的数据ID出错，所以先克隆来修改备份
    tagsClone.splice(index, 1, { id: id, name: obj.name });
    setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    // 这行代码的效果和下面四行是一样的 setTags(tags.filter(tag=>tag.id!==id))

    //获取你要删的tag下标
    const index = findTagIndex(id);
    //深拷贝tags得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //把tagsClone的第index删除
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    //如果发现说声明了没有使用，就是忘记return了
    findTagIndex,
    deleteTag,
  };
};

export default useTags;
