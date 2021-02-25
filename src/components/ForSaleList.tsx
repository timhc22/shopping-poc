import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { getItemsByItemListStateFilter } from '../redux/selectors';

const ForSaleList = ({ items }: any) => (
  <ul className="item-list">
    {items && items.length
      ? items.map((item: any, index: number) => {
        return <Item key={`item-${item.id}`} item={item} />;
      })
      : 'Empty' }
  </ul>
);

const mapStateToProps = (state: any) => {
  const { itemStateFilter } = state;
  const items = getItemsByItemListStateFilter(state, itemStateFilter);
  return { items };
}

export default connect(
  mapStateToProps
)(ForSaleList);
