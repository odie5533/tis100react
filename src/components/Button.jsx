import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #c0c0c0; /* Silver */
  border: 2px outset #808080; /* Gray */
  color: #000000; /* Black */
  font-family: 'Comic Sans MS', 'Arial', sans-serif;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;

  &:active {
    border-style: inset;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
