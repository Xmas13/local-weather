webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".vertical-center {\r\n  min-height: 100%;  /* Fallback for vh unit */\r\n  min-height: 100vh; /* You might also want to use\r\n                        'height' property instead.\r\n\r\n                        Note that for percentage values of\r\n                        'height' or 'min-height' properties,\r\n                        the 'height' of the parent element\r\n                        should be specified explicitly.\r\n\r\n                        In this case the parent of '.vertical-center'\r\n                        is the <body> element */\r\n\r\n  /* Make it a flex container */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\r\n  /* Align the bootstrap's container vertically */\r\n    -webkit-box-align : center;\r\n       -ms-flex-align : center;\r\n          align-items : center;\r\n\r\n  /* In legacy web browsers such as Firefox 9\r\n     we need to specify the width of the flex container */\r\n  width: 100%;\r\n\r\n  /* Also 'margin: 0 auto' doesn't have any effect on flex items in such web browsers\r\n     hence the bootstrap's container won't be aligned to the center anymore.\r\n\r\n     Therefore, we should use the following declarations to get it centered again */\r\n         -webkit-box-pack : center;\r\n            -ms-flex-pack : center;\r\n          justify-content : center;\r\n}\r\n\r\n.jumbotron {\r\n  padding-left: 20%;\r\n  padding-right: 20%;\r\n  text-align: center;\r\n  box-shadow: 0 8px 16px -6px black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<app-weather></app-weather>"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center\">\n<div class=\"jumbotron\">\n<h1>{{this.weather.city}}</h1>\n<h2>{{this.weather.description}}</h2>\n<h3>Current: {{this.display.temp}}</h3>\n<h3>High: {{this.display.temp_max}} | Low: {{this.display.temp_min}}</h3>\n<h3>Wind Speed: {{this.display.wind}}</h3>\n<h3>Sunrise: {{this.weather.sunrise}} Sunset: {{this.weather.sunset}}</h3>\n<hr />\n<a (click)=\"setAmerican()\" class=\"btn btn-primary btn-lg\" role=\"button\">American</a>\n<a (click)=\"setEuropean()\" class=\"btn btn-primary btn-lg\" role=\"button\">European</a>\n<a (click)=\"setScientist()\" class=\"btn btn-primary btn-lg\" role=\"button\">Scientist</a>\n</div>\n</div>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    // Since navigator.geolocation.getCurrentPosition() is asynchronous,
    // we need to create a new Promise so that the getWeather() function doesn't fire before we get the lat and long of user
    WeatherService.prototype.getLocation = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve([position.coords.latitude, position.coords.longitude]);
            });
        });
    };
    // Creates a position object from lat and long and makes a post request to our local express api. It then returns
    // the weather data it gets in JSON format
    WeatherService.prototype.getWeather = function (_latitude, _longitude) {
        var position = {
            latitude: _latitude,
            longitude: _longitude
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('/api', JSON.stringify(position), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_weather_weather_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_weather_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_weather_weather_component__["a" /* WeatherComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_weather_service__["a" /* WeatherService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Display; });
// This class is for what is displayed on screen in angular
var Display = (function () {
    function Display() {
    }
    return Display;
}());

//# sourceMappingURL=display.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
// Object for managing latitude and longitude
var Position = (function () {
    function Position() {
    }
    return Position;
}());

//# sourceMappingURL=position.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weather; });
// This class is for managing all data that we want to use from the weather API.
// It is implemented in the Weather Component
var Weather = (function () {
    function Weather() {
    }
    return Weather;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_position__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_weather__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_display__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeatherComponent = (function () {
    function WeatherComponent(weatherService, position, weather, display) {
        this.weatherService = weatherService;
        this.position = position;
        this.weather = weather;
        this.display = display;
    }
    // On page load, we run the getLocation() function. Since it is asynchronous,
    // we return it's contents as a promise. Then, we set the global variables of
    // latitude and longitude. We then run the showWeather() function.
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherService.getLocation()
            .then(function (position) {
            _this.position.latitude = position[0];
            _this.position.longitude = position[1];
            _this.showWeather();
        });
    };
    // We run the getWeather() function first with the parameters that we set with our getLocation()
    // function. We subscribe to the datastream that we get from the api call and set our classes up
    // by parsing the data we get back.
    WeatherComponent.prototype.showWeather = function () {
        var _this = this;
        this.weatherService.getWeather(this.position.latitude, this.position.longitude)
            .subscribe(function (data) {
            _this.weather.city = data.name; // Set city name
            _this.weather.description = data.weather[0].description; // Grab description of conditions
            // convert unix time to Local time based on Locale for sunrise and sunset
            _this.weather.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            _this.weather.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
            // Set up all weather class items by parsing the data and making conversions
            _this.weather.temp_kel = data.main.temp;
            _this.weather.temp_max_kel = data.main.temp_max;
            _this.weather.temp_min_kel = data.main.temp_min;
            _this.weather.temp_fahr = Math.floor(9 / 5 * (_this.weather.temp_kel - 273) + 32);
            _this.weather.temp_max_fahr = Math.floor(9 / 5 * (_this.weather.temp_max_kel - 273) + 32);
            _this.weather.temp_min_fahr = Math.floor(9 / 5 * (_this.weather.temp_min_kel - 273) + 32);
            _this.weather.temp_cel = Math.floor(_this.weather.temp_kel - 273);
            _this.weather.temp_max_cel = Math.floor(_this.weather.temp_max_kel - 273);
            _this.weather.temp_min_cel = Math.floor(_this.weather.temp_min_kel - 273);
            _this.weather.wind_mps = data.wind.speed;
            _this.weather.wind_mph = Math.floor(data.wind.speed / .44704);
            _this.setAmerican(); // Run to set initial display values
        });
    };
    // Sets up functions to fire off when specific button is pressed. \xB0 is hex for degrees sign
    WeatherComponent.prototype.setAmerican = function () {
        this.display.temp = this.weather.temp_fahr + '\xB0' + 'F';
        this.display.temp_max = this.weather.temp_max_fahr + '\xB0' + 'F';
        this.display.temp_min = this.weather.temp_min_fahr + '\xB0' + 'F';
        this.display.wind = this.weather.wind_mph + 'mph';
    };
    WeatherComponent.prototype.setEuropean = function () {
        this.display.temp = this.weather.temp_cel + '\xB0' + 'C';
        this.display.temp_max = this.weather.temp_max_cel + '\xB0' + 'C';
        this.display.temp_min = this.weather.temp_min_cel + '\xB0' + 'C';
        this.display.wind = this.weather.wind_mps + 'm/s';
    };
    WeatherComponent.prototype.setScientist = function () {
        this.display.temp = this.weather.temp_kel + '\xB0' + 'K';
        this.display.temp_max = this.weather.temp_max_kel + '\xB0' + 'K';
        this.display.temp_min = this.weather.temp_min_kel + '\xB0' + 'K';
        this.display.wind = this.weather.wind_mps + 'm/s';
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-weather',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__classes_position__["a" /* Position */], __WEBPACK_IMPORTED_MODULE_3__classes_weather__["a" /* Weather */], __WEBPACK_IMPORTED_MODULE_4__classes_display__["a" /* Display */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__classes_position__["a" /* Position */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__classes_position__["a" /* Position */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__classes_weather__["a" /* Weather */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__classes_weather__["a" /* Weather */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__classes_display__["a" /* Display */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__classes_display__["a" /* Display */]) === "function" && _d || Object])
], WeatherComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[168]);
//# sourceMappingURL=main.bundle.js.map