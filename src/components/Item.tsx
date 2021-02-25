import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleItemStatus } from '../redux/actions'

const Item = ({ item, toggleItemStatus, readOnly = false }: any) => {

  if (readOnly) {
    return (
      <li className="item">
        <span>{item.content}</span>
      </li>
    )
  } else {
    return (
      <li className="item" onClick={() => toggleItemStatus(item.id)}>
        <button className="buy-sell-button">{item && item.sold ? 'Sell' : 'Buy'}</button>
        <span
          className={cx(
            'item__text',
            item && item.sold && 'item__text--sold'
          )}
        >
        {item.content}
        </span>
      </li>
    )
  }
};

export default connect(
  null,
  { toggleItemStatus }
)(Item);
