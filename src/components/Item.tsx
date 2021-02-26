import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus } from '../redux/actions'

type ItemProps = {
  item: any;
  toggleItemStatus?: any; // todo this is a function
  readOnly?: boolean;
  sellerId?: number;
  buyerId?: number; // optional as won't include an id until it is bought
}

const Item = ({ item, toggleItemStatus, readOnly = false, sellerId, buyerId }: ItemProps) => {

  if (readOnly) {
    return (
      <tr className="item">
        <td>Item: {item.content}</td>
        <td>Price: {item.price}$BSN</td>
        <td>{item.sellerId ? `Seller: ${item.sellerId}` : 'Seller: no seller'}</td>
        <td>{item.buyerId ? `Buyer: ${item.buyerId}` : 'Buyer: no buyer'}</td>
        <td>
          {item.sold ? `Status: sold` : 'Status: unsold'}
        </td>
      </tr>
    )
  } else {
    return (
      <tr className="item">
        <td>{item && item.sold ? item.buyerId === buyerId ? <button onClick={() => toggleItemStatus(item.id, buyerId)} className="buy-sell-button">Cancel</button> : '' : <button onClick={() => toggleItemStatus(item.id, buyerId)} className="buy-sell-button">Order</button>}</td>
        <td
          className={cx(
            'item__text',
            item && item.sold && 'item__text--sold'
          )}
        >
        Item: {item.content}
        </td>
        <td className={cx(
          'item__text',
          item && item.sold && 'item__text--sold'
        )}>Price: {item.price}$BSN</td>
        <td>{item.sellerId ? `Seller: ${item.sellerId}` : 'Seller: no seller'}</td>
        <td>
          {item.buyerId ? `Buyer: ${item.buyerId}` : 'Buyer: no buyer'}
        </td>
        <td>
          {item.sold ? `Status: sold` : 'Status: unsold'}
        </td>
      </tr>
    )
  }
};

export default connect(
  null,
  { toggleItemStatus }
)(Item);
