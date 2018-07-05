const path= require('path')

module.exports= {
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rule: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            }
        ]
    }
}