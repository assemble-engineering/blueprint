import React from 'react';
import ArrayBlueprint from './ArrayBlueprint';

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
