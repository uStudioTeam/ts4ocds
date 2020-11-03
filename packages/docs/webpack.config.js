const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'TS4OCDS TypeDoc Theme',

  mode: 'development',

  context: path.resolve(__dirname, 'src'),

  entry: './default/assets/js/src/bootstrap.ts',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'default/assets/js/main.js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                style: 'compact',
                unixNewlines: true,
              },
            },
          },
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          outputPath: 'default/assets/images',
          publicPath: '../images',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
        options: {
          outputPath: 'default/assets/fonts',
          publicPath: '../fonts',
          name: '[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'default/assets/css/main.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, 'src/default'),
          from: '**/*.hbs',
          to: path.resolve(__dirname, 'bin/default'),
        },
        {
          context: path.resolve(__dirname, 'src'),
          from: 'plugin.js',
          to: path.resolve(__dirname, 'bin'),
        },
      ],
    }),
  ],
};
