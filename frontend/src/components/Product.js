import React from "react";
import './Product.css'
import { getFormattedDate } from "../utils/helper";
import Button from "./Button";

const genderGirlIconPath = '/default-fallback-image.png'

function Product({ product, onEditSubmit, onDeleteSubmit }) {
  const {
    id,
    attributes: {
      Title: title,
      Description: description,
      Picture: picture,
      createdAt
    }
  } = product;

  return (
    <div className="product-container">
      <img className="product-picture" src={picture || genderGirlIconPath} />
      <div className="product-info">
        <h1>{title}</h1>
        <p>{getFormattedDate(createdAt)}</p>
        <span>{description}</span>
      </div>
      <div className="product-actions">
        <Button onClick={() => onEditSubmit(id)} text="Edit" />
        <Button onClick={() => onDeleteSubmit(id)} text="Delete" />
      </div>
    </div>
  );
}

export default Product;
