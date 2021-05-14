import React from 'react';
import './App.css';
import BuyerPage from "./pages/BuyerPage/BuyerPage";
import SellerPage from "./pages/SellerPage/SellerPage";
import DashboardPage from './pages/DashboardPage/DashboardPage';
import EscrowPage from "./pages/EscrowPage/EscrowPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, Link,
} from 'react-router-dom';

function App() : JSX.Element {
  return (
    <div className="App">
      <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            <Link to="/" className="logo">
              Shopping
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/buyer/:id" component={BuyerPage} />
        <Route exact path="/seller/:id" component={SellerPage} />
        <Route exact path="/escrow" component={EscrowPage} />
        <Route exact path="/transactions" component={TransactionsPage} />
        <Redirect to="/" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
