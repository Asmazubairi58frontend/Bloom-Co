import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, isSignedIn } = useStore();
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.name} />
        <span className="image-arrow"><ArrowUpRight size={17} /></span>
      </Link>
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>
        <div className="product-title-row"><h3>{product.name}</h3><strong>${product.price}</strong></div>
        <p>{product.description}</p>
        <div className="product-actions">
          <Link className="button button-outline" to={`/product/${product.id}`}>View product <ArrowUpRight size={14} /></Link>
          <button className="button button-primary" onClick={() => addToCart(product.id)} disabled={!isSignedIn} title={!isSignedIn ? "Sign in to add items" : "Add to cart"}>
            <Plus size={15} /> Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}