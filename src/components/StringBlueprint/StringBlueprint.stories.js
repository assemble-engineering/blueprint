import React from 'react';
import StringBlueprint from './StringBlueprint';

export default {
  title: 'Components/StringBlueprint',
  component: StringBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => <StringBlueprint string="Test String" />;
export const variant2 = () => <StringBlueprint string="" />;
export const variant3 = () => (
  <StringBlueprint string={['string', 'string2']} />
);
