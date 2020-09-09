const Path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const routes = require('./route')

const pages = routes.map(function (value, index) {
  return new HtmlWebpackPlugin({
    filename: value.filename,
    template: Path.resolve(__dirname, '../' + value.template),
    minify: false
  })
})

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js')
  },
  output: {
    path: Path.join(__dirname, process.env.NODE_ENV === 'production' ? '../build/' : '../.dev/'),
    filename: 'js/[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: Path.resolve(__dirname, '../src/images'), to: 'assets/images/' }
      ]
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/pug/pages/index.pug'),
    }),
  ].concat(pages),
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src/pug/pages/')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.pug$/,
        //loader: 'pug-loader'
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true,
            adjustIndent: true
          }
        }
      }
    ]
  }
}
