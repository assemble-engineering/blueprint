import React from 'react';
import styled from 'styled-components';
import { ObjectBlueprint } from '..';

const StyledArrayBlueprint = styled.div`
  border-radius: 8px;
  color: #fff;
  background: mediumvioletred;
  padding: 8px 15px;
  border: none;
  outline: none;
`;

const ArrayBlueprint = ({ array }) => {
  const renderArray = (arr) => {
    if (!arr.length) return 'No array found';

    return arr.map((item) => {
      if (Array.isArray(item)) {
        return renderArray(item);
      } else if (typeof item === 'object') {
        return <ObjectBlueprint object={item} />;
      } else {
        return `${item}`;
      }
    });
  };

  return <StyledArrayBlueprint>{renderArray(array)}</StyledArrayBlueprint>;
};

ArrayBlueprint.defaultProps = {
  array: ['string', 264, false, ['substring1', 'substring2'], { key: 'value' }],
};

export default ArrayBlueprint;
