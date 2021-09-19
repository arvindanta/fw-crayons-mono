import { newSpecPage } from '@stencil/core/testing';
import { ExtComponent } from '../ext-component';

describe('ext-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExtComponent],
      html: `<ext-component></ext-component>`,
    });
    expect(page.root).toEqualHtml(`
      <ext-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ext-component>
    `);
  });
});
