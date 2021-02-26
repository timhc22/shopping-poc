import React from 'react';
import { Link } from 'react-router-dom';
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";
import UserBalance from "../../components/UserBalance";

export default function BuyerPage(props: any): JSX.Element {
  const buyerId = parseInt(props.match.params.id);

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Buyer {buyerId}</h1>
      <UserBalance type="buyer" id={buyerId}/>
      <br/>

      <ItemStateFilters />
      <ForSaleList buyerId={buyerId}/>
    </div>
  );
}
