import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
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

type Props = {
  value: "-" | "+";
  onChange: (value: "-" | "+") => void;
};
const CategorySection: React.FC<Props> = (props) => {
  // const [category, setCategory] = useState("-"); //+表示收入-表示支出
  const category = props.value;
  const [categoryList] = useState<("-" | "+")[]>(["-", "+"]);
  const categoryMap = { "-": "支出", "+": "收入" };
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={category === c ? "selected" : ""}
            onClick={() => props.onChange(c)}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default CategorySection;
