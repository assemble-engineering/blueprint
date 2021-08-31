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
      obj: { key: 'example value' },
    }}
  />
);

export const variant2 = () => <ObjectBlueprint object={'not an object'} />;
export const variant3 = () => (
  <ObjectBlueprint object={{ arr: ['string', 'string'] }} />
);
export const variant4 = () => <ObjectBlueprint object={null} />;
export const variant5 = () => <ObjectBlueprint object={undefined} />;
