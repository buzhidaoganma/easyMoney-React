import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Statistics from "views/Statistics";
import Tags from "views/Tags";

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

export default App;
