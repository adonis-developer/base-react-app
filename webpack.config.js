const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const webpack = require("webpack")
const dotenv = require("dotenv")


const transformPathEnv = () => {
  const env  = process.env.NODE_ENV
  if (env === 'development') return '.env.development'
  if (env === 'staging') return '.env.staging'
  return '.env'
}

dotenv.config({
  path: transformPathEnv()
})


console.log("env: ", process.env.CHECK);

module.exports = () => {
  const isProduction = process.env.NODE_ENV === "production"
  return {
    entry: "./src/index.tsx",
    devtool: isProduction ? "source-map" : "inline-source-map",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "[name].[contenthash:10].js",
      chunkFilename: "[name].[contenthash:10].js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: "./tsconfig.json",
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ESLintPlugin({
        cache: true,
        emitWarning: false,
        emitError: false,
        extensions: [".tsx", ".ts"],
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            to: "",
            filter: (resourcePath) => {
              return /\.(png|svg|jpg|jpeg|gif|ico|txt|json|webp)$/i.test(resourcePath)
            },
          },
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, "build"),
      },
      port: 9040,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    externals: {
      React: "react",
    },
  }
}
