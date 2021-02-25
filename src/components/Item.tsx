import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus } from '../redux/actions'

const Item = ({ item, toggleItemStatus }: any) => (
  <li className="item" onClick={() => toggleItemStatus(item.id)}>
    {item && item.sold ? <button>Sell</button> : <button>Buy</button>}{''}
    <span
      className={cx(
        'item__text',
        item && item.sold && 'item__text--sold'
      )}
    >
      {item.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleItemStatus }
)(Item);
