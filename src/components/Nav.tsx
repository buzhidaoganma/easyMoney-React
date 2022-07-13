import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tags">标签页面</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">记账页面</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/statistics">统计页面</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;