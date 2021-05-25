import React from 'react';
import styled from 'styled-components';
import ObjectBlueprint from '../ObjectBlueprint';
import BooleanBlueprint from '../BooleanBlueprint';
import NumberBlueprint from '../NumberBlueprint';
import StringBlueprint from '../StringBlueprint';
import { v4 as uuidv4 } from 'uuid';

const StyledArrayBlueprint = styled.div`
  box-sizing: border-box;
  color: #4a6de5;
  background: #ced8f7;
  padding: 20px 30px;
  border: 1px dashed #002082;
`;

const ArrayBlueprint = ({ array }) => {
  const renderArray = (arr) => {
    if (arr === null || arr === undefined || !Array.isArray(arr))
      return 'Must be of type <array>';
    if (!arr.length) return 'No array data found';
    return arr.map((item, i) => {
      if (Array.isArray(item)) {
        return renderArray(item);
      } else if (typeof item === 'object') {
        return <ObjectBlueprint key={uuidv4()} object={item} />;
      } else if (typeof item === 'boolean') {
        return <BooleanBlueprint key={uuidv4()} boolean={item} />;
      } else if (typeof item === 'number') {
        return <NumberBlueprint key={uuidv4()} number={item} />;
      } else {
        return <StringBlueprint key={uuidv4()} string={item} />;
      }
    });
  };
  return <StyledArrayBlueprint>{renderArray(array)}</StyledArrayBlueprint>;
};

export default ArrayBlueprint;
