import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from "../../components/ListItem";
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";
import UserBalance from "../../components/UserBalance";
import TransactionsList from "../../components/TransactionsList";

export default function SellerPage(props: any): JSX.Element {
  const sellerId = parseInt(props.match.params.id);

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Seller {sellerId}</h1>
      <UserBalance type="buyer" id={sellerId}/>
      <br/>
      <ListItem sellerId={sellerId} />
      <br/>
      <ItemStateFilters />
      <ForSaleList readOnly={true} sellerId={sellerId} />

      <br/>
      <h3>Seller {sellerId} Transactions:</h3>
      <TransactionsList type="seller" id={sellerId}/>
    </div>
  );
}
