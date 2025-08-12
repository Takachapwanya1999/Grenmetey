/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Cart, CartItem, Product } from '../types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const SHIPPING_RATE = 0.1; // 10% shipping
const TAX_RATE = 0.08; // 8% tax

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
    subtotal: 0,
    tax: 0,
    shipping: 0
  });

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error parsing stored cart:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Recalculate totals whenever items change
  useEffect(() => {
    const subtotal = cart.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
    
    const shipping = subtotal > 0 ? subtotal * SHIPPING_RATE : 0;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + shipping + tax;

    setCart(prev => ({
      ...prev,
      subtotal,
      shipping,
      tax,
      total
    }));
  }, [cart.items]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existingItemIndex = prev.items.findIndex(item => item.productId === product.id);
      
      if (existingItemIndex >= 0) {
        // Update existing item quantity
        const updatedItems = [...prev.items];
        updatedItems[existingItemIndex].quantity += quantity;
        
        return {
          ...prev,
          items: updatedItems
        };
      } else {
        // Add new item
        const newItem: CartItem = {
          productId: product.id,
          product,
          quantity
        };
        
        return {
          ...prev,
          items: [...prev.items, newItem]
        };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(item => item.productId !== productId)
    }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    }));
  };

  const clearCart = () => {
    setCart({
      items: [],
      total: 0,
      subtotal: 0,
      tax: 0,
      shipping: 0
    });
  };

  const getCartTotal = () => cart.total;

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
