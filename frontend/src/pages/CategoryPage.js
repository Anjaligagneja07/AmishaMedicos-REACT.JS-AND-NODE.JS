import React from "react";
import { Link } from "react-router-dom";

function CategoryPage({ category }) {

  return (
    <div className="inner-page">

      <div className="breadcrumb">
        Home / {category}
      </div>
      <div className="page-header">

        <h1>
          {category}
        </h1>

        <p>
          Explore our wide range of {category.toLowerCase()} products.
        </p>

      </div>


      <div className="category-products">

        <div className="dummy-product">
          <div className="dummy-image">
            💊
          </div>

          <h3>
            {category} Product
          </h3>

          <p>
            Quality healthcare product
          </p>

          <strong>
            ₹199
          </strong>

          <button>
            Add to Cart
          </button>
        </div>


        <div className="dummy-product">
          <div className="dummy-image">
            🧴
          </div>

          <h3>
            Premium {category}
          </h3>

          <p>
            Trusted healthcare product
          </p>

          <strong>
            ₹299
          </strong>

          <button>
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}

export default CategoryPage;