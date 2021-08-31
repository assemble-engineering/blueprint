const path = require('path');
const pkg = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const libraryName = pkg.name;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\*.stories.js$/,
        use: {
          loader: 'ignore-loader',
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './LICENSE', to: '' }],
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'blueprint.js',
    library: libraryName,
    // https://webpack.js.org/configuration/output/#output-librarytarget
    libraryTarget: 'umd',
  },
};
