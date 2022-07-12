import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* flex默认左右结构，下面这句话就是写成上下结构 */
`;
const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  /* flex-grow表示尽量的高 */
  overflow: auto;
`;

const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/tags" element={<Tags />}></Route>
            <Route path="/money" element={<Money />}></Route>
            <Route path="/statistics" element={<Statistics />}></Route>
            <Route path="/" element={<Money />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页面</Link>
            </li>
            <li>
              <Link to="/money">记账页面</Link>
            </li>
            <li>
              <Link to="/statistics">统计页面</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <div>页面不存在</div>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

export default App;
