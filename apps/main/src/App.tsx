import { Suspense, lazy } from "react";
import { Layout } from "components";
import { Routes, Route } from "react-router-dom";

const App1 = lazy(() => import("../../app1/src/App"));
const App2 = lazy(() => import("../../app2/src/App"));

const NotFound = () => (
  <Layout>
    <pre>404</pre>
  </Layout>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME</Layout>} />
      <Route
        path="/app1/*"
        element={
          <Suspense fallback={<Layout>...</Layout>}>
            <App1 basePath="" />
          </Suspense>
        }
      />
      <Route
        path="/app2/*"
        element={
          <Suspense fallback={<Layout>...</Layout>}>
            <App2 basePath="" />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
