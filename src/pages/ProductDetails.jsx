import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Check, Plus, ShoppingBag } from "lucide-react";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";
import ProtectedNotice from "../components/ProtectedNotice";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { isSignedIn, addToCart } = useStore();
  if (!product) return <Navigate to="/" replace />;
  if (!isSignedIn) return <ProtectedNotice />;
  function handleAdd() {
    addToCart(product.id);
    window.alert(`${product.name} added to your cart.`);
  }
  return (
    <main className="detail-page page-shell">
      <Link to="/" className="back-link"><ArrowLeft size={15} /> Back to collection</Link>
      <section className="detail-layout">
        <div className="detail-image"><img src={product.image} alt={product.name} /></div>
        <div className="detail-copy">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <strong className="detail-price">${product.price}.00</strong>
          <p className="detail-description">{product.details}</p>
          <div className="detail-perks"><span><Check size={15} /> Hand-arranged with care</span><span><Check size={15} /> Seasonal, fresh stems</span></div>
          <button className="button button-primary detail-add" onClick={handleAdd}><ShoppingBag size={16} /> Add to cart</button>
          <p className="detail-small">Every arrangement is made with care. Natural variations make each one unique.</p>
        </div>
      </section>
    </main>
  );
}