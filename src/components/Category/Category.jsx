import React from 'react';
import './Category.css';

function Category({ title, children }) {
  return (
    <section className="category">
      <h2 className="category__title">{title}</h2>
      <div className="category__content">{children}</div>
    </section>
  );
}

export default Category;