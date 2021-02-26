import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus, dispatchItem, complainItem, completeItem } from '../redux/actions'
import { Item as ItemType } from "../types/Item";

type ItemProps = {
  item: ItemType;
  // todo these need function types
  toggleItemStatus?: any;
  dispatchItem?: any;
  completeItem?: any;
  complainItem?: any;
  readOnly?: boolean;
  sellerId?: number;
  buyerId?: number; // optional as won't include an id until it is bought
}

const Item = ({ item, toggleItemStatus, dispatchItem, complainItem, completeItem, readOnly = false, sellerId, buyerId }: ItemProps) => {

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
          {item.buyerId === buyerId && !item.dispatched ? <button onClick={() => toggleItemStatus(item.id, buyerId)} className="buy-sell-button">Cancel</button> : ''}
          {item.buyerId === buyerId && item.dispatched && (!item.complete && !item.complained) ? <button onClick={() => completeItem(item.id)} className="buy-sell-button">Complete</button> : ''}
          {item.buyerId === buyerId && item.dispatched && (!item.complete && !item.complained) ? <button onClick={() => complainItem(item.id)} className="buy-sell-button">Complain</button> : ''}
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
          { item.sold === false ? `Status: unsold` : ''}
          { item.sold && item.dispatched !== true ? `Status: sold | awaiting dispatch...` : ''}
          { item.dispatched ? 'Dispatched! | awaiting completion...' : ''}

          { (item.complete) ? 'Complete!' : ''}
          { (item.complained) ? 'Complained!' : ''}

          { (item.dispatched !== true && item.sold && item.sellerId === sellerId) ? <button onClick={() => dispatchItem(item.id)} className="buy-sell-button">Dispatch</button> : ''}
        </td>
      </tr>
    )
  }
};

export default connect(
  null,
  { toggleItemStatus, dispatchItem, completeItem, complainItem }
)(Item);
