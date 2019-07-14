const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
// .scripts([
//    'resources/plantilla/js/cleave.js'
// ], 'public/js/plantilla.js')
.styles([
   'resource/plantilla/css/font-awesome.css'
], 'public/css/plantilla.css');
 




mix.disableNotifications();