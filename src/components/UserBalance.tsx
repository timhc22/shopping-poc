import React from 'react';
import { connect } from 'react-redux';
import { Transaction as TransactionType } from "../types/Transaction";

type UserBalanceProps = {
  transactions: TransactionType[],
  type: string,
  id: number
}

const UserBalance = ({ transactions, type, id }: UserBalanceProps ) => {

  console.log(transactions);
  console.log(id);
  console.log(type);

  let userTotal = 0;

  const userTransactions = transactions.map(t => {
    // todo add more checks
    if (t.type === type && t.id === id) {
      userTotal = userTotal + t.amount;
      return t;
    }
  }).filter(e=>e);


  console.log(userTransactions);

  return (
    <div>Balance: {userTotal}$BSN</div>
  )
};

const mapStateToProps = (state: any) => {
  // todo add more checks
  const transactions = state.transactions.transactions;

  return { transactions };
}

export default connect(
  mapStateToProps
)(UserBalance);
