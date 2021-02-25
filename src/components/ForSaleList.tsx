import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { getItemsByItemListStateFilter } from '../redux/selectors';

type ItemType = {
  id: number;
  content: string;
  price: number;
}

type ForSaleListProps = {
  items?: ItemType[];
  readOnly?: boolean;
  buyerId?: number; // optional as won't include an id until it is bought
  sellerId?: number;
}

const ForSaleList = ({ items, readOnly = false, buyerId, sellerId }: ForSaleListProps ) => {

  // when listing the seller's own for sale items
  if (items && sellerId) {
    items = items.filter((item: ItemType) => sellerId === item.id);
  }

  return (
    <ul className="item-list">
      {items && items.length
        ? items.map((item: any, index: number) => {
          return <Item key={`item-${item.id}`} item={item} readOnly={readOnly} buyerId={buyerId} />;
        })
        : 'Empty' }
    </ul>
  )
};

const mapStateToProps = (state: any) => {
  const { itemStateFilter } = state;
  const items = getItemsByItemListStateFilter(state, itemStateFilter);
  return { items };
}

export default connect(
  mapStateToProps
)(ForSaleList);
