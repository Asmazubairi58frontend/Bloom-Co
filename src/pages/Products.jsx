import { Sparkles } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProtectedNotice from "../components/ProtectedNotice";
import { useStore } from "../context/StoreContext";

export default function Products() {
  const { isSignedIn } = useStore();
  if (!isSignedIn) return <ProtectedNotice />;
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={13} /> FLOWERS FOR EVERY LITTLE MOMENT</span>
          <h1>Let life <em>blossom.</em></h1>
          <p>Thoughtfully gathered flowers, arranged with care and delivered with love.</p>
        </div>
        <div className="hero-note"><span>01 / 08</span><p>Fresh stems.<br />Soft moments.</p></div>
      </section>
      <div className="section-heading"><div><span className="eyebrow">THE COLLECTION</span><h2>Made to make you smile</h2></div><span className="collection-count">08 curated arrangements</span></div>
      <section className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</section>
    </main>
  );
}