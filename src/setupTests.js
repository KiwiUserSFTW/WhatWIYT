import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

// Babel setting for jest 
const babelOptions = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
module.exports = require('babel-jest').createTransformer(babelOptions);
global.render = render;