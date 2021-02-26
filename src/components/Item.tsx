import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus, dispatchItem, complainItem, completeItem } from '../redux/actions'
import { Item as ItemType } from "../types/Item";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";

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
      <TableRow className="item">
        <TableCell>{item.content}</TableCell>
        <TableCell>{item.price}$BSN</TableCell>
        <TableCell>
          <Link to={`/seller/${item.sellerId}`} className="button">
            {item.sellerId ? `${item.sellerId}` : 'no seller'}
          </Link>
        </TableCell>
        <TableCell>
          <Link to={`/buyer/${item.buyerId}`} className="button">
            {item.buyerId ? `${item.buyerId}` : 'no buyer'}
          </Link>
        </TableCell>
        <TableCell>
          {item.sold ? `Status: sold ` : 'Status: unsold'} { (item.sold && item.buyerId === buyerId) || (item.sold && item.sellerId === sellerId) ? `| Dispatched: ${item.dispatched}` : ''}
        </TableCell>
      </TableRow>
    )
  } else {
    return (
      <TableRow className="item">
        <TableCell>
          {(buyerId && item && !item.sold) ? <button onClick={() => toggleItemStatus(item.id, buyerId)} className="buy-sell-button">Order</button> : '' }
          {item.buyerId === buyerId && !item.dispatched ? <button onClick={() => toggleItemStatus(item.id, buyerId)} className="buy-sell-button">Cancel</button> : ''}
          {item.buyerId === buyerId && item.dispatched && (!item.complete && !item.complained) ? <button onClick={() => completeItem(item.id)} className="buy-sell-button">Complete</button> : ''}
          {item.buyerId === buyerId && item.dispatched && (!item.complete && !item.complained) ? <button onClick={() => complainItem(item.id)} className="buy-sell-button">Complain</button> : ''}
        </TableCell>
        <TableCell
          className={cx(
            'item__text',
            item && item.sold && 'item__text--sold'
          )}
        >
        {item.content}
        </TableCell>
        <TableCell className={cx(
          'item__text',
          item && item.sold && 'item__text--sold'
        )}>{item.price}$BSN</TableCell>
        <TableCell>
          <Link to={`/seller/${item.sellerId}`} className="button">
            {item.sellerId ? `${item.sellerId}` : 'no seller'}
          </Link>
        </TableCell>
        <TableCell>
          <Link to={`/buyer/${item.buyerId}`} className="button">
            {item.buyerId ? `${item.buyerId}` : 'no buyer'}
          </Link>
        </TableCell>
        <TableCell>
          { !item.sold ? `unsold` : ''}
          { item.sold && !item.dispatched ? `sold | awaiting dispatch...` : ''}
          { item.dispatched ? 'Dispatched! | awaiting completion...' : ''}

          { (item.complete) ? 'Complete!' : ''}
          { (item.complained) ? 'Complained!' : ''}

          { (!item.dispatched && item.sold && item.sellerId === sellerId) ? <button onClick={() => dispatchItem(item.id)} className="buy-sell-button">Dispatch</button> : ''}
        </TableCell>
      </TableRow>
    )
  }
};

export default connect(
  null,
  { toggleItemStatus, dispatchItem, completeItem, complainItem }
)(Item);
