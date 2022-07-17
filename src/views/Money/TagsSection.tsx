import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1; //这句话和底下的Layout呼应，有多余的空间就给标签
  display: flex;
  flex-direction: column;
  justify-content: flex-end; //内容尽量靠下
  align-items: start; //内容尽量靠左
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = { value: string[]; onChange: (selected: string[]) => void };
const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
  // const [selectedTags, setSelectedTags] = useState<string[]>([]); //设置选中功能
  const selectedTags = props.value; //读到被选中的标签
  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter((t) => t !== tag)); //我就通知外部最新的标签，外部就要监听onchange事件
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => {
              onToggleTag(tag);
            }}
            className={selectedTags.indexOf(tag) >= 0 ? "selected" : ""}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagsSection;
