import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

// import { postcss } from '@stencil/postcss';
// import autoprefixer from 'autoprefixer';

//import { generateJsonDocs } from './customElementDocGenerator';

import { components } from 'fw-crayons/dist/docs.json';
const webComponents = components.map(c => c.tag);

export const config: Config = {
  autoprefixCss: true,
  namespace: 'crayons-extended',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
      footer: 'Built with ❤ at Freshworks',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    // {
    //   type: 'custom',
    //   generator: generateJsonDocs,
    //   name: 'custom-element-docs',
    // },
    {
      type: 'www',
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    reactOutputTarget({
      componentCorePackage: 'fw-crayons-extended', //name in the package.json should be used
      proxiesFile: './crayons-react-extended/src/components.ts',

      // lazy load -> code splitting
      // includeDefineCustomElements: true,
      // includePolyfills: true,

      // tree shakable, need to use setassetpath
      customElementsDir: 'dist/components',
      includeImportCustomElements: true,
      excludeComponents: webComponents,
    }),
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/styles/global/freshworks.scss',
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/index.scss'],
    }),
    // postcss({
    //   plugins: [autoprefixer()],
    // }),
  ],
  testing: {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!**/node_modules/**',
      '!**/dist/**',
      '!**/www/**',
      '!**/loader/**',
      '!**/stencil.config.ts',
      '!**/*.d.ts',
      '!**/src/index.ts',
      '!**/customElementDocGenerator.ts',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  },
  buildEs5: true,
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
    cloneNodeFix: true,
    slotChildNodesFix: true,
  },
  enableCache: true,
};
