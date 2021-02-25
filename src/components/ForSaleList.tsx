import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { getItemsByItemListStatusFilter } from '../redux/selectors';

const ForSaleList = ({ items }: any) => (
  <ul className="item-list">
    {items && items.length
      ? items.map((item: any, index: number) => {
        return <Item key={`item-${item.id}`} item={item} />;
      })
      : 'Nothing for sale yet' }
  </ul>
);

const mapStateToProps = (state: any) => {
  const { itemListStateFilter } = state;
  const items = getItemsByItemListStatusFilter(state, itemListStateFilter);
  return { items };
}

export default connect(
  mapStateToProps
)(ForSaleList);
