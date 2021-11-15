(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/menu/menu.component */ "./src/app/main/menu/menu.component.ts");
/* harmony import */ var _main_menu_guest_guest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/menu/guest/guest.component */ "./src/app/main/menu/guest/guest.component.ts");
/* harmony import */ var _main_menu_music_music_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/menu/music/music.component */ "./src/app/main/menu/music/music.component.ts");
/* harmony import */ var _main_menu_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/menu/game/game.component */ "./src/app/main/menu/game/game.component.ts");
/* harmony import */ var _main_menu_beer_beer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/menu/beer/beer.component */ "./src/app/main/menu/beer/beer.component.ts");
/* harmony import */ var _main_menu_gamecategories_gamecategories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/menu/gamecategories/gamecategories.component */ "./src/app/main/menu/gamecategories/gamecategories.component.ts");










const routes = [
    { path: '', component: _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] },
    { path: 'guest', component: _main_menu_guest_guest_component__WEBPACK_IMPORTED_MODULE_3__["GuestComponent"] },
    { path: 'music', component: _main_menu_music_music_component__WEBPACK_IMPORTED_MODULE_4__["MusicComponent"] },
    { path: 'game', component: _main_menu_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"] },
    { path: 'beer', component: _main_menu_beer_beer_component__WEBPACK_IMPORTED_MODULE_6__["BeerComponent"] },
    { path: 'categories', component: _main_menu_gamecategories_gamecategories_component__WEBPACK_IMPORTED_MODULE_7__["GamecategoriesComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");




class AppComponent {
    constructor() {
        this.title = 'tuborgtable';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/qrcode/qrcode.component */ "./src/app/main/qrcode/qrcode.component.ts");
/* harmony import */ var _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/menu/menu.component */ "./src/app/main/menu/menu.component.ts");
/* harmony import */ var _main_menu_music_music_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/menu/music/music.component */ "./src/app/main/menu/music/music.component.ts");
/* harmony import */ var _main_menu_guest_guest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/menu/guest/guest.component */ "./src/app/main/menu/guest/guest.component.ts");
/* harmony import */ var _main_menu_beer_beer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/menu/beer/beer.component */ "./src/app/main/menu/beer/beer.component.ts");
/* harmony import */ var _main_menu_game_game_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/menu/game/game.component */ "./src/app/main/menu/game/game.component.ts");
/* harmony import */ var _main_menu_gamecategories_gamecategories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/menu/gamecategories/gamecategories.component */ "./src/app/main/menu/gamecategories/gamecategories.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _main_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_7__["QrcodeComponent"],
        _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _main_menu_music_music_component__WEBPACK_IMPORTED_MODULE_9__["MusicComponent"],
        _main_menu_guest_guest_component__WEBPACK_IMPORTED_MODULE_10__["GuestComponent"],
        _main_menu_beer_beer_component__WEBPACK_IMPORTED_MODULE_11__["BeerComponent"],
        _main_menu_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
        _main_menu_gamecategories_gamecategories_component__WEBPACK_IMPORTED_MODULE_13__["GamecategoriesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _main_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_7__["QrcodeComponent"],
                    _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _main_menu_music_music_component__WEBPACK_IMPORTED_MODULE_9__["MusicComponent"],
                    _main_menu_guest_guest_component__WEBPACK_IMPORTED_MODULE_10__["GuestComponent"],
                    _main_menu_beer_beer_component__WEBPACK_IMPORTED_MODULE_11__["BeerComponent"],
                    _main_menu_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
                    _main_menu_gamecategories_gamecategories_component__WEBPACK_IMPORTED_MODULE_13__["GamecategoriesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [
                    _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _main_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_7__["QrcodeComponent"],
    _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
    _main_menu_music_music_component__WEBPACK_IMPORTED_MODULE_9__["MusicComponent"],
    _main_menu_guest_guest_component__WEBPACK_IMPORTED_MODULE_10__["GuestComponent"],
    _main_menu_beer_beer_component__WEBPACK_IMPORTED_MODULE_11__["BeerComponent"],
    _main_menu_game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
    _main_menu_gamecategories_gamecategories_component__WEBPACK_IMPORTED_MODULE_13__["GamecategoriesComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.footer = '';
        this.x = window.matchMedia("(max-width: 768px)");
        this.y = window.matchMedia("(max-width: 320px)");
    }
    ngOnInit() {
        this.myFunctionX(this.x);
        this.x.addListener(this.myFunctionX);
        this.myFunctionY(this.y);
        this.y.addListener(this.myFunctionY);
    }
    myFunctionX(x) {
        if (x.matches) {
            this.footer = './assets/img/footer-table.png';
        }
        else {
            this.footer = './assets/img/footer.png';
        }
    }
    myFunctionY(y) {
        if (y.matches) {
            this.footer = './assets/img/footer-mob.svg';
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 1, consts: [["alt", "footertext", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.footer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  height: 14vh;\n  padding: 0 8px;\n}\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmd0YWJsZS9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxNHZoO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsImZvb3RlciB7XG4gIGhlaWdodDogMTR2aDtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5mb290ZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GameService {
    constructor(http) {
        this.http = http;
        this.getUrlStatus = 'http://37.57.31.220:3000/api/rooms/4/status';
        this.getUrlStartGame = 'http://37.57.31.220:3000/api/rooms/4';
        this.getUrlCategories = 'http://37.57.31.220:3000/api/rooms/4/questions/categories/category_1';
        this.getUrlEndGame = 'http://37.57.31.220:3000/api/rooms/4/end';
    }
    getStatus() {
        return this.http.get(this.getUrlStatus, { responseType: "json" });
    }
    getStartGame() {
        return this.http.get(this.getUrlStartGame, { responseType: "json" });
    }
    getCategories() {
        return this.http.get(this.getUrlCategories, { responseType: "json" });
    }
    postEndGame() {
        return this.http.post(this.getUrlEndGame, {
            isFrontend: true
        });
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function MainComponent_app_qrcode_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-qrcode");
} }
function MainComponent_router_outlet_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class MainComponent {
    constructor() {
        this.qrcode = true;
        this.menu = false;
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 2, consts: [[4, "ngIf"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_app_qrcode_1_Template, 1, 0, "app-qrcode", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_router_outlet_2_Template, 1, 0, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu);
    } }, styles: ["main[_ngcontent-%COMP%] {\n  height: 85.45vh;\n  background-image: url('bg.png');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: top;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9GOlxccHJvamVjdFxcRDJcXFR1Ym9yZ1xcY29kZVxcdHVib3JndGFibGUvc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBoZWlnaHQ6IDg1LjQ1dmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2JnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIiwibWFpbiB7XG4gIGhlaWdodDogODUuNDV2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/menu/beer/beer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/menu/beer/beer.component.ts ***!
  \**************************************************/
/*! exports provided: BeerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerComponent", function() { return BeerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class BeerComponent {
    constructor() {
        this.beer = './assets/img/menu/beer.png';
    }
    ngOnInit() {
    }
}
BeerComponent.ɵfac = function BeerComponent_Factory(t) { return new (t || BeerComponent)(); };
BeerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BeerComponent, selectors: [["app-beer"]], decls: 10, vars: 1, consts: [[1, "beer"], ["alt", "beer", 1, "beer__img", 3, "src"], [1, "beer__title"], [1, "beer__text"], [1, "beer__button-wrap"], ["routerLink", "", 1, "beer__button"]], template: function BeerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042F\u041A \u041D\u0410\u041B\u0418\u0422\u0418 \u041F\u0418\u0412\u0410?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0436\u0435 \u0434\u0430\u0432\u043D\u043E \u0432\u0456\u0434\u043E\u043C\u043E, \u0449\u043E \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0438\u0439 \u0437\u043C\u0456\u0441\u0442 \u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u0436\u0430\u0442\u0438 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u0442\u0438\u0441\u044C \u043B\u044E\u0434\u0438\u043D\u0456, \u044F\u043A\u0430 \u043E\u0446\u0456\u043D\u044E\u0454 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438. \u0421\u0435\u043D\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F Lorem Ipsum \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0446\u0435\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0430\u0454 \u0431\u0456\u043B\u044C\u0448-\u043C\u0435\u043D\u0448 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0442\u0435\u0440 \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \"\u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442. \u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442.\" \u0426\u0435 \u0440\u043E\u0431\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u0445\u043E\u0436\u0438\u043C \u043D\u0430 \u043E\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439. \u0411\u0430\u0433\u0430\u0442\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C Lorem Ipsum \u044F\u043A \u0437\u0440\u0430\u0437\u043E\u043A \u0456 \u043F\u043E\u0448\u0443\u043A \u0437\u0430 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \"lorem ipsum\" \u0432\u0456\u0434\u043A\u0440\u0438\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u044F\u043A\u0456 \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0449\u0435 \u0432 \u0437\u0430\u0440\u043E\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u0441\u0442\u0430\u043D\u0456. \u0420\u0456\u0437\u043D\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 Lorem Ipsum \u0437'\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0437\u0430 \u043C\u0438\u043D\u0443\u043B\u0456 \u0440\u043E\u043A\u0438, \u0434\u0435\u044F\u043A\u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E, \u0434\u0435\u044F\u043A\u0456 \u0431\u0443\u043B\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0443\u043C\u0438\u0441\u043D\u043E (\u0437\u043E\u043A\u0440\u0435\u043C\u0430, \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0456).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.beer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".beer__img[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  margin-left: 4.68vw;\n  width: 9vw;\n}\n.beer__title[_ngcontent-%COMP%] {\n  width: 62%;\n  padding-left: 49px;\n  margin-bottom: 10px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 40px;\n  background-color: #004a99;\n  color: #fff;\n}\n.beer__text[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-bottom: 45px;\n  height: 148px;\n  overflow-y: auto;\n}\n.beer__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 1.8vw;\n  text-indent: 1.5rem;\n  background-color: #55f91b;\n}\n.beer__button-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.beer__button[_ngcontent-%COMP%] {\n  padding: 12px 7.5vw 12px 7.5vw;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 2.5vw;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L2JlZXIvRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZ3RhYmxlL3NyY1xcYXBwXFxtYWluXFxtZW51XFxiZWVyXFxiZWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21lbnUvYmVlci9iZWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDSEo7QURNRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFqQlM7RUFrQlQsV0FBQTtBQ0pKO0FET0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFJO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBbkNRO0FDNkJkO0FEVUU7RUFDRSxrQkFBQTtBQ1JKO0FEV0U7RUFDRSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkEvQ1U7RUFnRFYsWUFBQTtFQUNBLGNBaERTO0VBaURULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21lbnUvYmVlci9iZWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZWVuLWNvbG9yOiAjNTVmOTFiO1xyXG4kYmx1ZS1jb2xvcjogIzAwNGE5OTtcclxuXHJcbi5iZWVyIHtcclxuICAmX19pbWcge1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQuNjh2dztcclxuICAgIHdpZHRoOiA5dnc7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICB3aWR0aDogNjIlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVzZW9TYW5zQ3lybDcwMCc7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgIGhlaWdodDogMTQ4cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuXHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNdXNlb1NhbnNDeXJsNzAwJztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDEuOHZ3O1xyXG4gICAgICB0ZXh0LWluZGVudDogMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24td3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcGFkZGluZzogMTJweCA3LjV2dyAxMnB4IDcuNXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCIuYmVlcl9faW1nIHtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIG1hcmdpbi1sZWZ0OiA0LjY4dnc7XG4gIHdpZHRoOiA5dnc7XG59XG4uYmVlcl9fdGl0bGUge1xuICB3aWR0aDogNjIlO1xuICBwYWRkaW5nLWxlZnQ6IDQ5cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmw3MDBcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRhOTk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJlZXJfX3RleHQge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICBoZWlnaHQ6IDE0OHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmJlZXJfX3RleHQgcCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmw3MDBcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuOHZ3O1xuICB0ZXh0LWluZGVudDogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xufVxuLmJlZXJfX2J1dHRvbi13cmFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJlZXJfX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggNy41dncgMTJweCA3LjV2dztcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyLjV2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ZjkxYjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzAwNGE5OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-beer',
                templateUrl: './beer.component.html',
                styleUrls: ['./beer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/menu/game/game.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/menu/game/game.component.ts ***!
  \**************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function GameComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.nextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0432\u0438\u043A\u043E\u043D\u0430\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.endGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0437\u0430\u043A\u0456\u043D\u0447\u0438\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u0456\u0437\u043D\u0456\u0448\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GameComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.Next = true;
        this.Previous = false;
        this.Late = true;
        this.End = false;
        this.play = './assets/img/menu/play.png';
        this.roomEnd = {
            "isFrontend": true
        };
    }
    ngOnInit() {
        this.getStartGame();
    }
    ngAfterViewChecked() {
        //  this.getCurrentTaskId();
        // this.getCurrentTask();
    }
    getStartGame() {
        this.gameService.getStartGame().subscribe(text => {
            this.startGame = text;
            console.log(this.startGame);
            if (this.startGame.response.currentQuestion === null) {
                this.gameService.getCategories().subscribe(data => {
                    this.dataGame = data;
                    this.getCurrentTask();
                });
            }
            else {
                document.getElementById('taskText').innerHTML = this.startGame.response.currentQuestion.questionSite;
            }
        });
    }
    getCurrentTask() {
        let question = this.dataGame.response.questionSite;
        document.getElementById('taskText').innerHTML = question;
    }
    nextStep() {
        this.gameService.getCategories().subscribe(data => {
            this.dataGame = data;
            this.getCurrentTask();
            if (this.dataGame.response.last === true) {
                this.End = true;
                document.querySelector('.game__buttonNext').innerHTML = "заново";
            }
            else {
                this.End = false;
                document.querySelector('.game__buttonNext').innerHTML = "виконали";
            }
        });
        //this.Previous = true;
        /*  if(this.textData[this.idTask] > 10){
              this.End = true;
              this.Next = false;
              this.Previous = false;
              this.Late = false;
          }*/
    }
    endGame() {
        this.gameService.postEndGame().subscribe();
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 12, vars: 4, consts: [[1, "game"], ["alt", "play", 1, "game__img", 3, "src"], [1, "game__title"], [1, "game__text"], ["id", "taskText"], [1, "game__button-wrap"], [1, "game__button-top"], ["class", "game__buttonNext", 3, "click", 4, "ngIf"], ["class", "game__buttonEnd", "routerLink", "", 3, "click", 4, "ngIf"], ["class", "game__buttonLate", "routerLink", "", 4, "ngIf"], [1, "game__buttonNext", 3, "click"], ["routerLink", "", 1, "game__buttonEnd", 3, "click"], ["routerLink", "", 1, "game__buttonLate"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0406\u041D\u0421\u0422\u0420\u0423\u041A\u0426\u0406\u042F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0436\u0435 \u0434\u0430\u0432\u043D\u043E \u0432\u0456\u0434\u043E\u043C\u043E, \u0449\u043E \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0438\u0439 \u0437\u043C\u0456\u0441\u0442 \u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u0436\u0430\u0442\u0438 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u0442\u0438\u0441\u044C \u043B\u044E\u0434\u0438\u043D\u0456, \u044F\u043A\u0430 \u043E\u0446\u0456\u043D\u044E\u0454 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438. \u0421\u0435\u043D\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F Lorem Ipsum \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0446\u0435\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0430\u0454 \u0431\u0456\u043B\u044C\u0448-\u043C\u0435\u043D\u0448 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0442\u0435\u0440 \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \"\u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442. \u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442.\" \u0426\u0435 \u0440\u043E\u0431\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u0445\u043E\u0436\u0438\u043C \u043D\u0430 \u043E\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439. \u0411\u0430\u0433\u0430\u0442\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C Lorem Ipsum \u044F\u043A \u0437\u0440\u0430\u0437\u043E\u043A \u0456 \u043F\u043E\u0448\u0443\u043A \u0437\u0430 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \"lorem ipsum\" \u0432\u0456\u0434\u043A\u0440\u0438\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u044F\u043A\u0456 \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0449\u0435 \u0432 \u0437\u0430\u0440\u043E\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u0441\u0442\u0430\u043D\u0456. \u0420\u0456\u0437\u043D\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 Lorem Ipsum \u0437'\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0437\u0430 \u043C\u0438\u043D\u0443\u043B\u0456 \u0440\u043E\u043A\u0438, \u0434\u0435\u044F\u043A\u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E, \u0434\u0435\u044F\u043A\u0456 \u0431\u0443\u043B\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0443\u043C\u0438\u0441\u043D\u043E (\u0437\u043E\u043A\u0440\u0435\u043C\u0430, \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0456).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameComponent_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameComponent_button_11_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.play, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Next);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.End);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Late);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".game[_ngcontent-%COMP%] {\n  \n}\n.game__img[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  margin-left: 4.68vw;\n  width: 9vw;\n}\n.game__title[_ngcontent-%COMP%] {\n  width: 77%;\n  padding-left: 44px;\n  margin-bottom: 10px;\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 20.83px;\n  color: #fff;\n}\n.game__text[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-bottom: 15px;\n  max-height: 130px;\n  overflow-y: auto;\n  background-color: #004a99;\n}\n.game__text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 15px 15px 0 15px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 16px;\n  text-indent: 1.5rem;\n  color: #f1f1f1;\n}\n.game__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 16px;\n  text-indent: 1.5rem;\n  color: #f1f1f1;\n}\n.game__button-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 47.75vw;\n  margin-left: auto;\n  margin-right: auto;\n}\n.game__button-top[_ngcontent-%COMP%] {\n  display: flex;\n}\n.game__buttonPrevious[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 17px;\n  margin-right: 17px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 22px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.game__buttonNext[_ngcontent-%COMP%], .game__buttonEnd[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 22px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.game__buttonLate[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 22px;\n  background-color: #004a99;\n  border: none;\n  color: #f1f1f1;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.game__buttonEnd[_ngcontent-%COMP%] {\n  margin-left: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L2dhbWUvRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZ3RhYmxlL3NyY1xcYXBwXFxtYWluXFxtZW51XFxnYW1lXFxnYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21lbnUvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBeUdFOzs7Ozs7Ozs7OztJQUFBO0FDL0ZGO0FEUkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNVSjtBRFBFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1NKO0FETkU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBekJTO0FDaUNiO0FETkk7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUU47QURMSTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ09OO0FESEU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDS0o7QURGRTtFQUNFLGFBQUE7QUNJSjtBRERFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EseUJBbEVVO0VBbUVWLFlBQUE7RUFDQSxjQW5FUztFQW9FVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEQUU7RUFFRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EseUJBbEZVO0VBbUZWLFlBQUE7RUFDQSxjQW5GUztFQW9GVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQS9GUztFQWdHVCxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21lbnUvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZWVuLWNvbG9yOiAjNTVmOTFiO1xyXG4kYmx1ZS1jb2xvcjogIzAwNGE5OTtcclxuXHJcbi5nYW1lIHtcclxuXHJcbiAgJl9faW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0LjY4dnc7XHJcbiAgICB3aWR0aDogOXZ3O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgd2lkdGg6IDc3JTtcclxuICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgZm9udC1zaXplOiAyMC44M3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWF4LWhlaWdodDogMTMwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1pbmRlbnQ6IDEuNXJlbTtcclxuICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW9TYW5zQ3lybDcwMCc7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB0ZXh0LWluZGVudDogMS41cmVtO1xyXG4gICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J1dHRvbi13cmFwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0Ny43NXZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24tdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b25QcmV2aW91cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b25OZXh0LFxyXG4gICZfX2J1dHRvbkVuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b25MYXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbkVuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICB9XHJcblxyXG4gIC8qJl9fYnV0dG9uRW5kIHtcclxuICAgIG1hcmdpbi10b3A6IDczcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDUuMzd2dyAxMnB4IDUuMzd2dztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0qL1xyXG59XHJcbiIsIi5nYW1lIHtcbiAgLyomX19idXR0b25FbmQge1xuICAgIG1hcmdpbi10b3A6IDczcHg7XG4gICAgcGFkZGluZzogMTJweCA1LjM3dncgMTJweCA1LjM3dnc7XG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWNvbG9yO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Ki9cbn1cbi5nYW1lX19pbWcge1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgbWFyZ2luLWxlZnQ6IDQuNjh2dztcbiAgd2lkdGg6IDl2dztcbn1cbi5nYW1lX190aXRsZSB7XG4gIHdpZHRoOiA3NyU7XG4gIHBhZGRpbmctbGVmdDogNDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXNpemU6IDIwLjgzcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmdhbWVfX3RleHQge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXgtaGVpZ2h0OiAxMzBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGE5OTtcbn1cbi5nYW1lX190ZXh0IGg0IHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1pbmRlbnQ6IDEuNXJlbTtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG4uZ2FtZV9fdGV4dCBwIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1pbmRlbnQ6IDEuNXJlbTtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG4uZ2FtZV9fYnV0dG9uLXdyYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0Ny43NXZ3O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmdhbWVfX2J1dHRvbi10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdhbWVfX2J1dHRvblByZXZpb3VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWY5MWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDRhOTk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdhbWVfX2J1dHRvbk5leHQsIC5nYW1lX19idXR0b25FbmQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWY5MWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDRhOTk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdhbWVfX2J1dHRvbkxhdGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRhOTk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdhbWVfX2J1dHRvbkVuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/menu/gamecategories/gamecategories.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/menu/gamecategories/gamecategories.component.ts ***!
  \**********************************************************************/
/*! exports provided: GamecategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamecategoriesComponent", function() { return GamecategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GamecategoriesComponent {
    constructor() {
        this.play = './assets/img/menu/play.png';
    }
    ngOnInit() {
    }
}
GamecategoriesComponent.ɵfac = function GamecategoriesComponent_Factory(t) { return new (t || GamecategoriesComponent)(); };
GamecategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamecategoriesComponent, selectors: [["app-gamecategories"]], decls: 21, vars: 1, consts: [[1, "categories"], ["alt", "play", 1, "categories__img", 3, "src"], [1, "categories__title"], [1, "categories__text"], ["id", "taskText"], [1, "categories__button-wrap"], [1, "categories__buttons"], [1, "categories__buttons-top"], [1, "categories__buttonPrevious"], [1, "categories__buttonNext"], [1, "categories__buttons-bottom"], ["routerLink", "", 1, "categories__buttonLate"]], template: function GamecategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0406\u041D\u0421\u0422\u0420\u0423\u041A\u0426\u0406\u042F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041E\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0442\u0438\u043F \u0433\u0440\u0438, \u044F\u043A\u0438\u0439 \u0432\u0430\u043C \u0434\u043E \u0432\u043F\u043E\u0434\u043E\u0431\u0438!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u043A\u0440\u043E\u043A\u043E\u0434\u0438\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0437\u0430\u0433\u0430\u0434\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u043F\u0440\u0430\u0432\u0434\u0430 \u0447\u0438 \u0431\u0440\u0435\u0445\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0432\u0433\u0430\u0434\u0430\u0439 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0456\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0432\u0438\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.play, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".categories__img[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  margin-left: 4.68vw;\n  width: 9vw;\n}\n.categories__title[_ngcontent-%COMP%] {\n  width: 77%;\n  padding-left: 44px;\n  margin-bottom: 10px;\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 20.83px;\n  color: #fff;\n}\n.categories__text[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-bottom: 15px;\n  max-height: 130px;\n  overflow-y: auto;\n  background-color: #004a99;\n}\n.categories__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 49px;\n  margin: 10px 0 3px 0;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 22px;\n  background-color: #004a99;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n}\n.categories__button-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 55vw;\n  margin-left: auto;\n  margin-right: auto;\n}\n.categories__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.categories__buttons-top[_ngcontent-%COMP%], .categories__buttons-bottom[_ngcontent-%COMP%] {\n  display: flex;\n}\n.categories__buttonPrevious[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n  margin-right: 17px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 22px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.categories__buttonNext[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 12px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 22px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.categories__buttonLate[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 22px;\n  background-color: #004a99;\n  border: none;\n  color: #f1f1f1;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.categories__buttonEnd[_ngcontent-%COMP%] {\n  margin-top: 73px;\n  padding: 12px 5.37vw 12px 5.37vw;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 22px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L2dhbWVjYXRlZ29yaWVzL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmd0YWJsZS9zcmNcXGFwcFxcbWFpblxcbWVudVxcZ2FtZWNhdGVnb3JpZXNcXGdhbWVjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21lbnUvZ2FtZWNhdGVnb3JpZXMvZ2FtZWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNKSjtBRE9FO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEUUU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBekJTO0FDbUJiO0FEUUk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFqQ087RUFrQ1AsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNUSjtBRFlFO0VBRUUsYUFBQTtBQ1hKO0FEZUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFuRVU7RUFvRVYsWUFBQTtFQUNBLGNBcEVTO0VBcUVULHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDYko7QURnQkU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EseUJBbEZVO0VBbUZWLFlBQUE7RUFDQSxjQW5GUztFQW9GVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEaUJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkEvRlM7RUFnR1QsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2ZKO0FEa0JFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQTdHVTtFQThHVixZQUFBO0VBQ0EsY0E5R1M7RUErR1QseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21lbnUvZ2FtZWNhdGVnb3JpZXMvZ2FtZWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3JlZW4tY29sb3I6ICM1NWY5MWI7XHJcbiRibHVlLWNvbG9yOiAjMDA0YTk5O1xyXG5cclxuLmNhdGVnb3JpZXMge1xyXG5cclxuICAmX19pbWcge1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQuNjh2dztcclxuICAgIHdpZHRoOiA5dnc7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICB3aWR0aDogNzclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVzZW9TYW5zQ3lybDcwMCc7XHJcbiAgICBmb250LXNpemU6IDIwLjgzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMzBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuXHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0OXB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAzcHggMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNdXNlb1NhbnNDeXJsNzAwJztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uLXdyYXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDU1dnc7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAmX19idXR0b25zLXRvcCxcclxuICAmX19idXR0b25zLWJvdHRvbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICB9XHJcblxyXG4gICZfX2J1dHRvblByZXZpb3VzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbk5leHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uTGF0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b25FbmQge1xyXG4gICAgbWFyZ2luLXRvcDogNzNweDtcclxuICAgIHBhZGRpbmc6IDEycHggNS4zN3Z3IDEycHggNS4zN3Z3O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5jYXRlZ29yaWVzX19pbWcge1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgbWFyZ2luLWxlZnQ6IDQuNjh2dztcbiAgd2lkdGg6IDl2dztcbn1cbi5jYXRlZ29yaWVzX190aXRsZSB7XG4gIHdpZHRoOiA3NyU7XG4gIHBhZGRpbmctbGVmdDogNDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXNpemU6IDIwLjgzcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhdGVnb3JpZXNfX3RleHQge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXgtaGVpZ2h0OiAxMzBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGE5OTtcbn1cbi5jYXRlZ29yaWVzX190ZXh0IHAge1xuICBwYWRkaW5nLWxlZnQ6IDQ5cHg7XG4gIG1hcmdpbjogMTBweCAwIDNweCAwO1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0YTk5O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhdGVnb3JpZXNfX2J1dHRvbi13cmFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTV2dztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5jYXRlZ29yaWVzX19idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jYXRlZ29yaWVzX19idXR0b25zLXRvcCwgLmNhdGVnb3JpZXNfX2J1dHRvbnMtYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXRlZ29yaWVzX19idXR0b25QcmV2aW91cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDA0YTk5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXRlZ29yaWVzX19idXR0b25OZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDA0YTk5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXRlZ29yaWVzX19idXR0b25MYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0YTk5O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXRlZ29yaWVzX19idXR0b25FbmQge1xuICBtYXJnaW4tdG9wOiA3M3B4O1xuICBwYWRkaW5nOiAxMnB4IDUuMzd2dyAxMnB4IDUuMzd2dztcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDA0YTk5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamecategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gamecategories',
                templateUrl: './gamecategories.component.html',
                styleUrls: ['./gamecategories.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/menu/guest/guest.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/menu/guest/guest.component.ts ***!
  \****************************************************/
/*! exports provided: GuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestComponent", function() { return GuestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class GuestComponent {
    constructor(mainComponent) {
        this.mainComponent = mainComponent;
        this.member = './assets/img/menu/member.png';
        this.qr = './assets/img/qr/qr.png';
    }
    ngOnInit() {
    }
}
GuestComponent.ɵfac = function GuestComponent_Factory(t) { return new (t || GuestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"])); };
GuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuestComponent, selectors: [["app-guest"]], decls: 11, vars: 2, consts: [[1, "quest"], ["alt", "member", 1, "quest__img", 3, "src"], [1, "quest__title"], [1, "quest__title", "title2"], [1, "quest__qr"], ["alt", "qr", 3, "src"], [1, "quest__button-wrap"], ["routerLink", "", 1, "quest__button"]], template: function GuestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0420\u0418\u0412\u0406\u0422,\u041D\u041E\u0412\u0418\u0419 \u0413\u041E\u0421\u0422\u042E!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u041A\u0410\u041D\u0423\u0419 QR-\u041A\u041E\u0414");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.member, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.qr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".quest__img[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  margin-left: 4.68vw;\n  width: 9vw;\n}\n.quest__title[_ngcontent-%COMP%] {\n  width: 62%;\n  padding-left: 49px;\n  margin-bottom: 10px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 40px;\n  background-color: #004a99;\n  color: #fff;\n}\n.quest__title.title2[_ngcontent-%COMP%] {\n  width: 46%;\n  margin-bottom: 10px;\n}\n.quest__qr[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\n.quest__qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 125px;\n}\n.quest__button-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.quest__button[_ngcontent-%COMP%] {\n  padding: 12px 7.5vw 12px 7.5vw;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 2.5vw;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L2d1ZXN0L0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmd0YWJsZS9zcmNcXGFwcFxcbWFpblxcbWVudVxcZ3Vlc3RcXGd1ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21lbnUvZ3Vlc3QvZ3Vlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNKSjtBRE9FO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQWxCUztFQW1CVCxXQUFBO0FDTEo7QURRRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ05KO0FEU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDUEo7QURTSTtFQUNFLGFBQUE7QUNQTjtBRFdFO0VBQ0Usa0JBQUE7QUNUSjtBRFlFO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBN0NVO0VBOENWLFlBQUE7RUFDQSxjQTlDUztFQStDVCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tZW51L2d1ZXN0L2d1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZWVuLWNvbG9yOiAjNTVmOTFiO1xyXG4kYmx1ZS1jb2xvcjogIzAwNGE5OTtcclxuXHJcbi5xdWVzdCB7XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgICBtYXJnaW4tbGVmdDogNC42OHZ3O1xyXG4gICAgd2lkdGg6IDl2dztcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdXNlb1NhbnNDeXJsNzAwJztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZS50aXRsZTIge1xyXG4gICAgd2lkdGg6IDQ2JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19xciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24td3JhcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcGFkZGluZzogMTJweCA3LjV2dyAxMnB4IDcuNXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kZW5zZWRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCIucXVlc3RfX2ltZyB7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBtYXJnaW4tbGVmdDogNC42OHZ3O1xuICB3aWR0aDogOXZ3O1xufVxuLnF1ZXN0X190aXRsZSB7XG4gIHdpZHRoOiA2MiU7XG4gIHBhZGRpbmctbGVmdDogNDlweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGE5OTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucXVlc3RfX3RpdGxlLnRpdGxlMiB7XG4gIHdpZHRoOiA0NiU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucXVlc3RfX3FyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnF1ZXN0X19xciBpbWcge1xuICBoZWlnaHQ6IDEyNXB4O1xufVxuLnF1ZXN0X19idXR0b24td3JhcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xdWVzdF9fYnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCA3LjV2dyAxMnB4IDcuNXZ3O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDA0YTk5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guest',
                templateUrl: './guest.component.html',
                styleUrls: ['./guest.component.scss']
            }]
    }], function () { return [{ type: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class MenuComponent {
    constructor(mainComponent, gameService) {
        this.mainComponent = mainComponent;
        this.gameService = gameService;
        this.member = './assets/img/menu/member.png';
        this.play = './assets/img/menu/play.png';
        this.music = './assets/img/menu/music.png';
        this.beer = './assets/img/menu/beer.png';
    }
    ngOnInit() {
        //this.disabledButons();
        this.checkStatus();
    }
    /*disabledButons(): void {
        this.gameService.getCategories().subscribe(task => {
         this.dataGame = task;
         console.log(this.dataGame);
         if(this.dataGame.response.last === true) {
             document.getElementById('member').classList.add("disabledbutton");
             document.getElementById('game').classList.add("disabledbutton");
           }
       })
     }*/
    checkStatus() {
        setTimeout(() => {
            this.gameService.getStatus().subscribe(dataObject => {
                this.dataObject = dataObject;
                let response = this.dataObject.response;
                let status = response.status;
                console.log(status);
                if (status === "wait_for_start") {
                    this.mainComponent.menu = false;
                    this.mainComponent.qrcode = true;
                }
            });
        }, 2000);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 18, vars: 4, consts: [[1, "menu"], [1, "menu-wrap"], ["routerLink", "/guest", "id", "member", 1, "menu__item"], ["alt", "member", 3, "src"], ["routerLink", "/game", "id", "game", 1, "menu__item"], ["alt", "play", 3, "src"], ["routerLink", "/music", 1, "menu__item"], ["alt", "music", 3, "src"], ["routerLink", "/beer", 1, "menu__item"], ["alt", "beer", 3, "src"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0414\u041E\u0414\u0410\u0422\u0418 \u0413\u041E\u0421\u0422\u0415\u0419");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0413\u0420\u0410\u0422\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u042F\u041A \u0423\u0412\u0406\u041C\u041A\u041D\u0423\u0422\u0418 \u041C\u0423\u0417\u0418\u041A\u0423");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u042F\u041A \u041D\u0410\u041B\u0418\u0422\u0418 \u041F\u0418\u0412\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.member, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.play, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.music, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.beer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".menu[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.menu-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 400px;\n  justify-content: space-around;\n}\n.menu__item[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 18px;\n  cursor: pointer;\n}\n.menu__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n  width: 14vw;\n}\n.menu__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 16px;\n  color: #55f91b;\n}\n.disabledbutton[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmd0YWJsZS9zcmNcXGFwcFxcbWFpblxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGSjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRk47QURLSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBNUJRO0FDeUJkO0FEUUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZWVuLWNvbG9yOiAjNTVmOTFiO1xyXG5cclxuLm1lbnUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgJi13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgIHdpZHRoOiAxNHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGlzYWJsZWRidXR0b24ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG4iLCIubWVudSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tZW51LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiA0MDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubWVudV9faXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnVfX2l0ZW0gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICB3aWR0aDogMTR2dztcbn1cbi5tZW51X19pdGVtIHAge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1NWY5MWI7XG59XG5cbi5kaXNhYmxlZGJ1dHRvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] }, { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/menu/music/music.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/menu/music/music.component.ts ***!
  \****************************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MusicComponent {
    constructor() {
        this.music = './assets/img/menu/music.png';
    }
    ngOnInit() {
    }
}
MusicComponent.ɵfac = function MusicComponent_Factory(t) { return new (t || MusicComponent)(); };
MusicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicComponent, selectors: [["app-music"]], decls: 10, vars: 1, consts: [[1, "music"], ["alt", "music", 1, "music__img", 3, "src"], [1, "music__title"], [1, "music__text"], [1, "music__button-wrap"], ["routerLink", "", 1, "music__button"]], template: function MusicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042F\u041A \u041F\u0406\u0414\u041A\u041B\u042E\u0427\u0418\u0422\u0418 \u041A\u041E\u041B\u041E\u041D\u041A\u0423?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0436\u0435 \u0434\u0430\u0432\u043D\u043E \u0432\u0456\u0434\u043E\u043C\u043E, \u0449\u043E \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0438\u0439 \u0437\u043C\u0456\u0441\u0442 \u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u0436\u0430\u0442\u0438 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u0442\u0438\u0441\u044C \u043B\u044E\u0434\u0438\u043D\u0456, \u044F\u043A\u0430 \u043E\u0446\u0456\u043D\u044E\u0454 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438. \u0421\u0435\u043D\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F Lorem Ipsum \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0446\u0435\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0430\u0454 \u0431\u0456\u043B\u044C\u0448-\u043C\u0435\u043D\u0448 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0442\u0435\u0440 \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \"\u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442. \u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442.\" \u0426\u0435 \u0440\u043E\u0431\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u0445\u043E\u0436\u0438\u043C \u043D\u0430 \u043E\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439. \u0411\u0430\u0433\u0430\u0442\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C Lorem Ipsum \u044F\u043A \u0437\u0440\u0430\u0437\u043E\u043A \u0456 \u043F\u043E\u0448\u0443\u043A \u0437\u0430 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \"lorem ipsum\" \u0432\u0456\u0434\u043A\u0440\u0438\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u044F\u043A\u0456 \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0449\u0435 \u0432 \u0437\u0430\u0440\u043E\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u0441\u0442\u0430\u043D\u0456. \u0420\u0456\u0437\u043D\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 Lorem Ipsum \u0437'\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0437\u0430 \u043C\u0438\u043D\u0443\u043B\u0456 \u0440\u043E\u043A\u0438, \u0434\u0435\u044F\u043A\u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E, \u0434\u0435\u044F\u043A\u0456 \u0431\u0443\u043B\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0443\u043C\u0438\u0441\u043D\u043E (\u0437\u043E\u043A\u0440\u0435\u043C\u0430, \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0456).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u043D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.music, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".music__img[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  margin-left: 4.68vw;\n  width: 9vw;\n}\n.music__title[_ngcontent-%COMP%] {\n  width: 62%;\n  padding-left: 49px;\n  margin-bottom: 10px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 40px;\n  background-color: #004a99;\n  color: #fff;\n}\n.music__text[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-bottom: 45px;\n  height: 148px;\n  overflow-y: auto;\n}\n.music__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  font-size: 1.8vw;\n  text-indent: 1.5rem;\n  background-color: #55f91b;\n}\n.music__button-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.music__button[_ngcontent-%COMP%] {\n  padding: 12px 7.5vw 12px 7.5vw;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 2.5vw;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tZW51L211c2ljL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmd0YWJsZS9zcmNcXGFwcFxcbWFpblxcbWVudVxcbXVzaWNcXG11c2ljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21lbnUvbXVzaWMvbXVzaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNISjtBRE1FO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQWpCUztFQWtCVCxXQUFBO0FDSko7QURPRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUk7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFuQ1E7QUM2QmQ7QURVRTtFQUNFLGtCQUFBO0FDUko7QURXRTtFQUNFLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQS9DVTtFQWdEVixZQUFBO0VBQ0EsY0FoRFM7RUFpRFQseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWVudS9tdXNpYy9tdXNpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4ubXVzaWMge1xyXG4gICZfX2ltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgICBtYXJnaW4tbGVmdDogNC42OHZ3O1xyXG4gICAgd2lkdGg6IDl2dztcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdXNlb1NhbnNDeXJsNzAwJztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAxNDhweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG5cclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgICAgIHRleHQtaW5kZW50OiAxLjVyZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J1dHRvbi13cmFwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDcuNXZ3IDEycHggNy41dnc7XHJcbiAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5tdXNpY19faW1nIHtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIG1hcmdpbi1sZWZ0OiA0LjY4dnc7XG4gIHdpZHRoOiA5dnc7XG59XG4ubXVzaWNfX3RpdGxlIHtcbiAgd2lkdGg6IDYyJTtcbiAgcGFkZGluZy1sZWZ0OiA0OXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0YTk5O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tdXNpY19fdGV4dCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gIGhlaWdodDogMTQ4cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubXVzaWNfX3RleHQgcCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmw3MDBcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuOHZ3O1xuICB0ZXh0LWluZGVudDogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xufVxuLm11c2ljX19idXR0b24td3JhcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdXNpY19fYnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCA3LjV2dyAxMnB4IDcuNXZ3O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIuNXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDA0YTk5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-music',
                templateUrl: './music.component.html',
                styleUrls: ['./music.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/qrcode/qrcode.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/qrcode/qrcode.component.ts ***!
  \*************************************************/
/*! exports provided: QrcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodeComponent", function() { return QrcodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game.service */ "./src/app/game.service.ts");




class QrcodeComponent {
    constructor(mainComponent, gameService) {
        this.mainComponent = mainComponent;
        this.gameService = gameService;
        this.qr = './assets/img/qr/qr.png';
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.openMenu();
    }
    openMenu() {
        this.gameService.getStatus().subscribe(dataObject => {
            this.dataObject = dataObject;
            let response = this.dataObject.response;
            let status = response.status;
            console.log(status);
            if (status === "ready_for_start") {
                this.mainComponent.menu = true;
                this.mainComponent.qrcode = false;
            }
        });
        /*this.mainComponent.menu = true;
        this.mainComponent.qrcode = false;*/
    }
}
QrcodeComponent.ɵfac = function QrcodeComponent_Factory(t) { return new (t || QrcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
QrcodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrcodeComponent, selectors: [["app-qrcode"]], decls: 24, vars: 1, consts: [[1, "rqcode"], [1, "rqcode__title"], [1, "title__first"], [1, "title__second"], [1, "rqcode__content"], [1, "rqcode__content-wrap"], [1, "content__block"], [1, "content__qrtext"], [1, "content__qr"], ["alt", "qr", 3, "src"], [1, "content__text"]], template: function QrcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0421\u0406 \u0413\u041E\u0422\u041E\u0412\u0406 \u0414\u041E \u041F\u0410\u0422\u0406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0421\u0423\u041F\u0415\u0420\u0412\u0415\u0427\u0406\u0420\u041A\u04102020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0411\u041E\u0412\u0421\u0406\u0412\u0418\u0416\u0418\u0412\u0423\u0422\u042C?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u041E\u0407\u0425\u0410\u041B\u0418!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u041A\u0410\u041D\u0423\u0419 QR-\u041A\u041E\u0414 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0406 \u041F\u0406\u0414\u041A\u041B\u042E\u0427\u0410\u0419\u0421\u042F!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0414\u041B\u042F \u041F\u041E\u0427\u0410\u0422\u041A\u0423 \u0412\u0415\u0427\u0406\u0420\u041A\u0418 \u041F\u041E\u0422\u0420\u0406\u0411\u041D\u041E \u041C\u0406\u041D\u0406\u041C\u0423\u041C 5 \u0423\u0427\u0410\u0421\u041D\u0418\u041A\u0406\u0412");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.qr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".rqcode__title[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding-top: 77px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  letter-spacing: -2.5px;\n  color: #fff;\n}\n.rqcode__title[_ngcontent-%COMP%]   .title__first[_ngcontent-%COMP%] {\n  font-size: 45px;\n  background-color: #004a99;\n  padding: 0 18px;\n}\n.rqcode__title[_ngcontent-%COMP%]   .title__second[_ngcontent-%COMP%] {\n  font-size: 42px;\n  padding-left: 40px;\n  text-decoration: underline;\n}\n.rqcode__content-wrap[_ngcontent-%COMP%] {\n  width: 390px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.rqcode__content[_ngcontent-%COMP%]   .content__block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.rqcode__content[_ngcontent-%COMP%]   .content__qrtext[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 33px;\n  letter-spacing: -2.5px;\n  color: #55f91b;\n}\n.rqcode__content[_ngcontent-%COMP%]   .content__qr[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.rqcode__content[_ngcontent-%COMP%]   .content__qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.rqcode__content[_ngcontent-%COMP%]   .content__text[_ngcontent-%COMP%] {\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 12px;\n  letter-spacing: -0.15px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9xcmNvZGUvRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZ3RhYmxlL3NyY1xcYXBwXFxtYWluXFxxcmNvZGVcXHFyY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9xcmNvZGUvcXJjb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNISjtBRE9NO0VBQ0UsZUFBQTtFQUNBLHlCQWZLO0VBZ0JMLGVBQUE7QUNMUjtBRFFNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNOUjtBRFdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNUSjtBRGNNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGVNO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQTlDTTtBQ2lDZDtBRGdCTTtFQUNFLFlBQUE7QUNkUjtBRGdCUTtFQUNFLFdBQUE7QUNkVjtBRGtCTTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ2hCUiIsImZpbGUiOiJzcmMvYXBwL21haW4vcXJjb2RlL3FyY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4ucnFjb2RlIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDc3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0yLjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC50aXRsZSB7XHJcblxyXG4gICAgICAmX19maXJzdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMThweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fc2Vjb25kIHtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50LXdyYXAge1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgJl9fYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfX3FydGV4dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNdXNlb1NhbnNDeXJsNzAwJztcclxuICAgICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0yLjVweDtcclxuICAgICAgICBjb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19xciB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX190ZXh0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucnFjb2RlX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmctdG9wOiA3N3B4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0yLjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucnFjb2RlX190aXRsZSAudGl0bGVfX2ZpcnN0IHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0YTk5O1xuICBwYWRkaW5nOiAwIDE4cHg7XG59XG4ucnFjb2RlX190aXRsZSAudGl0bGVfX3NlY29uZCB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5ycWNvZGVfX2NvbnRlbnQtd3JhcCB7XG4gIHdpZHRoOiAzOTBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5ycWNvZGVfX2NvbnRlbnQgLmNvbnRlbnRfX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJxY29kZV9fY29udGVudCAuY29udGVudF9fcXJ0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXNpemU6IDMzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XG4gIGNvbG9yOiAjNTVmOTFiO1xufVxuLnJxY29kZV9fY29udGVudCAuY29udGVudF9fcXIge1xuICB3aWR0aDogMTIwcHg7XG59XG4ucnFjb2RlX19jb250ZW50IC5jb250ZW50X19xciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ycWNvZGVfX2NvbnRlbnQgLmNvbnRlbnRfX3RleHQge1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cHg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QrcodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qrcode',
                templateUrl: './qrcode.component.html',
                styleUrls: ['./qrcode.component.scss']
            }]
    }], function () { return [{ type: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] }, { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\project\D2\Tuborg\code\tuborgtable\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map