import Nav from "components/Nav";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* flex默认左右结构，下面这句话就是写成上下结构 */
`;
const Main = styled.div`
  flex-grow: 1;
  /* flex-grow表示尽量的高 */
  overflow: auto;
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
        <Nav />
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
