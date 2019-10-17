const mix = require('laravel-mix');

class Example {
    webpackRules() {
        return {
            test: /\.css$/,
            use: [{
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                },
              },
              // You have to put in after `css-loader` and before any `pre-precessing loader`
              { loader: 'scoped-css-loader' },
              {
                loader: 'sass-loader',
              },]
        };

    }
}
class Example1 {
    webpackRules() {
        return {
            test: /\.less$/,
            loader: 'less-loader', // compiles Less to CSS
        };
 
    }
}



mix.extend('foo', new Example());
mix.extend('foos', new Example1())