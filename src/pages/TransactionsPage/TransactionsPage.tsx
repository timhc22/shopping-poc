import React from 'react';
import { Link } from 'react-router-dom';
import UserBalance from "../../components/UserBalance";

export default function TransactionsPage(): JSX.Element {

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Transactions</h1>
      <UserBalance type="" id="" />
    </div>
  );
}
