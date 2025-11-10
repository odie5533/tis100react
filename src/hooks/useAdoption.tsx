import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Monster } from '../data/monsters';

interface AdoptionContextType {
  cart: Monster[];
  adopted: Monster[];
  addToCart: (monster: Monster) => void;
  removeFromCart: (monsterId: string) => void;
  adoptMonster: (monsterId: string) => void;
  isInCart: (monsterId: string) => boolean;
  isAdopted: (monsterId: string) => boolean;
}

const AdoptionContext = createContext<AdoptionContextType | undefined>(undefined);

export const AdoptionProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Monster[]>([]);
  const [adopted, setAdopted] = useState<Monster[]>([]);

  const addToCart = (monster: Monster) => {
    if (!cart.find((m) => m.id === monster.id) && !adopted.find((m) => m.id === monster.id)) {
      setCart([...cart, monster]);
    }
  };

  const removeFromCart = (monsterId: string) => {
    setCart(cart.filter((m) => m.id !== monsterId));
  };

  const adoptMonster = (monsterId: string) => {
    const monster = cart.find((m) => m.id === monsterId);
    if (monster) {
      setAdopted([...adopted, monster]);
      removeFromCart(monsterId);
    }
  };

  const isInCart = (monsterId: string) => {
    return cart.some((m) => m.id === monsterId);
  };

  const isAdopted = (monsterId: string) => {
    return adopted.some((m) => m.id === monsterId);
  };

  return (
    <AdoptionContext.Provider
      value={{ cart, adopted, addToCart, removeFromCart, adoptMonster, isInCart, isAdopted }}
    >
      {children}
    </AdoptionContext.Provider>
  );
};

export const useAdoption = () => {
  const context = useContext(AdoptionContext);
  if (!context) {
    throw new Error('useAdoption must be used within AdoptionProvider');
  }
  return context;
};
