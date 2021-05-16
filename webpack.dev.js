const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');

const config = {
  entry: {
		index: './assets/js/index.js',
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/dist/',
    clean: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'main.css',
    }),
    new HotModuleReplacementPlugin(),
    new WebpackManifestPlugin(),
    new DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|vendor)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, 
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|svg|eot|ttf|gif|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[name].[ext]',
            },
          },
        ],
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /vendor/,
          name: 'vendors',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devServer: {
    writeToDisk: (filePath) => {
      return !/\.hot-update\.(js|json)(\.map)?$/.test(filePath);
    },
    publicPath: '/dist/',
    bonjour: false,
    hot: true,
    open: false,
    inline: true,
    host: '0.0.0.0',
    port: '3333',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    lazy: false,
    proxy: {
      '**': {
        target: `http://localhost:${process.env.APP_PORT}`,
        secure: false,
        changeOrigin: true,
        hot: true
      }
    }
  }
};

const bundleAnalyzer = {
  plugins: [
    new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      openAnalyzer: true
    }),
  ]
};

module.exports = function (env = {}) {
  let output = config;
  if (env.runAnalyzer) {
    output = merge(output, bundleAnalyzer);
  }

  return output;
};
