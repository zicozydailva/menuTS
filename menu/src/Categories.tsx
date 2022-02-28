import React from "react";

interface Props {
  filteredItem: (category: string) => void;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const Categories = ({ filteredItem, categories, setCategories }: Props) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          
            <button
              type="button"
              onClick={() => filteredItem(category)}
              className="filter-btn"
            >
              {category}
            </button>
        );
      })}
    </div>
  );
};

export default Categories;
