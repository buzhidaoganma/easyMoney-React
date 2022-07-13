import Nav from "components/Nav";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tags" element={<Tags />}></Route>
        <Route path="/money" element={<Money />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
        <Route path="/" element={<Money />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

function NoMatch() {
  return <div>页面不存在</div>;
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

export default App;
