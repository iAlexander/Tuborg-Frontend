function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _promokod_rules_rules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./promokod/rules/rules.component */
    "./src/app/promokod/rules/rules.component.ts");
    /* harmony import */


    var _promokod_promokod_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./promokod/promokod.component */
    "./src/app/promokod/promokod.component.ts");
    /* harmony import */


    var _fullprice_fullprice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fullprice/fullprice.component */
    "./src/app/fullprice/fullprice.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");

    var routes = [{
      path: '',
      component: _promokod_promokod_component__WEBPACK_IMPORTED_MODULE_3__["PromokodComponent"]
    }, {
      path: 'rules',
      component: _promokod_rules_rules_component__WEBPACK_IMPORTED_MODULE_2__["RulesComponent"]
    }, {
      path: 'fullprice',
      component: _fullprice_fullprice_component__WEBPACK_IMPORTED_MODULE_4__["FullpriceComponent"]
    }, {
      path: 'registration',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'tuborg';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _promokod_promokod_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./promokod/promokod.component */
    "./src/app/promokod/promokod.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./congratulation/congratulation.component */
    "./src/app/congratulation/congratulation.component.ts");
    /* harmony import */


    var _fullprice_fullprice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./fullprice/fullprice.component */
    "./src/app/fullprice/fullprice.component.ts");
    /* harmony import */


    var _promokod_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./promokod/rules/rules.component */
    "./src/app/promokod/rules/rules.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _promokod_promokod_component__WEBPACK_IMPORTED_MODULE_7__["PromokodComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_9__["CongratulationComponent"], _fullprice_fullprice_component__WEBPACK_IMPORTED_MODULE_10__["FullpriceComponent"], _promokod_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__["RulesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _promokod_promokod_component__WEBPACK_IMPORTED_MODULE_7__["PromokodComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_9__["CongratulationComponent"], _fullprice_fullprice_component__WEBPACK_IMPORTED_MODULE_10__["FullpriceComponent"], _promokod_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__["RulesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/congratulation/congratulation.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/congratulation/congratulation.component.ts ***!
    \************************************************************/

  /*! exports provided: CongratulationComponent */

  /***/
  function srcAppCongratulationCongratulationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CongratulationComponent", function () {
      return CongratulationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CongratulationComponent = /*#__PURE__*/function () {
      function CongratulationComponent() {
        _classCallCheck(this, CongratulationComponent);

        this.logo = './assets/img/logo.png';
        this.confetti = '';
        this.machine = '';
        this.x = window.matchMedia("(max-width: 835px)");
        this.y = window.matchMedia("(max-width: 414px)");
      }

      _createClass(CongratulationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myFunctionX(this.x);
          this.x.addListener(this.myFunctionX);
          this.myFunctionY(this.y);
          this.y.addListener(this.myFunctionY);
        }
      }, {
        key: "myFunctionX",
        value: function myFunctionX(x) {
          if (x.matches) {
            this.confetti = './assets/img/registration/confetti-2x.png';
            this.machine = './assets/img/registration/machine.png';
          } else {
            this.confetti = './assets/img/registration/confetti.png';
          }
        }
      }, {
        key: "myFunctionY",
        value: function myFunctionY(y) {
          if (y.matches) {
            this.confetti = './assets/img/registration/confetti-3x.png';
            this.machine = './assets/img/registration/machine-3x.png';
          }
        }
      }]);

      return CongratulationComponent;
    }();

    CongratulationComponent.ɵfac = function CongratulationComponent_Factory(t) {
      return new (t || CongratulationComponent)();
    };

    CongratulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CongratulationComponent,
      selectors: [["app-congratulation"]],
      decls: 19,
      vars: 3,
      consts: [[1, "congratulation"], [1, "congratulation__bg"], [1, "congratulation__bg-blue"], [1, "congratulation__text-wrap"], ["alt", "", 1, "congratulation__img", 3, "src"], [1, "congratulation__text"], [1, "congratulation__textBot"], ["href", "https://t.me/Home_Party_Bot", "target", "_blank"], [1, "congratulation__machine"], ["alt", "machine", 3, "src"], ["alt", "", 1, "congratulation__confetti", 3, "src"]],
      template: function CongratulationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0406\u0422\u0410\u042E!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME PARTY MACHINE \u0412\u0416\u0415 \u0412 \u0414\u041E\u0420\u041E\u0417\u0406. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0427\u0415\u041A\u0410\u0419\u0422\u0415 \u041D\u0410 \u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u042E \u0412\u0406\u0414 \u041D\u0410\u0428\u041E\u0413\u041E \u041C\u0415\u041D\u0415\u0414\u0416\u0415\u0420\u0410. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0406 \u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F, \u043D\u0435 \u0437\u0430\u0433\u0443\u0431\u0456\u0442\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "@Home_Party_Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", \u0432\u0456\u043D \u0432\u0430\u043C \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0432\u0435\u0447\u0456\u0440\u043A\u0438. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.machine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.confetti, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".congratulation[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.congratulation__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1;\n}\n.congratulation__bg-blue[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  height: 80%;\n  width: 90%;\n  background-color: #004a99;\n  color: #fff;\n  z-index: 2;\n}\n.congratulation__text-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  height: 80%;\n  width: 90%;\n  z-index: 4;\n}\n.congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  margin-bottom: 20px;\n  margin-left: 122px;\n  font-family: \"MuseoSansCyrl700\";\n  letter-spacing: -2.5px;\n  font-size: 164.72px;\n  line-height: 100%;\n  color: #fff;\n}\n.congratulation__text[_ngcontent-%COMP%] {\n  margin-left: 130px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 76px;\n  line-height: 120%;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n  color: #fff;\n}\n.congratulation__textBot[_ngcontent-%COMP%] {\n  margin-left: 132px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 51.8px;\n  line-height: 100%;\n  color: #55f91b;\n}\n.congratulation__textBot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #55f91b;\n}\n.congratulation__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5%;\n  right: 0;\n}\n.congratulation__confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  opacity: 0.8;\n}\n.congratulation__machine[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (min-width: 1681px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 19vh;\n    font-size: 8vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 4vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-left: 7.26vw;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n}\n@media only screen and (max-width: 1536px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 19vh;\n    font-size: 9vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-left: 7.26vw;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    width: 40vw;\n  }\n}\n@media only screen and (max-width: 835px) and (orientation: portrait) {\n  .congratulation__text-wrap[_ngcontent-%COMP%] {\n    top: 1%;\n    height: 85%;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-left: 12vw;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    margin-left: 12vw;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 12vw;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 25vw;\n  }\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 55vh;\n    position: absolute;\n    width: 100%;\n  }\n  .congratulation__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-left: 10vw;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    margin-left: 10.3vw;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 10.3vw;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .congratulation__bg-blue[_ngcontent-%COMP%] {\n    top: 1%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%] {\n    top: 2%;\n    height: 95%;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 190px;\n    font-size: 57.06px;\n    margin-bottom: 10px;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    top: 3%;\n    right: 25vw;\n  }\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 65vh;\n    text-align: center;\n    width: 100%;\n  }\n  .congratulation__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 90%;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 19vh;\n  }\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 25vw;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 20vw;\n    width: 50vw;\n  }\n}\n@media only screen and (max-width: 414px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 31.9px;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 16.54px;\n  }\n}\n@media only screen and (max-width: 384px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 31.9px;\n    margin-top: 100px;\n    margin-left: 10px;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 16.54px;\n    line-height: 120%;\n    margin-left: 10px;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 15%;\n    width: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZ3JhdHVsYXRpb24vRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZy9zcmNcXGFwcFxcY29uZ3JhdHVsYXRpb25cXGNvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25ncmF0dWxhdGlvbi9jb25ncmF0dWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FESUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDRko7QURNRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQXRCUztFQXVCVCxXQUFBO0VBQ0EsVUFBQTtBQ0pKO0FET0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDTEo7QURPSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0xOO0FEU0U7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNQSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQTdEVTtBQ3FEZDtBRFVJO0VBQ0UsY0FoRVE7QUN3RGQ7QURZRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNWSjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7QURjRTtFQUNFLGFBQUE7QUNaSjtBRGdCQTtFQUdNO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQ2ZOO0VEbUJFO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUNqQko7RURvQkU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7RUNsQko7RURxQkU7SUFDRSxXQUFBO0VDbkJKO0FBQ0Y7QUR1QkE7RUFHTTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUN2Qk47RUQyQkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUN6Qko7RUQ0QkU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7RUMxQko7RUQ2QkU7SUFDRSxXQUFBO0VDM0JKO0FBQ0Y7QUQrQkE7RUFHSTtJQUNFLE9BQUE7SUFDQSxXQUFBO0VDL0JKO0VEaUNJO0lBQ0UsaUJBQUE7RUMvQk47RURtQ0U7SUFDRSxpQkFBQTtFQ2pDSjtFRG9DRTtJQUNFLGlCQUFBO0VDbENKO0VEcUNFO0lBQ0UsV0FBQTtFQ25DSjtFRHNDRTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ3BDSjtFRHNDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFQ3BDTjtBQUNGO0FEeUNBO0VBSU07SUFDRSxpQkFBQTtFQzFDTjtFRDhDRTtJQUNFLG1CQUFBO0VDNUNKO0VEK0NFO0lBQ0UsbUJBQUE7RUM3Q0o7QUFDRjtBRGlEQTtFQUVJO0lBQ0UsT0FBQTtFQ2hESjtBQUNGO0FEb0RBO0VBRUk7SUFDRSxPQUFBO0lBQ0EsV0FBQTtFQ25ESjtFRHFESTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ25ETjtFRHVERTtJQUNFLE9BQUE7SUFDQSxXQUFBO0VDckRKO0VEd0RFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDdERKO0VEd0RJO0lBQ0UsV0FBQTtFQ3RETjtBQUNGO0FEMkRBO0VBRUk7SUFDRSxRQUFBO0VDMURKO0VENkRFO0lBQ0UsZ0JBQUE7RUMzREo7RUQ4REU7SUFDRSxhQUFBO0VDNURKO0FBQ0Y7QURnRUE7RUFFSTtJQUNFLGFBQUE7RUMvREo7QUFDRjtBRG1FQTtFQUVJO0lBQ0UsY0FBQTtFQ2xFSjtFRHFFRTtJQUNFLFdBQUE7RUNuRUo7QUFDRjtBRHVFQTtFQUVJO0lBQ0UsYUFBQTtFQ3RFSjtFRHlFRTtJQUNFLFFBQUE7RUN2RUo7QUFDRjtBRDJFQTtFQUVJO0lBQ0UscUJBQUE7RUMxRUo7RUQ2RUU7SUFDRSxnQkFBQTtFQzNFSjtFRDhFRTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VDNUVKO0FBQ0Y7QURnRkE7RUFFSTtJQUNFLGlCQUFBO0VDL0VKO0VEa0ZFO0lBQ0Usa0JBQUE7RUNoRko7QUFDRjtBRG9GQTtFQUlNO0lBQ0UsaUJBQUE7RUNyRk47RUR5RkU7SUFDRSxpQkFBQTtFQ3ZGSjtFRDBGRTtJQUNFLGlCQUFBO0VDeEZKO0FBQ0Y7QUQ0RkE7RUFFSTtJQUNFLGdCQUFBO0VDM0ZKO0FBQ0Y7QUQrRkE7RUFJTTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ2hHTjtFRG9HRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ2xHSjtFRHFHRTtJQUNFLGlCQUFBO0VDbkdKO0VEc0dFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUNwR0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmdyYXR1bGF0aW9uL2NvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcbiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuXHJcbi5jb25ncmF0dWxhdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICB9XHJcblxyXG4gICZfX2JnLWJsdWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0LXdyYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgei1pbmRleDogNDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTIycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW9TYW5zQ3lybDcwMCc7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTY0LjcycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICBmb250LXNpemU6IDc2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0Qm90IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xyXG4gICAgZm9udC1zaXplOiA1MS44cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJl9fY29uZmV0dGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgJl9fbWFjaGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5dmg7XHJcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS45dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNy4yNnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5dmg7XHJcbiAgICAgICAgZm9udC1zaXplOiA5dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNy4yNnZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0Qm90IHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjI2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nIHtcclxuICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgdG9wOiAxJTtcclxuICAgICAgaGVpZ2h0OiA4NSU7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEydnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEydnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAyNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogNTV2aDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG5cclxuICAgICZfX3RleHQtd3JhcCB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAuM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRCb3Qge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAuM3Z3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX19iZy1ibHVlIHtcclxuICAgICAgdG9wOiAxJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgdG9wOiAyJTtcclxuICAgICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTkwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1Ny4wNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19pbWcge1xyXG4gICAgICB0b3A6IDMlO1xyXG4gICAgICByaWdodDogMjV2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQtd3JhcCBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE5dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nIHtcclxuICAgICAgcmlnaHQ6IDI1dnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQtd3JhcCBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE3dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nIHtcclxuICAgICAgcmlnaHQ6IDIwdnc7XHJcbiAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX190ZXh0LXdyYXAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDMxLjlweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxNi41NHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRCb3Qge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuXHJcbiAgICAmX190ZXh0LXdyYXAge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMS45cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxNi41NHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb25ncmF0dWxhdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbmdyYXR1bGF0aW9uX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbmdyYXR1bGF0aW9uX19iZy1ibHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRhOTk7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAyO1xufVxuLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDUlO1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDkwJTtcbiAgei1pbmRleDogNDtcbn1cbi5jb25ncmF0dWxhdGlvbl9fdGV4dC13cmFwIGgxIHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBsZXR0ZXItc3BhY2luZzogLTIuNXB4O1xuICBmb250LXNpemU6IDE2NC43MnB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDc2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb25ncmF0dWxhdGlvbl9fdGV4dEJvdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMzJweDtcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogNTEuOHB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM1NWY5MWI7XG59XG4uY29uZ3JhdHVsYXRpb25fX3RleHRCb3QgYSB7XG4gIGNvbG9yOiAjNTVmOTFiO1xufVxuLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbmdyYXR1bGF0aW9uX19jb25mZXR0aSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNvbmdyYXR1bGF0aW9uX19tYWNoaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi10b3A6IDE5dmg7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiA3LjI2dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS45dmg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0Qm90IHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBtYXJnaW4tbGVmdDogNy4yNnZ3O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICB3aWR0aDogMjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi10b3A6IDE5dmg7XG4gICAgZm9udC1zaXplOiA5dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHRCb3Qge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIG1hcmdpbi1sZWZ0OiA3LjI2dnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHdpZHRoOiA0MHZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCB7XG4gICAgdG9wOiAxJTtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEydnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTJ2dztcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHRCb3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnZ3O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICByaWdodDogMjV2dztcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fbWFjaGluZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dC13cmFwIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMC4zdnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0Qm90IHtcbiAgICBtYXJnaW4tbGVmdDogMTAuM3Z3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fYmctYmx1ZSB7XG4gICAgdG9wOiAxJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCB7XG4gICAgdG9wOiAyJTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMTkwcHg7XG4gICAgZm9udC1zaXplOiA1Ny4wNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHRvcDogMyU7XG4gICAgcmlnaHQ6IDI1dnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19tYWNoaW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUgaW1nIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX2ltZyB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi10b3A6IDE5dmg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19tYWNoaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fbWFjaGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICByaWdodDogMjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fbWFjaGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dC13cmFwIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAxN3ZoO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICByaWdodDogMjB2dztcbiAgICB3aWR0aDogNTB2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCBoMSB7XG4gICAgZm9udC1zaXplOiAzMS45cHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE2LjU0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0Qm90IHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHRCb3Qge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzEuOXB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNi41NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dEJvdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHJpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CongratulationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-congratulation',
          templateUrl: './congratulation.component.html',
          styleUrls: ['./congratulation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.ts":
  /*!*************************!*\
    !*** ./src/app/data.ts ***!
    \*************************/

  /*! exports provided: DATA */

  /***/
  function srcAppDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DATA", function () {
      return DATA;
    });

    var DATA = [{
      name: "алея Героїв Небесної сотні",
      number: ["2", "2А", "4А"]
    }, {
      name: "бульв. Бикова Леоніда",
      number: ["4", "4А", "6", "6/1", "8", "10", "12"]
    }, {
      name: "бульв. Вернадського Академіка",
      number: ["4", "5/19", "10", "12", " 4", "14/11", "14А", "14Б", "16", "16А", "16Б", "16В", "20/2А", " 73А", "75", "75А", "79", "79А", "79Б", "81", "83", "85", "85Б", "87", "87А", " 69", "69А", "71", "71А", "73", " 63А", " 24", "32", "34", "34А", "34Б", "34В", "36", "36А", "36Б", "36В", "38", "38А", "42", " 7/18", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "51", "57", "59", "61", "61А", "63", "65", "67", "67Б"]
    }, {
      name: "бульв. Верховної Ради",
      number: ["22", "22А", "22Б", "24", "24А", "24Б", "26", "26А", "26Б", "26В", "27", "27Б", "28", " 23", "23А", "23Б", "25", "25А", "27", "27А", "29", "29А", "31", "31А", "33/1", " 36А", " 34", "36", "36/1", " 1А", "3", "3А", "5", "7", "7А", " 7", "8/20", "10", "10А", "12", "12А", "12Б", "14", "14А", "14Б", "16", "16А", "16Б", "16В", "18", "18А", "18Б", "20", "20А", " 11/22", "11А", "13", "15", "15А", "17", "17А", "19", "19А", "19Б", "21", "21А", "21Б", "21В"]
    }, {
      name: "бульв. Вигурівський",
      number: ["3", "4", "5", "6", "6/1", "6/2", "6А", "6Б"]
    }, {
      name: "бульв. Висоцького Володимира",
      number: ["3", "5", "7", "9", "11", " 4", "6", "6/1", "6А", "6Б", "8", "8/1", "8А"]
    }, {
      name: "бульв. Гавела Вацлава",
      number: ["10", "14", "55", " 37", "39", "41", "43", "43А", "45", "47/15", " 18", "18А", " 18", "49", "51", "53", "57/38", " 31", "35/2", " 1/28", "2", "3", "5А", "5Б", "5В", "5Г", "7", "7А", "7Б", "7В", "9", " 9Б", "11", "13", "15", "15А", "17", " 19", "19А", "21", "21А", "21Б", "21В", "23", "23В", "25", "27", "27А", "29", " 4", "4Г", "6", "6/7-А", "6В", "8", "8А", "16", "16А", "16Б", " 83В", "87", "87А", "87В", " 25/89", "83А", "91А", " 83Г", " 30/1", "32", "34", "34А", "34Б", "34В", "34Г", "36", "36Б", "36В", "38", "38В", "40", "40А", "40Б", "42", "44", "46", " 28", "67", "69", "71", "73/22", "81", "85", " 24", "26", "83", "83Б", "83Д", " 48/24", "50", "52", "54/26", " 75", "75А", "77", "79", "79А", "79Б", "79В", "79Г", "79Д"]
    }, {
      name: "бульв. Гашека Ярослава",
      number: ["17/1", "17/2", " 13", "15", "16", "17", "18", " 3", "5", " 4", "6", "6А", "7А", "8", "8А", " 7", " 9", "1"]
    }, {
      name: "бульв. Дарницький",
      number: ["5", "8", "9", "10", "10А", "11", "12", "13", "15", "17", "19", "21", "23", "25", "27/16", " 1", "1А", "3", "3А", "7", "7А", " 4", "4А"]
    }, {
      name: "бульв. Дружби Народів",
      number: ["33А", " 35", "38", "38Б", "40А", " 17А", "19", "19А", "21", " 5", "7", "7А", "9", "11", "13", " 17 мая", " 23", "25", "25А", "27", "29А", " 6", "8", "10", "10А", "12", "12Б", "14", "14А", "26/1", "28", "28А", " 16", "16/1", "18/7", "20", "20А", "22", "22А", "24/2", " 4/6", "6А", "6Б", "8А", "14-16", "30/1", "30А", "32", "32А", " 3", "3А", "3Б"]
    }, {
      name: "бульв. Кольцова",
      number: ["13", " 14Д", "14Е", "14Ж", "14з", "14К", "14Л", "14М", " 1", "7", "7А", "7Б", "9", " 18", "18А", "20Б", "22", "22А", "24", "24А", "24Б", " 5Б", "5В", "11", "11А", " 17А", "17Б", "17В", "17Г", " 12", " 13", "13А", "15", "15А", "15В", "20", "20А", " 3", "3А", "3Б", "5", "5А", " 17", "19"]
    }, {
      name: "бульв. Лесі Українки",
      number: ["2", "4", "6", " 25", "29", " 34А", "36/10", "36Б", "36В", " 20/22", "20Б", "24А", "24Б", "24В", "26Г", " 3", "5", "5А", "7", "7Б", "7В", "7Г", "9", "9А", "9В", "11", "11А", "13", " 8", "10", "10А", "12", "14", "14А", "14Б", "16", "16А", "16Б", "18", "18А", "20", " 24", "26", "28", "28А", " 26", "28В", "30", "30А", "30Б", "30В", "34", " 15", "15А", "17", "19", "21", "21А", "21Б", "21В", "23", "23А", " 43888"]
    }, {
      name: "бульв. Перова",
      number: ["16", "16А", "16Б", "16В", "16Г", "18", "18А", "18Б", "20", "20Б", "22", " 1", "1А", "3", "3А", "5", "5А", "7", "7А", "9", "9А", "9Б", "9В", "11", "11А", "11Б", "11В", "13", "13/2", "13А", "15", "15А", "15Б", "15В", "30", "32", "34/2", " 1Б", " 24", "24А", "24Б", "26", "26Б", "28", "28А", "30А", "30Б", " 8", "8А", "10", "10А", "12/92", "14", "14А", " 2", "2/1", "4", "4А", "6", " 36", "38", "38/1", "40", "40А", "40Б", "42", "42А", "42Б", "44", "46/2", " 48", "48А", "48Б", "48Н", "50", "50А", "50Б", "52", "52/5", "52А", "54", "54А", "56", " 21", "23Б", "27А", " 19", "19А", "23", "23А", "25", "25А", "25Б", "25В", "27"]
    }, {
      name: "бульв. Праці",
      number: ["01 января", " 2", "2/27", "4", "4А", "6/14", "8", "10", " 5", "7", " 1", "3"]
    }, {
      name: "бульв. Приймаченко Марії",
      number: ["1", "1/27", "2", "3", "3А", "4", "5", "7", "9", " 6", "6А", "8", "8А", "8Б"]
    }, {
      name: "бульв. Роллана Ромена",
      number: ["14", "18", " 5Б", "5В", " 4", "5А", "5/8", "6/10", " 2", "4А", "4Б", "4В", "4Г", "12", " 3", "3А", " 13", "13А", " 9", "9А", "11", "11А", " 7", "7А", "7Б", " 13Б", "13В", "13Г"]
    }, {
      name: "бульв. Русанівський",
      number: ["1", "3", "5", "7", "9", "9/1", "11", "11/11", " 1/10", "2", "2/8", "4", "6", "8", "10", "12"]
    }, {
      name: "бульв. Чоколівський",
      number: ["21", "23", "25", "27", "29", "31", "33", "35", "37", "39", " 28", "30", "32", "34", " 40", "42А", " 27 мая", " 1", "3", "9/13", "11", "15", " 13", "19", "19А", " 16", "18", "20", "22", " 4", "6", "8", "10", "12", "14"]
    }, {
      name: "бульв. Шамо Ігоря",
      number: ["12", "14", "14/1", "16", "18", "18/1", "20", "20/1", " 13", "13А", "15", "17", "17/1", "17А", " 19", "19/1", "  18 февряля", " 1/5", "2/7", "3", "4", "5", "6", "7", "9", "10", "10/2", "10А", "18/2", " 09 января"]
    }, {
      name: "бульв. Шевченка Тараса",
      number: ["9/28", "11", "11А", "13", " 1", "1Б", "2", "3", "4", "4Б", "5/7", "6", "8/26", "10", "12", " 19", "23", "25", "27", "27А", "27Б", "31", "33", "33Б", "35", "36", "36А", "36Б", "37/122", "38", "44", "46", "46А", "46Б", "48", "48А", "48Б", "52", "54", "56", "56А", "58", " 17", "20", "22/24", "26", "32", "34", " 13", "16", "18", "50Г", "60"]
    }, {
      name: "вул. 9-го Травня",
      number: ["49", " 2", "3", "4", "5", "5А", "6", "7", "8", "9", "10", "11", "12", "14", "16А", "18", "19А", "20", "21", "23", "25", "27"]
    }, {
      name: "вул. Абая Кунанбаєва",
      number: ["7"]
    }, {
      name: "вул. Августина Волошина",
      number: ["1/1", "1/2", "2", "2А", "3/1", "3/2"]
    }, {
      name: "вул. Авдєєнка генерала",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "вул. Автозаводська",
      number: ["2", "2А", "18", "18А", "18К", "24", "24/2", "46", " 11", "13А", "15А", "17", "17А", "17А/1", "19", "21А", " 25", "25А", "25Б", "25В", "27", "27А", "27Б", "27В", "27/1", "29", "29А", " 5", "5А", "7", "7А", "7Б", "9А", " 25А", "25В", "27А", "27Б", "27В", "29", "41", "43", "54/19", " 67", "71", "73", "73/1", "77", " 78", "97/5", " 61", "63", "68", "72А", "76", "76А", "79", "81", "83", "87", "87А", "89", " 89А", "93", " 99/4"]
    }, {
      name: "вул. Автопаркова",
      number: ["5", "7", "7А", "7А/1", "7корп1", "7корп2", "7корп3"]
    }, {
      name: "вул. Автотранспортна",
      number: ["2"]
    }, {
      name: "вул. Агітаторська",
      number: ["2", "4"]
    }, {
      name: "вул. Агрегатна",
      number: ["2", "2/1", "9"]
    }, {
      name: "вул. Аеродромна",
      number: ["10", "11", "12", "12А", "13", "14"]
    }, {
      name: "вул. Азербайджанська",
      number: ["2", "4", "6", "16/4", " 8А", "8Б", "16/1", "16/2", "16/3", "28/2", "28А", "28Б", "30/1", "30А", "32", " 25"]
    }, {
      name: "вул. Азовська",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "18", "20", "22"]
    }, {
      name: "вул. Академика Єфремова",
      number: ["12", "14", " 4", "18", "20", " 3", "7", "7А", "9", "9А", "11", "13", "15", "17", " 19", "19А", "21", "23", "25", " 27", "29/2"]
    }, {
      name: "вул. Академіка Оппокова",
      number: ["1", "2"]
    }, {
      name: "вул. Академіка Ромоданова",
      number: ["4", "6", "6/29", "10", "12/2"]
    }, {
      name: "вул. Академіка Ромоданова",
      number: ["4", "6", "6/29", "10", "12/2", " 9", "11/15", "14", "17", "17А", "19", "19А"]
    }, {
      name: "вул. Алексухіна Василя",
      number: ["1/18", "3/1", "3А/1", "4/1", "4/2", "5", "5А", "6", "7А", "7/1", "8/1", "9/1", "10/1", "10/2", "11/1", "12/1", "13/1", "13/2", "14/17", "15", "15/1", "16", "16Г", "17А", "18", "19", "19/1", "20/1", "22/1", "23", "24", "25/1", "27/21", "29/24", "31/1", "33/1", "35", "35А", "37/1", "41/1", "41/2", "43/30", "45", "45/1", "47/1", "49/1", "51/1", "51/2", "51/33"]
    }, {
      name: "вул. Алмазова генерала",
      number: ["18 сентября"]
    }, {
      name: "вул. Алматинська",
      number: ["2", "2Б", "4", "4А", "6", "7", "7А", "9", "11", "13", "13А", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", " 2/1", "8", " 39А", "39Б", "39В", "39Г", "39Д", "39Е", "41А", "41Б", " 68А", "99/2", "101", "107/2", "109Б", " 89", "101А", "101Б", " 12", "12А", "14", "14А", "18", "20", "22", "24", "26", "26А", "28", "30", "32", "34", "36", "36А", "40", "42", "43/57", "44", "48", "50", "52", "52А", "54", "56", " 68", "74", "109А", "109В", "111", "111А", "113", " 35А", "37Б", "39/1", "39/2", "39з", "55", "55А", "57", "59/1", "59/2", "61", "61/2", "61А", "63", "64А", "65", "66", "67/2", "67А", "69/1", "69/2", "69/3", "71", "71/2", "73", "75", "77", "77/2", "79/2", "79А", "81", "83", "85", "87/1", "89", "89А", "89Б", "91", "93", "97/1", " 60", "72", "103/1", "105/2"]
    }, {
      name: "вул. Аляб'єва",
      number: ["3"]
    }, {
      name: "вул. Амосова Миколи",
      number: ["6", "8", "10", " 5", "9", "12", " 7", "14", " 2", "4", " 11"]
    }, {
      name: "вул. Амурська",
      number: ["2", "3", "4", "4/1", "4/2", "4/3", "6", "7", "8", "8/2", "8/3"]
    }, {
      name: "вул. Андріївська",
      number: ["1", "1/1", "1/7", "2/12", "3", "4", "7", "8/12", "9", "11", "15", "19"]
    }, {
      name: "вул. Андрющенка Григорія",
      number: ["4", "4А", "4Б", "4Б/14", "4В", "4Г", "4Д", "6В", "7/19"]
    }, {
      name: "вул. Анни Ярославни",
      number: ["1/54", "3", "4", "5", "6", "7", "8", "8/37", "9", "10", "12", "13", "14/1", "14/2", "15", "16", "17", "18", "19", "20", "21", "23", "24", "25", "26", "27", "28", "30", "34/1", "34/2", "36"]
    }, {
      name: "вул. Антона Цедіка",
      number: ["4", "6", "6А", "7", "8", "8А", "9", "10А", "11", "12", "12А", "14", "14А", "16", "16Б", "18", "20"]
    }, {
      name: "вул. Антонова авіаконструктора",
      number: ["7", " 4", "4/1", "13", "15", "15А", "17", " 8", "10", "12", "14", "16", "18", "20", "35", "37", "39", "41", "43", "45", "47", " 2А", "2/32", "3", "5", "5А", "9", "11", "14", "53"]
    }, {
      name: "вул. Антоновича",
      number: ["1", "2", "3", "3А", "3Б", "4/2", "4/6", "5", "5Б", "7", "7Б", "7В", "8", "8Б", "9", "9Б", "10", "10Б", "11", "12", "12Б", "13", "14", "14Б", "15", "16", "16Б", "16В", "17", "17Б", "18", "18Б", "19А", "19Б", "19/21", "20", "20Б", "20В", "20Г", "22", "23", "23Б", "23В", "24", "24Б", "25", "25В", "26/26", " 33В", "34", "35", "38", "38А", "40", " 27", "28", "29", "32", " 170/1Б", "170/172", " 93", "95", "97", "99", "100", "101", "102", "103", "103А", "104", "106", "108", "110", "112", "114", "116", " 37", "37/13", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "48", "48Б", "50", " 91/14", " 72", "75Б", "84", "88", "90/92", "94/96", " 115", "122", "130", "131", " 51", "52", "54", "56", "56/15", "58", "62", "66", "68", "69", "70", "152", "174", "176", "180", " 123", "125", "125А", "127", "138", "140", "150", "152", "154", "156", "158", "160", "162", "164", "166", " 155", "157", "165", "169", " 172", "172/2"]
    }, {
      name: "вул. Ареф'єва Костянтина",
      number: ["2", "2А", "4", "4А", "4Б", "4В", "5", "5А", "5Б", "5В", "5Г", "7", "7А", "7Б", "8", "8А", "9", "9А", "9Б", "10", "10А", "11", "11А", "11Б", "11В", "11Г", "12", "12А", "12Б", "13", "13А", "14", "15", "16", "16А", "16Б", "18", "18А", "18Б", "19", "19А", "20", "20А", "20Б", "20В", "20Г", "21", "21А", "21Б", "21В", "22", "22А", "23Б", "24", "24А", "24Б", "24В", "25", "25А", " 25Б", "25В", "26", "26А", "26Б", "27", "27А", "27Б", "28", "28А", "28Б", "29", "29А", "30", "30А", "31А", "31Б", "32", "32А", "32Б", "33", "33А", "34", "34А", "34Б", "35", "35А", "36", "37", "37А", "37Б", "38", "38А", "38Г", "38Д", "39", "39А", "40", "40А", "41", "42", "43", "44", "45"]
    }, {
      name: "вул. Армійська",
      number: ["2/18", "3", "4", "5/1", "5/2", "6/1", "6/2", "7", "8", "9", "10/1", "10/2", "11/1", "11/2", "12/1", "12/2", "13/1", "13/2", "14/1", "14/2", "15", "16", "18", "19", "20", "22", "24", "26", "28/1", "28/2", "30"]
    }, {
      name: "вул. Арсенальна",
      number: ["09 ноября", " 18", "2", " 15", "17"]
    }, {
      name: "вул. Архипенка Олександра",
      number: ["1/12", "1/12А", "1/12Б", "1А", "3", "3/1", "3/2", "3А", "3Б", "5", "5/1", "5А", "5А/1", "5Б", "7/5", " 2/12", "2/12В", "4", "4А", "4А/1", "4Б", "6", "6/1", "6/2", "6/3", "6/4", "6А", "6Б", " 8", "8/1", "8/2", "8/3", "8/4", "8А", "8Б", "8В", "8Г", "10", "10А", "10А/1", "10Б", "10В", "10Г", "10Г/1", "12/3", "12/3А"]
    }, {
      name: "вул. Архітектора Кобелева",
      number: ["1/7", "3/8", "4/6", "5", "6", "8"]
    }, {
      name: "вул. Архітекторська",
      number: ["4/2", "5/1", "5/2", "6", "7/1", "7/2", "7/3", "8", "8/1А", "9/1", "9/2", "9/3", "9/6", "10/2", "12/2", "13", "15/1", "17"]
    }, {
      name: "вул. Астраханська",
      number: ["19", "21", "25", " 3", "5"]
    }, {
      name: "вул. Астрономічна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "вул. Ахматової Анни",
      number: ["14А", "14Б", "14Б/1", "14Б/2", "14В", "16А", "16А/1", "16А/2", "16А/3", "16А/5", "16А/7", "16Б", "16Б/1", "16Б/2", "16Б/3", "16В", "16Г", "18", " 31", "31/1", "31/2", "31/3", "31/4", "33", "35", "35А", "35Б", "37", "37/16", " 13", "13/1", "13А", "13Б", "13В", "13Г", "13-Г/1", "13Д", "13Е", "15", "15/1", "15А", "17", "19", "21", "23", "23/1", "23А", "25", " 22", "24", "28", "30", "32/18", "34", " 2/10", "2А", "2Б", "3", "3/1", "3/2", "3/3", "3А", "4", "4В", "5", "5А", "6", "7", "7/15А", "8", " 9/18", "11", "11А", " 44/11", "44А", "44А/1", "46", "46А", "48", "48А", "48/1", "50", " 39А", "39Б", "39Б/1", "41", "43", "45", "47", "49"]
    }, {
      name: "вул. Багговутівська",
      number: ["8/10", "12", "14", "17/21", "23", "26", "28", "29", "30", "32", "34", "36", "38", "40", " 1", "1А", "4", "4А", " 3/15", "9Б"]
    }, {
      name: "вул. Багряна Дуброва",
      number: ["б/н"]
    }, {
      name: "вул. Бажова",
      number: ["10", "12", "13/9", "15/20", "17", " 6", "6А", "7", "7/21", "8", "9", "9А", "9В", "11", "11/8", "11Д", " 1", "2", "3", "4", "5"]
    }, {
      name: "вул. Байкальська",
      number: ["3", "4", "5", "7", "9/1", "9/2", "10", "11", "12", "13", "14/1", "14/2", "16", "18", "20"]
    }, {
      name: "вул. Байкова",
      number: ["2", "4", "6", "16"]
    }, {
      name: "вул. Бакинська",
      number: ["2", "5/2", "7", "7А", "8/1", "9", "10/1-2", "10/9-1", "10/9-2", "11", "12", "13", "15", "17/11", "19/8", "21", "21А", "23", "23А", "23А/2", "24", "25", "26", "27/1", "27/2", "29", "31/1", "33/2", "35", "35А", "37А", "37Б", "37В", "37Г", "41А", " 37", " 26", "28", "30", "30А", "34"]
    }, {
      name: "вул. Бакуніна",
      number: ["3"]
    }, {
      name: "вул. Балакірєва",
      number: ["12", "14", "15", "16", "17", "25"]
    }, {
      name: "вул. Балаклієвська",
      number: ["10", "12", "14", " 2", "4/1", "4/2", "6"]
    }, {
      name: "вул. Бальзака Оноре де",
      number: ["53", "53А", "55", "55/1", "55А", "55Б", " 55В", "55Г", " 57", "57/2", "59", " 79", "81/1", " 90", "90А", "92", "92А", "94", "96", "98/29", " 83/2", "83А", "87", "89", "91/29", "91/29А", "100/31", " 60", "62", "62/2", "62/4", "62/5", "62/7", "64", "64А", "64Б", "66", "66/1", "66/3", "66/4", "66/5", "66/9", "66/21", "66/21А", "66/21В", "66/21Г", "66А", "68", "70", "72/19", " 78/18", "80", "80/1", "82", "84", "84/1", "84/2", "84/3", "84А", " 61", "61А", "61В", "63", "63А", "63Б", "65", "65/1", "65А", " 73", "73А", "73Б", "75", "77", " 38", "40/11", " 42", "42/20", "42А", "44", "46", "46А", "46Б", "48А", "48Б", "50", "52", "52А", "52Б", "54/21", " 2А", "4", "4А", "6", "8", "8А", "8Б", "8В", "8Г", "10", "10А", " 12", "14", "16", "16А", "16Б", "18", "20", "22", "24", "26", "26А", "28", " 1А", "3", "3А", "5", "9", " 52/22", "52/22А", "54", "54/2", "54А", "54А/1", "56", "58"]
    }, {
      name: "вул. Банкова",
      number: ["5/7", "6/8", " 1/10", "2А", "3", " 11", " 2"]
    }, {
      name: "вул. Баренбойма",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "12", "13", "15", "17"]
    }, {
      name: "вул. Барикадна",
      number: ["2", "4", "6", "7", "8", "10", "11", "13", "15", "18", "21"]
    }, {
      name: "вул. Баришівська",
      number: ["1", "3А", "3/1", "3/2", "4", "4А", "6", "7"]
    }, {
      name: "вул. Басейна",
      number: ["12", " 3", "5", "5А", "5Б", "5В", "5Г", "7", "7Б", "7В", "9", "10", "11", "11А", "13", "15", "17", "19", "19А", "21", "21А", "23", " 1", "1/3-2", "2", "3/2", "4", "6"]
    }, {
      name: "вул. Бастіонна",
      number: ["1/36", "3/12", "4", "5А", "5/13", "12", "14", " 7", "10", "16", " 11", "11А", "13", "14А", "15", " 6", "9"]
    }, {
      name: "вул. Батумська",
      number: ["1А/1", "1А/2", "3/1", "3/2", "4", "5", "6/2", "7", "8", "9/1", "9/2", "9А", "9Б", "10", " 6А", "8", "11/14", "12/12", "13", "13/16", "14", "15", "16", "16А", "17/1", "17/2", "18/1", "18/2"]
    }, {
      name: "вул. Батуринська",
      number: ["12", "12/1", "12/2", " 2", "3", "5", "6"]
    }, {
      name: "вул. Баха академіка",
      number: ["12", "18", "30"]
    }, {
      name: "вул. Бахмацька",
      number: ["5", "7", "9", "10", "11", "13", "15", "18", "20", "21", "23", "25", "27", "31"]
    }, {
      name: "вул. Безручка Марка",
      number: ["1/6", "3", "4", "5", "6", "7", "8А", "8/1", "9", "9А", " 14", "15", "16", "16А", "17", "19", "21/2", "23", "23А", "25", " 24", "26", "27", "27/3", " 29", "29А"]
    }, {
      name: "вул. Бердичівська",
      number: ["1"]
    }, {
      name: "вул. Бердянська",
      number: ["1", "2", "3", "4", "4А", "4/36", "5", "6", "6А", "6Б", "7", "8", "9", "9А", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24А", "24В", "25", "26", "27", "27А", "28", "29", "30", "31", "32", "32А", "33", "34", "35", "36"]
    }, {
      name: "вул. Берегова",
      number: ["1", "2", "5", "5Б", "9", "10", "12"]
    }, {
      name: "вул. Бережанська",
      number: ["1", "1А", "4", "5", "6", "6А", "7", "9", " 10", "12", "12А", "12Б", "12В", "14", "14А", "14В", "15", "16", "16А", "16Б", "17", "18", "19", "20", "22", "24"]
    }, {
      name: "вул. Березнева",
      number: ["3", "4", "10", "12", "12А", "14Б", "16", " 5", "7"]
    }, {
      name: "вул. Березнева (Бортничі)",
      number: ["1", "2", "2А", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17А", "18", "19", "19А", "20", "21", "21А", "22", "22А", "23", "24", "24А", "24Б", "24В", "25", "26", "27", "27А", "28", "29", "29А", "30", "30А", "30Б", "30В", "30Г", "30Д", "30Ж", "30К", "32", "32/2", "32А", "34", "36", "38", "40", "40А", "40Д", "42", "42/1", "42Б", "44", " 44А", "44Б", "46", "48", "50", "50А", "52", "54", "56", "56А", "58", "60", "62", "62Б", "64", "66", "68", "70", "72", "90"]
    }, {
      name: "вул. Березняківська",
      number: ["23", "23А", "25", "27", "27Б", "29", "29А", "29Б", "31", "32", "34", "34А", "34Б", "36", "36А", "36Б", "36В", "36Г", "38", "38А", "38Б", "38В", " 19", "21", "21А", " 2", "3", "4", "4А", "5", "5А", "6", "6А", "8", "10", " 7", "7А", "9", "12", "14", "14А", "14Б", " 11", "15", "16", "16А", "16Б", "17", "17А", "18А", "20", "22", "22Б", "24", "24Б", "26", "26А", "26Б", "28", "28Б", "30", "30А", "30Б"]
    }, {
      name: "вул. Березова",
      number: ["39", "41", "43", "45", "47", "49", " 24"]
    }, {
      name: "вул. Беретті Вікентія",
      number: ["12", "14", "14А", "16", "18", " 4", "4Б", "6", "6А", "6Б", "8", "10", " 3", "3А", "3Б", "5", "5А", "5Б", "7", "9"]
    }, {
      name: "вул. Берковецька",
      number: ["2/3", "2/4", "3", "5/1", "5/2", "6", "6А", "6Д", "6Ю/1", "6Ю/2", "10"]
    }, {
      name: "вул. Берлінського Максима",
      number: ["4", "6", "7", "17", "21/5", " 18/7", "20", "20Б", "20В", "31", " 14", "16", "23/8", "23/8А", "25", "25А", "27"]
    }, {
      name: "вул. Бестужева Олександра",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "27", "27А", "29", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "43", "44", "45", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57/16", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", " 22", " 71", "72", "73", "74", "75", "76", "77", "78", "79", "83", "85"]
    }, {
      name: "вул. Бетховена",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
    }, {
      name: "вул. Бикова Леоніда",
      number: ["3", "3/2", "3А", "5", "7", "7А"]
    }, {
      name: "вул. Бігова",
      number: ["1", "2", "7", "10", "12", "19"]
    }, {
      name: "вул. Білаша Олександра",
      number: ["б/н"]
    }, {
      name: "вул. Білгородська",
      number: ["4", "6", "8", "9", "10", "12", "14"]
    }, {
      name: "вул. Білецького академіка",
      number: ["32", "34/2", " 5А", "5Б", "5В", "7", "12Б", "16А", "18", "20", "27", "38", "38А", " 9", "9А", "9Б", "9В", "11"]
    }, {
      name: "вул. Білицька",
      number: ["4", "7А", " 92А", "92Б", "94", "94/2", "98", "100", "100/2", "100А", "102", "102/2", "102А", "104", "104А", "106", "106А", "106Б", "108", "108А", " 15", "15/2", "15/3", "15А", "17", "17/1", "19", "19/2", "21", "21/2", "23", "25", "27", "27/2", "29", "31", "33", "33/2", "35", "37", "37/2", "39/1", "39/2", "41/43", "45", "47", "47А", "47А/1", "49", "51", "53", "53/2", "55", "55/2", "59", "59А", "59Б", "59В", "72", "72А", "72Б", "72В", "72Г", "74", "74/1", "74/2", "74А", "76/1", "76/2", "76А", "76А/1", "76А/2", "78", "80", "82", "82/2", "84А", "84Б", "86", "88", "90", "90/2", "90А", "90Б", " 6Б", "8", "8А", "8Б", "8В", "8Г", "8Ж", "8Е", "10", "10А", "11А", "12", "12/2", "12А", "13А", "14", "18", "18Б", "20", "24", "24/2", "26", "30", "30/2", "30/3", "30/4", "32", "32/2", "34", "36", "36/2", "36А", "38", "38/2", "38А", "38Б", "38/1", "40", "40А", "42", "44/20", "50А", "52", "52/2", "54А", "56", "56А", "58", "58/2", "60", "60/2", "62", "62/2", "64", "64/2", "64А", "66", "66/2", "68", "68/2", "70", "70/2"]
    }, {
      name: "вул. Біличанська",
      number: ["33", " 1", "3", "5", "24А", "35"]
    }, {
      name: "вул. Білогородська",
      number: ["19"]
    }, {
      name: "вул. Білокур Катерини",
      number: ["17 мая", " 1", " 2/8", "4", "6", "8", "10/15"]
    }, {
      name: "вул. Біломорська",
      number: ["1", " 1"]
    }, {
      name: "вул. Білоруська",
      number: ["11А", "11Б", "11В", " 1", "2А", "3", "5", "7", "7/9", "8", "10/18", "24", "26", "28", "28А", "30", "30А", " 11", "13", "15А", "15Б", "17А", "17Б", "32", "34", "36", "36А", "38", "40", "40/15", " 17", "21", "23"]
    }, {
      name: "вул. Біляшівського академіка",
      number: ["10"]
    }, {
      name: "вул. Бірюзова маршала",
      number: ["1", "1А", "2", "3", "4", "4А", "5", "6", "7", "8", "9", "10", "10А", "11", "12", "15", "15А", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24А", "25", "26", "27"]
    }, {
      name: "вул. Блакитного",
      number: ["4", "6", "8", "10", "13"]
    }, {
      name: "вул. Блока Олександра",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"]
    }, {
      name: "вул. Бобринецька",
      number: ["1А", "1Б", "2", "3А", "4", "5А", "6", "8", "10", "11Б", "12", "13А", "13Б", "14", "16", "18", "24", "26", "28А", "30", "30А", "32", "34", "36", "38", "40", "40А", "42", "44", "46", "48", "48А", "50", "52А", "54", "56", "58", "60", "62", "64"]
    }, {
      name: "вул. Богатирська",
      number: ["1А", "1А/1", "1А/2", "1В/1", "1В/2", "2Д/1", "2Д/2", "2Д/3", "3", "3А", "3Б", "3В", "3В/1", "3В/2", "3Г", "3Г/1", "3Д", "3Е", "3Е/1", "3Е/2"]
    }, {
      name: "вул. Богатирська",
      number: ["1А", "1А/1", "1А/2", "1В/1", "1В/2", "2Д/1", "2Д/2", "2Д/3", "3", "3А", "3Б", "3В", "3В/1", "3В/2", "3Г", "3Г/1", "3Д", "3Е", "3Е/1", "3Е/2", " 2", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7", "2А", "2Б", "2Б/1", "2В", "2Г", "2Д", "2Е", "2Е/1", "2Е/2", "4", "4А", "4А/1", "4А/2", "4Б", " 16", "16/20", "18А", "18Б", "18В", "18Г", "18Д", "20", "20А", "22", "22/1", "22/2", "22А", "24", "24А", " 10", "12", "12А", "12Б", "12В", "12Г", "12Г/1", "14", "14А", "14Б", "18", "18Е", " 17", "26А", "30/1", "30/2", "30корп1", "30корп2", "30корп3", "30корп4", "30корп5", "30корп6", "32", "32А", "32А/1", "32/1", "32/2", "32/3", "32/4", "32/5", "32/6", "32/7", "32/8", "32/9", "32/10", "32/11", "32/12", "32/13", "32/14", " 6", "6/1", "6А", "6Б", "6В", "8", "8А"]
    }, {
      name: "вул. Богдана Гаврилишина",
      number: ["4", "6", "11", "11А", "13", "13/1", "13/2", "14", "15", "15/1", "15/2", "16", " 7", " 8", "10", "12/16", " 3", "5", " 18", "24", "27/29"]
    }, {
      name: "вул. Богданівська",
      number: ["1", "2", "3", "3/5", "4", "5А", "7Б", "7Г", "10", " 24"]
    }, {
      name: "вул. Богомольця Академіка",
      number: ["5", "7/14", " 2", "3", "4", "6", "8", "8А", "8Е", "10", " 10"]
    }, {
      name: "вул. Богуна Івана",
      number: ["1", "2", "3", "3А", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15А", "16", "17", "18Б", "20", "22", "24", "26", "28А", "28Б"]
    }, {
      name: "вул. Богунська",
      number: ["11", "13", "16", "20", "21", "22", "24", "25", "27/1", "27/2", "28", "29/16", "30", "32", "34", "38"]
    }, {
      name: "вул. Божків Яр",
      number: ["14", "16"]
    }, {
      name: "вул. Бойка Івана",
      number: ["1", "1А", "2", "2А", "2Б", "2В", "3", "4", "5", "6", "6А", "8", "10"]
    }, {
      name: "вул. Бойова",
      number: ["3", "4", "4/1", "5", "6", "7", "8", "9", "10", "12", "14", "14/2", "16", "16/1", "18", "20", "22", "22А", "24", "24А", "28", "28/1"]
    }, {
      name: "вул. Бойченка Олександра",
      number: ["5", "7", "9", "9А", "11", "13", "15", "17", " 14", "16", "16А", "18", " 2/6", "4", "4А", "6", "8", "10", "12", "12А"]
    }, {
      name: "вул. Бойчука Михайла",
      number: ["34Б", "36", "36А", "38А", "40А", "42", "43", "44", "45", " 10", "10А", "12", "12А", "14", "14В", "16", "18", "18А", "18Б", "20", "22", "26", "28", "28А", "30", "30А", "32", "32А", "34", "34А", " 6", "13Б", "15", "15А", "15Б", "17", "17А", "17Б", "17/10", "19", "21", "23", "25", "25А", "27", "29", "31", "33", "35", "37", "39", "41", " 1/2", "1А", "2/34", "3", "3А", "4", "4А", "4Б", "5", "6А", "7/11", "8/9", "9/12", "11", "11А", "11Б", "13", "13А", "13В", "30"]
    }, {
      name: "вул. Болбочана Петра",
      number: ["1", "2", "4", "4А", "6", "6А", "8А", " 8", " 8"]
    }, {
      name: "вул. Болсуновська",
      number: ["4", "8", "8А", "16", " 6", "31/37", " 2", "13", "13А/1", "13А/2", "14А", "15А/1", "15А/2", "17", "19", "21", "23", "27", "29/1"]
    }, {
      name: "вул. Бондарська",
      number: ["3", "5А", "5Г", "5/7", "7А", "9", "11", "19", "21/1", "21/2"]
    }, {
      name: "вул. Бориславська",
      number: ["1", "2", "3", "4", "4/2", "4А", "5", "6/1", "6/2", "7", "8/1", "8/2", "8А", "9", "10", "11/30", "12/29", "13/27", "14/1", "14/2", "14А", "15/1", "15/2", "16/1", "16/2", "17", "18", "19/1", "19/2", "20/1", "20/2", "21/1", "21/2", "21А", "22", "23/1", "23/2", "24/1", "24А", "25/1", "25А", "26", "27/1", "27/2", "27/3", "28/3", "29", "30/6", " 72/3", " 75А", "75Б", "77", "77/1", "77/2", "79", "79А", "79/51", " 31/1", "31А/2", "32", "33", "34/1", "34/2", "35", "36", "37", "38", "39/1", "39/2", "40/1", "40/2", "41", "42А", "42/1", "43", "43А", "44/1", "44/2", "44/3", "45/7", "49", "51", "53", "54", "55", "56/3", "60", "62", "64/1", "64/2", "65/5", "66/1", "66/2", "67А", "69", "69А/1", "69А/2", "71", "73/1", "73/2", "73А", "75/1", "75/2"]
    }, {
      name: "вул. Борисоглібська",
      number: ["1", "2", "3", "4", "5", "6", "6Б", "7", "8/13", "9", "9/15", "10А", "11", "12", "12А", "13", "14", "14А", "15", "15А", "15Б", "15В", "16А", "16Б", "16В", "17/1", "18"]
    }, {
      name: "вул. Бориспільська",
      number: ["18-26", "18А", "18Б", "18А/1", "20А", "22", "24", "26", "27", "28", "29", "30", "71А", " 12/1", "13", "15", "15/1", "17", "17/1", "17/3", "26", "26/2", "26А", "26Б", "26Б/2", "26Б/3", "26/1Б", "26/1А", "26Б/4", "26В", "26Д", "26Д/3", "26Д/5", "26Ж", "26З", "26К", "28", "28/1", "28А", "28Б", "28В", "28Д/1", "28Д/2", "30", "30/1", "30А", "30А/1", "32А", "32Б", "32В", "34", "36", "38", " 12А/1", "12А/2", "14", "15/2", "16", "16/1", "17В", "17В/1", "17В/3", "17В/4", "17В/5", "17Г", "19", "19/1", "19/2", "19/3", "19/5", "19/6", "19А", "19Б", "19В", "21", "23", "23А", "25", "25А", "27", "27/1", "27/2", "27/3", "27/4", "27/6", "27А", "29", "30А", "31", "33", "34А", "34А/1", "34Б", "35", "37", "39", "39А", "40", "40/2", "41", " 43", "45", "47", "49", "51", "67", "67/1", "181", "181/1", " 14", " 1", "2", "3", "3/1", "3/2", "3/3", "3/3А", "3/4", "3А", "3Б", "4", "4А", "5", "5/1", "7", "7/1", "7/1А", "7/2", "7/3", "7/4", "7/5", "7/6", "7А", "7А/1", "7А/2", "7Б", "7В", "7В/1", "7Г", "7Г/1", " 6", "6/1", "6А", "8", "9", "9/4", "9/8", "9В", "10", "11", "11/3", "11/5", "11А", "12", "12А", "12Б", "12В", "12В/1", "12В/2", "12В/4", "14", "14/1", "14/1А", "24", "24/1", "24А", "24А/1"]
    }, {
      name: "вул. Боричів Тік",
      number: ["8А", " 3", "3А", "5/31", "7", "9", "11", "13", "16", "22", "23", "25", "27", "28", "30", "33", "35", "35А", "35В"]
    }, {
      name: "вул. Борова",
      number: ["2", "3", "3А", "3Б", "4", "5", "6", "7", "7А", "8", "9", "10", "11", "12", "12/1", "13", "14", "15", "16", "17", "18", "19", "20", "20А", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "33", "35", "37", "39", "41А", "41Б", "43А", "43Б", "45", " 1", " 3", "5/1", "5/2", "9", "13", "13/30", "36/26", "38", " 1", "2А", "4", "4А", "8", "10", "10А", "10Б", "12А", "14/38", "18", "18А", "20", "20А", "20А/1", "22", "22А", "22/6", "24", "26", "28", "30А", "30А/2"]
    }, {
      name: "вул. Боровиковського",
      number: ["1А", "2/10", "17", "17А", "19", "28"]
    }, {
      name: "вул. Боровиченко Марії",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"]
    }, {
      name: "вул. Бортницька",
      number: ["17", "39", "41", "42", "43", "45", "46", "47", "48", "48А", "48Б", "48В", "18/12", "50"]
    }, {
      name: "вул. Бортницька (Бортничі)",
      number: ["2", "4", "6", "8", "10", "12"]
    }, {
      name: "вул. Бортничі ПЗЗ",
      number: ["1", "2", "3", "4", "8", "9", "10", "11", "12"]
    }, {
      name: "вул. Борщагівська",
      number: ["125", "129", "139", "143", "143А", "143Б", "145", "146", "148", "150", "152", "152Б", "154", " 14", "16", "46/1", "46/2", " 100", "122", "124", "126", " 10А", "14А", "23А", " 128", " 95", "97А", "97А/1", "97А/2", "97Б", "99", "115", "117/125", "144", " 2", "4", "6", "8", "10", "12", " 171/18", "173/187", "193", " 174/32", " 188", "188/2", "190", "196", "198", "198А", "202", "204", " 210", "212", " 189", "195"]
    }, {
      name: "вул. Боткіна",
      number: ["3", "4"]
    }, {
      name: "вул. Брановицького Ігоря",
      number: ["2", "3", "4", "6", "7", "8", "9/1"]
    }, {
      name: "вул. Братиславська",
      number: ["11", "13", "15", "50", "52", "52А", "54", "54А", " 14", "14А", "14Б", "14Б/1", "14Б/2", "14Б/3", "14Б/4", "14Б/5", "14Б/6", "14Б/7", "14В", "16", "16А", "18", "18А", "18Б", "20", "20А", "22", "24", "24/1", " 2", "2/1", "4", "4А", "4Б", "6", "6А", "8", "8А", "10", "12", "12/1", "12/2", "12/3", "12/4", "12/5", "12А", " 26", "26/1", "28", "30", "32", "32А", "32А/1", "34", "34А", "34Б", "36/2", " 3", "3корп1", "3корп2", "3корп3", "3корп4", "3корп5", "3корп6", "3корп7", "3корп8", "3корп9", "3корп10", "3корп11", "3/1", "3/1А", "5", "5/1", "5А", "7", "7А", "7А/1", "7Б", "9", "9А", "9А/1", "9А/2", "9В", "38", "39А", "40", "40А", "42", "42А", "44", "44/3", "48"]
    }, {
      name: "вул. Братів Зерових",
      number: ["1/3", "2А", "4/6", "14/18", "14А", "14Б", "14В", " 19", "21", "23", " 16", "25"]
    }, {
      name: "вул. Братська",
      number: ["10", "12", "14", " 2", "3", "4", "5", "6", "7", "7/11", "8"]
    }, {
      name: "вул. Брестська",
      number: ["12", "14", "16", "17", "19", "20", "21", "22", "24", "28", "32", "38", "40"]
    }, {
      name: "вул. Бродівська",
      number: ["32", "34", "36", "38", "42", "45", "49", "51А", "72", "81", "81А", "81Б", "81В", " 201Б", "203", "203А", "205", "213", "213А", "219", "219А", "220", "222", "224", "226", " 76А", "76Б", "76В", "80", "80А", "82", "86", "86А", "88", "90", "90А", "93", "93А", "93Б", "94", "95", "95А", "96", "97", "99", "100", "101", "102", "103", "103А", "104", "107", "107В", "108", "109", "110", "110А", "112", "113", "113А", "114", "16", "118", "119", "120", "121", "121А", "121Б", "123", "123А", "124", "125", "125А", "126", "126А", " 127", "128", "128А", "131", "132", "134", "134А", "136", "136А", "139", "140", "141", "142", "142А", "144", "145", "145А", "148", "148А", "149", "150", "150А", "151", "152", "153", "154", "156", "157А", "158", "158Б", "159А", "159Б", "159В", "163", "167", "171", "173", "176", "189", "189А", "191", "193", "195", "197", "199", "201", "201А"]
    }, {
      name: "вул. Броуна",
      number: ["9"]
    }, {
      name: "вул. Брусилівська",
      number: ["1А", "4", "4А", "4Б", "5", "6", "6А", "6Б", "7", "7А", "7Б", "8А", "8Б", "9", "10", "11", "11А", "12", "13", "14", "15"]
    }, {
      name: "вул. Брюлова",
      number: ["1", "1А", "3", "5", "5А", "10", "10А", "12"]
    }, {
      name: "вул. Брюсова",
      number: ["20/16", "22А", "25"]
    }, {
      name: "вул. Бугорна",
      number: ["1/7", "1/7А", "2/9", "3", "4", "4А", "4А/1", "5", "5А", "6", "6А", "6А/1", "7", "8", "9", "10/16", "10/19", "11", "12", "13/17", "13/17А", "14", "14А", "14А/1", "15", "16", "16А", "17", "17А", "17А/1", "18/11", "19", "21/8"]
    }, {
      name: "вул. Бударіна",
      number: ["1", "1Д", "3", "3А", "3Б", "3В", "5", "7", "9", "11"]
    }, {
      name: "вул. Будищанська",
      number: ["4", "4А", "6", "6А", "8", " 3", "3А", "5", "5А", "7", "7А", "7Б", "9/40"]
    }, {
      name: "вул. Будівельників",
      number: ["36", "38", "38/14", "40", "46/17", " 21/9", "21А", "23", "23А", "25", "27", "27А", "28", "29", "29/8", "29А", " 22", "22/11", "24", "24А", "24Д", "26", "26/8", " 7", "9", "11", "12", "12А", "12Б", "13", "14", "15", "16", "17", "18", "18А", "19", " 1", "3", "4", "4А", "5", "6", "6А", "8", "8А", "8Б"]
    }, {
      name: "вул. Будівельників (Троєщина)",
      number: ["10"]
    }, {
      name: "вул. Будіндустрії",
      number: ["2", "4", "4Б", "5", "5А", "5Б", "5В", "6", "7", "7А", "7В", "7Ц", "8", "8А", "8Б", "8Г", "8Е", "9", "9А"]
    }, {
      name: "вул. Буйка професора",
      number: ["5", "24", "26", "26/2", "27", "28", "29", "30", "31", "33", "34А", "34/1", "34/2", "34/3", "34/4", "34/5", "35", "36", "37", "39"]
    }, {
      name: "вул. Букіної Раїси",
      number: ["3", "4", "5/1", "5/2", "5/3", "6", "7", "9", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22/1", "22/2", "23", "24", "26", "27", "29"]
    }, {
      name: "вул. Буковинська",
      number: ["1/10", "3", "3/2", "4", "5", "6", "7", "8", "13", "17", "23", "25", "27", "29", "31"]
    }, {
      name: "вул. Булаховського Академіка",
      number: ["5В", "5Г", "5Д", "28", "28А", "28Б", "28В", "28Г", "30/32", "30А", "30Б", "34А", " 22", "24", " 2", "2/1", "3", "4", "4Б", "5", "5А", "5Б", "8", " 34/36", "38", "38А", "40", "42/43", " 5А", "5Б"]
    }, {
      name: "вул. Булгакова",
      number: ["6", "6А", "8", "8А", "10", "12", " 15", "15А", "16", "17", "18", "20", " 2", "2А", "4", "5", "5А", "5Б", "7", "9"]
    }, {
      name: "вул. Бульварно-Кудрявська",
      number: ["41", "43А", "43Б", "45", "45А", "45Б", "47/14", "51", " 19", "20", "21", "26", "27Г", "29", "29А", "29Б", "31А", "32", "33", "33В", "33Д", "34", "35", "36", "38", " 22", "22А", "24", "27", " 1/37", "2", "3", "4", "5", "5А", "6", "7", "7Б", "7В", "8", "8А", "8Б", "9", "9А", "10", "10Б", "11", "11А", "11Б", "12", "12А", "14", "14Б", "15", "16", "18/2"]
    }, {
      name: "вул. Бурмистенка",
      number: ["9/10", "11", "13", "19", " 4", "6/1", "6/2", "8/2", "8/9", " 10", "12", " 33/1", "33/2", "34", "35Б", "36", "37", "40", "42/1", "42/2", " 25", "25А", "25Б", "25/1", "25/2", "27", "29", "29А", "29Б/1", "29Б/2", "30", "30А", "32", "33", " 1", "3", "5", "7/11"]
    }, {
      name: "вул. Буслівська",
      number: ["1/7", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11А", "12", "13", "14", "15", "20", "21", "25"]
    }, {
      name: "вул. Бутлерова академіка",
      number: ["1", "2", "2А", "4", "10А", "20"]
    }, {
      name: "вул. Бутлєрова академіка",
      number: ["6", "8", "8А"]
    }, {
      name: "вул. Бучанська",
      number: ["20А", "21А", "23", "27", "33/1", "33/2", "34А", "34/1", "34/2", "35", "35А", "36", "36А", "37", "37А", "39", "40", "41/1", "41/2", "42", "46/9", "48/6", "50", "52", "53", "54", "58", "60", " 3", "7", "8", "9", "10", "11", "12", "12А", "13", "14", "15", "15/1", "18", "18/2", "20", "22", "24", "26", "28/25"]
    }, {
      name: "вул. Бучми Амвросія",
      number: ["2", "4", "4А", "6", "6/1", "6А", "6В", "6Г", "8", "10", " 1", "3", "5", "5/1", "5А", "7", "7А"]
    }, {
      name: "вул. Вавілових",
      number: ["8", "9", "10", "10А", "11", "13", "13А", "14/13", "16/12", " 18", "2", " 15", "15А", "17"]
    }, {
      name: "вул. Вакуленчука",
      number: ["36", "38", "39", "39А", "40", "41", "43", "43А", "44", "44А", "45", "46А", "47", "50А"]
    }, {
      name: "вул. Валківська",
      number: ["3/1", "5", "6", "6А", "7А", "8", "8Б", "9/1", "9/2", "9/3", "9/4", "9/5", "10", "11/1", "11/2", "12", "12Б", "14", "14А", "14Б", "16", "17", "17А", "18", "18/1", "20", "22", "24", "24Б", "26/2", "26А/3"]
    }, {
      name: "вул. Василенка Миколи",
      number: ["1", "1А", "2", "2А", "3", " 15", "17", "17А", "19", "21", "23", "23А", "23Б", "25", " 4", "6А", " 10", "12", "12А", "14", "14А", "14Б", "14В", "14Г", " 5", "6Б", "7А", "8", "8А", "8Б", "9", "11", "11А", "13", "13А", " 7"]
    }, {
      name: "вул. Василівська",
      number: ["1/5", "2/7", "3", "3А", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20/2", "22/10"]
    }, {
      name: "вул. Васильківська",
      number: ["24", "24/1", "24/2", "24А", "28", "28/1", "28/2", "28/3", "28/4", "30", "30/1", "32", "32/1", "34", "34/1", "34/2", "34/3", "34/4", "34/6", "34/7", "34/11", "34/13", "34корпА", "34корпБ", "34корпВ", "34корпГ", "34корпК", "34корпМ", "34корпН", "", " 15/19", "21/18", "23", "23А", "23/16", "25", "27", "27корп1", "27корп2", "27корп3", "29/22", " 31/17", "33", "33/1", "33/2", "33/3", "33/4", "35", "35/1", "35/2", "37", "37/1", "37А", "37В", "39", "45", "45/1", "45корп5", " 36", "36/1", "38", "38/1", "40", "40А", "42", "42А", "42/1", "42/2", "42/3", "42/4", " 90", "90А", "90А/1", "94", "94А", "94/19", "96", "98", "98А", "100А", "110", "110/1", " 8", "11/11", "13", "14", "15/14", "16", "17", "18", "18А", "20", " 1", "2", "2А", "3", "4", "4А", "5/7", "6", "8А", "10", "12А", " 5Б", "7/7", " 9/14", "19/15", "21/18", "22", " 47корп1", "47корп2", "47корп3", "49Б", "49корп1", "49корп2", "49корп3", "51", "53корп1", "53корп2", "53корп3", "53корп4", "53А", "55", "57/130"]
    }, {
      name: "вул. Васильченка",
      number: ["3", "4", "6", "10", "12", "12А"]
    }, {
      name: "вул. Василя Барки",
      number: ["5", "8", "12", "14", "16", "17", "18", "20/45", "25", "27", "29/48"]
    }, {
      name: "вул. Василя Вишиваного",
      number: ["1А", "2", "3/1", "3/2", "3А", "4", "6", "6А", "7А", "8", "8А", "9", "9А", "10", "10А", "11", "11А", "12", "13", "13А", "13Б", "14", "14А"]
    }, {
      name: "вул. Василя Тютюнника",
      number: ["47", "48", "49", "53", " 28А", "28Б", " 51/2", "56", "56/2", "58/1", " 32", "37/1", "40", " 5", "5А", "5Б", "5В", "9", "9А", "11/2", "13", "13Б", "16", "22/26"]
    }, {
      name: "вул. Василя Щавинського",
      number: ["1", "2", "3", "3А", "4", "4А", "4Б", "4В", "5", "6", "8", "10", "12", "16", "16А", "16В", "18", "20", "22", "24"]
    }, {
      name: "вул. Васнецова",
      number: ["4"]
    }, {
      name: "вул. Ватутіна (Жуляни)",
      number: ["65", "66", "67", "68", "68А", "69", "70", "70А", "71", "72", "72А", "72Б", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "92А", "93", "94", "94А", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "104А", "105", "107", "109", "109А", "111", "113", "115", "117", "119", " 1", "2", "2А", "3", "4", "5", "6", "6А", "7", "8", "8А", "9", "9А", "10", "11", "12", "13", "13А", "14", "15", "16", "17", "18", "19", "20", "21", "22", "22Б", "23", "24", "25", "26", "27", "29", "30", "30А", "31", "31А", "34"]
    }, {
      name: "вул. Ватутіна Генерала",
      number: ["2А", "2Г", "2Т"]
    }, {
      name: "вул. Ващенка Григорія",
      number: ["1", "3", "5", "7"]
    }, {
      name: "вул. Введенська",
      number: ["1", "3", "4", "5", "6", "6А", "6Б", "7", "9", "15", "23", "25", "26", "29/58", "32", "42"]
    }, {
      name: "вул. Велика Васильківська",
      number: ["5", "9/2", "13/1", "15", "15/2", "17", "19", "21", "23", "23А", "23Б", "25", "27", "29", "29/31", "32А", "33", "39", "41", "43", " 1/2", "9/2", "13", " 2", "2А", "4", "4А", "6", "6А", "8А", "10", "12", "12А", "14", "16", "18", "20", "20А", "20Б", "22", "22А", "24", "26", "26А", "28", "28А", "28Б", "28В", "30", "30А", "30Б", "32", "32А", "32Б", "34", "36", "36А", "38", "38А", "38Б", "40", "40А", "42", "42А", "42Б", "44", "44А", "46", "46А", "48", " 8", "1", " 75", "77", "79", "81", "83", "85/87", "92", "98", "102", " 84", " 67/7", " 89", "91", "93", "95", "97", "101", "103", "104", "106", "108", "110", "112", " 143/2", "145", " 55", "55А", "55Г", "65", "69", "74", " 121", " 129", "131", "131А", "137", "139", " 130", "132", "134", "136", " 45", "47", "49", "51", "52", "53/3", "54", "56", "57/3", "58", "60", "62", "64", "66", "66Б", "68", "70", "72", "76", "78", "80", "82", " 72", "72А", "73", " 111/113", "124", "126", "128", " 114", "116", "118", "120", "122"]
    }, {
      name: "вул. Велика Житомирська",
      number: ["8А", "8Б", "9", "9Б", "10", "12", "13", "14", "15А", "15Б", "16", "17", "18А", "18Б", "19", "19Б", "19В", "20", "20А", "21А", "23", "24", "24Б", "25/2", " 1", "2", "2А", "3", "4", "4А", "4В", "6", "6/11", "6А", "8/14", "11", "15", "16А", "18", "21", "24А", "24В", " 4", " 9", "33", " 26А", "26Б", "26В", "27", "28", "28Б", "29А", "29Б", "30", "30А", "31", "32", "34", "38", "38Б", "40"]
    }, {
      name: "вул. Велика Китаївська",
      number: ["10А", " 85", "87", "110", "112", "114", " 10", "67", "69", "71", " 83", "92/98", "108", " 6", "53", "53А", "55А", "57", "61А", " 48"]
    }, {
      name: "вул. Вербицького Архітектора",
      number: ["2", "4", "4/1", "4А", "4Б", "6", "6А", "8", "8А", "8А/1", "8Б", "10", "10А", "12", " 14", "14А", "14Б", "14В", "14Г", " 7", "7/1", "7Г", "9", "9/1", "9В", "9Г", "9Д", "9Е", "9Ж", "11А", " 3Г", "3Г/1", "3Г/2", "3", "1/2", "3Г/4", "3Г/3", "1/4", "1Р", "1/2Х", "1Р/1", "1Н", "1/7", "1/1", "1Л/2", "1М", "1/5", "1П/8", "1/3", "1", "6Г/1", " 1/15", "1/16", "1/17", "1/18", "1/19", "1/20", "1/21", "1/22", "1/23", "3Б", "5", "7А", "9І", "11/1", "23А", " 11", "11А", "13", "15", "15/1", "15/2", "15/3", "15/4", "15/5", "15/6", "15/7", "15/9", "17Б", "17В", "17Г", "19", "19/1", "19А", "19Б", "19Б/1", "19В", " 16", "18", "18/1", "18/1А", "18/1Б", "18/2", "18/3", "18/4", "18/5", "18/6", "18/7", "18/8", "18/9", "18А", " 22/1", "24", "24А", "24Б", "24Б/1", "24Б/2", "26", "26А", "26Б", "26Б/1", "26В", "28", "28/1", "28А", "28А/1", "28А/2", "28Б", "28В", "28Г", "28Г/1", "30", "30/1", "30/2", "30/3", "30/4", "30/5", "30/6", "30А", "30А/1", "30Б", "32", "32/1", "32/2", "32/3", "32/4", "32/5", "32/6", "32/7", "32/8", "32/9", "32/10", "32А", "32А/1", "32А/2", "32А/3", "32А/4", "34", "34А", "36", "36А", "36А/1", "36Б", "36Б/1"]
    }, {
      name: "вул. Вербова",
      number: ["1", "4А", "6", "8", "8А", "8Б", " 4", "20", "20А", "21", "23", "24", " 1/1", "1/2", "2", "4", "4/1", "4/2", "4А", "4А/1", "4А/2", "4А/3", "4А/4", "6", "6/1", "6/2", "6/3", "6/4", "6/5", "6/6", "8", "8А", "8Б", "8Б/1", "8В", "8Г", "9", "17", "17А", "17Б", "17В", "19", "19А", "20", "20А", "21", "23", "24", "24/1", "26"]
    }, {
      name: "вул. Верболозна",
      number: ["25", "25Г", "27", "27Г", "28", "29", "30", "30Г", "31", "31Г", "32", "33", "33Г", "34", "35", "35Г", "36", "36Г", "37", "38", "40", "42", "42/2", "44", "44Г", "46", "46Г", " 1", "1/2", "2", "2/1", "4", "5/1", "5/2", "6", "6А", "7/1", "7/2", "8", "9", "10", "11", "11/2", "12/1", "12/2", "13/1", "13/2", "14", "15", "16", "17", "18/1", "18/2", "19", "20", "21/1", "21/2", "22/1", "22/2", "23", "24", "26"]
    }, {
      name: "вул. Вереснева",
      number: ["3", "3Б", "5", "5А", "9", " 12", "12А", "14/39", "18/20", "24", "24А", "26/28", " 13/59", "15/60", "17/59А", "17/101", " 4"]
    }, {
      name: "вул. Верещагіна",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"]
    }, {
      name: "вул. Верхній Вал",
      number: ["48/28", "48/28А", "48/28Б", " 70", "72", "72Б", " 28/12", "30", "30А", "32", "34/13", "40", "42А", "42В", "42Г", "42Д", "44", "50", "50Б", "52", "54", "62", "64", "66", "68", " 2А", "4А", "4Б", "4В", "16", "18", "20", "22"]
    }, {
      name: "вул. Верхньогірська",
      number: ["4", "6", "6А", "7", "8", "9/1", "9/2", "9/3", "9/4", "11", "12", "17/1", "17/2", "18", "18/1", "18/2", "19/1", "19/2", "19/3", "19А/1", "19А/2", "20", "21/1", "21/2", "23"]
    }, {
      name: "вул. Верхньоключова",
      number: ["43891"]
    }, {
      name: "вул. Верхня",
      number: ["3", "4", "5", "21"]
    }, {
      name: "вул. Верховинна",
      number: ["14/11", "14А", "14Б", "16", "16А", "16Б", "16В", "20/2А", " 22 декабря", " 6А", "7", "8", "9", "13", "16", "17", "18", " 28", "31", "34", "35", "36А", "37", "38/9", "39", "45", "45А", "45В", "46/12", "47", "49", "51", "51А", "53", "53А", "54", "55", "57", "57/17", "59/18", "60", "61", "66", "68", "69", " 5А", "5Б", " 80", "80А", "80Б", "81", "82", "84", "85", "86", "87", "88", "91", "97", "99/13"]
    }, {
      name: "вул. Верховинця Василя",
      number: ["1", "1А", "3", "5", "7", "10", "12"]
    }, {
      name: "вул. Вершигори Петра",
      number: ["2", " 1", "3", "3А", "3Б", "5", "5А", "7", "7А", "9", "9А", "9Б"]
    }, {
      name: "вул. Весняна",
      number: ["1", "2", "2А", "2Б", "2/1", "3", "4/1", "4/2", "4А", "5/1", "5/2", "6", "7", "7А", "8", "8А", "9", "10", "10/1", "10/2", "11", "11/1", "11/2", "12", "12А", "12/1", "12/2", "13", "13/1", "13/2", "14", "15", "16", "16/1", "16/2", "16А", "17", "17/1", "17/2", "19/1", "19/2", "21", "22", "23", "24", "25", "26", "26А", "27", " 28/1", "28/2", "29/1", "29/2", "29/3", "30", "31А", "32", "32А", "32/1", "32/2", "33", "34", "34А", " 35", "37", "39", "39А", "41", "42", "44", "52", "52А", "54", "54А", "56", "56А", "56/2", "62", "64", "66", "68"]
    }, {
      name: "вул. Виборзька",
      number: ["1", "3", "16/15", "18/20", "21А", "22", "22А", "23", "24", "25", "26", "28", "31/37", "32", "34/36", "38/19", "41", "41/23", " 12", " 24 февраля", " 17/19", " 40/16", "42", "42А", "44", "49", "49А", "51/53", "55/13", "57", "59А", "59/67", "69", "70", "70А", "75/79", "81/83", "84", " 78", "80/17", " 82", "86", "99", " 87", "89А", "91А", "93", "95", " 92", "94", "94А", "96", "103", "104", "111"]
    }, {
      name: "вул. Видубицька",
      number: ["40"]
    }, {
      name: "вул. Винахідників",
      number: ["2А", "3", "3А", "4", "5", "6", "6А", "7", "7А"]
    }, {
      name: "вул. Виноградна",
      number: ["б/н"]
    }, {
      name: "вул. Вифлеємська",
      number: ["8", "10", "12", "14", "14А", "16", "18/2", " 2/26", "4", "6", "6А", "30"]
    }, {
      name: "вул. Вишгородська",
      number: ["28А", "28Б", "28Г", "28Д", "28/1", "28/2", "30", "32/2", " 5", "7", "19", "19/1", "21", "21/1", "21/2", "21/3", "23", "23А", "29", "29/1", "31", "31/2", "31/33", "33", "35", " 12", "14", "16", "16А", "18А", "18/2", "20/1", "22", "24", "26Б", "26/1", "26/2", "26/3", "26Б/1", "26Б/2", "26/2А", " 4", "4А", "6", "6/1", "8", "10", " 45А", " 46Б", "52", "54Б", "85", "85А", " 48", "48А", "48Б", "50", "50А", "50Б", "51/1", " 53/1", "54", "55", "56/2", "57", "59", "63", "65", "67", "69", " 150", " 34", "36", "36А", "36Б", "38", "38А", " 40/14", " 150А"]
    }, {
      name: "вул. Вишнева (Бортничі)",
      number: ["5", "8", "11", "17", "19", "23"]
    }, {
      name: "вул. Вишнева (Жуляни)",
      number: ["18"]
    }, {
      name: "вул. Вишняківська",
      number: ["1", "3", "5", "5А", "5Б", "5В", "7", "7А", "7Б", "9", "9А", "9Б", "11", "13В", " 2", "4", "6А", "8", "8А", "13", "13А", "13Б", "17", "19/19", " 12", "12А", "12Б"]
    }, {
      name: "вул. Відпочинку",
      number: ["9", "10", "11", "12"]
    }, {
      name: "вул. Військова",
      number: ["1/14", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15/1", "15/2", "15/3", "16", "17", "18", "19", "20", "21/1", "21/2", "22/1", "22/2", "23/1", "23/2", "23/3", "24", "25", "26", "27", "28", "29", "30/1", "30/2", "31", "32", "34", "36/1", "36/2", "36/3", "40"]
    }, {
      name: "вул. Військове містечко",
      number: ["15", "16", "17", "18", "19", "21", "22", "23", "24", "161"]
    }, {
      name: "вул. Вільде Едуарда",
      number: ["5А", "6", "8", "10", "10А", " 3", "3А", "4", "5"]
    }, {
      name: "вул. Вільнюська",
      number: ["33"]
    }, {
      name: "вул. Вільхова",
      number: ["2", "4", "6", "8", "10", "12", "16", "16/27", "22", "23/20", "24", "28"]
    }, {
      name: "вул. Вільшанська",
      number: ["1", "2", "2А", "3", "4А", "5", "6/6", "8", "9", "10", "11", "12", "13", "14", "15/4", "16", "17", "18", "20", "21", "22", "23", "24", "25", "26", "27", "27А", "28", "31", "33"]
    }, {
      name: "вул. Вільямса Академіка",
      number: ["9", "11", "11/1", "11/2", "13", "15", "17/11", "19/14", " 2В", "2Г", "3/7", "3А", "4", "5", "5А", "6А", "6В", "6Г", "6Д", "8Д", "10", "10А", " 16", "18", "28", "30", "36"]
    }, {
      name: "вул. Вінницька",
      number: ["14/39", " 8", "10", "12/10"]
    }, {
      name: "вул. Вірменська",
      number: ["1", "2/1", "2/2", "2/3", "2/4", "2/5", "3", "5", "5А", "6", "6А", "7", "8/127", "9", "11", "11/1", " 2", "2/1", "2/2", "20", "22/42", "25/169", "26", "26А", "27/31", "28", "28А", "29", "30", "32", "33", "41", "42", "43", "44", "45", "45/38", "46/2Е", "49", "51", "55/2Д", "55/1"]
    }, {
      name: "вул. Вірності",
      number: ["37"]
    }, {
      name: "вул. Вірського Павла",
      number: ["б/н"]
    }, {
      name: "вул. Вірьовки Григорія",
      number: ["б/н"]
    }, {
      name: "вул. Віскозна",
      number: ["1", "1А", "2С", "3", "3А", "4", "4В", "5", "8", "8Б", "9", "11", "15", "15А", "17", "17А", "17Б", "32", " 2"]
    }, {
      name: "вул. Вітавська",
      number: ["1", "1А", "1Б", "1В", "3", "4/2", "5", "5А", "6", "8", "8А", "11", "12", "12А", "13", "16", "16А", "17", "17А", "18", "18А", "18Б", "20", "21", "22", "22А", "23", "23А", "24", "25", "29А", "30", "30А", "30В", "31", "31А", "32", "33", "33А", "36", "38", "40", "41", "41А", "41Б", "42", "42А", "43", "43А", "44", "45", "48", "50", "50А", "51", "51Б", "53", "55", "57", " 57Г", "59", "65", "65А", "69", "69А", "75", "75А", "75Б", "77", " 11Б", "27", "27А", "33А", "37", "41В", "43А"]
    }, {
      name: "вул. Вітрука Генерала",
      number: ["3А", "3/11", "4/9", " 7", "7А", "8", "8А", "9", "10", "11", "11/1", "12", "13/2", "15", "17/4"]
    }, {
      name: "вул. Вітряні Гори",
      number: ["1", "2", "2А", "2Б", "3", "4", "4А", "6", "6А", "6Б", "8", "10В", "10Г", "10Д", "10Е", " 17", "21/7", " 10"]
    }, {
      name: "вул. Вітчизняна",
      number: ["1", "3", "3А", "3Б", "4", "5", "6", "7", "8", "8/27", "9", "11/1", "11/2", "11/3", "11/4", "12/49"]
    }, {
      name: "вул. Вітянська",
      number: ["1", "4", "5", "6", "6А", "7", "9/11"]
    }, {
      name: "вул. Водників",
      number: ["2Б", "6", "6/2", "8", "8/2", "12", "14/1", "14/2", "16/1", "16/2", "18", "20", "20Б/2", "22", "22/2", "24", "26"]
    }, {
      name: "вул. Водників острів",
      number: ["б/н"]
    }, {
      name: "вул. Водогінна",
      number: ["3", "5", "7"]
    }, {
      name: "вул. Воздвиженська",
      number: ["1", "1Б", "2", "3", "4", "5", "7", "9", "10", "10Б", "12", "14", "16", "17", "18", "25", "27", "29", "29А", "29Б", "31", "31А", "32", "33", "36", "37", "38", "40", "43", "45", "47", " 37Г", "41", "43", "48", "52-54А", "56", "58", "60А", "60В"]
    }, {
      name: "вул. Вокзальна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }, {
      name: "вул. Волгоградська",
      number: ["29А", "35", "35А", "41", "41А", "", " 23", "29", " 12", "14", "16", "18", " 1/2", "3", "5", "7А", "9", "11", "13", "15", "15А", "17", "19", "21", "21А", "33", " 2", "2/4", "4", "6", "6А", "9А", "10", "25", "25А", "27", "31", "37", "39"]
    }, {
      name: "вул. Волго-Донська",
      number: ["58", " 61", "62", "64", "65/7", "66", "67", "68/10", "69", "71/8", "72", "73", "74", "75", "76", "77", "78/10"]
    }, {
      name: "вул. Волзька",
      number: ["3/4", "5/1", "5/2", "7", "9", "11", "12А", "15", "17", "19", "21/1", "21/2", "21/3", "21/4", "24", "27", "28/1", "29", "32", "33", "34", "36", "37", "38", "39", "40", "41", "43", "45", "46", "48", "48Б", "49", "50/2", "50/3", "51", "53", "54", "55", "56", "57", "59", "60", "61", "62", "63", "64", "64/1", "64/2"]
    }, {
      name: "вул. Волинська",
      number: ["2", "3", "4", "6", " 4А", " 69", " 22", "25", "29/11", "31", " 34/1", "36", "40", "42", "44", "46А", "48", "48/50", "55", "55А", "56", "60", "60А", "62", "64", "65", "66", "66А", "67", "67А", " 2А", "9/21", "10", "11/14", "12", "15", "16", "17/28", "21", " 5", "7", "8"]
    }, {
      name: "вул. Волкова Космонавта",
      number: ["2", "2/1", "2А", "4", "4/1", "4/2", "4А", "4А/1", "4Б", "4В", "4Г", "6", " 8", "8/1", "8А", "10", "10А", "12", "12А", "12А/1", "14", "16", "16/1", "18", "18/1", "18/2", "18/3", "20", "20А", "22", "22А", "24", "26", "26А", "26А/1", "26А/2"]
    }, {
      name: "вул. Володимира Беца",
      number: ["1", "1А", "1В", "1Г", "1І", "2", "3", "3А", "3Б", "3В", "4", "5", "5А", "6", "7", "8", "9", "10", "10А", "11", "11А", "12", "12А", "13", "13Б", "14", "14А", "15", "16", "16А", "17", "17А", "18", "19", "20", "21", "21А", "22", "23", "25", "27", "29", "29А", "29Б", "29Г", "31", "33", "33А", "35", "35А", "35Б", "39", "39А", "47"]
    }, {
      name: "вул. Володимира Брожка",
      number: ["2", "3", "3Б", "6", "8", "12А", " 47", "74", "76", "80/1", "82/1", "82/2", "84", "86", "88/2", "90/1", "92", "94А", "94/1", "96", "98/1", "98/2", "100", "100Б", "104/1", "106", "108", "110/47", "114/1", "114/2", " 118", "120", "122", "122/1", "122/2", "122/3", "124/1", "124/2", "126/2", "128/1", "128/2", "130", "130/1", "132", "136", "138"]
    }, {
      name: "вул. Володимира Винниченка",
      number: ["3", "4", "9", "9А", "10", " 10", "12", "14", "16", "18", "20"]
    }, {
      name: "вул. Володимиро-Либідська",
      number: ["25", " 16", " 22"]
    }, {
      name: "вул. Володимирська",
      number: ["1", "2", "3", "4", "5", "5Б", "6", "7", "8", "9", "10", "12", " 19", "19А", "20/21", " 11", "12", "12В", "16А", "18/2", "19", "19А", "20/1А", "20/1Б", "22", "22А", "22Б", "23", "23А", "23Б", "23В", "24", "25", "27", "29А", "37", "37/29", "39/24", "41", "43", "43А", "45", "45А", "45Б", "47", "49", "49А", "49Б", "51/53", "51А", "51Б", " 12В", "16А", "18/2", "20/1А", "20/1Б", "22", "22А", "24", " 23", "23А", "23В", "25", "27", "29", " 60", "61/11", "61Б", "63", "64/13", "65", "66", "67", "69", "69/1", "69А", "71", "73", "74Д", "75", "76", "76Б", "77", "77А", "78", "79", "79А", "81", "81А", "83", "85", "85/40", " 82А", "92/39", "94А", "94Б", "96", " 82", "82В", "84", "86", "89", "89/91", "89А", "93", " 37/97", "99", "101", "101А", " 34", "36", "38", "40/2", "42А", "44", "48", "48А", " 55", "57", " 42", "46", "54", "58", "60", "62", "64", "68", " 13", "15", "33", " 26"]
    }, {
      name: "вул. Волоська",
      number: ["6/14", "12/14", "18/17", "21", "21А", "24", "29", "31А", "32/34", "36", "36/38", "37А", "37Б", "42", "43", "44", "46", "48/28А", "42/28Б", "50/38", "51/27", "52", "55/57", "62", " 2", "2/19", "3", "3В", "4", "5", "6", "11А", "12", "12/4", "17/18", "18", "18/7", "19", "20", "23"]
    }, {
      name: "вул. Волошкова",
      number: ["1", "2", "5"]
    }, {
      name: "вул. Волховська",
      number: ["3", "4", "5", "6", "8", "10", "12/14", "15", "17/1", "17/2", "19/1", "19/2", "20/1", "21", "22", "22А", "23", "24", "24А", "25", "25А", "25Б", "26", "28", "28А", "30", "32/32"]
    }, {
      name: "вул. Воскресенська",
      number: ["11", "11А", " 2", "2А", "3", "4", "4А", "6", "6А", "7", "7А", "8", "10", "12А", "12Б", "12В", "12Г", "14А", "14Б", "14В", "14Д", "14Е", "16", "16А", "16Б", "16В", "16Г", "18", "18А", "18Б"]
    }, {
      name: "вул. Восьмого Березня",
      number: ["3", "4", "5", "6", "7", "8/2"]
    }, {
      name: "вул. Врожайна",
      number: ["21"]
    }, {
      name: "вул. Всеволода Змієнка",
      number: ["Б/Н"]
    }, {
      name: "вул. Вузівська",
      number: ["3", "4", "4/1", "5"]
    }, {
      name: "вул. Вуликова",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11Д", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "21/1", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38А", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "53", "55", "57", "59"]
    }, {
      name: "вул. Вчительська",
      number: ["1", "2", "3", "4", "4А", "5", "5А", "5Б", "6", "7", "7А", "7Б", "7В", "7Г", "7Д", "7Е", "7Ж", "8", "9", "10", "11", "12", "12/1", "12А", "12Б", "13", "14", "15", "15Б", "16", "17", "18", "19", "21", "27", "29", "31", "31А", "33", "35", "37", "39", "41", "43"]
    }, {
      name: "вул. В'ячеслава Липинського",
      number: ["12Б", " 21", " 3", "4", "4Б", "4В", "4Г", "5", "6", "7", "7Б", "8", "9", "9Б", "10", "11", "12", "13", "14", "16"]
    }, {
      name: "вул. Гаванська",
      number: ["б/н"]
    }, {
      name: "вул. Гаврилюка",
      number: ["3", "4/1", "4/2", "5", "6", "6А", "7", "8", "10", "11", "12", "13", "14", "16", "17", "18", "19/1", "19/2", "20", "21", "23/1", "23/2", "27", "29/1", "29/2", "31", "33", "35", "36", "37", "38", "39", "39А", "43", "45/1", "45/2", "47", "49", "51", "53", "55", "57", "59", "61", "63"]
    }, {
      name: "вул. Гагаріна Юрія",
      number: ["11", "11А", "13", "13А", "13Б", "13В", "15", "15Б", "17", "17А", "17Б", "17В", "19/30"]
    }, {
      name: "вул. Газова",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"]
    }, {
      name: "вул. Газопровідна",
      number: ["б/н", " 9", "11"]
    }, {
      name: "вул. Гайдай Зої",
      number: ["2", "2/1", "2/2", "2/3", "2/4", "2А", "4", "6", "6/1", "6/2", "6/3", "6А", "10", "10А", "10Б", "10В", "10Г", "12/10", " 1А", "3", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3А", "5", "5/1", "5/2", "5/3", "5/4", "5/5", "7", "7/1", "7/2", "7А", "7Б", "9/8", "9/8А", "9А"]
    }, {
      name: "вул. Гайова",
      number: ["1", "2", "4", "5", "6", "7", "8", "9", "10", "10А", "11", "12", "12А", "13", "15", "16", "19"]
    }, {
      name: "вул. Гайсинська",
      number: ["1/9", "2/7", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "22", "22А", "24/14"]
    }, {
      name: "вул. Галаганівська",
      number: ["14", "16", "18", " 4/2", "6"]
    }, {
      name: "вул. Галицька",
      number: ["10", " 1", "3", "10А", "12", "14", "16", " 11", "13", " 7А", " 4", "4/6", "6", "6А", "7", " 9"]
    }, {
      name: "вул. Гаріна Бориса",
      number: ["23 января", " 25", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "48", "50", "51", "53", "54", "56", "58", "60", "62", "64", "66", "68", "68А"]
    }, {
      name: "вул. Гарматна",
      number: ["55", "57", " 39А", "39Б", "39В", "45", "47", "49", "51", "51А", "53", " 2", "2А", "6", "10", " 1", "4", "7", "8", "16/85", "20", "21", "21/30", "23", "25", "29/31", "31", "37", "37А", " 30", "32", "34", "35", "36", "38", "38А", "38Б", "40", "42", "44/2", " 18", "26/2", " 33/1"]
    }, {
      name: "вул. Гаршина",
      number: ["4", "6", "12", "16", "20", "24"]
    }, {
      name: "вул. Гастелло Миколи",
      number: ["3/1", "4", "5", "6/1", "6/2", "7", "8", "9/1", "9/2", "10"]
    }, {
      name: "вул. Гатна",
      number: ["1А", "3", "5", "5/1", "5А", "8", "8/2", "10/6"]
    }, {
      name: "вул. Гвардійська",
      number: ["80", "80А", "80А/1", "85", "87", "87/1", "87/3", " 63А", "65", "67", "67А", "68", "69", "70", "71", "71А", " 22", "24", "25", "26", "27", "28", "29", "30/1", "30/2", "30/3", "34", "35", "36", "37", "38", "38А/1", "38А/2", "39", "39А/1", "39А/2", "40", "41", "41А", "42", "43", "44/1", "44/2", "45/1", "45/2", "46", "46А", "47/1", "47/2", "48", "49", "49А", "50", "51", "52", "53", "54", "54А", "55", "57", "58", "58А", "59", "60", "61", "62", "62А", "63", "66", "66А", " 72", "73", "74", "75", "75А", "77", "80", "80А", "81", "83", "85", "87", "87А"]
    }, {
      name: "вул. Генерала Алмазова",
      number: ["6", "8", "9", " 2", "4", " 1", " 18/7", "18/9", " 12", " 12", "13", "14", "18/7", "18/7В"]
    }, {
      name: "вул. Генерала Геннадія Воробйова",
      number: ["12", "14", "16", "18", "20", "22", " 1/26", "3", "4/1", "4А", "5", "7", "8", "8А", "9", "10", "10А", "11", "12А", "12Б", "13", "13А", "13Б", "13В", "13Г", "13Д", "13з", "13Е", "15", "15А"]
    }, {
      name: "вул. Генерала Грекова",
      number: ["б/н"]
    }, {
      name: "вул. Генерала Шаповала",
      number: ["1", "2", "2А", "3", "5", "6", "10", "12", "14/22", " 9", " 7", "9А", "20"]
    }, {
      name: "вул. Герасименка Костянтина",
      number: ["2/1", "3/1", "3/2", "4", "5/14", "6", "7", "9"]
    }, {
      name: "вул. Героїв Війни",
      number: ["1", "2", "3", "4", "5", "5А", "6", "7", "8", "9", "10", "11", "12", "12/18", "13", "14", "15", "16", "17", "18", "18/1", "19", "21", "23", "23А", "25", "27", "29", "31", "31А", "33", "35", "35/1"]
    }, {
      name: "вул. Героїв Дніпра",
      number: ["1", "2А", "2А/1", "2Б/1", "2Б/2", "3", "3А", "5", "6", "7", "7А", "7А/1", "7Б", "9", "11", "12", "12А", "12Б", "13", "14", "14А", "14Б", "14В", "14Г", "14Г/1", "14Г/2", "15", "16", "16А", "16Б", "16В", "16Г", "16Д", "18", "18/1", "21", "23", " 17", "19", "19А", "19Б", "20", "20А", "20Б", "22", "22/1", "22/2", "22А", "22Б", "24", "25", "26", "28/45", " 27", "29", "29/1", "29/2", "29/3", "29А", "31", "31/1", "31/2", "31/3", "31А", "31Б", "31В", "31Г", "33", "33/1", "35", "37", " 30", "30/1", "30/2", "30/3", "30/4", "30/5", "30/6", "30/7", "30/8", "30/9", "30/10", "30А", "30Б", "32", "32/1", "32/2", "32/3", "32/4", "32/5", "32/6", "32А", "32Б", "32В", "32Г", " 57", "59", "59/1", "59/2", "61", "63", "63/1", "65", "67", "67А", "69", "71", "73", "73/1", "75", "77", "79", " 34", "34/1", "34А", "34А/1", "34Б", "36", "36А", "36Б", "36В", "38", "38/1", "38/2", "38А", "38Б", "38Б/1", "38В", "38Г", "38Д", "38Е", "40", "40А", "40Б", "42", "42А", "42Б", "42В", "42Г", "62", "64", " 41", "41А", "41Б", "41В", "41Г", "41Д", "41Е", "41Ж", "41З", "43", "45", "45/1", "47", "47/1", "49", "49/1", "49/2", "51", "53", "53А", "55", "55/1"]
    }, {
      name: "вул. Героїв Космосу",
      number: ["3", "4", "5", "5А", "7", "7А", " 1", "2Б", " 1А", "1Б", "1В", " 11", "13", "15", "15А", "17", "17А", " 19", "19А", "19Б", "19В", " 5", "6А", "8"]
    }, {
      name: "вул. Героїв Небесної сотні",
      number: ["1", "2", "2А", "3", "4А", "4Б", "5"]
    }, {
      name: "вул. Героїв Оборони",
      number: ["11", "12", "12Б", "12В", "13", "14", "14/1", "15", "15/1", "16", "16А", "17", "18А", " 3", "3/2", "4", "4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "5", "6", "6/1", "6/2", "7", "8", "8/1", "8/2", "8/3", "8/4", "8/5", "8/9", "9/10", "10", "10А"]
    }, {
      name: "вул. Героїв Севастополя",
      number: ["65/1", "65/2", " 48", " 39/8", " 23", "23А", "25", "27", "29", "31", "33", "35", "37", " 8", "10А", "10Б", "12", " 14", "16", "18/2", "20/1", "22", "22А", "24/2", " 26", " 1", "3А", " 17А", "17Б", "17В", " 3", "5", "5А", "7", "7А", "7Б", "9", "9А", "11", "11А", "11Б", "11В", "13", "13А", "15", "17", "19", " 30", " 32", "34/2", " 36/1", "36А", "40", "42", "42А", "44/10"]
    }, {
      name: "вул. Герцена",
      number: ["7", "9", "17/25", "18/20", "31", "35", "35А", " 2", "6", "10", "12"]
    }, {
      name: "вул. Гетьмана Вадима",
      number: ["27", " 17", "25", " 1", "1А", "1Б", "1В", " 2", " 3", "6", "6А", "6Б", "15", " 22", "22А", "22Б", "24/9", "26А", "26Б", "28А", "28Б", "30", "30А", " 40", "40А", "42", "42А", "44", "44А", "46", "46А", "46Б", "48", " 31/2А", "34", "36", "38"]
    }, {
      name: "вул. Гійома де Боплана",
      number: ["1", "1А", "2", "2А", "3", "4", "5", "6", "7", "8", "8А", "9", "10", "10А", "11", "12"]
    }, {
      name: "вул. Гладківська",
      number: ["8А", " 01 июля"]
    }, {
      name: "вул. Глазунова",
      number: ["02 апреля", " 4/47", "4/7", "3", "7", "9", "10", "11", "11/1", "11/2", "13", " 1"]
    }, {
      name: "вул. Глибочицька",
      number: ["4", "10", "12", " 13", "13А", "16", "17", "17А", "17Д", "28", "29/31", "33/37", "40", "40Е", "40С", "40Р", "40У", "41", "43", "44", "44Б", "48/52", "53", "69", "71", " 28", "32", "32А", "32Б", "32В", "58", "71А", "72", "101", "105", "105А"]
    }, {
      name: "вул. Глібова",
      number: ["2", "4/10", "7", "12/14", "14", "16"]
    }, {
      name: "вул. Глієра Рейнгольда",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
    }, {
      name: "вул. Глінки",
      number: ["1", "3", "5", "6", "7", "10", "12"]
    }, {
      name: "вул. Глухівська",
      number: ["6/10", "7", "8", "8/2", "9", "10", "10/1", "10/2", "11", "12", "13"]
    }, {
      name: "вул. Гмирі Бориса",
      number: ["10", "10/40", "12А", "12Б", "12Г", "14", "14А", "14Б", "14В", "14Г", "16", "16А", "18", "18Г", " 2", "2В", "2Г", "4", "6", "6А", "8Б", " 1", "1/2", "1/4", "1А", "1А/4", "1Б", "1Б/6", "1/4Д", "1/6", "3", "3А", "3Б", "5", "5А", " 7", "9", "9А", "9Б", "9В", "9Г", "11", "13", "13А", "15", "15А", "17"]
    }, {
      name: "вул. Говорова маршала",
      number: ["1/1", "3", "3А", "5", "7А", "9", "11", "11А/1", "11А/2", "13", "13А", "13/2", "14", "15", "16", "18", "20", "22", "24", "24А", "26", "26/2", "26А", "28", " 10А", "12", "17", "19", "21", "23", "25", "27", "29", "30", "30А", "31", "32", "32А", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "44", "45", "45А", "46", "48", "50", "52", "54", " 1А", "1Б"]
    }, {
      name: "вул. Гоголівська",
      number: ["2А", "4", "6", "6А", "8", "10", "12", "13/30", "14", "15", "17", "21", "22/24", "23", "25", "26", "27", "28", "29", "30", "32", "32Б", "34", " 01 марта", " 39 ноября", " 5", "7", "9", " 48", "49", " 30А", "36/40", "37/2", "37/2Б", "39", "39Б", "41А", "41Б", "42", "42А", "43А", "47"]
    }, {
      name: "вул. Гоголя (Бортничі)",
      number: ["1А", "2", "2А", "3", "4", "5", "6", "7", "8", "9", "9А", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "34А", "35", "36", "39", "39А", "40", "41", "41А", "42", "43", "45", "47", "49"]
    }, {
      name: "вул. Гоголя (Жуляни)",
      number: ["1", "2", "3", "3А", "4", "5", "5А", "5Б", "5В", "6", "7", "7А", "7В", "8", "9", "10", "11", "12", "13", "14", "16", "16А", "18", "18А"]
    }, {
      name: "вул. Гоголя (Троєщина)",
      number: ["1", "1Б", "1В", "2", "3", "4", "5", "5А", "6", "6А", "7", "8", "9", "9А", "9Б", "9В", "10", "10А", "12", "14", "14А", "16", "16А", "18", "20", "20А", "22", "24", "26", "26А", "28"]
    }, {
      name: "вул. Голованьова Степана",
      number: ["б/н"]
    }, {
      name: "вул. Головка Андрія",
      number: ["12", "25", " 1", "4", "6", " 27", "29", "31", " 3", "13", "17"]
    }, {
      name: "вул. Голосіївська",
      number: ["2", "4", "4А", "6", "8", "10", " 12", "14", "16", "18", " 13", "13А", "13Б", "15", "17", "51", "53", " 3", "5", "7"]
    }, {
      name: "вул. Гомельська",
      number: ["21/2", "22/2", "24/2", "27/2", "28/2", "32/2", "33/2", "35/2", "36/2", "37А", "38/2", "40/2", "41/2", "42/2", "43/2", "45/2", "46/2", "47/2", "49/2", "50/2", "51/2", "55/2", "56/2", "58/2", "62/2", "68/2", "70/2", "70/3", "78/31", " 4/11", "4/1корп1", "4/11корп2", "6/2", "6/12", "8/11", "10", "10/13", "11/9", "12", "14", "15/9", "16", "17/10", "17А", "18", "19", "19А", "19/4", "19/11", "20", "20/2", "21", "22", "23", "24", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59/61", "60", "62", "63", "64", "66", "68", "70", "72", "74", "76"]
    }, {
      name: "вул. Гонти Івана",
      number: ["1", "3А", " 3", "5", "7", "9"]
    }, {
      name: "вул. Гончара Олеся",
      number: ["22", "24", "24А", "24Б", "26", "28", "28Б", "30А", "30Б", "30В", "32А", "32Б", "36А", "36Б", "38", "40", "42", "42Б", "44", "46/48", " 96", " 17/19", " 33", "33Б", "33В", "35", "37А", "41", "41А", "43", "43В", "45А", "45Б", "45В", "45Г", "47/49", "47Б", "47В", "51", "53", "55", " 55Б", "65", "57", "57Б", "59", "65А", "67", "74А", "74Б", "82", "86А", "86Б", "88А", "88Б", " 50", "52", "60", "62", "71", "73", "75", "77", "79", "90/92", " 55А", " 4", "6", "8/5", "9", "12", "14/26", "15/3", "25", "25А"]
    }, {
      name: "вул. Гончарна",
      number: ["15Б", "18А", "20"]
    }, {
      name: "вул. Гончарова",
      number: ["16", "21", " 2/16", "4/2", "6/1", "6/2", "8А", "8/1", "8/2", "10/1", "10/2", "10/3", "12", "14", "18", "18А", "20/1", "20/2", "22", "23/1", "23/2", "24", "25/1", "25/2", "25А", "26/33", "27", "29/1", "29/2", "31/1", "33", "35", "37/1", "37/2", "39", "41", "43", "45/1", "45/2", "47", "49", "51/35"]
    }, {
      name: "вул. Гориста",
      number: ["17", "19", " 3", "4", "5/1", "5/2", "6/1", "6/2", "7", "8", "9/1", "9/2", "10", "11/1", "11/2", "12/1", "12/2", "13/1", "13/2", "14/1", "14/2", "15/1", "15/2", "16"]
    }, {
      name: "вул. Горлівська",
      number: ["124", "124/140", "124А", " 124/1", "124/2", "124/3", "124/4", "137", "137/1", " 110", " 209", "211", "213", "213/1", "215/1", "220", "220корп1", "220корп2", " 38/1", "75", "77", " 38/40"]
    }, {
      name: "вул. Городецького архітектора",
      number: ["4", "6", "10", "12", " 1/3", "1-3/11", "4А", "4Б", "4В", "5", "9", "11", "11А", "11Б", "11В", "15", "17", "17/1", " 13"]
    }, {
      name: "вул. Городищенська",
      number: ["6А", "7", "7/1", "7/2", "8", "10", "10/43"]
    }, {
      name: "вул. Городня",
      number: ["4", "6Б", "8", "10", "12", "14", "16", "16А", "20", "22", "24", "26", "28", "30", " 7", "9", "11", "13", "32", "38", "40"]
    }, {
      name: "вул. Горького",
      number: ["1", "2", "2А", "2Б", "2В", "2Г", "3", "3А", "4", "5", "5Б", "6", "7", "8", "8А", "8Б", "9", "10", "10А", "11", "11А", "11Б", "12", "13", "14", "15", "16", "16Б", "17", "18", "19", "19А", "20", "20Б", "21", "21А", "23", "23А", "24", "25", "25Б", "26", "27", "28", "29", "30", "30А", "31", "32", "32Б", "33", "33А", "34", "35", "35А", "36", "36Б", "37", "37Б", "38", "38Б", "39", " 40", "41", "41Б", "42", "43", "43Б", "44", "45", "47", "47А", "48", "48Б", "49", "49Б", "50", "51", "53", "55", "57"]
    }, {
      name: "вул. Горюшка Георгія",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "32", "34", "36", "38", "40", "42"]
    }, {
      name: "вул. Госпітальна",
      number: ["2", " 16", "18", "24", "24А", " 4", "4В", "12", "12Г", "12Д", "12Е"]
    }, {
      name: "вул. Гостинна",
      number: ["3", "5", "7", "9/37"]
    }, {
      name: "вул. Гостомельська",
      number: ["1А", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
    }, {
      name: "вул. Грабовського Павла",
      number: ["12", "14/1", "14А", "15А/1", "15А/2", "16/20", "17", "17А", "18", "19", "19/2", "21", "22/1", "22/2", "23/1", "23/2", "23А", "24", "25", "26/1", "26/2", "27/1", "27/2", "28", "29/1", "29А", "30/1", "30/2", "31/1", "31/2", "32", "33", "35", "37/1", "37/2"]
    }, {
      name: "вул. Градинська",
      number: ["6", "6А", "6Б", "8", "9", "10", "10А", "10Б", "11", "14", "18", "20", " 1", "3", "5", "7", "7Б"]
    }, {
      name: "вул. Гребінки",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
    }, {
      name: "вул. Грекова академіка",
      number: ["26", " 18", "18А", "18Б", "22", "22А", " 15", " 13", "15А", " 2", " 3", "3/1", "3/2", "5", "10", "12", "12А", "12Б"]
    }, {
      name: "вул. Гречка маршала",
      number: ["16", "18А", "18Г", "18Д", "20", "20А", "20Б", "20В", "20Г", "22", " 8В", "8Г", "12", "12А", "12Б", " 8Д", "10Б", "10Г", "12В", "12Г", "12Д", " 2", "4", "6", "8", "8А", "8Б", "8Д", "10", "18Б", "18В", " 9", "9А", "9Б", "9В", "9Д", "11", "11А", "13", "18", "24", "24А", "24Б", "24В", "26", "26А"]
    }, {
      name: "вул. Григоровича-Барського",
      number: ["3", "5", "7", "7А"]
    }, {
      name: "вул. Гришка Миколи",
      number: ["3А", "4", "10", "11", "13", "16", "17", "18", "19", "20", "21", "23", "29", "31"]
    }, {
      name: "вул. Гришка Михайла",
      number: ["1", "3", "3А", "4", "4А", "6", "6А", "7", "8", "8А", "8Б", "9", "10"]
    }, {
      name: "вул. Грінченка Бориса",
      number: ["1", "2", "2/1", "3А", "3Б", "4", "7", " 1", "3"]
    }, {
      name: "вул. Грінченка Миколи",
      number: ["2/1", "4", "6", "8", " 4Б", "4В", "4М", " 16", "18", "18А", "18Б"]
    }, {
      name: "вул. Гродненська",
      number: ["32", "32А", "36", " 1/35", "3/5", "4", "5", "6", "8", "9", "10", "11", "12", "13", "14", "14А", "15", "16", "17", "18", "19", "20", "20/2", "21", "22", "23", "24", "26", "27", "29", "32А", " 14А"]
    }, {
      name: "вул. Грозненська",
      number: ["12", "14", "16", "18"]
    }, {
      name: "вул. Громадська",
      number: ["1/10", "2/10", "3", "4", "5", "11", "12", "13", "13А", "14", "15", "16", "17", "19", "20", "22/11", "23", "25"]
    }, {
      name: "вул. Громової Уляни",
      number: ["1", "2", "3", "4", "5", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32"]
    }, {
      name: "вул. Грузинська",
      number: ["26", "26А", "26Б", "26/1", "27А", "28", "28А", "28Б", "28/1", "29", "30", "31/2", "31/28", "32", "34"]
    }, {
      name: "вул. Грушева",
      number: ["б/н"]
    }, {
      name: "вул. Грушевського Михайла",
      number: ["8", "8/16", "10", " 2", "4", "4А", "4Б", "8", " 5", "12/2", "18/2", " 36", " 9", "9А", "14", "16", "16/1", "28/2", "30Б", "32", "34/1", "34А", " 30 января", " 1", "1Б", "1В", "1Д", "3", "3Г", "7"]
    }, {
      name: "вул. Гурамішвілі Давида",
      number: ["1", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"]
    }, {
      name: "вул. Гусовського",
      number: ["1", "11/11", "15", " 8/10", "12/7", " 2", "2А", "4", "4А"]
    }, {
      name: "вул. Далека",
      number: ["17", "19", "20", "22", "23", "24", "25"]
    }, {
      name: "вул. Даля Олександра",
      number: ["3А", "3Б", "18", "22"]
    }, {
      name: "вул. Данченка Сергія",
      number: ["1", "2", "3", "4", "5", "6", "8", "8Б", "10", "12", "12А", "14", "14А", "16", " 18", "20", "22", "24", "26", "26А", "28", "28А", "28Б", "30", "32", "32А", "32Б", "34", "34А"]
    }, {
      name: "вул. Данькевича Костянтина",
      number: ["8", "10", "12", "13", "13А", "13Б", "14", "15", "16", "16/1", "16/2", "17", " 1/79", "1А", "3", "4", "4А", "5", "7", "7А"]
    }, {
      name: "вул. Дарвіна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "10"]
    }, {
      name: "вул. Дачно-Білицька",
      number: ["28"]
    }, {
      name: "вул. Дашавська",
      number: ["5", "20", "22", "24", "25", "27", "35/1", "35/2", "35/3", "35/4", "37/1", "37/2", " 06 февраля"]
    }, {
      name: "вул. Двінська",
      number: ["15А", "19", " 1", "1А", "3/5", "4", "13/6"]
    }, {
      name: "вул. Дегтярівська",
      number: ["33А", "33Б", "33В", "35/9", " 31", " 37", "39", "43", "43/1", "43/2", "43/3", "43/4", "43/6", "43/7", "43/8", "43/9", "45", "47", "49", "49А", "49Г", " 53", "53А", "55", " 51", "51А", "51Б", " 3", "5", "7", "8А", "9", "11", "12/7", "13", "15", "15А", "15Б", "17В", " 4А", "6", "6А", " 48", "50", "52", "58", "60", "60А", "60Б", " 54", " 62", "62А", "62Б", "62В", " 11В", "11Г", "13/24", "32", " 23", "25", "25/1", "25А", "25А/1", "27", "27А", "27Г", "29", "38/44", " 17", "21", "36", " 26", "26А", "26Б", "28", "30", " 30В"]
    }, {
      name: "вул. Дегтярна",
      number: ["18", "19", "20", "22", "22Б", "25", "27", "29", "30", "31"]
    }, {
      name: "вул. Дежнєва",
      number: ["1/16", "3/1", "3/2", "4", "5", "6", "6/1", "8", "9", "10/38", "11А", "11/1", "11/2", "11/3", "12/1", "13/1", "13/2", "13/3", "14/1", "14/2", "15", "16/1", "16/2", "17", "19", "19/2", "20", "21", "22", "23/1", "23/2", "24", "26/1", "26/2", "28", "30", "30/1", "32", "34/1", "34/2", " 38", "38А", "40", "42"]
    }, {
      name: "вул. Декабристів",
      number: ["9Е", " 1", "1/1", "1/2", "1/3", "2", "2А", "2А/1", "2А/2", "2А/3", "2А/4", "3", "5", "5/1", "5/2", "5/3", "5/4", "5/5", "5А", "5Б", "5Б/1", "5Б/2", "6", "6/1", "6/1А", "6/1Б", "6/1В", "6/1Г", "6/1Д", "6/1Е", "6/2", "6/3", "6/4", "6А", "6Б", "7", "8", "8/1А", "8А", "9", "9/1", "9/2", "9/3", "9/4", "9/5", "9/6", "9/7", "9А", "9А/1", "9Е", "10", "10/1", "10/2", "10/1Б", "10А", "12", "12/37", "12/37А", "12А"]
    }, {
      name: "вул. Демидівська",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8А", "9", "10", "11", "12", "13", "13/1", "14", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38А", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "49А", "50", "51", "51А", "52", "53", "54", "55", "56", "58", "59", "62", "64", "65", " 66", "67", "68", "69", " 71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "84"]
    }, {
      name: "вул. Деміївська",
      number: ["5А", "12", "14", "16", "18", " 35", "37", "39", "41", "43", "43А", "51", "53", "55", " 29", "31", "33", "33А", "35Б", "45", "45А", "45Б", "47", "49"]
    }, {
      name: "вул. Депутатська",
      number: ["20А", "21", "22", "22А", "23А", "24", "26А", "28/2", "30", "32", " 2", "4/6", "4/6А", "6", "10А", "14", "15/17", "17/6", "27", " 1", "3", "5", "7", "13", "23", "23А", "25"]
    }, {
      name: "вул. Деревлянська",
      number: ["43984", " 19", "19А", "19Б", "21", "21А", " 8", "10", "10А", "14", "16", "16/18-2", "16/18-3", "18", "20А", " 12/42", "17А", " 20 февраля", " 13", "13Б"]
    }, {
      name: "вул. Деревообробна",
      number: ["1", "3", "3В", "4", "5", "5А", "5К", "6Б", "6В", "7", "8"]
    }, {
      name: "вул. Деснянська",
      number: ["19"]
    }, {
      name: "вул. Деснянська (Троєщина)",
      number: ["2", "2А", "4", "6", "6А", "10", "12", "14", "16", "16А", "18", "20", "22", "24", "24А", "24Б", "26", "28", "32", "34"]
    }, {
      name: "вул. Десятинна",
      number: ["1/3", "3А", "4/6", "5", "7", "8", "10", "11", "12", "13", " 4/6", "14"]
    }, {
      name: "вул. Джаліля Муси",
      number: ["1", "2", "3", "4", "5", "6", "8", "9", "10", "12", "13", "14", "15", "18", " 17", "19", "20", "21", "22", "24", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "41", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74"]
    }, {
      name: "вул. Джеймса Мейса",
      number: ["3", "5"]
    }, {
      name: "вул. Джерельна",
      number: ["3", "6/5", "7/5"]
    }, {
      name: "вул. Джерельна (Бортничі)",
      number: ["2", "6", "8", "12", "15", "17", "20", "24", "28", "55"]
    }, {
      name: "вул. Джона Маккейна",
      number: ["20", "20А", "20Б", "22", "22А", "26", " 31", "31А", "33", "35А", "35Б", "37", "37А", "39", "39А", "41/22", " 5", "5А", "7", "9", "10", "10А", "11", "12", "13/2", "14", "15", "16", "16А", "18", "18/1", "22/1", " 29", " 1", "1А", "1Б", "3", "3А", "7", " 28/25", "30", "32", "34", "36", "38", "38А", "38Б", "40", "42", " 43"]
    }, {
      name: "вул. Дзиги Вертова",
      number: ["б/н"]
    }, {
      name: "вул. Димерська",
      number: ["4/31", "5", "7/1", "7/2", "8", "9", "10", "11", "12", "13", "14/1", "14/2", "15", "15А", "16", "17", "17А", "18", "19/1", "19/2", "20", "21/17", "22/1", "22/2", "23/18", "24/1", "24/2", "25/1", "25/2", "26", "27", "28", "29/1", "29/2", "30", "31", "32", "32А", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "43А", "44", "45", "45А", "46", " 47", "48", "49", "50/1", "50/2"]
    }, {
      name: "вул. Димитрова",
      number: ["1", "3", "4", "5", "5А", "7", "7А", "7Г", "9", "11", "13", "13А", "15", "17", "23", "25", "27", "27А", "29", "31"]
    }, {
      name: "вул. Ділова",
      number: ["5", "5(корпус10А)", "5/2", "5А", "5Б", " 9", "11", "13", "14Б", "22", "22А", "22В", "24"]
    }, {
      name: "вул. Дмитрівська",
      number: ["44А", "44Б", "46", " 30", "46", "48Г", "52", "52Б", "56", "56А", "56Б", "58", "60", "62/20", " 1", "2", "3/7", "9/11", "13", "13А", "15/17А", "17А", "18/14", "18/24", "19А", "19Б", "21", "23Б", "24", "25", "27", "29Б", "33", "35", "35А", "35Б", "37А", "37Б", " 45", "64", "66", "68", "69", "71", "76", "78", "92/94", "94", "96/98", "104", " 16А", "16Б"]
    }, {
      name: "вул. Дніпроводська",
      number: ["1", "2", "3", "6", "7", "7/1", "8", "9/2", "10", "11", "13/1", "15", "16"]
    }, {
      name: "вул. Дніпровська",
      number: ["1", "2А", "3", "3А", "3Б", "3Б/1", "4", "4А"]
    }, {
      name: "вул. Дністровська",
      number: ["19"]
    }, {
      name: "вул. Добрий Шлях",
      number: ["13", "15", "17", "19", "21", "23", "25", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "68", "70", "72", "74", "76", "80", "82", "84", "86", "88", "90", "92", "92В", "94", "96", " 5", "5А", "7", "8", "9", "9/1", "10", "11", "16", "16Б", "18", "18/1", "20/1", "20/2", "20/3", "20/4", "20/5", "22/1", "22/2", "22/4", "22/5", "24", "26"]
    }, {
      name: "вул. Добринінська",
      number: ["5", "5/1"]
    }, {
      name: "вул. Добробутна",
      number: ["1", "34", "40"]
    }, {
      name: "вул. Добровольчих батальйонів",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16А", "17", "18", "18А", "19", "20", "21", "22", "23", "24", "25", "26", "26А", "27", "28", "29", "29А", "30", "30А", "31", "32", "33", "34/2", "35", "37", "39", "39А", "41", "43", "44А", "45", "47"]
    }, {
      name: "вул. Добролюбова",
      number: ["1/1", "3/1", "3/2", "4", "5/1", "5/2", "6", "7/1", "8/3", "10", "12/1", " 7/1", "7/2", "9", "12", "14", "16"]
    }, {
      name: "вул. Добросусідська",
      number: ["12/1", "12/2", "13", "14/1", "14/2", "15", "16", "17/1", "17/2", "18", "19", "21/1", "21/2", "22/26", "24", "25", "26/17", "27", "28", "30/1", "30/2", "32", "34"]
    }, {
      name: "вул. Доброхотова Академіка",
      number: ["11", "11А", "28", " 1", "1Б", "2", "4", " 24А", "26", "30", " 17", " 3", "3А", "5", "5А", "5Б", "6", "7", "7А", "8", "9", "10", "12", "13", "14", " 13", "15", "20/19", "24"]
    }, {
      name: "вул. Добрузька",
      number: ["8"]
    }, {
      name: "вул. Доватора генерала",
      number: ["1/53", "2/55", "3/1", "3/2", "4", "5", "6", "8", "9", "11/1", "11/2", "13/1", "13/2", "14/17", "15", "16", "16/1", "16/2", "17", "18/1", "20", "22"]
    }, {
      name: "вул. Довбуша Олекси",
      number: ["18", "22", " 2/1", "2А", "4", "6", "8", "8А", "10", "10А", "12", "12А", "13/22", "14А", "15/19", "17", "19", "21", "23", "25", "27", "29", "31", "33", " 3", "5", "7", "9/11", " 32", "32А", "35", "37", "39"]
    }, {
      name: "вул. Довженка",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8А", "9", "10", "11", "12", "13", "13А", "14", "15", "15А", "17", "18", "18А", "19", "20", "21", "22", "23", "24", "25", "25А", "26", "27", "27А", "29"]
    }, {
      name: "вул. Довженка Олександра",
      number: ["7", "7А", "12Б", "14", "14/1", "14А", "14Б", "16", "16А", "16Б", "16В", "18", " 1", "2", "3", "4А", "8", "10", "12", "12А"]
    }, {
      name: "вул. Докучаєвська",
      number: ["4", "5", "5А", "11", "12", "14", "15", "16", "16А", "17", "18", "18А", "19", "21"]
    }, {
      name: "вул. Долинна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "вул. Донецька",
      number: ["22", "24", "26", "26А", "30", "35", "37/19", "57А", " 5", "7", "8А", "8/10", "10А", "14/30", " 3", " 16/2", "18", " 53", "57", "59", "61", "63", "65"]
    }, {
      name: "вул. Донська",
      number: ["1", "3", "4А", "4Б", "5", "5А", "6", "7", "8", "8А", "9", "10/1", "10/2", "11", "12", "13", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", " 19", "21"]
    }, {
      name: "вул. Донця Михайла",
      number: ["13А", "13Б", " 3", "5", "7", "9", "11", "13", "15А", "15/41", " 16", "18А", "18Б", "19", "19А", "19Б", "21", "21А", "21Б", "23", "23А", "23Б", " 18", "20", "26", "27", "27А", "28", "29", " 12", "14", "14А", "14Б", "14В", "17/46"]
    }, {
      name: "вул. Дончука Василя",
      number: ["3", "5", " 7", "9"]
    }, {
      name: "вул. Дорогожицька",
      number: ["9", "14А", "16", "16А", "18", "18А", " 1", "3", "7", "10", "12А", " 17", " 8/11", "11/8", "13", "15", "15А", "15Б", " 2", "6А", "6Б"]
    }, {
      name: "вул. Достоєвського",
      number: ["2", "3", "3А", "3Б", "3В", "6/1", "6/2", "6А/21", "7/41", "10", "12", "12А", "12Б", "14/43", "14/43-1", "14/43-2", "14/43-3", "18", "20"]
    }, {
      name: "вул. Драгоманова",
      number: ["2", "2А", "2Б", "4А", " 1", "1/1", "1А", "1Б", "1Г", "1Д", "1Е", "1К", "1Л", "1Н", "1Н/2", "3", "3/1", "3/5", "3А", "3Б", "3В", "3В/1", "5", "5/1", "6", "6/1", "6А", "7", "7/1", "7А", "8", "8А", "8Б", "10", "10В", " 21/1", "21/2", "21/3", "21А", "23", "23А", "23Б", "25", "25А", "27", "27А", "27Б", "29", "29А", "31", "31/1", "31/2", "31/3", "31/4", "31/5", "31/6", "31/7", "31/8", "31А", "31Б", "31В", "31В/1", "31В/2", "31В/3", "31Г", "31Д", "31П", "31Р", " 18", "20", "20/1", "20/2", "20/3", "20/4", "22", "22А", "38", "38А", "40", "40А", "40Б", "40В", "40Г", "40Д", "40Д/1", "40Ж", "40З", "40Е", "40Е/1", "42", "42/1", "42/2", "42А", "42Б", "44", "44А", "44А/1", "44В", " 9", "9А", "9/1", "9Ж", "11", "11/1", "11/2", "11/3", "13/10", "13/10А", "12", "12А", "14", "14А", "14/1", "14/2", " 15А", "17", "19"]
    }, {
      name: "вул. Драгомирова Михайла",
      number: ["10А", "11", "12А", "15", "17", " 2", "4", "4Б", "12", "14", "14А", "16", "20", "20А", " 2А", "6", "6Б", "8", " 3", "9", "10/10", "11Е"]
    }, {
      name: "вул. Драйзера Теодора",
      number: ["34/51", "34/51А", "36", "38", "40", "40/1", "40Б", "42", "44", "44А", "46", " 8", "8А", "8Б", "10", " 9", "9А", "9Б", "9В", "9Г", "9Д", "11", "11А", "11Б", " 1", "1/25", "1А", "3", "3А", "5", "7", "7А", "7Б", " 2", "2/27", "2А", "2Б", "4", "4А", "6", "6А", " 14/33", "16", "18", "20", "20А", "22", "24", "24А", "26", "26А", "28", "30", "30А", "30Б", "32", " 2В", "2Г", " 17", " 19", "21", "21А", "23"]
    }, {
      name: "вул. Драй-Хмари Михайла",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "44"]
    }, {
      name: "вул. Друга",
      number: ["2", "4", "8", "10", "11", "12", "14", "16", "18", "19", "20", "22", "24", "26", "29", "30", "36", "38", "40", "42"]
    }, {
      name: "вул. Дружби",
      number: ["1", "2", "2А", "3", "4", "5", "5/1", "6", "8", "10", "12", "12А", "14", "16", "16А", "18", "20"]
    }, {
      name: "вул. Дружківська",
      number: ["14", " 4", "6", "6А", "8", "10", "12", "12А"]
    }, {
      name: "вул. Дружня",
      number: ["7", "10", "10А", "13", "14", "14А", "15", "17", "18", "19", "20", "22", "24", "26", "30", "37", "39", "39А", "45", "55", "55А"]
    }, {
      name: "вул. Дубенська",
      number: ["4", "6", "7", "8", "8А", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", " 2А", "3/1", "3/2", "5/2"]
    }, {
      name: "вул. Дубищанська",
      number: ["б/н"]
    }, {
      name: "вул. Дубініна Володі",
      number: ["7/14", "12/12", "13", "14", "16", " 7/14", "12/12", "13", "14", "16", " 2", "2А", "3", "4", "6", "8"]
    }, {
      name: "вул. Дубровицька",
      number: ["10", " 3", "5", "8", "12", "28", " 7"]
    }, {
      name: "вул. Дудника Георгія",
      number: ["2"]
    }, {
      name: "вул. Дуки Степана",
      number: ["4", "6", "8", "10", "30/1"]
    }, {
      name: "вул. Дунаєвського",
      number: ["2/1", "2/2", "3", "4", "5", "7", "8", "11", "11/2", "15/1", "15/2"]
    }, {
      name: "вул. Дурдуківського Володимира",
      number: ["43", "44", "45", "46", "47", " 1", "2", "3", "4", "5/1", "5/2", "6", "6А/1", "6А/2", "7", "7А/1", "7А/2", "9", "10", "11", "12", "13/1", "13/2", "15", "16", "17", "18", "19", "20", "21", "22", "23", "23А", "24/1", "24/2", "25/1", "25/2", "25/3", "26/1", "26/2", "27", "28", "29", "30", "31", "32", "32А", "33", "34", "35", "36", "37", "37А", "38/1", "38/2", "39", "40", "41", "42"]
    }, {
      name: "вул. Дяченка",
      number: ["12"]
    }, {
      name: "вул. Дяченка Івана",
      number: ["1", "3", "5", "5А", "7", "10", "11", "13", "15", "17", "19", "21", "21А", "23", "25", "27", "27А", "29", " 14", " 3/1", "3/2", "4/2", "5/1", "5/2", "7/1", "7/2", "8/1", "8/2", "9", "9/1", "9/2", "10/1", "10/2", "10А", "10Б", "10В", "20", "20А", "20Б", "20В", " 6", " 6", "8"]
    }, {
      name: "вул. Екскаваторна",
      number: ["24", "26", "30", "35", "37", "37А"]
    }, {
      name: "вул. Електриків",
      number: ["7", "9", "10", "12", "12А", "14", "14А", "16", " 20", "20А", "21", "21А", "23", "23Б", "26", "26А", "26Б", "26/6", "26/8", "26/9", "26/10", "26/30", "26/30А", "26/39", "28", "28/1", "28/4", "28/5", "28/6", "28/10-3", "28/12-1", "28/12-2", "28/13", "28/14-2", "28А", "28Б", "28В", "28Г", "29", "29А", "30", "30/5", "31", "31А"]
    }, {
      name: "вул. Електротехнічна",
      number: ["1", "2А", "4А", "4Б", "5", "5А", "6", "7", "9", "10", "11", "16", "18", "26", "28", "30", "43", "43А", "44Б", "45", "47", "63", "64", "74"]
    }, {
      name: "вул. Енгельса",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17А", "18", "19", "19А", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "45", "47", "49", "51"]
    }, {
      name: "вул. Енергетиків",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20А"]
    }, {
      name: "вул. Ентузіастів",
      number: ["39", "39/2", "41", "41/1", "41/2", "43", "43/1", "45", "45/1", "47", "47/1", "49", "51/24", " 29", "29/1", "29/2", "29/3", "31", "31/1", "33", "35", "35/1", "35/2", "37", " 7", "7/1", "7/2", "7/3", "7/4", "9", "9/1", "9/2", "9В", " 1", "3", "3/1", "5", "5/1", "5/1А", " 1/5", "11", "11/1", "11/2", "11/3", "13", "13А", "13Б", "15", "17", "19/1", "21", "21/1", "23", "25", "25/1", "25/2", "27"]
    }, {
      name: "вул. Еренбурга Іллі",
      number: ["3А", "5"]
    }, {
      name: "вул. Ернста",
      number: ["2", "3", "3Б", "4", "6", "8", "10", "12", "14А", "16Б", "16В", "16Г"]
    }, {
      name: "вул. Еспланадна",
      number: ["2", "28", "28А", "30", "30Б", "32", "32В", "34/2", " 4/6", "42", " 8/10", "20"]
    }, {
      name: "вул. Естонська",
      number: ["51", "53/8-1", "53/8-2", "100/3", "100А/1", "100А/2", "104/1", "104/2", "104/3", "106", "108/1", "108/2", "108/3", "110", "112", "114", "116/2", "118/1", "118/2", "118/3", "118/4", "120", " 23", "25/1", "25/2", "27", "27А", "29", "31/1", "31А", "31Б", "40А", "42/1", "42А", "44/1", "44/2", "46", "48", "50", "50А", "52", "52А", " 37", "39", "41", "43", "45", "47", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "92", "94", "96", "96А", "98", "100", " 1/5", "3", "5", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22", "24", "26/1", "26/2", "28/1", "28/2", "32", "34", "36"]
    }, {
      name: "вул. Євгена Коновальця",
      number: ["44", "44Б", " 26", "26А", "31", "32А", "32Б", "32В", "32Г", "32Д", "33", " 17", "18", "21", "23", "25", "27", "27А", "29", "29А", " 34", "34А", "36", "36А", "36Б", "36Е", "37", "38", " 15/1", "15/2", "15/3", "15/4", " 11", " 3", "5", "7/9"]
    }, {
      name: "вул. Євгена Сверстюка",
      number: ["8", " 4", "4А", "4Б", "6", "6А", "11", "11А", "11Б", "13", "15", "17", "19", "23", "25", "25А", " 1", " 2А", "2Б", " 8А", "52В", " 52", "54"]
    }, {
      name: "вул. Єжи Гедройця",
      number: ["2", "6", " 16", " 5"]
    }, {
      name: "вул. Єнісейська",
      number: ["1", "2/1", "2/2", "3", "5"]
    }, {
      name: "вул. Єреванська",
      number: ["9/2", "11", "13", "13/1", "15", "17", "19", "21", "23", "25", " 1", "2", "3", "3А", "4", "5", "6", "7", "8А", "10А", " 8", "10", "12", "12А", "14", "14А", "14Б", "14В", "14Г", "14Д", "16", "16А", "18", "18А", "20", "22", "24", "26", "27", "27/1", "28", "28А", "32", " 29", "29/1", "30", "31"]
    }, {
      name: "вул. Єсеніна Сергія",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43"]
    }, {
      name: "вул. Жабаєва Жамбила",
      number: ["2", "2В", " 4", "4Б", "9", "10", "11", "12", "16", "17", "18"]
    }, {
      name: "вул. Жашківська",
      number: ["1", "2", "2А", "3", "4", "5", "6", "7", "8", "9", "10", "12", "13", "13А", "17", "19", "20", "20А", "21А", "24", "25", "26", "27", "28", "29", "30", "32", "33", "34", "35", "37", "38", "39", "40", "41", "46", "46А", "48", "50", "52", "56", "58", "62", "62А", "62Б", "66", "68", "72", "82"]
    }, {
      name: "вул. Живописна",
      number: ["10", "14", "16", " 8/61", "9"]
    }, {
      name: "вул. Жилянська",
      number: ["82", "84", "88", "96", " 107", "116А", "120А", "122", "142", "146", " 83/53", "87/30", " 69/71", "75", "104/24", "106", "106А", "108", "110", "114", "116", "120", "124", "126", " 46", "47", "48/50А", "49/51", "51", "53", "54", "55", "56", "57", "58", "59", "60", "62/64", "68", "72", "72А", "74", "76", " 39/92", "41", "41А", "43Б", "43В", "45", "92/39", "94А", "94Б", " 5", "5/60", "5Б", "7", "7Б", "7В", "9", "9/11", "9В", "12", "13", "14", "14Б", "19", "23", "23Б", "24", "25", "26", "27", "28", "29", "30", "30/32", "31", "32", "34", "35", "37", "37/97", "38", " 97", "99", "101", "148", "160", " 43", "47Б", "58Б"]
    }, {
      name: "вул. Житкова Бориса",
      number: ["2", "3", "5", "7", "7А", "9", " 5А"]
    }, {
      name: "вул. Житньоторзька",
      number: ["16 апреля", " 8", "1"]
    }, {
      name: "вул. Житомирське шосе",
      number: ["15км", "17км", "19км"]
    }, {
      name: "вул. Жмаченка Генерала",
      number: ["7", "14", "16", "18", " 18А", "20", "26", "28А", "28Б", " 2", "4", "6", "8", "10", "12"]
    }, {
      name: "вул. Жмеринська",
      number: ["24", "26А", "28", " 1", "5", "11/1", "22", "22Б", "24", "26", "36", " 16", "18", "22", "22А", " 1/1", "2Б", " 30", "32", "32А", " 6", "8", " 1А", " 10", "10А"]
    }, {
      name: "вул. Жовтнева",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "15", "17", "18", "38А"]
    }, {
      name: "вул. Жолудєва",
      number: ["1Б", "1В", "4А", " 3", "3А", "3Г", " 4Б", "4В", "6", "6Б", "6В", "6Г", "6Д", "6Е", "8", "8А", "10"]
    }, {
      name: "вул. Жуків Затон",
      number: ["7"]
    }, {
      name: "вул. Жуковського Василя",
      number: ["6", "8", "8/1", "10", "20", "20/1", "20/2", "20/4", "20/7", "22", "22/2", "22А", "26", "28", "28/1"]
    }, {
      name: "вул. Жулянська",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", " 67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85"]
    }, {
      name: "вул. Журавлина",
      number: ["2", "4", "20"]
    }, {
      name: "вул. Забайківська",
      number: ["3", "4", "6", "8", "9", "11", "12", "13", "14", "19", "21", "22", "23", "25", "27", "28", "29", "31", "32", "34", "36", "40", "42", "46"]
    }, {
      name: "вул. Забіли Віктора",
      number: ["3", "5", "7", "7А", "9"]
    }, {
      name: "вул. Заболотного Академіка",
      number: ["35", "37", " 13", "15А", "15Д", "146", " 15", "19", "21", "21В", "27", "29", "29А", "29Б", "29В", "29Г", "29Д", "150", "158", "158Д", "174", "182", " 126", "128", "130", "132", "134", "136", "136А", "138", "140", "142", "144", "148", "150А", "152", "154", "156/1", "156/2", " 30", "30А", " 2", "4", "6", "8", "10", "12", "14", "24", "26", "28", " 6А", "20А", " 1", "3", "3А", "5", "5А", "40", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "70А", "72", "74", "76", "78", "80", "82", "84", " 16", " 18", "20", "22", " 32", "34", "36", "38", "42", "48А", "86", "88", "90", "92", "94", "96", "98", "100", "102", "104", "106", "108", "110", "112", "114", "114А", "116", "118", "120", "122"]
    }, {
      name: "вул. Завальна",
      number: ["1", "1А", "2", "2Б", "2В", "2Г", "2Д", "10Г", "11", "12", "13", "13А", "13Б", "15", "17", "17А", "17Б", "17В", "17Г", "18", "18А", "18Б", "18В", "18Г", "18Д", "19", "19/1", "19/2", "19/3", "19А", "19Б", "19В", "19Г", "19Д", "19Ж", "19з", "20", "21", "21А", "21Б", "21В", "22", "22А", "22Б", "23", "23А", "23Б", "24", "24А", "24Б", "24В", "25", "26А", "26Б"]
    }, {
      name: "вул. Заглади Леоніли",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "вул. Загородня",
      number: ["15"]
    }, {
      name: "вул. Задніпровського Михайла",
      number: ["18 июля", " 14", " 13"]
    }, {
      name: "вул. Закарпатська",
      number: ["3", "3А", "3Б", "4", "4А", "5", "6/3", "8", "8/2", "10", "12", "12А", "14/1", "14/2", "15", "16/1", "16/2", "17/1", "17/2", "18", "20", "22", "22/2", "23", "24", "25", "26", "27", "28", "29", "30", "30/1", "30/2", "31", "32/1", "32/2", "33", "34", "35", "37", "39", "41", "44"]
    }, {
      name: "вул. Закревського Миколи",
      number: ["89", "89/1", "89А", "91/1", "91/2", "93", "93/2", "93/3", "93/4", "93/5", "93/6", "93/7", "93/8", "93/9", "93/13", "93/14", "93А", "93А/1", "93А/4", "93Б", "95", "95А", "95Б", "95В", "95В/1", "95Г", "97", "97А", "99", "99А", "101", "101/1", "101А", "103", " 83", "83А", "85", "85А", "85Б", "85В", "87", "87/1", "87/2", "87/3", "87/4", "87/5", "87А", "87Б", "87В", "87Г", "87Д", " 1", "3", "3А", "5", "5А", "7", " 37", "39", "39А", "39Б", "41", "41А", "43", "43А", "45", "45А", "45Б", " 27", "27/2", "27А", "29", "29А", "29Б", "29В", "31", "31А", "31Б", "31В", "33", "35", "35А", "35Б", "35Д", "37А", "37Б", " 2", "2/1", "2А", "6А", "8А", "9", "9А", "10", "11", "11А", "13", "13А", "15", "15А", "15Б", "17", "17Б", "19", "19А", "19Б", "19В", "19Г", "21", "21А", "23", "23А", "25/1", "25А", " 47", "47А", "47Б", "49", "49/1", "49А", "49Б", " 12", "14", "16", "18", "20", "22", "28", "32", "32Б", "32Д", "38", "40", "42", "48А", " 51/2", "51/2А", "51/2Б", "53", "55", "57", "59/1", "59/2А", "59/3", " 61/2", "61/2А", "63", "63А", "65", "65А", "67", "67А", "69", "71", "73/1", " 75/2", "75/2А", "75/2Б", "75/2В", "77", "81", "81/1"]
    }, {
      name: "вул. Заливна",
      number: ["2/71", "3", "5", "5А", "5/1", "7А", "7/1", "8", "8А", "8Б", "9", "13", "15", "15А", "15Б", "17", "17А", "19", "21", "21В", "21Г", "23", "23А", "27", "27А", "33", "33А", "33В"]
    }, {
      name: "вул. Залізнична",
      number: ["1", "1А", "3", "14", "16/1", "16/2", "16/3", "16/4", "18", "20", "24", "26", "28", "30/3", "32", "34", "36", "36/1", "38", "40", "42", "42А", "44", "48", "48А"]
    }, {
      name: "вул. Залізняка Максима",
      number: ["3", "6", " 6"]
    }, {
      name: "вул. Залісна",
      number: ["1/72", "2", "3", "4", "5", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "38", "40", "42", "44", "46", "48", "50"]
    }, {
      name: "вул. Заломова Петра",
      number: ["1", "1А", "2", "3", "3А", "5", "7", "9", "10/9", "11", "12/8", "13", "14", "15", "16", "17", "18", "18Б", "19", "20", "21", "23", "25"]
    }, {
      name: "вул. Залужна",
      number: ["5", "5В", "8", "9", "9А", "10", "10А", "10Б", "10В", "11", "11А", "13/2", "14", "14А", "14Б", "15", "16", "16А", "16В", "16/1", "19", "19Б", "19В", "20", "21", "22", "23А", "24", "25", "25А", "26", "26А", "27", "27А", "28", "30", "32", "33/12", "36", "36А", "38А", "39", "40", "40А", "47", "47Б", "49"]
    }, {
      name: "вул. Замковецька",
      number: ["94", "94А", "94Б", "94В", "94Г", "102", "102А", "104", "104А", "106", "106А", "108", " 39", "41", "43", "45", "47", "47/3", "49", "51", "90", "90А", "90А/1", "92", "94", "94А", "94Б", "94В", "94Г", "96/13", "96А", "96Б", "98", "100", "100/1", "100/2", " 1/2", "5", "5/1", "6", "7", "7А", "8", "10", "11", "12", "13", "14", "15", "17", "18", "19", "19А/1", "19А/2", "20", "21", "22/1", "23", "23А", "23Б", "23В", "23Г", "23Д", "23Е", "24/2", "25", "25А", "26", "27Б", "28", "29", "31/1", "31/2", "33", "33А", "33А/1", "33/1", "34", "35", "35/1", "36", "36/2", "37", "38", "40", "42", "42/2", "44", "46", "46/1", "48", "48/1", "50", "52", "52/2", "54А", "54Б", "54Ж", "56", "58", "64", "66", "68", "74", "74А", "80А", "82", " 84Б", " 76", "80", "84Б"]
    }, {
      name: "вул. Заньковецької",
      number: ["3", "3/1", "5/2", "7", "9", "9/9", " 4", "6", "8", "10"]
    }, {
      name: "вул. Западинська",
      number: ["3А", "3Б", "4", "4А", "5", "5А", "6", "6А", "7", "9А", "10", "11", "13", "15"]
    }, {
      name: "вул. Заплавна",
      number: ["1", "1А", "2А", "3", "3А", "4А", "5", "6", "6А", "7", "9", "9А", "10", "11", "12", "12А", "13", "14", "15", "15А", "16", "18", "19", "21", "21А", "23", "25", "25А", "27", "29", "31", "31А", "33", "33А", "35", "37", "41", " 16А", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "39", "40", "43", "45", "47", "49", "49А", "51", "53", "55", "57", "59", "61", "63", "65", "67", "67А", "69", "71", "73", "75", "77", "79", "81", "83", "85", " 42", "44", "46", "48", "87", "89", "91", "93", "95"]
    }, {
      name: "вул. Заповітна",
      number: ["1", "1А", "2", "2А", "3", "3А", "4", "5/1", "5/2", "5А", "5Б", "6", "7", "8/1", "8/2", "9", "10", "11/30", "12", "13/25", "14/32", "15", "16/27-1", "16/27-2", "17", "18", "19", "20", "21/42", "22", "24/44", "26", "26/51", "28", "28/1", "30", "32"]
    }, {
      name: "вул. Запорожця Петра",
      number: ["4", "6", "8", "8А", "8Б", "8В", "10", "12", "14", "14/3", "14А", "14Б", "16", "16Г", "18", "20", "20А", "22", "26", "26А", "28", " 11", "11А", "11Б", "11В", "13", "13А", "13Б", "15", "15А", "15Б", "17", "17А", "19", "19А", "19Б", "21", " 3", "5", "5А", "7", "7А", "9", "9А", "9Б"]
    }, {
      name: "вул. Запорожця Петра (Троєщина)",
      number: ["6", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "19", "21", "23"]
    }, {
      name: "вул. Зарічна",
      number: ["1Б", "1Г", "2корпус1", "2корпус2", "2 корпус3", "2А", "2Б", "3А", "4корпус1", "4корпус2", "5", "5А", "6", "6А", "6Б", "6В", "6Д", "6Є", "6К", "7", "7А", "10", "10А", "10Б", "10В", "10Г", "10Д", "11", "11А", "11Б", "12", "16", "44", "44А", "47", "48", "49", "50", "50А", "50Б", "50В", "53", "53А"]
    }, {
      name: "вул. Зарубинецька",
      number: ["б/н"]
    }, {
      name: "вул. Заслонова Костянтина",
      number: ["3", "7", "9", " 2", "1", " 13А", "13Б", "14", "16", "17/6", "18", "20", "22", "24/2"]
    }, {
      name: "вул. Затєвахіна Полковника",
      number: ["1А", "14", "14/1", "14/2", "14/6", "14А", "14Б", "14В", "14Г"]
    }, {
      name: "вул. Затишна",
      number: ["1", "1А", "1А/1", "1А/2", "1А/3", "1Б", "2", "2А", "2Б", "2В", "2Г", "3", "4", "4А", "6", "6А", "6Б", "7Б", "7Б/1", "7Б/2", "7Б/3", "7Б/4", "7Б/5", "8", "10"]
    }, {
      name: "вул. Захарівська",
      number: ["10", "14", " 1", "2", "3", "3А", " 7", "27", "27А", "29", "33/1", "33/2", "35", "36", "37/1", "37/2", "38", "39", "41", "42", "44", "44/2", "44/3", "46", "48", "48А", "50", "52", "56"]
    }, {
      name: "вул. Західна",
      number: ["11", "12", "14", " 3Д", "3Ц", "4", "4А", " 1/6", "4"]
    }, {
      name: "вул. Звенигородська",
      number: ["1", "2", "3", "4", "5", "6", "7", "8/1", "9", "10/1", "11", "12", "13/13", "14/1", "15/26", "16/11", "17", "18/24", "19", "20", "21", "22/2", "23", "24", "24А"]
    }, {
      name: "вул. Звіринецька",
      number: ["40", "41", "42", "43/1", "43/2", "44", "44А", "45", "45А", "46/1", "46/2", "46А/1", "46А/2", "47", "48", "49", "50", "54", "56", "58", "59", "60/1", "60/2", "61А", "62", "62А", "64", "66", "68", " 63А", "72", "72А", "73", "73А", "74", "75", "75А", "76А", "76Б", "76Д", "77", "77А/1", "77А/2", "78", "79", "81/20", "82", "83/29", "84", "85", "85А", "86", "87", "87А", "88", "90", "90А", "91", "92", " 1", "2", "3", "4", "4А", "5", "6", "7", "8", "9/1", "9/2", "9/3", "10", "11/1", "11/2", "12", "13", "14", "15", "16", "17", "20/1", "20/2", "20/3", "21", "22", "23", "24А", "25/20", "26", "27", "28/1", "28/2", "29", "30", "31", "31А", "31/1", "31А/2", "32", "33", "33А", "34", "35", "36/1", "36/2", "37", "38", "38А", "39", "39А"]
    }, {
      name: "вул. Згурівська",
      number: ["3", "5", "8/1", "8/2", "9/1", "9/2", "9/3", "11", "12", "13", "15", "17/44", "18", "20/46"]
    }, {
      name: "вул. Здолбунівська",
      number: ["13", "15", "15А", " 16", "16/1", "16/2", "16/4", "33А", " 1", "1/1", "2", "2А", "3", "3А", "3Б", "3В", "3Г", "3Б/1", "3В/1", "3/3", "4", "5", "5А", "5Б", "5/3", "6", "7", "7А", "7/1", "7Б", "8/1", "9", "9А", "9Б", "9/3", "11", "11А", "1Б", "11В", "11Б/1"]
    }, {
      name: "вул. Зелена",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "34", "36", "37", "38", "39", "40", "41", "42", "43", "44", "46", "47"]
    }, {
      name: "вул. Зеленогірська",
      number: ["8", " 2", "4"]
    }, {
      name: "вул. Землянська",
      number: ["6", "7", "10", "10А", "12"]
    }, {
      name: "вул. Зенітна",
      number: ["8/1", "8/2"]
    }, {
      name: "вул. Зимова",
      number: ["1/60", "1/65", "1/69", "2", "2/58", "3", "3/1", "3А", "4", "5", "6", "7"]
    }, {
      name: "вул. Златопільська",
      number: ["4", "4К", " 3", " 2"]
    }, {
      name: "вул. Знам'янська",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45"]
    }, {
      name: "вул. Зовнішня",
      number: ["1", "1А"]
    }, {
      name: "вул. Зодчих",
      number: ["44", "46", "50", " 50", "50А", "50Б", "50В", "52", "54", "54А", "56", "56А", " 58А", "60/1", "62", " 70", "72", "74", "78", "80", "80А", " 68", " 1", "3", "4", "5", "5А", "5Б", "6", "8", "26", "26А", "26Б", " 14", "18А", "20", "32", "32А", "32Б", "34", " 18В", "18Г", " 22", "24", "28А", "28Б", "40", "40А", " 10", "10А", "12", "28", "30", "30/6", "30А", "32В", "36", "38", " 16", "18Б", " 18", " 6А", "6Б"]
    }, {
      name: "вул. Золота",
      number: ["31", "31А", "33", "35/1", "35/2", "37", "37А", "39", "39/1", "41", "43", "45", "47", "47А", "49", "49/2", "51", "51В", "53", "55", "55А"]
    }, {
      name: "вул. Золоті Джерела",
      number: ["б/н"]
    }, {
      name: "вул. Золотоворітська",
      number: ["5", "13", " 2", "2А", "4", "6Б", "8/4", " 6"]
    }, {
      name: "вул. Золотоніська",
      number: ["1", "2", "3", "4", "5", "6", "7", "7А", "8", "9", "9А", "10", "11", "12", "13", "14", "15", "15/1", "16", "17", "18", "19", "20", "21", "21/1", "22", "23", "23/1", "24", "24/1", "25", "25/1", "26", "27", "27/1", "28", "28/1", "29", "29/1", "30", "31", "33", "33/1"]
    }, {
      name: "вул. Золотоустівська",
      number: ["1", "2/4", "3", "4", "10/12", "12А", "20", "23", "24", "26", "27", "28", "30", "32", "34", "35", "44/22", "46", "48/5", "50", " 51", "53"]
    }, {
      name: "вул. Золочевська",
      number: ["19", "19/1", "19/2", "19/3", "20А", "20А/2", "20А/3", "21", "21А", "22/1", "22/2", "23", "24/1", "24/2", "26", "27", "28", "28/2", "28А", "29", "30", "30А", "32", " 33А", "36", "38", "41/1", "42", "43/1", "43/2", "43/3", "43/4", "43/5", "44", "45", "45/2", "46А", "46", "47", "50/6", "50/6-2", "52", "52/2", "54", "54/2", " 2", "6", "8", "10", "11"]
    }, {
      name: "вул. Зоологічна",
      number: ["1", "3", "3А", "3Б", "3В", "3Д", "3Я", " 2", "4", "4А", "4Б", "5", "5/1", "5А", "6", "6А", "6В", "8", "10", "12/15"]
    }, {
      name: "вул. Зорге Ріхарда",
      number: ["1", "2", "3", "4", "5 6", "7", "8", "9", "10", "11", "12", "13", "14"]
    }, {
      name: "вул. Зоряна",
      number: ["б/н", " 2", "2/18", "3", "3/2", "4", "5", "5/1", "6", "6/2", "7", "7/2", "8", "9", "9А", "10/17"]
    }, {
      name: "вул. Зрошувальна",
      number: ["2", "3А", "3Б", "4", "4А", "5", "5А", "5В", "5Д", "6А", "7", "10", "10А", "11", "14", "15А", "15Б", "15К", "16", "17", "17А", "19", "31"]
    }, {
      name: "вул. Івашкевича Ярослава",
      number: ["3", "3/1", "5", "5А", "5Б", " 4", "6", "6/8А", "6/8Б", "8", "8А", "10", "12", "14"]
    }, {
      name: "вул. Ігорівська",
      number: ["1/9", "5", "7", "11", "11А", "12", "12А", "12Б", "13/5", "14", "14А", "16", " 1/8", "2/6"]
    }, {
      name: "вул. Їжакевича Івана",
      number: ["1/24", "3", "10", " 4", "5/9", "7/10", "8/7", "9", "12", "14", "16", "18", "19", "21", "23", "24", "55", "56", "57", "58", "59", "60", "61", "62", "63/4", "64", "65/5", "65А", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "80", "82", "84", "86", "88", "90", "92", "94"]
    }, {
      name: "вул. Іжевська",
      number: ["02 января", " 1", "1А", "1Б", "2", "2А", "3", "4", "4А", "4Б", "5", "5А", "6", "7", "7А", "7Б", "8", "8А", "8Б", "10", "10А", "10Б", "11", "11А", "11Б", "11В", "12", "12А", "15", "15А", "16", "16А", "16Б", "18", "20", "21", "21А", "21Б", "22", "22А", "22Б", "22В", "22Г", "22Ж", "22з", "23", "23А", "23Б", "23В", "23Г", "23Д", "23Ж", " 25", "25А", "26", "26А", "26Б", "27", "27А", "27Б", "28"]
    }, {
      name: "вул. Ізюмська",
      number: ["1", "5", "7"]
    }, {
      name: "вул. Іллінська",
      number: ["3", "8", "10", "12", "16", "20", "27/13"]
    }, {
      name: "вул. Інженера Бородіна",
      number: ["2", "6", "6А", " 5Б", "7/10", "9", "10/8", " 11/9", "12/7", "13/14", " 3", "4", "5А"]
    }, {
      name: "вул. Інженерна",
      number: ["1", "1А", "2", "4", "6", "6А", "6Д", "6Є", "6Ж"]
    }, {
      name: "вул. Інститутська",
      number: ["8", "21/8", " 25", "25А", "26", "27/6", "28", " 12А", "14", "14А", "16", "18", "18А", "18Б", "20/8", "22/7", "24/7", "24Б", " 7", "11А", "11Б", "13", "13/4", "13А", "15/5", "17/5", "19А", "19Б", "19В", " 29", "29/3", "29А", " 9"]
    }, {
      name: "вул. Іоанна Павла II",
      number: ["20", "22", " 23/35", " 7", "10/1", "10/2", "10/3", "10А", "11", "13", "15", "16", "19", " 3", "4/6А", "4/6", "4/6Б", "5", "6/1", "9", "10/1", "17", "21"]
    }, {
      name: "вул. Ірининська",
      number: ["1/3", "5", "5/24", "6"]
    }, {
      name: "вул. Ірпінська",
      number: ["11", "13", "15", "16", "17", " 2", " 63/5", "65", "67", "69", "69А", "71", " 62", "62А", "62Б", "64", "66", "68", "68А", "70", "72", "74", "74А", "76", "78", " 63А", "69Б"]
    }, {
      name: "вул. Іртишська",
      number: ["1", "1/2", "3", "5", "7", "17"]
    }, {
      name: "вул. Ірчана Мирослава",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
    }, {
      name: "вул. Ісаакяна",
      number: ["1", "2", "3", "17", "18"]
    }, {
      name: "вул. Іскрівська",
      number: ["1", "3", "3А", "5", "5А", "7", "9", "11", " 2/9", "4", "6", "8", "10", "12", "14", "16", "16А", "18", "20", "22", "24"]
    }, {
      name: "вул. Йорданська",
      number: ["14", "14А", "16", "16А", "18", "18А", "20", "20/1", "20/2", "20/3", "20/4", "22", "22А", "2А/1", "22Б", "24", "24А", "24А/1", "24Б", "26", "26/1", "26/2", "26/3", " 1", "1А", "3", "3А", "5", "5А", "5А/1", "7", "7А", "7Б", "7В", "7Г", "9", "9А", "9Б", "9Б/1", "9В", "9Г", "9Д", "9Е", "9Е/1", "9Ж/1", "9Ж/2", "9К", "11", "11А", "11А/1", "11Б", "11В", "11В/1", "11Г", "11Д", "17", "17/1", "17/2", "17/3", "17/4", "17/5", "17/6", "17/7", "17А", "17Б", " 2", "2А", "2Б", "4", "4А", "4Б", "4В", "4Г", "4Г/1", "4Г/2", "4Г/3", "4Д", "4Е", "6", "8", "8/1", "8/2", "8А", "8Б", "10", "10А", "10Б", "10В", "10Г", "10Г/1", "10Г/2"]
    }, {
      name: "вул. Каблукова",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "11", "13", "15", " 14", "23", "24Г", "26"]
    }, {
      name: "вул. Кавалерідзе Івана",
      number: ["1", "1А", "3", "5", "7", "9", "11"]
    }, {
      name: "вул. Кавказька",
      number: ["12", "13", "14", "15", " 7", "1", " 9", "11"]
    }, {
      name: "вул. Кадетський Гай",
      number: ["3", "5", "6", "6А", "7", "9", "11"]
    }, {
      name: "вул. Кадіївська",
      number: ["8"]
    }, {
      name: "вул. Казанська",
      number: ["18", "2"]
    }, {
      name: "вул. Кайсарова",
      number: ["1", "1/1", "1/2", "2", "3", "5", "7", "7/1", "7/2", "7А", "7В", "7В/1", "7В/2", "7/9А", "7/9Б", "7/9В", "7/9Г", "9", "9/1", "9А", "9А/1", "11", "15"]
    }, {
      name: "вул. Калачівська",
      number: ["9", "10", "10А", "11", "12/1", "12/2", "13", "14", "14/10", "16/10", "18", "18/2", "20", "22", "24", "24/1", "26", "26/2", "28", "28/2", "30", " 2А"]
    }, {
      name: "вул. Калинова",
      number: ["4", "4А", "4Б", "5", "6/1", "6/2", "7", "8", "9/1", "9/2", "11", "13", "21"]
    }, {
      name: "вул. Калинова (Жуляни)",
      number: ["б/н"]
    }, {
      name: "вул. Калиновий Ріг",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26"]
    }, {
      name: "вул. Калнишевського Петра",
      number: ["1", "1А", "1Б", "2", "2А", "3", "3А", "5", "6", "7", "8", "8А", "10", "14", "16", "16/1"]
    }, {
      name: "вул. Каменярів",
      number: ["83/32", "85/34", "87", "89", "91", "93/39", " 11", "11А", "12", "14/1", "16", "18/1", "18/2", "18/3", "20/31-1", "20/31-2", "22", "24/1", "26", "28/1", "28/2", "28/3", "28А", "35", "35А", "37А", "37/28", " 21", "23", "27/1", "27/2", "29", "30/1", "30/2", "31/1", "31/2", "31А", "41", "47/1", "47/2", "49/1", "49/2", "51", " 32", "34", "34А/1", "34А/2", "34А/3", "36", "38", "40/1", "40/2", "42", "42А/1", "42А/2", "42Б", "44", "46А", "46/1", "48", "50", "50А", "50Б", "52А", "52Б", "53", "54", "55/22", "56/1", "56/2", "57/15", "58", "59", "60", "61", "62", "63/1", "63/2", "64", "65", "66", "67/1", "67/2", "68", "69", "69А", "71", "73", "75", "77", "77А", "77/1", "79", "81"]
    }, {
      name: "вул. Камишинська",
      number: ["4"]
    }, {
      name: "вул. Кам'янець-Подільська",
      number: ["1А", "2/1", "2/2", "2А", "3", "5", "7", "15", "18/2", "24/1", "24/2", "26/1", "26/2"]
    }, {
      name: "вул. Кам'янська",
      number: ["77", "79", "81", "120", "120А", " 121", "125", "125А", "126", "127", "127/1", "128", "129", "129/1", "130/1", "130/2", "131", "131/1", "133/3"]
    }, {
      name: "вул. Канальна",
      number: ["1", "2", "3", "8"]
    }, {
      name: "вул. Канівська",
      number: ["25/120", "28", "30", "32", "34", " 35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "52", "54", "55", "56", "57", "58"]
    }, {
      name: "вул. Караваєва професора",
      number: ["1", "3", "3А", "6", "6А", "6Б", "8", "8А", "8Б", " 18", "20/32"]
    }, {
      name: "вул. Карбишева генерала",
      number: ["1/29", "3Б", "5", "8", "8А", "10", "12", "14", "16", "18", "18А", "18Б", "18В", "20", "20А", "22", " 3"]
    }, {
      name: "вул. Кареловська",
      number: ["2", "3", "3/2", "3/3", "4/1", "4/2", "5А", "6/1", "6/2", "6/3", "7", "8", "9", "10", "11/1", "11/2", "12", "13", "15/1", "15/2", "16/1", "16/2", "20/1", "20/2", "22", "22/1", "22/2", "23/1", "23/2", "25/1", "25/2", "27/1", "27/2", "29/1", "29/2", "31/1", "31/2", "33"]
    }, {
      name: "вул. Кар'єрна",
      number: ["54/27", "55", "56/32", "57", "57А", "58", "59", "60", "61/27", "62", "64", "66", "68", "70", "72", "72А", "74", "76", "78", "80/25", " 1/5", "2/7", "3", "4", "4А", "5", "6", "7", "8", "8А", "9", "9А", "10", "10А", "11", "12", "13", "13А", "14", "15", "16/25", "17", "18/32", "19", "19Б", "20", "21", "22", "22А", "23", "24", "25", "26", "27", "28", "28А", "29", "30", "31", "32", "33", "34/33", "35/29", "36", "37/34", "38", "39", "40", "41", "42", "43", "43А", "44", "45", "45А", "46", "47", "48", "49", "50", "51", "52", "53"]
    }, {
      name: "вул. Кармелюка Устима",
      number: ["23"]
    }, {
      name: "вул. Карпатська",
      number: ["1/15", "2/17", "3/1", "3/2", "4", "5", "6", "7", "8", "8А", "9", "10", "11", "11А", "12", "13/1", "13/2", "14", "15/1", "15/2", "16", "17/1", "17/2", "17А/26", "17Б", "17В", "17Г", "19", "20/24", "21", "22/1", "22/2", "23/1", "23/2", "24", "25/21", "26Б", "26В", "27/20", "28", "30/1", " 66", "67/17", "68", "70", "72А", "74", "76/10", " 30/2", "31/1", "31/2", "32", "33", "34/19", "35/1", "35/2", "37", "38", "38А", "39/1", "39/2", "40", "41/19", "43/24", "45", "46", "47", "48", "49", "50", "51", "52/22", "53/1", "53/2", "54", "55/1", "55/2", "56", "57", "58", "59", "61/1", "61/2", "62А", "63А", "63/1", "63Б", "64", "65/1", "65/2", " 36/18", "42/1", "42/2", "44/1", "44/2", "60/1", "60/2", "50/17", "61А/1", "61А/2", "62/1", "62/2", "63/2", "67/15", "68", "70", "72А/1", "72А/2", "72/1", "72/2", "74/1", "74/2", "76/15"]
    }, {
      name: "вул. Карпінського Академіка",
      number: ["25 декабря", " 4", "6", "8", "10"]
    }, {
      name: "вул. Касіяна Василя",
      number: ["1", "1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1/10", "1А", "2", "2/1", "2/1А", "2А/1", "2А", "2Б", "3", "4", "4/1", "6", "6А", "6Б", "8", "10", "10/1", "10А", "10Б", "10Б/1"]
    }, {
      name: "вул. Каунаська",
      number: ["2", "3В", "4", "4/1", "4/2", "6/1", "8/2", "10", "10А", "14/1", " 13", "13А", " 3", "10/1", "12", "12/1", "12/2", "14", "16/1", "27"]
    }, {
      name: "вул. Кахи Бендукідзе",
      number: ["2"]
    }, {
      name: "вул. Каховська",
      number: ["63", "63/1", "65", "67", "67/2", "68/2", "69/1", "69/2", "71А", " 64", "84", " 56", "58", "60", "62"]
    }, {
      name: "вул. Качалова",
      number: ["3", "3А", "6", "6А", " 5", "5А", "5Б", "5В", "5Г", "5Д", "7", "9", "13"]
    }, {
      name: "вул. Качури Якова",
      number: ["45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "56А", "57", "58", "58А", "59", "60", "60А", "61", "62", "63", "64", "65", "66", "67", "67А", "69", "71", "73", "75", "75А", "75Б", "77", "77А", "79", "79А", "81", "81А", "83", "83Б", "89", "91", "91А", "93", " 1", "1А", "2", "2А", "2Б", "3", "4", "5", "6", "7", "8", "8А", "9", "10", "11", "12", "12А", "13", "13А", "13Б", "13В", "14", "15", "16", "17", "17А", "18", "19", "20", "20А", "20Б", "21", "22", "23", "24", "25", "25А", "25Б", "26", "27", "28", "29", "29А", "30", "31", "32", "32А", "33", "34", "34А", "35", "36", "37", "37А", "38", "38А", "38Б", "40", "41", "42", "43", "44"]
    }, {
      name: "вул. Качуровського Ігоря",
      number: ["5", "9/70", "11", "11/107", "16"]
    }, {
      name: "вул. Каштанова",
      number: ["5", "5А", "7", "7А", "9", "9А", "11", "13", "13А", "13Б", "15", "15А", "15Б", "15Г", "17", "17Г", " 1/9", "3", " 4", "6", "8", "8А", "8Б", "8Г", "10", "12", "12А", "12Б", "14", "14А", "14Б"]
    }, {
      name: "вул. Кащенка Академіка",
      number: ["2А", "2Б", " 4", "6Б", "8", "10/1", "10/2", "11", "12", "13", "14/2", "15", "15/2", "16/1", "16/2", "16/3", "17", "17/1", "18", "19/1", "19/2", "21", "23", "24", "25", "26/1", "27", "27/2", "29", "31", "33/2", "33/7", "35", "35/2", "37", "39", "41", "41/1"]
    }, {
      name: "вул. Квітки Цісик",
      number: ["7", "10", "12", "14", "20", "24", "24Б", "24Д", "26", "28", "28А", "28Б", "28В", "28Г", "28Д", "28Е", "31", "31Б", "31В", "38", "39", "39В", "40Б", "40В", "40Д", "41", "42", "43", "43А", " 48", "51А", "53", "54", "56", "57", "28", "58А", "58В", "58Г", "60", "61", "64", "67", "67А", "68", "71", "73А", "73В", "75", "75/75", "75А", "75В", "79", "79В", "79Г", "81", "81А"]
    }, {
      name: "вул. Квітки-Основ'яненка",
      number: ["1Г", "2", "4", "4/2", "4А", "6", "7", "8", "9", "9А", "9Г", "10Б", "10/2", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "23А", "24", "25", "25А", "26", "28", "28А", "28Б", "28В", "29", "30", "30А", "30Б", "31", "32", "34", "36", "36А", "37", "38", "39А", "40", "42", "42/41", "42/70", "44", "46", "47", "48", "49"]
    }, {
      name: "вул. Квіткові луки",
      number: ["10"]
    }, {
      name: "вул. Квітнева",
      number: ["б/н"]
    }, {
      name: "вул. Квітникарська",
      number: ["б/н"]
    }, {
      name: "вул. Квітуча",
      number: ["1", "3", "5", "7", "8", "9", "10", "11", "14А", "14Б", "14В", "14Г", "15", "15А", "15Б", "15В", "15Г", "16", "16А", "16Б", "16В", "16Г", "17", "19", "22А"]
    }, {
      name: "вул. Кемеровська",
      number: ["б/н"]
    }, {
      name: "вул. Керченська",
      number: ["4", " 1/20", "3", "5", "5А", "7/7", " 11", "11А"]
    }, {
      name: "вул. Кибальчича Миколи",
      number: ["20", " 4", "6", "8", "8А", "10", "10А", "12", "12А", "12Б", "14", "16", "18/21", " 3", "3А", "3Б", "3В", "5", " 5А", "5Б", "7", "7А", "7Б", "7В", "9", "11", "11А", "11Б", "11В", "13", "13А", "13Б", "13В", "15", "15А", "15Б", "17", "17Б", "19", "19А", "21", "23/25", " 1", "2А"]
    }, {
      name: "вул. Київська (Жуляни)",
      number: ["2", "2А", "4", "6", "8", "10", "12", "13", "13А", "14", "14Б", "15", "16", "18", "20", "22", "22А", "24", "26", "28", "30"]
    }, {
      name: "вул. Кирила Осьмака",
      number: ["1", "1Д", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17А", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38А", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "59", "61", "63", "65", "67", "69", "71", " 73", "75", "77", "79", "81", "83", "85", "85А"]
    }, {
      name: "вул. Кирилівська",
      number: ["9", " 109А", "109Б", "109В/1", "109/2", "111", "115/1", "115/2", "115/3", "152", "154", " 117", "119/1", " 134", "142", "146", "152А", " 121", "121А", "121/2", "123", "125", "127", "127А", "129", "129А", "129/1", "131", " 160", "160А", "160Б", "160Д", "160С", "160Ш", "160Щ", "160Ю", "164", "166", "168", "168А", "170", "172", " 34/38", "37", "39", "47", "47В", "51", "51А", "53", " 40", "40/42", "40Г", "40Д", "42", "46", "58", "60", "60А", "62Б", "62В", "64", "82", "86", "98", "102", "104", "104А", "110", "116", "116А", "118", "118/2", " 1/3", "2/6", "2/9", "4", "6", "8", "12", "13А", "13Б", "13Г", "13Д", "13Е", "14/18", "15", "15А", "15/1", "17/2", "19/21", "20", "23/25", "24А", "24Б", "25", "26", "27", "30/5", "31", "31Б", "31В", "33", "63", " 126/2", "126А", " 55", "57", "59", "61", "63", "63Д", "65", "65Д", "69", "69А", "69В", "69Ж", "85", "85/87", "87/89", "89", "99", "99/1", "103", "103А", "105", "107", "122/1", "124", "132", " 82"]
    }, {
      name: "вул. Кирило-Мефодіївська",
      number: ["2", "4А", "7", "14/2", "15"]
    }, {
      name: "вул. Кирпоноса",
      number: ["3", "4А", "5", "6", "7", "8/9", "9", "11/10", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "28", "30/2"]
    }, {
      name: "вул. Кисловодська",
      number: ["1", "2", "2А", "3", "4", "5", "7", "8", "9", "10", "11", "12", "12А", "13", "14", "15", "16", "17", "18", "18А", "18Б", "19", "20", "21", "22", "23", "24", "26", "27", "28А", "28Б", "28В", "30", "30А", "32", "34", "35", "36", "37", "38", "39", "41", "42", "43", "44", "44А", "45", "46", "47", "48", "48А", "49", "51", "51А", "52", "53", "54", "55", "56", "58", "59", "60", " 62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "83А", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "94А", "95", "96", "98", "100"]
    }, {
      name: "вул. Китаївська",
      number: ["9", "11", "13/7", "14/16", "15/7", "20А", "32/1", "32/2", "32/3А"]
    }, {
      name: "вул. Кишинівська",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "26", "28", "30", "32", "34"]
    }, {
      name: "вул. Кінцева",
      number: ["5", "7", "17"]
    }, {
      name: "вул. Кіото",
      number: ["3", "5", "9", "9А", "11", "11А", "13", "15", " 8/1", "8/2", "8/3", "8/4", "8/5", "8/6", "8/7", "8/8", "8/9", "8/10", "8/11", "8/12", "8/13", "8/14", "10", "10/2", "19", "19корпБ", "19корпВ", "21/1", "21корпД", "23", "25", "27", "27/1"]
    }, {
      name: "вул. Кіпріанова академіка",
      number: ["2", "4", "4А", "6", "6А"]
    }, {
      name: "вул. Кірпи Георгія",
      number: ["2", " 2", "2А"]
    }, {
      name: "вул. Клавдіївська",
      number: ["6", "8", "16/1", "16/2", "22", "23/15", "24", "32/4", " 1", "2", "3", "4", "5", " 34", "36", "37", "39", "41/42"]
    }, {
      name: "вул. Клеманська",
      number: ["1", "3", "4", "5", "6-8"]
    }, {
      name: "вул. Клена Юрія",
      number: ["1", "1А", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"]
    }, {
      name: "вул. Кленова долина",
      number: ["10", "15/4"]
    }, {
      name: "вул. Клінічна",
      number: ["1", "4", " 25", "25А", " 2/1", "3", "5", "6", "7", "8", "8А", "9/11", "11А", "12", "13", "14", "15", "16", "17", "18", "20", "22", "22А", "23/25", "24", "26", "28"]
    }, {
      name: "вул. Княжий Затон",
      number: ["10", "10А", "12", "12А", "12Б", "14А", "14Б", "14В", "14Г", "16/1", "16А", "16Б", "16В", "16В/1", "16Д", " 1/3", "2", "2А", "2Б", "3", "4", "4/4", "4А", "5", "7", "7А", "9", " 11", "13", "13/1", "15", "15/1", "17", "17А", "17А/1", "17Б", "17В", "17Г", "19", "21"]
    }, {
      name: "вул. Кобзарська",
      number: ["35А/2", "37/2", "37/3", "38/1", " 3", "3/1", "3/2", "5", "7/1", "7А", "9", "10А", "10А/2", "11/1", "11/2", "12", "12А", "13", "14", "14А", "14Б", "15", "19/1", "19/2", "21", "23", "23А/1", "23А/2", "23А/3", "25", "25А", "25Б", "25Б/2", "25/3", "26/2", "26/3", "27", "27Б", "28", "28/2", "29/2", "29/3", "30", "31", "31А", "31Б", "31Б/2", "31Б/3", "32/1", "32/2", "33", "35", "35А/1"]
    }, {
      name: "вул. Кобилянської Ольги",
      number: ["3", "4", "5", "6", "6А", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19Б", "20", "20Б", "21", "21А", "23", "25", "27", "29"]
    }, {
      name: "вул. Ковельська",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18"]
    }, {
      name: "вул. Ковніра Степана",
      number: ["3", "3А", "5"]
    }, {
      name: "вул. Ковпака",
      number: ["8", " 29", " 3", "17", " 4"]
    }, {
      name: "вул. Кожум'яцька",
      number: ["12Б", "27", "30"]
    }, {
      name: "вул. Козацька",
      number: ["116", "116/1", "118", "118/1", "118А", "118А/1", "120/4корп5", "120/4корпЖ", "120/4корпЕ", "120/4корпЕ1", "120/4корпА", "120/4корпВ", "120/4корпЧ", "122", "122/4", "122А", "124", "124/5", "126", "126/1", "126/2", "126/3", " 2", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18", " 11/1", "11Б", "13", "15", "15А", "17/2", "17В", "17В/3", "19", "20/1", "20/2", "20/3", "21", "22", "23", "24", "25", "25/1", "25/2", "26", "27Б/1", "27Б/2", "29А", "31/1", "31/2", "32", "33/1", "33/2", "35", "35А", "37", "39", "41", "43/3", "43А/1", "43А/2", "45", "47", "48/1", "49", "51", "53", "54", "56", "56/1", "56Б/2", "58А", " 40", "42", "44", "46", "50", "51", "52", "54", "60А", "61", "62А/2", "62Б/1", "62Б/2", "62В", "64/2", " 55", "55А", "70", "72", " 57", "59", "61", "63", "65", "67", "67А", "67Б", "69/39", "71", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88/20", "90А", "92", "93", "94", "95", "97", "98", "100", "102", "104", "106", "108", "110", "110А", "110Б", "110В", "110Г", "112", "114", "116", "116А", "118", "118А"]
    }, {
      name: "вул. Козелецька",
      number: ["24", " 18", " 9", "1"]
    }, {
      name: "вул. Козицького Пилипа",
      number: ["3", "5", "5/1", "7"]
    }, {
      name: "вул. Козятинська",
      number: ["4", "5", "5А", "6", "7", "8", "9", "10", "11/50", "12"]
    }, {
      name: "вул. Коласа Якуба",
      number: ["8", " 6Д", " 14", " 2", "4", "4А", "4Б", "6", "6А", " 23", "23Г", "25", "25А", "27А", "29", " 11", "15", "15А", "15Б", "17", "21", " 7", "9", "13", " 8", "23А", "23Б", " 27В", " 6Б", "6В", "8А", "8Б", "8В", "10", "12", " 1А", "1Б", "1В", "3/1", "5"]
    }, {
      name: "вул. Колекторна",
      number: ["1", "1А", "2", "3", "3А", "3А/1", "3А/2", "3А/3", "3Б", "3/1", "4", "4А", "4/1", "5", "14", "17", "17А", "17Б", "17В", "17Г", "18", "18А", "18/1", "18/2", "24", "24А", "24/26", "30", "30А", "38/40", "40А", "40Д", "42А", "44", "44/1"]
    }, {
      name: "вул. Колоса Сергія",
      number: ["50", "50А", "51", "52", "53", "54", "54А", "55", "56", "57", "58", "59", "59А", "60", "61", "62", "62/1", "63", "64", "65", "66", "66А", "67", "68", "69", "71", "73", "75", "77", "79", "81", "83", "83А", "85", "85А", "87", "89", "91", "93", "95", "97", "101", "103", "105", "105А", "105Б", "105В", " 1", "2", "2Б", "2Д", "2Д/1", "3", "3/1", "4", "4А", "5", "5А", "6", "7", "8", "9", "9А", "10", "11", "12", "13", "14", "14А", "15", "16", "17", "18", "18А", "19", "20", "20А", "21", "22", "22А", "23", "23Б", "24", "24А", "25", "25/1", "26", "26А", "27", "28", "29", "29А", "30", "30А", "31", "31А", "32", "33", "33А", "34", "34/34А", "34Б", "36", "37", "38", "40", "40А", "41", "42", "42А", "43", "43А", "44", "45", "45А", "46", "47", "49", " 91/1", "91А", "91Б", "91В", "91Д", "91Ж", " 135", "137", "137А", "139", "141", "143", "145", "147", "149", "153", "155", "157", "159", "161", "163", "165", "167", "169А", " 70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "90А", "92", "94", "96", "98", "100", "102", "104", "106", "107", "108", "108А", "109", "110", "111", "111Б", "112", "112А", "112Б", "113", "114", "115", "116", "116А", "117", "117А", "119", "121", "123", "125", "127", "129", "131", "133"]
    }, {
      name: "вул. Колоскова",
      number: ["1", "2", "3", "5/1", "5/2", "6", "7", "9", "11", "12"]
    }, {
      name: "вул. Комбайнерів",
      number: ["1/16", "3", "3А", "5", "7/1", "7/2", "9", "11", " 13", "15"]
    }, {
      name: "вул. Комбінатна",
      number: ["3/1", "3/2", "5", "7", "9", "11/10", "19", "25А"]
    }, {
      name: "вул. Комунальна",
      number: ["7", "9", "10", "11", "11А", "12", "14", "16", "19", "20", "21", "23", "24", "24А", "25", "26", "27", "28", "30", "33", "34", "35", "39", "39А", "39Б", "41", "42", "44", "46", "48", "50", "50А", "52", "52А", "53", "58", "60", "62", "64", "66А", "66Б"]
    }, {
      name: "вул. Кондратюка Юрія",
      number: ["3А", "6", "6/8", "8", "8/1", "8/2", "8/3", "8А", "9", "13А", "13А/1", " 1", "1/1", "1/2", "1/2А", "2", "2А", "3", "4", "4А", "4Б", "4В", "4Г", "5", "6/1", "6/2", "6/3", "7"]
    }, {
      name: "вул. Кондукторська",
      number: ["3", "7", "8", "9", "11", "12", "13", "14", "15", "16", "17", "19", "21", "23", "24", "28", "29", "31А", "32", "33", "34", "36", "38", "42"]
    }, {
      name: "вул. Конєва Маршала",
      number: ["3", "5Г", "5Д", "7", "7А", "7Б", "9", "10/1", "12", "12А"]
    }, {
      name: "вул. Коноплянська",
      number: ["7", "9", "9А", "12", "16", "16Б", "18", "18А", "22"]
    }, {
      name: "вул. Конотопська",
      number: ["15", "22", " 7", "8/1", "8/3"]
    }, {
      name: "вул. Контактна",
      number: ["1", "4"]
    }, {
      name: "вул. Конча Озерна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "27А", "29", "29/1", "30", "31", "32"]
    }, {
      name: "вул. Кооперативна (Жуляни)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "9А", "10", "11", "11А", "12", "13", "15", "15А", "15Б", "17", "19", "21", "23", "25", "27", "29", "31", "33", "34", "35", "36", "37", "37А", "38", "40", "41", "41А", "42", "43", "43А", "43Б", "43В", "44", "45", "46", "46А", "47", "48", "49", "50", "50/1", "50А", "51", "52", "52/1", "52Б", "52Е", "53", "55", "55А", "57", "59", "59А", "59Б", "60", "60/1", "61", "62", "63", "64", "64А"]
    }, {
      name: "вул. Копайгородська",
      number: ["4", "4/7", "5/10", "7", "8", "9", "9/3", "10", "10/2"]
    }, {
      name: "вул. Коперніка",
      number: ["2", "3", "7", "9/11", "10", "12", "12Д", "13/15", "14", "16", "16А", "16Б", "17", "18", " 21", "23", "27", "29"]
    }, {
      name: "вул. Копиленка Олександра",
      number: ["3", "3А", " 6"]
    }, {
      name: "вул. Копилівська",
      number: ["1/7", "2", "2А", "2Б", " 8", "10А", "10Б", "17/19", "21", "23", "31", " 36", "38", "65", "65А", "67", "67А", "67Б", "67/5", "67/10", "67/11", "67/12", "67/13", "69", "69А", "71/13", " 12А", "12Б", "55"]
    }, {
      name: "вул. Корабельна",
      number: ["5", "6", "8"]
    }, {
      name: "вул. Корінна",
      number: ["1", "1А", "2", "3", "4", "5", "5А", "6", "7", "7А", "8", "9", "11", "11А", "13", "15", "18", "18А", "20", "21", "23", "25", "25А", "26", "28", "30", "32", "34", "36", "36А"]
    }, {
      name: "вул. Короленківська",
      number: ["20", " 3", "3А", "4"]
    }, {
      name: "вул. Корольова академіка",
      number: ["3", "3А", "3Б", "5", "7", " 5А", " 1А", "1/2", "2", "2А", "4", "6", "8", "9Б", " 9А", "11/1", " 6А", "8А", "10", "10А", "10Б", "10В"]
    }, {
      name: "вул. Коростенська",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29"]
    }, {
      name: "вул. Корсунська",
      number: ["17/32", "33", " 3", "4", "6", "7", "8", "10", "12", "14", "14А", "16", "16А"]
    }, {
      name: "вул. Корсунь-Шевченківська",
      number: ["7", "7А"]
    }, {
      name: "вул. Корчуватська",
      number: ["1", "2", "3", "4", "5", "5/1", "6", "7", "7А", "8", "8/1", "9", "9А", "10", "10/2", "10Б", "11", "12", "13", "14/1", "14/2", "15", "16/1", "16/2", "17", "18", "18/2", "19", "20/1", "20/2", "21", "22/1", "22/2", "23", "24", "25", "26", "27/1", "27/2", "28", "29", "30", "31", "32", "33", "34", "35/1", "35/2", "36", "37/1", "37/2", "37/3", "38", "39/1", "39/2", "41", " 43", "45"]
    }, {
      name: "вул. Косенка",
      number: ["15/1", "15/2", "17", "19", " 25", "27", "29", "31", "33", "35", "37", "39", "39А", "41", "43", "45", "47", "49", "51", " 53", "55", "57", "59", "59А", "61", "63", "65", "67", "69", "70", "71", "73", "75", "77", "79", "81", "83", "85", "87", "90", "91", "93", "95", "97", "99", "101", "103", "105", "107", "111", "113"]
    }, {
      name: "вул. Космічна",
      number: ["4", "6", "8", "8/7", "8А", "8Б", "8В", "12А", " 1/10", "3", "5", "5/15", "5/16", "12", "15", "17"]
    }, {
      name: "вул. Космодем'янської Зої",
      number: ["18", "22"]
    }, {
      name: "вул. Костанайська",
      number: ["6", "9", "10", "12", " 1", "11", "11А", "14", " 5", "7", " 2", "4", "8/1", "8/2", "14А", "14Б"]
    }, {
      name: "вул. Костельна",
      number: ["3", " 3", "4", "5", "6", "7", "8", "9", "10", "11", "15", "17"]
    }, {
      name: "вул. Костичова Академіка",
      number: ["1", "2", "5"]
    }, {
      name: "вул. Костюка",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
    }, {
      name: "вул. Костянтинівська",
      number: ["1", "2", "2А", "4", "5", "6", "7", "9", "10", "14", " 25", "27", "27Б", "31", " 15", "36", "43", "44", "45", "46/52", "51", "53", "54", "55", "56", "57", "60", "60/15", " 8", "11", "13", "14/20", "16", "18", "19", "19Б", "20", "21", " 22/17", "24", "26", "32", "32Б", "34", "37", " 59/5", "61", "63/12", "64", "66", "68", "68А", "70", "71", "71Д", "72", "73", "75"]
    }, {
      name: "вул. Котарбінського Вільгельма",
      number: ["8", "10/12", "15", "17", "19", "21", "22", "23"]
    }, {
      name: "вул. Котельникова Михайла",
      number: ["1", "2/14", "3", "4", "7", "10", " 26", "31", "33", "35", "36", "37", "37А", "42", "44", "45", "45А", "45В", "46", "47", "48", "49", "51", "51/7", "53", "53А", "54", "55", "57/17", "59/18", " 11", "12", "13", "17", "19", "21", "23", "25", "25А", "29/18", " 80", "86А", "87", "89", "95", "111/2"]
    }, {
      name: "вул. Котика Валі",
      number: ["22", "23", "24", "25", "27", "28", "29", "30", "30А", "31", "32", "33", "35", "37", "39", "41", "43"]
    }, {
      name: "вул. Котляревського",
      number: ["1", "1А", "2", "3", "4", "4А", "5", "6", "7", "7А", "8", "9", "10", "11", "11А", "12", "12А", "13", "13А", "14", "15", "16", "17", "19", "21", "21А", "23", "25"]
    }, {
      name: "вул. Коцюбинського",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8А", "9", " 10", "11", "11А", "13", "15", "17", "18", "20", "21", "21/2", "21/3", "21/4", "21А", "22", "23", "25", "25А", "27", "29", "31", "33", "35", "37", "37А", "39А"]
    }, {
      name: "вул. Коцюбинського Михайла",
      number: ["1", "2", "3", "4Б", "5", "5Б", "6", "8А", "9", "12", "12А", "12Б", "14", " 7", " 20А", "21А", "27", "33", "34/1", "34/2", "34А", "35", "35/1", "35/2", "36", "36А", "37", "37А", "38", "39", "40", "41/1", "41/2", "42", "44", "46/9", "48/6", "50", "52", "53", "54", "58", "60", " 10", "11", "13", "15", "16", "18", "20", "22", "24", "25/28", "26"]
    }, {
      name: "вул. Кочерги Івана",
      number: ["1", "2", "3", "3А", "4", "4А", "5", "6", "7", "7Б", "9", "9/1", "11", "11А", "11Б", "13", "17"]
    }, {
      name: "вул. Кочубеївська",
      number: ["3", "5", "6", "6А", "7", "9", "11", "13", " 8", "15"]
    }, {
      name: "вул. Кошиця Олександра",
      number: ["1", "3", "3А", "3Б", "3В", "5", "5А", "5Г", "7", "7А", "9", "9/1", "9/2", "9А", "9Б", "11", " 4", "4А", "6", "8", "10"]
    }, {
      name: "вул. Кошового Олега",
      number: ["2", "2Б", "19", "19А", "81/4А"]
    }, {
      name: "вул. Крайня",
      number: ["1", "1А", "1Б", "1В", "3", "3А", "11", "13", "15", "17"]
    }, {
      name: "вул. Краківська",
      number: ["15/17", "17", "22", "24", "25", "25А", "26/8", "26Б", "27А", "28", "28А", "28Б", "32А", "32Б", " 13", "13А", "13Б", "13В", "14/6", "16", "18", "18А", "20", " 3", "5", "7", "7А", "11", "11А", " 4", "4А", "6", "6А", "8", "8/11", "10", "12"]
    }, {
      name: "вул. Краматорська",
      number: ["40А", " 1/21", "2/20", "3", "4/1", "4/2", "5", "6/2", "7", "7А/1", "7А/2", "8", "9/9", "10/1", "10/2", "10А", "11", "11А", "12", "13", "13А", "14", "15А", "16", "17", "18", "19/1", "20", "23", "23А", "24", "25", "25/1", "26", "27/2", "28Б", "29", "29А", "30/1", "30/2", "31/1", "31/2", "32/1", "32/2", "33", "33А/1", "33А/2", "34", "35/2", "37", "38", "40/1", "40/2"]
    }, {
      name: "вул. Крамського Івана",
      number: ["4", "10", "14/34", "16", "19"]
    }, {
      name: "вул. Красилівська",
      number: ["2/3", "3", "4", "5", "6", "7", "7Д", "9", "11", "13", "17", " 4А", " 08 апреля"]
    }, {
      name: "вул. Красицького",
      number: ["52/1", "52/2", "52/33", "54", "56", "56А", "58", "58А", "58А/1", "60", "60А", "60Б", "62", "64", "64А", "64А/2", "66", "66/2", "66/3", " 3", "4/13-1", "4/13-2", "5", "6", "7/1", "7/2", "8/1", "8/2", "8А", "9", "11/1", "11/2", "12/1", "12/2", "13", "14", "15", "16", "17/1", "17/2", "18", "19", "20", "21", "21/1", "21/2", "22", "23/1", "23/2", "24", "25", "26/1", "28", "29", "30", "31", "33", "34", "34А", "34Б/1", "34Б/2", "35/1", "35/2", "36", "38/1", "38/2", "39", "40", "41", "43/1", "43/2", " 44", "44/2", " 36А/1", "36А/2", "38А", "39", "40А", "42", "46", "46А", "47", "49", "50А", "50/1", "50/2", "51/1", "51/2", "53А", "53/1", "55/1", "55/2", "57", "59", "59/2", "61", "61/3", "63", "65", "67", "69А", "71", "73", "75", "77", "79"]
    }, {
      name: "вул. Краснова Миколи",
      number: ["8", "8А", " 10", "12", "12А", "17", " 3", "5", "7/1", " 18/14", "22/16", "23", "25", "27", "28", "32", "33", "34/1", "36", "38", "48", "48А", "50", "51/1", "52", "54/2", "56/1", "60/25", "62/28", "64/1", "64А"]
    }, {
      name: "вул. Краснодарська",
      number: ["43/8", " 45", "47/1", " 20", "21", "21А", "22", "22А", "23", "24", "25", "26", "26А", "27", "28", "29", "30", "30А", "31", "32", "33", "33А", "34", "35", "36", "37", "38", "39", "40/29", "44", " 6А", "8", "8А", "9", "9А", "10/33", "11/35", "12/38", "13/40", "14", "15"]
    }, {
      name: "вул. Крастнокутська",
      number: ["3", "7/18", "9", "10/16", "11", "12", "13", "14", "15", "16", "17/15", "18/3"]
    }, {
      name: "вул. Кржижановського Академіка",
      number: ["3", "3Б", "4", "7", "8"]
    }, {
      name: "вул. Кривоноса Максима",
      number: ["27", "29", " 2А", "2Б", "2Г", " 4", "6", "7", "11", "19", "19А", "21", " 10", "12", "12А", "14", "25", " 05 января"]
    }, {
      name: "вул. Криворізька",
      number: ["11", "13/1", "13/2", "15", "16", "17/1", "17/2", "18", "19", "19/10", "20", "21/9", "22", "23", "24", "25"]
    }, {
      name: "вул. Крилова",
      number: ["1", "2", "2А", "2Б", "2В", "2Г", "3", "3А", "3Б", "3В", "4", "5", "5А", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", " 59", "60", "61", "62", "63", "64", "64А", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "80Б", "81", "82", "83", "84", "85", "86", "87", "99", "101"]
    }, {
      name: "вул. Кримська",
      number: ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "18", "20", "22", " 24/19"]
    }, {
      name: "вул. Кримського Академіка",
      number: ["3", "4", "4А", "27", "27А"]
    }, {
      name: "вул. Кринична",
      number: ["2", "3", "3А", "3/1", "4", "5", "6", "7", "8", "9/36", "10/1", "10/2", "11", "12", "13", "14/1", "14/2", "14А", "15", "16/1", "16/2", "17", "18", "19", "20/1", "20/2", "21/1", "21/2", "22", "23/1", "23/2", "24/1", "24/1А", "25/1", "25А", "27", "28", "29/1", "30", "32/1", "32/2", "34", "36", "36А", "38А"]
    }, {
      name: "вул. Кринична (Бортничі)",
      number: ["3", "6", "8", "9", "10", "13", "18", "20", "25", "26", "27", "29"]
    }, {
      name: "вул. Кричевського Федора",
      number: ["19", "20", "21"]
    }, {
      name: "вул. Кронштадтська",
      number: ["6А", "6А/1", "20", "20А", "22", "22/2", "24", "26", "28", "32/1А", "34", "36", "38/2"]
    }, {
      name: "вул. Кропивницького",
      number: ["3", "4", "6", "8", "10", "12", "14", "16", "18"]
    }, {
      name: "вул. Кругла",
      number: ["17", "19/1", "19/2", "19А", " 3", "3А", "5", "7/1", "7/2", "9", "11", "13", "15"]
    }, {
      name: "вул. Круглоуніверситетська",
      number: ["2/1", "2/1Б", "3/5", "4", "4Б", "6", "7", "8", "9", "10", "11/19", "12", "13", "14", "15", "16", "17", "18/2", "20/1", "22"]
    }, {
      name: "вул. Крута",
      number: ["2", "4"]
    }, {
      name: "вул. Крута (Бортничі)",
      number: ["1", "2", "2А", "4", "10", "11", "12", "13", "16", "24", "25", "26", "27", "28"]
    }, {
      name: "вул. Крутогірна",
      number: ["4/1", "4/2", "4А", "6/2", "7/1", "7/2", "8А", "13/1", "13/2", "15/1", "15/2А", "15А", " 18", "19", "20/21", "21", "25", "27", "29/8", "34/1", "35", "36", "37", "38/1", "38/2", "44", "45", "46/2", "47", "48/1", "48/2", "49", "50/1", "51", "52/3", "53/1", "53/2", "57/1", "57/2", "59", "61", "63", "65А", "67"]
    }, {
      name: "вул. Крушельницького",
      number: ["3/1", "3/2", "4", "5", "6", "7", "9", "10"]
    }, {
      name: "вул. Крушельницької Соломії",
      number: ["5", "5А", "7", "7А", "13", "15", "15А", "15Б", "15В", " 1/5", "3", "3А"]
    }, {
      name: "вул. Кубанська",
      number: ["11", "15"]
    }, {
      name: "вул. Кубанської України",
      number: ["25/21", "27", "29", "29А", "31", "31А", "33", "33А", "33А/1", "35", " 15/13", "17", "19", "19А", "21", "21/1", "21А", "21А/1", "23", " 1", "2", "4", "4корп1", "4корп2", "4корп3", "4корп4", "4А", "6А", "6А/1", " 20", "20/1", "20/2", "20/3", "20/4", "22", "24", "24А", "24Б", "26", "26А", "28", "30", "30/1", "30А", "45", "45А", "45Б", "45В", "47", "47А", "47Б", "49", "51", "53", "53/1", "53/2", "53/3", "53А", "55", " 37", "39", "39А", "41/28", "41/29А", "41А"]
    }, {
      name: "вул. Кудрявська",
      number: ["2", "5", "7", "8А", "8Б", "8В", "10", "10Г", "12", "16", "19А", "23", "23А", "23з", "23Р", "27/29", "31/33", "43", "47"]
    }, {
      name: "вул. Кудряшова",
      number: ["1", "2", "3", "4", "6", "15", " 5", "5А", "7", "7Б", "8/10", "9", "10А", "10Е", "12/14", "14", "14А", "14Б", " 16", "20", "20В", "20Г", "22"]
    }, {
      name: "вул. Кузбаська",
      number: ["2"]
    }, {
      name: "вул. Кузнєцова Миколи",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    }, {
      name: "вул. Кулібіна",
      number: ["3", "3/8", "5", "6", "9/2", "11", "11А", "11Б", "12", "14", " 2А", "4/2", " 6А"]
    }, {
      name: "вул. Купріна",
      number: ["1", "2", "3", "3А", "4", "5", "6", "7", "9", "10", "11", "12", "13", "15", "16/1", "16/2", "17", "22", "22/3", "24/1", "24/2", "24А", "26"]
    }, {
      name: "вул. Куп'янська",
      number: ["11", "13", "14/1", "14/2", "15", "16", "17", "18", "19", "20/1", "20/2", "21", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34/19", "35", "36", "37", "38", "39", "41", "43", "45", "112/40", " 1/8", "3", "8/1"]
    }, {
      name: "вул. Курбаса Леся",
      number: ["2А", "2Г", "5А"]
    }, {
      name: "вул. Курганівська",
      number: ["3", "4"]
    }, {
      name: "вул. Куренівська",
      number: ["8", "14Б", "27", "27А", "29А", " 16", "16А", "16В", "18", " 21", "21А", "21Г", " 2Б", "5/7", "15А", " 8", "14А", "14Б", "14Б/1", "14Б/2", "16", "16/1", "16/2", "16/3", "16А", "16А/1", "16А/2", "16А/3", "16А/4", "16А/5", "16А/6", "16А/7", "16Б", "16В", "16В/1", "16В/2", "16В/3", "16В/4", "16В/5", "16Г", "16Д", "18", "18/1", "18/2", "27", "27А", "27А/1", "27А/2", "29", "29А", "29А/1", "29Б", "29В", "29Г"]
    }, {
      name: "вул. Курінного Петра",
      number: ["1/23", "2", "3", "5", "7", "9", " 2А"]
    }, {
      name: "вул. Курнатовського",
      number: ["1А", "7А", " 3", "5", "5А", "5Б", "7", "9", "11", "11А", "11Б", " 17Б", " 15", "15А", "15Б", "17", "17А", "19", "19А", "20", "22", "24", "26", "26А", "28", "30", "32", "32А", " 2", "2А", "2Б", "2В", "4", "4А", "4Б", "4В", "6", "6А", "6Б"]
    }, {
      name: "вул. Курортна",
      number: ["4", "6", "8", "9", "10", "11", "13", "13А", "15", "16", "18", "20", "22", "22А", "22Б", "23", "24", "26"]
    }, {
      name: "вул. Курчатова Академіка",
      number: ["4", "6", "6А", "8", "8А", "8А/1", "8Б", "14А/1", " 14", "14/1", "14/2", "14А", "16", "18", "18/1", "18/2", "18А", "20", "22", " 3", "3А", "3Б", "5", "5/1", "5/2", "5/3", "7", "9", "9/1", " 11", "11А", "13", "15", "17", "19", "19А", "19А/1", "19А/2", "19А/3", "21", "21/1", "21А", "23", "23А", "25/27"]
    }, {
      name: "вул. Кутова",
      number: ["б/н"]
    }, {
      name: "вул. Кутузова",
      number: ["1", "1А", "1Б", "2", "3", "4", "5", "5А", "6", "7", "7А", "8", "9", "10", "11", "12", "13", "13А", "14", "15", "16", "17", "18", "19", "19А", "20", "21", "21А", "21Б", "21Г", "22", "23", "23А", "24", "24А", "25", "25А", "26", "27", "28", "29", "29А", "30", "30А", "31", "32", "33", "33А", "34", "35", "36", "37", "38", "39", "39А", "40", "41"]
    }, {
      name: "вул. Кучера Василя",
      number: ["2", "2А", "3", "5", " 4", "6", "7", "8", "10"]
    }, {
      name: "вул. Кучмин Яр",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "16", "18", "19", "20", "21", "22", "23", "24", "26", "30", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"]
    }, {
      name: "вул. Лабораторна",
      number: ["8", "9Б", "11", " 15", " 1", "3", " 26А", "28", "33/37"]
    }, {
      name: "вул. Лаврова Юрія",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52"]
    }, {
      name: "вул. Лаврська",
      number: ["2", "2А", "4", "4А", "4Б", "4В", "6", "8", "10", "12", " 1", "3", "5А", "7", "7А", "7Б", "9", "11", "11Б", "13", "15", "17", "19", "21", "23", "23В", "25", "27", " 14", "16", "18", "20А", "22", "24", "26", "28", "30", "32", "34", " 5", "2"]
    }, {
      name: "вул. Лаврухіна Миколи",
      number: ["7Б", "9", "11А", "13Б", "15/46", " 2", "3", "4", "5", "6", "7", "7А", "8", "10", "11", "12", "14", "16"]
    }, {
      name: "вул. Лазурна",
      number: ["2А", "4", "6", "8", "13", "14", "15", "15А", "16", "16А", "17", "17А", "18", "19", "22", "22Б", "23", "23А", "24", "24А", "24Б", "26", "32", "32А", "44", "48"]
    }, {
      name: "вул. Лауреатська",
      number: ["54А", "56", "58", "60", "61", "62", "62А", "66", "67", "68", "68А", "69", "69А", "70", "70А", "72", "73", "73А", "73Б", "73В", "74", "75", "76", "78", "80", "82", "84", "86", "86А", "86Б", "86В", "96Б", " 3", "5", "7", "8", "9", "10", "10А", "11", "12", "12А", "14", "14А", "15", "16", "17", "17А", "18", "18А", "19", "20", "20А", "21", "21А", "22", "23", "23А", "24", "24А", "25", "26", "27", "28", "29", "30", "30А", "32", "33", "34", "34А", "34Б", "35", "36", "36А", "37", "37А", "39", "39А", "39Б", "39Г", "39Д", "41", "41А", "42", "43", "43А", "45", "48", "50", "54"]
    }, {
      name: "вул. Лебедєва академіка",
      number: ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1Б", "32", " 3/1", "3/2", "5/1", "5/2", "7/1", "7/2", "9/1", "9/2", "11/1", "11/2", "19", "27", "31", "37"]
    }, {
      name: "вул. Лебединська",
      number: ["б/н"]
    }, {
      name: "вул. Левадна (Бортничі)",
      number: ["37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "82", "84", "86", "88", "90", "92", "94", "94А", "96", " 1", "1А", "2", "2Б", "2В", "2Г", "3", "4", "5", "5А", "6", "7", "7А", "8", "9", "9А", "9Ж", "10", "11", "11А", "12", "13", "14", "16", "16А", "17", "17Б", "18", "19", "20", "20А", "20Б", "20В", "20Д", "21", "22", "23", "24", "25", "25А", "26", "27", "27А", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "58", "60", "62", "64", "66", "68", " 70", "72", "74", "76", "78", "80"]
    }, {
      name: "вул. Левандовська",
      number: ["12", "14", " 3", "4", "5", "6", "8/15", "11", "13"]
    }, {
      name: "вул. Леваневського",
      number: ["8/7", "9", " 2", "4", "5", "6", "7", "33"]
    }, {
      name: "вул. Левітана",
      number: ["2/13", "3", "5", "6", "8"]
    }, {
      name: "вул. Левка Мацієвича",
      number: ["17/7", "19", "21/10", "24/10", "26", "28", " 2/4", "3", "5", "5/2", "6", "6/2"]
    }, {
      name: "вул. Лейпцизька",
      number: ["3", "3А", "5", "6", "11А", " 1А", "2/37", "12", "13", "13А", "14", "15", "16", " 15"]
    }, {
      name: "вул. Леонтовича",
      number: ["1", "3", "5", "6А", "7", "9", "11"]
    }, {
      name: "вул. Лермонтова (Бортничі)",
      number: ["64А", "65", "68", "70", "70А", "71", "72", "72А", "73", "74", "76", "76А", "82Б", "83", "86", " 1", "1А", "2", "3", "4", "5", "6", "6А", "7", "8", "9", "10", "11", "12", "12А", "12Б", "13", "14", "14А", "14Б", "15", "16", "17А", "18/1", "18/2", "19", "20", "21", "24", "25", "25А", "26", "26/1", "26/2", "27", "27А", "27Г", "27Д", "27Ж", "28", "28А", "30", "32", "34", "36", "38", "42", "44", "46", "48", "50", "52", "52А", "52Г", "54", "54В", "56", "56А", "58", "60", "62", "64"]
    }, {
      name: "вул. Лермонтова (Троєщина)",
      number: ["1", "2", "3", "4", "5", "6", "6Б", "7", "7А", "8", "9", "9А", "9Б", "10", "11", "11А", "12", "12А", "13", "14", "15", "16", "17", "18", "18Б", "19", "20А", "20Б", " 20", "21", "22", "24", "25", "25А", "26", "27", "28", "29", "30"]
    }, {
      name: "вул. Лермонтовська",
      number: ["3", "4", "14А"]
    }, {
      name: "вул. Лесі Українки",
      number: ["1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12/10", "13", "14", "14А", "14В", "14Г", "15", "15А", "17", "19", "19/2", "23"]
    }, {
      name: "вул. Лесі Українки (Троєщина)",
      number: ["1", "1А", "2", "3", "4", "5", "6", "7", "7А", "8", "9", "9А", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "20А", "21", "22", "22А", "23", "24", "24А", "25", "26", "27", "28", "29", "29А", "30", "31", "31А", "32", "33", "34", "35", "36", "37", "37А", "38", "38А", "40", "40А"]
    }, {
      name: "вул. Лєскова",
      number: ["1А", "3", "3А", "5А", "6", "8", "9", " 2", "4"]
    }, {
      name: "вул. Либідська",
      number: ["1А", "1Б", "2А", "4", " 6", "8", "10"]
    }, {
      name: "вул. Ливарська",
      number: ["1", "1А", "2", "5", "7"]
    }, {
      name: "вул. Липнева",
      number: ["б/н"]
    }, {
      name: "вул. Липова",
      number: ["3", "9", "24"]
    }, {
      name: "вул. Липська",
      number: ["3", "5", " 9", "9А", "9Б", "10", "11", " 12/5", "15", "15/7", "15А", "15Б", "15В", "16", "19/7", " 18 мая"]
    }, {
      name: "вул. Лисенка",
      number: ["1", "2", "2А", "3", "4", "4А", "5", "8", " 6"]
    }, {
      name: "вул. Лисичанська",
      number: ["1", "3", "5/1", "7/9", "8/12-1", "8/12-2", "8/12-3", "9/1", "9/2", "10/1", "10/2", "11/1", "11/2", "13/1", "13/2", "13/4", "13/5", "14", "15", "15А", "16", "18", "19", "19А", "20А", "20Б", "20В", "21", "22/1", "22/2", "22/3", "22/4", "23", "25", "27", "27А", "29", "31/1", " 33/1", "33/2", "33/3", "33/4", "33/5", "33/6", "33/7", "33/8", "33/9", "33/10", "35/1", "35/2", "35/3", "35/4", "35/5", "35/6", "35/7", "35/8", "35/9", " 2", "6", "6А"]
    }, {
      name: "вул. Лисогірська",
      number: ["4", "100", "102", "104", "106", "107", " 3", "5", "6", "7", "8", "9", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "29А", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "92", "94", "96", "98"]
    }, {
      name: "вул. Листопадна",
      number: ["1А", "1Б", "1/16", "2", "2А/14", "3", "4", "5/1", "5/2", "6", "7", "8", "9", "10/1", "10/2", "11", "11А", "12/1", "12/2", "13", "14", "15", "16", "17/1", "17/2", "17А", "18", "18/6", "19/1", "19/2", "19/3", "20/7", "21/1", "21/2", "22", "24", "24/1", "25", "27", "28", "29", "30", "31", "32", "33", "34", "34Б", "35", "36", "37", "38", "39", "40/1", "40/3", "41/1", " 40", "41/2", "42", "43", "44", "45", "46", "47", "47/1", "48", "49", "51", "53", "55/1", "55/2", "57"]
    }, {
      name: "вул. Лисянська",
      number: ["2/1", "2/2", "4/1", "4/2", "6", "8", "12", "14/1", "14/2", "16"]
    }, {
      name: "вул. Литвиненко-Вольгемут",
      number: ["1Б", "1В", "1Г", " 2", "2А", "3", "3А", "5", " 4", "4Г", "5А", "5Б", " 1", "1А"]
    }, {
      name: "вул. Личанська",
      number: ["б/н"]
    }, {
      name: "вул. Лінійна",
      number: ["7", "15", "17", "17Б"]
    }, {
      name: "вул. Лісківська",
      number: ["2/71", "4", "4А", "4Б", "6", "6А", "8/24", "8А", " 5", "5А", "7", "7А", "7Б", "9", "9/22", "9А", " 12", "12/1", "13А", "14", "16", "18А", "18Б", "18В", "20", " 22", "23", "24", "26", "28", "28А", "30", "32/51"]
    }, {
      name: "вул. Лісна",
      number: ["13", "13А", "21", "23", "23А", "25", "27", "28", "28А", "29", "30", "30А", " 39", "53", "55", "58", "60А", "62", "63/65", "64", "64А", "66Б", "66В", "66/14", "68", "75"]
    }, {
      name: "вул. Ліснича",
      number: ["3", "13/15", "19", "19А", "23", "25", "25А", "28", "29", "30", "30А", "30В", "33"]
    }, {
      name: "вул. Лісова (Бортничі)",
      number: ["2", "4", "6", "6А", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "62А", "64", "66", "68", "68А", "70", " 76А", "76Б", "76В", "76Д", "76К"]
    }, {
      name: "вул. Лісова-Козинська",
      number: ["8"]
    }, {
      name: "вул. Лісозахисна",
      number: ["1", "1А", "2", "2А", "2Б", "2В", "2Г", "4", "4/2", "4А", "4Б", "4В", "7", "9", "11/1", "11Б"]
    }, {
      name: "вул. Лісорубна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54"]
    }, {
      name: "вул. Літинська",
      number: ["1Б", "1В", " 3", "4", "5", "7", "7А", "9", "11", "11Б", " 1А"]
    }, {
      name: "вул. Літня",
      number: ["25"]
    }, {
      name: "вул. Лобачевського",
      number: ["23", "23А", "23/4Б", "23В", " 2"]
    }, {
      name: "вул. Лодигіна",
      number: ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15/2", "16", "17", "18", "19", "20", "21"]
    }, {
      name: "вул. Локомотивна",
      number: ["1", "3", "4", "5", "6", "8", "10", "11", "12", "13", "14", "17", "19", "21", "25", "28", "28А", "29", "33", "35", "36", "37", "37А", "38", "40", "42", "44", "46", "50", "52", "54", "58"]
    }, {
      name: "вул. Ломоносова",
      number: ["30", "30/1", "30/2", "30/2А", "34", "34А", "34/1", "34/1А", "34/2", "34Б", "36", "36/1А", "36А", "36Б/1", "36В", "38", " 35", "35/1", "37", "37/2", "39", "39/13", "41", "43", "43/12", "45", "45/11", "47", "49", "51", "53", "55", "55А", "57", "59", "61", "63", "65", "67", "69", " 22/15", "24", "26", "28/41", "28А", "28/41А", "28/41Б", "28/41В", "28/41Г", "28/41Д", "28/41Ж", "28/41З", "28/41К", "28/41Л", "28/41М", "33/1", "33/43", "33/43корп1", "33/43корп2", "33/43корп3", "33/43корп4", "33/43корп5", "33/43корп6", "33/43корп9", "33/47корп7", " 18", "18А", " 5/3", "7", " 5/1", "5/2", " 4", "8", "8Б", "10", " 27", "29", "29Б", "31", "31/1", "31/2", " 11", "15/5", "19/11", " 46/1", "48", "48А", "50/2", " 52/3", "52А", "54", "54А", "56", "58", "58А", "60/5", "60А", " 71Б", "71В", "71Г", "71Д", "71Е", "71З", "73А", "73Б", "73Г", "73Д", "73Е", "73Ж", "75", "75А", "77", "79", "81", "81/1", "81Б", "81В", "83А", "85", "85А", "85Б", "87Б", "87В"]
    }, {
      name: "вул. Лохвицька",
      number: ["2", "14", "48", "50", "56/12"]
    }, {
      name: "вул. Лубенська",
      number: ["1", "2", "3", "4", "4А/1", "4А/2", "5", "5А", "5Б/1", "5Б/2", "6/1", "6/2", "7/1", "7/2", "8", "8/7", "10А", "12", "13", "14", "15", "16", "17", "18", "19/1", "19/2", "21", "23/1", "23/2"]
    }, {
      name: "вул. Луганська",
      number: ["1", "2", "3", "3В", "3Г", "5", "6", "7", "9", "11", "13", "14/1", "14/2", "15", "16", "17", "18", "19", "20/1", "21", "20/2", "22", "23", "26/1", "26/2", "27", "29", "30", "31", "33", "34", "35", "36", "36/1", "40/1", "46"]
    }, {
      name: "вул. Лугова",
      number: ["1", "1А", "9", "9Б", "9В", "9Г", "9Е", "9П", "9С", "9Ю", "11А", "12", "13", "13А", "15", "15А", "16"]
    }, {
      name: "вул. Лугова (Бортничі)",
      number: ["1", "1А", "2", "3", "4", "5", "6", "7", "8А", "8Б", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24Б", "24В", "25", "26", "27", "27/1", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "46", "47", "48", "49", "50", "51", "52", "53", "53А", "55", "56", "57", "58", "59", "60", "60/1", " 61", "62", "63", "64", "65", "65/1", "66", "67", "68", "68/1", "69", "70", "70А", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82"]
    }, {
      name: "вул. Лугова (Жуляни)",
      number: ["44", "44А", "45", "46", "46А", "47", "48", "49", "49А", "49З", "50", "52", "52А", "53", "55", "55А", "57", "59", "61", "63", "65", "67", "69", "71", "73", "73А", "73Б", "75", "75А", "75Б", "75В", "77", "79", "81", "83", "85", "87", " 1", "1Б", "1В", "1Г/2", "2", "2А", "3", "3А", "3Б", "3В", "4", "5", "6", "7", "8", "9", "10", "11", "11А", "12", "12А", "13", "14", "15", "16", "17", "18", "18А", "19", "20", "21", "22", "22А", "23", "24", "24А", "25", "26", "26/1", "27", "28", "28А", "29", "30", "30А", "31", "32", "33", "33А", "34", "35", "36", "37", "38", "39", "39А", "40", "40А", "41", "42", "43", "43А"]
    }, {
      name: "вул. Лукаша Миколи",
      number: ["3", "4/1", "4/2", "5", "6", "7", "9/2", "10/1", "10/3", "11", "13", "14/1", "14/2", "15/1", "15/2", "17/1", "17/2", "17/3", "19"]
    }, {
      name: "вул. Луківська",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36"]
    }, {
      name: "вул. Лук'янівська",
      number: ["14А", "16", "21", "23", "25", "27", "46", "62", "63", "65", "67", "69", "71", "77/69", "79", "81", " 1", "1А", "5", "7", "9", "11", "13"]
    }, {
      name: "вул. Лупиноса Анатолія",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10А", "11", "12", "13", "13А", "14", "15", "16", "16А", "17", "18", "18А", "19", "19А", "20", "20А", "21", "22", "23", "23А", "24", "25", "25А", "26", "26А", "28", "28А", "29", "30", "31", "32", "33", "34", "34/1", "35", "36", "37", "37/2", "38", "38А", "39"]
    }, {
      name: "вул. Луценка Дмитра",
      number: ["1", "1/1", "1/2", "1Б", "5", "5/1", "5/2", "5Б", "8", "8А", "9", "9А", "10", "10А", "11", "12", "12А", "14", "14А", "15", "15А", "16"]
    }, {
      name: "вул. Львівська",
      number: ["1", "1/9", " 2/4", "3", "6/3", "7/9", "8/6", "11", "12", "14", "18А", "18Б", "18В", "22", "22А", " 19", "24", "26А", "37", "41", "45/7", " 23", "25", "38/1", "38/2", "40", "42", "46", "48/7", " 47/8", "49", "51", "53А", "55", "57А", "59", "59А", "80", "82", "84"]
    }, {
      name: "вул. Любарська",
      number: ["2", "2/1", "22", "33", " 1", "3А", "3Б", "5", "5/1", "7"]
    }, {
      name: "вул. Любимівська",
      number: ["б/н"]
    }, {
      name: "вул. Любомирська",
      number: ["3", "4А", "9", "11", "12", "12А", "14", "16", "16А", "17", "17А", "18", "18А", "18Б", "19", "19А", "19Б", "20", "20А", "21", "22", "22А", "22Б", "22/1", "23", "23А", "24", "25", "25Б", "25В", "26", "30", "32", "33/2", "33/27", "34", "36", "46"]
    }, {
      name: "вул. Люботинська",
      number: ["1А", "1А/2", "1Б"]
    }, {
      name: "вул. Лютеранська",
      number: ["09 сентября", " 3", "4", "6", "6Б", "7/10", "8", " 9/9", "10", "10А", "11", "11Б", "12", "13", "14", "15", "16", "17", "17А", "18", "18/20", "19", "20", "21", "21/12", "22", "23", "24", "25", "26/17", "27/29", "28/19", "28А", "33", " 30"]
    }, {
      name: "вул. Лютнева",
      number: ["1", "1А", "1/6", "1Б", "3", "9", "10", "11", "12", "13", "15", "15А", "17", "18", "19", "20", "21", "22", "22А", "23", "23А", "24", "24А", "25", "26", "27", "27А", "28", "28А", "29", "29А", "29Б", "31", "35", "35А", "37", "37А", "39", "39А", "41", "41Б", "45", "45А", "49А", "49Б", "49В", "53", "53В", "57", "57А", "57Б", "58", "58А", "58Г", "59", "59А"]
    }, {
      name: "вул. Лютнева (Бортничі)",
      number: ["1", "2", "3", "4", "4А", "5", "6", "6А", "7", "8", "9", "10", "10А", "11", "12", "13", "14", "15", "15А", "16", "17", "18", "20", "21", "22", "23", "24", "25", "25А", "26", "27", "28", "29", "30", "30А", "31", "32", "33", "34", "34А", "36"]
    }, {
      name: "вул. Лятошинського композитора",
      number: ["2", "2А", "2Б", "2Б/1", "2Б/2", "2Б/3", "2Б/4", "2Б/5", "4", "4А", "4Б", " 8", "8А", "12", "12/1", "12/2", "12/3", "14", "14/1", "14/1А", "14/2", "14/3", "14/4", "14/5", "14/6", "14/7", "14/8", "14/9", "14А", "14АлітБ", "14Б", "18", "18/1", "18/2", "18/3", "18/4", "18/5", "18/6", "18А", "18Б", "22", "24", "24/1", "24/2", "24/3", "24/4", "24/5", "24/6", "24/7", "24/8", "24А", "24Б", "26А", "26Б", "26В", "26Г", "28"]
    }, {
      name: "вул. Магістральна",
      number: ["16/1", "16/2", "18", "19/1", "19/2", "20", "21", "22", "23/1", "23/2", "23/3", "24", "25", "27", "28", "29", "30А", "31/1", "31/2", "32", "33", "34", "36", "38/1", "38/2", "39", "41", "43", "44", "46", "50", "50А", "50Б", "51", " 1", "3", "4", "5/1", "5/2", "6", "7", "7А", "8/1", "8/2", "9", "10А", "10/1", "10/2", "11/1", "11/2", "12"]
    }, {
      name: "вул. Магнітогорська",
      number: ["1", "1Д", "1Е", "1Ч", "2", "2А", "3", " 1А", "1Б", " 1А"]
    }, {
      name: "вул. Мазепи Івана",
      number: ["1", "3", "3Б", "4/6", "7", "9", "11", "11Б", "12", "12А", "13", "13А", "16", "16А", "18/29", " 14", " 2", "6", "6Б", "6В", "10", "10А", "12Б"]
    }, {
      name: "вул. Майбороди Платона",
      number: ["5/9", "8", "19", "21", "23", "25", "32"]
    }, {
      name: "вул. Майкопська",
      number: ["14А", " 15/1", "15/2", "17", "19", "21", "23/1", "23/2", "23/5", "25", "27/1", "27/2", "27/3"]
    }, {
      name: "вул. Макаренка",
      number: ["05 августа", " 4", "6", " 1А", " 3"]
    }, {
      name: "вул. Макаренка (Троєщина)",
      number: ["1", "2", "2А", "3", "4", "4А", "5", "6", "6А", "6Б", "6В", "6Г", "7", "8", "8А", "9", "9А", "10", "11", "11А", "12", "12А", "12Б", "13", "15", "15А", "16", "17", "17А", "18", "19", "19А", "20", "20А", "21", "21А", "23", "23А", "25", "25А", "27", "27А", "29", "31", "33", "35", "37", "39", "41", "41А", "43", "43А", "45", "47", "47А", "49", "51А", "51Б", "51В", "51Г", "51Д", "51Е", "51Ж", "51К", "51Л"]
    }, {
      name: "вул. Макарівська",
      number: ["1", "4", "5", "10", "12", "13", "17", "18", "25"]
    }, {
      name: "вул. Макіївська",
      number: ["2", "3", "4", "4А", "5", "6", "9", " 2", "4", "4А", "6", " 7", "8", "10", "10А", " 17", "19", "23", "23/1", "27"]
    }, {
      name: "вул. Максименка Федора",
      number: ["3", "3А", "5", "5А", "5Б", "9", "11", "13", "15", "17", "21", "21А", "21Б", "26", "28", "30", "32", "34", "40", "40В", "42", "42А", "42Б", " 4", "4А", "6", "10", "12", "14", "16", "18", "20", "20А", "24А", " 33", "34", "35", "38А", "39", "40", "40В", "41", "41А", "42", "42А", "42Б", "43", "43А", "60", "62", "64", "68", "70А", "74", "74А", "74В", "74Г", "76", "76А", "76В", "78", "78А", "80", "80А", "82", "84", "84А", "86", "88", "88/2"]
    }, {
      name: "вул. Максимовича Михайла",
      number: ["3", "3А", "3А/1", "3А/2", "3А/4", "3В", "3Г", "3Г/1", "3Д", " 2", "2/1", "4", "4/1", "6", " 5", "7", "7/1", "7А", "7Б", "7В", "8", "9", "9А", "9Б", "9В", "9В/1", "10", "10/1", "10/2", "22", "22/1", "24", "24/1", "24/2", "24/4", "24/5", "24/6", "26", "28", "28/1", "32", "32А", "34"]
    }, {
      name: "вул. Мала Житомирська",
      number: ["3", "3/4", "3А", "5", "6", "6/5", "6А", "6В", "7", "8", "9", "9Б", "10", "11", "12", "13", "13/6", "14", "15", "15А", "15Б", "16", "16/3", "17", "18", "18А", "18Б", "19", "20", "20А", "20Б", "20В", "20Г", "20Д", "20Е"]
    }, {
      name: "вул. Маланюка Євгена",
      number: ["101", "101А", "112", "114", "114А", "114Б", "115", " 55", "55А", "55Б", "57", "60", "71", "71А", "75А", "75Б", "76", "77В", "84", "92", "96А", "98А", "100", "100/1", "101", "102", "104", "104/1", "104/3", "106", "106А", "108", "109А", "110", "110А", "111", "112", "113"]
    }, {
      name: "вул. Малевича Казимира",
      number: ["8", "24", "32", "40", "42", "48", " 79", " 86", "107", "111", "119", "127", " 11", "13", "15", "17", "31", "66", "84", "86", "86А", "86Б", "86Г", "86Д", "86Е", "86Л", "86Н", "87", " 83", " 37/41", "47/49", "53/3"]
    }, {
      name: "вул. Малиновського Маршала",
      number: ["10/24А", "10/24Б", "10/24В", "10/24Г", "10/24Д", "10/24Е", "10/24Ж", "10/24З", "10/24И", " 19А", "19А/1", "21", "23", "23/1", "25", "25/1", "25/2", "25/3", "25А", "25А/1", "25Б", "25В", "25Г", "25Д", "27/23", "27А", "27Б", "27В", "27Г", "28", "28А", "28Б", "28Б/1", "30", "30А", "30Б", "32", "32А", "32Б", "34", "34/1", "34/2", "34/3", "34/4", "34/5", "34/6", "34А", "36", "36А", "36Б", " 1", "1/1", "1А", "1Б", "3", "3/1", "3/2", "3А", "3Б", "5", "7", "9", " 2", "2А", "4", "4А", "4Б", "4В", "4Г", "5/1", "5/2", "5/3", "5/4", "5/5", "5/6", "5/7", "5/8", "5А", "5Б", "6", "6/1", "6А", "6А/1", "6Б", "7А", "7А/1", "8", "8/1", "8/2", "9/1", "9/2", "10", "11", "11/1", "11А", "11Б", "11В", "12", "12/1", "12А", "13", "13А", "13Б", "13В", "15/3", "15/3А", "15/3Б", "15/3В", "15/3Г"]
    }, {
      name: "вул. Малинська",
      number: ["1", "1А", "2", "2А", "3", "4", "4А", "12", "16", "16А", "18", "20", "20А", "22", "34", " 6"]
    }, {
      name: "вул. Малишка Андрія",
      number: ["1", "2", "3", "3Д", "4", "5", " 6", "9", "11", "12", "13", "13А", "15", "15/1", "15/1А", "15А", "17", "19", "19А", " 4А", "21", "21А", "21Б", "23", "25", "25/1", "27", "29", "29А", "31", "31А", "31Б", "33", "33А", "35", "37", "39"]
    }, {
      name: "вул. Малоземельна",
      number: ["1А", "2", "3А", "3Б", "4", "5", "6", "6А", "6Б", "7", "9", "9А", "10", "11", "11А", "11Б", "11В", "11Г", "12", "14", "14А", "14Б", "15", "15А", "17", "18", "19", "19А", "20А", "25", "27", "27А", "27Б", "28", "33", "34", "34А", "35", "37", "38", "38А", "38Б", "38В", "39", "39/1", "39/3", "75", "75А", "75Б", "75В", "75Г", "75Д"]
    }, {
      name: "вул. Малокитаївська",
      number: ["3", "7", "7А", "29", "39", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "63А", "64", "65", "66", "67", "68", "69", "70", "71", "73", "74", "76", "78", "80", "82", "84", " 4", "8", "10", "10А", "28", "30", "32", "34", "36", "38", "40", "42", " 6", "24/15"]
    }, {
      name: "вул. Малопідвальна",
      number: ["1/7", "2/9", "3", "4", "4Б", "6", "8", "10", "12/10", "15", " 21 августа", " 16", " 5"]
    }, {
      name: "вул. Мальовнича",
      number: ["2", "2А", "4", "6", "8", "10", "10А", "12/1", "12/2", "14", "16", "17", "18/1", "18/2", "19", "20", "22/1", "22/2", "24", "26А", "28", "36", "42", " 1", "5", "9", "9/2", "11", "13", "15", "15/1", "15А", "27", "27/1", "29", "29/2", "31", "31/2", "33", "39", "39/2", "43", "45", "45К", "48", "51", "53", "55", "55/2", "57", "59", "61"]
    }, {
      name: "вул. Марганецька",
      number: ["9", "26", "26А", "73/2", "75", "75/2", "77", "79", "81", "81А", "83", "85", "85/2", "87", "89", "91", "93", "95", "97", "99", " 1", "1/2", "3", "3А", "5/1", "7", "7/2", "9А", "11", " 12", "14/1", "16/16", "23", "23/2", "23А", "25", "25/1", "25/2", "27", "29/1", "31/18", "33", "35", "35А", "37", "39/1", "39/2", "41", "41/2", "43/2", "43/3", " 22", "24", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "67/2", "69", "71", " 10", "11А", "11Б", "12/8", "13/2", "13А", "13Б", "15", "15А", "17/9", "19", "19/14", "21", "21А"]
    }, {
      name: "вул. Маричанська",
      number: ["13", "15", "16", "18", " 3", "5", "7", "9", " 4", "6/6", "8", "10", "10А", "11/8", "12/1", "12/2"]
    }, {
      name: "вул. Марії Капніст",
      number: ["2", "2А", "4", "8/4", "10", "10А"]
    }, {
      name: "вул. Марка Вовчка",
      number: ["6", "8", "10А", "12", "12/14", "14", "16", "16Б", "16В", "18", "18А", "21"]
    }, {
      name: "вул. Маркса Карла (Бортничі)",
      number: ["2", "2А", "3", "3Б", "4", "4А", "4Б", "5", "5А", "6", "6Б", "7", "7А", "8/1", "8Б", "8В", "9", "10", "10А", "11", "12", "14", "16", " 13", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "32А", "33", "33А", "34", "36", "38", "40", " 35", "37", "39", "41", "41/1", "41/2", "42", "43", "44", "45", "45А", "46", "47", "47А", "47Б", "48", "48А", "49", "50", "51", "51/1", "52", "53", "54", "55", "56", "57", "58", "58А", "59", "59/2", "60", "61", "62", "62/2", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "76", "78"]
    }, {
      name: "вул. Маркса Карла (Жуляни)",
      number: ["61", "62", "63", "64", "65", "66", "66А", "67", "67А", "68", "69", "70", "70А", "72", "73", "74", "75", "75А", "76", "77", "78", "79", "79А", "80", "80А", "80Б", "81", "82", "83", "84", "85", "86", "87", "88", "88А", "89", "90", "90А", "91", "91А", "92", "93", "93А", "94", "95", "96", "97", "97А", "97Б", "98", "99", "100", "101", "102", "102А", "104", "106", "106А", "106Б", "108", "108Б", " 1", "2", "2А", "3", "4", "5", "6", "6А", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19А", "19Б", "20", "21", "22", "23", "24", "25", "25А", "26", "26А", "27А", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38А", "39", "39А", "40", "41", "42", "43", "43А", "44", "44А", "45", "45А", "46", "47", "47А", "48", "48А", "49", "50", "51", "52", "53", "53А", "53Б", "54", "54А", "55", "56", "57", "58", "58А", "59", "59А", "60", "60/1"]
    }, {
      name: "вул. Маркса Карла (Троєщина)",
      number: ["32", "34", "36", "38", "40", "41", "42", "43", "44/1", "44/2", "44/3", "45", "45А", "46", "47", "48", "48А", "49", "50", "50А", "51", "52", "53", "54", "55", "56", "56А", "56Б", "57", "57А", "58", "59", "60", "60А", "61", "61А", "63", "63А", "65", "67", "69", "71", "73", "75", "75А", "77", "79", "79А", "81"]
    }, {
      name: "вул. Мартиросяна",
      number: ["15", "17", "17А", "18", "19", "20", "22", "22А", "23", "25", " 1/8", "2/6", "3", "4", "5", "6", "8", "10/22", "11", "12", "13", "14", "16/14"]
    }, {
      name: "вул. Маршака",
      number: ["35", "35А", "36", "37/1", "37/2", "37/3", "38", "40", "41", "41/2", "42", "43", "44", "46", "47", "48", "49", "50", "52", "54", "56", "58", "60", "62", "64", "66", " 3", "6", "8", "10", "10/1", "12", "12А", "13", "14", "15", "15/1", "17", "17/1", "19", "19/1", "19А/1", "19А/2", "21", "21/2", "22", "23", "25", "26", "27", "28", "29", "29/1", "29/2", "29/3", "30/12", "30/12-2", "31/2", "32", "32/1", "33", "33/1", "34"]
    }, {
      name: "вул. Маршальська",
      number: ["1/8", "5", "6", "6/2", "7", "7/2", "9", "10", "12", "14", "16/1", "16/2", "18/21", "20", "22", "22/2", "83/1"]
    }, {
      name: "вул. Маслівка",
      number: ["1", "1А", "4", "7", "7А", "7Б", "12", "12А", "16", "20", "20А", "21", "21А", "21Б", "21В", "21Г", "21Д", "21Є", "26", "27", "27А", "27Б", "28", "28А", "28Б", "28В", "28Г", "28Д", "28Ж", "29", "29А", "30", "30А", "30Б", "31", "31А", "31Б"]
    }, {
      name: "вул. Маслюченко Варвари",
      number: ["1", "1А", "3", "3Б", "5", "6", "7", "7/1", "7/2", "9", "11", "13", "15", "17", "17/1", "19", "21", "23", "25", "26", "27", "28", "28А", "29", "31", "37", "39", "41", "43", "45", "47", "49", "51", "53"]
    }, {
      name: "вул. Матеюка Миколи",
      number: ["2", "2А", "2Б", "4", "4/1", " 3", "5", "5А", "5Б", "7", "9", "11", "13", "13/1", "13А", "15", "15А"]
    }, {
      name: "вул. Матикіна генерала",
      number: ["2", "3", "4", "5", "6", "8", "9", "10", "11", "11А", "14", "15", "17", "18"]
    }, {
      name: "вул. Матросова Олександра",
      number: ["1/1", "1/2", "1/3", "2/12", "3", "4", "4А", "5", "6", "6А", "7", "8/1", "8/2", "8А", "9", "9А", "10", "11", "12", "13", "14", "16/18", "17А", "17/1", "17/2", "19", "20", "21", "22/1", "22/2", "23", "24/7", "25/1", "25/2", "25/3", "27", "29", "31", "31А"]
    }, {
      name: "вул. Машиністівська",
      number: ["1Б", "2", "2Б", "3", "3А/3", "4", "6", "7", "7А", "9", "9А", "10", "11", "13", "15", "19", "21", "23", "25", "29"]
    }, {
      name: "вул. Машинобудівна",
      number: ["8", "11", "13", "14", "15", " 21Б", "24", "25", "27", "32/22", " 38", "40", "42", "44", "46", "48", "50", " 21", "21А", "34", "36", " 35А", "37", "41", "41Б", "50А", "50і", "50К", "50М", "50Н"]
    }, {
      name: "вул. Маяковського",
      number: ["1", "2", "3", "4", "5", "5А", "6", "7", "8", "10", "12", "14", "16", "18", "20", "22", "22А", "24", "26", "26А", "28", "29", "30", "31", "32", "32А", "36", "38", "38А", "42", "42А"]
    }, {
      name: "вул. Медвинська",
      number: ["6", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "23", "24", "25", "26", "27"]
    }, {
      name: "вул. Медична (Жуляни)",
      number: ["1", "1А", "2", "2А", "2В", "3", "3А", "4", "5", "5А", "6", "6А", "7", "8", "8А", "9", "10", "10А", "11", "12", "13", "14", "15", "15А", "17", "19", "19А", "21", "23", "25", "27"]
    }, {
      name: "вул. Медова",
      number: ["1", "3А", "4А", "5", "5А", "7", "8", "10"]
    }, {
      name: "вул. Медоносна",
      number: ["1", "2", "3", "3/2", "4", "5", "6", "7", "8", "9", "10", "11", "11А", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "42", "44", "46", "48", "50", "50/2"]
    }, {
      name: "вул. Межигірська",
      number: ["1", " 2", " 46/24", " 25", "30", "32", "37", "39", " 28", " 55/20", "56/63", "57/17", "59", "61", "63", " 3", "5", "7", "8", "9", "10", "16", " 50", "52", "54", "56", " 11", "13/24", "15/35", "17", "19", "20/37", "21", "22", "23/22", "24", "24Б", "26/24", " 43", " 60", "76", "78", "82", "82А", "82Б", "83", "85", "87", "87А", "87Б"]
    }, {
      name: "вул. Межова",
      number: ["119", " 15", "17", "18", "19", "19А", "19Б", "20", "21", "21А", "23", "23А", "23Б", "25", " 11 декабря", " 12А", "22", "22А", "24", "26", " 3", "3А", "3Б", "3В", "4", "6", "8", "10"]
    }, {
      name: "вул. Межова (Жуляни)",
      number: ["б/н"]
    }, {
      name: "вул. Мейтуса композитора",
      number: ["4", "4А"]
    }, {
      name: "вул. Меліоративна",
      number: ["1", "2", "3", "4", "6", "9", "11"]
    }, {
      name: "вул. Мельниченка",
      number: ["1", "1А", "13"]
    }, {
      name: "вул. Менделєєва",
      number: ["39", "41", "43", "45", "45/3", "47", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", "75", "77", " 3", "5", "7", "8", "9", "10", "12", "17", "19", "21", "23", "25", "27"]
    }, {
      name: "вул. Металістів",
      number: ["2", "3", "4", "5", "6", "7", "7А", "8", "9", "10/1", "11", "11А", "12", "12А", "12Б", "12В", "13", "14", "15", "17", "20", "22"]
    }, {
      name: "вул. Метробудівська",
      number: ["1/35", "3", "4", "5", "5А", "6", "8", " 14 декабря", " 4А", "6А", "7", "10/11", "12", " 18", " 9/9", "11", "11А", "13/10"]
    }, {
      name: "вул. Метрологічна",
      number: ["1", "2", "2А", "4", "8", "10", "12", "14", "14/3", "14А", "14Б", " 7А", "7Б", "9В", "9Д", "11А", "11Б", "11В", "13", "15", "15А", "40Б", "40В", "40Г", "42", "42/1", "44", "44Б", "52", "52А", "54", "54А", "54Б", "56", "56А", "56Б", "58", "58А", "58Б", "109", "109А", "111", "113"]
    }, {
      name: "вул. Мечнікова",
      number: ["9", "9А", "9Б", "9В", "11", "11Г", "16", "16А", "18", "20", "22А", " 4/1", "5", "6", "7", "7А", "8", "10/2", "14/1", " 3", " 2"]
    }, {
      name: "вул. Микешина",
      number: ["4", "16"]
    }, {
      name: "вул. Микитенка Івана",
      number: ["23", "25", "27", " 9", "9А", "9Б", "9В", "11", "11А", "13", "15", "15А", "20", "21", " 3", "3А", "4", "4А", "5", "5А", "6", "7", "7Б", "7В"]
    }, {
      name: "вул. Микільсе лісництво",
      number: ["1", "2", "2/1", "2/2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    }, {
      name: "вул. Микільсько-Ботанічна",
      number: ["17/4", "27/29", "31", " 2", "4", " 3", "5А", "6/8", "7/9", "7/9А", "9", "10", "12", "14", "15", "15/17", "15/17А", "15Б", "17", "17/19"]
    }, {
      name: "вул. Микільсько-Слобідська",
      number: ["1А", "4А", " 2Б", "2В", "4В", "4Г", "4Д", "5", "6", "6Б", " 7", " 1", "2А", " 2", "4", "4Б", "6", "6/2", "6А", "6В", "6Д"]
    }, {
      name: "вул. Миколайчука Івана",
      number: ["4", "5", "5А", "6", "7", "7/1", "7/2", "7А", "8", "9", "9А", "9Б", "11", "11А", " 16", "17", "17/1", "17/2", "17Г", "19", "19/1", "19/2", "19А", "21", " 13", "13/1", "13/2", "13А", "15", "15/1", "15А", "15В", "17А", " 1А", "3", "3/1", "3А", "3Б", "5/1", "5/3"]
    }, {
      name: "вул. Миколи Голего",
      number: ["8", "12", " 2/6", "6", " 5", "7", "7А", "7Б", "18", "28А", "28/32"]
    }, {
      name: "вул. Милославська",
      number: ["2Б/1", "17", "17/23", "17А", "17А/1", "19", "19/1", "19А", "21", "21А", "25/2", "25А", "28", "74", " 1/2", "3", "3А", "5", "5/1", "5А", "5Б", "7", " 31", "31Б", "33", "33А", "35", "37", "39/48", " 23", "23А", "23Б", "23В", "23Г", "23Д", " 25", "27", " 32/51А", "41/15", "43", "45", "47", "47А", "49", "58", " 2", "2А", "2Б", "2В", "4", "4А", "6", "8", "8А", "8Б", "10", "10А", "12", "12А", "12Б", "16"]
    }, {
      name: "вул. Миронівська",
      number: ["30А/12-1", "30А/12-2", "31", "32", "33/1", "34", "35/12", "36", "37/1", "37/2", "38", "39", "40/1", "40/2", "41/1", "41А", "42", "43", "44", "45", "46/9", "47", "48", "49/9", "49А/12", "50", "51", "52", "53", "54", "55/1", "55/2", "56", "57", "58", "59", "60/1", "60/2", "61", "63", "63А", "63Б/1", "63Б/2", "64", "65/1", "65/2", " 1/17", "1А", "1Б/1", "1Б/2", "1В", "1В/ 23", "1Г", "2", "3", "4", "5", "6/1", "6/2", "7/1", "7/2", "8/1", "8/2", "9", "10", "11", "12/32", "13/1", "13/2", "14/25", "15/1", "15/2", "16", "17/1", "17/2", "18", "19/1", "19/2", "20/1", "20/2", "21", "21А", "22", "23А", "23/1", "23/2", "24", "25", "25/1", "25/2", "26", "27", "28/1", "28/2", "29", "30/7", " 66/1", "66/2", "67", "68", "69/1", "69/2", "70", "71/1", "71/2", "72/1", "72/2", "73", "74", "76/1", "76А", "78"]
    }, {
      name: "вул. Миропільська",
      number: ["8", "27/16", "29", "31", "31А", "35", "35А", "37", "37Б", "37В", "39", " 2", "4", "11", "13", "13А", "13Б", "15", "15А", "15Б", "17", "19", "21", "23/16", "25", " 1", "3"]
    }, {
      name: "вул. Миру",
      number: ["3", "101", "103", " 17", " 14", "19", "19А", "19Б", "19В", "19/4", "21", "24", "26", "28", "30", "34", "34А", "36", "36А"]
    }, {
      name: "вул. Миру (Троєщина)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13А", "14", "15", "16", "16А", "17", "18", "19", "19А", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "32", "34"]
    }, {
      name: "вул. Мисливська",
      number: ["7", "9", "11", "11А", "13"]
    }, {
      name: "вул. Мистецька",
      number: ["3/55", "5/24", "6", "7", "8", "9/11", "10/1", "10/2", "12/1", "12/2", "14", "15", "16", "17", "18", "19/1", "19/2", "20", "22", "26/6", "28/1", "28/2", "30", "30/2", "32/2", "34/1", "34/2", "38/2", "40", "42"]
    }, {
      name: "вул. Митрополита Андрея Шептицького",
      number: ["10", "12", "14", " 22", "22Б", "24", "57/1", "57/2", "64", "64А", "67", "68", "70", "72", "72/1", "74", "74А", "76", "76/2", "76/3", "78А", " 3А", "3Б", "3В", "3Г", "5", "7А", " 1/2", "1А", "1Б", "1В", "3", "7", " 2", "4", "4А", " 22В", "24Б", "24В", "24Г", " 16/4", "20", "20А", "22А"]
    }, {
      name: "вул. Митрополита Василя Липківського",
      number: ["1", "1А", "3", "5", "7", "9", "11", "13", "15", "17", " 22", "24", "26", "28", "30", "32", "34", "36", "38", "40", " 35А", "37", "37А", "37Б", "37В", "37Є", "39", "41", "43", "45", "45А", " 19", "21", "23", "25", "31", "33А", "35", " 23", "27/5", " 8", "14", "14/18", "16", "16А", "16Б", "16В"]
    }, {
      name: "вул. Митрополита Володимира Сабодана",
      number: ["1", "1А", "1Б", "1/1", "2", "2А", "2Б", "2В", "3", "4", "4А", "5", "6", "6А", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "16А", "16Б", "16В", "16Г", "16Д", "16з", "16М", "16Н", "17", "18", "18А", "18Б", "18В", "19", "20", "21", "22", "23", "23А", "24", "24А", "25", "25А", "26", "27", "27/12", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", " 40А", "41", "42", "43", "44", "45", "46", "47", "48", "48А", "49", "50", "50А", "52", "54"]
    }, {
      name: "вул. Митрофана Довнар-Запольського",
      number: ["9", "9/10", "11", "16", " 1", "3", "3/1", "3/2", "4", "4А", "4Б", "5", "6", "7А", "7/9", "8", "8А", "10", "10А", " 20 февраля"]
    }, {
      name: "вул. Михайла Омеляновича-Павленка",
      number: ["11", "13", "13В", "15", "18/20", "19", "19А", " 4", " 14 декабря", " 1", "3", "4/6", "5", "7", "11"]
    }, {
      name: "вул. Михайлівська",
      number: ["1/3", "5/6", "7", "9", "11", "11А", "13", "13Б", "15А", "15/1Б", "17", "19", "21", "21Б", "21Б/34", " 5", "12", "12В", "13В", "14", "15", "16", "17А", "18Б", "18В", "18К", "20", "20Б", "20В", "22", "22А", "22Б", "22В", "22Г", "22Д", "22Е", "24", "24А", "24Б", "24В/1", "24В/2", " 2", "6", "6А", "8", "8А", "12Б", "14А", "16А", "16Б", "18", "18А", " 2В"]
    }, {
      name: "вул. Мишуги Олександра",
      number: ["1", "1/4", "1А", "2", "3", "3А", "3Б", "3В", "4", "5", "6", "7", "7А", "8", "9", "9А", "10", "11", "11А", "11Б", "12"]
    }, {
      name: "вул. Міжнародна",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51"]
    }, {
      name: "вул. Мілютенка",
      number: ["20/1", "22", "24", "24/1", "24А", "24Б", "24Б/1", "24Б/2", "24Б/3", "26", "26А", "26Б", "28", "28/1", "28А", "28Б", "28В", "30", " 3", "5", "5А", "5Б", "5Б/1", "7", "7А", "7Б", "7Б/1", "7В", "7В/1", "9", "9А", " 10", "10А", "12", "12А", "14", "14А", "16", "18", "18А", "18Б", " 4корп1", "6", "6/1", "6А", "8", "8/1", " 11", "11А", "11Б", " 7/20", "7/20А", "7/20Б", "15", "15А", "17", "17/1", "17А", "17Б", "17В", "19", "19/1", "19/2", "19/3", "19/4", "19/5", "19/6", "19/7", "19/8", "19/9", "19/10", "19/11", "19/12", " 34", "34/1", "34/2", "34/3", "34/4", "34/5", "34/6", "34/7", "34/8", "34/9", "34/10", "34/11", "34/12", "36", "38", "38А", "40/16", "40/16А", " 21", "23", "23/1", "23/2", "23/3", "23А", "23Б", " 25", "29", "42", "42/1", "42/2", "42А", "44", "44/1", "44/2", "44/3", "44/4", "44А", "44Б", "46"]
    }, {
      name: "вул. Мініна",
      number: ["1", "2", "3", "4", "4А", "6", "8", " 10/33", "12", "14", "14А", "18", " 9"]
    }, {
      name: "вул. Мінська",
      number: ["1/16", "2/14", "3", "3/1", "3/2", "3/18", "4", "4/1", "4/2", "5", "5/15", "6", "7", "7/1", "7А/1", "8", "8/1", "8/2", "8А", "11/8", "13", "13/1", "13/2", "13/10", "14", "15/5", "15/9", "16", "18", "19", "19/1", "19А", "22", "24"]
    }, {
      name: "вул. Мірошниченко Євгенії",
      number: ["4", "5", "6/11", "10", "10А", "10Б"]
    }, {
      name: "вул. Міська",
      number: ["2", "2А", " 1", "4", "9"]
    }, {
      name: "вул. Місячна",
      number: ["б/н"]
    }, {
      name: "вул. Міцкевича Адама",
      number: ["1", "5", "6", "8", " 9", "1"]
    }, {
      name: "вул. Мічуріна",
      number: ["2", "4", " 48", "50", "57", "58", "59", "59А", "60", "61", "64", "65", "67", "70", " 45", "46/10", "47/1", "47/2", "47А", "49", " 5/1", "5/2", "5/3", "7", "8", "9/1", "9/2", "10А", "10/2", "13", "16", "17", "18", "18/1", "18/2", "19", "20", "21/1", "21/2", "21/3", "22", "24", "25/1", "25/2", "25/3", "26", "26А", "27", "28", "29", "30", "31", "32/1", "32/2", "34", "35", "36/1", "36/2", "37/1", "37/2", "37/3", "38", "38А", "39", "40", "41", "42/1", "42/2", "42/3", "43", "44/1", "44/2", " 2", "3", "4", "8"]
    }, {
      name: "вул. Мічуріна (Жуляни)",
      number: ["1", "2", "2А", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17А", "18", "19", "20", "21", "22", "23", "23А", "24", "25", "26", "27", "28", "30", "31/17", "32", "34", "36", "38", "40", "42", "44", "46"]
    }, {
      name: "вул. Мічуріна (Троєщина)",
      number: ["1", "2", "3", "4", "5", "6", "7", "7А", "9", "9А"]
    }, {
      name: "вул. Млинна",
      number: ["1", "1А", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"]
    }, {
      name: "вул. Млієвська",
      number: ["1Б", "1Б/1", "1Б/2", "2/1", "2/2", "3", "4", "5", "6", "7/1", "7/2", "8", "8А", "8Б", "9/5"]
    }, {
      name: "вул. Модзалевського Вадима",
      number: ["1", "2", "3", "4", "5", "5А", "6", "6А", "7", "8", "9", "9А", "9Б", "10", "11", "11Б", "13"]
    }, {
      name: "вул. Можайська",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "30", "32", "34", "36"]
    }, {
      name: "вул. Молдовська",
      number: ["2", " 3А", " 3", "5", "5А"]
    }, {
      name: "вул. Молодіжна",
      number: ["1", "3", "4", "5", "5А", "6", "7", "7А", "8", "8Б", "9А", "10А", "10Б", "10В", "11", "12", "14", "15"]
    }, {
      name: "вул. Молодогвардійська",
      number: ["20А", " 7Б", "22", "28", "28А", "32", "32А", "32Б", " 12", "15", "16", "20", " 9", "11"]
    }, {
      name: "вул. Молочанська",
      number: ["4", "6", "8", "8А", "10", "14", "21А", "23", "23А", "24", "24А", "25", "27", "27А", "28", "28А", "29", "30", "30А", "31", "31/11", "32", "33А", "35/12", "36", "36А"]
    }, {
      name: "вул. Монтажників",
      number: ["1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38А", "39", "40", "40А", "41", "42", "42А", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", " 92", "94", "98", "100", "102", "104", "106", "121", "123", "125", "127", "129", "131", "131А", "133", "133А", "133Б", "135", " 66", "67", "68", "69", "70", "70А", "71", "72", "73", "74", "75", "77", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "92", "93", "95", "97", "99", "101", "103", "105", "107", "109", "111", "113", "115", "117", "119"]
    }, {
      name: "вул. Моринецька",
      number: ["1", "1А", "1В", "1Д", "3", "4", "4/2", "5", "5/2", "5/3", "7/1", "7/2", "8", "9А", "9Б", "9/2", "9/3", "10", "10/1", "10/2", "11А", "11/6", "12", "12/2", "14/2", "14/3", "16", "18/1", "18/2", "20/8"]
    }, {
      name: "вул. Москвіна",
      number: ["4", "4/1", "6", "8", "10", "10А", "12", "14А", "14/2", "19", "19А"]
    }, {
      name: "вул. Москворецька",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
    }, {
      name: "вул. Московська",
      number: ["8Б", "8Е", "22", "24", "27", "29", "29А", "29Б", "30", "31/33", " 13", "15", "17", "17/2", "19", "23", "23А", " 2", "3", "5/2", "5/2Б", "8корпус30", " 45/1", " 36", "37/2", "38", "39", "39А", "40Б", "40В", "41/8", "42", "43/11", "44", "45/1корпус26", "45/1корпус33", "46/2", " 8", " 8"]
    }, {
      name: "вул. Московська (Жуляни)",
      number: ["1", "1А", "1Б", "2", "2А", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11А", "12", "13", "14", "15", "16", "16А", "17", "17А", "18", "19", "20", "20А", "21", "22", "22А", "23", "24/24А", "24А", "25", "25Б", "26", "27", "27А", "28", "28А", "28А/1", "28Б", "29", "29А", "29Б", "30", "30А", "30В", " 31", "31А", "32", "33", "34", "35", "35А", "36", "37", "38", "39", "40", "41", "42", "44", "44/1", "44А", "45", "45А", "46", "48А", "53", "59", ""]
    }, {
      name: "вул. Мостицька",
      number: ["2", "6", "6А", "8", "9", "10", "10/1", "11", "12", "14", "16", "16/2", "24", "26", " 17", " 20"]
    }, {
      name: "вул. Мостищанська",
      number: ["1", "3", "5", "5/2", "6", "7", "7/1", "8", "8А", "9", "10", "10А"]
    }, {
      name: "вул. Мостова",
      number: ["5", "9", "10", "11/1", "11/2", "12", "13", "14", "17", "19", "21", "21/1", "21/2", "22/1", "22/2", "23", "24", "26/1", "26/2", "27", "27А", "27/2", "29", "31/1", "33/1", "33/2", "33/3", "33/4", "35/1", "35/2", "57/1", "59", "61", "63", "65/43", "68", " 18", "41/1", "41/2", "43/1", "43/2", "43А", "43Б", "45", "47", "49", "51/1", "51/2", "51/3", "53"]
    }, {
      name: "вул. Мостова (Бортничі)",
      number: ["1", "2", "2Б", "3", "4", "5", "6", "7", "8", "10", "11", "11Б", "13", "14", "14А", "14Б", "14В", "15", "16", "17", "17А", "18", "19", "20", "21", "22", "23", "24", "25", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "68А"]
    }, {
      name: "вул. Моторна",
      number: ["6"]
    }, {
      name: "вул. Музичанська",
      number: ["б/н"]
    }, {
      name: "вул. Мукачівська",
      number: ["3/9", "4/7", "5А", "6", "8", "9", "14", "14А"]
    }, {
      name: "вул. Мурашка Миколи",
      number: ["4", "5", "6", "6А"]
    }, {
      name: "вул. Мурманська",
      number: ["1", "3", "3А", "5", "6", "6Г", "8", " 1корп1"]
    }, {
      name: "вул. Муромська",
      number: ["3", "3А", "5/34", " 6/1", "6/2", "8", "10/1", "10/2", "12А", "12/2", "14/1", "14/2", "16/36", "16/36Б", "18А/1", "18/2", "20", "22", "24/1", "24/2", "24А", "26", "26А", "28/1", "28/2", "30", "30А/1", "30А/2", "32", "32А", "36", "36А", "38/2", "40", "42/1", "42/2", "44", "44А", "46", "48/1", "48/2", "50", "52", "52А", "52/1", "54"]
    }, {
      name: "вул. М'ятна",
      number: ["3"]
    }, {
      name: "вул. Набережна",
      number: ["1", "1А", "3", "3А", "5", "5А", "5В", "7", "7А", "7А/1", "9", "9А", "11", " 2", "4", "4А", "6", "8", "10", "12", "14", "16", "18", "20", "24", "26", "28", "28А"]
    }, {
      name: "вул. Набережно-Корчуватська",
      number: ["12", "16", "18", "20", "24", "24/1", "26", "28", "30", "32", "32/1", "32/2", "34", "36", "38", "38/1", "40", "48", "60", "62", "86", " 136", "136Б", " 90", "92", "94", "96"]
    }, {
      name: "вул. Набережно-Лугова",
      number: ["1", "2", "2В", "2Л", "2Р", "2Я", "3", "3А", "4", "6", "7", "7Б", "9", " 8", "8А", "12", "12А", " 23", " 29"]
    }, {
      name: "вул. Набережно-Хрещатицька",
      number: ["11", "13", "13Б", "15/17", "17/18", "19/21", " 4А", "8А", "10", "10А", "10Б", "14", "14А", "25", "27", "31", "33", "35", "35А", "37", "39", "41", " 1", "3", "3А", "7", "7А", "9", "13/5"]
    }, {
      name: "вул. Навашина академіка",
      number: ["4", "9", "11", " 13"]
    }, {
      name: "вул. Нагірна",
      number: ["2", "4", "5", "6/31", "7", "8А", "8/32", "10", "12", "13/2", "14", "15", "16/13", "17", "18/16", "19", "20", "21", "22", "23", "24", "24/1", "25/27", "27", "27А", "27Б", "27В", "29", "47"]
    }, {
      name: "вул. Над'ярна",
      number: ["3", "4/6", "12"]
    }, {
      name: "вул. Назарівська",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23А", "25/3"]
    }, {
      name: "вул. Народна",
      number: ["3", "5", "6/22", "7/1", "9/2", " 8А", "8/15", "10/22", "11", "11А", "11Б", "11В", "12/19", "13", "15", "16/19", "18", "18/14", "19/20", "22/18", " 17", "21", "23", "24", "26/17", "27", "28/12", "30", "32", "34/2", "36/13", "38", "40", "41", "42/1", "42/2", "42/3", "42В/1", "42В/2", "43", "44", "45", "47"]
    }, {
      name: "вул. Народного Ополчення",
      number: ["1", " 3", "3А", "5", "5А", "9", "9А", "11А", "13", "14", "14А", "15", "16", "16А", "17", "18", "18Б", "18В", "19", "20", "21", "22", "23", "25", " 2", "4", "4А", "6", "7", "8", "12", "12А"]
    }, {
      name: "вул. Наумова Генерала",
      number: ["37", "37Б", "39", "41", " 1", "3", "6", "8А", "36", "42", "48А", " 19", "23А", " 13", "15", "17", "17А", " 23", "23Б", "23В", "25", "25А", "27", "31", "31А", "33", "35Б", "66", " 32А", "33А", "35А", "37А"]
    }, {
      name: "вул. Наумовича Володимира",
      number: ["7", "9", "17", "21", "25", "27", "29/1", "29/2", "29/3", "31", "33", "41"]
    }, {
      name: "вул. Нахімова",
      number: ["4", "4А"]
    }, {
      name: "вул. Некрасівська",
      number: ["1", "3", "6", "7", "8", "10/8"]
    }, {
      name: "вул. Некрасова",
      number: ["1", "2", "3", "3А", "3Б", "4", "4А", "5", "6", "7", "8", "8А", "9", "10", "10А", "12", "12А", "14"]
    }, {
      name: "вул. Нектарна",
      number: ["1", "1А", "1/1А", "2", "2А", "2Б", "3", "4", "5", "6", "7", "8", "8А", "8Б", "9", "11", "12", "12А", "14", "15", "15А", "15В", "16", "17", "18", "19", "19А", "20", "21", "22", "23", "24"]
    }, {
      name: "вул. Немировича-Данченка",
      number: ["2", " 5", " 1", " 14/13", "16", "16А"]
    }, {
      name: "вул. Нестайка Всеволода",
      number: ["1/18", "3", "3А", "5", "5А", "6", "8"]
    }, {
      name: "вул. Нестерова",
      number: ["3", "3/2", "5"]
    }, {
      name: "вул. Неходи Івана",
      number: ["3", "5", "7", "8", "10"]
    }, {
      name: "вул. Нечуя-Левицького",
      number: ["1", "1А", "3", "4", "5", "5А", "6", "7/2", "8", "8/1", "8/2", "8Б", "8Б/1", "9", "10/14", "11/10", "11А", "12", "13/5", "15/6", "16", "17", "17А", "18", "19", "20", "21", "22", "23", "24", "25", "26", "28", "30", "32", "34", "36", "38"]
    }, {
      name: "вул. Нивська",
      number: ["35/1", "35/2", "36", "36А", "36В", "36/38", "37", "39/1", "39/2", "40/1", "40/2", "40/3", "41/1", "42/49", "43/51", " 3/5", "6/1", "6/2", "6/3", "6/4", "7", "7А", "7Б", "10А", "12", "14", "16", "17/1", "17/2", "18", "19", "19А", "20", "20А", "21", "22/1", "22/2", "22/65", "23", "24/1", "24/2", "25/1", "25/2", "25А", "26", "27/1", "27/2", "27/3", "27/4", "28", "29/1", "29/2", "30", "31А", "31/2", "31А/1", "32", "32А", "33", "34"]
    }, {
      name: "вул. Нижній Вал",
      number: ["3", "7", "9", "13", "13Б", " 17", "19", "19Е", "21", "31А", " 29", "31", "33А", "33Б", "33В", "33Г", "35", "37/20", "41", "43", "49", "49А", "51", "53", "65", " 15А"]
    }, {
      name: "вул. Нижній Вал (Бортничі)",
      number: ["1", "3", "4", "4А", "5", "6", "8", "10", "12", "14", "14А", "16", "17А", "19", "20", "22", "24", "24А", "26", "28А", "28Б/1", "28Б/2", "30", "32", "34", "36", "40", "42", "44", "46"]
    }, {
      name: "вул. Нижньоключова",
      number: ["3", "12", "14"]
    }, {
      name: "вул. Нижньоюрківська",
      number: ["2", "3", "4", "5", "6", "8А", "9", "12", "13", "31", "37", "39", "47", "75А", "81"]
    }, {
      name: "вул. Ніжинська",
      number: ["16", "18", "20", "26", "27", "29", "29/1", "29/2", "29А", "29Б", "29В", "29Г", "29Д", "29Е", "30/1", "30/2", " 5", "7", "10", "12", "14"]
    }, {
      name: "вул. Ніколаєва архітектора",
      number: ["17", " 1/27", "3", "3А", "3Б", "3В", "5", "5А", "5Б", "7", "7А", "9", "9А", "11", "13", "13А", "15", "15А", "15Б", "15В"]
    }, {
      name: "вул. Нікопольська",
      number: ["16", "16А", "16Б", "18/1", "18/2", "19", "20", "21", "22", "22А", "22Б", "23", "24", "25", "27/2", "27/3", "29", "29А", "31", "33", "35"]
    }, {
      name: "вул. Німанська",
      number: ["2", "3", "4", " 6", "1", " 5", "7"]
    }, {
      name: "вул. Німецька",
      number: ["32 января", " 3", "3Б", "4", "5"]
    }, {
      name: "вул. Ніщинського Петра",
      number: ["5", "6", "8", "10", "12/2", " 12", "12/1"]
    }, {
      name: "вул. Нова",
      number: ["2"]
    }, {
      name: "вул. Нова (Жуляни)",
      number: ["1", "1А", "1А/1", "5", "7", "9", "10А", "11", "17", "20/1", "20А", "21/1", "22/1", "22/2", "22/3", "23/1", "24/1"]
    }, {
      name: "вул. Нова (Пирогово)",
      number: ["1"]
    }, {
      name: "вул. Новаторів",
      number: ["1А", "2А", "3", "4", "5", "5/1", "11", "11А", "13", "13/1", "13/2", "17", "17/1", "19/1", "22А", "22Б", "22В", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "37", "38", "39", "40", "40/1", "41", " 9"]
    }, {
      name: "вул. Новгородська",
      number: ["1", "3", "4", "5", "6", "11"]
    }, {
      name: "вул. Новикова-Прибоя",
      number: ["8", "9", "10", "10А", "10Б", "11", "12", "13", "14", "14А", "15", "16", "17", "18", "19", "21", "24", "26", "26А", "26Б", "26В", "30"]
    }, {
      name: "вул. Нововокзальна",
      number: ["3", "4А", "4Б", "5", "6А", "8", "19", " 17", "21", "37", "39", "41", "51", "53", "65", "67"]
    }, {
      name: "вул. Новогоспітальна",
      number: ["5", "5А"]
    }, {
      name: "вул. Ново-Дарницька",
      number: ["2/17", "2А", "3/15", "4", "5", "6", "7", "11", "13", "13", "14", "16", " 26", "26корп2", "28/9", "30", "32", " 15", "15/1", "15/1А", "17", "23/7", "27А"]
    }, {
      name: "вул. Новозабарська",
      number: ["2/6", "2/6А", "20", "21", "21А", "23"]
    }, {
      name: "вул. Новокодацька",
      number: ["22", "22Б"]
    }, {
      name: "вул. Ново-Корчуватська",
      number: ["1/18", "2/16", "3", "3А", "5", "6", "7", "9", "11", "12", "14", "15", "16", "18", "19", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"]
    }, {
      name: "вул. Новокостянтинівська",
      number: ["1", "2А", "4", "4А", "4Б", "8", "15", "18", "20", "22", " 1А", "1Б", "1В", "1Г", "3", "7", "8А", "9", "11", "12", "13/10", "22/15"]
    }, {
      name: "вул. Новомічурінська",
      number: ["1", "1А", "1Б", "2", "3", "4", "4А", "5", "6", "7", "8", "9", "10", "11", "12", "12А", "13", "14", "14А", "15", "15А", "16", "16А", "18", "18А", "20", "22", "24", "24А", "26", "26/1", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50"]
    }, {
      name: "вул. Новомостицька",
      number: ["15", "21", "21Б", "25", "25А", " 10", " 2", "2А", "2Б", "2В", "2Г", "3Д", "4", "6", "8", "27"]
    }, {
      name: "вул. Новопирогівська",
      number: ["29", "31", " 1", "2", "3", "4", "5", "6", "8", "8А", "8/2", "18", "19", "21", "23", "24", "25", "25/2", "26/1", "26/2", "27", "27/2", "28", "28Б", "30", "32", "33", "62", "62А", "64", "64А", "66", " 58", "58А"]
    }, {
      name: "вул. Новопольова",
      number: ["2", "4", "6", "8", "10", "12", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", " 85", "85А", "89/16", "93А", "94", "95", "96", " 73", "74", "75", "76", "77", "78", "79", "80", "81 82", "84", "86", "88", "90", "92", " 91", "93", "106", "106А", "106Б", " 2", "2А", "7А", " 97А", "97Б", "99", "99А", "99Б", "101", "101А", "101Б"]
    }, {
      name: "вул. Новорічна",
      number: ["8"]
    }, {
      name: "вул. Новоселицька",
      number: ["2/6", "3", "4", "5", "6", "7", "8", "9", "10", "12", "13", "15", "17", "19", "21", "23", "25", " 11"]
    }, {
      name: "вул. Новоукраїнська",
      number: ["1/3", "1/3А", "1А", "2", "2/6", "5", "24А"]
    }, {
      name: "вул. Оболонська",
      number: ["4", "5", "6", "7", "9", "12", "13/15", " 34", " 21", "23/48", "25/49", "29", "29А", "31", "35", "37", "37Б", "38", "41", "47"]
    }, {
      name: "вул. Оболонська набережна",
      number: ["21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", " 13", "15корп1", "15корп2", "15корп3", "15корп4", "15корп5", "15/1А", "17", "19корп1", "19корп2", "19корп3", "19корп4", "19корп5", "20", "20/1", " 1", "3корп1", "3корп2", "3корп3", "5", "7корп1", "7корп2", "7корп3", "7корп4", "7корп5", "9", "11корп1", "11корп2", "11корп3", "11корп4"]
    }, {
      name: "вул. Оборони Києва",
      number: ["б/н"]
    }, {
      name: "вул. Оборонна",
      number: ["2/1", "2/2", "2Б", "4", "5", "6", "8", "10", "12", "16"]
    }, {
      name: "вул. Обсерваторна",
      number: ["5", "7", "7А", "9", "13/15", "17", "19", "21", "21А", "23", "25"]
    }, {
      name: "вул. Обухівська",
      number: ["60", "62", "66", "68", "70", "70А", "72", "73", "74", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "94", "96", "98", "100", "106", "108", "110", "111/1", "111/2", "111/3", "111/4", "111/5", " 112", "113", "114", "115", "117", "125", "127/1", "127/2", "127А", "129/1", "129/2", "131", "133", "135", "137", "137А", "139"]
    }, {
      name: "вул. Овруцька",
      number: ["3", "5", "7А", " 6", " 26", "28", "28Б", "29", " 17", "19", "21", "23", "25"]
    }, {
      name: "вул. Огарьова",
      number: ["1", "8/15"]
    }, {
      name: "вул. Огієнка Івана",
      number: ["15", "15А", "21"]
    }, {
      name: "вул. Одеська",
      number: ["1/20", "2/68", "3", "4", "4/2", "5", "6", "6А", "6Б", "7", "8", "8А", "9", "10", "10А", "11", "12", "13", "14", "15", "16А", "16/19", "17", "18/16", "19", "20", "21", "22", "22А", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32/17", "33", "35", "37", "39", "41", "43", "45", "47", "47/19"]
    }, {
      name: "вул. Одоєвського",
      number: ["1", "1А", "6", "8А", "11", "18/1", "20", "22"]
    }, {
      name: "вул. Озерна",
      number: ["1", "3", "5", "7", "9", "12А", " 1", "1А", "1Б", "3", "3/1", "5", "5/1", "5А"]
    }, {
      name: "вул. Озерна (Бортничі)",
      number: ["1", "2", "3", "4", "4А", "5", "7", "8", "9", "10", "11", "11А", "12", "13", "15", "16", "17", "18", "18А", "19", "21", "23", "24", "25", "26", "27", "27А", "28", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "44В", "45", "46", "48", "50", "50А", "52"]
    }, {
      name: "вул. Озерна (Оболонь)",
      number: ["2", "2А", "4", "4А", "6", "6/1", "8", "8А", "10", "10А", "10Б", "12", "14", "16", "18", "18А", "18Б", "20", "22", "24", "26", "26А", "28", "28А", "30/51"]
    }, {
      name: "вул. Окіпної Раїси",
      number: ["3Б", "4А", "4Б", "6", "8", "8А", "8Б", "10", "10А", "10Б", " 1", "3А", "3В", "5А", "5Б", "7А", " 2", "3", "4", "5", "7", "9"]
    }, {
      name: "вул. Олевська",
      number: ["7", " 3А", "3Б", "3В", "3Г", "5А", "42"]
    }, {
      name: "вул. Олегівська",
      number: ["3", "5", "9", "10", "10А", "11", "16", "18", "20", "22", "23", "25", "27", "32", "34Б", "36", "37", "38", "39", "39Г", "40", "42", "43А", "44", "46", "62", "63", "65/67", "69/71", "79", "81"]
    }, {
      name: "вул. Олександра Олеся",
      number: ["б/н"]
    }, {
      name: "вул. Олександрівська",
      number: ["1", "3", "5", "7", "8", "9", "9А", "10", "11", "12/14", "13", "13А", "13Б", "15/1", "15/2", "15/3", "15А", "16", "17/8", "19/1", "19/2", "21/2", "23/1", "23/2", "25", "25А", "26/7", "27/1", "27/2", "27/3", "28", "29/1", "29/2", "29/3", "30", "31/1", "31/2", "32/2", "33", "34/1", "34/2", "35/1", "35/2", "36/1", "36/2", "37", "38/1", "38/3", "38А", "39", " 40", "41", "42", "42А/1", "42А/2", "43", "44", "45/1", "45/2", "46/1", "48", "50", "54"]
    }, {
      name: "вул. Олексіївська",
      number: ["20", "22", "24", "26", "27", "28", "29", "31", "32", "33", "35", " 2", "4", "6", "9", "10/12", "11", "14", "16", "17", "18/2", "20/6", " 3", "3А", "5"]
    }, {
      name: "вул. Олексія Береста",
      number: ["1", "2/1", "2/2", "3", "4/1", "4/2", "5/1", "5/2", "6", "7", "8", "9", "11", "13", "14", "15", "16", "17", "19", "22", "23", "24", "25/1", "25/2", "26", "28", "29", "30/1", "30/2", "30/3", "31 32/1", "32/2", "33", "34", "35", "36", "37", "37А", "39", "41", "43", "45", "47/1", "47/2"]
    }, {
      name: "вул. Оленівська",
      number: ["16", " 25", " 3", "23", "34", "34А", " 8", "1"]
    }, {
      name: "вул. Олійника Степана",
      number: ["3", "4/24", "5", "6", "7", "8", "9", "9Б", "10", "11", "13", "15", "17", "19", "19А", "21"]
    }, {
      name: "вул. Ольгинська",
      number: ["2", "2/1", "3", "6", " 02 апреля"]
    }, {
      name: "вул. Ольжича",
      number: ["3", "5", "7", "7А", "9", "9А", "11", "11А", "13", " 15", "15А", "17", "17А", "18/22", "19/28", "21", "22", "23", "24", "25", "26", "27/22", "28", "29", "30", "32", "34", "35", "35В", "37", "38", "40", "41", "42", "43", "45", "47", "48", "49", "51", "51А", " 16", "18", "18А", " 2", "4", "6", "8", "10", "10А", "12", "14", "14А", "14Б"]
    }, {
      name: "вул. Омелютинська",
      number: ["4", "4А"]
    }, {
      name: "вул. Онискевича Григорія",
      number: ["1", "3", "4", "6"]
    }, {
      name: "вул. Опришківська",
      number: ["54", "54А", "56", "58", "58/13", "60", "60/14", "62", "64", "66", "68", "70", "72", "74", "74А", "76", "78", " 2", "2/14", "4", "6/13", "8/14", " 15/1", "24/13", "26/14", "26А", "28", "30/27", "33", "34", "34А", "36", "36/2", "38", "38А", "40А", "40/1", "42", "42/1", "42А", "42А/1", "44", "44А", "44Б", "46", "46А", "48", "48/1", "48/2", "50", "50/1", "52", " 5", "7", "9", "10", "10А", "11", "12", "12/13", "14", "16", "17", "18/21", "19", "21/23", "22", "23/30", "24", "25", "27", " 80", "82", "84", "86", "88/7", "90"]
    }, {
      name: "вул. Оранжерейна",
      number: ["1", "3", "3Е", "3П", "5", "7", "9"]
    }, {
      name: "вул. Орбітна",
      number: ["3/1", "3/2", "4", "5", "6", "7", "8/1", "8/2", "10"]
    }, {
      name: "вул. Організаторська",
      number: ["1", "2", "3", "4", "5", "6", "8", "9", "12", "13", "14"]
    }, {
      name: "вул. Орлика Пилипа",
      number: ["1/15", "3", "6", "9", "10", "13", "15", "16/12", "18", "22/2", "24/1", " 4А", "8"]
    }, {
      name: "вул. Орловська",
      number: ["8/1", "10", "12/1", "12/2", "15", "16", "21", "23/1", "23/2", "25", "27", "29", "31", "33", "35", "37/1", "37/2", " 2/7", "3/1", "3/2", "4/6-2", "5/1", "5/2", "7/1", "7/2", "9", "9/2", "11", "13"]
    }, {
      name: "вул. Орська",
      number: ["3", "5/2", "5/3", "5/4", "6/1", "6/2", "6/3", "8", "9", "10", "10А", "11", "11/1", "11/2", "12", "13/1", "13/2", "14/1", "14/2", "16/1", "16/2", "18", "18А", "18А/1"]
    }, {
      name: "вул. Освіти",
      number: ["3", "3А", "4", "5", "5А", "6", "6А", "7", "8/1", "10/2", "12/1", "14", "14А", "16", "16А", "18", "22/8"]
    }, {
      name: "вул. Осиповського",
      number: ["1", "3", "3А", "3Б", " 31", "33", " 21", "23", "25", " 2", "2А", "2А/1", "2А/2", "2А/3", "2А/4", "2А/8", "2А/9", "4", "5/12", "6", "7", "8", "10", "12", "14", "16", "18", "19А", "19Б", "19В", "20", "22", "24", "26", "27", "28", "29", "30", "32", "34", "36", "38", "40", "42", "43", "44", "44А", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "56А", "57", "58", "59", "60", "61", "62", "63", "65", "67", "69", " 71", "73", "75", "77", "79", "81", "83", "85"]
    }, {
      name: "вул. Осіння",
      number: ["87", "88", "89", "90/1", "90/2", "91", "92", "93", "94", "95", "96", "97", "97/2", "98", "99/1", "99/2", "99/3", "100", "101А", "103", "104", "105", "106", "107", "108", "109", "110", "111", " 5А", "6", "8", "10", "11", "13", "17", "26", "28", "30", "32", "34", "36", "38", "42", "44", "44А", "48А", " 33", "33А", "40", "41", "42", "43", "44/1", "44/2", "46", "47", "48", "50", "53", "55", "56", "57", "60", "61", "62/1", "62/2", "62/3", "63", "64", "65", "67", "68А/1", "68А/2", "68А/3", "68А/4", "68А/5", "68А/6", "69", "69А", "69Б", "70", "72", "73", "74", "75", "76", "79", "80", "81", "82", "83", "84", "85"]
    }, {
      name: "вул. Оскольська",
      number: ["22", "22/2", "25", "27", "29", "31", "32", "32А/1", "34А", "34/1", "34/2", "36/1", "36/2"]
    }, {
      name: "вул. Осокорська",
      number: ["2А", "4", "4А", "4Б", "4В", "4Г", "7", "7А", "8", "8А", "9", "9А", "10", "15", "16", "16А", "16Б", "16В", "17"]
    }, {
      name: "вул. Остапа Вишні",
      number: ["3", "5", "7", "9"]
    }, {
      name: "вул. Остерська",
      number: ["3", "4", "5", "6", "7", "8", "9", "9/2", "10", "11", "12", "12А"]
    }, {
      name: "вул. Острів Венеціанський",
      number: ["1"]
    }, {
      name: "вул. Острів хутір",
      number: ["б/н"]
    }, {
      name: "вул. Острівна",
      number: ["4", "6", "6А", "6/2", "8", "15"]
    }, {
      name: "вул. Отця Анатолія Жураковського",
      number: ["3", " 1", "2", "3", "4", "5", "5/1", "5А", "6", "7", "7А", "8", "9", "10", "10А", "11", "13", "15", "17", "19", "19/1", "19А"]
    }, {
      name: "вул. Охтирська",
      number: ["8", "8/1", "8/2", "8/4", " 1", "2", "3", "4/1", "4/2", "5", "6", "6А", "6Б", "8"]
    }, {
      name: "вул. Очаківська",
      number: ["8/9", "9", "10", "11", "12", "13"]
    }, {
      name: "вул. Павленка",
      number: ["59/1", "59/2", "61/1", "63/1", "63/2", "65", "66", "67", "69", "73", "73А", "75/1", "75/2", "77", " 6", "8", "12", "24", "26/1", "26/2", "28/1", "28/2", "28А/1", "28А/2", "28А/3", "32", "34", "36", "37", "38", "39", "40А", "41", "42", "43", "44/1", "44/2", "45/1", "45/2", "46/1", "46/2", "49/1", "49/2", "49/3", "51/1", "51/2", "54", "55", "56", "57", "58"]
    }, {
      name: "вул. Павлівська",
      number: ["17", "18", " 3", "4/8", "7", "9", "10", " 22", "23", "26/41", "28", "29", "29А", "29Б", "30/33"]
    }, {
      name: "вул. Павлоградська",
      number: ["4", "4А", "5", "6", "7", "8", "9/1", "9/2", "9/3", "10", "11", "12/1", "12/2", "13", "14", "15/1", "15/2", "16/1", "16/2", "16/5", "17"]
    }, {
      name: "вул. Панаса Мирного",
      number: ["1", "2/44", "3", "4", "6", "8", "10", "12", "14", "16/13", " 7", "7А", "9", "11", "17", "19", "20", "22", "24", "26", "27", "28", "28А"]
    }, {
      name: "вул. Панельна",
      number: ["1", " 3", "5", "6", "7", " 4", "4А"]
    }, {
      name: "вул. Панорамна",
      number: ["1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "28А", "29", "31", "33", "33А"]
    }, {
      name: "вул. Пантелькіна Анатолія",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "20/14", " 9А", "15/1", "15/2", "15/3", "15/4"]
    }, {
      name: "вул. Панча Петра",
      number: ["1", "2", "3", "3А", "3Б", "4", "5", "7", "7А", "7Б", "7В", "8В", "9", "11", "11А", "11Б"]
    }, {
      name: "вул. Паньківська",
      number: ["2", "3", "5", "6", "8", "10", "10А", "11", "11А", "12", "14", "17", "19", "23", " 18", "20", "25", "27/78"]
    }, {
      name: "вул. Параджанова Сергія",
      number: ["3", "3А", "4", "5", "7", "8", "9", "9А", "10", "12", "14", "15", "16", "17", "18", "19", "21", "22", "22А", "23", "26", "27", "25", "27", "28", "29", "30", "31", "32", "33", "34", "36", "37", "39", "41", "42", "43", "44", "45", "45А", "46", "46А", "48", "50", "52", "54"]
    }, {
      name: "вул. Паркова",
      number: ["29", "31", "32", "32/5", "32А", "33", "33А", "34", "34/2", "34А", "35", "35А", "36", "37", "37А", "38", "39", "40", "41", "45", "46", "46/6", "47", "48", "49", "50", "50/1", "51", "52", "53", "54А", "55", "55А", "56", "57", "58/2", "59", "59/1", "59/2", "61", "61А", "61Б", "62", "63/2Б", "64", "64А", "65А", "66", "66/6", "67", "69", "69А", "71", " 1", "3", "5", "6", "6/1", "6/2", "6/3", "7", "8", "9", "10", "11", "12", "13", "14", "15", "17", "19", "20", "21/5", "22", "23", "24", "24/7", "25/1", "25/2", "25/27", "26", "26А", "28", "28/1"]
    }, {
      name: "вул. Парково-Сирецька",
      number: ["1", "1А", "2", " 3А", "5А", "5Б", " 4", "4А", "4Б", "6", "6А", "8", " 3", " 9В", "11", "11А", "13", "14", "15", "15А", "15Б", "17", "21", "23Б", " 3Б", "7А", "7Б", "9", " 5", "10", "12", "12А", "12Б", "12В", "12Г", "19", "23"]
    }, {
      name: "вул. Парникова",
      number: ["1А", "3", "4/1", "4/2", "6", "7", "9", "11", "12", "13", "14", "15", "16/19", "21"]
    }, {
      name: "вул. Паровозна",
      number: ["3", "4", "5", "5/2", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "вул. Пасічна",
      number: ["1", "2", "3", "4", "5", "5А", "6", "7 8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19А", "20", "21", "22", "23", "23А", "23Б", "24", "25", "26", "27", "27А", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "37А", "38", "39", "40", "41", "42", "44", "46", "48", "50"]
    }, {
      name: "вул. Пасхаліна Юрія",
      number: ["1", "1/1", "1/2", "1/2А", "1/3", "1/3А", "1/3Б", "1/3В", "1/3Г", "1В", "3", "4/6", "5/6", "6/5", "7", "7А", "8", "9", "10/5", "11", "13", " 12", "13/1", "14А", "15", "15А", "16", "17/1", "19/10", "20", "20А", "21", "22/15", "23", "25/17"]
    }, {
      name: "вул. Паторжинського",
      number: ["4", "5/7", "6", " 14"]
    }, {
      name: "вул. Патріарха Володимира Романюка",
      number: ["1", "1А/1", "1А/2", "3", "5", "6", "7", "8", "9", "11/1", "11/2", "12", "12А", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "24", "24/2", "25", "26", "28", "30", "32", "34", "36", "38", " 21А", "29", "33", "44", "44А", "50/2", "52", "52/1", "54"]
    }, {
      name: "вул. Патріарха Мстислава Скрипника",
      number: ["3", "5", "7", "9", "11", "13", "15", "20", "48А", " 1"]
    }, {
      name: "вул. Патріотів",
      number: ["1/19", "2/21-1", "2/21-2", "3/2", "3/3", "4", "5", "5А", "6/1", "6/2", "6А", "7/1", "7/2", "8/1", "8/2", "9", "10/1", "10/2", "11/1", "11/2", "11/3", "12", "13/1", "13/2", "13/3", "13А/1", "13А/2", "14", "15/1", "15/2", "15А/1", "15А/2", "16/1", "16/2", "16/3", "16/4", "17", "18/1", "18/2", "18/3", "18А", "19/1", "19/2", "20", "21", "22", "23/1", "23А", "24", "25", " 60/1", "60/2", "61", "61А", "62/1", "62/2", "63", "64", "65/1", "65/2", " 26/1", "26/2", "27/1", "27/2", "28/1", "28/2", "29", "30/2", "31", "32", "33", "34/13", "35", "36/14", "37", "37А", "38/1", "38/2", "40/1", "40/2", "41/1", "41/2", "42/1", "42А", "43/1", "43/2", "44", "45", "46/1", "46/2", "47", "48", "49", "50/11", "50/13", "51", "52", "53", "54/1", "54/2", "55", "56", "57/1", "57/2", "58", " 69", "71", "71А", "73", "75", "75А", "76/14", "77", "78", "79", "80", "81", "82", "83/17", "84", "85/14", "85А", "86", "86А", "87А", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99А", "99/15", "103"]
    }, {
      name: "вул. Паустовського",
      number: ["1/9", "2/11", "3", "5", "6", "7", "8", "9", "9А", "10", "11", "11А", "12", "13", "14", "15/23", "16", "17/30", "18/21", "19", "20А", "20Б", "20В", "21", "22", "23", "24", "25", "26", "27", "28/27", "29", "30/32", "31", "32", "34", "34А", "35", "36", "37/29", "37/23", "37/24", "38", "40", "41", "42", "43", "44", "45", "46", " 47", "48", "49", "50", "51", "52", "53/25", "54", "55/30", "56", "56А", "57", "58", "59", "60", "60А", "61", "62", "62А", "63", "64", "65", "66", "67", "68/67", "69", "71", "73", "75", "75А", "77", "79/23"]
    }, {
      name: "вул. Пашківська",
      number: ["б/н"]
    }, {
      name: "вул. Первомайського Леоніда",
      number: ["3", "4", "5", "5А", "6", "7А", "9", "9А", "11"]
    }, {
      name: "вул. Передмісна Слобідка",
      number: ["б/н"]
    }, {
      name: "вул. Передова",
      number: ["2", "2А", "5", "5А", "6", "7", "8", "9", "9А", "10", "11", "11А", "12", "13", "13/1", "14", "15", "15Б", "16", "16А", "18", "18А", "19", "19А", "21", "22", "22/1", "23А", "24", "24А", "25", "25А", "26", "33", "33А", "33А/1", "41", "44", "44А", "44Б", "45"]
    }, {
      name: "вул. Перемоги",
      number: ["1", "2", "3", "4", "5", "7", "9", "9А", "11", "13", "15", "20"]
    }, {
      name: "вул. Переяславська",
      number: ["3", "5", "7", "8", "8/2", "9", "9/2", "9/3", "10", "11", "11/25", "12", "12/23", "13"]
    }, {
      name: "вул. Переяславська (Бортничі)",
      number: ["1А", "1Б", "2/1", "2А", "2Б", "3А", "3Б", "4А", "4Б", "5А", "5Б", "6", "6А", "6Б", "7А", "7Б", "8А", "8Б", "9А", "9Б", "9В", "10А", "10Б", "11А", "11Б", "12А", "12Б", "14А", "14Б", "15"]
    }, {
      name: "вул. Перша",
      number: ["8", "10", "24", "25", "27", "29", "31", "33", "35-37", "38"]
    }, {
      name: "вул. Першого Травня",
      number: ["1", "1А", "1В", "2", "2/1В", "2А", "2Б", "3", "4", "4А", "5", "5А", "6", "6А", "7", "8", "9", "10А", "10Б", "10В", "11", "11А", "12", "12В", "13", "14", "15", "15А", "16", "17", "19"]
    }, {
      name: "вул. Пестеля Павла",
      number: ["3", "4", "7", "9", "11", "15"]
    }, {
      name: "вул. Петлюри Симона",
      number: ["3/25", "5", "7/9", "11/106", "13/135", "15", "21А", "23", "23/126", "29", " 18", "20", "20Б", "22", "22Б", " 2/4", "4", "6", "8", "10", "12", "14", "28", "30", " 27", " 16", "25", "27"]
    }, {
      name: "вул. Петра Дорошенка",
      number: ["2"]
    }, {
      name: "вул. Петрицького Анатолія",
      number: ["5/9", "7", "10/1", "12/4", " 11"]
    }, {
      name: "вул. Петрівська",
      number: ["12", "19", "28"]
    }, {
      name: "вул. Петропавлівська",
      number: ["11", "12", "13/8", "22", "24", "26", " 6", " 14", "15", "17А", "17Б", "19", "21", "23", "25", "27", "28", "29", "31", "31/1", "31А/1", "31А/2", "33", "34", "34А", "35", "36/2", "36/3", "37", "38", "39", "39/1", "39А/1", "39А/2", "40", "40А", "41", "42/33", "43", "44/34", "45", "46", "46/2", "47", "48/1", "48А", "52", "56", "56А", "58", " 47А", "51", "52", "54А"]
    }, {
      name: "вул. Петрусенко",
      number: ["1", "2", "3", "4/1", "4/2", "5", "6/1", "6/2", "8", "10"]
    }, {
      name: "вул. Печенізька",
      number: ["44013", " 2/9", "4", " 8", " 16", "23", "25", "27", "32", "35/43", " 9", "34", " 6"]
    }, {
      name: "вул. Пимоненка Миколи",
      number: ["13", "13А", "13Б", "13К", " 3", "4", "5", "8", "8А", "10", "10А", "12", "13Ж", "14", "15", "17А", "19/21", "20"]
    }, {
      name: "вул. Пирогівський шлях",
      number: ["100", "102", "104", "106", "108", "110", "112", "114", "116", "118", "120", "120А", "120Б", "122", "124", "126", "128", "130", "132", "132А", "134", "135Є", "135Д", "136", "137", "138", "139", "144", "148", "154", "156", "158", "160", "164", "166", "166А", "167", "167А", "167В", "167Г", "168", "169", "169А", "169Б", "169Г", "169Е", "169Ж", "170", " 172", "174", "176", "178", "180", "219", "219А", "219Б", "219В", "221", "223", "225А", "227", "229", "231", "231А", "231В", "231Г", "233", "235", "237", "239", "239А", " 52", "55", "56", "57", "58", "58А", "58Б", "60", "62", "66", "66А", "66Б", "68", "68А", "68Б", "69", "70", "71", "72", "72А", "73", "74", "75", "76", "76А", "77", "78", "79", "80", "83А", "84", "89", "92", "94А", "94Б", "94В", "94Г", "94-96", "95", "95А", "95Б", "105", "107", "109", "109А", "115", "135", " 42", "44", "44А", "46", "48", "50", "50А", " 26", "28", "28А", "32", "32А", "34", "34А", "34В", "34Г", "34Ж", "34Л", "34М", "34Т"]
    }, {
      name: "вул. Пирогова",
      number: ["1", "2", "2Б", "3", "4", "5", "5А", "6", "6А", "7А", "8", "10В", "10Г", " 7", "7Б", "9"]
    }, {
      name: "вул. Пироговського Олександра",
      number: ["8", "14", "16", "16А", "18", "19/2", "19/4", "19/6", "19/7", "19/8", " 3", " 4", "6", "6А", "19/1"]
    }, {
      name: "вул. Пирятинська",
      number: ["2", "3/1", "3/2", "4", "11", "12", "13/1", "13/2", "14", "15/1", "15/2", "16", "25", "27", "29"]
    }, {
      name: "вул. Писаржевського",
      number: ["4", "6", "8", "8Б"]
    }, {
      name: "вул. Південна",
      number: ["10"]
    }, {
      name: "вул. Північна",
      number: ["7", "7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7А", "42", "44", "46", "46/1", "46/2", "46/3", "46/4", "46/5", "4/", "48А", "48Б", "48В", "50", "52", "54", "54А", "54Б", "54В", "54Г", "54Д", " 20", "22", "24", "26", "26/1", "26/2", "26/3", "26/4", "26/5", "26/6", "28", "28/1", "30", "32", "32А", "34", "36", " 1", "1/1", "1/2", "1/3", "1А", "1Б", "1В", "1Г", "1Д", "1Е", "2", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/58", "2А", "2Б", "2В", "2Г", "2Г/1", "2Г/2", "2Г/3", "2Д", "2Д/1", "3", "3/1", "3/2", "3/3", "3А", "4", "4А", "4Б", "4В", "4Г", "5", "5/1", "6літА", "6А", "6Б", "6В", "6В/1", "6В/2", "6В/3", "8", "10", "10А", "12", "14", "14/1", "14/2", "14/3", "14А", "16", "16/1", "16/2", "16/3", "18"]
    }, {
      name: "вул. Північно-Сирецька",
      number: ["49", "49А", "49Б", "49В", "49Г", " 1", "1/3", "3"]
    }, {
      name: "вул. Підбірна",
      number: ["3", "3А", "4", "4А", "4Б", "5", "6А", "7", "7А", "8", "8А", "9", "9А", "10", "10А", "10Б", "11", "11А", "11Б", "11В", "14", "14А", "15", "15А", "16", "18А", "18Б", "20", "27"]
    }, {
      name: "вул. Підвисоцького професора",
      number: ["18", "19", " 14", "16", " 20", "21", " 10", "10/10", "12", "12А", " 5", "7", "13", " 3", "3А", " 4А", "4Б", " 6", "6А", "6В"]
    }, {
      name: "вул. Підгірна",
      number: ["1", "3/7", " 7/36", "12", "28А"]
    }, {
      name: "вул. Піддубного Івана",
      number: ["25/1", "26/1", "26/2", "30/22", "31", " 2А", "3", "5", "8", "9", "12", "14", "17"]
    }, {
      name: "вул. Підлипка",
      number: ["1", "2", "2А", "3", "4", "4А", "4Б", "4В", "5", "6", "6А", "6Б", "6В", "7", "7А", "8", "8А", "9", "9А", "9Б", "10", "10А", "11", "11А", "12", "12А", "13", "13А", "13Б", "14", "14А", "14Б", "15", "15А", "15Б", "15В", "16", "16А", "16Б", "16В", "17", "17А", "17Б", "17В", "17Г", "18", "19", "19А", "19Б", "19Г", " 20", "20А", "20Б", "20Г", "21", "21А", "22", "22А", "22Б", "22В", "23", "25", "25А", "28", "28А", "30", "30А", "30Б"]
    }, {
      name: "вул. Підлісна",
      number: ["1", "2", "3", "4", "5", "6", " 5/21", "8", "8А"]
    }, {
      name: "вул. Пітерська",
      number: ["3", "5А", " 2", "4", "4А", "6", "10", "12", "14", "16", " 7"]
    }, {
      name: "вул. Піхотна",
      number: ["2", "4", "4А", "4Б", "6"]
    }, {
      name: "вул. Планерна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "26", "27", "28", "29", "31", "32", "33", "35", "37", "38", "39", "41"]
    }, {
      name: "вул. Планетарна",
      number: ["3", "10", "13", "14", "16", "17", "22"]
    }, {
      name: "вул. Планетна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12/1", "12/2", "14", "16", "18"]
    }, {
      name: "вул. Платонівська",
      number: ["18"]
    }, {
      name: "вул. Плахотнюка Миколи",
      number: ["2", "19", "19А", "27"]
    }, {
      name: "вул. Плещеєва",
      number: ["34", " 4", "5", "6", "6А", "7", "8", "10", "10А", "16", "16/2", "18", "18/2"]
    }, {
      name: "вул. Плєханова",
      number: ["4А", "6А", " 2", "4Б", "6"]
    }, {
      name: "вул. Плодова",
      number: ["1", "16"]
    }, {
      name: "вул. Повітрофлотська",
      number: ["71", "72", "72А", "74", "76", "77", "79", "80", "82", "83", "84", "86", "88", "90", " 5", "7", "7А", "9", "11", "12", "12А", "13", "14", "14А", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24А", "25", "26", "27", "28", "29", "30", "31", "31А", "32", "32А", "33", "34", "34А", "35", "36", "37", "38/1", "38/2", "39", "40", "40А", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "51А", "52", "53", "54", "55", "56", "56А", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", " 1", "1А", "2", "3", "4", "4А", "6", "6А", "8", "10", "10А"]
    }, {
      name: "вул. Подвойського",
      number: ["2", "4", "10", "10А", " 9А", "11", "11А", " 7", "7А"]
    }, {
      name: "вул. Пожарського",
      number: ["5", "7", "8", "8А", "8Б", "9", "10/15", "11", "13", "13А", "15", " 1", "2", "3", "4", "4А", "6"]
    }, {
      name: "вул. Пожарського (Троєщина)",
      number: ["1", "6", "8", "8А", "10", "10А", "12", "12А", "12В", "14А", "14Б", "16", "16А", "17", "19", "19А", "20", "21", "23", "24", "25", "26А", "28", "68"]
    }, {
      name: "вул. Покотила Володимира",
      number: ["07 февраля", " 1", "5А", " 9", "9А", " 3", "3А", "3Б", "3В", "5", "5В"]
    }, {
      name: "вул. Покровська",
      number: ["4", "6", "7", "8", "9", "9Ж", "11", "13"]
    }, {
      name: "вул. Ползунова",
      number: ["2", "2/4"]
    }, {
      name: "вул. Поліська",
      number: ["15А", " 1", "2", "3", "4", "4А", "5/1", "6", "6/1", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "28/1", "28/2", "28Б"]
    }, {
      name: "вул. Політехнічна",
      number: ["3", "5", "5А", "25/29", "31", "31Б", "31В", " 6", "12", "14", "16", "33", "35", "37", "39", "41"]
    }, {
      name: "вул. Полкова",
      number: ["57", "57/1", "57А", "57Б", "57В", "58", "58/1", "59", "59А", "61", "61А", "72", "72/1", "74", "74/76", "74/76А", "76", "78", " 18/10", "20", "21", "22", "23", "23А", "24", "25", "25/11", "36", "27", "28", "29/7", "30/10", "31", "31/12", "33", "33/11", "34", "35/10", "36", "36/1", "37/9", "38", "38/13", "39", "39/6", "40", "41/1", "41/5", "42", "43", "43/10", "44", "45", "45/9", "46", "46/1", "47", "48", "49/7", "50", "51", "52", "53", "54", "54А", "54А/2", "55", "55/12", "55/55", "58", "60", "60/1", "62", "66", "66/1", "68", "68/1", "70", "70/1", " 2", "3", "4", "5/11", "6", "7/12", "8", "9", "9/1", "10", "11", "12", "12А", "13", "13/2", "14", "15", "15/1", "15Б"]
    }, {
      name: "вул. Половецька",
      number: ["2/24", "3/42", " 25/27", "29", "49", " 7/13", "12/42", "14", "14А", "16", "16А", "16Б"]
    }, {
      name: "вул. Полтавська",
      number: ["3", "4", "5", " 9", "12"]
    }, {
      name: "вул. Польова",
      number: ["19/8", "21", "21А", "24", "24Д", "25", "27А", "31", "33", "35", "37", "38/1", "39", "41/1", "41/2", "43", "45", "47", " 72Б", " 49", "49А", "53", "55", "57", "59", "61А", "65", "71"]
    }, {
      name: "вул. Польова (Бортничі)",
      number: ["1А", "2", "2В", "2Г", "4", "6", "8", "10", "12", "14", "16", "18", "19", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "40А", "42", "44"]
    }, {
      name: "вул. Польова (Троєщина)",
      number: ["1", "1А", "3", "3А", "5", "5А", "7", "9"]
    }, {
      name: "вул. Полянська",
      number: ["3", "3А", "5", "8", "10", "10/9", "10/11", "11/17", "12/12", "14/11", "16/9", "17/13", "18", "19/10", "19/10А-1", "20", "20А", "21", "21А", "22", "23", "23А", "24", "25", "26", "28", " 1"]
    }, {
      name: "вул. Полярна",
      number: ["11", "13", "13А", "15", "15А", "15Б", "15/1", "15/2", "15/4", "15/5", "15/8", "17А", "19", "19А", "19А/1", "19А/2", "19Б", " 2", "2А", "6", "6А", "6Б", "6В", "6В/1", " 8", "8А", "8А/2", "8А/3", "8А/4", "8В", "8Г", "8Д", "8Е", "8Е/1", "8Ж", "8/1", "8/3", "8/4", "8/5", "8/6", "10", "10В", "10Г", "10К", "10/2", "12", "12/1", "12/2", "12А", "12А/1", "12А/2", "12Б", "14", "14А", "15А", "16", "16/1", "16/2", "20", "20/1", "20А", "20В", "20Д", " 3", "3А", "3/4", "3/5", "5", "5А", "5Б", "7", "7А", "7Б", "7Г", "7/1", "7/2", "7/3", "7/5", "7/7", "7/9", "7/11", "7/12", "9/1"]
    }, {
      name: "вул. Помаранчева",
      number: ["6", "8"]
    }, {
      name: "вул. Попельнянська",
      number: ["5", "7", "9"]
    }, {
      name: "вул. Попова",
      number: ["1", "1А", "3", "3/5", "5", "5/1", "7", "9", "9А", "11", "15", "17", " 4", "4/2", "5А", "6", "8", "8А", "10", "10А", "12", "14"]
    }, {
      name: "вул. Поправки Юрія",
      number: ["4/39А", "6", "9/37", "10/19", "11", "13", "14", "14А", "19"]
    }, {
      name: "вул. Попудренка",
      number: ["36", "36А", "38/16", "40", "42", "42А", "44", "44А", "46/2", " 28", "30", "32", "34", "34А", " 50", "50А", "52", "52А", "52Б", "54", "54А", " 63", "88/3", "90/2", " 1", "2", "2А", "3", "6", "6А", "7А", "8/2", "10", "10/1", " 14", " 5", "7Г", "9", "9Б", "11", "16", "16А", "18", "18А", "20", "22", "22/14", "24", "26/9"]
    }, {
      name: "вул. Порика Василя",
      number: ["9В", "14Б", "14В", " 12", "13", "13А", "13Б", "14", "15", "15А", "16", "17", "17А", "17Б", "18", " 7Б", "9А", " 14А", " 2", "3", "3А", "5", "8", "8А", "9", "10", "11", "11А", "11Б", "11В", " 9Г"]
    }, {
      name: "вул. Пост-Волинська",
      number: ["2/103", "3", "5", "7", "9"]
    }, {
      name: "вул. Постова",
      number: ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", " 1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69"]
    }, {
      name: "вул. Потапова генерала",
      number: ["01 мая", " 1А", "1В", "1Г", "1Д", "2Б", " 2", "4", "6", "8", "10", "10А", "12"]
    }, {
      name: "вул. Потебні академіка",
      number: ["10", "12", "14", "16", "18", "20", "23"]
    }, {
      name: "вул. Потєхіна Полковника",
      number: ["1В", "2", "3", "3А", "4", "5", "6", "8", "9", "12", "14", "14А", "14Б", "16", "16/1", "17"]
    }, {
      name: "вул. Потоцького Павла",
      number: ["1", "2", "3", "4", "4А", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "23Б", "24", "25", "26", "27", "28", "28А", "29", "29А", "29Б", "30", "31", "32", "33", "33А", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46/48", "47", "48", "49", "50", "50А", "51", "52", "53", "54", "54А", " 55", "56", "56А", "56Б", "57", "58", "59", "59А", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "73А", "74", "75", "76", "77", "78", "79", "79А", "80", "80/1", "80/2", "80А", "81", "82", "82/1", "84", "84А", "84В", "84Г", "84Г/1", "83Ж", "84Д", "84Е", "84С", "84Р", "82А", "82Б", "83", "85/87", "86", "88", "89", "90", "90А", "92", "93", "94", "96", "98", "100", "100А", "102", "104", "106", "108", "108А", "110", "112", "114", " 116", "118", "120", "122", "124", "126", "128", "130", "132", "134", "134А", "136", "138", "140", "142"]
    }, {
      name: "вул. Похила",
      number: ["5", "7/1", "7/2", "9/1", "9/2", "11/1", "11/2", "13", "15", "17А", "17/1", "19"]
    }, {
      name: "вул. Почайнинська",
      number: ["13 сентября", " 2", "4", "16", "18", "19", "23", "26", "27/44", "28", "35", "38", "38/44", "40", "44", "50/49", "52", "53/55", "57/59", "62", "64", "70", " 25/49", " 45"]
    }, {
      name: "вул. Правобережна",
      number: ["3", "6", "13", "13А", "14", "16", "17", "18"]
    }, {
      name: "вул. Празька",
      number: ["18", "18А", "20", "22", "22А", "24", "26", "29", "30", "32", " 23", "25", "25/1", "25/2", "27", " 28", "31", "31А", "33", "36", " 34", " 17", "19", "21", "21/1", "21/2", "29/1", " 4", "4А", "6", "8", "10", "14", "18В", "20А", " 3", "5", "7"]
    }, {
      name: "вул. Практична",
      number: ["1", "2", "2/1", "3", "3А", "4", "6", "8", "15", "16", "17"]
    }, {
      name: "вул. Предславинська",
      number: ["36", " 38", "45/9", "47", "49", " 19", "21/23", "31/11", " 9", "11/13", "12", "14", " 24", "26", "26А", "28", "30", "35", "35/11", "35/21", " 34", "34А", "34Б", "35Д", "39", "43/2", " 51"]
    }, {
      name: "вул. Преображенська",
      number: ["1", "3", "4", "5", "5/2", "6", "7", "8", "15", " 10/17", "12А", " 17", "19", " 20", "22/9", "25", "26", "37", " 21", "23", "23А", " 24", "27", " 28", "4", " 39/8"]
    }, {
      name: "вул. Пржевальського",
      number: ["1/1", "1/2", "2/2", "3/1", "3/2", "4А", "6А", "6/1", "7", "9", "10/1", "10/2", "11/1", "11/2", "12", "13/1", "13/2", "13/3", "14/1", "14/2", "14/3", "14/4", "15", "20/1", "20/2", "20/3", "20/4"]
    }, {
      name: "вул. Привітна",
      number: ["1/10", "3", "9", "13/2", "16", "17", "18", "21", " 20", "23", "24"]
    }, {
      name: "вул. Привокзальна",
      number: ["3", "3/1", "3/2", "3/3", "3/5", "3/6", "14/1", "14/1А", "14/3", "14/4", "14/5", "14/6", "14/7", " 1", "1/1", "1А", "1А/1", "1А/2", "1Б", "1В", "2", "3/4", "6", "8", "8/1", "10", "10/1", "10/1А", "12", "12/1", "12Б", "14", "14/2", "14А"]
    }, {
      name: "вул. Приколійна",
      number: ["1", "1/1", "3", "5", "21", "21/1"]
    }, {
      name: "вул. Прилужна",
      number: ["15 апреля", " 6", "8", "10", " 3", "12", "14", "14А", " 9"]
    }, {
      name: "вул. Приозерна",
      number: ["2", "2/1", "2/2", "2А", "2Б", "2В", "2В/1", "2В/2", "2В/3", "4", "4А", "4Б", "6", "6/1", "6А", "6А/1", "8", "8А", "8Б", "8В", "10", "10/1", "10А", "10Б", "10В", "10Г", "10Г/1", "10Г/2", " 12", "12А", "12Б", "14"]
    }, {
      name: "вул. Приозерна (Бортничі)",
      number: ["1", "3"]
    }, {
      name: "вул. Прирічна",
      number: ["1", "1А", "2/1", "2/2", "3", "5", "5/1", "5/2", "5А", "5Б", "5В", "5Г", "7", "7/1", "7/2", "9", "9/1", "11", "11/1", "11/2", "11/3", "13", "13/1", "13/2", "13/3", " 19", "19А", "19Б", "19В", "19В/1", "19Г", "19Д", "19Е", "19Ж", "19Л", "21", "21А", "23", "23А", "25", "25А", "27", "27А", "27Б", "27В", "27Г", "27Д", "27Е", "27К", "29", "29А", "29Б/27", "30", "30А", "30А/1", "30А/2", "30А/3", "31", "32", "32А", "33", "34", "35", "36", "37", "37/1", " 15", "17", "17/1", "17/2", "17А", "17Б", "17В", "17Г", "17Г/1", "17Г/2", "17Д", "17Е", "17Ж"]
    }, {
      name: "вул. Притисько-Микільська",
      number: ["2", "4", "4/6", "5", "5А", "7", "7А", "9", "9А"]
    }, {
      name: "вул. Причальна",
      number: ["11", "11А", "11Б", "11В", "11Г", "11Д", "11Ж", "11/1", "11/2", " 1", "1/1", "2", "5"]
    }, {
      name: "вул. Пришвіна",
      number: ["14", "15", "15А", "16", "17", "17А", "17Б", "17В", "18", "18А", "19", "19А", "20", "20А", "21", "22", "22А", "24", "24А", "24Б", "24В", "26", "28"]
    }, {
      name: "вул. Пріорська",
      number: ["6", "10", "12", "14", "16", " 3А", "6", "9", "10", "11", "12", "13", "14", "15", "16", "17", " 21"]
    }, {
      name: "вул. Провіантська",
      number: ["3", "4", "4/6", "15", "17"]
    }, {
      name: "вул. Провідницька",
      number: ["2", "4", "8", "10", "12", "13", "14", "16", "18", "21"]
    }, {
      name: "вул. Проектна",
      number: ["3"]
    }, {
      name: "вул. Прокоповича Петра",
      number: ["1", "1А", "2", "2А", "3", "3А", "4", "4А", "5", "6", "6А", "7", "8", "9", "9А", "10", "11", "11А", "12", "12А", "13", "14", "15", "16", "16А", "17", "18", "19", "19А", "20", "22", "23А", "24", "26", "28", "30"]
    }, {
      name: "вул. Пролетарська",
      number: ["1/1", "1/2", "3/1", "3/2", "5", "6", "7", "8/1", "8/2", "9", "10", "11/1", "12/1", "12/2", "13", "14", "15", "16/1", "16/2", "17", "18/1", "18/2", "20", "21Б/1", "21Б/2", "23/1", "23/2", "25/2"]
    }, {
      name: "вул. Промениста",
      number: ["б/н"]
    }, {
      name: "вул. Промислова",
      number: ["1", "1А", "2", "2Б", "2В", "3", "3Б", "3Г", "4", "4/7", "4А", "6", "6А", "7", "8", "9"]
    }, {
      name: "вул. Промислова (Бортничі)",
      number: ["6", "6В", " 9", " 4", "8", "10", "10А"]
    }, {
      name: "вул. Прорізна",
      number: ["3", "4", "6", " 3", "4", "6", "8", "9", "10", "11", "11А", "11Б", "12А", "12Б", "13", "14", "15", "15А", "16", "16/2", "17", "18", "18/1", "18/1Б", "18/1Г", "19", "19А", "19Б", "20", "21", "22", "22А", "22Б", "22В", "23", "23А", "23Б", "24", "24/29", "25", "25А", "25Б", "27", " 15", "19", " 8", " 2", " 5", "6", "7", "8", "9А", "9А/1", "9А/2", "9А/3", "9А/4", "10", "11", "12", "14", "16А", "17"]
    }, {
      name: "вул. Протасів Яр",
      number: ["2", "2Д", "3", "7", "8", "13", "13А", "23", "23А", "39", "48"]
    }, {
      name: "вул. Профспілкова",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "11/1", "11/2", "11/3", "12", "13", "14", "15", "16", "16А", "16Б", "17", "18", "19", "21/3", "22/5", "23", "24", "25", "26", "28"]
    }, {
      name: "вул. Проценко Людмили",
      number: ["10", "11", "12", "13", "14", "15", "17", " 2", "4", "6", "8"]
    }, {
      name: "вул. Псковська",
      number: ["3", "4", "6/1", "6/2", "6/3", "7", "8", "11", "11А", "13", "14", "15", "17/1", "17/2", "18/1", "18/2", "18/3", "19", "20/2", "20/3", "21", "23", "25"]
    }, {
      name: "вул. Пулюя Івана",
      number: ["1", "2", "3", "5", " 1А", "1В", "3А", "3Б", "5А", "5Б", "5В", "10"]
    }, {
      name: "вул. Путивльська",
      number: ["1", "1А", "1Б", "2", "3", "5", "6", "7", "8", "9", "9А", "9Б", "9В", "10", "11", "11А", "12", "13", "14", "15", "15А", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "28", "29", "30", "31", "32", "32А", "33", "34", "35", "36", "37", "38", "39", "41", "45", "47", "48", "49", "51", "52", "53", "54", "56", "57", "58", "59", "60", "60А", "61", "62", "63", "64", "65", "65А", " 66", "67", "68", "69", "70", "71", "72", "72А", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "84", "86", "88", "88А", "92", "94", "94А", "96", "98", "100", "102", " 40", "42"]
    }, {
      name: "вул. Пухівська",
      number: ["1", "1А", "1Б", "1Г", "1Д", "2", "3", "3А", "4", "5", "7", "7А", "8", "9"]
    }, {
      name: "вул. Пухова генерала",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
      name: "вул. Пушиної Феодори",
      number: ["1А", "2", "3", "4", "5", "6", "7/1", "7/2", "8", "8А", "9", "9А", "13", "19", "23", "23/25", "27", "29/1", "29/2", "29/3", "29/4", "29А", "31А", "33", "34", "34Д", "35", "36", "38", "38А", " 44/50", "49", "50"]
    }, {
      name: "вул. Пушкіна",
      number: ["1", "1А", "1Б", "2", "3", "4", "5", "6", "6А", "6Б", "7", "7Б", "8", "9", "10", "11", "12", "12А", "13", "15"]
    }, {
      name: "вул. Пушкінська",
      number: ["1/3", "1-3/5", "2-4/7", "5", "7", "8", "8А", "8Б", "8В", "9", "9А", "9Б", "9В", "9Г", "10", "10А", "10Б", "10В", "11", "11А", "12", "12А", "12Б", "12В", "14", "14В", "16", " 28/9", "28А", "30", "32", "32А", "32Б", "34", "34Б", "36", "38", "38А", "40", "42/4", " 45", "45/2", " 8/2Б", "17", "17А", "19", "19Б", "20", "20А", "21", "21Б", "22", "22А", "23", "23Б", "24", "24А", "24Б", "25", "25А", "25Б", "27", "27/6", "31", "31А", "31Б", "31В", "33", "33Б", "35", "37", "39", "39А", "41", "41А", "41Б", "43", "43А", "43Б", " 28"]
    }, {
      name: "вул. Пуща-Водицька",
      number: ["1", "1/2", "3", "3А", "5", "7", "9/1", "9/2", "11/1", "11/2", "11/3", "13", "15/1", "15/2", "17", "19", "21/1", "23/1", "23/2", "24/35", "25/1", "25/2", "25/3", "25/4", "25/5", "27/1", "27/2", "29", "31", "33"]
    }, {
      name: "вул. Пчілки Олени",
      number: ["2", "2/1", "2/3", "2/4", "2А", "2А/1", "2Б", "3", "3/1", "3А", "3В", "3Д", "4", "4/1", "5", "5/1", "5А", "6", "6А", "8"]
    }, {
      name: "вул. Пшенична",
      number: ["1", "2", "2А", "2В", "3", "3А", "4", "4/3", "4А", "5", "7", "8", "8А", "8Б", "8В", "8Г", "9", "14", "16", "16А", "18"]
    }, {
      name: "вул. П'ята",
      number: ["3", "7"]
    }, {
      name: "вул. П'ятигорська",
      number: ["3", "3А", "4", "5", "6/1", "6/2", "7", "8/1", "8/2", "8/3", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20/1", "20/2", "21", "21А", "22/1", "22/2", "23", "23А", "25/1", "25/2", "27/1", "27/2", "27/3", "27/4", "28", "30", "32", "32А", "34", "36/1", "36/2", "38", "52", "54", "56/1", "56/2", "58", "60", "61", "62/1", "62/2", "63/1", "63/2", " 31", "33", "35/21", "35/22", "37", "39А/1", "39А/2", "39А/3", "39Б/1", "39Б/2", "40", "41", "42", "43", "44", "45", "47/1", "47/2", "48", "49", "50", "51/1", "51/2", "57", " 64/1", "64/2", "66", "68/1", "68/2"]
    }, {
      name: "вул. Радистів",
      number: ["8", " 1", "1А", "1Б", "2", "15", "17", "19", "23", "25", "27", "29", "31", "33", "34А", "34Б", "34В", "34Г", "34Д", "34Е", "34Ж", "35", "41", "43", "43А", "44", "46", "47", "48", "49", "50", "51", "52", "53", "54А", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "69", "71"]
    }, {
      name: "вул. Радищева",
      number: ["2", "3", "3А", "5", "6", "6А", "7", "7А", "8", "9", "10", "10/14", "10/14А", "11", "12/16", "15А", "18", "19"]
    }, {
      name: "вул. Радіальна",
      number: ["4", "5"]
    }, {
      name: "вул. Радісна",
      number: ["1", "2", "3", "4", "5", "6", "7", "9", "14", "16", "18", "20"]
    }, {
      name: "вул. Радомишльська",
      number: ["44"]
    }, {
      name: "вул. Радосинська",
      number: ["1", "1А", "3", "3А", "5", "5А", "5Б", "7", "9", "11", "13", "15", "15А", "17", "19", "21", "23", "25", "27", "29А", "29Б", "29Г", "31", "33", "35", "35А", "37", "39", " 2", "2А", "2Б", "2Г", "4", "4А", "6", "8", "10", "12", "14", "14/3", "14А", "16", "16А", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "36А", "38", "40", "42", "44", "46", "46А", "48", "50", "50А", "52", "54", " 56", "58", "60", "62", "64", "64А", "66", "66А", "68", "70", "72", "74", "76", "76А", "78", "80", "82", "84", "86", "86А", "88", "92", "94", "96", "96А", "98", "100", "102", "104", "106", "106А", "106Б", "108", "110", "110А", "112", "112А", "114", "114А", "116", "118"]
    }, {
      name: "вул. Радунська",
      number: ["14", "14А", "16", "18", "18А", "20", " 2/18", "8/13", " 34", "36", "38", " 40", "42/10", "44", "46", "46А", "46Б", " 10А", "22/9", "22/9А", "22/9В", "24", " 26", "28", "30", "32", " 1/10", "3", "3А", "5", "5А", "5Б", "5В", "7", " 9", "9А", "9Б", "11", "11А", "13А"]
    }, {
      name: "вул. Радченка Петра",
      number: ["8А", "14", " 3/1", "3/2", "5", "7", "9", "11/13", "15/17", "19", "21", "21А", "23", "25", "27", "33/30", "37", "41", "43", "53", "57", "59"]
    }, {
      name: "вул. Радченко Клавдії",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"]
    }, {
      name: "вул. Раєвського Миколи",
      number: ["23А", "25", "28", "34", "36", " 3/1", "3/2", "4А", "4В", "5", "6", "7", "8", "9А", "10", "11", "11А", "12", "13", "14", "15", "16", "17", "18", "19", "19/5", "20", "22", " 4"]
    }, {
      name: "вул. Райгородська",
      number: ["4", "5/1", "5/2", "6", "7/1", "7/2"]
    }, {
      name: "вул. Райдужна",
      number: ["9А", "17Б", "35", "37", "39", "41", "43", "44", "45", "47", "51", "54", "55", "57", "59", "59Б", "63", "65", "67", "69", "71", " 3А", "3Б", "11А", "13", "13А", "13Б", "13В", "23", "25", "25А", "25Б", "27", "27А", "27Б", "31А", "49", "51", "53", "73", " 1", "3", "5", "7", "9", "11", "17", "17А", "19", "21", "21А", "29", "31", "33", "98", " 14", "16", "18", "20", "20А", "22", " 2", "2А", "2Б", "4", "4А", "4Б", "6", "8", "10", "12"]
    }, {
      name: "вул. Райніса Яна",
      number: ["3", "4", "5"]
    }, {
      name: "вул. Ракетна",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24А", "25", "26", "27"]
    }, {
      name: "вул. Рахманінова",
      number: ["42", "46", "47", "48", "49", "53", "55", "57", "59", "61", "63", " 16", "19", "20", "26/24", "27", "30/13", "30А/13", "33/1", "33/2", "35/1", "35/2", "37/38", "39"]
    }, {
      name: "вул. Ревуцького",
      number: ["29", "29А", "29Б", "31", "31/1", "33", "33/1А", "33В", "35", "35/1", "37А", "37А/1", "38", "38/1", "38/2", "38/3", "38/5", "38/6", "40", "40/3", "40Г", " 9", "9/2", "11А", "13", "13А", "13А/1", "13Б", "15", "15/5", "17", "17/1", "17Б", "19/1", "19А", "19А/1", " 12", "12/1", "12А", "14", "14А", "16", "16А", "18", "18/1", "18А", "20", "22", "22/1", "24/4", "26", "30/1", "30А", "32", "34", "34А", "36/2", " 21", "23", "23/2", "25", "25А", "27", "27/29", " 4", "4/1", "4/2", "4А", "6", "6/2", "8", "10/3", " 44", "44А", "44Б", "46", " 56", " 40В", "42", "42А", "42Б", "42В", "42Г", "42Д", " 1", "1/1", "1/3", "1/4", "1/5", "1/6", "3", "5", "5А", "5А/1", "5А/2", "7", "7А", "7Б", "7В", " 11Б", "11В", "11Г"]
    }, {
      name: "вул. Регенераторна",
      number: ["4 корп.1", "4 корп.2", "4 корп.3", "4 корп.4", "4 корп.5", "4 корп.6", "4 кор", "7", "4 корп.8", "4 корп.9", "4 корп.10", "4 корп.11", "4 корп.12", "4 корп.13", "4 корп.14", "4 корп.15", "4 корп.16", "4 корп.17", "4А", "4В", "4П"]
    }, {
      name: "вул. Редутна",
      number: ["3", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19А", "20", "21", "22", "23", "23А", "23Б", "24", "25", "25А", "26", "28", "29", "30/5", "32", "31", "33", "34/19", "37", "39", "40", "41", "41А", "42", "43", "44", "45", "45А", "46/10", "47", "49", "50", "51", "51А", "52", "53", "53А", "53Б", "54", "54А", "55", "56", "59", "58", "60", "61", "62", "63", "64", "64А", "66", "66А", "70/56"]
    }, {
      name: "вул. Редьчинська",
      number: ["1/1", "2", "2/1", "3/1", "4", "4/1", "5/1", "6", "6/1", "7/1", "8", "8/1", "9/1", "10", "10/1", "11/1", "12", "12/1", "13/1", "14", "14/1", "15/1", "16", "16/1", "18", "20", "22", "24", "26", "28"]
    }, {
      name: "вул. Резервна",
      number: ["2А", "4", "4А", "6", "8", "8А", "8Б", "8Б/1", "8Г", "10", "12", "14А", "14Б", "14В", "14В/1", "14В/2", "16", "16/1", "16/2", "18", "20", "29", "29Г"]
    }, {
      name: "вул. Рейтарська",
      number: ["2", "4", "5", "6А", "7А", "7Б", "8/5А", "9", "11", "13", "15", "16", "17", "17А", "18", "19", "19А", "20/24", "21/13", "22", "24/27", "25", "27", "29", "29Б", " 39", " 28", "30", "30А", "31/16", "32", "34", "35", "35А", "37", "41"]
    }, {
      name: "вул. Ржищівська",
      number: ["7", "7А", "8", "10", "12", " 3", "5"]
    }, {
      name: "вул. Рибака",
      number: ["1", "1А", "2", "3", "3А", "4", "5", "5А"]
    }, {
      name: "вул. Рибалка маршала",
      number: ["1", "3", "5", "7/18", "10/8"]
    }, {
      name: "вул. Рибальська",
      number: ["1/14", "5", " 2", "3", "4", "7", "8", "10", "11", " 13", "14/16", "18", "22"]
    }, {
      name: "вул. Рибна",
      number: ["2/3", "3", "5", "4/1", "4/2", "6", "7", "8/1", "8А", "9/1", "9/2", "9/3", "9Б", "10", "12", "13", "14", "15", "16/17", "18", "19", "20", "22/1", "22/2", "22/3", "22А", "23", "27/1", "27/2", "29А"]
    }, {
      name: "вул. Риболовецька",
      number: ["2", "2А", "3", "3А", "4", "11", "11А", "12", "13", "14", "14А", "16", "17", "19", "19А", "22/1", "24", "28", "32", "33", "34", "39", "41", "41А", "43", "45", "45А", "49"]
    }, {
      name: "вул. Ризька",
      number: ["18", "36/1", "36/2", "38/1", "38/2", "40", "42", "44", "46/1", "46/2", "46/3", "48", "50", "52/1", "52/2", "54/1", "54/2", "56", "58", "60/1", "60/2", "62", "62А", " 14", "16", "23", "25", "27", "29", "31", "33", "35", "37", "37/1", "39", "41", "43", "43/1", "45", "47", "49", "51", "53", "55", "55А/1", "55А/2", "57", "59", "61", "61/1", "61/2", "61/3", "63", "65", "67", "69/1", "69/2", "71", "73", "75/1", "75/2", "77", "79", "81", "83/1", "83/2", "83/3", "85А", " 1", "6/1", "7", "8", "9", "11", "12", "13", "15", "17", "17/2", "19", "19/2"]
    }, {
      name: "вул. Рилєєва",
      number: ["7/11", "10", "10А", " 12", "12А", "12Б", "14", "16", "17", "17А", "18", "19", "20/2", "23", "29", " 22/1", "22/2", "23/1", "24", "25", "26", "27/1", "27/2", "28/1", "28/2", "28/3", "30", "32/1", "32/2", "34", "34/1"]
    }, {
      name: "вул. Рильського Максима",
      number: ["23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", " 3", "5", "7", "9", "9/1", "11", "13", "15", "19", "19/1"]
    }, {
      name: "вул. Римського-Корсакова",
      number: ["3", "3А", "3/2", "5", "5/1", "5/2", "5А", "9", "10", "11", "13", "15/1", "15/2", "20", "20А", "22", "22А"]
    }, {
      name: "вул. Різдвяна",
      number: ["б/н"]
    }, {
      name: "вул. Різницька",
      number: ["6", "8", "9А", "11", "11Б", " 13/15"]
    }, {
      name: "вул. Річна",
      number: ["3"]
    }, {
      name: "вул. Робітнича",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71"]
    }, {
      name: "вул. Робітнича (Жуляни)",
      number: ["1", "1/2", "2", "2А", "2Б", "3", "3А", "4", "5", "6", "7", "8", "8А", "9", "10", "11", "12", "12А", "12Б"]
    }, {
      name: "вул. Рогнідинська",
      number: ["1/13", "2", "3", "4", "4А", "5/14"]
    }, {
      name: "вул. Рогозівська",
      number: ["1", "1А", "6", " 4", " 3А", "4/16", "10А"]
    }, {
      name: "вул. Родимцева генерала",
      number: ["1", "1А", "3", "3А", "4", "4Б", "4Д", "5", "6", "7", "7А", "7Б", "7Б/1", "8", "8/1", "9", "11", "13", "15", "15А", "17", "19", "19/4", "19/5", "21", "23", "23/1", "25"]
    }, {
      name: "вул. Родини Крістерів",
      number: ["20", "20А", "20Б"]
    }, {
      name: "вул. Родини Рудинських",
      number: ["1", "2", "3", "4", "5", "5/1", "6", "6А", "7", "8", "9", "9/2", "13", "15", "17", "19", "19А", "21", "23", "25", "27", "27/1", "29", "31"]
    }, {
      name: "вул. Рожева",
      number: ["1/12", "2/10", "3", "4", "5", "5/1", "6", "7", "7/2", "8", "8/2", "10/9", "11/9", "12/1", "13", "13/2", "14", "14/2", "15", "15/2", "16", "16/1", "16/2", "16/3", "16А", "16А/1", "16А/2", "17", "19/1", "19/2", "20", "21", "22", "22/1", "22/2", "23", "24", "24/1", "24/2", "24/7", "25", "25/2", "27", "27/2", "29", "29/1", "29/2", "31/78", "32", "32А"]
    }, {
      name: "вул. Роздільна",
      number: ["1", "3", "5", " 7", "8", "9", "11"]
    }, {
      name: "вул. Рокитнянська",
      number: ["3", "4", "5", "7", "8", "9", "10", "11", "12", "16"]
    }, {
      name: "вул. Романова Михайла",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34"]
    }, {
      name: "вул. Ромоданівська",
      number: ["3", "4", "5/1", "5/2", "6", "7/1", "7/2", "8/1", "8/2"]
    }, {
      name: "вул. Російська",
      number: ["59", " 11", "13", "13А", "19", "21", " 31", "31Б", "33", "35", "37", "37А", "39/14", "42/15", "44", "48", "50", "52", "52/16", "154/15", "54/16", "56", "58", "58А", "60", " 45", "45/1", "45Б", "45В", "47", "47/1", "57", " 64", "68", "70", "70/1", "72/3", "72/4", "74", "74А", "74Б", "76/4", "82", "82А", "84", " 28", "30", "32", "34", " 1"]
    }, {
      name: "вул. Росошанська",
      number: ["3", "3/1", "3/3", "3корп1", "3корп2", "3корп3", "3корп4", " 3А", "3А/1", " 4"]
    }, {
      name: "вул. Ростовська",
      number: ["2", "2А", "2/2", "4", "4А", "4Б", "6", "6А", "8", "8А", "8Б", "8В", "8Г", "10", "12", "14", "16", "18", "20", "22"]
    }, {
      name: "вул. Рубежівська",
      number: ["21А", "24/1", "24/2", "28А", "29/1", "29/2", "33/1", "35", "36", "37", "38", "38/2", "39/1", "39/2", "40", "43/1", "43/2", "44", "46", " 8", "9", "9А"]
    }, {
      name: "вул. Руданського",
      number: ["1А", "1Б", "3А", "5", "6", "12", "13"]
    }, {
      name: "вул. Руденко Лариси",
      number: ["21", "21А", " 6", "6А", "8", "8А", "8В", "10", "10А", "10Б", "10В", "10Г", "10Д", " 3", "3А", "3Б", "3В", "5", "7", "7А", "7В", "9", "9А", "11", "13", "15/14", "17"]
    }, {
      name: "вул. Ружинська",
      number: ["11", "11А", "30/32", " 15/18", "17", "19", "19А", "21", "23", "25", "27", "29/1", "29/2", "31", "38", "40", "42", "44", "46", " 3/56", "5", "7/43", "18/59", "20/54", "24", "26/41", " 2/50", "8", "10", " 12", "14", "16"]
    }, {
      name: "вул. Русанівські сади",
      number: ["1", "2", "4", "15Б"]
    }, {
      name: "вул. Русової Софії",
      number: ["1", "1Б", "1В", "3", "3А", "3Б", "5", "5Б", "7", "7Г", "9А"]
    }, {
      name: "вул. Руставелі Шота",
      number: ["1", "1/12", "4", "6", "8", "10", "11", "12", "13", "15", "15Б", "16", "16А", "17", "18", "18Б", "19", " 25", " 20", "20Б", "20В", "21", "22", "22Б", "23", "24", "25Б", "26", "26А", "27", "27Б", "29", "29Б", "30", "30Б", "31", "31Б", "32", "33", "33Б", "34", "36", "38", "38Б", "38В", "39/41", "40/10", "42/13", "44", "46", "47", " 20", "21", "22", "22Б", "23", "24", "25", "25Б", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "37", "38", "38В", "40", "40/10", "42/13", "44", " 3", "5", "9", "9А"]
    }, {
      name: "вул. Рябова Олега",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "19", "19", "20", "21", "22", "23", "24", "26", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "64Б"]
    }, {
      name: "вул. Саврасова",
      number: ["1", "2А", "2Б", "3", "4", "5", "6", "7", "8", "9", "10/1", "10/2", "11/1", "11/2", "13", "14/1", "14/2", "17/1", "17/2", "18/1", "18/2", "19", "20", "21", "22", "24А", "24Б"]
    }, {
      name: "вул. Сагайдачного Петра",
      number: ["14", "14Б", "16", "16А", "16Б", "29", "29А", "29Б", "29/1", " 1", "3", "4", "6", "6А", "8", "8/10", "10", "10/5", "11", "12", "12А", "15", "17", "19", "21", "23/4", "25", "25А", "25Б", "25В", "25Г", "25Е", "27", "27А", " 20", "20А", "22", "22/1", "24", "31", "31А", "33", "35", "37", "37А", "39", "41"]
    }, {
      name: "вул. Садова",
      number: ["3", "3А", " 14 января"]
    }, {
      name: "вул. Садова (Бортничі)",
      number: ["1", "2", "3", "4", "5", "6", "7", "9", "10", "11", "12", "13", "14", "14/1", "15", "16", "17", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "37", "38", "39", "40", "41", "43", "45", "47"]
    }, {
      name: "вул. Садова (Жуляни)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "14А", "15", "16", "17", "18", "18В", "19", "20", "21", "22", "23", "23А", "24", "25", "25А", "26", "26А", "27", "27А", "28", "29", "30", "31", "32", "33", "34", "36", "38", "40", "40А", "42", "44", "46", "46А", "46Б", "48", "50", "51", "52", "54", "56", "56/1", "56/2", "56/3", "56А", " 57", "58", "60", "60А", "61", "62", "64", "64А", "66", "68", "68/1", "70", "70/1", "70/2", "70/3", "70/4", "70/5", "70/6", "70/7", "70/8", "70/9", "70/10", "70/11", "70/12", "70/13", "70/14", "70/110", "8071", "76", "77", ""]
    }, {
      name: "вул. Садова (Троєщина)",
      number: ["1", "2", "2А", "3", "4", "5", "6", "7", "8", "9", "10", "10А", "11", "12", "12А", "13", "13А", "14", "14А", "15", "16", "17", "18", "19", "21", "21Б", "22", "23", "24", "27", "27А"]
    }, {
      name: "вул. Садовського Миколи",
      number: ["6Б", "6/8", "6/8-1", "7", "8", "9", "10", "12", "20", "20А"]
    }, {
      name: "вул. Сажина",
      number: ["1", "2", "3", "4", "5", "6", "7/1", "7/2", "8/12", "9", "10", "11/1", "11А"]
    }, {
      name: "вул. Саксаганського",
      number: ["59", "100", "102А", "102Б", "104", "104А", "106", "110", "111", "111А", "112А", "112Б", "115А", "115В", "117", "118", "119", "120", "121", "123", "125", "127", "129", "129А", "129Б", "129В", "131А", "131Б", "133А", "139", "139Б", "143", "145", " 70/16", "70А", "70Б", "72", "74", "74Б", "74В", "76", "78", "78А", "78Б", "82", "84/86", "87", "89А", "89Б", "91", "93", "95", "96", "97", "99", "101", "103", "106/11", "107", " 88", "92", "92/94", "109", "112", "113А", " 18", "20", "22", "22Б", "24", "26", "28", "30", "30Б", "30В", "32", "34", "36", "36Д", "38", "38Б", "40", "40/85", " 2", "3", "4", "4Б", "5", "6", "7", "9", "12", "12Б", "13", "14", "25", "25Б", "27", "27Б", "28В", "29", "31", "33/35", "37", "39", "39Б", "41", "41В", "43", "43Б", "45", "51", " 42", "44", "44А", "44Б", "44В", "44Г", "46", "48", "52", "53/80", "54/56", "55", "58", "60", "60А", "60Б", "60В", "64", "64А", "65", "65А", "66", "66Б", "67", "67А", "67Б", "68/21", "69", "73", "75", "77", "79", "81", "83", "83А", "85", " 57А", "57Б", "59Б", "61/17", " 61/17А", "63/28", " 1"]
    }, {
      name: "вул. Сальського Володимира",
      number: ["17/11", "19", "21", "23", "25", "27", "29", "31", "33", " 2", "4", "5", " 3", " 8", "9/27А", "11", "14", "16", "16А", "18", "18/1", "18А", "20", "20/1", "22", "24", "26", "28", "30", "32", "34", "36", "36А", "36Б", "38", "40", "42", " 43", "47"]
    }, {
      name: "вул. Салютна",
      number: ["11А", "24", "24/56", "26/1", "26/2", "28/1", "28/2", "30/2", "31/1", "32", "34/1", "34/2", "35", "36/1", "36/2", "38/1", "40", "42/46", " 18", "20", "20А", "22", " 1А", "1Б", " 6", "8", "10", "12/62", "14/51", " 1", "2", "2А", "2Б", "2В", "2Г", "2Д", "2К", "2Л", "3", "5", " 4", "4А", "9", "11", "13", "15", "17", "19", "21", "23", "23А", "25", "25А", "27", "27А", "29", "29А", "31/53"]
    }, {
      name: "вул. Санаторна",
      number: ["5", "5А", " 9", "9А", "11", "12", "12/1", "18", "18А", "23", "23/1", "27"]
    }, {
      name: "вул. Санітарна",
      number: ["1А", "3", "3А", "4/1"]
    }, {
      name: "вул. Сантьяго-де-Чилі",
      number: ["б/н"]
    }, {
      name: "вул. Саперне поле",
      number: ["3", "5", "5А", "5Б", "9А", "12", "14/55", "23", "25/1", "25/2", "25/3", "26", "26А", "27", "28", "29", "30", "31", "33", "35", "35А", "37", "41", "41/2", "43/1", "43/2", "43/3", "43/4", "45"]
    }, {
      name: "вул. Саперно-Слобідська",
      number: ["4", "8", "10", " 22", "24", "100", "100/57", " 25", "37", "39", "57"]
    }, {
      name: "вул. Саратовська",
      number: ["10", "10А", "12/28", "14/9", "14А", "16", "18/16", " 3", "5", "7", "9", "11/32", "13/37", "15", "17", "19", "21А", "23", "25", "25А", "27", "31/41", "33", "35", "35А", "37", "37А", "39", " 20", "53/31", "55", "59", "61", "63", "65", " 45", "47", "47А", "49", "49А"]
    }, {
      name: "вул. Свєтлова Михайла",
      number: ["1", "3", "9", "17", "18/1", "18/2"]
    }, {
      name: "вул. Світла",
      number: ["1", "1/1", "3", "3Дкорп1", "3Дкорп2", "3/1", "6", "6А", "6Б", "6/1", "8"]
    }, {
      name: "вул. Світлицького",
      number: ["19", "21", " 13", "23", "23А", "25", "27", "29/18", "31/7", "33", "33А", "35", "35А", " 10", "35Б", " 34", "37", " 24", "24А", "28", "30/20", "30/20А", " 26", "26А", "26Б", " 24Б", "28Б", "28В", "30/20Б"]
    }, {
      name: "вул. Світличного Івана",
      number: ["1", "2", "4", "4А", "6", "8", "10", "12"]
    }, {
      name: "вул. Світлогірська",
      number: ["2/25", "5/6"]
    }, {
      name: "вул. Святищенська",
      number: ["2", "4", "5", "6", "8", "10", "12", "14", "16А", "16Б"]
    }, {
      name: "вул. Святкова",
      number: ["б/н"]
    }, {
      name: "вул. Свято-Георгіївська",
      number: ["10", "10А", "23"]
    }, {
      name: "вул. Святославська",
      number: ["8", "15"]
    }, {
      name: "вул. Святошинська",
      number: ["1", "2", "3", "4", "6", "15", "15А", "18", "20", "23", "24", "25", "26", "27", "28", "28А", "30", "30А", "32", "34", "34А"]
    }, {
      name: "вул. Севастопольська",
      number: ["11/27", "12/22", "13", "14", "15/29", "16/27", "17", "18", "19", "22", "24", " 1/1", "5", "5Б", "5Б/1", "5Б/2", "7/13", "9"]
    }, {
      name: "вул. Северина Наливайка",
      number: ["б/н"]
    }, {
      name: "вул. Северинівська",
      number: ["б/н"]
    }, {
      name: "вул. Селекціонерів",
      number: ["2А/1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13/22", "14", "16"]
    }, {
      name: "вул. Селянська",
      number: ["1А", "2", "6"]
    }, {
      name: "вул. Семафорна",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17/25", "19/32", "21", "23", "25"]
    }, {
      name: "вул. Семашка",
      number: ["10", "12", "16", "16А", " 13", "15", " 8А", " 9", "17", "21", " 8"]
    }, {
      name: "вул. Семенівська",
      number: ["3", "4", "6", "7", "8", "9", "10/9", "11", "12", "13", "14", "16", "18", "19"]
    }, {
      name: "вул. Сеноманська",
      number: ["13/2", "14/1", "15/1", "16/3", "17", "18/5", "202", " 1/2", "3/1", "4", "5/2", "6", "7/1", "8/1", "8А", "8А/2", "9/2", "10", "10А", "10А/1", "10А/2", "12", "12А"]
    }, {
      name: "вул. Сергієнка Івана",
      number: ["43892", " 6", "11", "13", "15", "16", "17", "18", "19", "21", "23", "23А", " 1", "3", "3А", "5", "7"]
    }, {
      name: "вул. Сержа Лифаря",
      number: ["2А", " 1", "1А", "3", "3А", "3Б", "5", "5А", "5Б", " 13", "15", "17", "17А", "17Б", "19", "19А", "19Б", "19Г", " 9/61", "11", "11А", "11Б", " 2/1", "2А", "2А/2", "2А/3", "2А/4", "4", "6", "8", "8А", " 14", "16", "16А", "16Б", "18", "20", "20/1", "20А"]
    }, {
      name: "вул. Серпнева",
      number: ["б/н"]
    }, {
      name: "вул. Серпова",
      number: ["11", " 1", "2/3", "3/14", "4", "6", "8", "10", "12", "12А", "14", " 16/21", " 1", "9", "9А", "16", "18"]
    }, {
      name: "вул. Сєдова",
      number: ["1", "2", "2А", "3", "4", "5", "6", "8", "10", "10А"]
    }, {
      name: "вул. Сєдовців",
      number: ["7", "8", "8А", "9", "9А", "10", "14", "18", "20", "22", "24"]
    }, {
      name: "вул. Сєрова Валентина",
      number: ["28", "30", "30А", "30Б", "34", "36"]
    }, {
      name: "вул. Сєченова",
      number: ["2", "3", "4", "5", "6", "6А", "7", "7А", "8", "8корп1", "9", "10корп1", "10корп2", "10корп3", "10А", "17"]
    }, {
      name: "вул. Сивашська",
      number: ["1", "1А", "3", " 1", "14А", "16А"]
    }, {
      name: "вул. Сигнальна",
      number: ["1", "2", "3", "3А", "4", "5", "6", "7/34", "8/36", "9/29", "10/31", "11", "12", "13", "14", "15/1", "15/2", "16/1", "16/2", "17", "18/1", "18/2", "19А", "19/46", "21/53", "22", "23", "24/1", "24/2", "24/3", "25", "27", "29", "31", "33", "35/1", "35/2", "37/76", "45/38"]
    }, {
      name: "вул. Симиренка",
      number: ["12", "12А", "12Б", " 16", "18", "18А", "18Б", "20", "20А", "22", "22А", "22Б", "22В", "22Г", "24", "24А", "26", "26А", "28", "28А", " 34", "34А", "36", "38", "40", " 1", "1Б", "1В", "1Г", " 17", "17А", "19", "21", "21А", "23", "25А", " 2/19", "2Б", "2В", "10", "14А", "14Б", "14/19", " 25", "27", "29", "31", " 5", "5Б", "5В", "7", "7А", "7Б", "13"]
    }, {
      name: "вул. Симоненка Василя",
      number: ["5", "5А"]
    }, {
      name: "вул. Синьоозерна",
      number: ["2", "2А", "2Б", "4", "4А", "6", "8"]
    }, {
      name: "вул. Сирецька",
      number: ["102", "104", "106", "108", "110", "111/1", "111/2", "112", "114", "116", "118А/1", "118А/2", "120/1", "120/2", "122", "124/1", "124/2", "126", " 5", " 9", "9Б", "30/1", "32", "32/1", "32/2", "32/34", " 13/71", " 25", "25А", "27", "27А", "28/2", "29", "31", "33", "33А", "33В", "33Ш", "36", "37", "37А", "38", "38А", "38В", "38Г", "39", "40", "42/44", "43", "46А", "48", "48А", "50", "52", "54", "56", "58", "58А", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "84/1", "86", "88", "92", "94", "96", "98", "100", "100А", "100Б", "100В", "100Г/1", "100Г/2", " 49", "49А", "49Б"]
    }, {
      name: "вул. Ситняківська",
      number: ["б/н"]
    }, {
      name: "вул. Сікорського Ігоря Авіаконструктора",
      number: ["1", "4", "4А", "6", "6А", "8", "10", "12", "14", "14/1", "14/2", "16", "18"]
    }, {
      name: "вул. Сілікатна",
      number: ["3", "3/1", "3/2", "4", "5", "7", "8", "9", "10", "11", "12/1", "14", "14/2", "18", "18/3"]
    }, {
      name: "вул. Сільська",
      number: ["4", "6", "8", "10", "12", "14"]
    }, {
      name: "вул. Сім'ї Ідзиковських",
      number: ["2", "4", "4А", "11/13", "15/17", "17", " 23", "25", "37", "39", "39А", " 41", "41А"]
    }, {
      name: "вул. Сім'ї Кульженків",
      number: ["3", "5А", "12", "12А", "12Б", "14", "14А", "14Б", "26/28", " 1", "1А", "1/2", "31", "31А", "31Б", "33", "33А", "35", "37", " 13", "13/1", "22"]
    }, {
      name: "вул. Сім'ї Прахових",
      number: ["3", "5", "6", "7", "8", "13", "20", "22", "27", "50", "54"]
    }, {
      name: "вул. Сім'ї Стешенків",
      number: ["1", "2", "3", "5", "6", "7", "9", "9А"]
    }, {
      name: "вул. Сім'ї Ханенків",
      number: ["1", "1А", "1Б", "2", "2А", "3", "4", "5", "5А", "6", "6А", "7", "8", "9", "10", "10А", "11", "12", "12А"]
    }, {
      name: "вул. Сім'ї Шовкоплясів",
      number: ["б/н"]
    }, {
      name: "вул. Сімферопольська",
      number: ["11", "11/1", "13А", "17/2", "19", "19/1", "21/9", " 3/2", "5/1", "7/2", "9", " 4", "6", "8", "8/1", "8корп1", "8корп2", "10"]
    }, {
      name: "вул. Сірка Івана",
      number: ["1", "2", "3", "4", "4А", "5", "7", "9", "10", "11", "12", "13", "13/1", "15", "16"]
    }, {
      name: "вул. Січнева",
      number: ["б/н"]
    }, {
      name: "вул. Січових Стрільців",
      number: ["58/2А", "58/2Б", "58/2В", "58/2Д", "60", "68", "68", "70", "72", "74", "76", " 103", "103А", " 82", "84", "91", "93", " 43", "45", "45А", "47", "47А", "48", "49", "49/51", "50", "51/50", "52А", "52Б", "52Д", "53", "55", "55Б", "55В", "57", "59/65", "73", "75", " 1", "1/5", "3", "5", "5А", "5Б", "5В", "7", "9", "11", "11А", "13", " 18", "20", "21", "22", "24", "25", "26", "26А", "26Б", "26В", "27", "28А", "30А", "30Б", "31", "33А", "33Б", "35", "37/41", " 59", "59А", " 77", "79", "81", "89", " 10", "10Б", "12", "14", "14А", " 32/38", "40", "42", "44", "46", " 15"]
    }, {
      name: "вул. Сквирська",
      number: ["3", "4", "5/1", "5/2", "6", "7", "8", "9", "10", "11", "12/1", "12/2", "13", "16", "17/1", "17/2", "17/3", "18/1", "18/2", "20", "22", "24/1", "24/2", "26", "28", "30/22"]
    }, {
      name: "вул. Скляренка Семена",
      number: ["1", "1А", "1Б", "4", "4А", " 5", "22", "50", " 7", "9", "11", "15", "17", "19"]
    }, {
      name: "вул. Сковороди Григорія",
      number: ["1", "1А", "1В", "2", "3", "4/2", "5", "5А", "7", "7А", " 6", "9Б", "11", " 12", "14", "15/10", "17В", "17Г", "19", "21/16"]
    }, {
      name: "вул. Славгородська",
      number: ["8", "10", "12", "14", "19", "19/56", "23", "25", "27", "29", "31", "33/5", "35", "37", "39", "41", "43", "45", "47", "49", " 49/1", "49/2", "49Б", "54", " 3/5", "3/5А", " 2/10", "2/10А", "4", "4/1"]
    }, {
      name: "вул. Словечанська",
      number: ["3", "4", "5", "6", "7", "8", "12", "13"]
    }, {
      name: "вул. Слов'янська",
      number: ["28"]
    }, {
      name: "вул. Смерекова",
      number: ["38"]
    }, {
      name: "вул. Смілянська",
      number: ["1", "7", "9", " 11", "13", "15", "17", "19", " 10", "10/31", " 2", " 4", "6"]
    }, {
      name: "вул. Смоленська",
      number: ["3", "3А", "4", "4А", "5", "5/1", "6", "8", "17", "19"]
    }, {
      name: "вул. Смолича Юрія",
      number: ["2", "2А", "4", "4А", "6", "6А", "6Б", "6В"]
    }, {
      name: "вул. Смольна",
      number: ["4", "7", "9", "9Б"]
    }, {
      name: "вул. Снайперська",
      number: ["10", "12/1", "12/2", "13", "13/1", " 3", "4", "6/18", " 18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
    }, {
      name: "вул. Сновська",
      number: ["4", "6", "7", "8", "9", "10", "11", "20"]
    }, {
      name: "вул. Сови Андрія",
      number: ["6", "8"]
    }, {
      name: "вул. ''Совки'' радгосп",
      number: ["1", "3"]
    }, {
      name: "вул. Совська",
      number: ["1", "1А", "2", "2А", "3", "4", "4А", "5", "5А", "6", "7", "8", "9", "10", "11", "11А", "12", "13", "14", "15", "15А", "16", "17", "17А", "18", "19", "20", "21", "22", "22А", "23", "24", "25", "26", "26А", "27", "27А", "28", "28А", "29", "30", "31", "32", "33", "34", "35", "48", "52"]
    }, {
      name: "вул. Сокальська",
      number: ["1", "3", "3/1", "4", "4/2", "5", "5А", "6", "6/1", "11"]
    }, {
      name: "вул. Солов'їна",
      number: ["2", "3", "4", "4А", "4Б", "5", "7", "8", "9", "9А", "10", "11", "12", "13", "13А", "14", "15", "16", "28", "28А", "29", "30", "30А", "30Б", "31", "31А", "32", "33", "35", "37", "38", "39", "40", "40А", "41", "43", "47", "48", "49", "51", "53", "55", "57", "59", "59Б", "65"]
    }, {
      name: "вул. Соловцова Миколи",
      number: ["2", "4", "8", "10", "11", "12", "13", "14", "16", "17А", "17Б", "18", "21", "23", "23А/1", "23А/2", "25", "27", "29"]
    }, {
      name: "вул. Солом'янська",
      number: ["1", " 28/30", "30", "32", "34", "34А", "36", "38", "41", "41/2", " 17", "17А", "17Б", "19", "19А", "21", " 23", "23А", "27", "28", "29", "31", "33", "33А", "35", "35А", " 3", "3А", "3Б", "4/2", "5", "7", "7А", "11", "11А", "11Б", "13", "15А", " 37", "39", " 22", "24", " 14", "16Б", "18А", "20", "20А", "20Б", "20В", "20Г", " 6В", "10", "16", "16А"]
    }, {
      name: "вул. Соляна",
      number: ["25/27", "55", "55А", "57", "74"]
    }, {
      name: "вул. Сонячна",
      number: ["2", "2/6-1", "3/1", "3/2", "4/1", "4/2", "4А/2", "4А/4", "5", "5А/1", "5А/2", "5Г/1", "5Г/2", "6", "7А/1", "7А/2", "8", "8А", "9", "10", "10А", "11", "14", "15", "16/1", "16/2", "16А", "17"]
    }, {
      name: "вул. Сормовська",
      number: ["3", "5", "9", " 13", "15", "16", "18"]
    }, {
      name: "вул. Сорочинська",
      number: ["2", "4", "6", "8А", "10", "12", "12А", "16", "18", "18А"]
    }, {
      name: "вул. Сортувальна",
      number: ["2", "4", "5", "5А", "5А/1", "5А/2", "20", "22"]
    }, {
      name: "вул. Сосницька",
      number: ["8А", "10", "19", "21"]
    }, {
      name: "вул. Сосніних Cім'ї",
      number: ["11", "13", "13А", "15", "15А", "17", "17А", " 2/1", "2А", " 1Б", " 6", "6А", "8", " 12А", " 10", "12", "14", "14А", "14Б", "16", "18", " 2Б", "2В"]
    }, {
      name: "вул. Сосніних Сім'ї",
      number: ["1", "3", "3/5", "3А", "5", "7", "7А", "9", "9/1", "9А"]
    }, {
      name: "вул. Соснова",
      number: ["8", "10", "10А", "12", "12А", "14", "16", "16А", "18", "18А", "20", "20А", "22", "22А", "24", "24А", "26", "28", "30", "32", "34", "38", "38А", "38Б", "38В", "42", "42А", "44", "48", "50", "50А"]
    }, {
      name: "вул. Соснова (Жуляни)",
      number: ["1", "2", "11", "12", "14", "18", "21"]
    }, {
      name: "вул. Соснова (Новобіличі)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32"]
    }, {
      name: "вул. Сосюри Володимира",
      number: ["4", "5", "6", "7", " 68"]
    }, {
      name: "вул. Софіївська",
      number: ["1", "1/2", "1/2А", "3Б", "5", "11-15", "17", "19", "23", "25", " 2", "2А", "4", "6", "8", "10", "10/4", "10А", "10Б", "12", "14", "15", "16/16", "18", "20/21"]
    }, {
      name: "вул. Сошенка",
      number: ["2", "2А", "3", "4", "5", "6", "7", "8/1", "8/2", "9/1", "9/2", "10", "10А", "10Б", "10В", "10Г", "10Д", "10Е/1", "10Е/2", "11", "11А", "11Б", "14", "15/1", "15/2", "16", "16А", "16А/1", "17", "18", "19/1", "19/2", "19/3", "20", "21/1", "21/2", "22", "23", "24", "25/1", "25/2", "26/1", "26/2", "26А/1", "26А/2", "27", "28", "28А/1", "28Б", " 29/60", "30", "32", "32А", "34", "34А", "36", "38/1", "38/2", "40/1", "40/2", "42", "42/1", "42/2", "44", "44А/1", "44А/2"]
    }, {
      name: "вул. Спартаківська",
      number: ["б/н"]
    }, {
      name: "вул. Спаська",
      number: ["2", "6А", "6Б", "6Д", "7/3", "8А", "8Б", "9", "9А", "10", "10В", "10Г", "11", "12", "12Б", "12В", "13", "16", "16Б", "18/20", "21/23", "22", "24/15", "25", "25/17", "27/16", "30", "30А", "31Б", "36", "36Г", "37", "39", " 5"]
    }, {
      name: "вул. Спокійна",
      number: ["4", "4А", "5", "5А", "6", "7", "7А", "8", "9", "9А", "10", "11", "11А", "13", "16", "16А", "18", "18А", "20", "22", "24", "24А", "26", "28", "28А", "29", "29А", "30", "32"]
    }, {
      name: "вул. Срібнокільська",
      number: ["1", "1/1", "1/2", "1А", "2А", "2А/2", "3", "3/1", "3/2", "3/3", "3А", "3Б", "3В", "3Д", "4", "4/1", "4А", "5", "5А", "5Б", "5В", "7А", "8", "8/2", "8А", "8А/1", "9", "9А", "12", "14А", " 11", "13", "14", "14Б", "16", "16А", "20", "20/1", "20/2", "20В", "22", "22А", "22А/1", "24", "24А"]
    }, {
      name: "вул. Ставкова",
      number: ["2", "12", "14", "16", "18"]
    }, {
      name: "вул. Ставропольська",
      number: ["28", "28А", "29", "30", "31", "33", "33А", "35", " 17А", "19", "21", "21А", "22/1", "22/2", "22/3", "23", "24/1", "24/2", "27/29", " 3А", "6", "6А", "7", "7А", "8", "8А", "9", "10/11", "11/13", "12", "12/18", "13/20", "14/16", "15"]
    }, {
      name: "вул. Стадіонна",
      number: ["6", " 5", "5А", "5Б", "14", "16/6", " 6А", " 3А", "13", " 8", "19", "21"]
    }, {
      name: "вул. Стадіонна (Жуляни)",
      number: ["1", "2", "2А", "2Б", "3", "4", "4Б", "5", "6", "6А", "7", "8", "9", "10", "10А", "11", "12", "13", "14", "15", "16", "18"]
    }, {
      name: "вул. Стальського Сулеймана",
      number: ["18", "18А", "18А/1", "20", " 4", "6", "6А", "8", "8Б", "10", "10А", "12", "14", "14А", "14Б", "16", "16А", " 22/10", "24", "24А", "24Б", "26", "28", "28А", "29", "30", "32", "34", "34/12", " 23"]
    }, {
      name: "вул. Станіславського",
      number: ["3"]
    }, {
      name: "вул. Станюковича",
      number: ["2/1", "4", "4/1", "4А", "5А", "6", "7", "8", "9", "10/30", "11/34", "38/9"]
    }, {
      name: "вул. Стара Поляна",
      number: ["36", "38", "40", "44", "46", "55", "61", "63", "71", "73", "83"]
    }, {
      name: "вул. Старицького",
      number: ["1", "1/6", "3", "3/2", "4", "4/2", "5", "5/2", "5А", "5Б", "5В", "6", "7", "7/2", "7/4", "7А", "8", "10"]
    }, {
      name: "вул. Старицької-Черняхівської",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"]
    }, {
      name: "вул. Старобориспільська",
      number: ["1Г", " 12/2", "16"]
    }, {
      name: "вул. Старовокзальна",
      number: ["7А", "7Б", "7В", "9А", "9Б", "9В", "12", "13", "14/16", "17", "18", "21", "22", "23", "24", "26"]
    }, {
      name: "вул. Старокиївська",
      number: ["01 мая", " 7/9", "8/12", "14", " 5", "9", "10", "10Г", "10И", "25", "26", "27", "28У"]
    }, {
      name: "вул. Старонаводницька",
      number: ["2/20", "4", "4А", "4Б", "4В", "6", "6А", "6Б", "8", "8А", "8Б", "10Б", "13", "13А", "13Б", " 3", "17/2", "25", "27", "29", "31", "35", "37", "39", "41", "42", "43", "45", "47"]
    }, {
      name: "вул. Старообухівська",
      number: ["4", "5", "7", "12", "24"]
    }, {
      name: "вул. Старосільська",
      number: ["1", "1А", "1Д", "1Е", "2", " 26", "26А", "52", "52А"]
    }, {
      name: "вул. Стельмаха Михайла",
      number: ["12", "12А", " 3", "6", "6А", " 7/2", "8", "9", "10А", " 14/1", "14/2", "16", "18", " 17/1", "17/2", "20", "22"]
    }, {
      name: "вул. Степанченка Василя",
      number: ["3", "5", "7", "9", "11", "13", "15", "17", "19", " 3", "5", "4А", "8", "8А"]
    }, {
      name: "вул. Степового Якова",
      number: ["8", "9", "10", "11", "13", "16", "17", "18", "19", "20", "21", "23", "25", "27"]
    }, {
      name: "вул. Стеценка",
      number: ["19", "19/54", "19/68", "19/8", "75А", "75Б", " 12", "12/157", "12/175", "12/192", "14", "16", " 9", "11", "13", " 4", "4А", "6", "8", "10", " 1", "1А", "2", "2А", "3", "5"]
    }, {
      name: "вул. Столєтова",
      number: ["3", "3А", "4", "5", "6", "7", "9/1", "9/2", "10", "11", "12", "13", "13/2", "14/1", "14/2", "14А", "15/1", "15/2", "16", "17", "18", "19", "20", "21", "22/1", "22/2", "23", "24", "25", "26", "27", "27/1", "27/2", "28", "29/1", "29/2", "30", "31", "33/1", "33/2", "34", "35", "36", "37", "38", "39", "40", "41/1", "41/2", "42", "43", "45", "46А", "47", "48", "49", "51", " 53/1", "53/2", "55/1", "55/2"]
    }, {
      name: "вул. Стражеска академіка",
      number: ["5", "7", "9", "11", " 1", "2", "3", "3А", " 6", "6А"]
    }, {
      name: "вул. Стратонавтів",
      number: ["1", "2", "2А", "3", "3А", "4", "5", "6", "7", "8", "8А", "9", "10"]
    }, {
      name: "вул. Стрийська",
      number: ["3", "4", "6", " 12 марта"]
    }, {
      name: "вул. Стрілецька",
      number: ["4", "4-6", "7/6", " 12", "16", "20", "24", "24Б", " 28"]
    }, {
      name: "вул. Стрілкова",
      number: ["3", "3А", "5/35", "7/34", "9/23", " 4", "6", "8", "14/21", "33/8"]
    }, {
      name: "вул. Стрітенська",
      number: ["2/8", "6/7", " 4/13", "7/9", "9", "10", "11", "13", "15", "17"]
    }, {
      name: "вул. Студентська",
      number: ["11", " 4", "5", "5/7В", "6", "7", "9", "12/14", "12Б"]
    }, {
      name: "вул. Стуса Василя",
      number: ["35/37", "35/37Б", " 2", "4", "5", "6", "6А", "7", "7А", "8", "9", "10", "12", "14", " 22/1", "22/11", "23/9", "24", "25", "26", "26А", "27", "28", "28А"]
    }, {
      name: "вул. Суворова (Бортничі)",
      number: ["1", "2", "3", "4", "5", "6", "7", "7А", "8", "9", "11", "12", "13", "13/1", "14", "16", "17", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "40А"]
    }, {
      name: "вул. Суворова (Троєщина)",
      number: ["1", "2", "3", "4", "4А", "5", "5А", "6", "6А", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16А", "17", "17А", "18", "18А", "19", "20", "20А", "21"]
    }, {
      name: "вул. Суздальська",
      number: ["23", "25", "27", "29", "31", "33", "35", "37", "41", " 4/6", "13"]
    }, {
      name: "вул. Сумська",
      number: ["1", "2", "2/1", "2А", "2А/1", "2А/2", "2А/3", "2/3", "3", "3/2", "3/3", "3/4", "3/5", " 25А", "33/1", "33/2", "33/3", "35", "38", " 4", "6", "8/1", "8/2", "9", "10/1", "10/2", "12/1", "12/2", "14", "16/1", "16/2", "18/1", "18/2", "20"]
    }, {
      name: "вул. Сурікова Василя",
      number: ["3", "3А", "4", "5", "5А"]
    }, {
      name: "вул. Сухомлинського Василя",
      number: ["4", "9", "13", "15", "17", "19"]
    }, {
      name: "вул. Сухумська",
      number: ["1", "2", "2/6", "3", "4", "5", "6", "6А", "7/1", "7/2", "8", "9/1", "9/2", "10", "10/2", "10/3", "11/1", "11/2", "11/3", "12", "14", "16", "18", "20", "20/2", "20/3", "22", "22/2", "24", "24/2"]
    }, {
      name: "вул. Табірна",
      number: ["28", "30", "32", "42", " 36", "38", "40", "44", "46/48"]
    }, {
      name: "вул. Таврійська",
      number: ["3/11", "5", "7", "7А", "8", "8/6", "9", "9/2", "9А", "10", "11А", "11/1", "13/1", "14/2", "15/2", "19", "19А", "21", "21/2", "23"]
    }, {
      name: "вул. Таганрозька",
      number: ["4А", "6"]
    }, {
      name: "вул. Тагільська",
      number: ["1/5", "1/5Г", "2", "2А", "3", "3Г", "4", "4А", "4Б", "4Г", "5", "5А", "5Г", "6", "6А", "6Б", "7", "8", "9", "9Г", "9з", "10", "11", "11Г", "11з", "12", "12А", "13", "14", "14/2", "15", "16", "17", "18А", "18Б", "18Г", "18з", "19", "19Г", "19з", "20", "20А", "21", "22", " 22А", "23", "24", "24Г", "25", "26", "27", "27/1", "28/1", "28Г", "29", "30", "31", "32", "32Г", "32з", "33", "35", "35Г", "35з", "35/5", "37", "37Г", "37з", "41", "41Г", "43", "43Г"]
    }, {
      name: "вул. Тальнівська",
      number: ["2"]
    }, {
      name: "вул. Тампере",
      number: ["9Б", "11", "11А", "13", "13А", "13Б", "14", "14А", "15", "16", "16А", "17/2", "17А", "17Г", "18/19", "51А", " 1", "1/21", "1/22", "2/20", "2А", "3", "3А", "4", "5", "5А", "6", "7", "7А", "8", "8А", "8Б", "9", "10", "10/1", "10А", "12", "12А", "12Б"]
    }, {
      name: "вул. Танкістів",
      number: ["1/12", "2/10", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19/13", "20", "22", "24/11", "26/10", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48/11"]
    }, {
      name: "вул. Таранушенка Стефана",
      number: ["1", "2", "3", "4", "4А", "5", "6", "7", "8", "9", "10", "10А", "11", "12", "13", "14", "15", "16", "16А", "17", "19"]
    }, {
      name: "вул. Тарасівська",
      number: ["16", " 33", "42", "44", " 2", "2/21", "3", "3А", "4", "4А", "6", "6А", "7", "8", "9", "9А", "10", "10А", "11", "12", "13", "14", "15", "15А", "18", "20", "20/50", "22", " 19", "21", "23/25", "29", "30", "36", "36А", "38", "40/52"]
    }, {
      name: "вул. Тарасової Алли",
      number: ["4", "6", "6Б", "8А"]
    }, {
      name: "вул. Таращанська",
      number: ["3/1", "3/2", "4", "5", "7", "9", "10", "11", "12", "12/2", "13"]
    }, {
      name: "вул. Татарська",
      number: ["3/2", "7", "20", "21", "23/25", "27/4", "32", "32А", "32Б", " 36/5", "38", " 1А", "1В", "2", "2А", "2Б", "2В", "2Г", "2Д", "2Е", "6", "18Б"]
    }, {
      name: "вул. Ташкентська",
      number: ["1/32", "2", "3А/15", "3/8", "4", "5/8", "7", "7А", "8", "9", "10/9", "11/31", "12/12", "13", "14", "15", "16/34", "17", "17А", "17Б", "18", "18А", "18Б", "19А", "19/1", "20", "21", "21А", " 27/15", "29А", "29/14", "33", "33А", "33/18", "34/12", "35", "37/24", "43/33", "44", "44/2", "45/36", "45А", "45Б", "47", "48", "49А", "49/8", "50", "51", "52", "52А", "54", "54А", "56", "57А", "57/1", "59", "60", "61", "62А", "63", "64", "66", "67", "67А", "68", "69/9", "70", "73", "75", "77/10"]
    }, {
      name: "вул. Творча",
      number: ["4", "6", "9", "44", "57"]
    }, {
      name: "вул. Теліги Олени",
      number: ["23А", " 21", "21А", "23", "25А", "25Б", "27", "27А", " 29", "29А", "31/1", " 37", "37А", "37Б", "41", "41В", "49", " 37В", "37Г", "39", "39Б", "41А", "43", "43А", "43Б", "45", "45А", "51", "53", "55", "57", " 37Д", "37Е", "39Г", " 35", "35А", "35Б", "35В", "35Г", "35Д", " 39А", "39В", "41Б", "61", " 6", "7", "7А", "7Б", "8", "9", "11", " 1А", "2", "3", "3А", "3Б", "3В", "4", "5А", " 13/14", "15", "15А", "17", "17А", "17Б"]
    }, {
      name: "вул. Теплична",
      number: ["1", "2", "2А", "3", "4", "5", "5А", "6", "6А", "7", "8", "8А", "9", "10", "10А", "11", "11А", "12", "12А", "13", "14", "14А", "15", "16", "17", "19", "19А", "21", "21А", "23", "28"]
    }, {
      name: "вул. Тепловозна",
      number: ["1", "1А", "2", "2А", "3", "3А", "4", "4А", "5", "6", "7", "7А", "8", "9", "9А", "9А/1", "9Б", "10", "12", "14", "14А", "16", "16/1", "18", "18А", "18Б", "18В", "18Г", "18Г/1", " 11", "13", "15", "18Д", "18Д/1", "18/1", "20", "22", "22А"]
    }, {
      name: "вул. Теремківська",
      number: ["17", "19", "21", " 1", "2А", "2Г", "3", "5", "7", "9", " 6", "8", "11", "12", "13", "13А", "14", "15", "16"]
    }, {
      name: "вул. Терещенка Миколи",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"]
    }, {
      name: "вул. Терещенківська",
      number: ["3", "3Б", "4", "4Б", "5", "5А", " 2", "3", "7", "7/13", "9", "9Б", "10", "11", "11А", "13", "15", "17", "17Б", "19", "19А", "21", "21А", "23", "25/10", " 11А"]
    }, {
      name: "вул. Тернопільська",
      number: ["7А", "17"]
    }, {
      name: "вул. Терьохіна Олексія",
      number: ["4", "5", "5/7", "6", "8", "8А", "12", "14", "14А", "14Б"]
    }, {
      name: "вул. Теслярська",
      number: ["2", "4", "6", "6/1"]
    }, {
      name: "вул. Тешебаєва",
      number: ["1", "8", "11/1", "11/2", "12", "13", "13А", "14", "15", "16", "17/1", "17/2", "17А/1", "17А/2", "18", "19/18", "20", "21/17", "22", "23", "24/19", "25", "26", "27/1", "27/2", "27А", "28", "28А", "29А", "29/1", "29/2", "29/3", "30", "30А", "31/1", "31/2", "32", "33/1", "33/2", "34", "35", "35/16", "36", "37/17", "38/18", "39", "40/19", "41", "41А", " 42", "43/1", "43/2", "44", "45", "46", "47", "48", "48А", "49", "50", "50А", "51/1", "51/2", "52", "53/1", "53/2", "54", "55/1", "55/2", "57", "57А", " 58", "60", "60А"]
    }, {
      name: "вул. Тимірязєвська",
      number: ["1", "2", "3", "6", "6А", "10/15", "12/28", "14", "20/2Б", "22", "24", "26/1", "26/2", "26А", "28/2", "30", "32", "32А", "32Б", "32В", "34", "34А", "34Б", " 4", " 36", "38", "40", "42/1", "42/2", "42/3", "42/4", "44/1", "44/2", "44", "46А", "48", "50", "52", "54/93", "60", "62", "64", "66"]
    }, {
      name: "вул. Тимошенка Маршала",
      number: ["16", "18", "18/1", "18А", "18А/1", "29", "29/1", "29/2", "29/3", "29А", "29А/1", "29Б", "29БлітА", "29В", "33/35", "33/35А", " 19", "21корп1", "21корп2", "21корп2/1", "21корп2/2", "21корп3", "21корп4", "21корп5", "21корп6", "21корп7", "21корп8", "21корп9", "21корп10", "21корп11", "21корп12А", " 1", "1А", "1Б", "1В", "1Г", "1Д", "1Д/1", "3", "3/1", "3/2", "3/3", "3А", "3Б", "3В", "3В/1", "5", "5/1", "7", "7А", "7А/1", "7А/2", "7Б", "7В", "7Г", "9", "9/1А", "9/2", "9/3", "11", "11А", "11Б", "11В", "11В/1", "11В/2", "13", "13/1", "13/2", "13А", "13А/1", "13Б", "15", "15/1", "15/2", "15А", "15Б", "15В", "15Г", " 4", "4А", "4Б", "6", "6А", "6А/1", "6А/2", "6А/3", "12", "14", "14/1", "14/2", "14/3", "14/4", "14/5", "14/6", "14/7", "14/8", "14/9", "14/10", "14/11", "14/12", "14/13", "14/14", "14/15", "14А", "14А/1", "14А/2", " 2", "2А", "2А/1", "2Б", "2Б/1", "2В", "2Г", " 2/4", "2Д", "2Д/1", "2Е", "2Ж", "2Ж/1", "2Ж/2", "2З", "2К", "2К/1", "2Л", "2М", "2П"]
    }, {
      name: "вул. Тираспольська",
      number: ["3", "4", "5", "6", "7", "8", "12", " 61", "61А", "64", "66", "68", "68А", "68Б", " 39", "40А", "40Б", "40В", "40Г", "40з", "43", "43/1", "43А", "43Б", "49", "58"]
    }, {
      name: "вул. Тиха",
      number: ["1А", "2/36", "3/1", "3/2", "4/1", "4/2", "6", "5/1", "5/2", "7", "9/1", "9/2", "10", "14", "15", "15/1", "15/2", "17", "17/1", "17/2", "18", "19"]
    }, {
      name: "вул. Тихорецька",
      number: ["2/8", "3", "4/1", "4/2", "5", "6", "7", "9", "9А", "9В/1", "9В/2", "10", "11", "11А", "12", "13", "14", "15", "15А", "16", "17", "17/2", "18", "19", "20", "21А", "21/6", "22", "22/1", "24", "26", "28"]
    }, {
      name: "вул. Товарна",
      number: ["1", "1А", "2/1", "2/2", "3", "4", "4А/1", "4А/2", "4А/3", "5", "6/1", "6/2", "6А", "7", "8", "8А/1", "8А/2", "9/1", "9/2", "10", "11", "11/1", "11/2", "12", "13", "14", "15", "16", "17/1", "17/1А", "17/2", "17/3", "18", "18/1", "18/2", "19", "20/1", "20/2", "21", "21/1", "21/2", "22/1", "22/2", "23", "24", "25", "26/1", "26/2", "27/1", "27/2", "27/3", "27/4", "29/1", " 29/2", "30/1", "30/2", "30/3", "30/4", "31", "32/1", "32А/1", "33", "34", "35", "37", "39/1", "39/2", "39/3", "40", "41", "42", "43", "44/1", "44/2", "44/3", "45", "47", "49/1", "49/2", "49/3", "49/4", "51А", "53", "55", "57/1", "57/2", "59/1", "59/2"]
    }, {
      name: "вул. Толбухіна",
      number: ["57", "59/1", "59/2", "61", "63", "65", "67", " 3", "3А", "4", "5", "6", "7", "8", "9", "10", "11", "12/1", "12/2", "13", "14/2", "15", "16/1", "17", "18/1", "18/2", "19", "20/1", "20/2", "21", "22/9", "23", "24/10", "25/1", "25/2", "26", "33", "35", "35А/1", "35А/2", "37/2", "39", "41", "43", "49", "51/1", "53", "53А", "55"]
    }, {
      name: "вул. Толстого (Бортничі)",
      number: ["1", "2", "2А", "2Д", "3", "4", "5", "8", "8А", "9", "9А", "11", "12", "13", "14", "15", "16", "18", "20", "22", "22А", "22Б", "24"]
    }, {
      name: "вул. Толстого Льва",
      number: ["1", "3", "3А", "5", "5А", " 6", "8", "8А", "10", " 7", "9", "9А", "11", "11/61", " 16", "16/18", "31", "33", "39", "41", "43", "47/107", " 22", "49", "51", "55", "55А", "57", "59", " 25", "27/35", " 13", "14", "15", "15Б", "17А", "17Б", "19", "23", " 7", " 61", "63", "64", "65"]
    }, {
      name: "вул. Томашевська",
      number: ["11", "13"]
    }, {
      name: "вул. Томашпільська",
      number: ["3", "4", "5", "6Б", "6/1", "6/2", "7", "8", "8А", "9", "11", "12", "12А", "12Б", "13", "13/6А", "14", "17", "17А", "19А", "19Б"]
    }, {
      name: "вул. Тополева",
      number: ["3", "4", "4/8", "5", "6", "7"]
    }, {
      name: "вул. Тороповського Георгія",
      number: ["39", " 1", "2", "3", "3/1", "4", "5", "5/1", "6", "7", "7/1", "7/2", "8", "9", "9/1", "9/2", "10", "11", "11/1", "11/2", "12", "13", "14", "15", "15/1", "15/2", "16", "17", "17/1", "17/2", "17А", "18", "19", "19/1", "19/2", "19А", "20", "21", "21/2", "22", "23", "23/1", "23/2", "23А", "24", "25", "26", "27", "27/1", "27/2", "28", "29", "29/1", "30", "31", "32", "33", "34", "35", "35/1", "35/2", "35/3", " 37", "37/6", "37А", "39", "40", "41", "43", "45", "47", "49", "49/1", "49/5", "57"]
    }, {
      name: "вул. Травнева",
      number: ["2", "3", "7/1", "7/2", "8/1", "8/2", "8/3", "8/4", "9", "10/1", "10/2", "10/3", "10/4", "11", "12", "18", "20/1", "20/2", "22", "24", "26", "28"]
    }, {
      name: "вул. Трактористів",
      number: ["3", "5"]
    }, {
      name: "вул. Траншейна",
      number: ["1", "2", "2А", "6А", "7", "8", "9"]
    }, {
      name: "вул. Трахтемирівська",
      number: ["1", "2/3", "2А", "2Б", "3", "4", "5", "8", "10", "12", "14", " 7", "7А", "9"]
    }, {
      name: "вул. Третя",
      number: ["1", "3", "4", "5"]
    }, {
      name: "вул. Трипільська",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8А", "9", "10", "11", "13", "14", "14А", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "25А", "26", "27", "27А", "28", "29", "30", "31", "32", "33", "34", "34А", "35", "36", "37", "37/2", "38", "39", "41", "43"]
    }, {
      name: "вул. Тронька академіка",
      number: ["б/н"]
    }, {
      name: "вул. Тропініна",
      number: ["02 апреля", " 1", "3В", "4Б", "5А", "6", "8", "8А", "8Б", "9", "10", "11", "13"]
    }, {
      name: "вул. Тростянецька",
      number: ["2", "4/2", " 1А", "3", "3/1", " 12", "12/1", " 6/1", "6/7", "6/2", "6/3", "6/4", "6/6", "6/5", "6/8", "6Ж", "6Е", "6Д", "6Г", "6", "6А", "6Б", "8Д", "8Б", "8В", "8", "8А", " 19", "51", "51А", "53", "53/1", "58А", "58А/1", "60", "60А", "97", " 83", "83А", "103", "105/14", "109", "111", "113", "121", " 5", "5/1", "5А", "5Б", "7", "7/1", "7А", "7А/1", "7Б", "7В", "7Г", "28А", " 47", "47/1", "49"]
    }, {
      name: "вул. Трояндова",
      number: ["б/н"]
    }, {
      name: "вул. Трублаїні",
      number: ["92", "93", "94", "95", "95А", "96", "97", "98", "98А", "99", "100", "101", "103", "104", "105", "106", "107", "108", "108А", "110", "112", "114", "116", "118", "120", "122", " 1", "1А", "2", "2А", "4", "6", "7", "8", "10", "12", "14", "16", "22", "24", "26", "26А", "28", "30", "32", "34", "36", "37", "37В", "38А", "39", " 38", "40", "41", "42", "43", "44", "45", "45А", "46", "46А", "47", "48", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "60А", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "70А", "71", "71А", "72", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "83А", "83Б", "84", "85", "86", "87", "88", "88А", "89", "89А", "89Б", "90", "91"]
    }, {
      name: "вул. Трудова",
      number: ["7А"]
    }, {
      name: "вул. Трускавецька",
      number: ["2А", "4А", "4Б", "6А", "6Б", "6В", "6В/1", "8", " 2", "2А", "2Б", "2В", "2Г", "2Д", "2К", "4", "5", "6", "6А", "6Б", "6В", "6Г", "7", "7А", "8", "8А", "9", "9В", "10", "10А", "10Б", "10В", "10Г", "110Ж", "11", "12", "12А", "12Б", "12В", "12Г", "12Д", "12Ж", "13", "13А", "14", "14А", "15", " 16", "16А", "16Б", "18", "18А", "20", "21А", "21Б", "21В", "22", "26", "31", "31А", "31Б", "31В", "31Г", "31Д", "31Ж"]
    }, {
      name: "вул. Труханівська",
      number: ["12А", "16А"]
    }, {
      name: "вул. Трьохсвятительська",
      number: ["3", "5", "5/1", "7", "7В", "9", " 6", "8", "8А", "11", "13", " 4", "4А", "4Б", "4В"]
    }, {
      name: "вул. Тулузи",
      number: ["11", "13", "15", " 12", "14", "16", " 18", "20", "22", "24", "26", " 10А", " 2/58", "4", " 3", "3Б", "5", "7"]
    }, {
      name: "вул. Тульчинська",
      number: ["3", " 5", "6", "7", "9", "9А", "9Б"]
    }, {
      name: "вул. Туманяна Ованеса",
      number: ["15", " 1А", "2", "3", "8", "15", "15А"]
    }, {
      name: "вул. Тупікова генерала",
      number: ["11", "14А", "14Б", "14В", "14Г", "16", " 21", "22", "25", "27", "29", " 3/1", "5/1", " 4", "8"]
    }, {
      name: "вул. Туполєва академіка",
      number: ["12/1А", "12/2", "12/2А", "12/6", "12/83", "12/84", "12А", "12Д", "12М", " 4", "4А", "4Б", "8", " 1А", "1Б", "3", "3А", "3/5", "16", "16А", "16Б", "16В", "16Г", "16Д", "16і", "16Ж", "16Е", "18", "18А", "18Д", "18Е", " 5", "5Г", "19", "22", "22А", "22Б", "22В", "24", "26/16", "28", " 7", " 11Г", "11Д", "11Е", "15Б", "15В", "15Г", "15Д", "15Е", "17/19", "17В", "17Г", "17Д", "17Е", "17Ж", "17К", "19", "21", " 3", "9", "9А", "11", "11А", "11Б", "11В", "13", "13А", "15А", "17", "17А", "17Б", " 18Б", "18В", "18Г", "20", "20А", "20Б", "20В", "20Г", "20Д", "20Е", "22Г", "22Д", " 7А", "7Б", "7В", " 5А", "5Б", "5В", "5Д"]
    }, {
      name: "вул. Тургенєва (Бортничі)",
      number: ["1", "2", "3", "4", "4А", "5", "6", "7", "8", "9", "12А", "13", "14", "15", "16", "17", "19", "19А", "21", "23", "37А", "39", "40", "40А", "41", " 3", "3А", "5", "5А"]
    }, {
      name: "вул. Тургенєва (Троєщина)",
      number: ["1", "2", "3", "4", "5", "6", "6А", "7", "8", "8А", "12", "14", "20"]
    }, {
      name: "вул. Тургенєвська",
      number: ["15", "17Б", " 16", "20", "21", "22", "23", "26", "26/28", "28/30", "28А/30А", "29", "29/33", "30", "32А", "32Б", "34", "35А", "35Б", "37/41", "38", "43", "45/49", "48", "49", " 2", "3/9", "8/14", "11", " 52/58", " 55", "57", "59", "60", "62", "64/68", "65", "67", "69", "71", "72", "74", "74Б", "74В", "76/78", "77", "79", "80", "81", "82", "82А", "83/85"]
    }, {
      name: "вул. Турівська",
      number: ["32", " 4", "9", "12", "13", "13Б", "15", "18/20", "19", "19Б", "24", "26", "28", "29", "31", "36"]
    }, {
      name: "вул. Турчина Ігоря",
      number: ["11А", " 1/15", "3", "3А", "5", "7", "9", " 11", "13", "13А", "15", "17", " 2А", "2/17", "4", "6", "8", "10", "12", "12А", "12Б", "12В", "12Г", "14"]
    }, {
      name: "вул. Тутковського академіка",
      number: ["9/31", "33", "35", "36/11", "37", "37А", "37Б/1", "37Б/2", "38/1", "38/2", "39/1", "39/2", "40/1", "40/2", "41", "42/1", "42/2", "42А", "43", "44", "45", "46", "47/1", "47/2", "49", "50", "51", "52", "53", "60"]
    }, {
      name: "вул. Ужвій Наталії",
      number: ["3А", "4Б", "4В", "5", "6", "6А", "7", "7А", "8", "8А", "9", " 10", " 4", "4А", "4Г"]
    }, {
      name: "вул. Ужгородська",
      number: ["17/19", "21", "22А", "23", "24", "25", "26", "26А", "27", "28", "30", "30А", "31", "32", "33", "34", "35", "37"]
    }, {
      name: "вул. Узинська",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
    }, {
      name: "вул. Українська",
      number: ["01 марта"]
    }, {
      name: "вул. Улітіна Івана",
      number: ["1/2", "2/1", "3", "3А", "4", "5/1", "6/1", "7", "8/1", "9/1", "10", "11/1", "11А", "13/7", "14/15", "15", "16/6", "17", "18", "19/1", "20", "21/1", "23/1", "24", "24А", "25", "26", "27", "28/25", "29/28", "30", "30/26", "31", "32", "33А", "33/1", "33/2", "34/1", "35", "35/1", "36/1", "37", "38/1", "39/1", "40/1", "40А", "41", "42", "43", " 44", "44/32", "45/1", "45/2", "46", "47/1", "48/1", "48А", "49", "50/1", "51/37", "52/1", "52/35", "53/2"]
    }, {
      name: "вул. Уманська",
      number: ["5", "6", "7", "8", " 14", "23", "25", "25/1", "27", "27/1", "29", "29/1", "31", "31/1", "31/2", "33", " 47", "49", "50", " 33А", "35", "37", "39", "43", "45"]
    }, {
      name: "вул. Університетська",
      number: ["1/17", "3", "4/1", "4/2", "5", "6/1", "6/2", "7", "8/1", "8/2", "9", "10А", "10/1", "11", "12/1", "12/2", "13", "13А", "14/1", "14/2", "15/20", "16/1", "16/2", "16/3", "17", "22/18", "26", "26Б", "28", "30", "32", "34", "36"]
    }, {
      name: "вул. Уральська",
      number: ["1/12", "2", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38А", "39", "40", "41", "42", "43", "44", "45", "46"]
    }, {
      name: "вул. Урлівська",
      number: ["11А", "13", "13/1", " 15", "17", "17/1", "19", "19А", "19Б", "19/1", "20", "20А", "21", "21А", "21Б", "21В", "22", "23", "23А", "23Б", "23В", "23Г", "23В/1", "24", "30", "30/1", "34", "34А", "35", "36", "36А", "38", "38А", "38/1", "40", " 1", "1/8", "3А", "3Б", "3В", "3Г", "4", "4А", "5", "5А", "5А/1", "7", "7/1", "8", "8А", "9", "9/1", "9/2", "10А", "10Б", "12", "14", "16", "16/1"]
    }, {
      name: "вул. Усенка Павла",
      number: ["3", " 4", "4/9", "6", "7", "7/9", "7А", "8", "9"]
    }, {
      name: "вул. Успішна",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8/1", "9/3", "10", "15", "16", "17", "18", "20", "28", "30", "31/21", "32", "34"]
    }, {
      name: "вул. Уссурійська",
      number: ["15", "15/3", "17/1", "17/2", "19/1", "19/2", " 6", " 11", " 2", "2А", "2Б", "8А", " 3А"]
    }, {
      name: "вул. Учбова",
      number: ["1/24", "3", "3А", "5/8", "6", "7", "9", "31", "32"]
    }, {
      name: "вул. Ушакова адмірала",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26/1", "26/2", "30/1", "30/2", "34", "36", "38/1", "38/2", "40", "42", "44", "63", "65/1", "65/2", "65/3", "67", "69"]
    }, {
      name: "вул. Ушакова Миколи",
      number: ["34", "34А", " 1", "2", "4", "6", "8", "8А", "10", "10А", " 1Б", "1В", "1Г", "1Є", "12", "12А", "14", "14А", " 16", "16А", "18", "20", "20А"]
    }, {
      name: "вул. Ушинського",
      number: ["3", "4", "5", "5/1", "6", "7", "8", "9", "10", "11", "12", "13", "13А", "14", "16", "18", " 1", " 23", "25", "25А", "27", "29", "34", "34А", "36", "38", "40", " 15", "17", "19", "20", "21", "22", "24", "26", "28", "30/1", "30/2"]
    }, {
      name: "вул. Ушицька",
      number: ["22", "24", "26", "30", "32", "34", "36", "38", "40", "42"]
    }, {
      name: "вул. Фанерна",
      number: ["1", " 4"]
    }, {
      name: "вул. Фастівська",
      number: ["8"]
    }, {
      name: "вул. Федорова Івана",
      number: ["26", "29", "31А", "32", "32А", "33", "39", " 1", "2", "3", "4", "9", " 20", " 2А", "2Б", "6", "6А", "10", "12"]
    }, {
      name: "вул. Федосєєва",
      number: ["1", "2", "4", "5", "9", "9А", "12", "14", "15", "16", "17", "18", "19", "20", "23"]
    }, {
      name: "вул. Федьковича",
      number: ["2/1", "2/2", "3", "4/1", "4/20", "5", "6/1", "6/2", "6/55", "7/1", "7/2", "8/1", "8/2", "9", "10/1", "10/2", "11/1", "11/2", "12", "12/1", "14/1", "14/2", " 32", "34", "35/1", "35/2", "36", "37/1", "37/2", "40", "41", "42", "43", "48", "63", "65", "67"]
    }, {
      name: "вул. Феодосійська",
      number: ["3А", "4", "6", "8", "8/13", "10", "13", "13А", "23", "33", "33А", "35", "37", "39", "43", "45", "48", "49"]
    }, {
      name: "вул. Фестивальна",
      number: ["65", "65А", "67", "68А", "69", "71", "73", "75", "75А", "75Б", "77", "77А", "79", "79А", "79Б", "85", "85А", "85Б", "89", "89А", "89Б", "89Г", "91", "91А", "91Б", "91В", "99", "102", " 24", "24А", "24Б", "26", "26А", "26Б", "28", "28А", "28Б", "31", "31А", "31Б", "32", "33", "34", "37", "37А", "38", "38А", "39", "40", "41", "42", "43", "44", "44А", "45", "46", "47", "48", "49", "50", "50А", "51", "52", "53", "53А", "54", "54А", "55", "56", "57", "57А", "58", "58А", "59", "60", "60А", "61", "62", "64", "66", "68"]
    }, {
      name: "вул. Фіалкова",
      number: ["2", "3", "5", "7", "9", "9А", "13", "15"]
    }, {
      name: "вул. Фізкультури",
      number: ["1", "9", "28", "28В", "30", "30В"]
    }, {
      name: "вул. Філатова Академіка",
      number: ["7А", "10А", " 22 августа", " 1/22", "2/1", "7", " 03 января"]
    }, {
      name: "вул. Флоренції",
      number: ["5", "7", "12А", " 1/11", "3", " 9", "10А", "12Б"]
    }, {
      name: "вул. Франка Івана",
      number: ["3", "5", "5Б", "6", "7", "8/10", "8А", "9", "12", "12А", "13", "15", "15А", "16/2", "17", "17В", "18", "18А", "20", "20Б", "22/24", "24А", "26", "26В", "28", "30", " 4", "4Б", " 21/23", "25/40", " 27", "27/31", "29", "31", " 34", "36", "36Б", "36Г", "38", "38Б", "40", "40Б", "42", "42А", "42Б", "44", "46", " 19", " 1", "1А", "1Б", "1В", "2", "2А", "3", "4", "5", "6", "7", "7А", "8", "9", "10", "11", "12"]
    }, {
      name: "вул. Фролівська",
      number: ["1", "1А", "1/6", "3", "3/8", "3/34", "6/8", "9/11"]
    }, {
      name: "вул. Фрометівська",
      number: ["2", "9", "11", "17", "18", "18А", "18Б", "19", "20Б", "21"]
    }, {
      name: "вул. Фруктова",
      number: ["17", "18", "19", "20", "20А", "20Б/1", "20Б/2", "20В", "22/12", "22/12-2", "22А", "23/1", "23/2", "23/3", "24/15", "24/15-2", "25", "26", "26/2", "27", "29/13", "31/1", "31А", "33А", "33/1", "33/2", "33/3", "35", "35/1", "35/2", "37/1", "37/2", "37/3", "39А", " 2А", "2Б", "2БЗ", "2В", "2Г", "3", "3А", "3АГ", "3Г", "3з", "4", "4Г", "5", "6", "7", "8", "8А", "8Г", "9", "10/1", "10/2", "10/3", "10/4", "10/5", "10А", "10А/1", "10/1А", "10Б", "11", "12", "12Г", "13", "14А", "14А/1", "14Б", "14Б/1", "14В", "15/1", "15/2", "16/1", "16А", "16А/1", "16А/2"]
    }, {
      name: "вул. Фучика Юліуса",
      number: ["11А", "13", "15", "17", "19", " 8"]
    }, {
      name: "вул. Фучіка Юліуса",
      number: ["3", "4", "5", "7", "9"]
    }, {
      name: "вул. Харченка Євгенія",
      number: ["22", "45", "45А", " 23", "39", "41", "41А", "41Б", "49", "49А", " 43", "43А", " 47", "47В", " 53", " 59", "61", "65", " 1", "3", "4", "5", "5А", "6", "7", "7А", "8", "9", "9А", "10", "11", "12", "13", "14", "15", "15А", "16", "17", "18", "19", "20", "21", "23", "23Б", "26", "28", "30", "34А", "36", "39", " 25", "27", "29", "31"]
    }, {
      name: "вул. Хвильового Миколи",
      number: ["1", "3", "3А", "5", "5Б", "5В", "15", "15/1", "15/2", "15А", "15/2А", "15А/1", "15/1А", "15/4"]
    }, {
      name: "вул. Хвойки Вікентія",
      number: ["11", "15/15", "16", "18/14", "21", " 6", "10", "11"]
    }, {
      name: "вул. Хвойна",
      number: ["1", "1В", "1Г", "2", "2А", "3", "3А", "4", "5", "5/2", "6", "7", "8А", "8Б", "9", "10", "12", "14", "14А", "16", "18", "20", "22"]
    }, {
      name: "вул. Хмельницька",
      number: ["1", "2", "3", "5", "7", "9", "10", "11", "13", "14", "15/9", "16", "17/22", "18", "19", "20/21", "21", "23/23"]
    }, {
      name: "вул. Хмельницького Богдана",
      number: ["1", "2", "3", "3А", "3Б", "5", " 53", "53Б", "55", "55А", "57", "59Б", "59В", "61", "63", "63А", "63Г", "65Б", "84", "86", "88", "88/92", "94", " 33/34", "35/1", "37", "37Б", "48", "48А", "50", "50Б", "50В", "52", "52Б", "52В", "54", "56", "58", "62", "62В", " 39", "41", "47", "49", "51А", "51Б", "66", "68", "70", "70А", "72", "74", "78", "78А", "80", "82", " 7", "9", "9А", "10", "11", "12", "12А", "14", "15", "16/18", "16/22", "16Б", "23", "24", "26", "26Б", "27", "29", "30/10", "32", "34", "36", "42", " 17/52", "19/21", "31", "44Б", "46", " 4", "6", "8/16", " 61"]
    }, {
      name: "вул. Холмогорська",
      number: ["23", "25", "25А", "27", "31/6-1", "31/6-2", "38", "40", "42/1", "42/2", "44/1", "44/2", "46/8", " 2/1", "2/3", "2А", "2Г", "3", "4", "5", "6", "6/1", "6/2", "7", "8", "9", "10", "11А", "12", "13", "14", "15", "15А", "17", "17А", "18", "19/44", "20", "24", "28", "30", "30А", "32/1", "32/2", "34", "36"]
    }, {
      name: "вул. Хорива",
      number: ["31", "33", "33/35", " 1/2", "1А", "1Г", "1Е", "2", "4", "6", "7", "15/8", "18", "20", "21", "22/28", "23", "25", "27", "29", "29/41", "31А", "31Б", "32", "34", "36", "40", "41Б", "43", "45", "46", "47", "49А", "49Б", "50", "55", "55А", "55Б", "55В"]
    }, {
      name: "вул. Хорольська",
      number: ["1", "3", "5", "8/4", "8А", "11", "11А", " 19", "3"]
    }, {
      name: "вул. Хортицька",
      number: ["2", "3", "4/1", "4/2", "4/3", "5", "6", "10/1", "10/2", "12", "14", "16"]
    }, {
      name: "вул. Хотинська",
      number: ["5/48", "6", "7", "7/1", "7/2", "7А", "8", "10/35", "37/9"]
    }, {
      name: "вул. Хотівська",
      number: ["2", "3", "4", "5/1", "5/2", "6", "6А", "7", "8А", "9/4", "10/6"]
    }, {
      name: "вул. Хоткевича Гната",
      number: ["1Б", " 4", "4А", "6", "6А", "8", "10", "12", " 2", "2А", "3", "3Б", "5", "7", "8", "10", "10/20", "13", "13А", "20", "20А", "20Б", "22", "22А", "24", "26", "27", "27А", "29", "34", "36", "38"]
    }, {
      name: "вул. Хохлова Костянтина",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31"]
    }, {
      name: "вул. Хохлових Сім'ї",
      number: ["3", "9А", " 4", "6", "6А", "6Б", " 1"]
    }, {
      name: "вул. Хрещатик",
      number: ["3", "4А", "5", "8А", "15/4", "22", "24", "26", "28", "32Б", "34", "38", "40", "42", "42Б", "42Г", "44", "44А", "44Б", "44В", "46", "46А", "46Б", "48", "48А", "48Б", "50", "50А", "50Б", "50В", "50Г", "52", " 13", "15", "17", "19", "19А", "21", "23", "25", "27", "27А", "27Б", "29", " 1/2", "4", "5В", "6", "7/11", "8", "8Б", "8Г", "10", "10Б", "12", "14", "16", " 36", " 2", " 30", "32", "32А", "34", " 42А"]
    }, {
      name: "вул. Хутірська",
      number: ["1/3", "2/5", "4", "5", "6", "8", "10", "12", "14/16"]
    }, {
      name: "вул. Царика Григорія",
      number: ["3", "5"]
    }, {
      name: "вул. Цвєтаєвої Марини",
      number: ["4", "6", "8", "8А", "8Б", "10/2", "10/11", " 10/1", "10/3", "10/5", "10/6", "10/7", "10/87", "10А", "12", "12/1", "14", "14/1", "14А", "14Б", "14В", "16", "16/4", "16/5", "16А", "16Б", "16В", "16В/1", "18/1", " 3", "5", "7", "9", "9А", "11", "13", "13/1", "16/1", "16/2"]
    }, {
      name: "вул. Цегельна",
      number: ["1", "1/2", "2", "3/15", "4/13", "7", "7А", "7А/2", "8", "8/2"]
    }, {
      name: "вул. Цимбалів Яр",
      number: ["52/2", "52", "53", "54", "55/1", "55/2", "57", "58", "59", "59/1", "60", "60/2", "61", "61А", "61Б", "62", "63", "64", "65", "75", "77", "77/2", "79", "81", "83", "85", " 4", "4А", "5", "6", "6А", "6Б", "7", "8", "9", "9А", "10А", "10Б", "10/2", "11", "12", "12/3", "13/1", "13/2", "14А", "14/1", "14/2", "15", "16/1", "16/2", "17", "17А", "17Б", "18/1", "18/2", "20/19", "22/20", "22", "23", "26", "28", "30", "33", "34", "35", "35А", "36", "37", "38", "38А", "39", "40", "42", "43", "44", "45", "46", "47", "48", "49", "49/1", "50", "51"]
    }, {
      name: "вул. Цитадельна",
      number: ["4/7", "5/9", "6/8", "7", "7А", "9"]
    }, {
      name: "вул. Цілинна",
      number: ["1", "4", "4А", "5", "9", "13", "15", "16", "17", "18", "19", "21", "23", "26", "32", "33", "34", "34А", "42", "42А", "44", "44А", "53", "55", "57", "57А", "61", "61/1", "63", "63А", "63А/1", "64", "64А", "67", "67А"]
    }, {
      name: "вул. Ціолковського",
      number: ["2/1", "2/2", "6/1", "6/2", "8/1", "8/2", "9/1", "9/2", "10", "11/1", "11/2", "12/1", "12А", "13/1", "13/2", "14", "15", "15А", "16", "17", "17А", "18", "19", "20/1", "20/2", "20А", "21/1", "21/2", "21/3", "22", "24", "24А", "26", "26А", "28/1", "28/2", "28А", "30", "32", "34", "36/1", "36А", "38", "40", "40/1", "40/2", "40А", "44"]
    }, {
      name: "вул. Цулукідзе",
      number: ["3", "3А", "4/1", "4/2", "6", "7", "7А", "8", "8А", "9", "11", "11А", "13", "15", "16/1", "16/2", "16/3", "17", "19", "21"]
    }, {
      name: "вул. Чаадаєва Петра",
      number: ["2", "2А", "2Б", "2В", "3", "5"]
    }, {
      name: "вул. Чабанівська",
      number: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "21А"]
    }, {
      name: "вул. Чавдар Єлизавети",
      number: ["1", "3", "5", "7", "9", "11", "13", " 2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "28", " 32", "34", "38", "38А", "38Б"]
    }, {
      name: "вул. Чайківська",
      number: ["б/н"]
    }, {
      name: "вул. Чайкіної Лізи",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "10А", "10А/2", "11"]
    }, {
      name: "вул. Чайковського",
      number: ["1", "2", "2А", "2Б", "3", "5", "6", "7", "8", "8/1", "8/2", "9", "9А", "10", "11", "11А", "12", "12А", "13", "14", "15", "16", "18", "20"]
    }, {
      name: "вул. Чалого Михайла",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
    }, {
      name: "вул. Чаплигіна",
      number: ["2/5", "3/1", "3А", "3А/1", "3А/2", "4", "4А", "4А/1", "5", "6", "7", "8", "9", "10", "11/10", "12/12", "13/1", "13/2", "14", "15/2", "15/3", "16", "16А", "16А/1", "17", "17А", "18", "18А", "18А/1", "19", "19/1", "19/2", "20", "20А", "21/1", "21/2", "22", "22/1"]
    }, {
      name: "вул. Челюскінців",
      number: ["1А", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "12В", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "32", "34", "36"]
    }, {
      name: "вул. Челябінська",
      number: ["1", "1А", "2", "3", "5Б", " 2", "5", "7", "7А", "9", "9А", "9Б", "9Г", "11", "15", " 17", "19"]
    }, {
      name: "вул. Червона",
      number: ["5", "7", "9/1", "9/2", "11", "13", "14", "15", "16/1", "16/2", "16А", "17/20", "17/20А", "18", "20/1", "20/2", "22/1", "22/2", "22/3", "22/4", "24", "26", "26/1", "26/2", "28", "28/1", "30", "32", "34", "38/1", "38/2", "40/1", "40/2", "40/3", "42", "44/1", "44/2", "44/3", "46", "46/1", "46/2", "46/18", " 2/1", "4", "6", "6/1", "8/1", "8/2", "10", "12"]
    }, {
      name: "вул. Червонозаводська",
      number: ["4", "5", "7"]
    }, {
      name: "вул. Червонопільська",
      number: ["11/13", "14/14", " 2", "3А", " 1", "1А", "1Б", "1В", "2А", "2Б", "2В", " 7", "9", "13/16", "15", "19", "21", "23/17", " 10", "12А", " 16", "20/15", " 5", "8"]
    }, {
      name: "вул. Червоноткацька",
      number: ["18", "18А", "20", "20А", "22", "22А", "24", "24А", "26", "28", "30", " 22Б", " 27", "27/2", "27А", "29", "29А", "31", " 40", "42", "42А", "42Б", "42Д", "44", "44А", "46Б", "48", "59", "59/2", "59А", "60", "61/57", "63", "67", "69", "71", "75", "76", "78", "79", "80", "84", "85", "86", "87", "88/20", "90", "93", "94", " 33/10", "35", "37/9", "43", " 42А/1", " 1", "1/12", "7", "11", "11/11", " 1А", "2", "2А", "4", "8А", " 17", "17А", "19", "21", "21/7", "23", "25", " 10", "12", "14", "14А", "16", "16А", "16Б", "18Б"]
    }, {
      name: "вул. Черемшини Марка",
      number: ["1", "2", "2А", "4", "4А", "5", "6", "9", "11", "14", "15", "16", "17/1", "17/2", "17/3", "19", "19А", "19В", "20", "21", "22", "22А", "38А", "38Б", " 3Б", "6/1", "6/2", "15А", "15В", "15Г", "16А", "16Б", "16В", "17", "38"]
    }, {
      name: "вул. Черкаська",
      number: ["7", "11", "12А", "12Б", "12/1", "12/2", "12/3", "17/69", "19/58"]
    }, {
      name: "вул. Чернишевського",
      number: ["17/50", "21"]
    }, {
      name: "вул. Чернівецька",
      number: ["19", "20", "21", "22/1", "22/2", "28", "28А/20", "32"]
    }, {
      name: "вул. Чернігівська",
      number: ["38/2", "38/4", " 38/7", " 51", " 28/55", "30", "32", "32А", "34", "35", "37", "38", "40", "41", "42", " 8/1", "8/2", "8/3"]
    }, {
      name: "вул. Черняховського",
      number: ["4", " 12", "13", "15", "16/30", "17", "19/9", " 18", "20", "22", "24", "26", "28", "28А", "30", "34", "36", "38", "40", "42", "44", "46", "50/7", "54", "56/47", "58", "60", "61/32", "23", "25", "27", "29", "31", "33", "33А", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", "75"]
    }, {
      name: "вул. Чеська",
      number: ["1/22", "3", "4", "6", " 9"]
    }, {
      name: "вул. Четверта",
      number: ["1", "2", "5", "7", "9", "16"]
    }, {
      name: "вул. Чехова",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13/1", "14", "15", "16", "16/1", "17", "17/1", "18", "18/1", "19", "19/1", "21", "23", "25", "27", " 22", "24", "26", "28", "29", "31", "32", "33/1", "33/2", "35", "36", "37", "38", "39", "40", "41", "42", "43", "47", "49", "51"]
    }, {
      name: "вул. Чигиринська",
      number: ["77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118"]
    }, {
      name: "вул. Чигоріна",
      number: ["8", "12", " 12", "14", "14Б", "16", "18", "20", "55", "57", "57А", "59", "59А", "61", "61А", " 3", "5", "7/1", "7/2", "7/3", "9/1", "9/2", "11/1", "11/2", "13/1", "13/2", "15", "17", "19", "19А/1", "19А/2", "19А/3", "19А/4", "21", "23/1", "23/2", "25/1", "27/1", "27/2", "29", "32", "33", "35", "37", "39/1", "39/2", "39А", "41", "43/1", "43/2", "45/1", "49"]
    }, {
      name: "вул. Чистяківська",
      number: ["7", "11", "11А", "11Б", "13Б", " 6/10", "12", "15", "16А", "17", "18", "19", "19А", "20", "21", "23", "24", "26", "28", "30", "32", " 2", "2А", "4"]
    }, {
      name: "вул. Чкалова",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "29/1", "30", "31", "32", "33", "34", "35", "37", "39", "39А", "41", "43", "45"]
    }, {
      name: "вул. Чорнобильська",
      number: ["24/26", " 16А", "16Б", "16В", "18", "20", "22", " 17", "19", "21", " 3", " 5/7", "9", "9А", "11", "11А", "13", "13А", " 16/80", " 6", "10", "10А", "12", "12А", "14"]
    }, {
      name: "вул. Чорновола В'ячеслава",
      number: ["2", "8", "8А", "10", "12", "12А", "14", "16", "20", "24", " 25", "33/30", " 26/2", "30"]
    }, {
      name: "вул. Чорногірська",
      number: ["36", " 3/1", "3/2", "5", "6", "7", "8", "8А", "9/1", "9/2", "9/3", "11/13", "12/1", "12/2", "14", "17/14", "18", "19/13", "20/12", "21", "22/13", "24", "24/1", "24/2", "26/1", "26/2", "26/3", "28/16", "30", "34/1", "34/2"]
    }, {
      name: "вул. Чорноморська",
      number: ["1", "7"]
    }, {
      name: "вул. Чубинського Павла",
      number: ["3", "4", "4А", "8", "8А", "10"]
    }, {
      name: "вул. Чумака Василя",
      number: ["3", "4", "5", "6", "7", " 8", "8А", "8Б", "10А", "13"]
    }, {
      name: "вул. Чупринки Григорія",
      number: ["7", "7А", " 1", "1/10", "2/7", "2/8", "2А", "3", "4", "4А", "5", "6", " 8", "8А", "10", "12/8"]
    }, {
      name: "вул. Чурилівська",
      number: ["1", "2", "3", "3А", "4", "5", "6", "7"]
    }, {
      name: "вул. Шалетт міста",
      number: ["1", "1А", "1Б", "3", "3А", "5", "5А", "7", "10", "10А", "14"]
    }, {
      name: "вул. Шахтарська",
      number: ["2", "4", "4А", "5", "8", "9", "9Г", "11"]
    }, {
      name: "вул. Шевельова Юрія",
      number: ["100", " 48", "49/20", "61", "63", " 34", "39", "41", "43"]
    }, {
      name: "вул. Шевцова Івана",
      number: ["1", "3", "5"]
    }, {
      name: "вул. Шевченка (Бортничі)",
      number: ["1", "1А", "2", "2А", "3", "3А", "4", "5", "6", "7", "7А", "8", "9", "9А", "10", "11", "12", "12А", "13", "14", "15", "15А", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26А", "28А"]
    }, {
      name: "вул. Шевченка (Жуляни)",
      number: ["1", "2", "2А", "3", "3А", "4", "5", "5А", "6", "6А", "7", "8", "9", "10", "11", "12", "12А", "13", "14", "15", "16", "17", "18", "19", "20", "21", "21А", "22", "22А", "23", "23А", "24", "25", "26", "27", "27А", "28", "29", "29А", "30", "31", "32", "32А", "33", "34", "35", "36", "36А", "37", "38", "39", "40", "41", "41А", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "55/1", "56", " 111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "127А", "128", "129", "129А", "129Б", "130", "130А", "130Б", "131", "132", "133", "133А", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "144А", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "155А", "156", "158", "158А", "160", "160А", "162", "166", "168", " 57", "57А", "58", "59", "60", "61", "62", "63", "64", "64А", "65", "65А", "66", "66А", "67", "67А", "68", "68А", "69", "70", "71", "72", "72А", "73", "74", "74А", "75", "76", "77", "77А", "78", "78А", "79", "79А", "80", "82", "83", "83А", "84", "85", "86", "87", "88", "89", "90", "91", "91А", "92", "93", "94", "95", "96", "97", "98", "99", "100", "100А", "101", "102", "103", "103А", "104", "105", "106", "107", "108", "109", "110", "110А", "", " 164", "164А", "166А", "170", "170А", "172", "174", "174А", "176", "178", "180", "182", "184", "186", "187", "188", "190", "192", "194", "196", "196/1", "196А"]
    }, {
      name: "вул. Шевченка (Троєщина)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "15", "15А", "17", "17А"]
    }, {
      name: "вул. Шепелєва Миколи",
      number: ["4", "4А", "4Б", "6", "6А", "8", "8А", "10", "10А", "12", "14", " 2", "2А", "3", "3А", "5", "7", "7А", "9", "9А", "11А", "13", "18", "31/87"]
    }, {
      name: "вул. Шепетівська",
      number: ["4", "6", "8"]
    }, {
      name: "вул. Шимановського Віталія",
      number: ["02 января"]
    }, {
      name: "вул. Широка",
      number: ["3", "4/1", "6/1", "6/2", "10", "12", "14/8"]
    }, {
      name: "вул. Шкільна",
      number: ["16/38", "18", "21", "23", "24/1", "25", "26", "27", "28/1", "28/2", "29", "30", "31", "32", "33"]
    }, {
      name: "вул. Шкільна (Жуляни)",
      number: ["1", "1А", "2", "3", "3А", "4", "5", "5А", "6", "7", "8", "8Б", "9", "10", "11", "11А", "11Б", "12", "12Г", "12Д", "12З", "12М", "13", "14", "15", "16", "17", "17А", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "33А", "34", "35", "36", "38", "40", "42", "44", "46", "48", "50", "52"]
    }, {
      name: "вул. Шляховиків",
      number: ["1/14", "2А/1", "2А/2", "2Б", "2В", "2Г", "2Д", "2Е", "4", "4А", "6", "8", "9/20", "10", "12", "14", "16/1", "16/2", "18", "20/7"]
    }, {
      name: "вул. Шмідта Отто",
      number: ["2/1", "2/2", "2/6", "2Б", "2В", "2Е", "4", "5", "6", "7", "8", "8А", "12Б", "13", "14", "16", "18", "20", "22", "22/26", " 35/37", " 26", "26А", "26Б", " 31", "33"]
    }, {
      name: "вул. Шовковична",
      number: ["4", "4А", " 1", "1/22", "3", "5", "7А", " 13 февраля", " 9", "10", "11/1", "12", "12Б", " 16", "16Б", "17", "17/2", "18", "18А", "18Б", "18В", "19", "20", "21", "22", "23", "24", "25", "30", "30/35", "30А", "30Б", "34В", " 29", "32/34", "36/7", " 42", "44", " 6", "21", "38", "48", "50", "52", " 39/1"]
    }, {
      name: "вул. Шовкуненка Олексія",
      number: ["3", " 4", "5", "8/20"]
    }, {
      name: "вул. Шолом-Алейхема",
      number: ["12", "12/1", "14", "14А", "14Б", "16", "16А", "18", "18А", "18Б", "20", "22", "24", "24/1", " 7", "9", "9А/1", "11", "11А", "13", "13А", "15", "15А", "15Б", "15Б/1", "17", "17/1", "17/1А", "17/2", "17/3", "17/4", "17/5", "17/6", "17/7", "17А", "17А/1", "17Б", "19", "19/1", "19/2", "19/3", "19А", "19А/1", " 1", "1А", "3", "5", "5А", " 4", "4/1", "4А/1", "4А", "6", "8", "8А", "10", "10А", "10А/1"]
    }, {
      name: "вул. Шолуденка",
      number: ["2", "4", "6", "10", " 1", "1А", "1Б", "1В", "3", " 12", "14", "16", "27/6", "29", "30", "31", "31А", "33/19"]
    }, {
      name: "вул. Шоста",
      number: ["9", "11", "12"]
    }, {
      name: "вул. Шпака Миколи",
      number: ["2", "4", " 3", "5"]
    }, {
      name: "вул. Шпильова",
      number: ["2", "3", "4/6", "6", "12", "13", "14", "15", "15А", "16", "17", "19", "20"]
    }, {
      name: "вул. Шполянська",
      number: ["1", "2", "2/20", "3А", "3/1", "3/2", "4", "4А/1", "4А/2", "5А", "6А", "6А/21", "7/2", "7Б", "7Б/2", "9"]
    }, {
      name: "вул. Шульгина Володимира",
      number: ["1", "3/1", "3/2", "3А", "4", "6", "9", "15", "33"]
    }, {
      name: "вул. Шулявська",
      number: ["15/23", "20/22", " 5", "7", "10/12", "10/12В", "10/12Д"]
    }, {
      name: "вул. Шумського Юрія",
      number: ["1", "1А", "1Б", "3", "3А", "3Б", "3Г", "4", "4А", "5", "6", "6А", "6Б", "8", "8А", "10"]
    }, {
      name: "вул. Шутова полковника",
      number: ["13", "13Б", "14", "14А", "14Б", "14В", "16", " 1", "3", "4", "6", "9", "9А"]
    }, {
      name: "вул. Щаслива",
      number: ["3", "4", "5", "7", "9", "13", "15", "17", "19"]
    }, {
      name: "вул. Щекавицька",
      number: ["40/37", "42/48", "45", " 2/8", "7", "7/10", "9А", "21", "27", "29", "30/39", "34", "36", "37", "41", "44", "46", "51", "55"]
    }, {
      name: "вул. Щепкіна",
      number: ["1", "3", "5", "9", "9А", "9/2", "10", "11", "12", "13", "14", "15", "15А", "18", "20", "21/4"]
    }, {
      name: "вул. Щербаківського Данила",
      number: ["3", "5", "7/10", "9", "9А", "11", "11А", "13", "15", "17", "19", "21", "21А/1", "21А/2", "23", "23А", "25", "29/23", "31/40", "31А", "31Б", " 20", "22", "24", "26", "28", "30/21", "32/38", "34", " 2", "2А", "4", "6", "8", "10", "12", "14", "16", "18", " 33", "35", "37", "39", "41", "43", "45", "45А", "47", " 36", "40/1", "42", "42/44", "44", "44А", "46", "46А", "48", "48А", " 51В", "53", "53А", "53Б", "53Г", "55", "55А", "62", "62А", "70", "72", " 47Б", "47В", "49", "49А", "49В", "49Г", "49Д", "51", "51А", "64", "66", "68", " 52", "54", "56/7", "58А", "60Б", "60Г", "60Д", "64А", "66А", "68А", " 57", "57А", "57Б", "57В", "57Г", "59А", "61А", "61Б", "61В", "63Б", " 59", "61", "63"]
    }, {
      name: "вул. Щусєва",
      number: ["13", "15", "15А", "17/8", "19/11", "21/12", "22/12", "23/9", "24", "24А", "25", "27/4", " 34/1", "36", "38", "40", "42", "44", " 26", "28", "29/5", "30/6", "32", "33", "33/1", "33/2", "35", "39/1", "39/2", "41/1", "41/2", "43/2", "47/1", "47/2", " 2/19", "3", "4", "6", "7", "8", "12", " 8А", "10А", "12А", "14", "16", "18/14", "42А"]
    }, {
      name: "вул. Юлаєва Салавата",
      number: ["2/11", "3/1", "3/2", "5", "7", "9", "10", "11", "15", "17", "19"]
    }, {
      name: "вул. Юнацька",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42"]
    }, {
      name: "вул. Юнацька (Жуляни)",
      number: ["6", "8", "10", "17", "19", "21"]
    }, {
      name: "вул. Юнкерова Миколи",
      number: ["2", "6А", "9/13", "14", "15", "16", "17А", "20", " 28", "28А", "29", "29А", "30", "31", "31А", "32", "33", "34", "36", "36Б", "36В", "37", "37А", "38", "40", "41", "42", "42А", "42В", "44А", "45", "46", "47", "48", " 50", "50/1", "50/2", "50/3", "55", "58", "67/69А", "67/69Б", "67/69В", "68", "69", "70", "73", "75", "75В", "76", "77", "77А", "77Б", "77В", "78", "78А", "79", "80", "80А", "82", "83", "83Б", "85", "85А", "85Б", "85Г", "86", "87", "87А", "88", "88А", "88В", "89", "89А", "90", "91", "92", "92А", "93", "94", "95", "95А", "95В", "97", "97А", "97Г", "101", "101А"]
    }, {
      name: "вул. Юності",
      number: ["7", "7А", "9", "12", "14", "17", " 1", "2", "3", "4", "5", "6", "6/1", "6А", "8/2"]
    }, {
      name: "вул. Юри Гната",
      number: ["1", "1/11", "3", "5", "7", "7А", "7Б", "7В", " 12", "14", "14А", "14Б", "14В", "16", "18", "18А", " 02 декабря", " 4", "6", "6А", "6Г", "8", "10", "10А", "10Б", "20", " 5А", "9", "9А", "9Б", "11", "11А", "13", "15"]
    }, {
      name: "вул. Юрія Іллєнка",
      number: ["4", "5", "5Б", "6", "7", "9", "10", "10/12", "12", "12А", "14", "24", "81А", " 16", "18", "18А", "18Б", " 20", "22", "24", "28А", "30", "30А", "32", "63", "69А", "71", "75", "81", "81/2", "81/20", "81Б", " 1", "2", "3", "31", "35", "39", "49", "51", "53", "53А", "53/55", "61", " 44", "46", "46А", "48", "48А", "50", "52", "52А", "83Д", "85", "87", "89", "89А", " 83", "83Б", " 36", "36/1"]
    }, {
      name: "вул. Юрія Липи",
      number: ["6"]
    }, {
      name: "вул. Юрія Поправки",
      number: ["3", "5", "7"]
    }, {
      name: "вул. Юрківська",
      number: ["2", "6/32", "8/12", "12/59", " 18", "25", "28", "34А", "34Б", "36", "37", "40", "42", "42А"]
    }, {
      name: "вул. Юровської Ольги",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53"]
    }, {
      name: "вул. Яблонської Тетяни",
      number: ["2", "4", "6", "16", "18", "20", "22", "24", " 1"]
    }, {
      name: "вул. Яблочкова",
      number: ["1", "3", "5", "6", "7", "8", "9", "11", "12", "13", "14", "16", "18", "19", "20"]
    }, {
      name: "вул. Яблунева",
      number: ["26/2", "27/1", "27/2", "28", "29/26", "30", "31", "31А", "32", "34/23", "36", "38", "40", "41", " 1/2", "1/3", "2/5", "3", "3А", "4", "5", "6", "7", "7А/1", "7А/2", "7Б/1", "7Б/2", "8/1", "8/2", "9", "9А", "10", "11/1", "11/2", "12/1", "12/2", "13", "14", "14/1", "14/2", "15", "16/1", "16/2", "17", "18", "18А", "19/1", "19/2", "19/3", "19А", "20", "21А", "21Б", "22/1", "22/2", "23", "24", "24А", "25/1", "25/2", "26/1", " 2", "18"]
    }, {
      name: "вул. Яворницького Дмитра",
      number: ["26", "28", "30", "31", "32", "33", "39", "41"]
    }, {
      name: "вул. Ягідна",
      number: ["44/1", "44/2", "44/3", "46", "48", " 1/26", "2/13", "3", "4", "5", "6", "7", "8", "9", "10", " 1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"]
    }, {
      name: "вул. Яготинська",
      number: ["2", "3", "4", "5", "6/11", "6А/1", "6А/2", "8/1", "8А", "9", "10/1", "10/2", "11/1", "11/2", "13", "13А/1", "13А/2", "15", "17/1", "17/2"]
    }, {
      name: "вул. Якубовського Маршала",
      number: ["1", "1/1", "1А", "1Б", "2", "2А", "2Б", "2В", "3", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3А", "3Б", "4", "5", "6", "6/1А", "6А", "7", "7А", "7Б", "7В", "7Г", "7Д", "8", "8/1", "9", "9/1", "9/2", "9/3", "9/4", "11", "11/1", "11/2", "13", "13А", "13Б", "13В"]
    }, {
      name: "вул. Якутська",
      number: ["2", "3", "5", "6", "6А", "7", "7А", "7Б", "8", "9", "10", "12", "14", " 72", "72А", "84", "86", "86А", "86Б", "86Г", "86Д"]
    }, {
      name: "вул. Ялинкова",
      number: ["2", "2А", "2Б", "2В", "2Г", "2Ж", "2З", "2И", "2А/1", "2К", "2Л", "4", "4А", "4Б", "4В", "4Г", "6", "8", "8А", "10", "12", "12А", "14", "16", "18", "18А", "20", "22", "23", "24", "28", "28/18", "30", "32/50", "34", "34А", "36", "38", "40", "44/48", "50А", "52", "54", "56", "58", "58/2", "58/60", "60", "60/1", "60/3", "60/4"]
    }, {
      name: "вул. Ялтинська",
      number: ["14", "20/1", "20/18", "20/18А", "22", "22Б", "22В", "24/23", " 21 января", " 6", "8", "8/1", "10/14", "10/14А", "12/11", " 5", "5/1", "5А", "5А/1", "5А/2", "5А/3", "5А/4", "5Б", "5Б/1", "5Б/2", "5Б/3", "5Б/4", "6/1", "7", "7/1", "7/2", "9А", "11", " 13", "13/1", "15", " 26/36", "28/45"]
    }, {
      name: "вул. Ямська",
      number: ["1", "3/5", "6/31", "13", "13А", "14А", "18/20", "22", "23А", "23Б", "25", "28", "28А", "29", "32", "34", "35", " 41", "42", "44", "74", " 57", "59", "66"]
    }, {
      name: "вул. Яна Василя",
      number: ["2", "3/5", "16"]
    }, {
      name: "вул. Янгеля академіка",
      number: ["1/37", "5", "7", "18/20", "20", "22", " 2", "2А", "4", "12/2", "14/1"]
    }, {
      name: "вул. Янтарна",
      number: ["2", "4", "5", "7", "9", "11", "12", "12А", "13", "29"]
    }, {
      name: "вул. Янтарна (Жуляни)",
      number: ["25", "27", "29", "32"]
    }, {
      name: "вул. Януша Корчака",
      number: ["33", "35", "37А", "37/1", "37/2", "38", "39", "40", "41", "41А", "42/1", "42/2", "43/1", "43/2", "44/1", "44/2", "45А", "45/1", "45/2", "45/3", "46", "47/1", "47/2", "48/1", "48/2", "50", "50А", "52/1", "52/2", "54", "56/1", "56/2", " 32", "34А", "34Б", "36/1", "36/2", " 53/16", "55/9", "57/1", "57/2", "60", "61/3", "63", "64", "67/1", "67/2", " 3", "4", "8", "10", " 20А", "23/2", "24/1", "26", "28/2", "30", " 7/2", "9/12", "11", "13/1", "15/2", "17", "19", "21/1"]
    }, {
      name: "вул. Ярмоли Віктора",
      number: ["4", "28/32", "38", "38А", " 06 августа"]
    }, {
      name: "вул. Ярославів Вал",
      number: ["1", "3", "4", "5", "5Б", "6", "7", "8", "9", "10", "10Б", "11", "14А", "14Б", "14В", "14Г", "14Е", "16", "16Б", "20", " 13", "13/2Б", "15А", "15В", "17А", "17Б", "19", "22", "24", "26", "26Б", "28", " 21А/20", "21Г", "21Д", "21Е", "21Л", "23", "25", "27", "27Б", "28/31", "29А", "29Б", "29В", "29Г", "30А", "30/18", "32", "33", "33Б", "35", "36", "36Є", "38", "40", " 21А", " 14Д"]
    }, {
      name: "вул. Ярославська",
      number: ["4Б", "5/2", "6", "10", "11", "11В", "13", "13Б", "15/23", "19", "20", "21", "26", "29", "40", "51", "56А", "57", "58"]
    }, {
      name: "вул. Яслинська",
      number: ["3", "6/4", "7", "8", "9/7", "10", "11", "13", "15"]
    }, {
      name: "вул. Ясна",
      number: ["3/1", "3/2", "5/2", "7/1", "7/2", "7/3", "8/1", "8/2", "12/1", "12/2", "13", "14", "15", "16/1", "16/29", "17/1", "17А", "18/1", "18/2", "19", "20/1", "20/2", "21", "22/1", "22/2", "23", "24/1", "24/2", "25/1", "25/2", "26", "27/1", "27/2", "28", "32/1", "32/2", "34", "36/1", "36/2", "38/1", "38/2", "38/3", "40", "40А", "42/2"]
    }, {
      name: "вул. Ясногірська",
      number: ["1", "2", "3", "3/19", "4", "4А", "5", "5/30", "6", "6/28", "7", "8", "9", "9А", "10", "11", "11/6", "11А", "12", "13", "13/5", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "31А", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51"]
    }, {
      name: "вул. Яснополянська",
      number: ["1/3", "3", "4", "5", "6", "7", "8", "9/1", "10", "11", "11/1", "12", "13/1", "14/1", "15/20", "16/22", "17/1", "18/25", "19", "20", "22", "24", "26"]
    }, {
      name: "вулиця відсутня 14-й км шляху",
      number: ["1", "2", "3", "4", "5"]
    }, {
      name: "вулиця відсутня 21-й км Київ-Дніпровська ПЗЗ",
      number: ["б/н"]
    }, {
      name: "дорога Кільцева",
      number: ["15", "15А", " 1", "1А", "1Г", "3К", "3П", "5", "5А", "5Б", " 12", " 12", "18", "20/1", "20/1А", "22", "22А", "22Б", " 12А", "12Г", " 2", "4", "4А", "4Б", "4В", "4Ж", "6", "8", " 3", " 1/2", "1А", "1Б", "1Б/1", "1Б/2", "1В", "1В/1", "1В/2", "1Д", "1Е", "1Л", "2/1", "5В/1", "110", " 2Д", "2З", "5Д", "5Ж", "10"]
    }, {
      name: "дорога Набережно-Печерська",
      number: ["1", "2", "2В", "4А", "5", "6", "7", "7А", "8", "9А", "9Б", "11А", "11Б", "10", "12", " 4"]
    }, {
      name: "дорога Набережно-Рибальська",
      number: ["3", "9"]
    }, {
      name: "дорога Паркова",
      number: ["1А", "3", "4", "16", "17", "20"]
    }, {
      name: "майдан Незалежності",
      number: ["1", "2А", " 2"]
    }, {
      name: "набережна Дніпровська",
      number: ["8", "17", "21А", " 10", "10-14", "12А", "17А", "19", "19А", "19А/1", "19Б", "19В", "21", "23", "23А", "23В", "25", "25А", "25Б", " 16", "16А", "16Б", "16В", "16Г", "18", "18А", "18Б", "18В", "18Г", "18Д", "33", " 14", "14/1", "14А", "14Б", "14В", "14Г", "14Д", "14К", " 3", "3А", "5", "5А", "5Б", "7", "7А", "7Д", " 9", "9А", "9Б", "11", "11А", "13", "13А", " 26", "26А", "26Б", "26Ж", "26К", "26Л", "28", " 1", "1А", "1Б"]
    }, {
      name: "набережна Русанівська",
      number: ["16", "17А", "18", "18/1", "20", "22", "24/51", " 10", "10/1", "12", "12/1", "12/3", "14/1", " 4", "4/1", "6", "8", "8/1"]
    }, {
      name: "острів Труханів",
      number: ["1", "12", "14"]
    }, {
      name: "пл. Амурська",
      number: ["8"]
    }, {
      name: "пл. Арсенальна",
      number: ["1Б"]
    }, {
      name: "пл. Бесарабська",
      number: ["5", "9/1"]
    }, {
      name: "пл. Бессарабська",
      number: ["2"]
    }, {
      name: "пл. Вокзальна",
      number: ["1", "2", "3", "4", " 1"]
    }, {
      name: "пл. Героїв Бреста",
      number: ["1", "3А", "3Б", "5", "5А"]
    }, {
      name: "пл. Деміївська",
      number: ["1", "3"]
    }, {
      name: "пл. Житньоторзька",
      number: ["8"]
    }, {
      name: "пл. Контрактова",
      number: ["1", "4", "7", "7А", " 2", "2Б", " 8", "9", "10", "10А", "10Б", "12"]
    }, {
      name: "пл. Кривоноса Петра",
      number: ["4"]
    }, {
      name: "пл. Лесі Українки",
      number: ["1"]
    }, {
      name: "пл. Львівська",
      number: ["14", " 4", "4А", "6", "8", "8А", " 6", "8"]
    }, {
      name: "пл. Михайлівська",
      number: ["1"]
    }, {
      name: "пл. Оболонська",
      number: ["1", "1/1", "1/2", "1/2А", "1/3", "1/3А", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1/10", "1/11", "1/12", "1/13", "1/14", "1/15", "1/16", "2", "2А", "3", "3/1", "3/2", "3/3", "3/4", "4", "4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7", "4/8", "5", "6", "6/1", "6/2", "6/3", "6/4", "8", "8/1", "8А", "8А/1", "10/24"]
    }, {
      name: "пл. Перемоги",
      number: ["2"]
    }, {
      name: "пл. Петропавлівська",
      number: ["1", "3", "5", "9", "11"]
    }, {
      name: "пл. Печерська",
      number: ["1"]
    }, {
      name: "пл. Поштова",
      number: ["2", "3"]
    }, {
      name: "пл. Привокзальна",
      number: ["1", "2", "3"]
    }, {
      name: "пл. Святошинська",
      number: ["1", "9"]
    }, {
      name: "пл. Севастопольська",
      number: ["1"]
    }, {
      name: "пл. Слави",
      number: ["1"]
    }, {
      name: "пл. Солом'янська",
      number: ["1", "2", "25", " 2А"]
    }, {
      name: "пл. Спортивна",
      number: ["1", "1А", "3", "3А", "3В"]
    }, {
      name: "пл. Толстого Льва",
      number: ["1", "3", "5", "5А/1", "9", "11", " 6", "8", "10"]
    }, {
      name: "пл. Франка Івана",
      number: ["3", " 5"]
    }, {
      name: "пл. Харківська",
      number: ["01 января"]
    }, {
      name: "пров. 1-й Бортницький",
      number: ["2", "4", "6", "8", "10", "12", "14"]
    }, {
      name: "пров. 1-й Дружби",
      number: ["2", "4", "10", "12"]
    }, {
      name: "пров. 1-й Левадний",
      number: ["1", "2", "3", "4", "6", "8"]
    }, {
      name: "пров. 1-й Лермонтова",
      number: ["3", "8", "13", "14Г", "16", "26", "28А", "28Б", "28В", "34Б"]
    }, {
      name: "пров. 1-й Польовий",
      number: ["7", "11", "13", "15", "17", "17А", "19", "19А", "21", "23", "25"]
    }, {
      name: "пров. 2-й Бортницький",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "15", "16", "17", "18", "22", "23", "25", "26", "27"]
    }, {
      name: "пров. 2-й Гоголя",
      number: ["1", "2", "4", "6"]
    }, {
      name: "пров. 2-й Дружби",
      number: ["1", "3", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16"]
    }, {
      name: "пров. 2-й Левадний",
      number: ["6", "14"]
    }, {
      name: "пров. 2-й Лермонтова",
      number: ["11", "22"]
    }, {
      name: "пров. 2-й Терешкової Валентини",
      number: ["6", "7", "8", "9", "10", "11", "12", "13", "15", "17", "18", "19", "26"]
    }, {
      name: "пров. 3-й Дружби",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "15"]
    }, {
      name: "пров. 4-й Лермонтова",
      number: ["23", "25"]
    }, {
      name: "пров. Айвазовського",
      number: ["3", "5"]
    }, {
      name: "пров. Акацієвий",
      number: ["б/н"]
    }, {
      name: "пров. Алли Горської",
      number: ["3", "5", "6", "8", "10"]
    }, {
      name: "пров. Арсенальний",
      number: ["5"]
    }, {
      name: "пров. Артезіанський",
      number: ["3", "3А", "5", "5А", "5Б", "6", "6А", "7", "7А", "7Б", "7В", "8", "8/1", "8/2", "9", "9А", "9Б", "11", "13/1", "13/2"]
    }, {
      name: "пров. Артилерійський",
      number: ["1", "1А", "3", "5", "5А", "5Б", " 7А", "7Б", "7/9", "9", "11", "13"]
    }, {
      name: "пров. Аскольдів",
      number: ["3", "5"]
    }, {
      name: "пров. Астраханський",
      number: ["2/4", "56А/12"]
    }, {
      name: "пров. Бабушкіна",
      number: ["3"]
    }, {
      name: "пров. Бакинський",
      number: ["3", "5", "7", "9"]
    }, {
      name: "пров. Балакірєва",
      number: ["12", "14", "15", "17", "25", "25А"]
    }, {
      name: "пров. Балтійський",
      number: ["20", "23"]
    }, {
      name: "пров. Бастіонний",
      number: ["3", "5", "7", "8", "9", "11", "15/1", "15/2"]
    }, {
      name: "пров. Батуринський",
      number: ["6"]
    }, {
      name: "пров. Бджолиний",
      number: ["1", "1А", "1Б", "2", "2А", "3", "4", "5", "6", "7", "8", "10"]
    }, {
      name: "пров. Бердянський",
      number: ["1", "2", "3", "4", "4/36", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
    }, {
      name: "пров. Березневий",
      number: ["1", "2", "3", "3А", "3Б", "4", "5", "5А", "6", "7", "8", "17", "19", "21", "23", "24", "30"]
    }, {
      name: "пров. Березневий 3",
      number: ["19"]
    }, {
      name: "пров. Беринди Памви",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11А", "12", "15", "14", "16", "17", "18", "19", "19А", "20", "25"]
    }, {
      name: "пров. Бестужева Олександра",
      number: ["1А", "2", "2А", "3", "4", "8", "10", " 11", "13", "15", "17", "19", "20", "22А"]
    }, {
      name: "пров. Бехтерівський",
      number: ["3", "4", "4А", "4Б", "4В", "5", "6", "7/11", "8", "10", "10А", "13", "13А", "14Е", "15"]
    }, {
      name: "пров. Биківнянський",
      number: ["19", "2"]
    }, {
      name: "пров. Биківський",
      number: ["7", "9"]
    }, {
      name: "пров. Бишівський",
      number: ["6", "8", "10", "11", "12", "13", "14", "15", "17", "21", " 9"]
    }, {
      name: "пров. Білицький",
      number: ["3", "8", "8/2", "10/1", "10/2"]
    }, {
      name: "пров. Бобринецький",
      number: ["1", "5", "9", "11", "13", "15"]
    }, {
      name: "пров. Бобруйський",
      number: ["3", "4", "4/1", "6", "6/2"]
    }, {
      name: "пров. Богданівський",
      number: ["7"]
    }, {
      name: "пров. Богунський",
      number: ["12/11", "13", "16", "18", "19", "20"]
    }, {
      name: "пров. Бондарський",
      number: ["3", "14", " 19"]
    }, {
      name: "пров. Боровий",
      number: ["1А", "1Б", "3", "3А", "4", "5", "6", "6/1", "7", "8", "9", "10", "11", "11А", "12", "13", "15", "17", "18", "18/1"]
    }, {
      name: "пров. Боровий (Бортничі)",
      number: ["1", "1А", "2", "4", "5", "7"]
    }, {
      name: "пров. Бородянський",
      number: ["3"]
    }, {
      name: "пров. Бортницький",
      number: ["11А", " 1", "2А", "3", "4", "5", "6", "7", "8", "9", "9А", "10", "11", "11А", "12", "13", "14", "16", "18"]
    }, {
      name: "пров. Брест-Литовський",
      number: ["06 октября"]
    }, {
      name: "пров. Броварський",
      number: ["8"]
    }, {
      name: "пров. Бродівський",
      number: ["2", "2А", "4", "6", "7", "8", "9", "10", "12", "12А", "14", "14А", "14Б"]
    }, {
      name: "пров. Бугорний",
      number: ["3", "3А", "4/1", "4А/2", "6", "6А"]
    }, {
      name: "пров. Будівельників",
      number: ["28/15", "30", "32/2", "34", "34/1", " 2", "2/8", "2/18", "3", "4", "5", "5А", "6", "7", "8", "9", "10", "12", "12/13", "12/2", "12А", "14", "14/1", "14/2", "14А", "16", "16А", "18", "20", "20/2", "21/9", "22", "24", "24/1", "24А", "26", "26/1", "26/2", "26А", "28", "28А", "30", "30А", "32", "32А", "33", "34", "34/1", "36", "37А", "31/13", "32", "33", "35", "37", "39", "41", "43", "43/2", "43/12"]
    }, {
      name: "пров. Букіної Раїси",
      number: ["1", "2А", "3", "4", "5", "7А", "7/1", "8", "10"]
    }, {
      name: "пров. Бурденка Академіка",
      number: ["3", "3/2", "4", "5", "6", "6/2", "7", "8", "8/2", "8Б/1", "8Б/2"]
    }, {
      name: "пров. Бутишев",
      number: ["10", "12", "14", "17", "19", "21/17", "23", " 11", "13"]
    }, {
      name: "пров. Вакуленчука",
      number: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "19Б", "19В", "20", "21", "22", "22А"]
    }, {
      name: "пров. Васильківський",
      number: ["8", "10", "12", "14", "14А", "15/14-1", "15/14-2", "17/13"]
    }, {
      name: "пров. Вербний",
      number: ["б/н"]
    }, {
      name: "пров. Верболозний",
      number: ["4", "5", "6/2", "6/3", "6/4", "6/5", "7", "8"]
    }, {
      name: "пров. Вересковий",
      number: ["1/1", "1/2", "2/1", "2/2", "3", "4", "5", "6", "7", "8", "9", "9А", "11А", "11Б", "14", "15", "17", "19", "21", "23"]
    }, {
      name: "пров. Веселковий",
      number: ["2", "4", "4А", "6", "8", "10", "10А"]
    }, {
      name: "пров. Вешенський",
      number: ["2", "3", "4", "5"]
    }, {
      name: "пров. Виборзький",
      number: ["2"]
    }, {
      name: "пров. Винахідників",
      number: ["3", "4", "4А", "4В", "5", "5А", "9"]
    }, {
      name: "пров. Виноградний",
      number: ["4", "6", " 01 ноября"]
    }, {
      name: "пров. Вільшанський",
      number: ["4", "5", "6", "7/1", "7/2", "8/1", "8/2", "8/3", "9", "10", "11", "12", "13", "14", "15/1", "15/2", "16", "18", "20"]
    }, {
      name: "пров. Вірменський",
      number: ["3", "4", "6", "17", "20", "21/2", "21/34", "22", "24", "25", "27", "32", "34"]
    }, {
      name: "пров. Віто-Литовський",
      number: ["98"]
    }, {
      name: "пров. Воздвиженський",
      number: ["б/н"]
    }, {
      name: "пров. Волго-Донський",
      number: ["2", "2", "2А", "3", " 5", "5/2", "5/3", "6", "11/80", "12", "13", "14/115", "15", "17"]
    }, {
      name: "пров. Волзький",
      number: ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23"]
    }, {
      name: "пров. Волошковий",
      number: ["б/н"]
    }, {
      name: "пров. Волховський",
      number: ["3", "3А", "4", "4А/1", "5", "5А", "6/1", "6/2", "7", "7/1", "8/1", "8/2", "9", "10", "10/1", "10А", "11/1", "11/2", "12", "12А", "12А/2"]
    }, {
      name: "пров. Георгіївський",
      number: ["2", "5", "7", "9"]
    }, {
      name: "пров. Геофізиків",
      number: ["1", "4", "6", "8"]
    }, {
      name: "пров. Гіллястий",
      number: ["1А", "3", "3А", "3Б", "4", "5Б", "6", "8", "10", "12", "14"]
    }, {
      name: "пров. Голосіївський",
      number: ["3", "5", "6", "7", "9", "10", "10А", "13", "14", "16", "18", "39"]
    }, {
      name: "пров. Гомельський",
      number: ["3", "4", "4/2", "9", "10", "10/2", "10/3", "17/10", "19", "32/1"]
    }, {
      name: "пров. Гористий",
      number: ["3", " 8", "9", "10", "11", "13/26"]
    }, {
      name: "пров. Госпітальний",
      number: ["1А", " 4Б"]
    }, {
      name: "пров. Гостинний",
      number: ["5А"]
    }, {
      name: "пров. Грабовського Павла",
      number: ["4", "4/2", "5", "6", "7/1", "7/2", "8", "9", "10", "12", "14"]
    }, {
      name: "пров. Гречаний",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "15", "17"]
    }, {
      name: "пров. Гродненський",
      number: ["3", "5", "6", "7", "8", "10", "12"]
    }, {
      name: "пров. Грузинський",
      number: ["3", "3/1", "4", "5", "5А", "6", "6А", "7", "8", "8/1", "8/2", "8/3", "9", "10", "10А", "11", "12/34", "13/32", "16", "17", "18", "18А", "19", "20", "21", "24", "26"]
    }, {
      name: "пров. Гучний",
      number: ["1/13", "2/15", "2А", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13А", "14", "15", "16", "17"]
    }, {
      name: "пров. Дежнєва",
      number: ["10/1", "10/2", "12/2", "14/1", "14/2", "21А"]
    }, {
      name: "пров. Делегатський",
      number: ["2/18", "3", "3/5", "5Б", "10", "12"]
    }, {
      name: "пров. Деміївський",
      number: ["3", "4", "5А", "6", "7", "8"]
    }, {
      name: "пров. Деревообробний",
      number: ["3", "4"]
    }, {
      name: "пров. Деснянський",
      number: ["б/н"]
    }, {
      name: "пров. Десятинний",
      number: ["3", "5", "7", "7А"]
    }, {
      name: "пров. Джерельний",
      number: ["3", "4", "4А"]
    }, {
      name: "пров. Диканський",
      number: ["3", "4", "5", "6", "7", "7/1", "8", "9", "10", "10/2", "10/3", "11"]
    }, {
      name: "пров. Добросусідський",
      number: ["3/1", "3/3", "5/1", "5А", "7/9", "7/10", "10/1", "10/2", "11", "12/1", "12/2", "13", "15", "17/26", "28"]
    }, {
      name: "пров. Доватора генерала",
      number: ["33/9", "34/1", "34/2", "34/3", "35", "36", "37", "37А", "39", " 1/65", "2", "3", "4", "5/1", "5/2", "6/1", "6/2", "7", "7/17", "8", "9", "9А/1", "9А/2", "9А/3", "10", "10/15-1", "10/15-2", "11А", "11/1", "11/2", "12", "12/18", "13/1", "13/2", "14А", "14А/1", "16", "16А", "19", "21/1", "21/2", "22/1", "22/2", "22/3", "23/1", "23/2", "24/1", "25", "26", "26А", "27", "28", "29", "30", "31/8", "32/1", "32/2"]
    }, {
      name: "пров. Докучаєвський",
      number: ["2/24", "4", "8", "12", "14", "16"]
    }, {
      name: "пров. Донський",
      number: ["27/15", " 1/10", "2/1", "2/8", "3", "4", "5", "5/2", "6", "7", "8/1", "8/2", "9", "10/1", "10/2", "11", "12/1", "12/2", "13", "14/7", "15/14", "15/3", "17", "19", "21/2"]
    }, {
      name: "пров. Достоєвського",
      number: ["1", "2", "3", "4/1", "4/2", "22"]
    }, {
      name: "пров. Дубищанський",
      number: ["б/н"]
    }, {
      name: "пров. Дубровицький",
      number: ["5"]
    }, {
      name: "пров. Дубровського Віктора",
      number: ["3", "5", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "18", "18А", "20", "22", "24", "41", "42", "43"]
    }, {
      name: "пров. Дунаєвського",
      number: ["2", "3", "4/1", "4/2"]
    }, {
      name: "пров. Електриків",
      number: ["3", "5", "7", "9", "13А", "15", "19", "20"]
    }, {
      name: "пров. Енгельса",
      number: ["2А", "4А", "5", "6", "6А", "7", "9"]
    }, {
      name: "пров. Енергетиків",
      number: ["1", "2", "3", "4", "5", "6А", "7", "8", "9", "9/14", "10", "12", "14"]
    }, {
      name: "пров. Естонський",
      number: ["3/1", "3/2", "3/3", "5", "7"]
    }, {
      name: "пров. Євгена Гуцала",
      number: ["3", "4А", " 5"]
    }, {
      name: "пров. Жмеринський",
      number: ["2", "4", "6"]
    }, {
      name: "пров. Жовтневий",
      number: ["4", "6", "8", "40", "50", "52"]
    }, {
      name: "пров. Жуковського Василя",
      number: ["10", "12", "13/16", "14", "15", "15корп3", "17", "17/25", " 3корп1", "3корп2", "4", "5", "6", "8", "9"]
    }, {
      name: "пров. Заводський",
      number: ["1"]
    }, {
      name: "пров. Задорожний",
      number: ["3/2", "3/3", "5/1", " 05 февраля", " 1", "2", "3/1", "4", " 6"]
    }, {
      name: "пров. Залужний",
      number: ["2", "12", "14А", "18А", "19А", "19Б", "19К", "20", "20А", "21А", "21В", "21Д", "21Ж", "21Е", "22", "22А"]
    }, {
      name: "пров. Заміський",
      number: ["3", "4", "5", "6", "6А", "7", "8", "9", "10", "11", "12", "14", "16"]
    }, {
      name: "пров. Замковецький",
      number: ["1", "1А", "1Б", "1Б/2", "1В", "1/1", "1/2", "2/2", "2/3", "2/4", "2А", "2Б", "2Б/1", "3А", "3А/2", "3Б/1", "3Б", "4", "5А", "5А/2", "5Б", "5Б/2", "5В", "5Г", "6А", "7", "7А", "7Б", "7Б/2", "7В/1", "7В/2", "7В/3", "7В/4", "7/1", "7/3", "8", "8А", "10", "14", "14/2", "16", "18", "18/2", "18/3", "18А", "18Б", "20"]
    }, {
      name: "пров. Заозерний",
      number: ["б/н"]
    }, {
      name: "пров. Запашний",
      number: ["б/н"]
    }, {
      name: "пров. Заповітний",
      number: ["1", "3", "4", "6", "8", "8А", "10"]
    }, {
      name: "пров. Заремби Владислава",
      number: ["35/5", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "53", "55", "57", "59", "61", "63", " 1/1", "1/2", "3/1", "3/2", "3/3", "3/4", "4", "5", "6", "7", "8", "9/1", "9/2", "10/1", "10/2", "11", "13", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    }, {
      name: "пров. Західний",
      number: ["3Д", "3Ц", "4", "4А"]
    }, {
      name: "пров. Звіринецький",
      number: ["2", "2А", "2Б", "3", "4", "4А", "4Б", "5", "8", "9", "9А", "10", "12", "14"]
    }, {
      name: "пров. Зелінського Академіка",
      number: ["8"]
    }, {
      name: "пров. Землянський",
      number: ["3", "4", "5", "6", "8", "10", "11", "14", "15/1", "15/2", "19", "21", "23", "25", "27"]
    }, {
      name: "пров. Зимовий",
      number: ["2", "3", "11", "11/1"]
    }, {
      name: "пров. Золочевський",
      number: ["2", "3", "4", "4Б", "5", "6", "6А", "6Б", "7", "8", "9", "10", "11", "13"]
    }, {
      name: "пров. Зоряний",
      number: ["1/5", "2/7", "3", "4", "5", "6", "6/1", "6/8", "7", "7/5", "9", "9/1", "9/2", "10", "11/3", "12", "12/1", "12/2", "13", "14", "15", "16", "17", "17Б", "18", "19", "21", "21А"]
    }, {
      name: "пров. Івченка Михайла",
      number: ["3", "4", "6", "7", "8", "11", "11А", "12/1", "12/2", "12А", "14", "16"]
    }, {
      name: "пров. Ізяславський",
      number: ["2", "4", "9", "11", "24", "26", "52", "52В", "52Г", "52Д"]
    }, {
      name: "пров. Інгульський",
      number: ["8", "9", "10", "14/11"]
    }, {
      name: "пров. Індустріальний",
      number: ["2", "17", "19/1", "19/2", "19А", "21", "23"]
    }, {
      name: "пров. Інженерний",
      number: ["4", "4А", "4Б"]
    }, {
      name: "пров. Інженерний (Бортничі)",
      number: ["1", "3", "5", "7", "11", "15", "17/1", "17/2", "19/1", "19/2", "23", "25", "27"]
    }, {
      name: "пров. Іпсилантіївський",
      number: ["3", "5"]
    }, {
      name: "пров. Йова Борецького",
      number: ["1", "2", "3", "4", "5", "6", "7А", "8", "10", "12", "14", "16"]
    }, {
      name: "пров. Кадіївський",
      number: ["8"]
    }, {
      name: "пров. Каменярів",
      number: ["3", "4", "5", "6", "7", "8", "10А", "10/1", "10/2", "10/3", "10/4", "11", "12", "12А", "14А", "15"]
    }, {
      name: "пров. Кам'янець-Подільський",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "10/2", "11", "12/1", "12/2"]
    }, {
      name: "пров. Кантемирівський",
      number: ["8", "9", "10", "11", "14", "16", "17"]
    }, {
      name: "пров. Карельський",
      number: ["2/7", "3", "5", "5/1", "7", "7/2", "8"]
    }, {
      name: "пров. Кармелюка Устима",
      number: ["23"]
    }, {
      name: "пров. Качури Якова",
      number: ["1", "2", "2А", "3", "3А", "4", "5", "5А", "6", "6А", "7", "8", "8А", "9", "11", "11А", "13"]
    }, {
      name: "пров. Качуровського Ігоря",
      number: ["1", "1А"]
    }, {
      name: "пров. Квітки-Основ'яненка",
      number: ["4", "6", "7", "7А", "7В", "10", "10А", "13А/1", "13А/2", "15А/1"]
    }, {
      name: "пров. Квітневий",
      number: ["5", "7", " 1А", "1Б", "1В", "2", "3", "4", "5А", "6", "8", "9", "10", "12"]
    }, {
      name: "пров. Квітучий",
      number: ["4", "6", "8", "9", "10", "12", "18"]
    }, {
      name: "пров. Керамічний",
      number: ["7А", "7Б", "9/5"]
    }, {
      name: "пров. Кисловодський",
      number: ["1", "1А", "2", "3", "4", "5", "6", "8", "9", "10", "11", "12", "13", "13А", "14", "14А", "15"]
    }, {
      name: "пров. Киянівський",
      number: ["2А", "3/7", "19"]
    }, {
      name: "пров. Кіровоградський",
      number: ["2А", "2Б", "4А", "6А", "6/1", "6/2", "8/1", "8/2", "8/3", "10", "10Ж", "12", "14"]
    }, {
      name: "пров. Кленовий",
      number: ["2", "4", "5", "6"]
    }, {
      name: "пров. Клінічний",
      number: ["2", "4", "6", "7", "9", "10"]
    }, {
      name: "пров. Кобзарський",
      number: ["10", "12", " 3", "4", "5", "7/1", "7/2", "7/3", "8", "9/1", "9/2", "11/1", "11/2"]
    }, {
      name: "пров. Кобилянської Ольги",
      number: ["3", "4", "5", "6", "8"]
    }, {
      name: "пров. Ковальський",
      number: ["11", "11А", "13", "19", "22А", " 20", "22", " 3", "4", "5", "6", " 12"]
    }, {
      name: "пров. Ковтунівський",
      number: ["б/н"]
    }, {
      name: "пров. Козацький",
      number: ["11/1", "11/2"]
    }, {
      name: "пров. Козловського Івана",
      number: ["3", "4", "5"]
    }, {
      name: "пров. Козятинський",
      number: ["4", "6", "8", "10", "12"]
    }, {
      name: "пров. Коломийський",
      number: ["16", "18корп1", "18корп2", "18корп3", "20", " 17/31А", " 3", "3/1", "5", "5А", "5/2", "7", "9", "9А", "11", "13/23", " 6", "8", "10", "12", "14"]
    }, {
      name: "пров. Конотопський",
      number: ["16", "18/5"]
    }, {
      name: "пров. Корчуватський",
      number: ["2", "3", "4/1", "4/2", "6", "6А", "7", "8/1", "8/2", "9", "11", "13", "15", "17"]
    }, {
      name: "пров. Косогірний",
      number: ["4", "7", "8", " 10"]
    }, {
      name: "пров. Костанайський",
      number: ["7А"]
    }, {
      name: "пров. Костя Гордієнка",
      number: ["1А", "2А", "3", "4", "5", "8", "8Є", "9", "10", "13"]
    }, {
      name: "пров. Костянтина Михальчука",
      number: ["7", "1"]
    }, {
      name: "пров. Кочерги Івана",
      number: ["1"]
    }, {
      name: "пров. Краєвидний",
      number: ["б/н"]
    }, {
      name: "пров. Краматорський",
      number: ["1А", "3", "3А/1", "3А/2", "4", "5/1", "6", "7", "8", "9", "9А/1", "9А/2", "10", "11", "12", "13", "14", "15", "16/1", "16/2", "17", "17А", "18/1", "18/2", "20", "22", "24/1", "24/2", "26", "28"]
    }, {
      name: "пров. Красикова Петра",
      number: ["10", "12"]
    }, {
      name: "пров. Красноводський",
      number: ["2А", "3", "3/1", "3А", "4", "4А"]
    }, {
      name: "пров. Краснокутський",
      number: ["12"]
    }, {
      name: "пров. Кременецький",
      number: ["3", "3А", "4", "4А", "5"]
    }, {
      name: "пров. Кривоноса Максима",
      number: ["3"]
    }, {
      name: "пров. Криловський",
      number: ["4"]
    }, {
      name: "пров. Кріпосний",
      number: ["4"]
    }, {
      name: "пров. Кудряшова",
      number: ["3"]
    }, {
      name: "пров. Кука Василя",
      number: ["1", "3", "5"]
    }, {
      name: "пров. Кулібіна",
      number: ["3"]
    }, {
      name: "пров. Курганівський",
      number: ["7"]
    }, {
      name: "пров. Куренівський",
      number: ["17", "19/5", " 16", "16А", "16Б", "16В", "18", " 2/8", "4", "4/8", "4/8А", "4/8Б", "4/9", "12А", "12Б", "15", "15/1", "15А"]
    }, {
      name: "пров. Кучмин Яр",
      number: ["3"]
    }, {
      name: "пров. Лабораторний",
      number: ["1", "3", "4", "6", "7", "7А", "14", "16", "18", "20", "22", "24", "26", "26А"]
    }, {
      name: "пров. Левадний",
      number: ["1", "2", "3", "4", "5", "6", "7", "7А", "8", "9", "12", "13", "14", "14А", "14Б", "14В", "14Г", "15", "15А", "15Б", "16", "16Г", "16Д", "17", "18", "18А", "19", "20", "21", "22"]
    }, {
      name: "пров. Левітана",
      number: ["4", "6"]
    }, {
      name: "пров. Лермонтова",
      number: ["3", "8", "8А", "8Б", "10А", "13", "14Г", "16", "22", "26Б", "28А", "28Б", "34"]
    }, {
      name: "пров. Липський",
      number: ["3"]
    }, {
      name: "пров. Лисичанський",
      number: ["3/1", "3/2", "4", "5", "6", "6/1", "7", "8", "9", "10", "11", "12/1", "12/2", "13", "15", "16/2", "17", "19"]
    }, {
      name: "пров. Литовський",
      number: ["3", "4/30", "5", "7", "8", "12", "12А", "17"]
    }, {
      name: "пров. Лісний",
      number: ["1", "2", "3", "5Г"]
    }, {
      name: "пров. Лісовий",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14"]
    }, {
      name: "пров. Лісозахисний",
      number: ["1", "1А", "2", "2А", "2Б", "2В", "2Г", "4", "4А", "4Б", "4В", "5", "6", "7", "9", "11", "11А", "11Б"]
    }, {
      name: "пров. Лобачевського",
      number: ["8", "8А"]
    }, {
      name: "пров. Лодигіна",
      number: ["3", "4", "5", "7/1", "7/2"]
    }, {
      name: "пров. Лозовий (Бортничі)",
      number: ["1", "1Б", "2", "3", "4", "5", "6", "8", "10"]
    }, {
      name: "пров. Лозовий (Троєщина)",
      number: ["1", "2", "4", "8"]
    }, {
      name: "пров. Луговий",
      number: ["1", "2", "3", "5", "6", "6А", "7", "8", "9", "10", "10А", "10Б", "11", "11А", "11В", "12", "14", "14А"]
    }, {
      name: "пров. Лужевського Руслана",
      number: ["14", "18", " 3"]
    }, {
      name: "пров. Луківський",
      number: ["1", "2", "3", "4", "6", "8", "10", "12", "13", "14", "15", "16", "17"]
    }, {
      name: "пров. Лук'янівський",
      number: ["6"]
    }, {
      name: "пров. Любарський",
      number: ["2", "4", "6"]
    }, {
      name: "пров. Люботинський",
      number: ["2", "3", "3/1", "3/2", "4", "4/1", "4/2", "5", "5/1", "5/2", "6", "7", "7/1", "7/2"]
    }, {
      name: "пров. Лютневий",
      number: ["2А/1", "2А/2", "2А/3", "3", "4", "5А/1", "5А/2", "5/1", "5/2", "6/1", "6/2", "7", "8", "8А/2", "10/1", "10/2", "12/1", "12/2", "13", "14", "14/2", "14/3", "15", "16/1", "16/2", "18/1", "18/2", "20", "20А", "20/1", "20/2"]
    }, {
      name: "пров. Магнітогорський",
      number: ["1"]
    }, {
      name: "пров. Майкопський",
      number: ["3/1", "3/2", "4", "5", "6/8", "7", "9", "11", "66"]
    }, {
      name: "пров. Макаренка",
      number: ["3", "3А", "4", "4А", "5", "6", "6А", "7", "7А", "7В", "7Г", "7Д", "7Е", "8", "9", "10", "11", "11А", "12", "12/2", "13", "13А", "15", "15А", "16", "16А", "17", "17А", "18", "18Б", "19", "19/2", "19А/1", "19А/2", "20", "21", "22", "24", "24А", "26", "26А", "28/20"]
    }, {
      name: "пров. Макіївський",
      number: ["2"]
    }, {
      name: "пров. Малинський",
      number: ["2", "3", "5"]
    }, {
      name: "пров. Малокитаївський",
      number: ["2", "3", "4", "5", "6"]
    }, {
      name: "пров. Малокитаївський",
      number: ["2", "3", "4", "5", "6", " 24/15"]
    }, {
      name: "пров. Маломарганецький",
      number: ["3", "4", "5", "6/1", "6/2", "7", "8", "9/2", "9/1", "10", "11", "12"]
    }, {
      name: "пров. Мальовничий",
      number: ["2/2", "4", "4/2", "4А", "5", "6", "7", "8", "8/2", "9", "10", "12"]
    }, {
      name: "пров. Марганецький",
      number: ["3", "4", "5/1", "5/2", "6", "7/1", "7/2", "8", "9", "10/1", "10/2", "11", "12"]
    }, {
      name: "пров. Маршака",
      number: ["1", "1А", "2", "3", "3/2", "4", "5", "5/2", "6", "6А", "8", "8/2", "9", "10", "11", "16"]
    }, {
      name: "пров. Мар'яненка Івана",
      number: ["7", "9", "11/12", "13", "14"]
    }, {
      name: "пров. Машинобудівний",
      number: ["15", " 25", " 27", "28"]
    }, {
      name: "пров. Межовий",
      number: ["2", "3", "5", "6", "7", "7А", "10", "12", "14", "16", "18", "20", "20А", "22", "24", "24А", "26", "28", "30", "32", "34", "38", "40", "44", "46", "50", "52", " 3А", " 5А"]
    }, {
      name: "пров. Металістів",
      number: ["1"]
    }, {
      name: "пров. Микешина",
      number: ["4"]
    }, {
      name: "пров. Микільський",
      number: ["1/25", "9"]
    }, {
      name: "пров. Мильний",
      number: ["19"]
    }, {
      name: "пров. Миру",
      number: ["1", "3", "5", "7", "9"]
    }, {
      name: "пров. Мисливський",
      number: ["2", "4", "6", "7", "8", "9", "9А", "10", "11", "12", "13", "13А", "14", "15", "17", "25", "27", "27А", "29", "30"]
    }, {
      name: "пров. Михайлівський",
      number: ["17", "20", "21", " 4", "7", "8", "9", "9А", "9Б", "10/2", "12", "14", "21/13", "24/5"]
    }, {
      name: "пров. Мінський",
      number: ["1А", "3", "3/18", "4", "6", "6/1", "6/2", "7", "9", "9/1", "9/2", "9/3", "11", "11А", "13", "15", "16", "17/6", "18", "18/1", "18/2", "18/3", "20", "20/1", "20/2", "22", "22/2", "23", "24", "24/1", "24/2", "24/3", "24/4", "26", "26/2", "28", "30", "31/2", "32", "34", "34/2", "36", "38", "40", "42", "42/1", "42/2"]
    }, {
      name: "пров. Мічуріна",
      number: ["3/2А", "5/1", "5/2", "6", "7", "8", "9", "11/1", "11/2", "11/3", "15/1", "15/2", "15/3", "19Б"]
    }, {
      name: "пров. Молочанський",
      number: ["3", "3А", "5", "5А", "7/1", "7/2", "9А"]
    }, {
      name: "пров. Моринецький",
      number: ["3", "4/1", "4/2", "5", "7", "7/2", "9А", "9А/2", "11/1"]
    }, {
      name: "пров. Москвіна",
      number: ["3", "4", "5", "6", "8", "10", "12", "14", "16"]
    }, {
      name: "пров. Московський",
      number: ["1", "1/1", "1А", "1Б", "1Ж", "2", "2А", "3", "3А", "3Б", "3Г", "3Д", "3К", "3Н", "4", "5", "5А", "5Б", "6", "7", "8", "9", "10", "11", "12", "12А", "13", "14", "15", "15/1", "16", "16А", "17", "18", "19", "20А", "21", "23", "25", "25А", "27", "29", "31", "31А", "33", "35", "37"]
    }, {
      name: "пров. Мостовий",
      number: ["1", "3/1", "3/2", "4/1", "4/2", "7", "8", "9/1", "9/2", "10/1", "10/2", "11/1", "13", "17", "17А", "19"]
    }, {
      name: "пров. Моторний",
      number: ["3", "5/7", "6", "8", "11", "11А", "18", "19", "19А", "19Б", "19В"]
    }, {
      name: "пров. Музейний",
      number: ["2", "2А", "2Б", "2В", "4", "6", "8", "8А", "8Б", "10", "10А", "12", " 2Д"]
    }, {
      name: "пров. Нагірний",
      number: ["3", "4", "5", "6", "6А", "8", "10", "13"]
    }, {
      name: "пров. Народний",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
    }, {
      name: "пров. Невський",
      number: ["3", "4", "6", "7/26", "9"]
    }, {
      name: "пров. Несторівський",
      number: ["4", "6", "7", "7/9", "10", "13/19", " 03 мая"]
    }, {
      name: "пров. Ніжинський",
      number: ["2", "4"]
    }, {
      name: "пров. Новаторів",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "12"]
    }, {
      name: "пров. Новодачний",
      number: ["3", "5"]
    }, {
      name: "пров. Новонаводницький",
      number: ["3", "5", "5А", "7", "7А", "9", "9А", "11"]
    }, {
      name: "пров. Новонародний",
      number: ["2", "2/1", "3", "3/2", "5", "5/1", "5/2", "5/3", "7", "9/1"]
    }, {
      name: "пров. Новопечерський",
      number: ["3", "3/2", "3Д", "5", "5А", "18", "19/3"]
    }, {
      name: "пров. Оборонний",
      number: ["3", "5", "7"]
    }, {
      name: "пров. Обсерваторний",
      number: ["3", "3А", "3Г", "11/1"]
    }, {
      name: "пров. Овочевий",
      number: ["3/1", "3/2", "4", "5", "6", "7", "8"]
    }, {
      name: "пров. Одоєвського",
      number: ["1/2", "1/3", "3", "5", "6/1", "6/2", "6/4", "6А", "7", "8", "9", "10", "11/1", "12", "13", "14", "15", "16", "16А", "17", "18", "19"]
    }, {
      name: "пров. Озерний",
      number: ["1", "2", "2А", "3", "4/1", "4/2", "5", "7", "7А", "9", "11", "13", "15", "17", "19", "21", "23", "25"]
    }, {
      name: "пров. Орловський",
      number: ["1/5", "3", "3/1", "3/2", "6"]
    }, {
      name: "пров. Осінній",
      number: ["1", "2", "3", "3А"]
    }, {
      name: "пров. Остерський",
      number: ["2/61", "3", "4", "5", "6", "6А", "7", "8", "9", "10", "10А", "11", "12", "13А", "14"]
    }, {
      name: "пров. Островського",
      number: ["1", "2", "3", "5", "7", "9"]
    }, {
      name: "пров. Охтирський",
      number: ["4", " 3", "3/1", "3корп5", "3А", "7", "7корп1", "7корп2", "7корп3", "7корп4"]
    }, {
      name: "пров. Очаківський",
      number: ["8/9", "9", "10", "11", "12", "13", " 3", "3/8", "4", "5/6", "6"]
    }, {
      name: "пров. Павленка",
      number: ["1", "3", "4", "6/1", "6/2", "6/3", "8", "9", "10", "11", "13/1", "13/2", "15", "17", "19/1", "19/2", "19А", "21", "23/1", "23/2", "25", "27/1", "27/2", "27А", "29", "29/19", "57А", "69"]
    }, {
      name: "пров. Панаса Мирного",
      number: ["4", "5"]
    }, {
      name: "пров. Параджанова Сергія",
      number: ["Б/Н"]
    }, {
      name: "пров. Парковий",
      number: ["7", "9", "9/2", "11", "11/21", " 4", "6А", "6Б", "6А/1", "6Б/1"]
    }, {
      name: "пров. Паровозний",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "пров. Пересіченський",
      number: ["1", "5"]
    }, {
      name: "пров. Петріва Всеволода",
      number: ["1", "1А", "1Б", "2", "3/1", "3/2", "4", "4А", "5", "6", "7/1", "7/2", "8"]
    }, {
      name: "пров. Петропавлівський",
      number: ["3/1", "3/2", "5", "7", "7/1", "9", "11", "13/1", "15/1", "15/2", "17", "19", "23", "23/1", "25А", "25/1"]
    }, {
      name: "пров. Пилипівський",
      number: ["4"]
    }, {
      name: "пров. Пирятинський",
      number: ["2", "4", "5", "6", "7", "10", "12", "13", "14"]
    }, {
      name: "пров. Підбірний",
      number: ["7", "12", "14"]
    }, {
      name: "пров. Піхотний",
      number: ["3", "3А", "4", "4А", "5", "6А"]
    }, {
      name: "пров. Пішохідний",
      number: ["3", "3А"]
    }, {
      name: "пров. Платонівський",
      number: ["7"]
    }, {
      name: "пров. Плещеєва",
      number: ["4", "5", "6/2", "6/3", "7", "8", "9", "20/1", "20/2"]
    }, {
      name: "пров. Подільський",
      number: ["1", "1А", "1А/2", "1Б", "3", "3А", "4", "5/1", "5/2", "5/3", "5/4", "5/5", "5А", "6/1", "6/2", "7А", "7Б", "7/1", "7/2", "8", "8А", "9", "9А", "10", "11", "12", "14", "16/1", "16/2", "16/3"]
    }, {
      name: "пров. Поліський",
      number: ["9", "11", "13", "15", " 1", "3", "5", "5/1", "7", "7/1"]
    }, {
      name: "пров. Політехнічний",
      number: ["1/33", "2А", "3А", "3В", "4", "4А", " 5А"]
    }, {
      name: "пров. Полковий",
      number: ["1", "8/1", "8/2", "8/3", "10/1", "10/2"]
    }, {
      name: "пров. Полоцький",
      number: ["2А", "4", "6", "10", "10А", "11", "12"]
    }, {
      name: "пров. Польовий",
      number: ["10", " 5", "6", "7", "9", "12"]
    }, {
      name: "пров. Польовий (Бортничі)",
      number: ["1", "1"]
    }, {
      name: "пров. Полянський",
      number: ["7", "9", "11", "11А", "13", "13А"]
    }, {
      name: "пров. Попова",
      number: ["2В", "5", "5А"]
    }, {
      name: "пров. Приладний",
      number: ["2", "2Б", "10", "10А", " 4", "4Б", "6", "8"]
    }, {
      name: "пров. Пролетарський",
      number: ["3", "4", "19"]
    }, {
      name: "пров. Промисловий",
      number: ["1", "2", "3", "4", "4А", "5", "6", "8", "8А"]
    }, {
      name: "пров. Прополісний",
      number: ["13", "14", "16", "17", "17А", "19", "19В", "20", "22"]
    }, {
      name: "пров. Прорізний",
      number: ["5", "6", "8", "9А", "9Б", "9В", "9Г", "10", "12", "14"]
    }, {
      name: "пров. Профспілковий",
      number: ["3", "4", "5"]
    }, {
      name: "пров. Псковський",
      number: ["3", "4", "5", "6", "10"]
    }, {
      name: "пров. Пуща-Водицький",
      number: ["1", "3А", "4", "4А", "6", "6А", "6/2", "6/3", "7", "8", "9/1", "9/2", "10", "11"]
    }, {
      name: "пров. П'ятигорський",
      number: ["3", "3А", "4", "5", "6", "7"]
    }, {
      name: "пров. Радищева",
      number: ["1", "2", "3", "3А", "4", "4Б", "5", "6", "7", "8", "10", "12/16", "18", "19"]
    }, {
      name: "пров. Райгородський",
      number: ["3", "4", "6", "8"]
    }, {
      name: "пров. Рататюків",
      number: ["6", "9", "11", "13", "15"]
    }, {
      name: "пров. Редутний",
      number: ["3", "3А", "4", "6", "7", "8/12", "8А", "8", "9", "10", "10А", "11", "12", "13", "14", "15", "17", "19/34"]
    }, {
      name: "пров. Ремісничий",
      number: ["2", "4", "6", "10", "18", "18А"]
    }, {
      name: "пров. Ржевський",
      number: ["3", "6"]
    }, {
      name: "пров. Рибний",
      number: ["2", "3", "4", "5/2", "5/3", "6", "7", "8", " 1"]
    }, {
      name: "пров. Рилєєва",
      number: ["1", "1А", "2", "3", "3/2", "4", "5", "5А", "6", "7", "7А", "8", "8А", "9", "10", "11", "11А", "11/1", "12", "14", "15", "15А", "15Б", "16", "18"]
    }, {
      name: "пров. Рильський",
      number: ["3", "4", "5", "6", "8", "8А", " 10"]
    }, {
      name: "пров. Робітничий",
      number: ["3", "5", "5А", "7", "9", "11"]
    }, {
      name: "пров. Рожевий",
      number: ["3/22", "5", "7/1", "7/2", "7/3", "7/9", "11", "13", "13/2", "13/3", "15"]
    }, {
      name: "пров. Розважівський",
      number: ["3/1", "3/2", "3А", "3А/1", "3А/2", "4/2", "5А", "5/1", "5/2", "6", "7", "7/1", "7/2", "8/1", "8/2", "10/1", "10/2", "12", "14"]
    }, {
      name: "пров. Рощинський",
      number: ["4", "6", "8", "10"]
    }, {
      name: "пров. Рубежівський",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18", "20", "22"]
    }, {
      name: "пров. Ружинський",
      number: ["8", "10", "12", " 20", "22", "24"]
    }, {
      name: "пров. Рясний",
      number: ["1", "3/1", "3А", "4", "5/1", "5/2", "5", "7", "9", "10А", "11", "13", "15", "17/1", "17/2", "19"]
    }, {
      name: "пров. Садовий",
      number: ["18"]
    }, {
      name: "пров. Садовий (Бортничі)",
      number: ["1", "2", "3", "4", "4А", "5", "5А", "6", "7", "9", "11"]
    }, {
      name: "пров. Садовий (Жуляни)",
      number: ["1", "1А", "2", "2А", "3", "3А", "4", "5", "5А", "6", "6А", "7", "9", "10", "11", "12", "13", "14", "15", "16", "16А", "18", "20", "22", "24", "26", "26А", "27", "29", "33", "39", "43/16", "59", "59А", "69"]
    }, {
      name: "пров. Садовий 1",
      number: ["1", "2", "3", "4", "4А", "5", "5А", "6", "7", "9", "11"]
    }, {
      name: "пров. Садовий 2",
      number: ["1", "3", "4", "5"]
    }, {
      name: "пров. Садовий 3",
      number: ["2", "4", "6", "8", "10", "12"]
    }, {
      name: "пров. Садовського Миколи",
      number: ["1/2", "1/3", "3", "3А", "3А/1", "3А/2", "5", "5А", "7", "9", "11", "13"]
    }, {
      name: "пров. Салютний",
      number: ["4/1", "4/2", "6", "7", "8", "8А", "10/1", "10/2", "10/3", "12", "14"]
    }, {
      name: "пров. Самбірський",
      number: ["1", "3", "4", "5", "6", "7", "8", "8/1", "8/2", "9", "10/1", "10/2", "10/3", "15", "17", "17А/1", "17А/2", "17Б", "17В", "17Г"]
    }, {
      name: "пров. Святошинський",
      number: ["2", "3А", "9"]
    }, {
      name: "пров. Сеноманський",
      number: ["1/2А", "4/1", "4/2", "6", "6А", "8", "10/1", "10/2", "12/1", "12/2", "16"]
    }, {
      name: "пров. Серпуховський",
      number: ["3", "7", "14", "28"]
    }, {
      name: "пров. Сілікатний",
      number: ["4", "5", "7", "8", "9", "10", "11", "12", "14", "14/2", "18", "18/3"]
    }, {
      name: "пров. Сільськогосподарський",
      number: ["1", "2", "4", "4А"]
    }, {
      name: "пров. Сквирський",
      number: ["3/1", "3/2", "5", "6", "7/1", "7/2", "8", "10", "11", "12", "13", "14", "15", "16", "18/1", "18/2", "20/19"]
    }, {
      name: "пров. Славгородський",
      number: ["2", "4", "6", "8", "12", "14", "16", "18", "20", "22", "24", "26"]
    }, {
      name: "пров. Слобідський",
      number: ["2/13", "7", "9", "11", "11/1"]
    }, {
      name: "пров. Слюсарний",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "10А", "11", "12"]
    }, {
      name: "пров. Сніжнянський",
      number: ["3", "3А", "4", "6", "8", "8А"]
    }, {
      name: "пров. Сновський",
      number: ["1", "3", "5", "6", "7", "8", "9", "10", "11", "12", "13/5"]
    }, {
      name: "пров. Солодкий",
      number: ["1", "1А", "2", "3", "4", "5", "6", "7", "8", "8В"]
    }, {
      name: "пров. Ставропольський",
      number: ["3", "4", "5", "6", "7", "9", "11"]
    }, {
      name: "пров. Стадіонний",
      number: ["2/10", "10/2"]
    }, {
      name: "пров. Старокиївський",
      number: ["01 марта"]
    }, {
      name: "пров. Степовий",
      number: ["б/н"]
    }, {
      name: "пров. Столєтова",
      number: ["3/9", "4/7", "5", "6/6", "7/1", "8", "8А", "9/1", "9/2", "10", "11", "12"]
    }, {
      name: "пров. Стратегічний",
      number: ["1", "2", "3", "10", "11", "12", "13", "14", "15", "15А", "16", "17", "18", "19", "20", "21", "23"]
    }, {
      name: "пров. Суворова",
      number: ["1", "2", "4", "6", "10"]
    }, {
      name: "пров. Сухенка Василя",
      number: ["8", "8/20", "10", "10/2"]
    }, {
      name: "пров. Таврійський",
      number: ["3", "4/13", "6/14", "7", "8", "8/2", "9", "10", "10/2"]
    }, {
      name: "пров. Таганрозький",
      number: ["3", "3А", "4", "5", "7", "8", "9", "10", "11", "11А", "12"]
    }, {
      name: "пров. Тагільський",
      number: ["10/1", "10/2", "12/1", "12/2", "14", "16"]
    }, {
      name: "пров. Таращанський",
      number: ["2", "3", "5", "7", "9", "11", "13"]
    }, {
      name: "пров. Татарський",
      number: ["8", " 1", "2"]
    }, {
      name: "пров. Тбіліський",
      number: ["1", "3А", "4/10", "10"]
    }, {
      name: "пров. Телеграфний",
      number: ["2А"]
    }, {
      name: "пров. Теремківський",
      number: ["2/1", "2/2", "4", "5/1", "5/2", "6/1", "6/3", "7/1", "8", "8/2", "11/1", "19/1"]
    }, {
      name: "пров. Тимірязєвський",
      number: ["1", "1А", "1Б", "1В", "1Г", " 6"]
    }, {
      name: "пров. Тихвінський",
      number: ["4/47", "6/48", "8", "10", "12/65"]
    }, {
      name: "пров. Тихонівський",
      number: ["11"]
    }, {
      name: "пров. Тихорецький",
      number: ["3", "4/6", "5", "9В/1"]
    }, {
      name: "пров. Тобольський",
      number: ["1/8", "4/1", "4/2", "5"]
    }, {
      name: "пров. Толбухіна",
      number: ["1/1", "1/2", "2", "3/1", "3/2", "3А/1", "3А/2", "4", "5А", "5/1", "5/2", "6", "7", "8"]
    }, {
      name: "пров. Травневий",
      number: ["3", "5", "7/15", "30/6", "104/2"]
    }, {
      name: "пров. Тропініна",
      number: ["3", "4", "5", "6", "8"]
    }, {
      name: "пров. Тульський",
      number: ["1", "2"]
    }, {
      name: "пров. Тупиковий",
      number: ["2А", "3"]
    }, {
      name: "пров. Тупиковий 2",
      number: ["11", "17", "20"]
    }, {
      name: "пров. Тупиковий 3",
      number: ["3", "4", "6", "8"]
    }, {
      name: "пров. Тургенєва",
      number: ["3", "3А", "5", "5А"]
    }, {
      name: "пров. Ужгородський",
      number: ["7"]
    }, {
      name: "пров. Уральський",
      number: ["15", "16", "17", "18", "26", "28", " 1/5", "9/1"]
    }, {
      name: "пров. Уссурійський",
      number: ["8", " 8Б", "10", "16", "16А", "18", " 6"]
    }, {
      name: "пров. Устинівський",
      number: ["3", "5", "6", "6А", "7", "9", " 8", "8А", "10", "11", "13", "13А", "15", "16", "16А", "18", "18А", "20", "23", "25", "27", "29", "31"]
    }, {
      name: "пров. Учбовий",
      number: ["1А", "2А", "3/1", "4А", "5", "6", "6/1", "7", "9"]
    }, {
      name: "пров. Учительський",
      number: ["б/н"]
    }, {
      name: "пров. Федьковича",
      number: ["1/1", "1/2", "2", "4", "5/1", "5/2", "6/1", "6/2", "6А", "7", "8А", "9А", "9/37", "10/1", "10/2", "12/16", "13", "15", "16/1", "16/2", "18/1", "18/2", "20"]
    }, {
      name: "пров. Феодосійський",
      number: ["12", "14", "14А"]
    }, {
      name: "пров. Фізкультури",
      number: ["9", "13"]
    }, {
      name: "пров. Франка Івана",
      number: ["1", "2", "3", "4", "4А", "5", "6", "7", "7А", "8", "9", "10", "11", "12", "13", "14", "15", "17", "19", "21", "23", "25", "27", "29"]
    }, {
      name: "пров. Франка Івана 1",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "11"]
    }, {
      name: "пров. Франка Івана 2",
      number: ["1", "2", "3", "4", "6"]
    }, {
      name: "пров. Франка Івана 4",
      number: ["1", "3"]
    }, {
      name: "пров. Фролівський",
      number: ["06 ноября"]
    }, {
      name: "пров. Фузиків",
      number: ["3", "4", "5/1", "5/2", "6", "7", "8", "10", "12/27"]
    }, {
      name: "пров. Харківський",
      number: ["1", "1А", "3", "3А", "3/1", "3/2", "4", "4А", "5", "5А", "6", "7А", "8", "9", "10"]
    }, {
      name: "пров. Хлібний",
      number: ["2", "3", "4", "6", "8"]
    }, {
      name: "пров. Холмогорський",
      number: ["1", "3", "5", "10", "13/1", "13/2", "15", "16", "17", "18", "19"]
    }, {
      name: "пров. Хомова Ярослава",
      number: ["1", "14А", "16", "44А"]
    }, {
      name: "пров. Хорива",
      number: ["4"]
    }, {
      name: "пров. Хорольський",
      number: ["7/14", "9/2", "11", "11/2", "13", "13А", "15/1"]
    }, {
      name: "пров. Хортицький",
      number: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }, {
      name: "пров. Хрестовий",
      number: ["2", "6", "8/9", " 4"]
    }, {
      name: "пров. Хутоярівський",
      number: ["3/1", "3/2", "4", "5/1", "5/2", "6", "7/1", "7/2", "8"]
    }, {
      name: "пров. Цегельний",
      number: ["6", "8", "10", "12", "16"]
    }, {
      name: "пров. Цимбалів Яр",
      number: ["15", "17", "19", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", " 1", "2/41", "3", "4", "5/1", "5/2", "6", "7/1", "7/2", "8", "9", "10/1", "10/2", "11", "11/2", "12", "13/1", "13/2", "14", "16", "18", " 25/1", "25/2"]
    }, {
      name: "пров. Цимлянський",
      number: ["2", "6", "18"]
    }, {
      name: "пров. Ціолковського",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
      name: "пров. Чаплигіна",
      number: ["1/31", "2/33", "3/1", "4", "4А", "4Б", "5/2", "6", "8", "8А", "9/2", "10", "10А", "11", "11А", "12", "13", "14", "14А", "15", "15/1", "16", "18", "17", "19", "20", "21", "22", "22А", "23", "23А"]
    }, {
      name: "пров. Червоний",
      number: ["1/17", "2А", "7А", "8", "12", "14/1", "14/2", "15", "16", "17", "18/1", "18/2", "21", "23/19"]
    }, {
      name: "пров. Червонозаводський",
      number: ["2/13", "7/5"]
    }, {
      name: "пров. Черешневий",
      number: ["1", "2/1", "2/2", "2А", "3/1", "3/2", "4", "5", "6", "7", "8", "10", "10/1", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21/1", "21/2", "22/1", "22/2"]
    }, {
      name: "пров. Чернігівський",
      number: ["1", "1А", "3", "3А", "5", "7", "7А", "9", "10", "11", "12", "13", "15"]
    }, {
      name: "пров. Чехова 1",
      number: ["1", "2", "3", "4", "5", "6", "6А", "7", "8", "9", "9/1", "10", "11", "11/1", "12", "13", "14"]
    }, {
      name: "пров. Чехова 2",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16"]
    }, {
      name: "пров. Чеховський",
      number: ["2", "3", "4", "6", "8", "9", "10", "11"]
    }, {
      name: "пров. Чигиринський",
      number: ["3"]
    }, {
      name: "пров. Чистяківський",
      number: ["3", "7/33"]
    }, {
      name: "пров. Чугуївський",
      number: ["10", "12", "13", "13А", "15", "15А", "17", "19", "19А", "21"]
    }, {
      name: "пров. Шевченка (Жуляни)",
      number: ["1", "2", "2А", "3", "3А", "4", "5", "6", "6А", "7", "7А", "8", "8А", "9", "9А", "10", "11", "12", "13", "14", "14А", "14Б", "15", "15А", "16", "16А", "17", "17А", "18", "19", "20", "21", "23", "25", "26", "26А", "27", "28", "28А", "29", "29А", "31", "31А", "33", "35", "36", "37", "39", "41", "41А", "43", "43А", "45", "47", "49", "51", "53", "55", "57"]
    }, {
      name: "пров. Шевченка Тараса",
      number: ["3", "4", "5", "7/1", "8", "8А", "8Б", "9/2", "13", "13/21", "13/21А", "13/21В", "16", "18/19", " 12"]
    }, {
      name: "пров. Шевченка Тараса (Бортничі)",
      number: ["12А", "23", "23В", "25", "29", "31", "33"]
    }, {
      name: "пров. Шишкінський",
      number: ["3", "5", "11", "11Б", "12", "14"]
    }, {
      name: "пров. Шляховиків",
      number: ["2А/1", "2А/2", "2Б", "2В", "2Г", "2Д", "2Е"]
    }, {
      name: "пров. Шульгина Якова",
      number: ["3", "3А"]
    }, {
      name: "пров. Щасливий",
      number: ["б/н"]
    }, {
      name: "пров. Щоглівській",
      number: ["2", "3", "3/3", "4", "5", "6"]
    }, {
      name: "пров. Щусєва",
      number: ["3", "4", "5", "6", "7/1", "7/2", "8", "9", "10", "12", "14", "16"]
    }, {
      name: "пров. Яблуневий",
      number: ["3/1", "3/2", "5", "6/1", "6/2", "7", "9/1", "9/2", "11"]
    }, {
      name: "пров. Ягідний",
      number: ["3", "3А", "4", "5"]
    }, {
      name: "пров. Якубовських родини",
      number: ["4А", "6А", "6Б"]
    }, {
      name: "пров. Ялинковий",
      number: ["11", "13", "25", "27", "28", "28А", "30", "30А", "32", "34А", "35", "37", "38", "40"]
    }, {
      name: "пров. Ялинковий (Бортничі)",
      number: ["1", "3", "4", "5", "6", "7", "8", "11", "13", "15", "18", "20", "22", "24", "26", "28"]
    }, {
      name: "пров. Ярославський",
      number: ["1", "1/3Б", "4", "5/2Б", "7/9"]
    }, {
      name: "пров. Ясеневий",
      number: ["3", "4/1", "4/2", "5/1", "5/2", "6/1", "6/2", "6/3"]
    }, {
      name: "пров. Ясинуватський",
      number: ["9", "9А", "10", "11"]
    }, {
      name: "пров. Ясний",
      number: ["3/1", "3/2", "4", "5", "6/1", "6/2", "7", "8/1", "8/2", "10/1", "10/2", "12/1"]
    }, {
      name: "проїзд Богатирський",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28"]
    }, {
      name: "проїзд Військовий",
      number: ["1", "6", "8", "8А", "10"]
    }, {
      name: "проїзд Золотоворітський",
      number: ["3"]
    }, {
      name: "проїзд Калиновий Ріг",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "23"]
    }, {
      name: "проїзд Луківський",
      number: ["б/н"]
    }, {
      name: "проїзд Редьчинський",
      number: ["б/н"]
    }, {
      name: "проїзд Салютний",
      number: ["4/1", "4/2", "5", "6", "7", "8", "8А/1", "10/1", "10/2", "10/3", "12", "14"]
    }, {
      name: "проїзд Саперно-Слобідський",
      number: ["3", "8", "22", "22А", "26", "28", "30", "32", "34"]
    }, {
      name: "просп. Бажана Миколи",
      number: ["1Т", "1Т/1", " 1І", "1К", "1М", "1Р", " 10", "10А", "12", "12А", "14", "14А", "16", " 1Д", "1Д/1", " 1Е", "1Л", " 19", "19/1", " 3", "3А", "3А/1", "3А/2", "3Б", "3В", "3В/1", "3В/2", "3В/3", "3В/4", "3Г", "3Д", " 5", "5А", "5Б", "5В", "5Г", "5Д", "5Е", "7", "7А", "7А/1", "7А/2", "7Б", "7Б/1", "7В", "7Г", "7Д", "7Е", "7Ж", "7І", "9", "9/1", "9А", "9А/1", "9Б", "9В", "9Г", "9Д", "9Е", "9Ж", "9З", "9З/1", "9З/2", " 1А", "8Б", " 28", "28А", "28Б", "28В", "30", "32", "32А", "32Б", "34", "34А", "34Б", "36", "36А", " 6Б", "24/1", "26"]
    }, {
      name: "просп. Броварський",
      number: ["3А", "5И", "7А", "8", "9В", "10А", "15", "17", "18К", " 25", " 87", "89", "89А", "93", " 1", "1А", "1Б", "2", "3", "5", "5А", "7", "9", "9/1", "11", "11А", "13", "13А", "17", "17А", "19", "20", "20А", "20Б", "21", "21А", "22А", "22Б", "22Г", "23", "23А", "24", "25", "27", "29", "31", "32", "33", "35", "37", "37А", "39", "41", "43", "47", "47А", "49", "61", "63", "65", "67", "67А", "67Б", "67В", "67Г", "69", "71", "71А", "77", "79", "81", "83", "85", " 3Б", "42А", " 31/33", "33"]
    }, {
      name: "просп. Ватутіна Генерала",
      number: ["15", "17", "17А", "23", "23А", "28А", "30", "30А", " 22", "22А", "22Б", "22В", "24", "24А", "24Б", "24В", "26", "26А", "26Б", "26В", " 14", "16", " 2", "4", "4А", "6", "6А", "8", "8А", "8Г", "10", "10А", "11Б", "12А", "13Б", "14А", " 2А", "2Б", "2В", "4Б", "4В", " 1Г", "3", "3Б", "5", "5В", "9", "11", "11А"]
    }, {
      name: "просп. Визволителів",
      number: ["1", "3А", "5", "6", "8А", "13", "15", "17", "17А", "19"]
    }, {
      name: "просп. Відрадний",
      number: ["16/50", "18", "18А", "18Б", "20", "22", "22А", "22Б", "24А", "24/93", "61", "71/2", "73", "75", "77/1", "79/2", "81", "83", "85", "87", "89", "91/1", "93/2", " 95", "95Г", "95Д", "95Е", "95Ж", "95К", "95С", "97", "103", " 1", "3", "4", "5", "6/1", "7", "8", "8А", "9", "10", "10А", "11", "12", "12А", "12Б", "13", "14/45", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49/2", " 51", "55", "59", "67", "69", " 26/54", "28", "28А", "28Б", "28В", "28Г", "30", " 32", "32А", "34", "36", "36А", "36Б", "38", "38А", "38Б", "38В", "40", "40А", "42", "44", "46", "46А", "50", "52", "52А", "52Б", "107", "107А"]
    }, {
      name: "просп. Гагаріна Юрія",
      number: ["21", "23", "27", " 12/1", "12А", "14", "14А", "14В", "16", "18", "18А", "18Б", "19", "19/1", "20", "20А", "20Б", "22", " 2", "2/35", "2А", "3", "3А", "4", "4А", "5/2", "6", "7", "8", "8А", "8Б", "9", "9А", "10/2"]
    }, {
      name: "просп. Героів Сталінграда",
      number: ["35", "35/1", "35А", "37", "37/1", "37/2", "37/3", "39", "39/1", "39А", "39Б", "39Б/1", "39В", "39В/1", "39В/2", "39Г", "41", "43", "43А", "43Б", "43Б/1", "43В", "43Г", "45", "45А", " 1", "1/1", "1/2", "1А", "1А/1", "1А/2", "1А/3", " 2", "2/37", "2А", "2Б", "2В", "2Г", "3Гкорп1", "2Гкорп2", "2Г/1", "2Г/2", "2Д", "4корп1", "4корп2", "4корп3", "4корп4", "4корп5", "4корп6", "4корп7", "4корп8", "4корп9", "4А", "4Б", "6корп1", "6корп2", "6корп3", "6корп4", "6корп5", "6корп6", "6корп7", "6корп8", "6Акорп1", "6Акорп2", "6Бкорп1", "6Бкорп2", "6В", "6Г", "6Д"]
    }, {
      name: "просп. Героїв Сталінграда",
      number: ["13", "13/1", "13/2", "13А", "13Б", "15", "15А", "15Б", "17", "17А", "19", "19/1", "19А", "19Б", "19В", "19Г", "21/38", " 7", "7/1", "7/2", "7а", "7б", "8корп1", "8корп2", "8корп3", "8корп4", "8корп5", "8корп6", "8корп7", "8корп8", "8корп9", "8А", "8Б", "9", "9А", "9Б", "10", "10Акорп1", "10Акорп2", "10Акорп3", "10Акорп4", "10Акорп5", "10Акорп6", "10Акорп7", "10Акорп8", "10Б", "11", "11А", "11Б", " 12", "12А", "12Б", "12В", "12Гкорп1", "12Гкорп2", "12Д", "12Е", "12Ж", "12К", "12Л", "12М", "12Н", "14", "14А", "14Б", "14Б/1", "14В", "14Г", "14Г/1", "14Ж", "14Ж/1", "14Ж/2", "16", "16/1", "16А", "16Б", "16Б/1", "16В", "16В/1", "16В/2", "16Г", "16Дкорп1", "16Дкорп2", "18", "18/20", "18А", "18Б", "18В", "23/27", "23А", "25", "25/1", "25А", "25Б", "27", "27/1", "27/2", "27/3", "27А", "27А/1", "27Б", "27Б/1", " 20", "20А", "20А/1", "20А/2", "20А/3", "20Б", "20Б/1", "22", "22/1", "22/2", "22/3", "22/4", "22/5", "22/6", "24", "24/1", "24/2", "24А", "24А/1", "24А/2", "24А/3", "24Б", "24В", "26", "26А", "26А/1", "26А/2", "28", "28А", "30", "30А", "32", "32А", "32Б", "32В", "34", "36", "38", "40", "40/1", "40/2", "40/3", " 42", "42А", "42А/1", "42Б", "42В", "44", "44А", "44А/1", "44А/2", "44А/3", "44А/3", "44А/4", "44А/5", "44А/6", "44А/7", "46", "46/1", "46/2", "46А", "46А/1", "46А/2", "46Б", "46В", "46Г", "46Д", "46Д/1", "47", "47А", "48", "48А", "49", "49А", "49Б49В", "49Г", "51", "51/1", "51/2", "51А", "51Б", "51В", "53", "53А", "53Б", "53Б/1", "55", " 50", "50А", "52", "52/1", "52/2", "52/3", "52А", "54", "54А", "54Б", "56", "56/1", "56А", "56Б", "56В", "56В/1", "57", "58", "58А", "58Б", "59", "59А", "60", "61", "61А", "61Б", "62", "63", "63/1", "63А", "63Б", "63В", "64", "65", "65/1", "65/2", "65/3", "65/4", "65/5", "65/6", "65/7", "65А", "65Б", "65В", "65Г", "65Д", "65Е"]
    }, {
      name: "просп. Глушкова Академіка",
      number: ["2", "2А", "4Б", "4Г", "4Д", "4Е", "6", "6А", "8", " 1", "1/19", "1/20", "3", " 18", "20", "24", "28", " 7", "9А", "33", "35", "37", "39", "40", "41Б", "42", "42/2", "42А", "42В", "43", "43А", "44", "45", "47", "49", "51", "53", "55", "55А", "57", "59", "61", "67", " 12", "14", "16", "22", " 9В", "9Г", "13", "13Б", "15", "17", "19", "21", "23", "25", "27", "29", "31", "31А", " 26", "30", "32", "34", "36", "36А", "38", " 5", "9", "11", "12", "12А", " 8/1", "8А", "8Б", "8В", "10/1", "10/2", "10/3", "10/4", "10/5", "10/6", "12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7", "12/8", "12/9", "12/10", "12А", "12А/1", "12А/2", "12А/3", "12А/4"]
    }, {
      name: "просп. Голосіївський",
      number: ["13", "15", "15А", "15Б", "23", "25", "27", "59А", "59Б", " 3", "5", "6", "8", " 17", "17А", "17В", "19", "21", "46/1", "46А", "48", "58", "60", "62", " 7", "9", "11", "26", "30", "30А", "30Б", "30В", "36", " 82", "86", "87", "88", "90", "92", " 84", "87", "87Є", "94/1", "94/2", "94/96", "96", "98/2", " 38", "70", "70/2", "74", "74А", " 87Г", " 108корп2", "108корп3", "108/1", "108/4", "108/1Б", "110", "110/1", "110/2", "110А", "112", "114", "114А", "114корп2", "116", "116А", "116/1", "116/2", " 100/2", "100/2А", "102", "104", "106", "106/1", "106/4", " 89", "91", "93", "93/1", "93/2", "95", "95А", "95/1", "95/3", "97", "97А", "99", "101", "103", "105", "105Б", "105В", "105В/2", " 118", "118корп2", "118А", "118Б", "118Б/1", "118Б/2", "118В", "120", "120корп2", "120корп3", "120В", "122", "122корп2", "122корп3", "124", "124А", "126корп1", "126корп2", "126корп3", "126корп4", "128", "128/1", "128/2", "130/57", "132"]
    }, {
      name: "просп. Гонгадзе Георгія",
      number: ["6", "10", "12", "14", "18", "18А", "18Б", "18Г", "18Д", "18з", "18Ж", "18Е", " 1/102", "3", "3А", "5", "5Б", "7", "7Б", " 2/1", "3Б", "4", "5А", "7А", "7Б", "9", "9А", "11", "11А", " 20", "20Б", "22", "22А", "24", "24Б", "26", "26А", " 20А", "20В", "20Г", "20Д", "20И", "20К", "32Б", " 20Ж", "20з", "21А", "28", "28А", "30", "32", "32А", "32Б", "32В", "32Г", "32Ж", "32з"]
    }, {
      name: "просп. Григоренка Петра",
      number: ["3А", "3А/1", "3А/2", "3А/3", "3А/5", "3Б", "3В", "3В/1", "5", "5А", "5А/5", "7А", "7Б", "7В", "9", "9/1", "11А", "13", "13/1", "13Б", "15", "15/1", "15/2", "15/3", "15/4", " 12", "12А", "14", "14/1", "14/2", "14/3", "16", "18", "18/1", "18А", "18Г", "18Д", "20", "20/1", "20А", "20Б", "22/20", "22/20А", " 24", "24В", "26", "26А", "28", "28А", "28Б", "28В", "30/2", " 15/27", "19", "19/1", "19А", "19Б", "21", "21А", "21Б", "21В", "21-В/1", "23", "23А", "25", "25А", "25Б", "25В", "25Г", "27", "27Б", "29", "31", "31/1", "31А", "31Б", "33/44", " 1", "1/2", "1/7", "1А", "1Б", "3А/4", "3Б/1", " 32Д", " 36", "36А", "38", "38А", "40", " 39", "39А", "39Б", "39В", "41", "43"]
    }, {
      name: "просп. Комарова космонавта",
      number: ["1", " 9", "9А", "17", "17А", "19", "42", "44", "46Б", "46В", " 30/28", "30/28А", "38А", "40", "40А", " 2", "4", "4А", "6", "8", " 10", "10А", "12", "14", "14А", "16", " 20", "22", "24", "28", " 3", "3А", " 7"]
    }, {
      name: "просп. Корольова Академіка",
      number: ["12А", "12Б", "12Г", "12Д", "18", "24", "24А", " 6", "8", "8А", "10", "10А", "12", "12і", "12М", "12Ж", "14", " 2/12", "4", " 2А", "2Б", "2В", " 7", "11", "13", " 12Л"]
    }, {
      name: "просп. Курбаса Леся",
      number: ["6Г", "8", " 1Б", " 2/13", "2Б", "2К", "4", "5", "5В", " 1", "1А", "2", "3", "3А", "3Б", "3В", "3Г", " 5Б", " 12", "12А", " 14А", "18", "18А", "18Б", "18В", "18Г", " 10Б", "12В", " 10", "10А", "10В", "10Г", "10Д", "10Е", "10Ж", "12Б", " 7", "7А", "7Г", "9", "9А", "9Е", " 7Б", "7Г", "9Б", "9В", "9Г", "9Д", " 15", "17", "19", "19/11", " 9Ж", "13", "13А"]
    }, {
      name: "просп. Лісовий",
      number: ["31", "31/1", "31А", "32", "32/1", "32/2", "33", "33А", "33А/1", "33Б", "35", "39", "39/1", "39/2", "39/3", "39/4", "39/5", "39А", "39Д", "41", "41А", "43", "43А", " 16", "18", "18А", "20", "22", "22А", "24", "24/1", "24А", "26", "28", " 23", "23А", "23А/1", "23Б", "25", "25/1", "25/2", "25/3", "25/4", "25/5", "25/6", "25/7", "25/8", "25/9", "25/10", "25/11", "25/12", "25/13", "25/14", "25/15", "25/16", "25/17", "25/18", "25/19", "25/20", "25/21", "27", "29", " 3", "5", "7", "9", "9А", "11", "11/1", "11/2", "11/3", "13", "13А", "15", "15А", "17", "17А", "17Б", "17В", "17Г", "19", "19А", "21", "21/1", "21/2", " 4", "6", "6/1", "6/2", "6А", "6Б", "8", "10", "12", "12/1", "12А", "12Б", "14"]
    }, {
      name: "просп. Лобановського Валерія",
      number: ["2", "3", "3А", "4А", "4Б", "4В", "4Ж", "5", "5А", "7/2", "9/1", "15/7", "17", " 6", "6Б", "6В", "6Г", "6Д", "8", "8А", "8Б", "10", "12", "14", "18", "24", "26", "28", "30", "32", "34", "36", "40", "42", "44", "46", "48", "50", "52", "54", "56", " 31", "33", " 35", "37", " 119", "119А", "119Б", "119Д", "123", "152", "152А", "190", "196", " 73", "75", "77", "79", "81", "83", "85", "87", "91", "93", "95", "97", "99", " 39Б", " 59/1", "61/1", "61/1А", "62/2", "63/1", "63/2", "65/1", "67", "69/1", "69/2", "71/1", "71/2", " 28/2", "51", "53", "55", "57", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", " 39А", " 41", " 126", "126Г", "128", " 115", "115А", "117", "130", "138", "138А", "140", "144", "146", "146Б", "150", "150А", "150Б", " 82", "84/1", "84/2", "88", "90", "92", "94", "96", "98", "100", "102", "104", "106", "112", "114/1", "114/2", "114/3", " 132", "134А", "136", "136А"]
    }, {
      name: "просп. Маяковського Володимира",
      number: ["60", "60/1", "60/2", "60/3", "62", "62А", "62А/1", "62Г", "64А", "66А", " 68", "68А", "70", "72", "72/2", "72А", "72Б", "72Б/2", "72Б/3", "74/9", "87/11", "87/12", "87/13", "89", "89/1", "89/2", "89/3", "89А", "89Б", "89Б/1", "91А", "91А/1", "91А/2", "91Б", "91В", "91В/3", "93А", "93Б", "93В", "93Г", "93Е", "95А", "95Б", "97/1", "97/15", " 85", "85/1", "85/2", "85/4", " 16", "16/12", "16А", "18", "18А", "18Б", " 8", "8А", "8Б", "8В", "8Г", "10", "10А", "12", "12А", "12Б", "12В", "14", "14/13", "14А", "14Г", " 2/1", "2А", "2Б", "2В", "4", "4А", "4Б", "4В", "4Г", "4Д", "6", " 35", "35А", "37", "37А", "39", "41/1", " 43", "43/2", "45", "47", "49", "49А", "49Б", "51А", "53", "55", "55А", "57", "59", "59А", "61", " 20", "20А", "20Б", "20В", "20Г", "22", "22А", "24", "24А", "24Б", "24В", "26", "26А", "26Б", "26Д", "28", "28/10", "28А", "28Б", "28В", "30", "30А", " 32", "32А", "32Б", "32В", "32Г", "32Д", "34", "34А", "36/7", " 1", "1/9", "1А", "1Б", "1В", "3", "3А", "3Б", "3В", "3Г", "5", "5А", "5Б", "5В", "7", "7А", "7Б", "7В", " 15", "15А", "15Б", "15В", "17", "17А", "17Б", "17В", "17Г", "17Д", "19", "21В", "21Г", " 21", "21А", "21Б", "23", "25", "25А", "29", "31", " 5В", "11", "11А", "11А/2", "11Б", " 44/10", "44А", "44А/1", "44А/4", "44Б", "44Б/1", "46", "46А", "48/9", " 69", "69А", "71", "73", "73/1", "73/2", "73/3", "73/5", "73/6", "73/7", "73/10", "73/11", "73/13", "73А", "73Б", "73В", "75", "75/1", "75/2", "75А", "75/2А", "75/2Б", "75/2В", "75/2Г", "75/2Д", "75/2Ж", "75/2К", "75/2Л", "75/2М", "75/2Н", "75/2П", "75/2С", "75/4А", "77", "77/1", "77/2", "77/3", "77/5", "77/6", "77/14", "79", "79/1", "79А", "81", "81/11", "81А", "81Б", " 38/10", "38/10А", "38/10Б", "38А", "38Б", "40", "42/13", " 50", "52", "52/1", "52А", "54/1", "54/9", "56А", " 63/12", "63/15", "63/12А", "63/12Б", "63/12В", "63/12Г", "63/12Д", "63/12Е", "63/12Ж", "63/13З", "63А", "65", "67"]
    }, {
      name: "просп. Миру",
      number: ["8", "10", "10А", "12", "14", "16", " 2", "2/3", "2/3А", "4", "4А", "6", "6А", " 1", "3", "5", "5А", "7", "9", "9А", "9Б", " 13", "13/13", "13А", "13Б", "13В", "15", "15А", "17", "17А", "19", "19/18", "21"]
    }, {
      name: "просп. Мінський",
      number: ["6", "6А", "6Б", "6В", "8", "8А", "8Б", "8В", "10", "10А", "10Б", "10В", "12", "20А", "20Б", "24Б", "30", " 1", "1Б", "2", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9", "2/10", "2/11", "2/12", "2/13", "2/14", "2А", "3/2", "4", "4А", "4Б", "4В", "4/1", "4/2", "4/3", "4/4"]
    }, {
      name: "просп. Навої Алішера",
      number: ["1", "1А", "2", "3", "24", "24Б", " 57", "59", "61", "63", "65", "67", "69", "76", "76А", "78", "78А", "80", "82", "84", "86", "88", "90"]
    }, {
      name: "просп. Науки",
      number: ["27", "29", "29А", " 24", "43", "45", "47", " 31", "33", "35", "35/2", "35/3", "35/4", "37", "39", "39/2", "41", "41А", "43", " 2", "9", "22", "42/1", "44", "46", " 6/18", "11", "11А", "13", "15", "17/15", "21", " 23", "25", " 24/2", "26", "28/1", "28/2", "40", " 34", " 4", "4/2", " 1", "1корпус1", "3", "5", "6", "8", " 10", "16", "16А", "18", "20", " 65", "86", "86/2", "88", "88А", "90", "143", "145", "147", "149", "151", "151А", "153", " 94/5", "96", "98", "100", "102", " 63", "69", "82", "82А", "84", "84А", "84Б", "84Г", " 49", "50", "52", "54", "54Б", "58", "58/1", "58/2", "62", "62А", "64", "66", "70", "70/1", "72", "74", "74/2", "76", "78"]
    }, {
      name: "просп. Оболонський",
      number: ["10", "10А", "10Б", "10В", "12", "12А", "12Б", "12В", "14", "14/1", "14/2", "14/3", "14/4", "14/5", "14/6", "14А", "14Б", "14В", "14Г", "14Д", "14Е", "14Ж", "16", "16/1", "16/2", "16А", "16Б", "16В", "16Г", "16Д", "16Д/1", "16Е", "18", "18А", "18Б", "18В", "18Г", "20", "20/1", "20/2", "20А", "22", "22А", "22А/1", "22Б", "22В", "22В/1", "22В/2", "24", " 1", "1корп1", "1корп2", "1А", "1Б", "1Б/1", "1Б/2", "2А", "2Б", "5", "5/1", "5/2", "5/3", "5/4", "5/5", "5/6", "5/7", "5А", "5А/1", "5А/2", "5А/3", "5А/4", "5А/5", "5А/6", "5А/7", "5А/8", "7", "7/1", "7/2", "7А", "7Б", "7Б/1", "7В", "7Г", "7Д", "7Е", "9", "9А", "9А/1", "9Б", "11", "11А", "13", "13/1", "13/2", " 26", "26/1", "26/2", "26/3", "26А", "28", "28/1", "28/2", "28/3", "28/4", "28А", "28А/1", "28Б", "28Б/1", "28В", "28В/1", "28В/2", "28Г", "30", "30/1", "30А", "32", "32А", "32Б", "32Б/1", " 21", "21/1", "21/2", "21/3", "21Б", "23", "23А", "23А/1", "23А/2", "23Б", "25", "25/1", "27", "27А", "27А/1", "27Б", "27В", "29Б", "31", "31/1", "33", "33А", "35", " 15", "15А", "15А/1", "15Б", "15В", " 37", "37А", "37Б", "37В", "37В/1", "39", "39А", "39Б", "39В", "41", "43", "43/1", "43/2", "45/28А", " 49", "49/1", "49/2", "49А", "49Б", "51", "51А", "51Б", " 34", "34/1", "34А", "34Б", "34Б/1", "34В", "34Г", "34Д", "36", "36/1", "36/2", "36/3", "36А", "36Б", "36Б/1", "38", "38/1", "38А", "40", "40/1", "40А", " 52", "52/1", "52/2", "52А", "52А/1", "52Б", "52В", "52Г", "54"]
    }, {
      name: "просп. Палладіна Академіка",
      number: ["18/30", " 20", "22", "24", " 32", "32/34", "32Б", "34", "34А", "36Б", "38А", "44", "44А", "46", "46/2", " 15", "21", "23", "25", "25А", "31", "33", " 7", " 7/60", "9", "11", "13"]
    }, {
      name: "просп. Перемоги",
      number: ["11", "11А", "16", "18", " 2", "4", "6", "8", " 1", "3", "3А", "5", "5А", "5Б", "5В", "7", "7Б", "7А", "9", "9/47", "9А", "10", "10/2", "10Б", "12", "14", " 50", " 21", "23", "25", "27", " 15", "17", "19", " 29", "31", "35", " 37", "37/1", " 43А", "43Б", "44", "45", "46", "47", "48", " 39", "41", "42", "43", " 34", "38", "40", "40А", "40Б", "49/2", "49/2Л", "51/2", "52/2", "54/1", "56", " 54", "54А", "58", "60", " 75/2", " 67", "67А", "67Б", "67В", "67Г", "69/1", "71/2", "71А", " 73/1", "88/2", "90/1", "92/2", " 77/1", "77А", "79", "81", "83", "96", "98/2", "100/1", "100А", " 65", " 51", "53", "53А", " 55А", "57", "59", "61/2", "63", "63Б", " 68А", "68/1", "70", "72", "74", "76", "78", " 80/57", "82", "82А", " 62А", "62Б", "62/1", "64", "66", " 109", "109А", " 116А", "126", "128/2", " 89А", "89Б", " 102", "104", "104А", "106/2", "106А", "108/1", "112", "114/2", "116/1", "118", "120", "122", "122А", "124", " 87", "91", "93", "93А", "93Б", "95", "97", "99/1", "101/2", "103", "103А", "105", "107", "107А", " 113", "115", "117", "119/121", "121А", "121Б", "121Д", "121С", "130/1", "132/1", "132/2", "132/3", "132/4", "134А", "136", "138", " 142", "144", "144А", "146/2", " 148/1", "172Г", " 123", "125", "127", "129", "131", "133", "135", "153Н", " 84", "84А", "84Б", " 20", " 28/1", "30", "30А", "32", " 22", "24", "26", "26А"]
    }, {
      name: "просп. Повітрофлотський",
      number: ["41", " 75", " 31", "33", "33/2", "35", "35А", "37", "37А", "39/1", " 20", "20/1", "21/2", "22", "23", "25", " 15", "17", "19", " 8", "10", "12", " 28", " 1", "3", "5", "7", "11/15", " 14/17", "16", "16А", "18/2", " 28", " 47", "49", "51", "53", "55", "74", "76", "76А", "77", "78", "84", " 64", "66", "66А", "94", "94А", " 43", "45", "50/2", "52", "54", "54А", "56", "58", "62", " 6", " 34", " 36", "38", "40", "42", "44", "46", "48/2"]
    }, {
      name: "просп. Правди",
      number: ["1", "3", "3А", "5", "5Б", "5В", " 31", "31А", "33", "35", " 9", "9А", "9Б", "9В", "17", "17А", "17Б", "19А", "19/3", " 31А", " 35А", " 8А", "10А", " 37", "37А", "37Б", "39", "62", "62Б", "64", "64А", "64Б", "64В", "64Г", " 6", "6А", "8", "10", "12В", " 62А", " 4", "4А", " 41", "41Г", "41Д", "41Є", "41К", "45", "45А", "45Б", "70", "72", "74", "76", "78", "80А", "85", "85А", " 80", " 80Б", "80В", "82", "88", "88А", "88В", "90", "92", "100", " 84", "88Б", " 94", "104", "106", "108", "110", " 96", "96А", "98", " 66", "66А", "68", "68А", "68Б", "68В", "70", "70А", "70Б"]
    }, {
      name: "просп. Рокосовського маршала",
      number: ["2", "2А", "2Б", "2/1", "2/2", "2/3", "3", "3А", "3Б", "3Б/1", "3В", "3/4", " 4", "4А", "5", "6", "6А", "6Б", "7", "7А", "8", "8А", "8Б", "8В", "8А/1", "8/1", "10", "10А", "10/1"]
    }, {
      name: "просп. Свободи",
      number: ["1А", "1/60", "1/60А", "3", "3Б", "5", " 2", "2А", "4А", "6", "6А", " 2В", "4", " 8/28", "10", "14", "16", " 17Б", "30А", " 38", "44", "46", " 15/1", "26", " 22", "24", "28", "34", "40", "42", " 24А", "24Б", "28А", "30Б", "32", " 17", " 28Б", "30"]
    }, {
      name: "просп. Соборності",
      number: ["18", "18А", "20", "20/2", "22/1", "24", "26/2", " 2/1", "2/1А", "4", "6", "8", "8/2", "10", "10/1", "10А", "12", "12В", "14", "16", "16А", "16В", " 21", "30", "30А", " 1", "1А", "1Б", "1В", "3", "3Б", "5А", "7А", "17", "17А", "17Б", "17В", " 3А", "7Б", " 5", "5Б", "7", "9", "11", "13", "13А", "15", "15/17", "19"]
    }, {
      name: "просп. Степана Бандери",
      number: ["10", "10Б", "14", "14Б", "16", "16А", "16Б", "16В", "19", "20", "20А", "20Б", "20В", "21", "22", "22А", "23", "24", "24А", "24Б", "24В", "24Г", "24Д", "26", "26А", "26В", "28", "28А", "28А(корпусБ)", "28А (корпусВ)", "28А(корпусГ)", "30", "32", "34", "34А", "34Б", "34В", "36", " 5", "6", "7", "8", "8/16А", "9", "9А", "9Б", "9Е", "11", "11А", "12", "12А", "13", "13А", "13В", "15", "15А", "17", "17/1", "18", "21А", "21Б", " 6", "6А", "6Б", "6В", "6Г", "6Д", "8", "8/1", "8/2", "8/3", "8/4", "10", "10А", "10Б", "11А", "12А", "13", "13А", "13Б", "13В", "14", "14А", "14Б", "15", "15А", "15А/1", "15А/2", "15Б", "15В", "15Г", "16", "16А", "16Б", "16В", "16Г", "16Д", "17", "17/1", "17/2", "18", "19", "19А", "19Б", "20", "20А", "20Б", "21", "21/1", "21/2", "21/3", "21А", "21А/1", "21А/2А", "21Б", "21В", "22", "22А", "22Б", "22В", "22Г", "22Д", "23", "23А", " 23А/1", "23А/2", "23А/3", "23Б", "23В", "23В/1", "23В/2", "24", "24А", "24Б", "24В", "24Г", "24Д", "25", "25/1", "25/2", "25А", "26", "26А", "26Б", "26В", "28", "28А", "28Б", "30", "30/1", "30/2", "32", "32/1", "32/2", "32А", "34А", "34Б", "34В", "36", "36А", "36Б", "36В", "38", "40", "42", "44", "44/1"]
    }, {
      name: "просп. Тичини Павла",
      number: ["2", "2А", "2В", "4", "8", "10", "12", "12А", "12Б", "12В", "14А", "14Б", "14В", " 6", "6А", "16/2", "18", "18А", "18Б", " 1", "1В", "3", "3А", "3Б", "5", "5/1", "5А", "7", "7А", "9", "9А", "9Б", " 11", "11А", "13", "15", "15А", "17", "17В", " 19", "21", " 20", "20А", "20Г", "22", "22А", "22Д", "24", "24А", "24Б", "24Д", "26", "26А", "26Б", "26Г", "28", "28А", "28Б", "28Г"]
    }, {
      name: "тупік Тверський",
      number: ["6/8", "7", "9", "10", " 5", "5А"]
    }, {
      name: "узвіз Андріївський",
      number: ["1А", "2Б", "2В", "2Г", "2Д", "3", "5/31", "8", "10", "11", "12", "13", "13В", "14", "15", "16", "20", "20Б", "21", "22", "23", "24", "26", "28", "28А", "28Б", "30", "30А", "32", "34", "34Б", "34В", "36", "38"]
    }, {
      name: "узвіз Богуславський",
      number: ["3", "5"]
    }, {
      name: "узвіз Боричів",
      number: ["10", "13", " 5А", "8"]
    }, {
      name: "узвіз Вознесенський",
      number: ["3/5", "10А", "14", "16", "18", "18А", "20", "20А", "21", "22", "23Б", " 10Б"]
    }, {
      name: "узвіз Володимирський",
      number: ["2", "2Б", "2В", "4"]
    }, {
      name: "узвіз Врубелівський",
      number: ["1"]
    }, {
      name: "узвіз Дніпровський",
      number: ["1"]
    }, {
      name: "узвіз Кловський",
      number: ["3", "4", "4А", "5", " 6", "7", "8", "9/1", "9/2", "10", "12", "12А", "14/24", "14А", "14Б", " 1", "3", "5", " 1", "7А", "11", "13", "13А", "15", "17", "18", "20", "24"]
    }, {
      name: "узвіз Крутий",
      number: ["3", "4", "5", " 7"]
    }, {
      name: "узвіз Кудрявський",
      number: ["2", "3А", "4", "4А", "5", "5Б", "7"]
    }, {
      name: "узвіз Печерський",
      number: ["13А", "15", "17", "18", "19", " 11", "13", " 2/12", "6", "8", "10", " 3", "5"]
    }, {
      name: "узвіз Смородинський",
      number: ["17А", "19", "23"]
    }, {
      name: "узвіз Фрометівський",
      number: ["2", "3А", "4", "4А", "5", "6", "9", "10", "11", "12", "14", "20", "24"]
    }, {
      name: "хутір Микільський",
      number: ["2", "4", "6", "8", "10", "12"]
    }, {
      name: "шосе Бориспільське 18 км",
      number: ["1А", "1/2"]
    }, {
      name: "шосе Брест-Литовське",
      number: ["4", "6", "7Б", "8", "8А", "13А", "13Б", "13В", "15/1", "15/2"]
    }, {
      name: "шосе Дніпровське",
      number: ["б/н"]
    }, {
      name: "шосе Залізничне",
      number: ["25", " 1А", "2", "2А", "3", "4", "4А", "4Б", "5А", "5Б", "5В", "6", "9", "10", "12", "13", "21", "39", "41", "45", "45А", "47", "49", "53", "57"]
    }, {
      name: "шосе Набережне",
      number: ["2", "4", "6", "14", "25", "28"]
    }, {
      name: "шосе Столичне",
      number: ["100", "101В", "101Д", "101Д/1", "103", "103А", " 98", " 90", "90А", "98А", "98В", " 5", "7", "7/2", "9", "15/2", "16", "17", "17А", "17Б", "18", "18А", "19", "20", "22", "25", "25/1", "26", "26А", "27", "27А", "28", "28А", "28Б", "29", "30", "30А", "31", "32", "34", "34А", "36", "38", "40", "42", "42А", "44", "44А", "48", "48А", "52", "54", "104А", " 125Д", "215", "275", "27КМ", "28КМ", " 35", "35А", "58", "58Б", "58Г", "58Д"]
    }, {
      name: "шосе Стратегічне",
      number: ["22", "48", "48А", "50", "54", "104", " 12", "14", "16", "18", "20", "21", "21А", "22", "22А", "24", "26/15", "32/1", "32/2", "34", "35", "35А", "36", "37", "37А", "38", "38А", "39", "39А", "40", "41", "42", "44", "44А", "46/1", "46/2", "46/3", "46А", " 17", " 3", "5", "7", "11", "15", " 2А", "4", "4/27"]
    }, {
      name: "шосе Харківське",
      number: ["7", "9", "11", "11А", "11/1", "13", "13А", "15", "17", "17А", "19", " 1", "3", "5", "5/1", "5/2", "71А", " 166В", "168", "170", "170А", "170Б", "172", "172/1", "172/3", "172/4", "172/5", "172/6", "172А", "172А/1", "172Б", "172Б/1", "174Б", "174Б/2", "174Б/3", "174Б/4", " 168Г", "168Д", "168Е/1", "168И/1", " 57", "57/1", "59", "61", "61/1", "61А", "61Б", "63", "63А", "65", "65/2", "65/3", "152", "152/1", "152/2", "152/5", "152/6", "152/8", "152корп1", "152корп2", "154", "154А", "156", "156/1", "158", "158/1", "158/6", "158/10", "1584", "158Б", "158К", "158К/1", "158К/2", "160/14", " 121", "121/1", "121/3", "121/3А", "121/3Б", "121корп1", "121А", "121А/1", "121А/2", "123", "123А", "125", "158/2", "158/3", "158/4", "158/5", "158/7", "158/9", "160", "160/1", "160/2", "160/3", "160/4", "160/5", "160/6", "160/8", "160/10", "160/12", "160/13", "160/1А", "160А", "160А/1", "164", "166", "166А", "166Б", "168А", "168Б", "168Е", "168Ж", "168И", "168К", "168К/1", "168К/2", " 21", "21/1", "21/3", "21/4", "21/5", "21/6", "21А", " 127/18", "129", "131", "133/1", "135/2", "137/1", "139/2", "141/21", "143/22", "145", "147", "149/2", "151", "153/2", "157/1", "157/24", "159", "159/1", "174", "174А", "174К", "174/1", "176Б", "176В", "176Г", "178", "178А", "178/1", "180/21", "180/21А", "180/21Б", "180/21В", " 179", "179/1", "179А", "201/203", "203/201", "210", "210корп1", "210А", "210А/1", " 161/1", "163", "163/1", "163/2", "165", "167", "169/25", "169/25А", "169/25Б", "171", "171/3", "171/12А", "171/18", "175", "177/1", "177/2", " 182", "188", "190", "211", "242/10", "244", "244/1", " 2", "2/1", " 4", "6", "8", "8/1", " 12", "14/1", "16", "16/1", "18", "18/1", "46", "50", " 2А", "2Б", "4/1", " 16/1", "48", " 49", "51", "51/1", "51А", "51Б", "53", "53А", "55", "55/1", "55А", "55Б", "67А", " 62/1", "62/3", "62/4", "144А", "144А/1", "144А/2", "144А/3", "144А/4", "144А/5", "144Б", "144В", "144В/1", "144Г", "146", "146В/2", "148", "148/1", "148/2", "148/3", "148А", "150/15", " 56", "58", "58А", "58Б", "60", "62", "62А", "68"]
    }];
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      /*	footer = '';
          x = window.matchMedia("(max-width: 768px)");
          y = window.matchMedia("(max-width: 320px)");
      */
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /* 	this.myFunctionX(this.x);
             this.x.addListener(this.myFunctionX);
          
             this.myFunctionY(this.y);
             this.y.addListener(this.myFunctionY);
           */
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 57,
      vars: 0,
      consts: [["preserveAspectRatio", "none", "width", "100%", "height", "100%", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 841.89 190.24", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 841.89 190.24"], ["type", "text/css"], ["d", "M13.13,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28H13.57v80.56h-0.44V19.88z", 1, "st0"], ["d", "M58.63,19.88h0.72l6.63,149.33h0.04l6.63-149.33h0.72v154.97h-0.44V25.31H72.9l-6.65,149.54h-0.48L59.12,25.31\n\th-0.04v149.54h-0.44V19.88z", 1, "st0"], ["d", "M76.85,19.88h0.44v154.97h-0.44V19.88z", 1, "st0"], ["d", "M80.76,19.88h6.34c1.51,0,2.68,3.56,3.51,10.65c0.83,7.09,1.25,17.65,1.25,31.69c0,6.8-0.13,12.83-0.37,18.11\n\tc-0.25,5.28-0.59,9.7-1.03,13.25c-0.44,3.55-0.97,6.21-1.58,8.02c-0.61,1.81-1.28,2.73-2,2.73H81.2v70.53h-0.44V19.88z M87.1,103.61\n\tc0.61,0,2.48-3.13,3.08-13.51c0.19-3.28,0.69-7.2,0.91-11.83c0.22-4.63,0.33-9.99,0.33-16.06c0-12.31-0.36-21.71-1.06-28.22\n\tc-0.71-6.51-1.8-13.41-3.26-13.41h-5.9v83.03H87.1z", 1, "st0"], ["d", "M109.77,19.88h10.4v0.54h-9.96v73.39h9.37v0.42h-9.37v80.13h10.05v0.5h-10.49V19.88z", 1, "st0"], ["d", "M533.11,19.88h10.4v0.54h-9.96v73.39h9.37v0.42h-9.37v80.13h10.05v0.5h-10.49V19.88z", 1, "st0"], ["d", "M143.99,19.88h11.72v154.97h-0.44V20.42h-10.84v154.43h-0.44V19.88z", 1, "st0"], ["d", "M181.76,87.16l-6.67-67.29h0.61l9.29,94.2v-94.2h0.44v94.2l9.28-94.2h0.61l-6.67,67.29l7.53,87.68h-0.59\n\tl-7.24-84.65l-2.92,29.73v54.92h-0.44v-54.92l-2.92-29.73l-7.24,84.65h-0.59L181.76,87.16z", 1, "st0"], ["d", "M198.22,19.88h0.44v151.28L209.4,19.88h0.68v154.97h-0.44V23.58L198.9,174.85h-0.68V19.88z", 1, "st0"], ["d", "M232.97,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L232.97,20.01z M237.17,123.4\n\tl-3.89-99.04h-0.04l-4.03,99.04H237.17z", 1, "st0"], ["d", "M325.32,19.88h0.44v94.2l10.87-94.2h0.66l-7.57,65.98l8.01,88.99h-0.59l-7.78-86.37l-3.6,31.46v54.92h-0.44\n\tV19.88z", 1, "st0"], ["d", "M355.92,19.88h9.2v0.54h-8.76v154.43h-0.44V19.88z", 1, "st0"], ["d", "M380.61,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.21,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.49\n\tc0,21.41-0.03,45.15-0.08,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC382.24,172.02,381.53,174.85,380.61,174.85z", 1, "st0"], ["d", "M309.53,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.21,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.49\n\tc0,21.41-0.03,45.15-0.08,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC311.16,172.02,310.45,174.85,309.53,174.85z", 1, "st0"], ["d", "M213.39,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M220.13,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H220.13z M220.06,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H220.06z", 1, "st0"], ["d", "M345.73,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC352.1,135.38,349.87,175.65,345.73,175.65z M345.73,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C351.5,51.79,348.46,19.94,345.73,19.94z", 1, "st1"], ["d", "M371.48,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15s6.37,40.27,6.37,78.15\n\tC377.85,135.38,375.62,175.65,371.48,175.65z M371.48,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\ts5.77-31.85,5.77-77.55C377.25,51.79,374.21,19.94,371.48,19.94z", 1, "st1"], ["points", "403.5,93.95 398.22,93.95 398.22,19.88 397.79,19.88 397.79,174.85 398.22,174.85 398.22,94.36 \n\t\t403.5,94.36 \t", 1, "st1"], ["d", "M409.87,19.34c-4.14,0-6.37,40.27-6.37,78.15c0,37.89,2.23,78.15,6.37,78.15s6.37-40.27,6.37-78.15\n\t\tC416.24,59.61,414.01,19.34,409.87,19.34z M409.87,175.05c-2.73,0-5.77-31.85-5.77-77.55c0-45.7,3.04-77.55,5.77-77.55\n\t\ts5.77,31.85,5.77,77.55C415.64,143.2,412.6,175.05,409.87,175.05z", 1, "st1"], ["d", "M165.97,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC172.34,135.38,170.11,175.65,165.97,175.65z M165.97,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C171.74,51.79,168.7,19.94,165.97,19.94z", 1, "st1"], ["d", "M140.46,114.02c-0.62,36.68-3.25,61.03-5.63,61.03c-2.73,0-5.77-31.85-5.77-77.55c0-45.7,3.04-77.55,5.77-77.55\n\tc2.05,0,4.28,18.03,5.26,46.41h0.6c-0.88-25.97-2.87-47.01-5.86-47.01c-4.14,0-6.37,40.27-6.37,78.15c0,37.89,2.23,78.15,6.37,78.15\n\tc3.54,0,5.68-29.42,6.23-61.63H140.46z", 1, "st1"], ["d", "M33.37,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L33.37,20.01z M37.57,123.4\n\tl-3.89-99.04h-0.04L29.6,123.4H37.57z", 1, "st0"], ["d", "M300.08,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L300.08,20.01z M304.28,123.4\n\tl-3.89-99.04h-0.04l-4.03,99.04H304.28z", 1, "st0"], ["d", "M426.85,19.53h0.44v154.3h9V19.53h0.44v154.3h9V19.53h0.44v154.96h-19.32V19.53z", 1, "st0"], ["d", "M450.21,19.53h0.44v94.2l10.87-94.2h0.66l-7.57,65.98l8.01,88.99h-0.6l-7.77-86.39l-3.6,31.49v54.9h-0.44V19.53\n\tz", 1, "st0"], ["d", "M464.89,19.53h0.44v154.96h-0.44V19.53z", 1, "st0"], ["d", "M502.75,19.53h0.44V170.8l10.73-151.28h0.68v154.96h-0.44V23.21l-10.74,151.28h-0.68V19.53z", 1, "st0"], ["d", "M552.76,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79H553.2v3.79h-0.44V170.16\n\tz M565.49,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H565.49z", 1, "st0"], ["d", "M613.07,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M619.81,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H619.81z M619.74,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H619.74z", 1, "st0"], ["d", "M642.59,19.53h0.44v154.4h9V19.53h0.44v154.4h9V19.53h0.44v154.96h-19.31V19.53z", 1, "st0"], ["d", "M683.43,19.53h9.2v0.53h-8.76v154.43h-0.44V19.53z", 1, "st0"], ["d", "M722.58,177.97c-0.91,0-1.72-1.24-2.44-3.7c-0.72-2.45-1.33-6.07-1.82-10.85c-0.5-4.77-0.88-10.56-1.15-17.36\n\tc-0.27-6.8-0.4-14.53-0.4-23.22h0.44v0.65c0,15.77,0.46,28.08,1.39,36.9c0.93,8.83,2.26,16.66,3.99,16.66\n\tc0.76,0,1.14-1.08,1.78-3.25c0.64-2.16,1.5-8.63,1.95-12.54c0.45-3.91,0.81-8.58,1.06-14.01c0.25-5.42,0.37-11.39,0.37-17.9\n\tc0-10.43-0.38-18.77-1.13-25.07c-0.76-6.3-1.8-11.35-3.13-11.35h-2.2v-0.58h2.2c1.24,0,2.22-4.74,2.92-10.53\n\tc0.7-5.8,1.05-14.11,1.05-24.97c0-11.72-0.41-23.51-1.25-29.9c-0.83-6.36-1.98-9.55-3.45-9.55c-1.64,0-2.86,3.62-3.66,10.85\n\tc-0.81,7.24-1.28,20.64-1.43,34.66h-0.44c0.16-14.88,0.68-26.47,1.57-34.72c0.88-8.23,2.21-12.37,3.96-12.37\n\tc0.76,0,1.46,0.92,2.1,2.72c0.63,1.81,1.18,4.45,1.64,7.92c0.45,3.48,0.8,7.74,1.05,12.8c0.25,5.06,0.37,10.92,0.37,17.58\n\tc0,9.12-0.25,16.97-0.76,23.55c-0.5,6.58-1.31,10.61-2.42,12.05v0.44c0.48,0.29,0.93,1.37,1.35,3.25c0.42,1.89,0.78,4.45,1.1,7.71\n\tc0.31,3.25,0.56,7.04,0.74,11.39c0.18,4.35,0.28,9.05,0.28,14.11c0,7.37-0.14,14.04-0.42,19.97c-0.28,5.93-0.67,11.03-1.17,15.29\n\tc-0.51,4.28-1.1,7.57-1.79,9.88C724.13,176.81,723.38,177.97,722.58,177.97z", 1, "st0"], ["d", "M765.66,19.53h6.34c1.51,0,2.68,3.54,3.51,10.63c0.83,7.09,1.25,17.66,1.25,31.69c0,6.8-0.13,12.85-0.37,18.13\n\tc-0.25,5.28-0.59,9.69-1.03,13.23c-0.44,3.55-0.96,6.23-1.58,8.04c-0.61,1.81-1.28,2.7-2,2.7h-5.69v70.54h-0.44V19.53z M772.01,103\n\tc0.62,0,2.57-4.8,3.09-13.25c0.2-3.28,0.69-7.21,0.91-11.83c0.22-4.63,0.33-9.99,0.33-16.07c0-12.29-0.36-21.71-1.07-28.21\n\tc-0.71-6.51-1.79-13.41-3.26-13.41h-5.9V103H772.01z", 1, "st0"], ["d", "M813.38,45.14c0,3.9-0.02,7.1-0.04,9.55c-0.03,2.46-0.09,4.56-0.17,6.29c-0.08,1.74-0.18,3.15-0.31,4.23\n\tc-0.12,1.08-0.28,2.14-0.47,3.14v-4.33c0.22-1.44,0.37-3.59,0.44-6.4c0.07-2.82,0.11-6.98,0.11-12.49V19.53h0.43V45.14z", 1, "st0"], ["d", "M822.51,104.17c-0.7,0-1.35-0.91-1.94-2.71c-0.59-1.81-1.1-4.52-1.51-8.14c-0.42-3.62-0.75-8.04-0.98-13.24\n\tc-0.23-5.21-0.36-11.29-0.36-18.24c0-13.6,0.4-24.06,1.2-31.36c0.8-7.3,2-10.96,3.59-10.96h6.41v154.96h-0.45v-70.32h-5.39\n\tl-5.71,70.32h-0.55L822.51,104.17z M828.48,103.22v-83h-6.05c-1.42,0-2.48,6.94-3.18,13.52c-0.7,6.58-1.06,15.73-1.06,27.46\n\tc0,6.07,0.11,11.54,0.31,16.39c0.2,4.84,0.71,8.88,0.86,12.16c0.4,8.36,2.43,13.48,3.06,13.48H828.48z", 1, "st0"], ["d", "M797.81,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M804.55,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H804.55z M804.48,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H804.48z", 1, "st0"], ["d", "M633.22,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L633.22,20.01z M637.42,123.4\n\tl-3.89-99.04h-0.04l-4.03,99.04H637.42z", 1, "st0"], ["d", "M672.68,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC679.05,135.38,676.82,175.65,672.68,175.65z M672.68,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C678.45,51.79,675.41,19.94,672.68,19.94z", 1, "st1"], ["d", "M754.06,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC760.42,135.38,758.19,175.65,754.06,175.65z M754.06,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C759.83,51.79,756.79,19.94,754.06,19.94z", 1, "st1"], ["d", "M786.67,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC793.04,135.38,790.81,175.65,786.67,175.65z M786.67,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C792.44,51.79,789.4,19.94,786.67,19.94z", 1, "st1"], ["d", "M699.57,175.71c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC705.94,135.44,703.71,175.71,699.57,175.71z M699.57,20c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C705.34,51.85,702.3,20,699.57,20z", 1, "st1"], ["d", "M94.45,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28H94.89v80.56h-0.44V19.88z", 1, "st0"], ["d", "M241.77,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28h-10.98v80.56h-0.44V19.88z", 1, "st0"], ["d", "M257.09,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28h-10.98v80.56h-0.44V19.88z", 1, "st0"], ["d", "M518.49,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M525.23,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H525.23z M525.16,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H525.16z", 1, "st0"], ["d", "M592,104.17c-0.7,0-1.35-0.91-1.94-2.71c-0.59-1.81-1.1-4.52-1.51-8.14c-0.42-3.62-0.75-8.04-0.98-13.24\n\tc-0.23-5.21-0.36-11.29-0.36-18.24c0-13.6,0.4-24.06,1.2-31.36c0.8-7.3,2-10.96,3.59-10.96h6.41v154.96h-0.45v-70.32h-5.39\n\tl-5.71,70.32h-0.55L592,104.17z M597.97,103.22v-83h-6.05c-1.42,0-2.48,6.94-3.18,13.52c-0.7,6.58-1.06,15.73-1.06,27.46\n\tc0,6.07,0.11,11.54,0.31,16.39c0.2,4.84,0.71,8.88,0.86,12.16c0.4,8.36,2.43,13.48,3.06,13.48H597.97z", 1, "st0"], ["d", "M277.08,104.17c-0.7,0-1.35-0.91-1.94-2.71c-0.59-1.81-1.1-4.52-1.51-8.14c-0.42-3.62-0.75-8.04-0.98-13.24\n\tc-0.23-5.21-0.36-11.29-0.36-18.24c0-13.6,0.4-24.06,1.2-31.36c0.8-7.3,2-10.96,3.59-10.96h6.41v154.96h-0.45v-70.32h-5.39\n\tl-5.7,70.32h-0.55L277.08,104.17z M283.05,103.22v-83H277c-1.42,0-2.48,6.94-3.18,13.52c-0.7,6.58-1.06,15.73-1.06,27.46\n\tc0,6.07,0.11,11.54,0.31,16.39c0.2,4.84,0.71,8.88,0.86,12.16c0.4,8.36,2.43,13.48,3.06,13.48H283.05z", 1, "st0"], ["d", "M487,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.2,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.5\n\tc0,21.41-0.03,45.15-0.07,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC488.64,172.02,487.92,174.85,487,174.85z", 1, "st0"], ["d", "M570.58,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.21,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.5\n\tc0,21.41-0.03,45.15-0.07,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC572.22,172.02,571.5,174.85,570.58,174.85z", 1, "st0"], ["d", "M730.17,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79h-14.04v3.79h-0.44\n\tV170.16z M742.9,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H742.9z", 1, "st0"], ["d", "M41.71,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79H42.15v3.79h-0.44V170.16\n\tz M54.44,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H54.44z", 1, "st0"], ["d", "M468.18,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79h-14.05v3.79h-0.44\n\tV170.16z M480.91,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H480.91z", 1, "st0"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .st0 { stroke: #000000; stroke-width: 0.5; } .st1 { stroke: #000000; stroke-width: 0.5; stroke-miterlimit: 10; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polygon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\n  height: 15vh;\n  z-index: 100;\n  position: fixed;\n  background-color: #fff;\n  width: 100%;\n  bottom: 0;\n}\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmcvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNXZoO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn1cbmZvb3RlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fullprice/fullprice.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fullprice/fullprice.component.ts ***!
    \**************************************************/

  /*! exports provided: FullpriceComponent */

  /***/
  function srcAppFullpriceFullpriceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullpriceComponent", function () {
      return FullpriceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FullpriceComponent = /*#__PURE__*/function () {
      function FullpriceComponent(mainComponent) {
        _classCallCheck(this, FullpriceComponent);

        this.mainComponent = mainComponent;
        this.machine = './assets/img/fullprice/machine.png';
      }

      _createClass(FullpriceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FullpriceComponent;
    }();

    FullpriceComponent.ɵfac = function FullpriceComponent_Factory(t) {
      return new (t || FullpriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]));
    };

    FullpriceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullpriceComponent,
      selectors: [["app-fullprice"]],
      decls: 23,
      vars: 1,
      consts: [[1, "fullprice"], [1, "fullprice__title-wrap"], [1, "fullprice__title"], [1, "fullprice__price"], [1, "fullprice__machine"], ["alt", "machine", 3, "src"], [1, "fullprice__text-wrap"], [1, "fullprice__text"], ["href", "https://t.me/Home_Party_Bot", "target", "_blank", 1, "fullprice__link"], ["routerLink", "", 1, "fullprice__back-button"]],
      template: function FullpriceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0415\u041C\u0410\u0404 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0412 \u041D\u0410\u042F\u0412\u041D\u041E\u0421\u0422\u0406");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0426\u0406\u041D\u0410: 8 000 \u0413\u0420\u041D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0435\u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0431\u043E\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "@Home_Party_Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0434\u043E \u0442\u043E\u0433\u043E \u0436 \u0432\u0441\u044C\u043E\u0433\u043E \u0437\u0430 1 \u0433\u0440\u0438\u0432\u043D\u044E.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041D\u0410\u0417\u0410\u0414");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.machine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".fullprice[_ngcontent-%COMP%] {\n  display: flex;\n}\n.fullprice__title-wrap[_ngcontent-%COMP%] {\n  width: 58vw;\n  position: relative;\n}\n.fullprice__title[_ngcontent-%COMP%] {\n  margin-top: 30.47vh;\n  margin-left: 75px;\n  margin-bottom: 125px;\n  position: relative;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  letter-spacing: -2.5px;\n  font-size: 112.33px;\n  line-height: 100%;\n  color: #55f91b;\n  z-index: 1;\n}\n.fullprice__price[_ngcontent-%COMP%] {\n  margin-left: 75px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 47.29px;\n  color: #fff;\n  line-height: 100%;\n}\n.fullprice__machine[_ngcontent-%COMP%] {\n  top: 4.95vh;\n  right: 0;\n  position: absolute;\n  height: 70.76vh;\n  width: 20vw;\n}\n.fullprice__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  z-index: 0;\n}\n.fullprice__text-wrap[_ngcontent-%COMP%] {\n  width: 42vw;\n  position: relative;\n  text-align: center;\n}\n.fullprice__text[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 35.23vh;\n  margin-left: 100px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 51.95px;\n  color: #fff;\n  line-height: 100%;\n}\n.fullprice__link[_ngcontent-%COMP%] {\n  color: #55f91b;\n}\n.fullprice__back-button[_ngcontent-%COMP%] {\n  left: calc(50% - 4.58vw);\n  margin-top: 125px;\n  background-color: #55f91b;\n  color: #004a99;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 7px;\n  cursor: pointer;\n  font-size: 24.21px;\n  font-family: \"DIN Pro CondensedMedium\";\n  padding: 19px 77px;\n  margin-bottom: 25vh;\n}\n@media only screen and (min-width: 1681px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 7vw;\n    margin-bottom: 11.9vh;\n    margin-left: 4.46vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n    margin-left: 4.46vw;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    padding: 1vh 4.58vw;\n    margin-top: 8vh;\n    border-radius: 0.5vw;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 44.79%;\n  }\n}\n@media only screen and (max-width: 1600px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 21vh;\n    font-size: 92.33px;\n    margin-bottom: 12.5vh;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    padding: 2vh 4.58vw;\n    margin-top: 3vh;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 237px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n@media only screen and (max-width: 1366px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n    font-size: 92.33px;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 24vh;\n  }\n}\n@media only screen and (max-width: 1152px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 190px;\n    font-size: 78px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 17vh;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 6vh;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 33.61vh;\n    margin-bottom: 11.04vh;\n    font-size: 60px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n  }\n}\n@media only screen and (max-width: 854px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 27.61vh;\n    margin-left: 40px;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 67vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-left: 40px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 112px;\n  }\n}\n@media only screen and (max-width: 847px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 20vh;\n    margin-left: 40px;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 32%;\n  }\n  .fullprice__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 8vh;\n  }\n}\n@media only screen and (max-width: 835px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 155px;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 72.15px;\n    margin-bottom: 14.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 45.45px;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 53.4px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    position: absolute;\n    left: calc(30.73% + 4.58vw);\n    padding: 15px 77px;\n    margin-top: 2vh;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 58vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 42vw;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    text-align: left;\n    font-size: 3vw;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 70vh;\n    width: 32%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    position: absolute;\n    left: calc(30.73%);\n    padding: 8px 50px;\n    margin-top: 3vh;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 155px;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 72.15px;\n    margin-bottom: 14.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 45.45px;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 53.4px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(30.73% + 4.58vw);\n    padding: 15px 77px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 125px;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-bottom: 12.01vh;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 58vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 42vw;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    text-align: left;\n    font-size: 3vw;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 70vh;\n    width: 32%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    position: absolute;\n    left: calc(30.73%);\n    padding: 8px 50px;\n    font-size: 15px;\n    margin-top: 5vh;\n  }\n}\n@media only screen and (max-width: 732px) {\n  .fullprice[_ngcontent-%COMP%] {\n    height: 65vh;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 4vw;\n    margin-left: 3%;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(22%);\n    font-size: 15px;\n    padding: 5px 40px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 11vh;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 9vw;\n    margin-bottom: 15.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 7vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 7vw;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(30.73% + 4.58vw);\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 58vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 42vw;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    text-align: left;\n    font-size: 3vw;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 70vh;\n    width: 32%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-left: 2.27%;\n    font-size: 4vw;\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 5px 40px;\n    left: calc(22%);\n  }\n}\n@media only screen and (max-width: 480px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 11vh;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 9vw;\n    margin-bottom: 16.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 7vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 7vw;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(30.73% + 4.58vw);\n  }\n}\n@media only screen and (max-width: 384px) {\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 9px;\n    left: calc(30.73%);\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 36.93px;\n    margin-top: 114px;\n    margin-left: 41px;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 55px;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 23.27px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 27.33px;\n    line-height: 31.49px;\n    letter-spacing: -1px;\n    margin-left: 41px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVsbHByaWNlL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmcvc3JjXFxhcHBcXGZ1bGxwcmljZVxcZnVsbHByaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mdWxscHJpY2UvZnVsbHByaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtBQ0ZGO0FETUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRFFFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0F4QlU7RUF5QlYsVUFBQTtBQ05KO0FEVUU7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDVEo7QURXSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFVBQUE7QUNUTjtBRGFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1pKO0FEZUU7RUFDRSxjQXJFVTtBQ3dEZDtBRGdCRTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkEzRVU7RUE0RVYsY0EzRVM7RUE0RVQsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNkSjtBRGtCQTtFQUVJO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNoQko7RURtQkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDakJKO0VEb0JFO0lBQ0UsZ0JBQUE7RUNsQko7RURxQkU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7RUNuQko7QUFDRjtBRHVCQTtFQUVJO0lBQ0UsYUFBQTtFQ3RCSjtBQUNGO0FEMkJBO0VBRUk7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUMxQko7RUQ2QkU7SUFDRSxnQkFBQTtFQzNCSjtFRDhCRTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQzVCSjtBQUNGO0FEZ0NBO0VBRUk7SUFDRSxpQkFBQTtFQy9CSjtFRGtDRTtJQUNFLGlCQUFBO0VDaENKO0FBQ0Y7QURvQ0E7RUFFSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNuQ0o7QUFDRjtBRHVDQTtFQUVJO0lBQ0UsZ0JBQUE7RUN0Q0o7QUFDRjtBRDBDQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VDekNKO0VENENFO0lBQ0UsZUFBQTtFQzFDSjtFRDZDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzNDSjtBQUNGO0FEK0NBO0VBRUk7SUFDRSxnQkFBQTtFQzlDSjtFRGlERTtJQUNFLGVBQUE7RUMvQ0o7QUFDRjtBRG1EQTtFQUVJO0lBQ0UsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNsREo7RURxREU7SUFDRSxlQUFBO0VDbkRKO0VEc0RFO0lBQ0UsZUFBQTtFQ3BESjtFRHVERTtJQUNFLGdCQUFBO0VDckRKO0FBQ0Y7QUR5REE7RUFHSTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUN6REo7RUQ0REU7SUFDRSxZQUFBO0VDMURKO0VENkRFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDM0RKO0VEOERFO0lBQ0UsaUJBQUE7RUM1REo7QUFDRjtBRGdFQTtFQUdJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQ2hFSjtFRG1FRTtJQUNFLFVBQUE7RUNqRUo7RURtRUk7SUFDRSxjQUFBO0VDakVOO0VEcUVFO0lBQ0UsZUFBQTtFQ25FSjtBQUNGO0FEdUVBO0VBQ0U7SUFDRSxzQkFBQTtFQ3JFRjtFRHVFRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQ3JFSjtFRHdFRTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQ3RFSjtFRHlFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDdkVKO0VEMEVFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUN4RUo7RUQyRUU7SUFDRSxXQUFBO0VDekVKO0VENEVFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUMxRUo7RUQ2RUU7SUFDRSxrQkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDM0VKO0FBQ0Y7QUQrRUE7RUFDRTtJQUNFLG1CQUFBO0VDN0VGO0VEK0VFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUM3RUo7RURnRkU7SUFDRSxXQUFBO0VDOUVKO0VEaUZFO0lBQ0UsY0FBQTtFQy9FSjtFRGtGRTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDaEZKO0VEbUZFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNqRko7RURvRkU7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUNsRko7RURxRkU7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDbkZKO0FBQ0Y7QUR1RkE7RUFDRTtJQUNFLHNCQUFBO0VDckZGO0VEdUZFO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0VDckZKO0VEd0ZFO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VDdEZKO0VEeUZFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUN2Rko7RUQwRkU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ3hGSjtFRDJGRTtJQUNFLFdBQUE7RUN6Rko7RUQ0RkU7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQzFGSjtFRDZGRTtJQUNFLDJCQUFBO0lBQ0Esa0JBQUE7RUMzRko7QUFDRjtBRCtGQTtFQUVJO0lBQ0UsaUJBQUE7RUM5Rko7RURpR0U7SUFDRSxzQkFBQTtFQy9GSjtBQUNGO0FEbUdBO0VBQ0U7SUFDRSxtQkFBQTtFQ2pHRjtFRG1HRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VDakdKO0VEb0dFO0lBQ0UsV0FBQTtFQ2xHSjtFRHFHRTtJQUNFLGNBQUE7RUNuR0o7RURzR0U7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ3BHSjtFRHVHRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDckdKO0VEd0dFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDdEdKO0VEeUdFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUN2R0o7QUFDRjtBRDJHQTtFQUNFO0lBQ0UsWUFBQTtFQ3pHRjtFRDJHRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDekdKO0VENEdFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQzFHSjtBQUNGO0FEOEdBO0VBQ0U7SUFDRSxzQkFBQTtFQzVHRjtFRDhHRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQzVHSjtFRCtHRTtJQUNFLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0VDN0dKO0VEZ0hFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUM5R0o7RURpSEU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDL0dKO0VEa0hFO0lBQ0UsV0FBQTtFQ2hISjtFRG1IRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUNqSEo7RURvSEU7SUFDRSwyQkFBQTtJQUNBLGVBQUE7RUNsSEo7QUFDRjtBRHNIQTtFQUNFO0lBQ0UsbUJBQUE7RUNwSEY7RURzSEU7SUFDRSxpQkFBQTtFQ3BISjtFRHVIRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VDckhKO0VEd0hFO0lBQ0UsV0FBQTtFQ3RISjtFRHlIRTtJQUNFLGNBQUE7RUN2SEo7RUQwSEU7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ3hISjtFRDJIRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDekhKO0VENEhFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUMxSEo7RUQ2SEU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDM0hKO0FBQ0Y7QUQrSEE7RUFDRTtJQUNFLHNCQUFBO0VDN0hGO0VEK0hFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VDN0hKO0VEZ0lFO0lBQ0UsbUJBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7RUM5SEo7RURpSUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQy9ISjtFRGtJRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUNoSUo7RURtSUU7SUFDRSxXQUFBO0VDaklKO0VEb0lFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQ2xJSjtFRHFJRTtJQUNFLDJCQUFBO0VDbklKO0FBQ0Y7QUR1SUE7RUFDRTtJQUNFLGdCQUFBO0VDcklGO0FBQ0Y7QUR3SUE7RUFDRTtJQUNFLGdCQUFBO0VDdElGO0FBQ0Y7QUR5SUE7RUFFSTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQ3hJSjtFRDJJRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ3pJSjtFRDRJRTtJQUNFLGdCQUFBO0VDMUlKO0VENklFO0lBQ0Usa0JBQUE7RUMzSUo7RUQ4SUU7SUFDRSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtFQzVJSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVsbHByaWNlL2Z1bGxwcmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4uZnVsbHByaWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHJcblxyXG4gICZfX3RpdGxlLXdyYXAge1xyXG4gICAgd2lkdGg6IDU4dnc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzAuNDd2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0yLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTEyLjMzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICB9XHJcblxyXG4gICZfX3ByaWNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICBmb250LXNpemU6IDQ3LjI5cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fbWFjaGluZSB7XHJcbiAgICB0b3A6IDQuOTV2aDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA3MC43NnZoO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQtd3JhcCB7XHJcbiAgICB3aWR0aDogNDJ2dztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDM1LjIzdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcclxuICAgIGZvbnQtc2l6ZTogNTEuOTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19saW5rIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgfVxyXG5cclxuICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQuNTh2dyk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjQuMjFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDc3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDExLjkwdmg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0LjQ2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNC40NnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgIHBhZGRpbmc6IDF2aCA0LjU4dnc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDh2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41dnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiA0NC43OSU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjF2aDtcclxuICAgICAgZm9udC1zaXplOiA5Mi4zM3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMi41dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAydmggNC41OHZ3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMzdweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3ZoO1xyXG4gICAgICBmb250LXNpemU6IDkyLjMzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTkwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzhweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3ZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTd2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZ2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzMuNjF2aDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTEuMDR2aDtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3ZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjcuNjF2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIGhlaWdodDogNjd2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDExMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDdweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiAzMiU7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNTVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xyXG4gICAgICBmb250LXNpemU6IDcyLjE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0LjAxdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDQ1LjQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgZm9udC1zaXplOiA1My40cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcclxuICAgICAgcGFkZGluZzogMTVweCA3N3B4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB3aWR0aDogNTh2dztcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0LXdyYXAge1xyXG4gICAgICB3aWR0aDogNDJ2dztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgd2lkdGg6IDMyJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IGNhbGMoMzAuNzMlKTtcclxuICAgICAgcGFkZGluZzogOHB4IDUwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJl9fdGl0bGUtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1NXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzIuMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTQuMDF2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDB2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDUuNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0LXdyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xyXG4gICAgICBmb250LXNpemU6IDUzLjRweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcclxuICAgICAgcGFkZGluZzogMTVweCA3N3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTIuMDF2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgJl9fdGl0bGUtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIHdpZHRoOiA1OHZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQtd3JhcCB7XHJcbiAgICAgIHdpZHRoOiA0MnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICB3aWR0aDogMzIlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgbWFyZ2luLXRvcDogMzB2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogY2FsYygzMC43MyUpO1xyXG4gICAgICBwYWRkaW5nOiA4cHggNTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMnB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBoZWlnaHQ6IDY1dmg7XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBsZWZ0OiBjYWxjKDIyJSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNS4wMXZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZS13cmFwIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgd2lkdGg6IDU4dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDQydnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyLjI3JTtcclxuICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgICBsZWZ0OiBjYWxjKDIyJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNi4wMXZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XHJcbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICBsZWZ0OiBjYWxjKDMwLjczJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDM2LjkzcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDExNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDFweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZS13cmFwIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjMuMjdweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyNy4zM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzEuNDlweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZnVsbHByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICB3aWR0aDogNTh2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZ1bGxwcmljZV9fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMC40N3ZoO1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XG4gIGZvbnQtc2l6ZTogMTEyLjMzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzU1ZjkxYjtcbiAgei1pbmRleDogMTtcbn1cbi5mdWxscHJpY2VfX3ByaWNlIHtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDQ3LjI5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cbi5mdWxscHJpY2VfX21hY2hpbmUge1xuICB0b3A6IDQuOTV2aDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA3MC43NnZoO1xuICB3aWR0aDogMjB2dztcbn1cbi5mdWxscHJpY2VfX21hY2hpbmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgei1pbmRleDogMDtcbn1cbi5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gIHdpZHRoOiA0MnZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mdWxscHJpY2VfX3RleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzNS4yM3ZoO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDUxLjk1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cbi5mdWxscHJpY2VfX2xpbmsge1xuICBjb2xvcjogIzU1ZjkxYjtcbn1cbi5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgbGVmdDogY2FsYyg1MCUgLSA0LjU4dncpO1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ZjkxYjtcbiAgY29sb3I6ICMwMDRhOTk7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNC4yMXB4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBwYWRkaW5nOiAxOXB4IDc3cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1dmg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MXB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDd2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxMS45dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDQuNDZ2dztcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgZm9udC1zaXplOiAyLjV2dztcbiAgICBtYXJnaW4tbGVmdDogNC40NnZ3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDF2aCA0LjU4dnc7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICB3aWR0aDogNDQuNzklO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjF2aDtcbiAgICBmb250LXNpemU6IDkyLjMzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIuNXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDMwdmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIHBhZGRpbmc6IDJ2aCA0LjU4dnc7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjM3cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxN3ZoO1xuICAgIGZvbnQtc2l6ZTogOTIuMzNweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDI0dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTd2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDE3dmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDZ2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMzMuNjF2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMS4wNHZoO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICAuZnVsbHByaWNlX19iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTd2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjcuNjF2aDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICBoZWlnaHQ6IDY3dmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMTJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDdweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuZnVsbHByaWNlX19iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMTU1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA3Mi4xNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0LjAxdmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fbWFjaGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG4gIC5mdWxscHJpY2VfX3ByaWNlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0NS40NXB4O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA1My40cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XG4gICAgcGFkZGluZzogMTVweCA3N3B4O1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuZnVsbHByaWNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgd2lkdGg6IDU4dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dC13cmFwIHtcbiAgICB3aWR0aDogNDJ2dztcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fcHJpY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgd2lkdGg6IDMyJTtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0IHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogY2FsYygzMC43MyUpO1xuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZnVsbHByaWNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDE1NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xuICAgIGZvbnQtc2l6ZTogNzIuMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNC4wMXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDUuNDVweDtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0LXdyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xuICAgIGZvbnQtc2l6ZTogNTMuNHB4O1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XG4gICAgcGFkZGluZzogMTVweCA3N3B4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDEyNXB4O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMi4wMXZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogNTh2dztcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0LXdyYXAge1xuICAgIHdpZHRoOiA0MnZ3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIGhlaWdodDogNzB2aDtcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIG1hcmdpbi10b3A6IDMwdmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSk7XG4gICAgcGFkZGluZzogOHB4IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzJweCkge1xuICAuZnVsbHByaWNlIHtcbiAgICBoZWlnaHQ6IDY1dmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBsZWZ0OiBjYWxjKDIyJSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMTF2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICBmb250LXNpemU6IDl2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxNS4wMXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogN3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmZ1bGxwcmljZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuZnVsbHByaWNlX19iYWNrLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogNTh2dztcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0LXdyYXAge1xuICAgIHdpZHRoOiA0MnZ3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIGhlaWdodDogNzB2aDtcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjI3JTtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4IDQwcHg7XG4gICAgbGVmdDogY2FsYygyMiUpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMTF2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICBmb250LXNpemU6IDl2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxNi4wMXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogN3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAuZnVsbHByaWNlX190aXRsZS13cmFwIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSk7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzYuOTNweDtcbiAgICBtYXJnaW4tdG9wOiAxMTRweDtcbiAgICBtYXJnaW4tbGVmdDogNDFweDtcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZS13cmFwIHtcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xuICB9XG4gIC5mdWxscHJpY2VfX3ByaWNlIHtcbiAgICBmb250LXNpemU6IDIzLjI3cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNy4zM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMS40OXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MXB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullpriceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fullprice',
          templateUrl: './fullprice.component.html',
          styleUrls: ['./fullprice.component.scss']
        }]
      }], function () {
        return [{
          type: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);

        this.logo = './assets/img/logo.svg';
        this.promokod = true;
        this.registration = false;
        this.fullprice = false;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 6,
      vars: 1,
      consts: [[1, "main"], [1, "main__logo"], ["alt", "logo", 3, "src"], [1, "main__hiddenElement"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["main[_ngcontent-%COMP%] {\n  background-image: url('main_bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  background-attachment: fixed;\n}\n\n.main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main__logo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 9.35%;\n  top: 3vh;\n  width: 27.2%;\n  height: 20.66vh;\n}\n\n.main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.main__hiddenElement[_ngcontent-%COMP%] {\n  margin-top: 30vh;\n  visibility: hidden;\n}\n\n@media only screen and (max-width: 1280px) {\n  .main__logo[_ngcontent-%COMP%] {\n    top: 5vh;\n  }\n}\n\n@media only screen and (max-width: 835px) {\n  main[_ngcontent-%COMP%] {\n    background-image: url('main_bg-table.png');\n  }\n\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 0vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n\n@media only screen and (max-width: 812px) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 9.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 800px) and (max-device-height: 1280px) and (orientation: portrait) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 2.05vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 0vh;\n  }\n}\n\n@media only screen and (max-width: 800px) and (max-device-height: 640px) and (orientation: landscape) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 9.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .main__logo[_ngcontent-%COMP%] {\n    top: 0vh;\n  }\n}\n\n@media only screen and (max-width: 740px) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 6.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 0vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n\n@media only screen and (max-width: 568px) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 6.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 0vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  main[_ngcontent-%COMP%] {\n    background-image: url('main_bg-mob.png');\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 49.375%;\n    top: 0vh;\n    right: 25.3125%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9GOlxccHJvamVjdFxcRDJcXFR1Ym9yZ1xcY29kZVxcdHVib3JnL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRE47O0FES0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0E7RUFFSTtJQUNFLFFBQUE7RUNMSjtBQUNGOztBRFVBO0VBQ0U7SUFFRSwwQ0FBQTtFQ1RGOztFRFlBO0lBQ0UsYUFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0VDVEY7RURXRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQ1RKO0FBQ0Y7O0FEYUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNaSjtFRGVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNiTjtBQUNGOztBRGtCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDaEJGO0VEa0JFO0lBQ0UsZUFBQTtFQ2hCSjtBQUNGOztBRG9CQTtFQUVJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ25CSjtFRHNCSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDcEJOO0FBQ0Y7O0FEeUJBO0VBRUk7SUFDRSxRQUFBO0VDeEJKO0FBQ0Y7O0FENEJBO0VBRUk7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDM0JKO0VEOEJJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUM1Qk47QUFDRjs7QURpQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFQy9CRjtFRGlDRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQy9CSjtBQUNGOztBRG1DQTtFQUVJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ2xDSjtFRHFDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDbkNOO0FBQ0Y7O0FEd0NBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUN0Q0Y7RUR3Q0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUN0Q0o7QUFDRjs7QUQwQ0E7RUFDRTtJQUVFLHdDQUFBO0VDekNGO0FBQ0Y7O0FENENBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7RUMxQ0Y7RUQ0Q0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUMxQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIC8vaGVpZ2h0OiA5NXZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX2xvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDkuMzUlO1xyXG4gICAgdG9wOiAzdmg7XHJcbiAgICB3aWR0aDogMjcuMiU7XHJcbiAgICBoZWlnaHQ6IDIwLjY2dmg7XHJcblxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19oaWRkZW5FbGVtZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5tYWluIHtcclxuICAgICZfX2xvZ28ge1xyXG4gICAgICB0b3A6IDV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICAvL2hlaWdodDogOTAuMzN2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLXRhYmxlLnBuZycpO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX2xvZ28ge1xyXG4gICAgd2lkdGg6IDM3Ljg5JTtcclxuICAgIHRvcDogMHZoO1xyXG4gICAgcmlnaHQ6IDMxLjA1NSU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyLjA1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgJl9fbG9nbyB7XHJcbiAgICAgIHJpZ2h0OiA5LjM1JTtcclxuICAgICAgdG9wOiA5LjAzdmg7XHJcbiAgICAgIHdpZHRoOiAyNy4yJTtcclxuICAgICAgaGVpZ2h0OiAyMC42NnZoO1xyXG5cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLm1haW5fX2xvZ28ge1xyXG4gICAgd2lkdGg6IDM3Ljg5JTtcclxuICAgIHRvcDogMi4wNXZoO1xyXG4gICAgcmlnaHQ6IDMxLjA1NSU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5tYWluIHtcclxuICAgICZfX2xvZ28ge1xyXG4gICAgICByaWdodDogOS4zNSU7XHJcbiAgICAgIHRvcDogOS4wM3ZoO1xyXG4gICAgICB3aWR0aDogMjcuMiU7XHJcbiAgICAgIGhlaWdodDogMjAuNjZ2aDtcclxuXHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluIHtcclxuICAgICZfX2xvZ28ge1xyXG4gICAgICB0b3A6IDB2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICAmX19sb2dvIHtcclxuICAgICAgcmlnaHQ6IDkuMzUlO1xyXG4gICAgICB0b3A6IDYuMDN2aDtcclxuICAgICAgd2lkdGg6IDI3LjIlO1xyXG4gICAgICBoZWlnaHQ6IDIwLjY2dmg7XHJcblxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWFpbl9fbG9nbyB7XHJcbiAgICB3aWR0aDogMzcuODklO1xyXG4gICAgdG9wOiAwdmg7XHJcbiAgICByaWdodDogMzEuMDU1JTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDIuMDV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAubWFpbiB7XHJcbiAgICAmX19sb2dvIHtcclxuICAgICAgcmlnaHQ6IDkuMzUlO1xyXG4gICAgICB0b3A6IDYuMDN2aDtcclxuICAgICAgd2lkdGg6IDI3LjIlO1xyXG4gICAgICBoZWlnaHQ6IDIwLjY2dmg7XHJcblxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubWFpbl9fbG9nbyB7XHJcbiAgICB3aWR0aDogMzcuODklO1xyXG4gICAgdG9wOiAwdmg7XHJcbiAgICByaWdodDogMzEuMDU1JTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDIuMDV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICBtYWluIHtcclxuICAgIC8vIGhlaWdodDogOTIuNjB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLW1vYi5wbmcnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAubWFpbl9fbG9nbyB7XHJcbiAgICB3aWR0aDogNDkuMzc1JTtcclxuICAgIHRvcDogMHZoO1xyXG4gICAgcmlnaHQ6IDI1LjMxMjUlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMi4wNXZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJtYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fX2xvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5LjM1JTtcbiAgdG9wOiAzdmg7XG4gIHdpZHRoOiAyNy4yJTtcbiAgaGVpZ2h0OiAyMC42NnZoO1xufVxuLm1haW5fX2xvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX19oaWRkZW5FbGVtZW50IHtcbiAgbWFyZ2luLXRvcDogMzB2aDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgdG9wOiA1dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODM1cHgpIHtcbiAgbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLXRhYmxlLnBuZ1wiKTtcbiAgfVxuXG4gIC5tYWluX19sb2dvIHtcbiAgICB3aWR0aDogMzcuODklO1xuICAgIHRvcDogMHZoO1xuICAgIHJpZ2h0OiAzMS4wNTUlO1xuICB9XG4gIC5tYWluX19sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIuMDV2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgcmlnaHQ6IDkuMzUlO1xuICAgIHRvcDogOS4wM3ZoO1xuICAgIHdpZHRoOiAyNy4yJTtcbiAgICBoZWlnaHQ6IDIwLjY2dmg7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHdpZHRoOiAzNy44OSU7XG4gICAgdG9wOiAyLjA1dmg7XG4gICAgcmlnaHQ6IDMxLjA1NSU7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAwdmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHJpZ2h0OiA5LjM1JTtcbiAgICB0b3A6IDkuMDN2aDtcbiAgICB3aWR0aDogMjcuMiU7XG4gICAgaGVpZ2h0OiAyMC42NnZoO1xuICB9XG4gIC5tYWluX19sb2dvIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluX19sb2dvIHtcbiAgICB0b3A6IDB2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgcmlnaHQ6IDkuMzUlO1xuICAgIHRvcDogNi4wM3ZoO1xuICAgIHdpZHRoOiAyNy4yJTtcbiAgICBoZWlnaHQ6IDIwLjY2dmg7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHdpZHRoOiAzNy44OSU7XG4gICAgdG9wOiAwdmg7XG4gICAgcmlnaHQ6IDMxLjA1NSU7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMi4wNXZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5tYWluX19sb2dvIHtcbiAgICByaWdodDogOS4zNSU7XG4gICAgdG9wOiA2LjAzdmg7XG4gICAgd2lkdGg6IDI3LjIlO1xuICAgIGhlaWdodDogMjAuNjZ2aDtcbiAgfVxuICAubWFpbl9fbG9nbyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgd2lkdGg6IDM3Ljg5JTtcbiAgICB0b3A6IDB2aDtcbiAgICByaWdodDogMzEuMDU1JTtcbiAgfVxuICAubWFpbl9fbG9nbyBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyLjA1dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLW1vYi5wbmdcIik7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHdpZHRoOiA0OS4zNzUlO1xuICAgIHRvcDogMHZoO1xuICAgIHJpZ2h0OiAyNS4zMTI1JTtcbiAgfVxuICAubWFpbl9fbG9nbyBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyLjA1dmg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-type.ts":
  /*!******************************!*\
    !*** ./src/app/post-type.ts ***!
    \******************************/

  /*! exports provided: postData */

  /***/
  function srcAppPostTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postData", function () {
      return postData;
    });

    var postData = function postData() {
      _classCallCheck(this, postData);
    };
    /***/

  },

  /***/
  "./src/app/promokod/promokod.component.ts":
  /*!************************************************!*\
    !*** ./src/app/promokod/promokod.component.ts ***!
    \************************************************/

  /*! exports provided: PromokodComponent */

  /***/
  function srcAppPromokodPromokodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromokodComponent", function () {
      return PromokodComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _post_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../post-type */
    "./src/app/post-type.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _streets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../streets.service */
    "./src/app/streets.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PromokodComponent = /*#__PURE__*/function () {
      //result;
      function PromokodComponent(mainComponent, streetsService, router) {
        _classCallCheck(this, PromokodComponent);

        this.mainComponent = mainComponent;
        this.streetsService = streetsService;
        this.router = router;
        this.machine = './assets/img/promokod/machine.png';
        this.beer = './assets/img/promokod/beer.png';
        this.misic = './assets/img/promokod/misic.png';
        this.plusicon = './assets/img/promokod/+-copy.png';
        this.play = './assets/img/promokod/play.png';
      }

      _createClass(PromokodComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.getPromo();
        }
      }, {
        key: "getPromo",
        value: function getPromo() {
          var _this = this;

          this.streetsService.postPromocode(this.postCode).subscribe(function (response) {
            console.log(response.status);

            if (response.status === 201) {
              _this.router.navigate(['/registration']);
            }
          });
        }
      }, {
        key: "checkPromokod",
        value: function checkPromokod() {
          this.postCode = new _post_type__WEBPACK_IMPORTED_MODULE_1__["postData"]();
          this.postCode.code = "";
          this.postCode.code = document.getElementById('quantity').value;
          this.getPromo();
          /* let promokod = (<HTMLInputElement>document.getElementById('quantity')).value;
                  let promokodCheck = this.kod.includes(promokod);
           
           if (promokodCheck == true) {
            this.router.navigate(['/registration']);
           }*/
        }
      }, {
        key: "onEnter",
        value: function onEnter(value) {
          this.postCode = new _post_type__WEBPACK_IMPORTED_MODULE_1__["postData"]();
          this.postCode.code = "";
          this.postCode.code = value;
          this.getPromo();
        }
      }]);

      return PromokodComponent;
    }();

    PromokodComponent.ɵfac = function PromokodComponent_Factory(t) {
      return new (t || PromokodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_streets_service__WEBPACK_IMPORTED_MODULE_3__["StreetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PromokodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PromokodComponent,
      selectors: [["app-promokod"]],
      decls: 67,
      vars: 6,
      consts: [[1, "promokod"], [1, "promokod-wrap"], [1, "promokod__textimg"], [1, "promokod__textimg-wrap"], [1, "promokod__title"], [1, "title-home"], [1, "title-party"], [1, "title-last"], [1, "promokod__links-wrap"], [1, "promokod__links"], ["routerLink", "/fullprice"], ["routerLink", "/rules", "routerLinkActive", "active"], [1, "links__exception"], [1, "promokod__machine"], ["alt", "machine", 3, "src"], [1, "promokod__content"], [1, "content__title"], [1, "content__action"], [1, "action__item"], ["alt", "beer", 3, "src"], [1, "action__plus"], ["alt", "plusicon", 3, "src"], ["alt", "misic", 3, "src"], ["alt", "play", 3, "src"], [1, "content__input"], ["for", "quantity", 1, "input__title"], [1, "input__inbut"], ["type", "text", "id", "quantity", "name", "quantity", "placeholder", "\u0432\u0432\u0435\u0434\u0438 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434", 3, "keyup.enter"], ["quantity", ""], [3, "click"], ["href", "https://t.me/Home_Party_Bot", "target", "_blank"]],
      template: function PromokodComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u0420\u0418\u0412\u0406\u0422,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u042F - HOME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PARTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PARTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MASTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u043A\u0443\u043F\u0438\u0442\u0438 \u043C\u0435\u043D\u0435 \u0437\u0430 \u043F\u043E\u0432\u043D\u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u043A\u0446\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0442\u0435\u0445. \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 093 566 88 81");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412 \u043C\u0435\u043D\u0435 \u0454 \u0432\u0441\u0435, \u0449\u043E \u0442\u0440\u0435\u0431\u0430 \u0434\u043B\u044F \u0442\u0432\u043E\u0454\u0457 \u0445\u043E\u0443\u043C \u043F\u0430\u0442\u0456:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "30 \u043B\u0456\u0442\u0440\u0456\u0432 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u043F\u0438\u0432\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Tuborg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u043A\u043E\u043B\u043E\u043D\u043A\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0434\u043B\u044F \u043F\u0430\u0442\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0456\u0433\u0440\u0438 \u0434\u043B\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u0442\u0432\u043E\u0457\u0445 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \u0433\u043E\u0441\u0442\u0435\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0429\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0435\u043D\u0435 \u0437\u0430 1 \u0433\u0440\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PromokodComponent_Template_input_keyup_enter_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

            return ctx.onEnter(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromokodComponent_Template_button_click_61_listener() {
            return ctx.checkPromokod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043C\u043E\u0436\u043D\u0430 \u0437\u0434\u043E\u0431\u0443\u0442\u0438 \u0432 Telegram. \u0423 \u0447\u0430\u0442-\u0431\u043E\u0442\u0456 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "@HomePartyBot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.machine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.beer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.plusicon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.misic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.plusicon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.play, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
      styles: [".promokod-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.promokod__textimg[_ngcontent-%COMP%] {\n  display: flex;\n  width: 57.56%;\n}\n.promokod__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 9vh;\n}\n.promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 16px;\n  padding: 3.285px 27px 3.285px 49px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  letter-spacing: -2.5px;\n  font-size: 104.43px;\n  line-height: 100%;\n  color: #fff;\n  background-color: #004a99;\n}\n.promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n  margin-bottom: 12.99vh;\n}\n.promokod__links[_ngcontent-%COMP%] {\n  margin-left: 51px;\n  display: flex;\n  justify-content: space-between;\n  width: 35vw;\n  position: absolute;\n}\n.promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #55f91b;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 23.71px;\n  line-height: 100%;\n  cursor: pointer;\n  z-index: 1;\n}\n.promokod__links[_ngcontent-%COMP%]   .links__exception[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.promokod__machine[_ngcontent-%COMP%] {\n  height: 74.47vh;\n  width: 44.79%;\n}\n.promokod__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.promokod__content[_ngcontent-%COMP%] {\n  width: 36.25%;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n  margin-top: 25vh;\n  margin-bottom: 3vh;\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 30.88px;\n  line-height: 100%;\n  letter-spacing: -1px;\n  color: #55f91b;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2vh;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n  width: 18.22%;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 1.23vh;\n  width: 100%;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 20.83px;\n  color: #55f91b;\n  text-transform: uppercase;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 19.5px;\n  color: #fff;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 35px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 19px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 18px 30px 18px 30px;\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid #99a1a8;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 26.76px;\n  color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  margin-right: 9px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 20px 47px 20px 47px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 25.66px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n  width: 221px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 35px;\n  letter-spacing: -1px;\n  color: #fff;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #55f91b;\n}\n.rules[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n}\n@media only screen and (min-width: 1681px) {\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 55.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 5vw;\n    padding: 3.285px 1.6vw 3.285px 2.91vw;\n    margin-bottom: 1.52vh;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 35vw;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.75vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n    margin-bottom: 0vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 2.08vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 0.56vw;\n    font-size: 1.1vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n    margin-bottom: 5px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    padding: 18px 2.8vw 18px 2.8vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 20.69vw;\n    font-size: 1.5vw;\n    border-radius: 0.5vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.95vw;\n  }\n}\n@media only screen and (max-width: 1677px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n    width: 12.5vw;\n  }\n}\n@media only screen and (max-width: 1666px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 1.5vh 5.4% 1.5vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1.7vh 8.46% 1.7vh 8.46%;\n  }\n}\n@media only screen and (max-width: 1663px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n  }\n}\n@media only screen and (max-width: 1660px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n  }\n}\n@media only screen and (max-width: 1644px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    letter-spacing: 0;\n  }\n}\n@media only screen and (max-width: 1600px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 15vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 17%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1vw;\n  }\n}\n@media only screen and (max-width: 1536px) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 9vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.9px;\n  }\n}\n@media only screen and (max-width: 1300px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.8px;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n    margin-bottom: 1.52vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 26vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n}\n@media only screen and (max-width: 1279px) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 9vh;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 55.21%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 42%;\n    margin-left: 5.31%;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (max-width: 1253px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.75px;\n  }\n}\n@media only screen and (max-width: 1177px) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 10vh;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.61px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 2.8vh;\n  }\n}\n@media only screen and (max-width: 854px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 25.5vw;\n  }\n}\n@media only screen and (max-width: 847px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 7vh;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n@media only screen and (max-width: 835px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 69.27%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.63px;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 84.27vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 24.88px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 27.21%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 28.23px;\n    margin-bottom: 1.87vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18.34px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 30.39px;\n    margin-bottom: 1.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 23px;\n    padding: 23.7px 15px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 21.17px;\n    padding: 20.883px 60px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 32.19px;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 47.63px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 58%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n    width: 43%;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 42%;\n    margin-left: 5.31%;\n    position: absolute;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14.5px;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 36.25%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    margin-top: 33vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n  }\n}\n@media only screen and (max-width: 800px) and (max-device-height: 1280px) and (orientation: portrait) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 69.27%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.63px;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 84.27vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 24.88px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 27.21%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 28.23px;\n    margin-bottom: 1.87vh;\n    letter-spacing: -0.3px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18.34px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 30.39px;\n    margin-bottom: 1.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 23px;\n    padding: 23.7px 15px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 21.17px;\n    padding: 20.883px 60px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 32.19px;\n  }\n}\n@media only screen and (max-width: 800px) and (max-device-height: 640px) and (orientation: landscape) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 7vh;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-left: 17px;\n    letter-spacing: 0;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    letter-spacing: -0.9px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18.09px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 17.5px 15px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 19.5px 60px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -1px;\n  }\n}\n@media only screen and (max-width: 741px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-bottom: 18vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 58%;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n    width: 43%;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 42%;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 36.25%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    margin-top: 33vh;\n    letter-spacing: 0;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n    letter-spacing: -0.5px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n    margin-bottom: 0;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 7.5vw;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    display: inline-block;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 84.27vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 24.88px;\n  }\n  .promokod__links[_ngcontent-%COMP%]   .links__exception[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 33%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 3.45vw;\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 30.39px;\n    margin-bottom: 1.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 23px;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 21.17px;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n    width: 28.5vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.05vw;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-bottom: 18vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 58%;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n    width: 43%;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 36.25%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    margin-top: 33vh;\n    letter-spacing: 0;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n    letter-spacing: -0.35px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n    margin-bottom: 0;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 7.5vw;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    display: inline-block;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 75vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 3.8vw;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 33%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 3.45vw;\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 4vw;\n    margin-bottom: 0.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n    padding: 1vh 5.4% 1vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n    padding: 1vh 8.46% 1vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.05vw;\n  }\n}\n@media only screen and (max-width: 384px) {\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    top: 80vh;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    top: 75vh;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .promokod__content[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 59.07%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 107px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 34.1px;\n    margin-bottom: 6px;\n    padding: 0.5px 0px 0.5px 9px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    padding-right: 9px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n    padding-right: 8px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n    padding-right: 16px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    padding-right: 16px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 122px;\n    margin-top: 72px;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    top: 92vh;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 255px;\n    margin-left: 35px;\n    bottom: 7px;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13.36px;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 255px;\n    z-index: 1;\n    margin-top: -12px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-bottom: 11px;\n    font-size: 12.95px;\n    letter-spacing: -0.35px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 46px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 3px;\n    font-size: 8.64px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 17px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 9px;\n    font-size: 16.31px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 8px 12px 8px 12px;\n    font-size: 12.35px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 21px 9px 21px;\n    font-size: 11.36px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14.76px;\n    letter-spacing: -0.41px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9rb2QvRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZy9zcmNcXGFwcFxccHJvbW9rb2RcXHByb21va29kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9tb2tvZC9wcm9tb2tvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7QUNISjtBRE1FO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNKSjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNMSjtBRE9JO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkE3Qk87QUN3QmI7QURRSTtFQUNFLGFBQUE7QUNOTjtBRFVNO0VBQ0Usc0JBQUE7QUNSUjtBRGNFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGNJO0VBQ0UsY0FyRFE7RUFzRFIsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDWk47QURlTTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNiUjtBRGtCRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDaEJKO0FEa0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDaEJOO0FEb0JFO0VBQ0UsYUFBQTtBQ2xCSjtBRHFCTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBMUZNO0FDdUVkO0FEc0JNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNwQlI7QUR1QlU7RUFDRSxnQkFBQTtBQ3JCWjtBRHVCWTtFQUNFLFdBQUE7QUNyQmQ7QUR5QlU7RUFDRSxhQUFBO0FDdkJaO0FEeUJZO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDdkJkO0FEMEJZO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F2SEE7RUF3SEEseUJBQUE7QUN4QmQ7QUQrQlE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQzdCVjtBRGlDVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDL0JaO0FEbUNRO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDakNWO0FEb0NRO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBOUpJO0VBK0pKLFlBQUE7RUFDQSxjQS9KRztFQWdLSCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNsQ1Y7QURxQ1E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNuQ1Y7QURxQ1U7RUFDRSxjQTlLRTtBQzJJZDtBRDJDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FDeENGO0FEMkNBO0VBRUk7SUFDRSxhQUFBO0VDekNKO0VEOENJO0lBQ0UsY0FBQTtJQUNBLHFDQUFBO0lBQ0EscUJBQUE7RUM1Q047RURnREU7SUFDRSxXQUFBO0VDOUNKO0VEZ0RJO0lBQ0UsZ0JBQUE7RUM5Q047RURvRE07SUFDRSxpQkFBQTtFQ2xEUjtFRHFETTtJQUNFLGtCQUFBO0VDbkRSO0VEc0RVO0lBQ0UsaUJBQUE7RUNwRFo7RURzRFk7SUFDRSxhQUFBO0VDcERkO0VEeURZO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtFQ3ZEZDtFRDhEUTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUM1RFY7RUQrRFE7SUFDRSxjQUFBO0lBQ0EsOEJBQUE7RUM3RFY7RURnRVE7SUFDRSxrQkFBQTtFQzlEVjtFRGlFUTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VDL0RWO0VEa0VRO0lBQ0UsaUJBQUE7RUNoRVY7QUFDRjtBRHVFQTtFQUVJO0lBQ0UsY0FBQTtFQ3RFSjtFRDZFVTtJQUNFLGdCQUFBO0VDM0VaO0VEOEVVO0lBQ0UsaUJBQUE7RUM1RVo7RURrRlE7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUNoRlY7RURtRlE7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0VDakZWO0VEb0ZRO0lBQ0UsZ0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7RUNsRlY7QUFDRjtBRHlGQTtFQUtVO0lBQ0UsOEJBQUE7RUMzRlY7RUQ4RlE7SUFDRSxnQ0FBQTtFQzVGVjtBQUNGO0FEbUdBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pHRjtBQUNGO0FEb0dBO0VBQ0U7SUFDRSxpQkFBQTtFQ2xHRjtBQUNGO0FEcUdBO0VBTVE7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VDeEdSO0FBQ0Y7QUQ4R0E7RUFHTTtJQUNFLGNBQUE7RUM5R047RURpSEk7SUFDRSxtQkFBQTtFQy9HTjtFRG9ISTtJQUNFLGtCQUFBO0VDbEhOO0VEb0hNO0lBQ0UsVUFBQTtFQ2xIUjtFRG9IUTtJQUNFLGdCQUFBO0VDbEhWO0FBQ0Y7QUR5SEE7RUFJTTtJQUNFLGtCQUFBO0VDMUhOO0VEaUlNO0lBQ0UsbUJBQUE7RUMvSFI7RURtSVE7SUFDRSxrQkFBQTtFQ2pJVjtFRG9JUTtJQUNFLGtCQUFBO0VDbElWO0FBQ0Y7QUR5SUE7RUFDRTtJQUNFLHNCQUFBO0VDdklGO0FBQ0Y7QUQwSUE7RUFDRTtJQUNFLHNCQUFBO0VDeElGO0FBQ0Y7QUQySUE7RUFHTTtJQUNFLGdCQUFBO0lBQ0EscUJBQUE7RUMzSU47RURpSk07SUFDRSxnQkFBQTtFQy9JUjtFRGtKTTtJQUNFLFdBQUE7RUNoSlI7QUFDRjtBRHNKQTtFQUVJO0lBQ0Usa0JBQUE7RUNySko7RUR3SkU7SUFDRSxhQUFBO0VDdEpKO0VEeUpFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VDdkpKO0VEeUpJO0lBQ0UsZ0JBQUE7RUN2Sk47QUFDRjtBRDRKQTtFQUNFO0lBQ0UsdUJBQUE7RUMxSkY7QUFDRjtBRDZKQTtFQUVJO0lBQ0UsbUJBQUE7RUM1Sko7RUQrSkU7SUFDRSxVQUFBO0VDN0pKO0FBQ0Y7QURpS0E7RUFFSTtJQUNFLFVBQUE7RUNoS0o7RURtS0U7SUFDRSxVQUFBO0VDaktKO0VEc0tNO0lBQ0UsdUJBQUE7RUNwS1I7RUR1S007SUFDRSxpQkFBQTtFQ3JLUjtBQUNGO0FEMktBO0VBQ0U7SUFDRSxhQUFBO0VDektGO0FBQ0Y7QUQ0S0E7RUFHTTtJQUNFLG1CQUFBO0VDNUtOO0VEK0tJO0lBQ0Usa0JBQUE7RUM3S047RURpTEU7SUFDRSxZQUFBO0VDL0tKO0VEaUxFO0lBQ0Usa0JBQUE7RUMvS0o7QUFDRjtBRG1MQTtFQUVJO0lBQ0Usc0JBQUE7RUNsTEo7RURxTEU7SUFDRSxXQUFBO0VDbkxKO0VEc0xFO0lBQ0UsYUFBQTtFQ3BMSjtFRHVMRTtJQUNFLG1CQUFBO0VDckxKO0VEdUxJO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ3JMTjtFRHdMSTtJQUNFLHFCQUFBO0VDdExOO0VEeUxJO0lBQ0UsV0FBQTtFQ3ZMTjtFRDBMSTtJQUNFLGFBQUE7RUN4TE47RUQyTEk7SUFDRSxnQkFBQTtFQ3pMTjtFRDZMRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUMzTEo7RUQ4TEU7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQzVMSjtFRDhMSTtJQUNFLGtCQUFBO0VDNUxOO0VEZ01FO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQzlMSjtFRGlNRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDL0xKO0VEa01NO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUNoTVI7RUR1TVU7SUFDRSxhQUFBO0VDck1aO0VEdU1ZO0lBQ0UscUJBQUE7RUNyTWQ7RUR3TVk7SUFDRSxrQkFBQTtFQ3RNZDtFRDBNVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQ3hNWjtFRDBNWTtJQUNFLFdBQUE7RUN4TWQ7RUQrTVE7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0VDN01WO0VEZ05RO0lBQ0UsZUFBQTtJQUNBLG9CQUFBO0VDOU1WO0VEaU5RO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtFQy9NVjtFRGtOUTtJQUNFLGtCQUFBO0VDaE5WO0FBQ0Y7QUR5TkE7RUFFSTtJQUNFLG1CQUFBO0VDeE5KO0VENE5JO0lBQ0Usa0JBQUE7RUMxTk47RUQ2Tkk7SUFDRSxXQUFBO0VDM05OO0VEOE5JO0lBQ0UsYUFBQTtFQzVOTjtFRCtOSTtJQUNFLHFCQUFBO0VDN05OO0VEZ09JO0lBQ0UsYUFBQTtFQzlOTjtFRGtPRTtJQUNFLFVBQUE7RUNoT0o7RURtT0U7SUFDRSxVQUFBO0VDak9KO0VEb09FO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNsT0o7RURxT0U7SUFDRSxnQkFBQTtFQ25PSjtFRHNPRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDcE9KO0VEc09JO0lBQ0UsaUJBQUE7RUNwT047RUR3T0U7SUFDRSxhQUFBO0VDdE9KO0VEeU9NO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQ3ZPUjtFRDRPVTtJQUNFLGdCQUFBO0VDMU9aO0VENk9VO0lBQ0UsaUJBQUE7RUMzT1o7RURpUFE7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUMvT1Y7RURrUFE7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0VDaFBWO0VEbVBRO0lBQ0UsZ0JBQUE7SUFDQSxnQ0FBQTtFQ2pQVjtFRG9QUTtJQUNFLGdCQUFBO0VDbFBWO0FBQ0Y7QUR5UEE7RUFFSTtJQUNFLHNCQUFBO0VDeFBKO0VEMlBFO0lBQ0UsV0FBQTtFQ3pQSjtFRDRQRTtJQUNFLGFBQUE7RUMxUEo7RUQ2UEU7SUFDRSxtQkFBQTtFQzNQSjtFRDZQSTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUMzUE47RUQ4UEk7SUFDRSxxQkFBQTtFQzVQTjtFRCtQSTtJQUNFLFdBQUE7RUM3UE47RURnUUk7SUFDRSxhQUFBO0VDOVBOO0VEaVFJO0lBQ0UscUJBQUE7SUFFQSxnQkFBQTtFQ2hRTjtFRG9RRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNsUUo7RURxUUU7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDblFKO0VEcVFJO0lBQ0Usa0JBQUE7RUNuUU47RUR1UUU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDclFKO0VEd1FFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUN0UUo7RUR5UU07SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0VDdlFSO0VEOFFVO0lBQ0UsYUFBQTtFQzVRWjtFRDhRWTtJQUNFLHFCQUFBO0VDNVFkO0VEK1FZO0lBQ0Usa0JBQUE7RUM3UWQ7RURpUlU7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUMvUVo7RURpUlk7SUFDRSxXQUFBO0VDL1FkO0VEc1JRO0lBQ0Usa0JBQUE7SUFDQSxxQkFBQTtFQ3BSVjtFRHVSUTtJQUNFLGVBQUE7SUFDQSxvQkFBQTtFQ3JSVjtFRHdSUTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUN0UlY7RUR5UlE7SUFDRSxrQkFBQTtFQ3ZSVjtBQUNGO0FEK1JBO0VBR007SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUMvUk47QUFDRjtBRG9TQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQ25TSjtFRHdTTTtJQUNFLHNCQUFBO0VDdFNSO0VEMlNVO0lBQ0Usa0JBQUE7RUN6U1o7RUQ0U1U7SUFDRSxrQkFBQTtFQzFTWjtFRGdUUTtJQUNFLGtCQUFBO0VDOVNWO0VEaVRRO0lBQ0Usb0JBQUE7RUMvU1Y7RURrVFE7SUFDRSxvQkFBQTtFQ2hUVjtFRG1UUTtJQUNFLG9CQUFBO0VDalRWO0FBQ0Y7QUR3VEE7RUFFSTtJQUNFLG1CQUFBO0VDdlRKO0VEMFRFO0lBQ0UsbUJBQUE7RUN4VEo7RUQwVEk7SUFDRSxnQkFBQTtFQ3hUTjtFRDJUSTtJQUNFLFdBQUE7RUN6VE47RUQ0VEk7SUFDRSxhQUFBO0VDMVROO0VENlRJO0lBQ0UscUJBQUE7RUMzVE47RUQ4VEk7SUFDRSxhQUFBO0VDNVROO0VEZ1VFO0lBQ0UsVUFBQTtFQzlUSjtFRGlVRTtJQUNFLFVBQUE7RUMvVEo7RURrVUU7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ2hVSjtFRG1VRTtJQUNFLGdCQUFBO0VDalVKO0VEb1VFO0lBQ0UsVUFBQTtFQ2xVSjtFRG9VSTtJQUNFLGdCQUFBO0VDbFVOO0VEc1VFO0lBQ0UsYUFBQTtFQ3BVSjtFRHVVTTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ3JVUjtFRDBVVTtJQUNFLGdCQUFBO0VDeFVaO0VEMlVVO0lBQ0UsaUJBQUE7RUN6VVo7RUQrVVE7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUM3VVY7RURnVlE7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0VDOVVWO0VEaVZRO0lBQ0UsZ0JBQUE7SUFDQSxnQ0FBQTtFQy9VVjtFRGtWUTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7RUNoVlY7QUFDRjtBRHVWQTtFQUVJO0lBQ0Usc0JBQUE7RUN0Vko7RUR5VkU7SUFDRSxXQUFBO0VDdlZKO0VEMFZFO0lBQ0UsVUFBQTtFQ3hWSjtFRDJWRTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7RUN6Vko7RUQyVkk7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDelZOO0VENFZJO0lBQ0UscUJBQUE7RUMxVk47RUQ2Vkk7SUFDRSxXQUFBO0VDM1ZOO0VEOFZJO0lBQ0UsYUFBQTtFQzVWTjtFRCtWSTtJQUNFLGdCQUFBO0lBQ0EscUJBQUE7RUM3Vk47RURpV0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDL1ZKO0VEa1dFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7RUNoV0o7RURrV0k7SUFDRSxrQkFBQTtFQ2hXTjtFRG1XTTtJQUNBLGdCQUFBO0VDaldOO0VEc1dFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ3BXSjtFRHVXRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDcldKO0VEd1dNO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUN0V1I7RUQyV1U7SUFDRSxhQUFBO0VDeldaO0VEMldZO0lBQ0UscUJBQUE7RUN6V2Q7RUQ0V1k7SUFDRSxnQkFBQTtFQzFXZDtFRDhXVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQzVXWjtFRDhXWTtJQUNFLFdBQUE7RUM1V2Q7RURtWFE7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0VDalhWO0VEb1hRO0lBQ0UsZUFBQTtJQUNBLDhCQUFBO0VDbFhWO0VEcVhRO0lBQ0Usa0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7RUNuWFY7RURzWFE7SUFDRSxpQkFBQTtFQ3BYVjtBQUNGO0FENFhBO0VBRUk7SUFDRSxtQkFBQTtFQzNYSjtFRDhYRTtJQUNFLG1CQUFBO0VDNVhKO0VEOFhJO0lBQ0UsZ0JBQUE7RUM1WE47RUQrWEk7SUFDRSxXQUFBO0VDN1hOO0VEZ1lJO0lBQ0UsYUFBQTtFQzlYTjtFRGlZSTtJQUNFLHFCQUFBO0VDL1hOO0VEa1lJO0lBQ0UsYUFBQTtFQ2hZTjtFRG9ZRTtJQUNFLFVBQUE7RUNsWUo7RURxWUU7SUFDRSxVQUFBO0VDbllKO0VEc1lFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNwWUo7RUR1WUU7SUFDRSxnQkFBQTtFQ3JZSjtFRHdZRTtJQUNFLFVBQUE7RUN0WUo7RUR3WUk7SUFDRSxnQkFBQTtFQ3RZTjtFRDBZRTtJQUNFLGFBQUE7RUN4WUo7RUQyWU07SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUN6WVI7RUQ4WVU7SUFDRSxnQkFBQTtFQzVZWjtFRCtZVTtJQUNFLGlCQUFBO0VDN1laO0VEbVpRO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VDalpWO0VEb1pRO0lBQ0UsZ0JBQUE7SUFDQSw4QkFBQTtFQ2xaVjtFRHFaUTtJQUNFLGdCQUFBO0lBQ0EsZ0NBQUE7RUNuWlY7RURzWlE7SUFDRSxnQkFBQTtJQUNBLHVCQUFBO0VDcFpWO0FBQ0Y7QUQyWkE7RUFFSTtJQUNFLHNCQUFBO0VDMVpKO0VENlpFO0lBQ0UsV0FBQTtFQzNaSjtFRDhaRTtJQUNFLFVBQUE7RUM1Wko7RUQrWkU7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0VDN1pKO0VEK1pJO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQzdaTjtFRGdhSTtJQUNFLHFCQUFBO0VDOVpOO0VEaWFJO0lBQ0UsV0FBQTtFQy9aTjtFRGthSTtJQUNFLGFBQUE7RUNoYU47RURtYUk7SUFDRSxnQkFBQTtJQUNBLHFCQUFBO0VDamFOO0VEcWFFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ25hSjtFRHNhRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDcGFKO0VEc2FJO0lBQ0UsZ0JBQUE7RUNwYU47RUR3YUU7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDdGFKO0VEeWFFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUN2YUo7RUQwYU07SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ3hhUjtFRDZhVTtJQUNFLGFBQUE7RUMzYVo7RUQ2YVk7SUFDRSxxQkFBQTtFQzNhZDtFRDhhWTtJQUNFLGdCQUFBO0VDNWFkO0VEZ2JVO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VDOWFaO0VEZ2JZO0lBQ0UsV0FBQTtFQzlhZDtFRHFiUTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtFQ25iVjtFRHNiUTtJQUNFLGdCQUFBO0lBQ0EsMEJBQUE7RUNwYlY7RUR1YlE7SUFDRSxnQkFBQTtJQUNBLDRCQUFBO0VDcmJWO0VEd2JRO0lBQ0UsaUJBQUE7RUN0YlY7QUFDRjtBRDZiQTtFQUVJO0lBQ0UsU0FBQTtFQzViSjtBQUNGO0FEK2JBO0VBRUk7SUFDRSxTQUFBO0VDOWJKO0FBQ0Y7QURtY0E7RUFFSTtJQUNFLGVBQUE7RUNsY0o7QUFDRjtBRHNjQTtFQUdJO0lBQ0UsYUFBQTtFQ3RjSjtFRHljRTtJQUNFLGlCQUFBO0VDdmNKO0VEeWNJO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VDdmNOO0VEMGNJO0lBQ0Usa0JBQUE7RUN4Y047RUQyY0k7SUFDRSxrQkFBQTtFQ3pjTjtFRDRjSTtJQUNFLG1CQUFBO0VDMWNOO0VENmNJO0lBQ0UsYUFBQTtFQzNjTjtFRCtjTTtJQUNFLHFCQUFBO0VDN2NSO0VEZ2RNO0lBQ0UsbUJBQUE7RUM5Y1I7RURtZEU7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNqZEo7RURvZEU7SUFDRSxTQUFBO0VDbGRKO0VEcWRFO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ25kSjtFRHFkSTtJQUNFLGtCQUFBO0VDbmROO0VEdWRFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQ3JkSjtFRHdkTTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtFQ3RkUjtFRDJkVTtJQUNFLFdBQUE7RUN6ZFo7RUQyZFk7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VDemRkO0VENmRVO0lBQ0UsZ0JBQUE7RUMzZFo7RUQ2ZFk7SUFDRSxXQUFBO0VDM2RkO0VEa2VRO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ2hlVjtFRG9lVTtJQUNFLGtCQUFBO0VDbGVaO0VEc2VRO0lBQ0UsMEJBQUE7SUFDQSxrQkFBQTtFQ3BlVjtFRHVlUTtJQUNFLDJCQUFBO0lBQ0Esa0JBQUE7RUNyZVY7RUR3ZVE7SUFDRSxrQkFBQTtJQUNBLHVCQUFBO0VDdGVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9tb2tvZC9wcm9tb2tvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4ucHJvbW9rb2Qge1xyXG4gICYtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDU3LjU2JTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA5dmg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgcGFkZGluZzogMy4yODVweCAyN3B4IDMuMjg1cHggNDlweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNdXNlb1NhbnNDeXJsNzAwJztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTIuNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEwNC40M3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICYtbGFzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIuOTl2aDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2xpbmtzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAzNXZ3OyAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjMuNzFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5saW5rc3tcclxuICAgICAgJl9fZXhjZXB0aW9ueyAgICBcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfSAgICAgXHJcbiAgfVxyXG5cclxuICAmX19tYWNoaW5lIHtcclxuICAgIGhlaWdodDogNzQuNDd2aDtcclxuICAgIHdpZHRoOiA0NC43OSU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDM2LjI1JTtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzAuODhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICBjb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuXHJcbiAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4LjIyJTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yM3ZoO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW9TYW5zQ3lybDcwMCc7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMC44M3B4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5LjVweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgJl9faW5idXQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4IDMwcHggMThweCAzMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5YTFhODtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNi43NnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCA0N3B4IDIwcHggNDdweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1LjY2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIyMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucnVsZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODFweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTUuMjElO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDMuMjg1cHggMS42dncgMy4yODVweCAyLjkxdnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41MnZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogMzV2dztcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxuXHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy44dmg7XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMi4wOHZ3O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41NnZ3O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjF2dztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMi44dncgMThweCAyLjh2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXRfX2luYnV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMC42OXZ3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjk1dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzdweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSBwIHtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2l0ZW0gcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy44dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEyLjV2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY2NnB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjV2aCA1LjQlIDEuNXZoIDUuNCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMS43dmggOC40NiUgMS43dmggOC40NiU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NjNweCkge1xyXG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XHJcbiAgICBmb250LXNpemU6IDIuMXZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjYwcHgpIHtcclxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQ0cHgpIHtcclxuICAucHJvbW9rb2Qge1xyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43MzV2dztcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAucHJvbW9rb2Qge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IC5jb250ZW50IHtcclxuICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcblxyXG4gICAgICAgIC5hY3Rpb25fX2l0ZW0ge1xyXG4gICAgICAgICAgd2lkdGg6IDE3JTtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjF2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUzNnB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA5dmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIC5pbnB1dF9faW5idXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjV2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjUydmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDI2dmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24gLmFjdGlvbl9fcGx1cyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSAudGl0bGUtbGFzdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDl2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTUuMjElO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzIHtcclxuICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUuMzElO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUzcHgpIHtcclxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzdweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSAudGl0bGUtbGFzdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3MgcCB7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9faW5wdXQgcCB7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIuOHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xyXG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNS41dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0N3B4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDd2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB9XHJcbiAgICAmX19saW5rc3tcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzVweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNjkuMjclO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAuNDF2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTYuNjNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMjElO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzLXdyYXAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogODQuMjd2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogNzIuMjYlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNC44OHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiAyNy4yMSU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNi45M3ZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICB3aWR0aDogNzIuMjYlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4LjIzcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjg3dmg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE4LjM3JTtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMTl2aDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOC4zNHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUuOTQlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwLjM5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNDZ2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjMuN3B4IDE1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMS4xN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMC44ODNweCA2MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMyLjE5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcclxuICAucHJvbW9rb2Qge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDcuNjNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWhvbWUge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtcGFydHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTglO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogNDIlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNS4zMSU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAzNi4yNSU7XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjczNXZ3O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzN2aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjh2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44NXZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMS43dmggNS40JSAxLjd2aCA1LjQlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMXZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNjkuMjclO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAuNDF2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTYuNjNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMjElO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4NC4yN3ZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rcyB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuODhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMjcuMjElO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDcyLjI2JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOC4yM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44N3ZoO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTguMzclO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4xOXZoO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4LjM0cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNS45NCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy4yMnZoO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS40NnZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMy43cHggMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxLjE3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwLjg4M3B4IDYwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzIuMTlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDd2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSBwIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC45cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24gLmFjdGlvbiB7XHJcbiAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTguMDlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNy41cHggMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOS41cHggNjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MXB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWhvbWUge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtcGFydHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTglO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogNDIlO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMzYuMjUlO1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43MzV2dztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMzdmg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjh2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44NXZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMS43dmggNS40JSAxLjd2aCA1LjQlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMXZ3O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAuNDF2aDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNy41dnc7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtaG9tZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1wYXJ0eSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4NC4yN3ZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rcyB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDI0Ljg4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpbmtze1xyXG4gICAgICAgICZfX2V4Y2VwdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDcyLjI2JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzLjQ1dnc7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxOC4zNyU7XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjE5dmg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ydnc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNS45NCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy4yMnZoO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS40NnZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjd2aCA1LjQlIDEuN3ZoIDUuNCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMS4xN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4LjV2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjA1dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTh2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dGltZy13cmFwIHtcclxuICAgICAgd2lkdGg6IDU4JTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICB3aWR0aDogNDMlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzLXdyYXAge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDM2LjI1JTtcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNzM1dnc7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2l0ZW0gcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy44dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjF2dztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWctd3JhcCB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMC40MXZoO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3LjV2dztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMjElO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rcy13cmFwIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDc1dmg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzIHtcclxuICAgICAgd2lkdGg6IDcyLjI2JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy44dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA2Ljkzdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy40NXZ3O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTguMzclO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4xOXZoO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnZ3O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUuOTQlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40NnZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMXZoIDUuNCUgMXZoIDUuNCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMXZoIDguNDYlIDF2aCA4LjQ2JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjA1dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XHJcbiAgLnByb21va29ke1xyXG4gICAgJl9fbGlua3Mtd3JhcHtcclxuICAgICAgdG9wOiA4MHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLnByb21va29ke1xyXG4gICAgJl9fbGlua3Mtd3JhcHtcclxuICAgICAgdG9wOiA3NXZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAucHJvbW9rb2R7XHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcblxyXG4gICAgJl9fdGV4dGltZy13cmFwIHtcclxuICAgICAgd2lkdGg6IDU5LjA3JTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwN3B4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNC4xcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXB4IDBweCAwLjVweCA5cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgJi1wYXJ0eSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxhc3Qge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgd2lkdGg6IDEyMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzLXdyYXAge1xyXG4gICAgICB0b3A6IDkydmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogMjU1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgICBib3R0b206IDdweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTMuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMjU1cHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEyLjk1cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOC42NHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTdweDtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTYuMzFweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAmX19pbmJ1dCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMi4zNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjFweCA5cHggMjFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMS4zNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0Ljc2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucHJvbW9rb2Qtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvbW9rb2RfX3RleHRpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTcuNTYlO1xufVxuLnByb21va29kX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDl2aDtcbn1cbi5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMy4yODVweCAyN3B4IDMuMjg1cHggNDlweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XG4gIGZvbnQtc2l6ZTogMTA0LjQzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGE5OTtcbn1cbi5wcm9tb2tvZF9fdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTIuOTl2aDtcbn1cbi5wcm9tb2tvZF9fbGlua3Mge1xuICBtYXJnaW4tbGVmdDogNTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMzV2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnByb21va29kX19saW5rcyBwIHtcbiAgY29sb3I6ICM1NWY5MWI7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDIzLjcxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDE7XG59XG4ucHJvbW9rb2RfX2xpbmtzIC5saW5rc19fZXhjZXB0aW9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG59XG4ucHJvbW9rb2RfX21hY2hpbmUge1xuICBoZWlnaHQ6IDc0LjQ3dmg7XG4gIHdpZHRoOiA0NC43OSU7XG59XG4ucHJvbW9rb2RfX21hY2hpbmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5wcm9tb2tvZF9fY29udGVudCB7XG4gIHdpZHRoOiAzNi4yNSU7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjV2aDtcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc2l6ZTogMzAuODhweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBjb2xvcjogIzU1ZjkxYjtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgd2lkdGg6IDE4LjIyJTtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yM3ZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmw3MDBcIjtcbiAgZm9udC1zaXplOiAyMC44M3B4O1xuICBjb2xvcjogIzU1ZjkxYjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE5LjVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDM1cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IC5pbnB1dF9faW5idXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgcGFkZGluZzogMThweCAzMHB4IDE4cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTlhMWE4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAyNi43NnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIwcHggNDdweCAyMHB4IDQ3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMjUuNjZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ZjkxYjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzAwNGE5OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMjFweDtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCBhIHtcbiAgY29sb3I6ICM1NWY5MWI7XG59XG5cbi5ydWxlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODFweCkge1xuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDU1LjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIHBhZGRpbmc6IDMuMjg1cHggMS42dncgMy4yODVweCAyLjkxdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41MnZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiAzNXZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNzV2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIG1hcmdpbi10b3A6IDMuOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMgaW1nIHtcbiAgICB3aWR0aDogMi4wOHZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNTZ2dztcbiAgICBmb250LXNpemU6IDEuMXZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDE4cHggMi44dncgMThweCAyLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IC5pbnB1dF9faW5idXQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwLjY5dnc7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMS45NXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzdweCkge1xuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxLjJ2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgICBtYXJnaW4tdG9wOiAzLjh2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg1dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBwYWRkaW5nOiAxLjd2aCA1LjQlIDEuN3ZoIDUuNCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgcGFkZGluZzogMS45dmggOC40NiUgMS45dmggOC40NiU7XG4gICAgd2lkdGg6IDEyLjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjY2cHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgcGFkZGluZzogMS41dmggNS40JSAxLjV2aCA1LjQlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxLjd2aCA4LjQ2JSAxLjd2aCA4LjQ2JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjYzcHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBmb250LXNpemU6IDIuMXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NjBweCkge1xuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQ0cHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjczNXZ3O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgICB3aWR0aDogMTclO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogOXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgLmlucHV0X19pbmJ1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjUydmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjZ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIGltZyB7XG4gICAgd2lkdGg6IDI3cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDl2aDtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDU1LjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogNDIlO1xuICAgIG1hcmdpbi1sZWZ0OiA1LjMxJTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1M3B4KSB7XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3N3B4KSB7XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIH1cbiAgLnByb21va29kX19saW5rcyBwIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNjFweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyLjh2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1LjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDdweCkge1xuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbWFjaGluZSB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzVweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNjkuMjclO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwLjQxdmg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDU2LjYzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODQuMjd2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogNzIuMjYlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMjQuODhweDtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiAyNy4yMSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyOC4yM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuODd2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgICB3aWR0aDogMTguMzclO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjE5dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDE4LjM0cHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyB7XG4gICAgd2lkdGg6IDUuOTQlO1xuICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAzMC4zOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNDZ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgcGFkZGluZzogMjMuN3B4IDE1cHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjEuMTdweDtcbiAgICBwYWRkaW5nOiAyMC44ODNweCA2MHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gICAgZm9udC1zaXplOiAzMi4xOXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5wcm9tb2tvZC13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0Ny42M3B4O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWhvbWUge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190ZXh0aW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG4gIC5wcm9tb2tvZF9fbWFjaGluZSB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIHdpZHRoOiA0MyU7XG4gIH1cbiAgLnByb21va29kX19saW5rcy13cmFwIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiA0MiU7XG4gICAgbWFyZ2luLWxlZnQ6IDUuMzElO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCB7XG4gICAgd2lkdGg6IDM2LjI1JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNzM1dnc7XG4gICAgbWFyZ2luLXRvcDogMzN2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHAge1xuICAgIGZvbnQtc2l6ZTogMS4ydnc7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyB7XG4gICAgbWFyZ2luLXRvcDogMy44dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgcGFkZGluZzogMS43dmggNS40JSAxLjd2aCA1LjQlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gICAgZm9udC1zaXplOiAyLjF2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNjkuMjclO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwLjQxdmg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDU2LjYzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzLXdyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDg0LjI3dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19saW5rcyB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAyNC44OHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fbWFjaGluZSB7XG4gICAgd2lkdGg6IDI3LjIxJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNi45M3ZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDI4LjIzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44N3ZoO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSB7XG4gICAgd2lkdGg6IDE4LjM3JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xOXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxOC4zNHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIHdpZHRoOiA1Ljk0JTtcbiAgICBtYXJnaW4tdG9wOiAzLjIydmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjQ2dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHBhZGRpbmc6IDIzLjdweCAxNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIxLjE3cHg7XG4gICAgcGFkZGluZzogMjAuODgzcHggNjBweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMzIuMTlweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA3dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjlweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxOC4wOXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBwYWRkaW5nOiAxNy41cHggMTVweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTkuNXB4IDYwcHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDFweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtcGFydHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIGhlaWdodDogODB2aDtcbiAgICB3aWR0aDogNDMlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogNDIlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAzNi4yNSU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjczNXZ3O1xuICAgIG1hcmdpbi10b3A6IDMzdmg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDEuMnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIG1hcmdpbi10b3A6IDMuOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMi4xdnc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwLjQxdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNy41dnc7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzLXdyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDg0LjI3dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19saW5rcyB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAyNC44OHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgLmxpbmtzX19leGNlcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLnByb21va29kX19tYWNoaW5lIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA2Ljkzdmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IHtcbiAgICB3aWR0aDogNzIuMjYlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMy40NXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgICB3aWR0aDogMTguMzclO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjE5dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDIuMnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIHdpZHRoOiA1Ljk0JTtcbiAgICBtYXJnaW4tdG9wOiAzLjIydmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjQ2dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMS4xN3B4O1xuICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xuICAgIHdpZHRoOiAyOC41dnc7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBmb250LXNpemU6IDQuMDV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtcGFydHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIGhlaWdodDogODB2aDtcbiAgICB3aWR0aDogNDMlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAzNi4yNSU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjczNXZ3O1xuICAgIG1hcmdpbi10b3A6IDMzdmg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDEuMnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIG1hcmdpbi10b3A6IDMuOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMi4xdnc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnByb21va29kLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnByb21va29kX190ZXh0aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMC40MXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDcuNXZ3O1xuICAgIHBhZGRpbmctbGVmdDogMi4yMSU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtaG9tZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtcGFydHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnByb21va29kX19saW5rcy13cmFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAzLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAzLjQ1dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0ge1xuICAgIHdpZHRoOiAxOC4zNyU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMTl2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHAge1xuICAgIGZvbnQtc2l6ZTogMi4ydnc7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyB7XG4gICAgd2lkdGg6IDUuOTQlO1xuICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40NnZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgcGFkZGluZzogMXZoIDUuNCUgMXZoIDUuNCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gICAgcGFkZGluZzogMXZoIDguNDYlIDF2aCA4LjQ2JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogNC4wNXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgdG9wOiA4MHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgdG9wOiA3NXZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5wcm9tb2tvZF9fY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTkuMDclO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwN3B4O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAzNC4xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIHBhZGRpbmc6IDAuNXB4IDBweCAwLjVweCA5cHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwOm50aC1jaGlsZCgyKSB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcDpudGgtY2hpbGQoMykge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLXBhcnR5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMjJweDtcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgdG9wOiA5MnZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiAyNTVweDtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICBib3R0b206IDdweDtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMTMuMzZweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAyNTVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XG4gICAgZm9udC1zaXplOiAxMi45NXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0ge1xuICAgIHdpZHRoOiA0NnB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBmb250LXNpemU6IDguNjRweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMgaW1nIHtcbiAgICB3aWR0aDogMTJweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gICAgZm9udC1zaXplOiAxNi4zMXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgLmlucHV0X19pbmJ1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTIuMzVweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMXB4IDlweCAyMXB4O1xuICAgIGZvbnQtc2l6ZTogMTEuMzZweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMTQuNzZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDFweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromokodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-promokod',
          templateUrl: './promokod.component.html',
          styleUrls: ['./promokod.component.scss']
        }]
      }], function () {
        return [{
          type: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
        }, {
          type: _streets_service__WEBPACK_IMPORTED_MODULE_3__["StreetsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/promokod/rules/rules.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/promokod/rules/rules.component.ts ***!
    \***************************************************/

  /*! exports provided: RulesComponent */

  /***/
  function srcAppPromokodRulesRulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesComponent", function () {
      return RulesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RulesComponent = /*#__PURE__*/function () {
      function RulesComponent(route) {
        _classCallCheck(this, RulesComponent);

        this.route = route;
      }

      _createClass(RulesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.queryParams.subscribe(function (params) {
            _this2.name = params['rules'];
          });
        }
      }]);

      return RulesComponent;
    }();

    RulesComponent.ɵfac = function RulesComponent_Factory(t) {
      return new (t || RulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    RulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RulesComponent,
      selectors: [["app-rules"]],
      decls: 23,
      vars: 0,
      consts: [[1, "rules-wrap"], ["routerLink", "", 1, "rules__button"]],
      template: function RulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u0440a\u0432\u0438\u043B\u0430 \u0430\u043A\u0446\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0429\u043E \u0442\u0430\u043A\u0435 Lorem Ipsum?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem Ipsum - \u0446\u0435 \u0442\u0435\u043A\u0441\u0442-\"\u0440\u0438\u0431\u0430\", \u0449\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0432 \u0434\u0440\u0443\u043A\u0430\u0440\u0441\u0442\u0432\u0456 \u0442\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0456. Lorem Ipsum \u0454, \u0444\u0430\u043A\u0442\u0438\u0447\u043D\u043E, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u044E \"\u0440\u0438\u0431\u043E\u044E\" \u0430\u0436 \u0437 XVI \u0441\u0442\u043E\u0440\u0456\u0447\u0447\u044F, \u043A\u043E\u043B\u0438 \u043D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u0434\u0440\u0443\u043A\u0430\u0440 \u0432\u0437\u044F\u0432 \u0448\u0440\u0438\u0444\u0442\u043E\u0432\u0443 \u0433\u0440\u0430\u043D\u043A\u0443 \u0442\u0430 \u0441\u043A\u043B\u0430\u0432 \u043D\u0430 \u043D\u0456\u0439 \u043F\u0456\u0434\u0431\u0456\u0440\u043A\u0443 \u0437\u0440\u0430\u0437\u043A\u0456\u0432 \u0448\u0440\u0438\u0444\u0442\u0456\u0432. \"\u0420\u0438\u0431\u0430\" \u043D\u0435 \u0442\u0456\u043B\u044C\u043A\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u0436\u0438\u043B\u0430 \u043F'\u044F\u0442\u044C \u0441\u0442\u043E\u043B\u0456\u0442\u044C, \u0430\u043B\u0435 \u0439 \u043F\u0440\u0438\u0436\u0438\u043B\u0430\u0441\u044F \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u043C\u0443 \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u0456, \u0437\u0430\u043B\u0438\u0448\u0430\u044E\u0447\u0438\u0441\u044C \u043F\u043E \u0441\u0443\u0442\u0456 \u043D\u0435\u0437\u043C\u0456\u043D\u043D\u043E\u044E. \u0412\u043E\u043D\u0430 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u0438\u0437\u0443\u0432\u0430\u043B\u0430\u0441\u044C \u0432 60-\u0438\u0445 \u0440\u043E\u043A\u0430\u0445 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0441\u0442\u043E\u0440\u0456\u0447\u0447\u044F \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u0432\u0438\u0434\u0430\u043D\u043D\u044E \u0437\u0440\u0430\u0437\u043A\u0456\u0432 \u0448\u0440\u0438\u0444\u0442\u0456\u0432 Letraset, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u0438\u043B\u0438 \u0443\u0440\u0438\u0432\u043A\u0438 \u0437 Lorem Ipsum, \u0456 \u0432\u0434\u0440\u0443\u0433\u0435 - \u043D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u043E \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430\u043C \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u043E\u0433\u043E \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043A\u0448\u0442\u0430\u043B\u0442 Aldus Pagemaker, \u044F\u043A\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043B\u0438 \u0440\u0456\u0437\u043D\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 Lorem Ipsum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0427\u043E\u043C\u0443 \u043C\u0438 \u043D\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0454\u043C\u043E\u0441\u044C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0412\u0436\u0435 \u0434\u0430\u0432\u043D\u043E \u0432\u0456\u0434\u043E\u043C\u043E, \u0449\u043E \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0438\u0439 \u0437\u043C\u0456\u0441\u0442 \u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u0436\u0430\u0442\u0438 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u0442\u0438\u0441\u044C \u043B\u044E\u0434\u0438\u043D\u0456, \u044F\u043A\u0430 \u043E\u0446\u0456\u043D\u044E\u0454 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438. \u0421\u0435\u043D\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F Lorem Ipsum \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0446\u0435\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0430\u0454 \u0431\u0456\u043B\u044C\u0448-\u043C\u0435\u043D\u0448 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0442\u0435\u0440 \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \"\u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442. \u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442.\" \u0426\u0435 \u0440\u043E\u0431\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u0445\u043E\u0436\u0438\u043C \u043D\u0430 \u043E\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439. \u0411\u0430\u0433\u0430\u0442\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C Lorem Ipsum \u044F\u043A \u0437\u0440\u0430\u0437\u043E\u043A \u0456 \u043F\u043E\u0448\u0443\u043A \u0437\u0430 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \"lorem ipsum\" \u0432\u0456\u0434\u043A\u0440\u0438\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u044F\u043A\u0456 \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0449\u0435 \u0432 \u0437\u0430\u0440\u043E\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u0441\u0442\u0430\u043D\u0456. \u0420\u0456\u0437\u043D\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 Lorem Ipsum \u0437'\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0437\u0430 \u043C\u0438\u043D\u0443\u043B\u0456 \u0440\u043E\u043A\u0438, \u0434\u0435\u044F\u043A\u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E, \u0434\u0435\u044F\u043A\u0456 \u0431\u0443\u043B\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0443\u043C\u0438\u0441\u043D\u043E (\u0437\u043E\u043A\u0440\u0435\u043C\u0430, \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0456). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0417\u0432\u0456\u0434\u043A\u0438 \u0432\u0456\u043D \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u041D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u043E\u0457 \u0434\u0443\u043C\u043A\u0438 Lorem Ipsum \u043D\u0435 \u0454 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u0438\u043C \u043D\u0430\u0431\u043E\u0440\u043E\u043C \u043B\u0456\u0442\u0435\u0440. \u0412\u0456\u043D \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0437 \u0443\u0440\u0438\u0432\u043A\u0443 \u043A\u043B\u0430\u0441\u0438\u0447\u043D\u043E\u0457 \u043B\u0430\u0442\u0438\u043D\u0441\u044C\u043A\u043E\u0457 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0438 45 \u0440\u043E\u043A\u0443 \u0434\u043E \u043D.\u0435., \u0442\u043E\u0431\u0442\u043E \u043C\u0430\u0454 \u0431\u0456\u043B\u044C\u0448 \u044F\u043A 2000-\u0440\u0456\u0447\u043D\u0443 \u0456\u0441\u0442\u043E\u0440\u0456\u044E. \u0420\u0456\u0447\u0430\u0440\u0434 \u041C\u0430\u043A\u043A\u043B\u0456\u043D\u0442\u043E\u043A, \u043F\u0440\u043E\u0444\u0435\u0441\u043E\u0440 \u043B\u0430\u0442\u0438\u043D\u0438 \u0437 \u043A\u043E\u043B\u0435\u0434\u0436\u0443 \u0425\u0435\u043C\u043F\u0434\u0456\u043D-\u0421\u0438\u0434\u043D\u0456, \u0449\u043E \u0443 \u0412\u0456\u0440\u0434\u0436\u0456\u043D\u0456\u0457, \u0432\u0438\u0432\u0447\u0430\u0432 \u043E\u0434\u043D\u0435 \u0437 \u043D\u0430\u0439\u043C\u0435\u043D\u0448 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0438\u0445 \u043B\u0430\u0442\u0438\u043D\u0441\u044C\u043A\u0438\u0445 \u0441\u043B\u0456\u0432 - consectetur - \u0437 \u0443\u0440\u0438\u0432\u043A\u0443 Lorem Ipsum, \u0456 \u0443 \u043F\u043E\u0448\u0443\u043A\u0443 \u0446\u044C\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 \u0432 \u043A\u043B\u0430\u0441\u0438\u0447\u043D\u0456\u0439 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0456 \u0437\u043D\u0430\u0439\u0448\u043E\u0432 \u0431\u0435\u0437\u0441\u0443\u043C\u043D\u0456\u0432\u043D\u0435 \u0434\u0436\u0435\u0440\u0435\u043B\u043E. Lorem Ipsum \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u0456\u0432 1.10.32 \u0442\u0430 1.10.33 \u0446\u0438\u0446\u0435\u0440\u043E\u043D\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \"de Finibus Bonorum et Malorum\" (\"\u041F\u0440\u043E \u043C\u0435\u0436\u0456 \u0434\u043E\u0431\u0440\u0430 \u0456 \u0437\u043B\u0430\"), \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E\u0433\u043E \u0443 45 \u0440\u043E\u0446\u0456 \u0434\u043E \u043D.\u0435. \u0426\u0435\u0439 \u0442\u0440\u0430\u043A\u0442\u0430\u0442 \u0437 \u0442\u0435\u043E\u0440\u0456\u0457 \u0435\u0442\u0438\u043A\u0438 \u0431\u0443\u0432 \u0434\u0443\u0436\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0438\u043C \u0432 \u0435\u043F\u043E\u0445\u0443 \u0412\u0456\u0434\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F. \u041F\u0435\u0440\u0448\u0438\u0439 \u0440\u044F\u0434\u043E\u043A Lorem Ipsum, \"Lorem ipsum dolor sit amet...\" \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0437 \u043E\u0434\u043D\u043E\u0433\u043E \u0437 \u0440\u044F\u0434\u043A\u0456\u0432 \u0440\u043E\u0437\u0434\u0456\u043B\u0443 1.10.32.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043D\u0438\u0439 \u0437 XVI \u0441\u0442\u043E\u0440\u0456\u0447\u0447\u044F, \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0438\u0436\u0447\u0435 \u0434\u043B\u044F \u0432\u0441\u0456\u0445 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u0435\u043D\u0438\u0445. \u0422\u0430\u043A\u043E\u0436 \u0442\u043E\u0447\u043D\u043E \u0437\u0430 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u043E\u043C \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u043E \u0440\u043E\u0437\u0434\u0456\u043B\u0438 1.10.32 \u0442\u0430 1.10.33 \u0446\u0438\u0446\u0435\u0440\u043E\u043D\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \"de Finibus Bonorum et Malorum\" \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u043E\u043C \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E, \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0438\u043C 1914 \u0440\u043E\u043A\u0443 \u0425.\u0420\u0435\u043A\u0435\u043C\u043E\u043C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0414\u0435 \u0441\u043E\u0431\u0456 \u0432\u0437\u044F\u0442\u0438 \u0442\u0440\u043E\u0445\u0438?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0406\u0441\u043D\u0443\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0430\u0440\u0456\u0430\u0446\u0456\u0439 \u0443\u0440\u0438\u0432\u043A\u0456\u0432 \u0437 Lorem Ipsum, \u0430\u043B\u0435 \u0431\u0456\u043B\u044C\u0448\u0456\u0441\u0442\u044C \u0437 \u043D\u0438\u0445 \u0437\u0430\u0437\u043D\u0430\u043B\u0430 \u043F\u0435\u0432\u043D\u0438\u0445 \u0437\u043C\u0456\u043D \u043D\u0430 \u043A\u0448\u0442\u0430\u043B\u0442 \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0438\u0445 \u0432\u0441\u0442\u0430\u0432\u043E\u043A \u0430\u0431\u043E \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043B\u0456\u0432, \u044F\u043A\u0456 \u043D\u0430\u0432\u0456\u0442\u044C \u043D\u0435 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u0434\u043E\u043F\u043E\u0434\u0456\u0431\u043D\u043E. \u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u0442\u0435\u0441\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 Lorem Ipsum, \u0432\u0438 \u043C\u0430\u0454\u0442\u0435 \u0443\u043F\u0435\u0432\u043D\u0438\u0442\u0438\u0441\u044C \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0442\u0435\u043A\u0441\u0442\u0443 \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E \u043D\u0456\u0447\u043E\u0433\u043E, \u0449\u043E \u043C\u043E\u0433\u043B\u043E \u0431 \u0432\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0443 \u0447\u0438\u0442\u0430\u0447\u0430 \u043A\u043E\u043D\u0444\u0443\u0437. \u0411\u0456\u043B\u044C\u0448\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u043E\u043C\u0438\u0445 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432 Lorem Ipsum \u0432 \u041C\u0435\u0440\u0435\u0436\u0456 \u0433\u0435\u043D\u0435\u0440\u0443\u044E\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0448\u043B\u044F\u0445\u043E\u043C \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u043D\u044F \u043D\u0430\u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0434\u0430\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u043E\u0441\u0442\u0435\u0439 Lorem Ipsum. \u041F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u0456\u0441\u0442\u044C \u0446\u044C\u043E\u0433\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0440\u043E\u0431\u0438\u0442\u044C \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0448\u0438\u043C \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u043C \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C Lorem Ipsum. \u0412\u0456\u043D \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0441\u043B\u043E\u0432\u043D\u0438\u043A \u0437 \u0431\u0456\u043B\u044C\u0448 \u044F\u043A 200 \u0441\u043B\u0456\u0432 \u043B\u0430\u0442\u0438\u043D\u0438 \u0442\u0430 \u0446\u0456\u043B\u0438\u0439 \u043D\u0430\u0431\u0456\u0440 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0440\u0435\u0447\u0435\u043D\u044C - \u0446\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0433\u0435\u043D\u0435\u0440\u0443\u0432\u0430\u0442\u0438 Lorem Ipsum, \u044F\u043A\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0454 \u043E\u0441\u043C\u0438\u0441\u043B\u0435\u043D\u043E. \u0422\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0437\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 Lorem Ipsum \u043D\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u0438\u043C\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0456\u0432, \u0436\u0430\u0440\u0442\u0456\u0432, \u043D\u0435\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u0438\u0445 \u0434\u043B\u044F \u043B\u0430\u0442\u0438\u043D\u0438 \u0441\u043B\u0456\u0432 \u0456 \u0442.\u0456\u043D.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".rules-popup[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.rules-position[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.rules-wrap[_ngcontent-%COMP%] {\n  z-index: 2;\n  padding: 10px;\n  top: 20%;\n  color: #fff;\n}\n.rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 1.5em;\n}\n.rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.rules__button[_ngcontent-%COMP%] {\n  padding: 2.5px 5px;\n  background-color: #55f91b;\n  color: #004a99;\n  border: 1.5px solid #004a99;\n  cursor: pointer;\n}\n@media only screen and (min-width: 1681px) {\n  .rules__button[_ngcontent-%COMP%] {\n    width: 2vw;\n    font-size: 1.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%] {\n    width: 59.52vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1vw;\n  }\n}\n@media only screen and (max-width: 1681px) {\n  .rules__button[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    font-size: 15px;\n  }\n  .rules-wrap[_ngcontent-%COMP%] {\n    width: 59.52vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    letter-spacing: 1px;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .rules-wrap[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 18vh;\n    font-size: 30px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 15vh;\n    margin-bottom: 15px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 10vh;\n  }\n}\n@media only screen and (max-width: 414px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9rb2QvcnVsZXMvRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZy9zcmNcXGFwcFxccHJvbW9rb2RcXHJ1bGVzXFxydWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvbW9rb2QvcnVsZXMvcnVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDRSxZQUFBO0FDTEo7QURRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ05KO0FEU0U7RUFLRSxVQUFBO0VBR0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDYko7QURlSTtFQUNFLGtCQUFBO0FDYk47QURnQkk7O0VBRUUsa0JBQUE7QUNkTjtBRGlCSTtFQUNFLG1CQUFBO0FDZk47QURrQkk7RUFDRSxtQkFBQTtBQ2hCTjtBRG9CRTtFQUNFLGtCQUFBO0VBQ0EseUJBakRVO0VBa0RWLGNBakRTO0VBa0RULDJCQUFBO0VBQ0EsZUFBQTtBQ2xCSjtBRHNCQTtFQUVJO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDcEJKO0VEdUJFO0lBQ0UsY0FBQTtFQ3JCSjtFRHVCSTtJQUNFLGdCQUFBO0VDckJOO0VEd0JJO0lBQ0UsZ0JBQUE7RUN0Qk47RUR5Qkk7SUFDRSxnQkFBQTtFQ3ZCTjtBQUNGO0FENEJBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUMzQko7RUQ4QkU7SUFDRSxjQUFBO0VDNUJKO0VEOEJJO0lBQ0UsZ0JBQUE7RUM1Qk47RUQrQkk7SUFDRSxlQUFBO0VDN0JOO0VEZ0NJO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDOUJOO0FBQ0Y7QURtQ0E7RUFHTTtJQUNFLGVBQUE7RUNuQ047QUFDRjtBRHdDQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUN2Q0o7RUR5Q0k7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUN2Q047QUFDRjtBRDRDQTtFQUlNO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQzdDTjtBQUNGO0FEa0RBO0VBSU07SUFDRSxnQkFBQTtFQ25ETjtBQUNGO0FEd0RBO0VBS007SUFDRSxtQkFBQTtFQzFETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvbW9rb2QvcnVsZXMvcnVsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3JlZW4tY29sb3I6ICM1NWY5MWI7XHJcbiRibHVlLWNvbG9yOiAjMDA0YTk5O1xyXG5cclxuXHJcblxyXG4ucnVsZXMge1xyXG4gICYtcG9wdXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi1wb3NpdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi13cmFwIHtcclxuICAgIC8vIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAvL2hlaWdodDogNTB2aDtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gYm9yZGVyOiAzcHggc29saWQgJGJsdWUtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBoMyxcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWluZGVudDogMS41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDIuNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgJGJsdWUtY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODFweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICB3aWR0aDogMnZ3O1xyXG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICYtd3JhcCB7XHJcbiAgICAgIHdpZHRoOiA1OS41MnZ3O1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODFweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi13cmFwIHtcclxuICAgICAgd2lkdGg6IDU5LjUydnc7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcclxuICAucnVsZXMge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmLXdyYXAge1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmLXdyYXAge1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICAucnVsZXMge1xyXG5cclxuICAgICYtd3JhcCB7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucnVsZXMtcG9wdXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucnVsZXMtcG9zaXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJ1bGVzLXdyYXAge1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IDIwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucnVsZXMtd3JhcCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ydWxlcy13cmFwIGgzLFxuLnJ1bGVzLXdyYXAgcCB7XG4gIHRleHQtaW5kZW50OiAxLjVlbTtcbn1cbi5ydWxlcy13cmFwIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ydWxlcy13cmFwIHAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnJ1bGVzX19idXR0b24ge1xuICBwYWRkaW5nOiAyLjVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWY5MWI7XG4gIGNvbG9yOiAjMDA0YTk5O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMDRhOTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcbiAgLnJ1bGVzX19idXR0b24ge1xuICAgIHdpZHRoOiAydnc7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgfVxuICAucnVsZXMtd3JhcCB7XG4gICAgd2lkdGg6IDU5LjUydnc7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgcCB7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgxcHgpIHtcbiAgLnJ1bGVzX19idXR0b24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLnJ1bGVzLXdyYXAge1xuICAgIHdpZHRoOiA1OS41MnZ3O1xuICB9XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXZ3O1xuICB9XG4gIC5ydWxlcy13cmFwIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgLnJ1bGVzLXdyYXAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAucnVsZXMtd3JhcCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAxOHZoO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucnVsZXMtd3JhcCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rules',
          templateUrl: './rules.component.html',
          styleUrls: ['./rules.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _streets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../streets.service */
    "./src/app/streets.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../congratulation/congratulation.component */
    "./src/app/congratulation/congratulation.component.ts");

    function RegistrationComponent_p_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u042F\u043A\u0449\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0443 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0431\u0443\u0434\u0438\u043D\u043E\u043A, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0432 \u043F\u043E\u043B\u0435 \"\u2116 \u043A\u0432.\" \u0432\u0432\u0435\u0434\u0438\u0442\u044C \u0434\u0435\u0444\u0456\u0441 \u0447\u0438 \u0442\u0438\u0440\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 29);
      }

      if (rf & 2) {
        var street_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", street_r7.name);
      }
    }

    function RegistrationComponent_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 30);
      }

      if (rf & 2) {
        var number_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", number_r8);
      }
    }

    function RegistrationComponent_div_36_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_div_36_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var i_r11 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.onSelect(i_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10);
      }
    }

    function RegistrationComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_36_div_1_Template, 2, 1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.time);
      }
    }

    function RegistrationComponent_app_congratulation_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-congratulation", 34);
      }
    }

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(streetsService) {
        _classCallCheck(this, RegistrationComponent);

        this.streetsService = streetsService;
        this.time = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00'];
        this.timeItem = false;
        this.submitted = false;
        this.flatPopup = false;
        this.congratulation = false;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validationAge();
          this.geStreets();
        }
      }, {
        key: "chooseTime",
        value: function chooseTime() {
          this.timeItem = !this.timeItem;
          document.getElementById("timeText").classList.toggle("select-arrow-active");
        }
      }, {
        key: "geStreets",
        value: function geStreets() {
          var _this3 = this;

          this.streetsService.getData().subscribe(function (items) {
            return _this3.items = items;
          });
        }
      }, {
        key: "geHouse",
        value: function geHouse() {
          var _this4 = this;

          var numberValue = document.getElementById("adress__street").value;
          this.streetsService.getHouse(numberValue).subscribe(function (house) {
            return _this4.house = house;
          });
          this.numbers = this.house.number;
          this.numbers.sort(function (a, b) {
            return a - b;
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(i) {
          this.selectedTime = this.time[i];
          document.getElementById("timeText").innerHTML = this.selectedTime;
          document.getElementById("inputTime").value = this.selectedTime;
          this.chooseTime();
        }
      }, {
        key: "validationAge",
        value: function validationAge() {
          function setInputFilter(textbox, inputFilter) {
            ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
              textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                  this.oldValue = this.value;
                  this.oldSelectionStart = this.selectionStart;
                  this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                  this.value = this.oldValue;
                  this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                  this.value = "";
                }
              });
            });
          }

          setInputFilter(document.getElementById("age"), function (value) {
            return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 100);
          });
          setInputFilter(document.getElementById("phone"), function (value) {
            return /^\+[380]*([0-9]{2}[0-9]{2}|)*$/.test(value);
          });
        }
      }, {
        key: "valueCheck",
        value: function valueCheck() {
          var name = document.getElementById("name");
          var age = document.getElementById("age");
          var phone = document.getElementById("phone");
          var street = document.getElementById("adress__street");
          var house = document.getElementById("adress__house");
          var flat = document.getElementById("adress__flat");
          var inputTime = document.getElementById("inputTime");

          if (name.value == "") {
            name.style.borderColor = "red";
            event.preventDefault();
          } else {
            name.style.borderColor = "#afb0af";
          }

          if (age.value < "18") {
            age.style.borderColor = "red";
            event.preventDefault();
          } else {
            age.style.borderColor = "#afb0af";
          }

          if (phone.value == "") {
            phone.style.borderColor = "red";
            event.preventDefault();
          } else {
            phone.style.borderColor = "#afb0af";
          }

          if (street.value == "") {
            street.style.borderColor = "red";
            event.preventDefault();
          } else {
            street.style.borderColor = "#afb0af";
          }

          if (house.value == "") {
            house.style.borderColor = "red";
            event.preventDefault();
          } else {
            house.style.borderColor = "#afb0af";
          }

          if (flat.value == "") {
            flat.style.borderColor = "red";
            this.flatPopup = true;
            event.preventDefault();
          } else {
            flat.style.borderColor = "#afb0af";
            this.flatPopup = false;
          }

          if (inputTime.value == "") {
            document.getElementById("timeText").style.borderColor = "red";
            event.preventDefault();
          } else {
            document.getElementById("timeText").style.borderColor = "#afb0af";
          }

          if (name.value !== "" && age.value >= "18" && phone.value !== "" && street.value !== "" && house.value !== "" && flat.value !== "" && inputTime.value !== "") {
            this.congratulation = true;
          }
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_streets_service__WEBPACK_IMPORTED_MODULE_1__["StreetsService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 41,
      vars: 5,
      consts: [[1, "registration"], [1, "registration-wrap"], [1, "registration__title"], [1, "title-last"], [1, "registration__form-wrap"], ["name", "hidden_iframe", "id", "hidden_iframe", "onload", "if(submitted) {}", 2, "display", "none"], ["action", "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeGl8-rxMlP7mUG14Dl2bzPTpSxCxrZVJi9HVjQLgoYFbAZIw/formResponse", "method", "post", "target", "hidden_iframe", "onsubmit", "submitted = true", 1, "registration__form"], ["id", "name", "type", "text", "placeholder", "\u041F\u0406\u0411", "name", "entry.1164165259"], ["id", "age", "type", "text", "placeholder", "\u0412\u0456\u043A", "name", "entry.655215280"], ["id", "phone", "type", "tel", "placeholder", "\u041C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0439 +380", "name", "entry.2093370698", "maxlength", "13"], ["class", "form__flat-validation", 4, "ngIf"], [1, "form__adress"], [1, "adress__street"], ["id", "adress__street", "type", "text", "placeholder", "\u0412\u0443\u043B\u0438\u0446\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 (\u043C.\u041A\u0438\u0457\u0432)", "name", "entry.603895323", "list", "dynmicStreetsIds", 3, "input"], ["id", "dynmicStreetsIds", 1, "adress__street-item-wrap"], ["class", "adress__street-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "adress__house"], ["id", "adress__house", "type", "text", "placeholder", "\u2116 \u0431\u0443\u0434.", "name", "entry.1082754812", "list", "dynmicHouseIds"], ["id", "dynmicHouseIds", 1, "adress__house-item-wrap"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "adress__flat", "type", "text", "placeholder", "\u2116 \u043A\u0432.", "name", "entry.1184917692", 1, "adress__flat"], [1, "custom-select"], ["type", "text", "id", "inputTime", "name", "entry.78551953"], ["id", "timeText", 1, "select-selected", 3, "click"], ["class", "select-items", 4, "ngIf"], ["rows", "3", "name", "entry.2048610841", "placeholder", "\u0412\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440", "lass", "form__comment"], ["type", "submit", 3, "click"], ["class", "congratulation-wrap", 4, "ngIf"], [1, "form__flat-validation"], [1, "adress__street-item", 3, "value"], [3, "value"], [1, "select-items"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "congratulation-wrap"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u0412\u0415\u0414\u0406\u0422\u042C \u0414\u0410\u041D\u0406");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0414\u041B\u042F \u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0418");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME PARTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MASTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegistrationComponent_p_18_Template, 2, 0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_21_listener() {
            return ctx.geHouse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "datalist", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_option_24_Template, 1, 1, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "datalist", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistrationComponent_option_29_Template, 1, 1, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_div_click_33_listener() {
            return ctx.chooseTime();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0417\u0440\u0443\u0447\u043D\u0438\u0439 \u0447\u0430\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegistrationComponent_div_36_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "textarea", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_38_listener() {
            return ctx.valueCheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegistrationComponent_app_congratulation_40_Template, 1, 0, "app-congratulation", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flatPopup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timeItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.congratulation);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_3__["CongratulationComponent"]],
      styles: [".registration[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.registration-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n.registration__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 155px;\n}\n.registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 3.285px 37px 3.285px 56px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  letter-spacing: -2.5px;\n  font-size: 104.43px;\n  line-height: 100%;\n  color: #fff;\n  background-color: #004a99;\n}\n.registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n  margin-bottom: 11vh;\n}\n.registration__form-wrap[_ngcontent-%COMP%] {\n  width: 515px;\n  margin-right: auto;\n  margin-left: auto;\n  position: relative;\n}\n.registration__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  top: 26vh;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 31.62px;\n  line-height: 100%;\n  padding: 9.5px 22px;\n  box-sizing: border-box;\n  border: 1px solid #afb0af;\n  margin-bottom: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 10px;\n  position: relative;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street-item-wrap[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  background-color: #fff;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin-top: -12px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-right: 10px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9.5px 15px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 9.5px 15px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__flat-validation[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  border: 1px solid red;\n  font-family: \"DIN Pro Cond Light\";\n  text-align: center;\n  color: #f1f1f1;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 12px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-top: 3px solid #c7c7c6;\n  border-right: 3px solid #c7c7c6;\n  transform: rotate(135deg);\n  right: 46px;\n  bottom: 25px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n  bottom: 12px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 31.62px;\n  line-height: 100%;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.5);\n  padding: 12.5px 22px;\n  border: 1px solid transparent;\n  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #55f91b;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  height: 115px;\n  overflow-x: scroll;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover, .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .same-as-selected[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #004a99;\n}\n.registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 24px 47px 24px 47px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 30.59px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 14px;\n  cursor: pointer;\n}\n.congratulation-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (min-width: 2880px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 31px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 18px;\n  }\n}\n@media only screen and (min-width: 3200px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 37px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 24px;\n  }\n}\n@media only screen and (min-width: 5120px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 50px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 37px;\n  }\n}\n@media only screen and (min-width: 6400px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 65px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 52px;\n  }\n}\n@media only screen and (min-width: 1681px) {\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14.35vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6vw;\n    padding: 3.285px 2.2vw 3.285px 3.33vw;\n    margin-bottom: 0.92vh;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%] {\n    height: 11vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 3vh;\n    border-radius: 0.45vw;\n  }\n}\n@media only screen and (max-width: 1677px) {\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 1.26vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 1.25vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 20px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 8px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n    padding: 2.28vh 9% 2.28vh 9%;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 29.57vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 14px;\n    width: 15px;\n    height: 15px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.35vw;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .registration[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 12px;\n    width: 12px;\n    height: 12px;\n  }\n  .registration[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 6px;\n  }\n}\n@media only screen and (max-width: 835px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 20.31vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.96px;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 35vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 2.26vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%] {\n    height: 14vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 2.25vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 10px;\n    width: 11px;\n    height: 11px;\n    right: 24px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 2px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n    padding: 2.28vh 9% 2.28vh 9%;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 20.31vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.96px;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 0.735vh 2.26vw;\n    margin-bottom: 10px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1.959vh 9% 1.95vh 9%;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 35vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 1vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 1vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 10px;\n    width: 11px;\n    height: 11px;\n    right: 24px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 2px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (max-width: 736px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 3.285px 37px 3.285px 22px;\n  }\n}\n@media only screen and (max-width: 667px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 7px;\n    width: 9px;\n    height: 9px;\n    right: 24px;\n    border-top: 1.5px solid #c7c7c6;\n    border-right: 1.5px solid #c7c7c6;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-radius: 7px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 17vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 8.2vw;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 72.26%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 35vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 1vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 1vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 7px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 2px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 17vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 8.2vw;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 72.26%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n}\n@media only screen and (max-width: 384px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 14px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__flat-validation[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 29.78px;\n    margin-bottom: 6px;\n    padding: 2px 15px 2px 9px;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 17px;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 15.65px;\n    padding: 0.883vh 5px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    padding: 1.15vh 5px;\n  }\n  .registration[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14.69px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmcvc3JjXFxhcHBcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtBQ0ZGO0FESUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkEzQk87QUN3QmI7QURPTTtFQUVFLG1CQUFBO0FDTlI7QURXRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEYUk7O0VBRUUsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1hOO0FEY0k7RUFDRSxZQUFBO0FDWk47QURnQk07RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ2RSO0FEaUJVO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNmWjtBRGlCWTtFQUNFLFdBQUE7QUNmZDtBRGtCWTtFQUNFLGFBQUE7QUNoQmQ7QURvQlU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNsQlo7QURxQlU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQ25CWjtBRHNCVTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ3BCWjtBRHNCWTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ3BCZDtBRHVCWTtFQUNFLGFBQUE7QUNyQmQ7QUR3Qlk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ3RCZDtBRG9CWTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FDdEJkO0FEb0JZO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUN0QmQ7QURvQlk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ3RCZDtBRDBCVTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ3hCWjtBRDZCTTtFQUNFLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzNCUjtBRCtCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUM3Qk47QUQrQk07RUFDRSxhQUFBO0FDN0JSO0FEZ0NNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDOUJSO0FEaUNNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDL0JSO0FEa0NNOztFQUVFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0VBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNoQ1I7QURtQ007RUFDRSxrQkFBQTtFQUNBLHlCQXpMTTtFQTBMTixTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDakNSO0FEb0NNOztFQUVFLG9DQUFBO0VBQ0EsY0FwTUs7QUNrS2I7QURzQ0k7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkE3TVE7RUE4TVIsWUFBQTtFQUNBLGNBOU1PO0VBK01QLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDcENOO0FEeUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN0Q0Y7QUR5Q0E7RUFJUTtJQUNFLFlBQUE7RUN6Q1I7RUQ0Q007SUFDRSxZQUFBO0VDMUNSO0FBQ0Y7QURnREE7RUFJUTtJQUNFLFlBQUE7RUNqRFI7RURvRE07SUFDRSxZQUFBO0VDbERSO0FBQ0Y7QUR3REE7RUFJUTtJQUNFLFlBQUE7RUN6RFI7RUQ0RE07SUFDRSxZQUFBO0VDMURSO0FBQ0Y7QURnRUE7RUFJUTtJQUNFLFlBQUE7RUNqRVI7RURvRU07SUFDRSxZQUFBO0VDbEVSO0FBQ0Y7QUR5RUE7RUFFSTtJQUNFLG9CQUFBO0VDeEVKO0VEMkVFO0lBQ0UsY0FBQTtJQUNBLHFDQUFBO0lBQ0EscUJBQUE7RUN6RUo7RUQ0RUU7SUFDRSxjQUFBO0VDMUVKO0VEK0VJOztJQUVFLGNBQUE7RUM3RU47RURnRkk7OztJQUdFLGNBQUE7RUM5RU47RURpRkk7SUFDRSxZQUFBO0VDL0VOO0VEa0ZJO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VDaEZOO0FBQ0Y7QURxRkE7RUFFSTtJQUNFLGlCQUFBO0VDcEZKO0VEc0ZJO0lBQ0UsZ0JBQUE7RUNwRk47RUQwRkk7O0lBRUUsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLG9CQUFBO0VDeEZOO0VENkZNO0lBRUUscUJBQUE7RUM1RlI7RURnR0k7SUFDRSxvQkFBQTtFQzlGTjtFRGdHTTs7SUFFRSxpQkFBQTtJQUNBLHNCQUFBO0VDOUZSO0VEaUdNO0lBQ0UsWUFBQTtFQy9GUjtFRGtHTTtJQUNFLFdBQUE7RUNoR1I7RURvR0k7SUFDRSxnQkFBQTtJQUNBLDRCQUFBO0VDbEdOO0FBQ0Y7QUR1R0E7RUFFSTtJQUNFLGFBQUE7RUN0R0o7RUR5R0U7SUFDRSxZQUFBO0VDdkdKO0VEeUdJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDdkdOO0VENEdNO0lBRUUscUJBQUE7RUMzR1I7QUFDRjtBRGtIQTtFQUdNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDbEhOO0VEcUhJO0lBQ0UsV0FBQTtFQ25ITjtBQUNGO0FEd0hBO0VBRUk7SUFDRSxzQkFBQTtFQ3ZISjtFRDBIRTtJQUNFLG9CQUFBO0VDeEhKO0VEMEhJO0lBQ0Usa0JBQUE7RUN4SE47RUQySEk7SUFDRSxtQkFBQTtFQ3pITjtFRDZIRTtJQUNFLE1BQUE7RUMzSEo7RUQ2SEk7O0lBRUUsa0JBQUE7RUMzSE47RURnSU07O0lBRUUsa0JBQUE7RUM5SFI7RURpSU07SUFDRSxZQUFBO0VDL0hSO0VEbUlNO0lBQ0UsWUFBQTtFQ2pJUjtFRHFJSTtJQUNFLGtCQUFBO0VDbklOO0VEdUlFO0lBQ0UsWUFBQTtFQ3JJSjtBQUNGO0FEeUlBO0VBRUk7SUFDRSxtQkFBQTtFQ3hJSjtFRDJJRTtJQUNFLGlCQUFBO0VDeklKO0VEMklJO0lBQ0UsZ0JBQUE7RUN6SU47RUQ2SUU7SUFDRSxhQUFBO0VDM0lKO0VEOElFO0lBQ0UsU0FBQTtFQzVJSjtFRDhJSTs7SUFFRSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7RUM1SU47RURpSk07SUFFRSxxQkFBQTtFQ2hKUjtFRG9KSTtJQUNFLG9CQUFBO0VDbEpOO0VEb0pNO0lBQ0UsWUFBQTtFQ2xKUjtFRHFKTTs7SUFFRSxpQkFBQTtJQUNBLHNCQUFBO0VDbkpSO0VEc0pNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ3BKUjtFRHVKTTtJQUNFLFdBQUE7RUNySlI7RUR5Skk7SUFDRSxnQkFBQTtJQUNBLDRCQUFBO0VDdkpOO0FBQ0Y7QUQ0SkE7RUFFSTtJQUNFLHNCQUFBO0VDM0pKO0VEOEpFO0lBQ0Usb0JBQUE7RUM1Sko7RUQ4Skk7SUFDRSxrQkFBQTtFQzVKTjtFRCtKSTtJQUVFLG1CQUFBO0VDOUpOO0VEa0tFO0lBQ0UsTUFBQTtFQ2hLSjtFRGtLSTs7SUFFRSxrQkFBQTtFQ2hLTjtFRHFLTTs7SUFFRSxrQkFBQTtFQ25LUjtFRHNLTTtJQUNFLFlBQUE7RUNwS1I7RUR3S007SUFDRSxZQUFBO0VDdEtSO0VEMEtJO0lBQ0Usa0JBQUE7RUN4S047RUQ0S0U7SUFDRSxZQUFBO0VDMUtKO0FBQ0Y7QUQ4S0E7RUFJTTs7SUFFRSx1QkFBQTtJQUNBLG1CQUFBO0VDL0tOO0VEa0xJO0lBQ0UsbUJBQUE7RUNoTE47RURtTEk7SUFDRSw2QkFBQTtFQ2pMTjtBQUNGO0FEc0xBO0VBRUk7SUFDRSxtQkFBQTtFQ3JMSjtFRHdMRTtJQUNFLGlCQUFBO0VDdExKO0VEd0xJO0lBQ0UsZ0JBQUE7RUN0TE47RUQwTEU7SUFDRSxhQUFBO0VDeExKO0VEMkxFO0lBQ0UsU0FBQTtFQ3pMSjtFRDJMSTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUN6TE47RUQ4TE07SUFFRSxxQkFBQTtFQzdMUjtFRGlNSTtJQUNFLG9CQUFBO0VDL0xOO0VEaU1NOztJQUVFLGlCQUFBO0lBQ0EsbUJBQUE7RUMvTFI7RURrTU07SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDaE1SO0VEbU1NO0lBQ0UsV0FBQTtFQ2pNUjtFRHFNSTtJQUNFLGdCQUFBO0VDbk1OO0FBQ0Y7QUR3TUE7RUFFSTtJQUNFLG1CQUFBO0VDdk1KO0VENE1JO0lBQ0Usa0NBQUE7RUMxTU47QUFDRjtBRCtNQTtFQUdNO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLCtCQUFBO0lBQ0EsaUNBQUE7RUMvTU47RURrTkk7SUFDRSxrQkFBQTtFQ2hOTjtBQUNGO0FEcU5BO0VBRUk7SUFDRSxzQkFBQTtFQ3BOSjtFRHVORTtJQUNFLGlCQUFBO0VDck5KO0VEdU5JO0lBQ0UsZ0JBQUE7RUNyTk47RUR3Tkk7SUFFRSxtQkFBQTtFQ3ZOTjtFRDJORTtJQUNFLGFBQUE7RUN6Tko7RUQ0TkU7SUFDRSxNQUFBO0VDMU5KO0VENE5JOztJQUVFLGtCQUFBO0VDMU5OO0VEK05NOztJQUVFLGtCQUFBO0VDN05SO0VEZ09NO0lBQ0UsWUFBQTtFQzlOUjtFRGtPTTtJQUNFLFlBQUE7RUNoT1I7RURvT0k7SUFDRSxrQkFBQTtFQ2xPTjtBQUNGO0FEdU9BO0VBRUk7SUFDRSxtQkFBQTtFQ3RPSjtFRHlPRTtJQUNFLGlCQUFBO0VDdk9KO0VEeU9JO0lBQ0UsZ0JBQUE7RUN2T047RUQyT0U7SUFDRSxhQUFBO0VDek9KO0VENE9FO0lBQ0UsU0FBQTtFQzFPSjtFRDRPSTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUMxT047RUQrT007SUFFRSxxQkFBQTtFQzlPUjtFRGlQTTtJQUVFLGlCQUFBO0VDaFBSO0VEb1BJO0lBQ0Usb0JBQUE7RUNsUE47RURvUE07O0lBRUUsaUJBQUE7SUFDQSxtQkFBQTtFQ2xQUjtFRHFQTTtJQUNFLFdBQUE7RUNuUFI7RURzUE07SUFDRSxXQUFBO0VDcFBSO0VEd1BJO0lBQ0UsZ0JBQUE7RUN0UE47QUFDRjtBRDJQQTtFQUVJO0lBQ0Usc0JBQUE7RUMxUEo7RUQ2UEU7SUFDRSxpQkFBQTtFQzNQSjtFRDZQSTtJQUNFLGdCQUFBO0VDM1BOO0VEOFBJO0lBRUUsa0JBQUE7RUM3UE47RURpUUU7SUFDRSxhQUFBO0VDL1BKO0VEa1FFO0lBQ0UsTUFBQTtFQ2hRSjtFRGtRSTs7SUFFRSxjQUFBO0VDaFFOO0VEcVFNOztJQUVFLGNBQUE7RUNuUVI7RURzUU07SUFDRSxZQUFBO0VDcFFSO0VEd1FNO0lBQ0UsWUFBQTtFQ3RRUjtFRDBRSTtJQUNFLGtCQUFBO0VDeFFOO0FBQ0Y7QUQ2UUE7RUFJUTtJQUNFLFlBQUE7RUM5UVI7RURrUkk7SUFDRSxlQUFBO0VDaFJOO0FBQ0Y7QURxUkE7RUFHTTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFQ3JSTjtFRHdSSTtJQUNFLG1CQUFBO0VDdFJOO0VENFJJOztJQUVFLGtCQUFBO0lBQ0Esb0JBQUE7RUMxUk47RUQrUk07O0lBRUUsbUJBQUE7RUM3UlI7RURrU0U7SUFDRSxrQkFBQTtFQ2hTSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4ucmVnaXN0cmF0aW9uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiAxNTVweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAzLjI4NXB4IDM3cHggMy4yODVweCA1NnB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTA0LjQzcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgJi1sYXN0IHtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTF2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZm9ybS13cmFwIHtcclxuICAgIHdpZHRoOiA1MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB9XHJcblxyXG4gICZfX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI2dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzEuNjJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDkuNXB4IDIycHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZmIwYWY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAmX19hZHJlc3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5hZHJlc3Mge1xyXG4gICAgICAgICAgJl9fc3RyZWV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmX19zdHJlZXQtaXRlbS13cmFwIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICZfX3N0cmVldC1pdGVtIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICZfX2hvdXNlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDkuNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJl9fZmxhdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDkuNXB4IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19mbGF0LXZhbGlkYXRpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjN2M3YzY7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2M3YzdjNjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgIHJpZ2h0OiA0NnB4O1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIGJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzEuNjJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgcGFkZGluZzogMTIuNXB4IDIycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuMSkgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0LWl0ZW1zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0LWl0ZW1zIGRpdjpob3ZlcixcclxuICAgICAgLnNhbWUtYXMtc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAyNHB4IDQ3cHggMjRweCA0N3B4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xyXG4gICAgICBmb250LXNpemU6IDMwLjU5cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb25ncmF0dWxhdGlvbi13cmFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODgwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDMxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjAwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDM3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MTIwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAzN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDAwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDY1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiA1MnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MXB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNC4zNXZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHAge1xyXG4gICAgICBmb250LXNpemU6IDZ2dztcclxuICAgICAgcGFkZGluZzogMy4yODVweCAyLjJ2dyAzLjI4NXB4IDMuMzN2dztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC45MnZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0ge1xyXG5cclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Quc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCxcclxuICAgICAgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIHtcclxuICAgICAgICBoZWlnaHQ6IDExdmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40NXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzdweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTR2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNi4ydnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19mb3JtIHtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMS4yNnZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODV2dztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCAxLjI1dnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgICBwYWRkaW5nOiAyLjI4dmggOSUgMi4yOHZoIDklO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fZm9ybS13cmFwIHtcclxuICAgICAgd2lkdGg6IDMwLjY1JTtcclxuICAgIH1cclxuXHJcbiAgICAmX19mb3JtIHtcclxuICAgICAgdG9wOiAyOS41N3ZoO1xyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm1fX2FkcmVzcyAuYWRyZXNzIHtcclxuXHJcbiAgICAgICAgJl9faG91c2UgaW5wdXQsXHJcbiAgICAgICAgJl9fZmxhdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjl2aCAwLjM1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICBib3R0b206IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDIwLjMxdmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDU2Ljk2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNS45NnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcblxyXG4gICAgICAgIC5zZWxlY3QtaXRlbXMgZGl2LFxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNS45NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDIxcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNC4zNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybS13cmFwIHtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2LjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMzV2aDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMi4yNnZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE0dmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xyXG4gICAgICAgICAgcGFkZGluZzogMS4xNXZoIDIuMjV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICByaWdodDogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgICBwYWRkaW5nOiAyLjI4dmggOSUgMi4yOHZoIDklO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDIwLjMxdmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDU2Ljk2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Qge1xyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyMXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG5cclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjczNXZoIDIuMjZ2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjk1OXZoIDklIDEuOTV2aCA5JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2LjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMzV2aDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMXZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODV2dztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMy4yODVweCAzN3B4IDMuMjg1cHggMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgI2M3YzdjNjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNjN2M3YzY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE3dmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDguMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19mb3JtLXdyYXAge1xyXG4gICAgICB3aWR0aDogNzIuMjYlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Qge1xyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyMXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2LjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMzV2aDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMXZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX3N0cmVldCxcclxuICAgICAgICAmX19ob3VzZSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODV2dztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE3dmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDguMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyMXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtX19mbGF0LXZhbGlkYXRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDI5Ljc4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxNXB4IDJweCA5cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcblxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUuNjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjg4M3ZoIDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Qge1xyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxNC42OXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucmVnaXN0cmF0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMTU1cHg7XG59XG4ucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAzLjI4NXB4IDM3cHggMy4yODVweCA1NnB4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0yLjVweDtcbiAgZm9udC1zaXplOiAxMDQuNDNweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0YTk5O1xufVxuLnJlZ2lzdHJhdGlvbl9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMXZoO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybS13cmFwIHtcbiAgd2lkdGg6IDUxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI2dmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAzMS42MnB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogOS41cHggMjJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FmYjBhZjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQgaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fc3RyZWV0LWl0ZW0td3JhcCB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQtaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA5LjVweCAxNXB4O1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fZmxhdCB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDkuNXB4IDE1cHg7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19mbGF0LXZhbGlkYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2M3YzdjNjtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2M3YzdjNjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgcmlnaHQ6IDQ2cHg7XG4gIGJvdHRvbTogMjVweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgYm90dG9tOiAxMnB4O1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDMxLjYycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAxMi41cHggMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCAwLCAwLCAwLjEpIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdjpob3Zlcixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNhbWUtYXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGNvbG9yOiAjMDA0YTk5O1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSBidXR0b24ge1xuICBwYWRkaW5nOiAyNHB4IDQ3cHggMjRweCA0N3B4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMwLjU5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWY5MWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDRhOTk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbmdyYXR1bGF0aW9uLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODgwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDMxcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDM3cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMjRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MTIwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDUwcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMzdweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDY1cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogNTJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxNC4zNXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgIHBhZGRpbmc6IDMuMjg1cHggMi4ydncgMy4yODVweCAzLjMzdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45MnZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDMwLjY1dnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3Quc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyB7XG4gICAgaGVpZ2h0OiAxMXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDN2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjQ1dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY3N3B4KSB7XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTR2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDYuMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgICBwYWRkaW5nOiAwLjl2aCAxLjI2dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0LCAucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fZmxhdCB7XG4gICAgcGFkZGluZzogMC45dmggMC44NXZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYsXG4ucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQge1xuICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xuICAgIHBhZGRpbmc6IDEuMTV2aCAxLjI1dnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogOHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgIHBhZGRpbmc6IDIuMjh2aCA5JSAyLjI4dmggOSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDMwLjY1JTtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgICB0b3A6IDI5LjU3dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDE0cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSBpbnB1dCwgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2ZsYXQge1xuICAgIHBhZGRpbmc6IDAuOXZoIDAuMzV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAucmVnaXN0cmF0aW9uIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbiAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XG4gIC5yZWdpc3RyYXRpb24td3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDIwLjMxdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA1Ni45NnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0ge1xuICAgIHRvcDogMDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGlucHV0LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAyNS45NnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYsXG4ucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQge1xuICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMjFweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gICAgYm90dG9tOiAxMXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDI0LjM2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybS13cmFwIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTR2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDYuMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDMwLjY1JTtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgICB0b3A6IDM1dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xuICAgIHBhZGRpbmc6IDAuOXZoIDIuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19faG91c2UgaW5wdXQsIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19mbGF0IHtcbiAgICBwYWRkaW5nOiAwLjl2aCAwLjg1dnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIHtcbiAgICBoZWlnaHQ6IDE0dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgZm9udC1zaXplOiAxLjg1dnc7XG4gICAgcGFkZGluZzogMS4xNXZoIDIuMjV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgcmlnaHQ6IDI0cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgIHBhZGRpbmc6IDIuMjh2aCA5JSAyLjI4dmggOSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMjAuMzF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDU2Ljk2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDI1Ljk2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgZm9udC1zaXplOiAyNS45NnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gICAgYm90dG9tOiAyMXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcbiAgICBib3R0b206IDExcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtLXdyYXAge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmVnaXN0cmF0aW9uX19mb3JtIGlucHV0LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMC43MzV2aCAyLjI2dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxLjk1OXZoIDklIDEuOTV2aCA5JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAucmVnaXN0cmF0aW9uLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxNHZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNi4ydnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybS13cmFwIHtcbiAgICB3aWR0aDogMzAuNjUlO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0ge1xuICAgIHRvcDogMzV2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGlucHV0LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxLjg1dnc7XG4gICAgcGFkZGluZzogMC45dmggMXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSBpbnB1dCwgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2ZsYXQge1xuICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3QtaXRlbXMgZGl2LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgICBwYWRkaW5nOiAxLjE1dmggMXZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICByaWdodDogMjRweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gICAgYm90dG9tOiAycHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIHBhZGRpbmc6IDMuMjg1cHggMzdweCAzLjI4NXB4IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDdweDtcbiAgICB3aWR0aDogOXB4O1xuICAgIGhlaWdodDogOXB4O1xuICAgIHJpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICNjN2M3YzY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjYzdjN2M2O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTd2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDguMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3QtaXRlbXMgZGl2LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBmb250LXNpemU6IDI1Ljk2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDIxcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMTFweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyNC4zNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5yZWdpc3RyYXRpb24td3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDE0dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA2LjJ2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtLXdyYXAge1xuICAgIHdpZHRoOiAzMC42NSU7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSB7XG4gICAgdG9wOiAzNXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgICBwYWRkaW5nOiAwLjl2aCAxdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0LCAucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fZmxhdCB7XG4gICAgcGFkZGluZzogMC45dmggMC44NXZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQsIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgZm9udC1zaXplOiAxLjg1dnc7XG4gICAgcGFkZGluZzogMS4xNXZoIDF2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogN3B4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcbiAgICBib3R0b206IDJweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucmVnaXN0cmF0aW9uLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxN3ZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogOC4ydnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtLXdyYXAge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3QtaXRlbXMgZGl2LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBmb250LXNpemU6IDV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMjFweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gICAgYm90dG9tOiAxMXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDI0LjM2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDE0cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fZmxhdC12YWxpZGF0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAyOS43OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nOiAycHggMTVweCAycHggOXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE1LjY1cHg7XG4gICAgcGFkZGluZzogMC44ODN2aCA1cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgcGFkZGluZzogMS4xNXZoIDVweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNC42OXB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.scss']
        }]
      }], function () {
        return [{
          type: _streets_service__WEBPACK_IMPORTED_MODULE_1__["StreetsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/streets.service.ts":
  /*!************************************!*\
    !*** ./src/app/streets.service.ts ***!
    \************************************/

  /*! exports provided: StreetsService */

  /***/
  function srcAppStreetsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetsService", function () {
      return StreetsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data */
    "./src/app/data.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StreetsService = /*#__PURE__*/function () {
      function StreetsService(http) {
        _classCallCheck(this, StreetsService);

        this.http = http;
        this.posttUrlCode = 'http://37.57.31.220:3000/api/promo-code/use';
      }

      _createClass(StreetsService, [{
        key: "getData",
        value: function getData() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_data__WEBPACK_IMPORTED_MODULE_2__["DATA"]);
        }
      }, {
        key: "getHouse",
        value: function getHouse(number) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_data__WEBPACK_IMPORTED_MODULE_2__["DATA"].find(function (house) {
            return house.name === number;
          }));
        }
      }, {
        key: "postPromocode",
        value: function postPromocode(postCode) {
          return this.http.post(this.posttUrlCode, postCode, {
            observe: 'response'
          });
        }
      }]);

      return StreetsService;
    }();

    StreetsService.ɵfac = function StreetsService_Factory(t) {
      return new (t || StreetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    StreetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StreetsService,
      factory: StreetsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreetsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\project\D2\Tuborg\code\tuborg\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map