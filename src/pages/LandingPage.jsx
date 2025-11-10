import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 50px;
`;

const AnimatedLogo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const Tagline = styled.h2`
  font-family: 'Comic Sans MS', cursive;
  font-size: 24px;
  color: #ffff00; /* Yellow */
  text-shadow: 2px 2px #ff00ff; /* Magenta */
`;

const StatsContainer = styled.div`
  margin-top: 50px;
  border: 4px inset #808080;
  padding: 20px;
  background-color: #000000;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <AnimatedLogo src="https://i.imgur.com/8Qqd2Yt.gif" alt="NeoCities2K Logo" />
      <Tagline>Your corner of the internet, reimagined</Tagline>
      <Button onClick={() => alert('Random Site Clicked!')}>Random Site</Button>
      {/* Placeholder for Featured Sites Carousel */}
      <div style={{ marginTop: '50px' }}>
        <h3>Featured Sites</h3>
        <p>[Carousel Coming Soon]</p>
      </div>
      <StatsContainer>
        <h3>Stats</h3>
        <p>Total Sites Created: 1337</p>
        <p>Active Web Rings: 42</p>
        <p>Users Online: 69</p>
      </StatsContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
