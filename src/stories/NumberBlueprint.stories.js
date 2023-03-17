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
export const variant2 = () => <NumberBlueprint number={-235} />;
export const variant3 = () => <NumberBlueprint number={235.345} />;
export const variant4 = () => <NumberBlueprint number={'235'} />;
export const variant5 = () => <NumberBlueprint number={null} />;
export const variant6 = () => <NumberBlueprint number={undefined} />;
