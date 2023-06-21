import React, { useState } from "react"; //don't forget to {useState}
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemName, setItemName] = useState([]);

  //handleSubmit function to get the info user create, newItem object.
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory, //set state for itemName and itemCategory to get the info that user and to display them as a newItem at the list
    };
    onItemFormSubmit(newItem);
  }

  /*add onChange to <input> and get the value. Burda onChange={(e) => setItemName(e.target.value)} seklinde cb function i direk inline yazabilirim. Ya da ayirabilirim soyle:
  onChange={handleAddNewItemName} ve de ayrica 
    function handleAddNewItemName(e){
      setItemName
    } same thing for the category */

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setItemName(e.target.value)} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
