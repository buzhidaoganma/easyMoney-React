import useUpdate from "hooks/useUpdate";
import Id from "lib/Id";
import { useEffect, useState } from "react";

// const defaultTags = [
//   { id: new Id().value, name: "衣" },
//   { id: new Id().value, name: "食" },
//   { id: new Id().value, name: "住" },
//   { id: new Id().value, name: "行" },
// ]; //为了解决ID函数被反复调用的问题

const useTags = () => {
  //封装一个自定义HOOK
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: new Id().value, name: "衣" },
        { id: new Id().value, name: "食" },
        { id: new Id().value, name: "住" },
        { id: new Id().value, name: "行" },
      ];
    }
    setTags(localTags);
  }, []); //组件挂载时执行，就是每次刷新页面执行
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);
  // const count = useRef(0);
  // useEffect(() => {
  //   count.current += 1;
  // });

  // useEffect(() => {
  //   if (count.current > 1) {
  //     window.localStorage.setItem("tags", JSON.stringify(tags));
  //   }
  // }, [tags]);
  // [tags]表示tags变化之后做前面的事情window.localStorage.setItem
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
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: new Id().value, name: tagName }]);
    }
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    //如果发现说声明了没有使用，就是忘记return了
    findTagIndex,
    deleteTag,
    addTag,
  };
};

export default useTags;
