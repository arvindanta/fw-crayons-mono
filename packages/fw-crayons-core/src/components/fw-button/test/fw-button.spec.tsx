import { newSpecPage } from '@stencil/core/testing';
import { FwButton } from '../fw-button';

describe('fw-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FwButton],
      html: `<fw-button></fw-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fw-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fw-button>
    `);
  });
});
