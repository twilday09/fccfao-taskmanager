import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppHome from '../components/AppHome';
import AppAbout from '../components/AppAbout';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route path="/" component={AppHome} exact="true" />
        <Route path="/about" component={AppAbout} />
      </div>
    </Router>
  );
};

export default AppRouter;
