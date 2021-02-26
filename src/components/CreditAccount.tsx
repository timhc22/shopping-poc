import React from 'react';
import { connect } from 'react-redux';
import { creditAccount } from '../redux/actions';

type CreditAccountProps = {
  creditAccount?: any;
  id?: number;
  type?: string;
}

type CreditAccountState = {
  amount: number;
  id: number;
  type?: string;
}

class CreditAccount extends React.Component<CreditAccountProps, CreditAccountState> {
  constructor(props: any) {
    super(props);
    this.state = { type: props.type, amount: 10, id: props.id };
  }

  addFunds = (input: any) => {
    this.setState({ ...this.state, amount: input });
  }

  handleCreditAccount = () => {
    this.props.creditAccount(this.state.type, this.state.id, this.state.amount);
    this.setState({ ...this.state, amount: 10 });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.addFunds(e.target.value)}
          value={this.state.amount}
          placeholder="Amount"
        />
        <button className="list-item" onClick={this.handleCreditAccount}>
          Add Funds
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { creditAccount }
)(CreditAccount);
