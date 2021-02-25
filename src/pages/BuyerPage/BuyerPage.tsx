import React from 'react';
import { Link } from 'react-router-dom';
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";

export default function BuyerPage(props: any): JSX.Element {
  const buyerId = parseInt(props.match.params.id);

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Buyer {buyerId}</h1>
      <ItemStateFilters />
      <ForSaleList buyerId={buyerId}/>
    </div>
  );
}
