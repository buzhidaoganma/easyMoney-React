import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        //这里的写法不会使得这个样式的体积变化；
      }
    }
  }
`;
const CategorySection: React.FC = () => {
  const [categoryList] = useState<("-" | "+")[]>(["-", "+"]);
  const [category, setCategory] = useState("-"); //+表示收入-表示支出
  const categoryMap = { "-": "支出", "+": "收入" };
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={category === c ? "selected" : ""}
            onClick={() => setCategory(c)}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default CategorySection;
