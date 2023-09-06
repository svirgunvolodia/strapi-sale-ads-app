import React, { useState, useEffect } from "react";
import './EditProductModal.css'
import Button from "./Button.js";

function EditProductModal({ isOpen, onClose, onSave, product }) {
  const [title, setTitle] = useState(product?.attributes?.Title);
  const [description, setDescription] = useState(product?.attributes?.Description);

  useEffect(() => {
    setTitle(product?.attributes?.Title)
    setDescription(product?.attributes?.Description)
  }, [product])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveClick = () => {
    onSave({Title: title, Description: description});
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Edit Product</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <div className="modal-actions">
          <Button onClick={onClose} text="Cancel"/>
          <Button onClick={handleSaveClick} text="Save"/>
        </div>
      </div>
    </div>
  );
}

export default EditProductModal;
