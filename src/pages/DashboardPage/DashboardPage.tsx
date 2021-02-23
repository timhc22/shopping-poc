import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

export default function DashboardPage(): JSX.Element {

  return (
    <section className="container">
      <h1>Boson Protocol</h1>
      <div>
        <section className="container">
          <h2>Buyer</h2>
          <Link to="/buyer" className="button">
            Buyer 1
          </Link>

          <Divider orientation="horizontal" flexItem />

          <h2>Seller</h2>
          <Link to="/seller" className="button">
            Seller 1
          </Link>
        </section>
      </div>
    </section>
  );
}
