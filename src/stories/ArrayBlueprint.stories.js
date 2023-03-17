import React from 'react';
import ArrayBlueprint from '../components/ArrayBlueprint/ArrayBlueprint';

export default {
  title: 'Components/ArrayBlueprint',
  component: ArrayBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => (
  <ArrayBlueprint array={[1, 'two', { key: 'three' }, true, ['five', 6]]} />
);
export const variant2 = () => <ArrayBlueprint array={['two', 'five']} />;
export const variant3 = () => <ArrayBlueprint array={{ key: 'value' }} />;
export const variant4 = () => <ArrayBlueprint array={[]} />;
export const variant5 = () => <ArrayBlueprint array={null} />;
export const variant6 = () => <ArrayBlueprint array={undefined} />;
