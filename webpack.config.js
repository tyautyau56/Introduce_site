const path = require('path')
//  productionが本番、developmentが開発用(productionの時は利用しない)
MODE = "development"

module.exports = {
  //ソースマップを有効にする
  devtool: 'source-map',
  mode: MODE,
  //  エントリーポイントを./src/pages/index.tsxにする
  entry: path.resolve(__dirname, './src/pages/index.js'),
  output: {
    //  distディレクトリにmain.jsとしてバンドる
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      //  jsをbabel-loaderで変換
      {
        test: /\.js|.jsx$/,
        use: [
          // 下から順に処理される
          { loader: "babel-loader",
            options: {
              presets:
                [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
            }},
        ],
        exclude: /node_modules/
      },
      //  typescriptをts-loaderで変換
      {
        test: /\.ts|.tsx$/,
        use: [
          // 下から順に処理される
          { loader: "babel-loader",
            options: {
              presets:
                [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
            }},
          { loader: "ts-loader" }
        ],
        exclude: /node_modules/
      },
      //  css関係
      {test: /\.css$/,
        use: [
          //  linkタグに出力する機能
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              //  CSS内のurl()メソッドの取り込みを禁止
              url: false,
            }
          }
        ]
      },
      //  sass関係
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      },
      {
        //  対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        //  画像をBase64として取り込む
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    extensions: [".ts", "tsx", "js", "json"]
  },
  target: ["web"]
}
