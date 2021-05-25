import React from 'react';
import NumberBlueprint from './NumberBlueprint';

export default {
  title: 'Components/NumberBlueprint',
  component: NumberBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => <NumberBlueprint number={235} />;
