import React from 'react';
import { connect } from 'react-redux';
import { Transaction as TransactionType } from "../types/Transaction";
import CreditAccount from "./CreditAccount";
import { TextField } from "@material-ui/core";
import { Item as ItemType } from "../types/Item";

type UserBalanceProps = {
  transactions: TransactionType[],
  items: ItemType[],
  type?: string,
  id?: number | string
}

const UserBalance = ({ transactions, items, type, id }: UserBalanceProps ) => {
  let userTotal = 0;

  if (type === 'escrow') {
    for (let key in items) {
      let item = items[key];
      if (item.ordered && (!item.complete && !item.complained)) {
        userTotal = userTotal + item.price;
      }
    }
    return (
      <div className="user-balance">
        <TextField id="outlined-basic" variant="outlined" value={`Balance: ${userTotal} $SHC`} />
      </div>
    )
  }

  const userTransactions = transactions.map((t: TransactionType) => {
    // todo add more checks
    if (t.type === type && t.id === id) {
      userTotal = userTotal + t.amount;
      return t;
    }
  }).filter(e=>e);

  return (
    <div className="user-balance"><TextField id="outlined-basic" variant="outlined" value={`Balance: ${userTotal} $SHC`} /><br/><br/>
      { id && type && typeof id === 'number' ? <CreditAccount type={type} id={id} /> : '' }
    </div>
  )
};

const mapStateToProps = (state: any) => {
  const transactions = state.items.transactions;
  const items = state.items.allIds.length > 0 ? state.items.byIds : [];
  return { transactions, items };
}

export default connect(
  mapStateToProps
)(UserBalance);
