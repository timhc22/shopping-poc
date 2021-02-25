import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from "../../components/ListItem";

export default function SellerPage(props: any): JSX.Element {
  const sellerId = parseInt(props.match.params.id);

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Seller {sellerId}</h1>
      <ListItem sellerId={sellerId} />
    </div>
  );
}
