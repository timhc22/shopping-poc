import React from 'react';
import { connect } from 'react-redux';
import { Transaction as TransactionType } from "../types/Transaction";
import CreditAccount from "./CreditAccount";
import { TextField } from "@material-ui/core";

type UserBalanceProps = {
  transactions: TransactionType[],
  type?: string,
  id?: number | string
}

const UserBalance = ({ transactions, type, id }: UserBalanceProps ) => {
  let userTotal = 0;

  const userTransactions = transactions.map(t => {
    // todo add more checks
    if (t.type === type && t.id === id) {
      userTotal = userTotal + t.amount;
      return t;
    }
  }).filter(e=>e);

  return (
    <div className="user-balance"><TextField id="outlined-basic" variant="outlined" value={`Balance: ${userTotal} $BSN`} /><br/><br/>
      { id && type && typeof id === 'number' ? <CreditAccount type={type} id={id} /> : '' }
    </div>
  )
};

const mapStateToProps = (state: any) => {
  const transactions = state.items.transactions;
  return { transactions };
}

export default connect(
  mapStateToProps
)(UserBalance);
