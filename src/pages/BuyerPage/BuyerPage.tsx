import React from 'react';
import { Link } from 'react-router-dom';
import ForSaleList from "../../components/ForSaleList";
import ItemStateFilters from "../../components/ItemStateFilters";
import UserBalance from "../../components/UserBalance";
import TransactionsList from "../../components/TransactionsList";
import {Divider} from "@material-ui/core";

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
      <Divider variant="middle" />
      <br/>

      <ItemStateFilters />
      <ForSaleList buyerId={buyerId}/>

      <br/>
      <br/>

      <h3>Buyer {buyerId} Transactions:</h3>
      <TransactionsList type="buyer" id={buyerId}/>
    </div>
  );
}
