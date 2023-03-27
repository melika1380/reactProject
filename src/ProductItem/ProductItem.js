import React from "react";
import Button from "../Button/Button";
import "./ProductItem.css";

const ProductsItem = ({data}) => (
    <li className="ProductItem">
        <h3>{data.name}</h3>
        <img src={data.image} />
        <span>price: {data.price}</span>
        <Button>
            add to cart
        </Button>
    </li>
);

export default ProductsItem