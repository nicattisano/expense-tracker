module.exports = {
    entry: "./entry.js",
    output: {
        path: "public",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['react', 'es2015']
         }
       },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=public/fonts/[name].[ext]'
        }
      ]
    }
};
