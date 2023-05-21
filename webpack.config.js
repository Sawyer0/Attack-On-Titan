const path = require('path');

module.exports = {
  entry: './src/styles/home.css', 
  output: {
    path: path.resolve(__dirname, './src/Home.js'), 
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
