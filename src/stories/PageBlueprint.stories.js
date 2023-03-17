import React from 'react';
import PageBlueprint from './PageBlueprint';
import StringBlueprint from '../StringBlueprint';
import ArrayBlueprint from '../ArrayBlueprint';

export default {
  title: 'Components/PageBlueprint',
  component: PageBlueprint,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const variant1 = () => (
  <PageBlueprint
    headerContent={<StringBlueprint string={'Header content'} />}
    asideContent={
      <ArrayBlueprint array={['Item 1', 'Item 2', 'Item 3', 'Item 4']} />
    }
  >
    <StringBlueprint string="Here is some stuff" />
    <StringBlueprint string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
  </PageBlueprint>
);
