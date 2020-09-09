import React from "react";
import { Link } from "react-router-dom";

function Category({ title, list }) {
  const [category1, category2, category3, category4, category5] = list;

  return (
    <ul>
      <Link to="/shoplist">
        <li>{title}</li>
      </Link>
      <li>
        <span>{category1}</span>
      </li>
      <li>
        <span>{category2}</span>
      </li>
      <li>
        <span>{category3}</span>
      </li>
      <li>
        <span>{category4}</span>
      </li>
      <li>
        <span>{category5}</span>
      </li>
    </ul>
  );
}

export default Category;
