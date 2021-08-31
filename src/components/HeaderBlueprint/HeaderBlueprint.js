import React from 'react';
import styled from 'styled-components';

const HeaderBlueprint = ({ children }) => {
  const StyledHeaderBlueprint = styled.header`
    box-sizing: border-box;
    color: #4a6de5;
    background: #ced8f7;
    padding: 20px 30px;
    border: 1px dashed #002082;
    width: 100%;
    flex: 0 0 100%;
  `;

  return <StyledHeaderBlueprint>{children}</StyledHeaderBlueprint>;
};

export default HeaderBlueprint;
