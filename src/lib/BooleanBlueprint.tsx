import styled from 'styled-components';

const StyledBooleanBlueprint = styled.p`
  box-sizing: border-box;
  color: #4a6de5;
  background: #ced8f7;
  padding: 20px 30px;
  border: 1px dashed #002082;
`;

export const BooleanBlueprint = ({ boolean }: { boolean: boolean }) => {
  const renderBoolean = () => {
    if (typeof boolean !== 'boolean') return 'Must be of type <boolean>';
    return `${boolean}`;
  };

  return <StyledBooleanBlueprint>{renderBoolean()}</StyledBooleanBlueprint>;
};
