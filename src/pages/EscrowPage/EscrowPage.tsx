import React from 'react';
import { Link } from 'react-router-dom';
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";

export default function EscrowPage(): JSX.Element {

  return (
    <div>
      <h1>Escrow</h1>
      <ItemStateFilters />
      <ForSaleList readOnly={true} />
    </div>
  );
}
