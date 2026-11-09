import { Link } from "react-router-dom";
import { LockKeyhole, Sparkles } from "lucide-react";

export default function ProtectedNotice({ children }) {
  return (
    <section className="protected-wrap">
      <div className="protected-card">
        <span className="protected-icon"><LockKeyhole size={23} /></span>
        <span className="eyebrow">A little note before you browse</span>
        <h2>Sign in to discover the blooms.</h2>
        <p>Our collection is ready for you. Please sign in to view product details and build your cart.</p>
        <Link to="/signin" className="button button-primary"><Sparkles size={16} /> Sign in to continue</Link>
      </div>
    </section>
  );
}