import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Statistics from "views/Statistics";
import Tag from "Tag";
import Tags from "views/Tags";

const AppWrapper = styled.div`
  color: #333;
  max-width: 520px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/money" element={<Money />} />
          <Route path="/tags/:id" element={<Tag />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/" element={<Money />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
