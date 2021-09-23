import React from 'react';
import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';

import ReactionPicker, { ReactionPickerProps } from './';
import ReactionButton from '../ReactionButton';
import argTypes from './ReactionPicker.stories.args';
import Documentation from './ReactionPicker.stories.docs.mdx';

export default {
  title: 'Momentum UI/ReactionPicker',
  component: ReactionPicker,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
  subComponents: { ReactionButton },
  args: {
    // Args provided to all stories by default.
    children: [
      <ReactionButton name={'popper'} />,
      <ReactionButton name={'heart'} />,
      <ReactionButton name={'thumb-up-yellow'} />,
      <ReactionButton name={'smile'} reacted />,
      <ReactionButton name={'haha'} />,
      <ReactionButton name={'wow'} />,
      <ReactionButton name={'sad'} />,
    ],
  },
};

/**
 * Primary story. This renders a single component with all external props.
 */
const Example = Template<ReactionPickerProps>(ReactionPicker).bind({});

Example.argTypes = { ...argTypes };

// TODO: Inject additional stories here.

/**
 * Common variants story. This renders multiple variants of a single component.
 */
const Common = MultiTemplate<ReactionPickerProps>(ReactionPicker).bind({});

Common.argTypes = { ...argTypes };
delete Common.argTypes.children;

Common.parameters = {
  variants: [{ children: 'Example A' }, { children: 'Example B' }, { children: 'Example C' }],
};

export { Example, Common };