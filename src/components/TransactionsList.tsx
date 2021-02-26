import React from 'react';
import { connect } from 'react-redux';
import { Transaction as TransactionType } from "../types/Transaction";

type TransactionsProps = {
  transactions: TransactionType[],
  type?: string,
  id?: number | string
}

const TransactionsList = ({ transactions, type, id }: TransactionsProps ) => {
  if (type == '' && id == '') {
    console.log(transactions);
    return (
      <table className="transactions table-style">
        <tbody>
        { transactions.slice(0).reverse().map((t: TransactionType) => (
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

  const userTransactions = transactions.map((t: TransactionType) => {
    // todo add more checks
    if (t.type === type && t.id === id) {
      userTotal = userTotal + t.amount;
      return t;
    }
  }).filter(e=>e);

  if (userTransactions.length !== 0) {
    console.log(userTransactions);

    return (
      <table className="transactions table-style">
        <tbody>

        {/* todo WHY CAN'T I MAKE THIS A TRANSACTIONTYPE?? have to use any */}

        {userTransactions.slice(0).reverse().map((tr: any) => (
          <tr key={tr.timestamp}>
            <td>Timestamp: {tr.timestamp}&emsp;</td>
            <td>Id: {tr.type}&nbsp;</td>
            <td>{tr.id}&emsp;</td>
            <td>Transaction: {tr.transactionType}&nbsp;</td>
            <td>{tr.amount}&emsp;</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  } else {
    return (
      <span>'No Transactions'</span>
    )
  }
};

const mapStateToProps = (state: any) => {
  const transactions = state.items.transactions;
  return { transactions };
}
//
export default connect(
  mapStateToProps
)(TransactionsList);
