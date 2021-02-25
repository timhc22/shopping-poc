import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { getItemsByItemListStateFilter } from '../redux/selectors';

type ForSaleListProps = {
  items?: typeof Item[];
  readOnly?: boolean;
}

const ForSaleList = ({ items, readOnly = false }: ForSaleListProps ) => (
  <ul className="item-list">
    {items && items.length
      ? items.map((item: any, index: number) => {
        return <Item key={`item-${item.id}`} item={item} readOnly={readOnly} />;
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
