import React from 'react';
import { connect } from 'react-redux';
import { Transaction as TransactionType } from "../types/Transaction";

type UserBalanceProps = {
  transactions: TransactionType[],
  type?: string,
  id?: number | string
}

const UserBalance = ({ transactions, type, id }: UserBalanceProps ) => {
  if (type == '' && id == '') {
    return (
      <table className="transactions table-style">
        <tbody>
        { transactions.slice(0).reverse().map(t => (
        <tr key={t.timestamp}>
          <td>Timestamp: {t.timestamp}&emsp;</td>
          <td>Id: {t.type}&nbsp;</td>
          <td>{t.id}&emsp;</td>
          <td>Transaction: {t.transactionType}&nbsp;</td>
          <td>{t.amount}&emsp;</td>
        </tr>
        ))}
        </tbody>
      </table>
    )
  }

  let userTotal = 0;

  const userTransactions = transactions.map(t => {
    // todo add more checks
    if (t.type === type && t.id === id) {
      userTotal = userTotal + t.amount;
      return t;
    }
  }).filter(e=>e);

  return (
    <div>Balance: {userTotal}$BSN</div>
  )
};

const mapStateToProps = (state: any) => {
  const transactions = state.items.transactions;
  return { transactions };
}

export default connect(
  mapStateToProps
)(UserBalance);
