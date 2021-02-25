import React from 'react';
import { connect } from 'react-redux';
import { listItem } from '../redux/actions';

type ListItemProps = {
  listItem?: any;
  sellerId?: number;
}

type ListItemState = {
  input?: any;
  sellerId: number
}

class ListItem extends React.Component<ListItemProps, ListItemState> {
  constructor(props: any) {
    super(props);
    this.state = { input: "", sellerId: props.sellerId };
  }

  updateInput = (input: any) => {
    this.setState({ ...this.state,  input: input });
  }

  handleListItem = () => {
    this.props.listItem(this.state.sellerId, this.state.input);
    this.setState({ ...this.state,  input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
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
