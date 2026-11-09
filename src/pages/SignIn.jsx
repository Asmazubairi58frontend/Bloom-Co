import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Flower2, ArrowRight } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function SignIn() {
  const { isSignedIn, signIn } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  if (isSignedIn) return <Navigate to="/" replace />;

  function handleSubmit(event) {
    event.preventDefault();
    const message = signIn(email, password);
    if (message) { setError(message); return; }
    window.alert("You have signed in successfully. Welcome to Bloom & Co.!");
    navigate("/", { replace: true });
  }

  return (
    <main className="signin-page">
      <div className="signin-art">
        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=90" alt="A soft floral arrangement" />
        <div className="signin-art-caption"><Flower2 size={21} /><span>Find your moment<br /><em>in full bloom.</em></span></div>
      </div>
      <section className="signin-panel">
        <span className="eyebrow">WELCOME TO BLOOM & CO.</span>
        <h1>Good to have<br /><em>you here.</em></h1>
        <p className="signin-intro">Sign in to explore our collection and save your favourite blooms to your cart.</p>
        <form onSubmit={handleSubmit} className="signin-form">
          <label>Email address<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required /></label>
          <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" minLength="4" required /></label>
          {error && <p className="form-error">{error}</p>}
          <button className="button button-primary signin-submit" type="submit">Sign in <ArrowRight size={16} /></button>
        </form>
        <p className="signin-footnote">Demo sign-in: use any valid email and a password of 4+ characters.</p>
        <Link to="/" className="back-link">← Back to products</Link>
      </section>
    </main>
  );
}