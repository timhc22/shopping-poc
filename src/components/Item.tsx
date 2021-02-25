import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus } from '../redux/actions'

type ItemProps = {
  item: string;
  toggleItemStatus?: any; // todo this is a function
  readOnly?: boolean;
  buyerId?: number; // optional as won't include an id until it is bought
}

const Item = ({ item, toggleItemStatus, readOnly = false, buyerId }: any) => {

  if (readOnly) {
    return (
      <li className="item">
        <span>{item.content}</span>
      </li>
    )
  } else {
    return (
      <li className="item" onClick={() => toggleItemStatus(item.id, buyerId)}>
        <button className="buy-sell-button">{item && item.sold ? 'Sell' : 'Buy'}</button>
        <span
          className={cx(
            'item__text',
            item && item.sold && 'item__text--sold'
          )}
        >
        {item.content}
        </span>
        <span>
          {item.buyerId ? item.buyerId : 'no buyer'}
        </span>
      </li>
    )
  }
};

export default connect(
  null,
  { toggleItemStatus }
)(Item);
