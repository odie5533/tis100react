import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser, users, sites, webRings, activities } from '../data';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [chaosMode, setChaosMode] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [pokes, setPokes] = useState(() => {
    const saved = localStorage.getItem('pokes');
    return saved ? JSON.parse(saved) : {};
  });
  const [siteVisits, setSiteVisits] = useState(() => {
    const saved = localStorage.getItem('siteVisits');
    return saved ? JSON.parse(saved) : {};
  });

  // Konami code Easter egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          activateKonamiCode();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activateKonamiCode = () => {
    setNotifications(prev => [...prev, {
      type: 'achievement',
      message: '🎮 Konami Code Activated! You earned the "Old School" badge!'
    }]);
    // Add confetti or special effect here
    console.log('%c🎮 KONAMI CODE! 🎮', 'font-size: 40px; color: #ff00ff; text-shadow: 2px 2px #00ffff;');
  };

  const login = (username) => {
    const foundUser = users.find(u => u.username === username);
    if (foundUser) {
      setUser(foundUser);
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const toggleChaosMode = () => {
    setChaosMode(prev => !prev);
  };

  const addPoke = (fromUserId, toUserId) => {
    const key = `${fromUserId}-${toUserId}`;
    const newPokes = { ...pokes, [key]: (pokes[key] || 0) + 1 };
    setPokes(newPokes);
    localStorage.setItem('pokes', JSON.stringify(newPokes));

    setNotifications(prev => [...prev, {
      type: 'poke',
      message: 'You poked someone!'
    }]);
  };

  const incrementSiteVisit = (siteId) => {
    const newVisits = { ...siteVisits, [siteId]: (siteVisits[siteId] || 0) + 1 };
    setSiteVisits(newVisits);
    localStorage.setItem('siteVisits', JSON.stringify(newVisits));
  };

  const addXP = (amount) => {
    if (!user) return;

    const newXP = user.xp + amount;
    const newLevel = Math.floor(newXP / 200) + 1;
    const leveledUp = newLevel > user.level;

    setUser(prev => ({
      ...prev,
      xp: newXP,
      level: newLevel
    }));

    setNotifications(prev => [...prev, {
      type: 'xp',
      message: `+${amount} XP!`,
      amount
    }]);

    if (leveledUp) {
      setNotifications(prev => [...prev, {
        type: 'levelup',
        message: `Level Up! You're now level ${newLevel}!`,
        level: newLevel
      }]);
    }
  };

  const dismissNotification = (index) => {
    setNotifications(prev => prev.filter((_, i) => i !== index));
  };

  const value = {
    user,
    isLoggedIn,
    chaosMode,
    notifications,
    pokes,
    siteVisits,
    login,
    logout,
    toggleChaosMode,
    addPoke,
    incrementSiteVisit,
    addXP,
    dismissNotification
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
