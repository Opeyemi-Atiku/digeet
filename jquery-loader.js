const mix = require('laravel-mix');

class JQUERY {    
    webpackPlugins() {
        return {
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery'
                })
            ]
        };
    }
}


mix.extend('jqloader', new JQUERY());