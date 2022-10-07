import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

import viteLogo from "./assets/vite.svg";

import { Layout } from "components";
import { Button } from "ui";

const Foo = () => (
  <div>
    <h3>foo</h3>
    <img src={viteLogo} />
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

const App1Container = () => {
  return (
    <>
      <h2>App 1</h2>
      <nav>
        <Link to="/app1">home</Link>
        &nbsp;&nbsp;
        <Link to="/app1/foo">Foo</Link>
        &nbsp;&nbsp;
        <Link to="/app1/bar">Bar</Link>
      </nav>
      <Outlet />
    </>
  );
};

function App({ basePath = "/app1" }) {
  return (
    <Routes>
      <Route path={basePath} element={<Layout />}>
        <Route path="" element={<App1Container />}>
          <Route path="" element={<h3>home</h3>} />
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
