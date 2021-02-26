import React from 'react';
import { Link } from 'react-router-dom';
import TransactionsList from "../../components/TransactionsList";

export default function TransactionsPage(): JSX.Element {

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Transactions</h1>
      <TransactionsList type="" id="" />
    </div>
  );
}
