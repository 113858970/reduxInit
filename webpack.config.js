var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: false,
	/*
	不使用dev 开发工具，当然，为了开发方便，我们通常是将其设置为：“inline-source-map”这样，
	当我们页面内的代码报错时，就可以通过source-map 快速的定位原因。
	当然，开启source map 后我们打包后的文件会异常的大，一般最简单的React程序也要2M以上。
	*/
	entry: [
		'webpack-dev-server/client?http://localhost:8080', 
  		'webpack/hot/only-dev-server',
		"./app/index.js"
	],
	output: {
		path: path.join(__dirname, 'dest'),
		publicPath: "/dest/", //webpack-dev-server 模块不认path，只认publicPath
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,//忽略打包的文件
				query: {
					presets:['react', 'es2015']//告诉bable-loader用什么loader处理文件
				}
			}
		]
	},
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}