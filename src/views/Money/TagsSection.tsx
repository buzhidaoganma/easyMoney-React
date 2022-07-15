import styled from "styled-components";

const TagsSection = styled.section`
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

export default TagsSection;
