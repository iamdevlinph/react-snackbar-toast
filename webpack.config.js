var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/Snackbar',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {          
          'react': path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),  
          'classnames': path.resolve(__dirname, './node_modules/classnames'),
          'react-transition-group': path.resolve(__dirname, './node_modules/react-transition-group')
      }  
    },
    output: {
        path: path.resolve('dist'),
        filename: 'Snackbar.js',
        libraryTarget: 'umd',
        umdNamedDefine: true  
    },
    externals: {      
      // Don't bundle react or react-dom      
      "react": {          
          commonjs: "react",          
          commonjs2: "react",          
          amd: "React",          
          root: "React"      
      },      
      "react-dom": {          
          commonjs: "react-dom",          
          commonjs2: "react-dom",          
          amd: "ReactDOM",          
          root: "ReactDOM"      
      },
      "classnames": "classnames",
      "react-transition-group": "react-transition-group"

    }, 
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: {
                      localIdentName: 'react-snackbar-[local]'
                    }
                  }
                }, 'postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                      loader: 'url-loader',
                      options:{
                          fallback: "file-loader",
                          name: "[name][md5:hash].[ext]",
                          outputPath: 'assets/',
                          publicPath: '/assets/'
                      }
                  }
              ]
                
            }
            
        ]
    }
}