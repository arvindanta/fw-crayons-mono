import { newE2EPage } from '@stencil/core/testing';

describe('ext-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ext-component></ext-component>');

    const element = await page.find('ext-component');
    expect(element).toHaveClass('hydrated');
  });
});
