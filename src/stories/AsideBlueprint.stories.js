import React from 'react';
import AsideBlueprint from './AsideBlueprint';

export default {
  title: 'Components/AsideBlueprint',
  component: AsideBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => <AsideBlueprint>ASIDE CONTENT</AsideBlueprint>;
