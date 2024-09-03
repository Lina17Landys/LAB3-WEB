import React, { useState } from 'react';

const CategoryFilter = ({ onCategoryChange }) => {
  const categories = ['Savings', 'Food', 'House', 'Miscellaneous Expenses', 'Leisure', 'Health', 'Subscriptions'];
  const [selectedCategory, setSelectedCategory] = useState('-- All categories --');

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory); 
  };

  return (
    <div className="category-filter">
      <label htmlFor="category-select">Filter categories</label>
      <select 
        id="category-select" 
        value={selectedCategory} 
        onChange={handleCategoryChange}
      >
        <option value="-- All categories --">-- All categories --</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
