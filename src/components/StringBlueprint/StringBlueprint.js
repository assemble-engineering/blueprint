import React from 'react';
import styled from 'styled-components';

const StyledStringBlueprint = styled.p`
  box-sizing: border-box;
  color: #4a6de5;
  background: #ced8f7;
  padding: 20px 30px;
  border: 1px dashed #002082;
`;

const StringBlueprint = ({ string }) => {
  const renderString = () => {
    if (!string.length) return 'No string found';
    if (typeof string !== 'string') return 'Must be of type <string>';
    return string;
  };

  return <StyledStringBlueprint>{renderString()}</StyledStringBlueprint>;
};

export default StringBlueprint;
