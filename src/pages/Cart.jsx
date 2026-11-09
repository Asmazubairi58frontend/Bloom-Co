import { Link, Navigate } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";
import ProtectedNotice from "../components/ProtectedNotice";

export default function Cart() {
  const { isSignedIn, cart, changeQuantity, clearCart } = useStore();
  if (!isSignedIn) return <ProtectedNotice />;
  const items = products.filter((product) => cart[product.id]);
  const subtotal = items.reduce((sum, product) => sum + product.price * cart[product.id], 0);
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <main className="cart-page page-shell">
      <div className="cart-heading"><div><span className="eyebrow">YOUR LITTLE COLLECTION</span><h1>Your cart<span>.</span></h1><p>{totalItems} {totalItems === 1 ? "item" : "items"} waiting to bloom</p></div>{items.length > 0 && <button className="text-button" onClick={clearCart}><Trash2 size={14} /> Clear cart</button>}</div>
      {items.length === 0 ? (
        <div className="empty-cart"><span className="empty-icon"><ShoppingBag size={25} /></span><h2>Your cart is still growing.</h2><p>There are no blooms here just yet. Explore the collection and find something lovely.</p><Link to="/" className="button button-primary">Explore products <ArrowRight size={15} /></Link></div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {items.map((product) => (
              <article className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="cart-item-info"><span className="eyebrow">{product.category}</span><h3>{product.name}</h3><p>${product.price}.00 each</p></div>
                <div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => changeQuantity(product.id, -1)}><Minus size={14} /></button><strong>{cart[product.id]}</strong><button aria-label="Increase quantity" onClick={() => changeQuantity(product.id, 1)}><Plus size={14} /></button></div>
                <strong className="line-total">${(product.price * cart[product.id]).toFixed(2)}</strong>
              </article>
            ))}
          </section>
          <aside className="summary-card"><span className="eyebrow">ORDER SUMMARY</span><h2>A lovely choice.</h2><div className="summary-line"><span>Items ({totalItems})</span><strong>${subtotal.toFixed(2)}</strong></div><div className="summary-line"><span>Delivery</span><strong className="free-label">Calculated later</strong></div><div className="summary-divider" /><div className="summary-line summary-total"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div><p className="summary-note">This is a demo storefront. Checkout and payment are not connected.</p><button className="button button-primary checkout-button" onClick={() => window.alert("Thanks for exploring Bloom & Co.! Checkout is a demo feature.")}>Continue <ArrowRight size={15} /></button></aside>
        </div>
      )}
    </main>
  );
}