/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  farmer: string;
  location: string;
  addedAt: Date;
}

interface WishlistState {
  items: WishlistItem[];
}

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; item: Omit<WishlistItem, 'addedAt'> }
  | { type: 'REMOVE_FROM_WISHLIST'; itemId: string }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'TOGGLE_WISHLIST'; item: Omit<WishlistItem, 'addedAt'> };

interface WishlistContextType extends WishlistState {
  addToWishlist: (item: Omit<WishlistItem, 'addedAt'>) => void;
  removeFromWishlist: (itemId: string) => void;
  clearWishlist: () => void;
  toggleWishlist: (item: Omit<WishlistItem, 'addedAt'>) => void;
  isInWishlist: (itemId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const existingItem = state.items.find(item => item.id === action.item.id);
      if (existingItem) {
        return state; // Item already in wishlist
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, addedAt: new Date() }]
      };
    }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemId)
      };
    case 'CLEAR_WISHLIST':
      return {
        ...state,
        items: []
      };
    case 'TOGGLE_WISHLIST': {
      const existingItem = state.items.find(item => item.id === action.item.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.item.id)
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.item, addedAt: new Date() }]
        };
      }
    }
    default:
      return state;
  }
};

const initialState: WishlistState = {
  items: []
};

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (item: Omit<WishlistItem, 'addedAt'>) => {
    dispatch({ type: 'ADD_TO_WISHLIST', item });
  };

  const removeFromWishlist = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', itemId });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const toggleWishlist = (item: Omit<WishlistItem, 'addedAt'>) => {
    dispatch({ type: 'TOGGLE_WISHLIST', item });
  };

  const isInWishlist = (itemId: string): boolean => {
    return state.items.some(item => item.id === itemId);
  };

  const wishlistCount = state.items.length;

  const value: WishlistContextType = {
    items: state.items,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    toggleWishlist,
    isInWishlist,
    wishlistCount
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
