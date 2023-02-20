const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  mode: 'development',
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: path.resolve(__dirname, './dist'),
  //   open: true,
  //   compress: true,
  //   hot: true,
  //   port: 8080,
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'), 
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ]
}