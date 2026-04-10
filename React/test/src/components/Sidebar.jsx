import React from "react";

const Sidebar = ({ categories }) => {
  return (
    <aside className="sidebar">
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {category}
            <span>›</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
