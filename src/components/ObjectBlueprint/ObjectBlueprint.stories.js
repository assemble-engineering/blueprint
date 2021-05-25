import React from 'react';
import ObjectBlueprint from './ObjectBlueprint';

export default {
  title: 'Components/ObjectBlueprint',
  component: ObjectBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => (
  <ObjectBlueprint
    object={{
      str: 'string',
      num: 264,
      bool: false,
      arr: ['substring1', 'substring2'],
      obj: { key: 'value' },
    }}
  />
);
