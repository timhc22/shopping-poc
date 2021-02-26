import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

export default function DashboardPage(): JSX.Element {

  return (
    <section className="container">
      <div>
        <section className="container">
          <h2>Buyers</h2>
          <Link to="/buyer/1" className="button">
            Buyer 1
          </Link>
          <br/>
          <Link to="/buyer/2" className="button">
            Buyer 2
          </Link>

          <Divider orientation="horizontal" flexItem />

          <h2>Sellers</h2>
          <Link to="/seller/1" className="button">
            Seller 1
          </Link>
          <br/>
          <Link to="/seller/2" className="button">
            Seller 2
          </Link>

          <h2>Escrow</h2>
          <Link to="/escrow" className="button">
            Escrow
          </Link>

          <h2>Transactions</h2>
          <Link to="/transactions" className="button">
            Transactions
          </Link>
        </section>
      </div>
    </section>
  );
}
