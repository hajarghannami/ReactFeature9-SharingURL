// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";
import products from "../products";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img
          alt={product.name}
          src={product.image}
          // onClick={() => props.selectProduct(product.id)}
        />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton product={product} deleteProduct={props.deleteProduct} />
    </ProductWrapper>
  );
};

export default ProductItem;
