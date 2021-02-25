import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

const Item = ({ item }: any) => (
  <li className="item">
    <span
      className={cx(
        'item__text'
      )}
    >
      {item.content}
    </span>
  </li>
);

export default connect(
  null,
  null
)(Item);
