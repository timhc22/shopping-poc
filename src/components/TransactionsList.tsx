import React from 'react';
import { connect } from 'react-redux';
import { Transaction as TransactionType } from "../types/Transaction";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

type TransactionsProps = {
  transactions: TransactionType[],
  type?: string,
  id?: number | string
}

const TransactionsList = ({ transactions, type, id }: TransactionsProps ) => {
  if (type == '' && id == '') {
    console.log(transactions);
    return (

      <TableContainer>
        <Table className="transactions table-style" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Transaction</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { transactions.slice(0).reverse().map((t: TransactionType) => (
          <TableRow key={t.timestamp}>
            <TableCell>{t.timestamp}&emsp;</TableCell>
            <TableCell>{t.type}&nbsp;{t.id}&emsp;</TableCell>
            <TableCell>{t.transactionType}&nbsp;</TableCell>
            <TableCell>{t.amount}&emsp;</TableCell>
          </TableRow>
          ))}
          </TableBody>
      </Table>
      </TableContainer>
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

    return (
      <TableContainer>
        <Table className="transactions table-style" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* todo WHY CAN'T I MAKE THIS A TRANSACTIONTYPE?? have to use any */}
            {userTransactions.slice(0).reverse().map((tr: any) => (
              <TableRow key={tr.timestamp}>
                <TableCell>{tr.timestamp}&emsp;</TableCell>
                <TableCell>{tr.type}&nbsp;{tr.id}&emsp;</TableCell>
                <TableCell>{tr.transactionType}&nbsp;</TableCell>
                <TableCell>{tr.amount} $BSN&emsp;</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
