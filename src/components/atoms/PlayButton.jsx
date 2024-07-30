import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const Button = styled.button`
  background-color: #ffffff; 
  color: #070707;
  border: none;
  padding: 10px 15px;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color:#3d3d3d;
  }
`;

function PlayButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaPlay />
    </Button>
  );
}

export default PlayButton;
