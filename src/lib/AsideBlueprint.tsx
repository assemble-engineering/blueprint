import { ReactNode } from 'react';
import styled from 'styled-components';

export const AsideBlueprint = ({ children }: { children: ReactNode }) => {
  const StyledAsideBlueprint = styled.aside`
    box-sizing: border-box;
    color: #4a6de5;
    background: #ced8f7;
    padding: 20px 30px;
    border: 1px dashed #002082;
    border-top: 0;
    border-right: 0;
    display: inline-block;
  `;

  return <StyledAsideBlueprint>{children}</StyledAsideBlueprint>;
};
