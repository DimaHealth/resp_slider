//VENDORS
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

import 'swiper/dist/css/swiper.min.css'
import Slider from "./slider"

class Application{
    constructor(){
        console.log('application start');
        $(document).ready(function () {
            let $slider = $('.js-slider');
            if ($slider) {
                new Slider($slider)
            }
        });
    }
}

new Application();
