const Path = require('path')
const Webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const globImporter = require('node-sass-glob-importer')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  devServer: {
    inline: true,
    writeToDisk: true,
    host: '0.0.0.0',
    port: '8080',
    public: 'localhost:8080',
    open: true,
    openPage: 'csr'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.s?(a|c)ss',
      failOnError: false,
      quiet: false,
      emitErrors: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src/pug/pages'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src/pug/pages'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('postcss-preset-env')(),
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter()
              }
            }
          }
        ]
      }
    ]
  }
})
