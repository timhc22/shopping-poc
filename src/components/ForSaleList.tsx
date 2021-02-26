import React from 'react';
import { connect } from 'react-redux';
import { Item as ItemType } from '../types/Item';
import Item from './Item';
import { getItemsByItemListStateFilter } from '../redux/selectors';

type ForSaleListProps = {
  items?: ItemType[];
  readOnly?: boolean;
  buyerId?: number; // optional as won't include an id until it is bought
  sellerId?: number;
}

const ForSaleList = ({ items, readOnly = false, buyerId, sellerId }: ForSaleListProps ) => {

  // when listing the seller's own selling items
  if (items && sellerId) {
    items = items.filter((item: ItemType) => sellerId === item.sellerId);
  }

  return (
    <table className="item-list table-style">
      {items && items.length
        ? items.map((item: any, index: number) => {
          return <Item key={`item-${item.id}`} item={item} readOnly={readOnly} sellerId={sellerId} buyerId={buyerId} />;
        })
        : 'Empty' }
    </table>
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
