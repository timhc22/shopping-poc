import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus } from '../redux/actions'

type ItemProps = {
  item: any;
  toggleItemStatus?: any; // todo this is a function
  readOnly?: boolean;
  buyerId?: number; // optional as won't include an id until it is bought
}

const Item = ({ item, toggleItemStatus, readOnly = false, buyerId }: any) => {

  if (readOnly) {
    return (
      <li className="item">
        <span>Item: {item.content},</span>
        <span>&nbsp;</span>
        <span>Price: £{item.price},</span>
        <span>&nbsp;</span>
        <span>{item.buyerId ? `Buyer: ${item.buyerId}` : 'Buyer: no buyer'}</span>
      </li>
    )
  } else {
    return (
      <li className="item" onClick={() => toggleItemStatus(item.id, buyerId)}>
        {item && item.sold ? item.buyerId === buyerId ? <button className="buy-sell-button">Sell</button> : '' : <button className="buy-sell-button">Buy</button>}
        <span>&nbsp;</span>
        <span
          className={cx(
            'item__text',
            item && item.sold && 'item__text--sold'
          )}
        >
        Item: {item.content},
        </span>
        <span>&nbsp;</span>
        <span className={cx(
          'item__text',
          item && item.sold && 'item__text--sold'
        )}>Price: £{item.price},</span>
        <span>&nbsp;</span>
        <span>
          {item.buyerId ? `Buyer: ${item.buyerId}` : 'Buyer: no buyer'}
        </span>
      </li>
    )
  }
};

export default connect(
  null,
  { toggleItemStatus }
)(Item);
