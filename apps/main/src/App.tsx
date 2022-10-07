import { Layout } from "components";
import { Routes, Route } from "react-router-dom";

import App1 from "../../app1/src/App";
import App2 from "../../app2/src/App";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME</Layout>} />
      <Route path="/app1/*" element={<App1 basePath="" />} />
      <Route path="/app2/*" element={<App2 basePath="" />} />
    </Routes>
  );
}

export default App;
