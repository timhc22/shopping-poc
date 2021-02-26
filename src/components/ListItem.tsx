import React from 'react';
import { connect } from 'react-redux';
import { listItem } from '../redux/actions';
import {Button, Input} from "@material-ui/core";

type ListItemProps = {
  listItem?: any;
  sellerId?: number;
}

type ListItemState = {
  input?: string;
  sellerId: number;
  price: number;
}

class ListItem extends React.Component<ListItemProps, ListItemState> {
  constructor(props: any) {
    super(props);
    this.state = { input: "", price: 0, sellerId: props.sellerId };
  }

  updateInput = (input: any) => {
    this.setState({ ...this.state,  input: input });
  }

  updatePrice = (input: any) => {
    this.setState({ ...this.state,  price: input });
  }

  handleListItem = () => {
    this.props.listItem(this.state.sellerId, this.state.input, this.state.price);
    this.setState({ ...this.state,  input: "", price: 0 });
  };

  render() {
    return (
      <div>
        <Input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="Item"
        />
        <Input
          onChange={e => this.updatePrice(e.target.value)}
          value={this.state.price}
          placeholder="Price"
        />
        <Button color="primary" variant="outlined" className="list-item" onClick={this.handleListItem}>
          List Item
        </Button>
      </div>
    )
  }
}

export default connect(
  null,
  { listItem }
)(ListItem);
