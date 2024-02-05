import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/_layout';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={
          <Layout>
            <Routes>              
              <Route index element={<Home />} />
              <Route path="/projet/:id" element={<Project />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
