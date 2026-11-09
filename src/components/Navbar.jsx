import { Link, NavLink } from "react-router-dom";
import { Flower2, ShoppingBag, LogIn, LogOut } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const { isSignedIn, signOut, cartCount } = useStore();
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark"><Flower2 size={22} /></span>
        <span>Bloom<span className="brand-amp"> & Co.</span></span>
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end>Products</NavLink>
        <NavLink to="/cart" className="cart-link">Cart <span className="cart-count">{cartCount}</span></NavLink>
      </nav>
      <div className="nav-actions">
        {isSignedIn ? (
          <>
            <span className="signed-label"><span className="status-dot" /> Signed in</span>
            <button className="button button-outline nav-button" onClick={signOut}><LogOut size={15} /> Log out</button>
          </>
        ) : (
          <Link className="button button-light nav-button" to="/signin"><LogIn size={15} /> Sign in</Link>
        )}
      </div>
    </header>
  );
}