import React from 'react';
import { connect } from 'react-redux';
import { Item as ItemType } from '../types/Item';
import Item from './Item';
import { getItemsByItemListStateFilter } from '../redux/selectors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    <TableContainer >
      <Table className="transactions table-style item-list" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Seller ID</TableCell>
            <TableCell>Buyer ID</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {items && items.length
          ? items.map((item: any, index: number) => {
            return <Item key={`item-${item.id}`} item={item} readOnly={readOnly} sellerId={sellerId} buyerId={buyerId} />;
          })
          : <TableRow><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow> }
        </TableBody>
      </Table>
    </TableContainer>
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
