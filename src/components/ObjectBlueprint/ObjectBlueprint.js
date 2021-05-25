import React from 'react';
import styled from 'styled-components';
import ArrayBlueprint from '../ArrayBlueprint';
import BooleanBlueprint from '../BooleanBlueprint';
import NumberBlueprint from '../NumberBlueprint';
import StringBlueprint from '../StringBlueprint';
import { v4 as uuidv4 } from 'uuid';

const StyledObjectBlueprint = styled.div`
  box-sizing: border-box;
  color: #4a6de5;
  background: #ced8f7;
  padding: 20px 30px;
  border: 1px dashed #002082;
`;

const ObjectBlueprint = ({ object }) => {
  const renderObject = (obj) => {
    if (!Object.keys(obj).length) return 'No object found';
    if (Array.isArray(obj) || typeof obj !== 'object')
      return 'Must be of type <object>';
    const output = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          // output.push(<ArrayBlueprint key={uuidv4()} array={obj[key]} />);
        } else if (typeof obj[key] === 'object') {
          output.push(renderObject(obj[key]));
        } else if (typeof obj[key] === 'boolean') {
          output.push(<BooleanBlueprint key={uuidv4()} boolean={obj[key]} />);
        } else if (typeof obj[key] === 'number') {
          output.push(<NumberBlueprint key={uuidv4()} number={obj[key]} />);
        } else {
          output.push(<StringBlueprint key={uuidv4()} string={obj[key]} />);
        }
      }
    }

    return output;
  };

  return <StyledObjectBlueprint>{renderObject(object)}</StyledObjectBlueprint>;
};

export default ObjectBlueprint;
