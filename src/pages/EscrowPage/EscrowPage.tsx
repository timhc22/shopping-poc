import React from 'react';
import { Link } from 'react-router-dom';
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";
import UserBalance from "../../components/UserBalance";

export default function EscrowPage(): JSX.Element {

  return (
    <div>
      <h1>Escrow</h1>
      <UserBalance type="escrow"/>
      <ItemStateFilters />
      <ForSaleList readOnly={true} />
    </div>
  );
}
