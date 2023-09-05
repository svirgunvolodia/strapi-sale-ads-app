import React from "react";
import './Product.css'
import { getFormattedDate } from "../utils/helper";
import Button from "./Button";
import { BACKEND_URL } from "../utils/config";

const defaultFallbackImage = '/default-fallback-image.png'

function Product({ product, onEditSubmit, onDeleteSubmit }) {
  const {
    id,
    attributes: {
      Title: title,
      Description: description,
      createdAt
    }
  } = product;

  const pictureUrl = product.attributes.Picture
    ? `${BACKEND_URL}${product.attributes.Picture.data.attributes.formats.large.url}`
    : defaultFallbackImage

  return (
    <div className="product-container">
      <img className="product-picture" src={pictureUrl} />
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
