import React from 'react';
import { useQuery } from '@tanstack/react-query';
import webrings from '../mocks/webrings.json';
import './WebRings.css';

// Mock API function
const fetchWebRings = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return webrings;
};

const WebRings: React.FC = () => {
  const { data: webRings, isLoading, error } = useQuery({
    queryKey: ['webRings'],
    queryFn: fetchWebRings,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading web rings. Please try again later.</div>;
  }

  return (
    <div className="webrings-container">
      <h2>Web Ring Directory</h2>
      <div className="webrings-list">
        {webRings?.map(ring => (
          <div key={ring.id} className="webring-card">
            <h3>{ring.name}</h3>
            <p>{ring.description}</p>
            <div className="webring-footer">
              <span>{ring.members} Members</span>
              <button>Join Ring</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebRings;
