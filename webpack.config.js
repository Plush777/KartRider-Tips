const path = require('path')
const webpack = require('webpack')
const dotenv = require("dotenv");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin') // eslint 사용할 경우
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== "production";
const envPath = `./.env.${isDevelopment ? "development" : "production"}`;

dotenv.config({
  path: envPath,
});

const config = {
    name: 'KartRider-Tips-webpack-setting', // 설정 이름
    mode: 'development', // production, development // 설정 모드
    devtool: 'eval',
    entry: {
        app: './src/index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx','.json'],
    },
    module: {
        rules: [
            {   // 리액트 바벨 설정
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new Dotenv({
          path: envPath,
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            { 
                template: './public/index.html', // 템플릿 설정
                minify: true, // 압축 설정
            }
        ),
        new webpack.ProvidePlugin({ // 리액트 자동 로드
            "React": "react",
        }),
        new ESLintPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.jsx',
        publicPath: '/',
    },
    devServer: { // 개발 서버 설정
        static: './dist',
        port: 3000,
        hot: true, // 핫 모듈 교체(HMR) 활성화
        compress: true,
        open: true,
        historyApiFallback: true,
    }
}

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = config