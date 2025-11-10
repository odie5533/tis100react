import React from 'react';
import { useQuery } from '@tanstack/react-query';
import user from '../mocks/user.json';
import websites from '../mocks/websites.json';
import './Profile.css';

// Mock API functions
const fetchUserProfile = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return user;
};

const fetchUserWebsites = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return websites;
};

const Profile: React.FC = () => {
  const { data: userProfile, isLoading: isUserLoading, error: userError } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  });

  const { data: userWebsites, isLoading: areWebsitesLoading, error: websitesError } = useQuery({
    queryKey: ['userWebsites'],
    queryFn: fetchUserWebsites,
  });

  if (isUserLoading || areWebsitesLoading) {
    return <div>Loading...</div>;
  }

  if (userError || websitesError) {
    return <div>Error loading profile. Please try again later.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={userProfile?.avatar} alt={`${userProfile?.username}'s avatar`} className="profile-avatar" />
        <div>
          <h2>{userProfile?.username}</h2>
          <p>{userProfile?.bio}</p>
          <p>Member Since: {userProfile?.memberSince}</p>
        </div>
      </div>
      <div className="websites-section">
        <h3>My Websites</h3>
        <div className="websites-grid">
          {userWebsites?.map(website => (
            <div key={website.id} className="website-card">
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                <img src={website.screenshot} alt={`${website.title} screenshot`} />
                <p>{website.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
