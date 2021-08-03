import Icon from '.';
import React from 'react';
import { STYLE } from './Icon.constants';
import { mountAndWait } from '../../../test/utils';
describe('Icon', () => {
  let container;

  describe('snapshot', () => {
    it('should match snapshot', async () => {
      expect.assertions(1);

      container = await mountAndWait(<Icon name="accessibility" />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with scale', async () => {
      expect.assertions(1);

      container = await mountAndWait(<Icon name="accessibility" scale={16} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with autoScale', async () => {
      expect.assertions(1);

      container = await mountAndWait(<Icon name="accessibility" autoScale={true} />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with weight', async () => {
      expect.assertions(1);

      container = await mountAndWait(<Icon name="accessibility" weight="light" />);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with invalid name', async () => {
      expect.assertions(1);
      jest.setMock('@momentum-ui/icons-rebrand/svg/invalid_icon_name.svg', undefined);

      container = await mountAndWait(<Icon name="invalid_icon_name" />);

      expect(container).toMatchSnapshot();
      jest.dontMock('@momentum-ui/icons-rebrand/svg/invalid_icon_name.svg');
    });
  });

  describe('attributes', () => {
    it('should have its main class', async () => {
      const wrapper = await mountAndWait(<Icon name="accessibility" />);
      const icon = wrapper.find(Icon).getDOMNode();

      expect(icon.classList.contains(STYLE.wrapper));
    });

    it('svg should have custom class if provided', async () => {
      const testClass = 'testClass';

      const wrapper = await mountAndWait(<Icon name="accessibility" className={testClass} />);
      const svg = wrapper.find('svg').getDOMNode();

      expect(svg.classList.contains(testClass)).toBe(true);
    });

    it('should pass scale prop', async () => {
      const scale = 16;

      const wrapper = await mountAndWait(<Icon name={'accessibility'} scale={scale} />);
      const icon = wrapper.find('svg').getDOMNode();

      expect(icon.getAttribute('data-scale')).toBe(`${scale}`);
    });

    it('should pass autoScale prop and disable scale prop', async () => {
      const autoScale = true;

      const wrapper = await mountAndWait(<Icon name={'accessibility'} autoScale={autoScale} />);
      const icon = wrapper.find('svg').getDOMNode();

      expect(icon.getAttribute('data-autoscale')).toBe(`${autoScale}`);
      expect(icon.getAttribute('data-scale')).toBe('false');
    });

    it('should pass md-icon-coloured class if name of icon contains coloured', async () => {
      const wrapper = await mountAndWait(<Icon name={'accessibility-coloured'} />);
      const icon = wrapper.find('svg').getDOMNode();

      expect(icon.classList.contains('md-icon-coloured')).toBe(true);
    });
  });
});
