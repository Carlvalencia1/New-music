import React from 'react';
import styled from 'styled-components';
import { FaForward } from 'react-icons/fa';

const Button = styled.button`
  background-color: #000000; 
  color: #ffffff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3d3d3d;
  }
`;

function NextButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaForward />
    </Button>
  );
}

export default NextButton;
