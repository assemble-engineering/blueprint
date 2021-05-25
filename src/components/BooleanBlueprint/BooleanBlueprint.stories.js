import React from 'react';
import BooleanBlueprint from './BooleanBlueprint';

export default {
  title: 'Components/BooleanBlueprint',
  component: BooleanBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => <BooleanBlueprint boolean={true} />;
export const variant2 = () => <BooleanBlueprint boolean={false} />;
export const variant3 = () => <BooleanBlueprint boolean={'true'} />;
export const variant4 = () => <BooleanBlueprint boolean={null} />;
