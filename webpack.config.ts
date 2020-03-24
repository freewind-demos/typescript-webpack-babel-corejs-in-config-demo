import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: "development",
  entry: './src/hello.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'babel-loader', options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: "usage",
              corejs: {
                version: 3,
                proposals: true
              },
            }]
          ]
        }
      }, {
        loader: 'ts-loader',
      }],
      exclude: /node_modules/
    }]
  }
}

export default config;
