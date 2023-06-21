import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  //pass items and setItems from App. Use them to display the initial list of items and to update the list when a new item is added.
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchBar(e) {
    setSearch(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const filteredItems = itemsToDisplay.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  //create onItemFormSubmit as a callback and pass it as a prop to ItemForm
  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]); //create a new array with spread operator -nondestructive-
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchBar}
        search={search}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {/* {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

/*
  This way worked too. Second alternative to write this code
  const itemsToDisplay = items.filter((item) => {
    if (search !== "") {
      return item.name.toLowerCase().includes(search.toLowerCase());
    } else {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    }
  });

  This code have the rest part as an uncommented part in JSX above. itemsToDisplay.map() part.
  
  {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} 
  */
