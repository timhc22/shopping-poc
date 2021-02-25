import React from 'react';
import { connect } from 'react-redux';
import { listItem } from '../actions';

interface ListItemProps {
  listItem?: any;
}

interface ListItemState {
  input?: any
}

class ListItem extends React.Component<ListItemProps, ListItemState> {
  constructor(props: any) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input: any) => {
    this.setState({ input });
  }

  handleListItem = () => {
    this.props.listItem(this.state.input);
    this.setState({ input: "" });
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
