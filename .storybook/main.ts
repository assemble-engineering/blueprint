// .storybook/main.js
import type { StorybookConfig } from '@storybook/react-vite';
const { mergeConfig } = require('vite');

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  }
};

export default config;

// export default {
//   framework: '@storybook/react',

//   webpackFinal: async (config) => {
//     const customConfig = { ...config };
//     customConfig.module.rules.push({
//       test: /\.tsx?$/,
//       use: "ts-loader",
//       exclude: /node_modules/,
//     });
//     // Configure webpack to allow using .js extension for typescript file imports.
//     // You only need this if you're adding .js to relative imports in your project.
//     // Refer: https://github.com/microsoft/TypeScript/issues/42813#issuecomment-942633095
//     customConfig.resolve.extensionAlias = {
//       ".js": [".tsx", ".ts", ".js"],
//     };
//     return customConfig;
//   },
// };
