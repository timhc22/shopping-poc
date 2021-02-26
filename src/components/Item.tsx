import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus, dispatchItem } from '../redux/actions'

type ItemProps = {
  item: any;
  toggleItemStatus?: any; // todo this is a function
  dispatchItem?: any; // todo this is a function
  readOnly?: boolean;
  sellerId?: number;
  buyerId?: number; // optional as won't include an id until it is bought
}

const Item = ({ item, toggleItemStatus, dispatchItem, readOnly = false, sellerId, buyerId }: ItemProps) => {

  // used for escrow
  if (readOnly) {
    return (
      <tr className="item">
        <td>Item: {item.content}</td>
        <td>Price: {item.price}$BSN</td>
        <td>{item.sellerId ? `Seller: ${item.sellerId}` : 'Seller: no seller'}</td>
        <td>{item.buyerId ? `Buyer: ${item.buyerId}` : 'Buyer: no buyer'}</td>
        <td>
          {item.sold ? `Status: sold ` : 'Status: unsold'} { (item.sold && item.buyerId === buyerId) || (item.sold && item.sellerId === sellerId) ? `| Dispatched: ${item.dispatched}` : ''}
        </td>
      </tr>
    )
  } else {
    return (
      <tr className="item">
        <td>
          {(buyerId && item && !item.sold) ? <button onClick={() => toggleItemStatus(item.id, buyerId)} className="buy-sell-button">Order</button> : '' }
          {(buyerId && item.buyerId === buyerId) ? <button onClick={() => toggleItemStatus(item.id, buyerId)} className="buy-sell-button">Cancel</button> : ''}
        </td>
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
          {item.sold ? `Status: sold | awaiting dispatch...` : 'Status: unsold'}
          { (item.sold && item.buyerId === buyerId && item.dispatched) ? 'Dispatched!' : ''}
          { (item.sold && item.sellerId === sellerId) ? <button onClick={() => dispatchItem(item.id)} className="buy-sell-button">Dispatch</button> : ''}
        </td>
      </tr>
    )
  }
};

export default connect(
  null,
  { toggleItemStatus, dispatchItem }
)(Item);
