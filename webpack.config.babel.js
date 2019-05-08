import webpack from "webpack";
import path from "path";

// webpack plugins
import WebpackExtensionManifestPlugin from "webpack-extension-manifest-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

// package and extension data
import pkg from "./package.json";
import baseManifest from "./src/manifest";

// source and build paths
const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src");

const config = {
  devtool: "inline-source-map",
  entry: {
    "js/background": `${APP_DIR}/js/background/index.jsx`,
    "js/content-script": `${APP_DIR}/js/content-script/index.jsx`
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].js"
  },
  resolve: {
    // preact reduces file size
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(jpg|png)(\?.*$|$)$/,
        use: {
          loader: "url-loader"
        }
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)(\?.*$|$)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',    // where the fonts will go
            publicPath: 'fonts/'       // override the default path
          }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    // removes all old build files
    new CleanWebpackPlugin(),
    // copies static files required for extension, ie: logo etc
    new CopyPlugin(
      [{ from: `${APP_DIR}/static/img/logo.png`, to: "img/logo.png" }],
      {
        copyUnmodified: true
      }
    ),
    // creates a manifest file on build folder
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
        extend: { name: pkg.name, version: pkg.version }
      }
    })
  ]
};

export default config;
