import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      name
      description
      price
      stock
    }
  }
`;

function ProductDetail() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.product.name}</h1>
      <p>{data.product.description}</p>
      <p>Price: {data.product.price}</p>
      <p>Stock: {data.product.stock}</p>
    </div>
  );
}

export default ProductDetail;
