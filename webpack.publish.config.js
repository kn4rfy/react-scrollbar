const path = require('path')

module.exports =
{
  entry: './src',
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[a|c]ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'react-scrollbar.js',
    library: 'react-scrollbar',
    libraryTarget: 'umd',
  },

  externals: {
    react: 'react',
    'prop-types': {
      'commonjs': 'prop-types',
      'commonjs2': 'prop-types',
      'amd': 'prop-types',
      'root': 'PropTypes'
    }
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      'react-scrollbar-js': path.resolve(__dirname, 'src/'),
    },
  },
}
