import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from "../../components/ListItem";
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";

export default function SellerPage(props: any): JSX.Element {
  const sellerId = parseInt(props.match.params.id);

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Seller {sellerId}</h1>
      <ListItem sellerId={sellerId} />
      <br/>
      <ItemStateFilters />
      <ForSaleList readOnly={true} sellerId={sellerId} />
    </div>
  );
}
