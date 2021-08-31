import React from 'react';
import ContentBlueprint from './ContentBlueprint';

export default {
  title: 'Components/ContentBlueprint',
  component: ContentBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => (
  <ContentBlueprint>
    <p>CONTENT CONTENT</p>
  </ContentBlueprint>
);
