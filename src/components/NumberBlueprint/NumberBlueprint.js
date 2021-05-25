import React from 'react';
import styled from 'styled-components';

const StyledNumberBlueprint = styled.p`
  box-sizing: border-box;
  color: #4a6de5;
  background: #ced8f7;
  padding: 20px 30px;
  border: 1px dashed #002082;
`;

const NumberBlueprint = ({ number }) => {
  const renderNumber = () => {
    if (!number) return 'No number found';
    if (typeof number !== 'number') return 'Must be of type <number>';
    return number;
  };

  return <StyledNumberBlueprint>{renderNumber()}</StyledNumberBlueprint>;
};

export default NumberBlueprint;
