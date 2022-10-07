import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

import reactLogo from "./assets/react.svg";

import { Layout } from "components";
import { Button } from "ui";

const Foo = () => (
  <div>
    <h3>foo</h3>
    <img src={reactLogo} />
  </div>
);
const Bar = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>bar</h3>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  );
};

const App2Container = () => {
  return (
    <>
      <h2>App 2</h2>
      <nav>
        <Link to="/app2">home</Link>
        &nbsp;&nbsp;
        <Link to="/app2/foo">Foo</Link>
        &nbsp;&nbsp;
        <Link to="/app2/bar">Bar</Link>
      </nav>
      <Outlet />
    </>
  );
};

function App({ basePath = "/app2" }) {
  return (
    <Routes>
      <Route path={basePath} element={<Layout />}>
        <Route path="" element={<App2Container />}>
          <Route path="" element={<h3>home</h3>} />
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
