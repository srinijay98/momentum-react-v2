import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';

import ReactionButton, { ReactionButtonProps } from './';
import argTypes from './ReactionButton.stories.args';
import Documentation from './ReactionButton.stories.docs.mdx';

export default {
  title: 'Momentum UI/ReactionButton',
  component: ReactionButton,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
  args: { // Args provided to all stories by default.
    children: 'A', // Example of a default arg for all stories.
  },
};

/**
 * Primary story. This renders a single component with all external props.
 */
const Example = Template<ReactionButtonProps>(ReactionButton).bind({});

Example.argTypes = { ...argTypes };

// TODO: Inject additional stories here.

/**
 * Common variants story. This renders multiple variants of a single component.
 */
const Common = MultiTemplate<ReactionButtonProps>(ReactionButton).bind({});

Common.argTypes = { ...argTypes };
delete Common.argTypes.children;

Common.parameters = {
  variants: [{ children: 'Example A' }, { children: 'Example B' }, { children: 'Example C' }],
};

export { Example, Common };