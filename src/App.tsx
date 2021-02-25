import React from 'react';
import './App.css';
import BuyerPage from "./pages/BuyerPage/BuyerPage";
import SellerPage from "./pages/SellerPage/SellerPage";
import DashboardPage from './pages/DashboardPage/DashboardPage';
import EscrowPage from "./pages/EscrowPage/EscrowPage";

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
          <Route exact path="/buyer/:id" component={BuyerPage} />
          <Route exact path="/seller/:id" component={SellerPage} />
          <Route exact path="/escrow" component={EscrowPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
