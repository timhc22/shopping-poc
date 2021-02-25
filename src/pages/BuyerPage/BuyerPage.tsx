import React from 'react';
import { Link } from 'react-router-dom';
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";

export default function BuyerPage(): JSX.Element {

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Buyer</h1>
      <ItemStateFilters />
      <ForSaleList />
    </div>
  );
}
