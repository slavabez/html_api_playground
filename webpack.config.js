module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/docs",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css/, use: [ 'style-loader', 'css-loader']
            },
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./docs",
        hot: true
    }
};