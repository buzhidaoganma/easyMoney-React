import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  background: #ffffff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      > a {
        display: flex;
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.light {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink
            to="/money"
            className={({ isActive }) => (isActive ? "light" : "")}
          >
            <Icon name="money" />
            记账页面
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tags"
            className={({ isActive }) => (isActive ? "light" : "")}
          >
            <Icon name="tag" />
            标签页面
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? "light" : "")}
          >
            <Icon name="chart" />
            统计页面
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
