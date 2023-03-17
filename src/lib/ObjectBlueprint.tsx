import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import {ArrayBlueprint} from './ArrayBlueprint';
import {BooleanBlueprint} from './BooleanBlueprint';
import {NumberBlueprint} from './NumberBlueprint';
import {StringBlueprint} from './StringBlueprint';

const StyledObjectBlueprint = styled.div`
  box-sizing: border-box;
  color: #4a6de5;
  background: #ced8f7;
  padding: 20px 30px;
  border: 1px dashed #002082;
`;

export const ObjectBlueprint = ({ object } : { object: {[key: string]: any}}) => {
  const renderObject: any = (obj: { object: {[key: string]: any}}) => {
    if (
      obj === null ||
      obj === undefined ||
      typeof obj !== 'object' ||
      Array.isArray(obj)
    ) {
      return 'Must be of type <object>';
    }
    if (!Object.keys(obj).length) {
      return 'No object found';
    }

    const output = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === null || obj[key] === undefined) {
          return 'No object found';
        }
        if (Array.isArray(obj[key])) {
          output.push(<ArrayBlueprint key={uuidv4()} array={obj[key]} />);
        } else if (typeof obj[key] === 'object') {
          output.push(renderObject(obj[key]));
        } else if (typeof obj[key] === 'boolean') {
          output.push(<BooleanBlueprint key={uuidv4()} boolean={obj[key] as unknown as boolean} />);
        } else if (typeof obj[key] === 'number') {
          output.push(<NumberBlueprint key={uuidv4()} number={obj[key] as unknown as number} />);
        } else {
          output.push(<StringBlueprint key={uuidv4()} string={obj[key] as unknown as string} />);
        }
      }
    }

    return output;
  };

  return <StyledObjectBlueprint>{renderObject(object)}</StyledObjectBlueprint>;
};
