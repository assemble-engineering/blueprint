import React from 'react';
import styled from 'styled-components';

const ContentBlueprint = ({ children }) => {
  const StyledContentBlueprint = styled.header`
    box-sizing: border-box;
    color: #4a6de5;
    background: #ced8f7;
    padding: 20px 30px;
    border: 1px dashed #002082;
    border-top: 0;
  `;

  return <StyledContentBlueprint>{children}</StyledContentBlueprint>;
};

export default ContentBlueprint;
