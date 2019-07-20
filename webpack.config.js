var path = require('path');

module.exports = {
  entry: {
    vendor: ['styled-components'],
    FeaturedFilm: './FeaturedFilm/client/src/index.jsx',
    cast_and_crew: './cast-and-crew/client/src/index.js',
    reviews: './reviews/client/src/index.jsx'
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]_bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](styled-components|react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  resolve: {
    alias: {
       'styled-components': path.resolve('./node_modules/styled-components')
    }
  }
};