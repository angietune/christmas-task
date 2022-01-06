import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartPage from './Components/Pages/StartPage/StartPage';
import Toys from './Components/Pages/Toys/Toys';
import Tree from './Components/Pages/Tree/Tree';
import './styles.scss';

const App = function () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/toys" element={<Toys />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
