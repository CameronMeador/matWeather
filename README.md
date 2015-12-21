# mat-weather

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

Weather data retrieved using [Yahoo Weather API](https://developer.yahoo.com/weather/archive.html). An [angularJS](https://angularjs.org/) webapp scaffolded using [Yeoman](https://yeoman.io/) with material design elements built with support from the [Angular Material](https://material.angularjs.org/latest/) and [Swiper - Mobile Touch Slider](http://www.idangero.us/?content=article&id=45#.VndyXJODGko) libraries for HTML5/CSS3 and AngularJS.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

##Swiper CSS

The stylesheet reference for [Swiper](http://www.idangero.us/?content=article&id=45#.VndyXJODGko) which enables the HTML5 swiper-container, and swiper-wrapper classes is removed when serving the project using `grunt serve`.

This can be fixed by running `bower install swiper --save` before serving, but may cause some unintentional CSS side-effects.

If you want to just add in the file link in the index.html each time before serving and avoid CSS issues just use `bower install swiper` before running `grunt serve` the first tiem.

##Bower and npm

Be sure to run `bower install` and `npm install` before running `grunt serve` the first time.

##Mobile Device Issues

The swipe features enabled by [Swiper](http://www.idangero.us/?content=article&id=45#.VndyXJODGko) operate ideally on mobile browser emulators, and Chrome Web Inspector. However, for some reason the containers are shrunken in mobile Chrome and iOS browsers, as well as Safari.
