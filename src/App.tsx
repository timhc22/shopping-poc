import React from 'react';
import './App.css';
import BuyerPage from "./pages/BuyerPage/BuyerPage";
import SellerPage from "./pages/SellerPage/SellerPage";
import DashboardPage from './pages/DashboardPage/DashboardPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() : JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/buyer" component={BuyerPage} />
          <Route exact path="/seller" component={SellerPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
