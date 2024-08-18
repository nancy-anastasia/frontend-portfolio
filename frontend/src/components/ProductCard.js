import "./ProductCard.css";
import { Link } from "react-router-dom";

/**
 * ProductCard Component represents a single product card displayed
 * in a grid or list in an online store
 *
 * Props:
 *  - productId (string): Unique identifier for the product
 *  - imageUrl (string): URL of the product image
 *  - productName (string): Name of the product
 *  - productDescription (string): Description of the product
 *  - productPrice (number): Price of the product
 */
const ProductCard = ({
  productId,
  imageUrl,
  productName,
  productDescription,
  productPrice,
}) => {
  return (
    /* The entire area of the card is clickable in this project. This approach is widely used in online stores to enhance the user experience by making it intuitive and straightforward for users to interact with products. */
    <div className="product__card">
      <Link to={`/product/${productId}`} className="product__link">
        <img src={imageUrl} alt={productName} className="product__image"></img>
        <div className="product__info">
          <p className="product__name">{productName}</p>
          <p className="product__description">
            {/* Display the product description truncated to 100 characters, or a default message if no description is provided. */}
            {productDescription
              ? productDescription.substring(0, 100) + "..."
              : "No description available."}
          </p>
          <p className="product__price">${productPrice}</p>
          {/* The button is meant to be purely decorative because the entire card is already clickable. It's a visual clue for users that this area can be clicked. */}
          <div className="product__button">View Details</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
