import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(() => localStorage.getItem("bloom-auth") === "true");
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("bloom-cart")) || {}; }
    catch { return {}; }
  });

  useEffect(() => localStorage.setItem("bloom-cart", JSON.stringify(cart)), [cart]);

  function signIn(email, password) {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (password.length < 4) return "Password must contain at least 4 characters.";
    localStorage.setItem("bloom-auth", "true");
    setIsSignedIn(true);
    return null;
  }

  function signOut() {
    localStorage.removeItem("bloom-auth");
    setIsSignedIn(false);
  }

  function addToCart(id) {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
  }

  function changeQuantity(id, amount) {
    setCart((current) => {
      const next = { ...current };
      const quantity = (next[id] || 0) + amount;
      if (quantity <= 0) delete next[id];
      else next[id] = quantity;
      return next;
    });
  }

  function clearCart() { setCart({}); }

  const value = {
    isSignedIn, signIn, signOut, cart, addToCart, changeQuantity, clearCart,
    cartCount: Object.values(cart).reduce((sum, qty) => sum + qty, 0)
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}