import React from 'react';
import HeaderBlueprint from './HeaderBlueprint';

export default {
  title: 'Components/HeaderBlueprint',
  component: HeaderBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => (
  <HeaderBlueprint>
    <p>HEADER CONTENT</p>
  </HeaderBlueprint>
);
