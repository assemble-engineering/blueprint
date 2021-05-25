import React from 'react';
import styled from 'styled-components';
import ArrayBlueprint from '../ArrayBlueprint';

const StyledObjectBlueprint = styled.div`
  border-radius: 8px;
  color: #fff;
  background: mediumvioletred;
  padding: 8px 15px;
  border: none;
  outline: none;
`;

const ObjectBlueprint = ({ object }) => {
  const renderObject = (obj) => {
    if (!Object.keys(obj).length) return 'No object found';
    if (typeof obj !== 'object') return 'Must be of type <object>';

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          return <ArrayBlueprint array={obj[key]} />;
        } else if (typeof obj[key] === 'object') {
          return renderObject(obj[key]);
        } else {
          return `${key}: ${obj[key]}`;
        }
      }
    }
  };

  return <StyledObjectBlueprint>{renderObject(object)}</StyledObjectBlueprint>;
};

ObjectBlueprint.defaultProps = {
  object: {
    str: 'string',
    num: 264,
    bool: false,
    arr: ['substring1', 'substring2'],
    obj: { key: 'value' },
  },
};

export default ObjectBlueprint;
