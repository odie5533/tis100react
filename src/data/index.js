export { users, currentUser } from './users';
export { sites } from './sites';
export { webRings } from './webRings';
export { neighborhoods } from './neighborhoods';
export { badges } from './badges';
export { guestbookEntries, profileGuestbook } from './guestbook';
export { activities } from './activities';

// Helper functions
export const getUserById = (id) => {
  const { users } = require('./users');
  return users.find(user => user.id === id);
};

export const getSiteById = (id) => {
  const { sites } = require('./sites');
  return sites.find(site => site.id === id);
};

export const getSitesByUser = (userId) => {
  const { sites } = require('./sites');
  return sites.filter(site => site.owner === userId);
};

export const getSitesByNeighborhood = (neighborhoodId) => {
  const { sites } = require('./sites');
  return sites.filter(site => site.neighborhood === neighborhoodId);
};

export const getWebRingById = (id) => {
  const { webRings } = require('./webRings');
  return webRings.find(ring => ring.id === id);
};

export const getNeighborhoodById = (id) => {
  const { neighborhoods } = require('./neighborhoods');
  return neighborhoods.find(n => n.id === id);
};
