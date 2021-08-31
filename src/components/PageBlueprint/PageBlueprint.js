import React from 'react';
import styled from 'styled-components';
import AsideBlueprint from '../AsideBlueprint';
import ContentBlueprint from '../ContentBlueprint';
import HeaderBlueprint from '../HeaderBlueprint';

const PageBlueprint = ({ asideContent, headerContent, children }) => {
  const StyledPageBlueprint = styled.div`
    box-sizing: border-box;
    color: #4a6de5;
    background: #ced8f7;
    padding: 20px 30px;
    border: 1px dashed #002082;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <StyledPageBlueprint>
      <HeaderBlueprint>{headerContent}</HeaderBlueprint>
      <div style={{ display: 'flex' }}>
        <AsideBlueprint>{asideContent}</AsideBlueprint>
        <ContentBlueprint>{children}</ContentBlueprint>
      </div>
    </StyledPageBlueprint>
  );
};

export default PageBlueprint;
