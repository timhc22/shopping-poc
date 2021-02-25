import React from 'react';
import { connect } from 'react-redux';
import { listItem } from '../redux/actions';

type ListItemProps = {
  listItem?: any;
  sellerId?: number;
}

type ListItemState = {
  input?: any;
  sellerId: number;
  price: number;
}

class ListItem extends React.Component<ListItemProps, ListItemState> {
  constructor(props: any) {
    super(props);
    this.state = { input: "", price: 10, sellerId: props.sellerId };
  }

  updateInput = (input: any) => {
    this.setState({ ...this.state,  input: input });
  }

  updatePrice = (input: any) => {
    this.setState({ ...this.state,  price: input });
  }

  handleListItem = () => {
    this.props.listItem(this.state.sellerId, this.state.input, this.state.price);
    this.setState({ ...this.state,  input: "", price: 10 });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="Item"
        />
        <input
          onChange={e => this.updatePrice(e.target.value)}
          value={this.state.price}
          placeholder="Price"
        />
        <button className="list-item" onClick={this.handleListItem}>
          List Item
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { listItem }
)(ListItem);
