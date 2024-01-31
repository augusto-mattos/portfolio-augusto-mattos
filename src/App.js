import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/_layout';
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Routes>              
              <Route index element={<Home />} />
              </Routes>
            </Layout>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
