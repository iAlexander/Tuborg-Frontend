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

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
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

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-footer");
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
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

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _promokod_promokod_component__WEBPACK_IMPORTED_MODULE_7__["PromokodComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_9__["CongratulationComponent"], _fullprice_fullprice_component__WEBPACK_IMPORTED_MODULE_10__["FullpriceComponent"], _promokod_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__["RulesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
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

    CongratulationComponent.??fac = function CongratulationComponent_Factory(t) {
      return new (t || CongratulationComponent)();
    };

    CongratulationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CongratulationComponent,
      selectors: [["app-congratulation"]],
      decls: 19,
      vars: 3,
      consts: [[1, "congratulation"], [1, "congratulation__bg"], [1, "congratulation__bg-blue"], [1, "congratulation__text-wrap"], ["alt", "", 1, "congratulation__img", 3, "src"], [1, "congratulation__text"], [1, "congratulation__textBot"], ["href", "https://t.me/Home_Party_Bot", "target", "_blank"], [1, "congratulation__machine"], ["alt", "machine", 3, "src"], ["alt", "", 1, "congratulation__confetti", 3, "src"]],
      template: function CongratulationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u0412\u0406\u0422\u0410\u042E!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "HOME PARTY MACHINE \u0412\u0416\u0415 \u0412 \u0414\u041E\u0420\u041E\u0417\u0406. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " \u0427\u0415\u041A\u0410\u0419\u0422\u0415 \u041D\u0410 \u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u042E \u0412\u0406\u0414 \u041D\u0410\u0428\u041E\u0413\u041E \u041C\u0415\u041D\u0415\u0414\u0416\u0415\u0420\u0410. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " \u0406 \u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F, \u043D\u0435 \u0437\u0430\u0433\u0443\u0431\u0456\u0442\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "@Home_Party_Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, ", \u0432\u0456\u043D \u0432\u0430\u043C \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0432\u0435\u0447\u0456\u0440\u043A\u0438. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.machine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.confetti, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      },
      styles: [".congratulation[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.congratulation__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1;\n}\n.congratulation__bg-blue[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  height: 80%;\n  width: 90%;\n  background-color: #004a99;\n  color: #fff;\n  z-index: 2;\n}\n.congratulation__text-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  height: 80%;\n  width: 90%;\n  z-index: 4;\n}\n.congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  margin-bottom: 20px;\n  margin-left: 122px;\n  font-family: \"MuseoSansCyrl700\";\n  letter-spacing: -2.5px;\n  font-size: 164.72px;\n  line-height: 100%;\n  color: #fff;\n}\n.congratulation__text[_ngcontent-%COMP%] {\n  margin-left: 130px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 76px;\n  line-height: 120%;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n  color: #fff;\n}\n.congratulation__textBot[_ngcontent-%COMP%] {\n  margin-left: 132px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 51.8px;\n  line-height: 100%;\n  color: #55f91b;\n}\n.congratulation__textBot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #55f91b;\n}\n.congratulation__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5%;\n  right: 0;\n}\n.congratulation__confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  width: 100%;\n  opacity: 0.8;\n}\n.congratulation__machine[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (min-width: 1681px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 19vh;\n    font-size: 8vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 4vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-left: 7.26vw;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n}\n@media only screen and (max-width: 1536px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 19vh;\n    font-size: 9vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n    margin-left: 7.26vw;\n    margin-bottom: 1.9vh;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-left: 7.26vw;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    width: 40vw;\n  }\n}\n@media only screen and (max-width: 835px) and (orientation: portrait) {\n  .congratulation__text-wrap[_ngcontent-%COMP%] {\n    top: 1%;\n    height: 85%;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-left: 12vw;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    margin-left: 12vw;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 12vw;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 25vw;\n  }\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 55vh;\n    position: absolute;\n    width: 100%;\n  }\n  .congratulation__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-left: 10vw;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    margin-left: 10.3vw;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 10.3vw;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .congratulation__bg-blue[_ngcontent-%COMP%] {\n    top: 1%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%] {\n    top: 2%;\n    height: 95%;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 190px;\n    font-size: 57.06px;\n    margin-bottom: 10px;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    top: 3%;\n    right: 25vw;\n  }\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 65vh;\n    text-align: center;\n    width: 100%;\n  }\n  .congratulation__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 90%;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 19vh;\n  }\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 25vw;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .congratulation__machine[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 20vw;\n    width: 50vw;\n  }\n}\n@media only screen and (max-width: 414px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 31.9px;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 16.54px;\n  }\n}\n@media only screen and (max-width: 384px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .congratulation__text-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 31.9px;\n    margin-top: 100px;\n    margin-left: 10px;\n  }\n  .congratulation__text[_ngcontent-%COMP%] {\n    font-size: 16.54px;\n    line-height: 120%;\n    margin-left: 10px;\n  }\n  .congratulation__textBot[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  .congratulation__img[_ngcontent-%COMP%] {\n    right: 15%;\n    width: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZ3JhdHVsYXRpb24vRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZy9zcmNcXGFwcFxcY29uZ3JhdHVsYXRpb25cXGNvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25ncmF0dWxhdGlvbi9jb25ncmF0dWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FESUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDRko7QURNRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQXRCUztFQXVCVCxXQUFBO0VBQ0EsVUFBQTtBQ0pKO0FET0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDTEo7QURPSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0xOO0FEU0U7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNQSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQTdEVTtBQ3FEZDtBRFVJO0VBQ0UsY0FoRVE7QUN3RGQ7QURZRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNWSjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7QURjRTtFQUNFLGFBQUE7QUNaSjtBRGdCQTtFQUdNO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQ2ZOO0VEbUJFO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUNqQko7RURvQkU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7RUNsQko7RURxQkU7SUFDRSxXQUFBO0VDbkJKO0FBQ0Y7QUR1QkE7RUFHTTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUN2Qk47RUQyQkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUN6Qko7RUQ0QkU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7RUMxQko7RUQ2QkU7SUFDRSxXQUFBO0VDM0JKO0FBQ0Y7QUQrQkE7RUFHSTtJQUNFLE9BQUE7SUFDQSxXQUFBO0VDL0JKO0VEaUNJO0lBQ0UsaUJBQUE7RUMvQk47RURtQ0U7SUFDRSxpQkFBQTtFQ2pDSjtFRG9DRTtJQUNFLGlCQUFBO0VDbENKO0VEcUNFO0lBQ0UsV0FBQTtFQ25DSjtFRHNDRTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ3BDSjtFRHNDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFQ3BDTjtBQUNGO0FEeUNBO0VBSU07SUFDRSxpQkFBQTtFQzFDTjtFRDhDRTtJQUNFLG1CQUFBO0VDNUNKO0VEK0NFO0lBQ0UsbUJBQUE7RUM3Q0o7QUFDRjtBRGlEQTtFQUVJO0lBQ0UsT0FBQTtFQ2hESjtBQUNGO0FEb0RBO0VBRUk7SUFDRSxPQUFBO0lBQ0EsV0FBQTtFQ25ESjtFRHFESTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ25ETjtFRHVERTtJQUNFLE9BQUE7SUFDQSxXQUFBO0VDckRKO0VEd0RFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDdERKO0VEd0RJO0lBQ0UsV0FBQTtFQ3RETjtBQUNGO0FEMkRBO0VBRUk7SUFDRSxRQUFBO0VDMURKO0VENkRFO0lBQ0UsZ0JBQUE7RUMzREo7RUQ4REU7SUFDRSxhQUFBO0VDNURKO0FBQ0Y7QURnRUE7RUFFSTtJQUNFLGFBQUE7RUMvREo7QUFDRjtBRG1FQTtFQUVJO0lBQ0UsY0FBQTtFQ2xFSjtFRHFFRTtJQUNFLFdBQUE7RUNuRUo7QUFDRjtBRHVFQTtFQUVJO0lBQ0UsYUFBQTtFQ3RFSjtFRHlFRTtJQUNFLFFBQUE7RUN2RUo7QUFDRjtBRDJFQTtFQUVJO0lBQ0UscUJBQUE7RUMxRUo7RUQ2RUU7SUFDRSxnQkFBQTtFQzNFSjtFRDhFRTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VDNUVKO0FBQ0Y7QURnRkE7RUFFSTtJQUNFLGlCQUFBO0VDL0VKO0VEa0ZFO0lBQ0Usa0JBQUE7RUNoRko7QUFDRjtBRG9GQTtFQUlNO0lBQ0UsaUJBQUE7RUNyRk47RUR5RkU7SUFDRSxpQkFBQTtFQ3ZGSjtFRDBGRTtJQUNFLGlCQUFBO0VDeEZKO0FBQ0Y7QUQ0RkE7RUFFSTtJQUNFLGdCQUFBO0VDM0ZKO0FBQ0Y7QUQrRkE7RUFJTTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ2hHTjtFRG9HRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ2xHSjtFRHFHRTtJQUNFLGlCQUFBO0VDbkdKO0VEc0dFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUNwR0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmdyYXR1bGF0aW9uL2NvbmdyYXR1bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcbiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuXHJcbi5jb25ncmF0dWxhdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICB9XHJcblxyXG4gICZfX2JnLWJsdWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0LXdyYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgei1pbmRleDogNDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTIycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW9TYW5zQ3lybDcwMCc7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTY0LjcycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICBmb250LXNpemU6IDc2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0Qm90IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xyXG4gICAgZm9udC1zaXplOiA1MS44cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJl9fY29uZmV0dGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgJl9fbWFjaGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5dmg7XHJcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS45dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNy4yNnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5dmg7XHJcbiAgICAgICAgZm9udC1zaXplOiA5dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNy4yNnZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0Qm90IHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjI2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nIHtcclxuICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgdG9wOiAxJTtcclxuICAgICAgaGVpZ2h0OiA4NSU7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEydnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEydnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAyNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogNTV2aDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG5cclxuICAgICZfX3RleHQtd3JhcCB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAuM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRCb3Qge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAuM3Z3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX19iZy1ibHVlIHtcclxuICAgICAgdG9wOiAxJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgdG9wOiAyJTtcclxuICAgICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTkwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1Ny4wNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19pbWcge1xyXG4gICAgICB0b3A6IDMlO1xyXG4gICAgICByaWdodDogMjV2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQtd3JhcCBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE5dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nIHtcclxuICAgICAgcmlnaHQ6IDI1dnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQtd3JhcCBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE3dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW1nIHtcclxuICAgICAgcmlnaHQ6IDIwdnc7XHJcbiAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcbiAgICAmX190ZXh0LXdyYXAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDMxLjlweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxNi41NHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xyXG4gIC5jb25ncmF0dWxhdGlvbiB7XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRCb3Qge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAuY29uZ3JhdHVsYXRpb24ge1xyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLmNvbmdyYXR1bGF0aW9uIHtcclxuXHJcbiAgICAmX190ZXh0LXdyYXAge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMS45cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxNi41NHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dEJvdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ltZyB7XHJcbiAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb25ncmF0dWxhdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbmdyYXR1bGF0aW9uX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbmdyYXR1bGF0aW9uX19iZy1ibHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1JTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRhOTk7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAyO1xufVxuLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDUlO1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDkwJTtcbiAgei1pbmRleDogNDtcbn1cbi5jb25ncmF0dWxhdGlvbl9fdGV4dC13cmFwIGgxIHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBsZXR0ZXItc3BhY2luZzogLTIuNXB4O1xuICBmb250LXNpemU6IDE2NC43MnB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDc2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb25ncmF0dWxhdGlvbl9fdGV4dEJvdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMzJweDtcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogNTEuOHB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM1NWY5MWI7XG59XG4uY29uZ3JhdHVsYXRpb25fX3RleHRCb3QgYSB7XG4gIGNvbG9yOiAjNTVmOTFiO1xufVxuLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbmdyYXR1bGF0aW9uX19jb25mZXR0aSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNvbmdyYXR1bGF0aW9uX19tYWNoaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi10b3A6IDE5dmg7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiA3LjI2dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS45dmg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0Qm90IHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBtYXJnaW4tbGVmdDogNy4yNnZ3O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICB3aWR0aDogMjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi10b3A6IDE5dmg7XG4gICAgZm9udC1zaXplOiA5dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDcuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjl2aDtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHRCb3Qge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIG1hcmdpbi1sZWZ0OiA3LjI2dnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHdpZHRoOiA0MHZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCB7XG4gICAgdG9wOiAxJTtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEydnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTJ2dztcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHRCb3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnZ3O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICByaWdodDogMjV2dztcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fbWFjaGluZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dC13cmFwIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMC4zdnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0Qm90IHtcbiAgICBtYXJnaW4tbGVmdDogMTAuM3Z3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fYmctYmx1ZSB7XG4gICAgdG9wOiAxJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCB7XG4gICAgdG9wOiAyJTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMTkwcHg7XG4gICAgZm9udC1zaXplOiA1Ny4wNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHRvcDogMyU7XG4gICAgcmlnaHQ6IDI1dnc7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19tYWNoaW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUgaW1nIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX2ltZyB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi10b3A6IDE5dmg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19tYWNoaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fbWFjaGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICByaWdodDogMjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX21hY2hpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb25ncmF0dWxhdGlvbl9fbWFjaGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dC13cmFwIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAxN3ZoO1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9faW1nIHtcbiAgICByaWdodDogMjB2dztcbiAgICB3aWR0aDogNTB2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHQtd3JhcCBoMSB7XG4gICAgZm9udC1zaXplOiAzMS45cHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE2LjU0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0Qm90IHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuY29uZ3JhdHVsYXRpb25fX3RleHRCb3Qge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmNvbmdyYXR1bGF0aW9uX190ZXh0LXdyYXAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzEuOXB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNi41NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5jb25ncmF0dWxhdGlvbl9fdGV4dEJvdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNvbmdyYXR1bGF0aW9uX19pbWcge1xuICAgIHJpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CongratulationComponent, [{
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
      name: "???????? ???????????? ???????????????? ??????????",
      number: ["2", "2??", "4??"]
    }, {
      name: "??????????. ???????????? ??????????????",
      number: ["4", "4??", "6", "6/1", "8", "10", "12"]
    }, {
      name: "??????????. ???????????????????????? ??????????????????",
      number: ["4", "5/19", "10", "12", " 4", "14/11", "14??", "14??", "16", "16??", "16??", "16??", "20/2??", " 73??", "75", "75??", "79", "79??", "79??", "81", "83", "85", "85??", "87", "87??", " 69", "69??", "71", "71??", "73", " 63??", " 24", "32", "34", "34??", "34??", "34??", "36", "36??", "36??", "36??", "38", "38??", "42", " 7/18", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "51", "57", "59", "61", "61??", "63", "65", "67", "67??"]
    }, {
      name: "??????????. ?????????????????? ????????",
      number: ["22", "22??", "22??", "24", "24??", "24??", "26", "26??", "26??", "26??", "27", "27??", "28", " 23", "23??", "23??", "25", "25??", "27", "27??", "29", "29??", "31", "31??", "33/1", " 36??", " 34", "36", "36/1", " 1??", "3", "3??", "5", "7", "7??", " 7", "8/20", "10", "10??", "12", "12??", "12??", "14", "14??", "14??", "16", "16??", "16??", "16??", "18", "18??", "18??", "20", "20??", " 11/22", "11??", "13", "15", "15??", "17", "17??", "19", "19??", "19??", "21", "21??", "21??", "21??"]
    }, {
      name: "??????????. ????????????????????????",
      number: ["3", "4", "5", "6", "6/1", "6/2", "6??", "6??"]
    }, {
      name: "??????????. ???????????????????? ????????????????????",
      number: ["3", "5", "7", "9", "11", " 4", "6", "6/1", "6??", "6??", "8", "8/1", "8??"]
    }, {
      name: "??????????. ???????????? ??????????????",
      number: ["10", "14", "55", " 37", "39", "41", "43", "43??", "45", "47/15", " 18", "18??", " 18", "49", "51", "53", "57/38", " 31", "35/2", " 1/28", "2", "3", "5??", "5??", "5??", "5??", "7", "7??", "7??", "7??", "9", " 9??", "11", "13", "15", "15??", "17", " 19", "19??", "21", "21??", "21??", "21??", "23", "23??", "25", "27", "27??", "29", " 4", "4??", "6", "6/7-??", "6??", "8", "8??", "16", "16??", "16??", " 83??", "87", "87??", "87??", " 25/89", "83??", "91??", " 83??", " 30/1", "32", "34", "34??", "34??", "34??", "34??", "36", "36??", "36??", "38", "38??", "40", "40??", "40??", "42", "44", "46", " 28", "67", "69", "71", "73/22", "81", "85", " 24", "26", "83", "83??", "83??", " 48/24", "50", "52", "54/26", " 75", "75??", "77", "79", "79??", "79??", "79??", "79??", "79??"]
    }, {
      name: "??????????. ???????????? ????????????????",
      number: ["17/1", "17/2", " 13", "15", "16", "17", "18", " 3", "5", " 4", "6", "6??", "7??", "8", "8??", " 7", " 9", "1"]
    }, {
      name: "??????????. ????????????????????",
      number: ["5", "8", "9", "10", "10??", "11", "12", "13", "15", "17", "19", "21", "23", "25", "27/16", " 1", "1??", "3", "3??", "7", "7??", " 4", "4??"]
    }, {
      name: "??????????. ???????????? ??????????????",
      number: ["33??", " 35", "38", "38??", "40??", " 17??", "19", "19??", "21", " 5", "7", "7??", "9", "11", "13", " 17 ??????", " 23", "25", "25??", "27", "29??", " 6", "8", "10", "10??", "12", "12??", "14", "14??", "26/1", "28", "28??", " 16", "16/1", "18/7", "20", "20??", "22", "22??", "24/2", " 4/6", "6??", "6??", "8??", "14-16", "30/1", "30??", "32", "32??", " 3", "3??", "3??"]
    }, {
      name: "??????????. ????????????????",
      number: ["13", " 14??", "14??", "14??", "14??", "14??", "14??", "14??", " 1", "7", "7??", "7??", "9", " 18", "18??", "20??", "22", "22??", "24", "24??", "24??", " 5??", "5??", "11", "11??", " 17??", "17??", "17??", "17??", " 12", " 13", "13??", "15", "15??", "15??", "20", "20??", " 3", "3??", "3??", "5", "5??", " 17", "19"]
    }, {
      name: "??????????. ???????? ????????????????",
      number: ["2", "4", "6", " 25", "29", " 34??", "36/10", "36??", "36??", " 20/22", "20??", "24??", "24??", "24??", "26??", " 3", "5", "5??", "7", "7??", "7??", "7??", "9", "9??", "9??", "11", "11??", "13", " 8", "10", "10??", "12", "14", "14??", "14??", "16", "16??", "16??", "18", "18??", "20", " 24", "26", "28", "28??", " 26", "28??", "30", "30??", "30??", "30??", "34", " 15", "15??", "17", "19", "21", "21??", "21??", "21??", "23", "23??", " 43888"]
    }, {
      name: "??????????. ????????????",
      number: ["16", "16??", "16??", "16??", "16??", "18", "18??", "18??", "20", "20??", "22", " 1", "1??", "3", "3??", "5", "5??", "7", "7??", "9", "9??", "9??", "9??", "11", "11??", "11??", "11??", "13", "13/2", "13??", "15", "15??", "15??", "15??", "30", "32", "34/2", " 1??", " 24", "24??", "24??", "26", "26??", "28", "28??", "30??", "30??", " 8", "8??", "10", "10??", "12/92", "14", "14??", " 2", "2/1", "4", "4??", "6", " 36", "38", "38/1", "40", "40??", "40??", "42", "42??", "42??", "44", "46/2", " 48", "48??", "48??", "48??", "50", "50??", "50??", "52", "52/5", "52??", "54", "54??", "56", " 21", "23??", "27??", " 19", "19??", "23", "23??", "25", "25??", "25??", "25??", "27"]
    }, {
      name: "??????????. ??????????",
      number: ["01 ????????????", " 2", "2/27", "4", "4??", "6/14", "8", "10", " 5", "7", " 1", "3"]
    }, {
      name: "??????????. ?????????????????????? ??????????",
      number: ["1", "1/27", "2", "3", "3??", "4", "5", "7", "9", " 6", "6??", "8", "8??", "8??"]
    }, {
      name: "??????????. ?????????????? ????????????",
      number: ["14", "18", " 5??", "5??", " 4", "5??", "5/8", "6/10", " 2", "4??", "4??", "4??", "4??", "12", " 3", "3??", " 13", "13??", " 9", "9??", "11", "11??", " 7", "7??", "7??", " 13??", "13??", "13??"]
    }, {
      name: "??????????. ????????????????????????",
      number: ["1", "3", "5", "7", "9", "9/1", "11", "11/11", " 1/10", "2", "2/8", "4", "6", "8", "10", "12"]
    }, {
      name: "??????????. ????????????????????????",
      number: ["21", "23", "25", "27", "29", "31", "33", "35", "37", "39", " 28", "30", "32", "34", " 40", "42??", " 27 ??????", " 1", "3", "9/13", "11", "15", " 13", "19", "19??", " 16", "18", "20", "22", " 4", "6", "8", "10", "12", "14"]
    }, {
      name: "??????????. ???????? ??????????",
      number: ["12", "14", "14/1", "16", "18", "18/1", "20", "20/1", " 13", "13??", "15", "17", "17/1", "17??", " 19", "19/1", "  18 ??????????????", " 1/5", "2/7", "3", "4", "5", "6", "7", "9", "10", "10/2", "10??", "18/2", " 09 ????????????"]
    }, {
      name: "??????????. ???????????????? ????????????",
      number: ["9/28", "11", "11??", "13", " 1", "1??", "2", "3", "4", "4??", "5/7", "6", "8/26", "10", "12", " 19", "23", "25", "27", "27??", "27??", "31", "33", "33??", "35", "36", "36??", "36??", "37/122", "38", "44", "46", "46??", "46??", "48", "48??", "48??", "52", "54", "56", "56??", "58", " 17", "20", "22/24", "26", "32", "34", " 13", "16", "18", "50??", "60"]
    }, {
      name: "??????. 9-???? ????????????",
      number: ["49", " 2", "3", "4", "5", "5??", "6", "7", "8", "9", "10", "11", "12", "14", "16??", "18", "19??", "20", "21", "23", "25", "27"]
    }, {
      name: "??????. ???????? ????????????????????",
      number: ["7"]
    }, {
      name: "??????. ?????????????????? ????????????????",
      number: ["1/1", "1/2", "2", "2??", "3/1", "3/2"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["2", "2??", "18", "18??", "18??", "24", "24/2", "46", " 11", "13??", "15??", "17", "17??", "17??/1", "19", "21??", " 25", "25??", "25??", "25??", "27", "27??", "27??", "27??", "27/1", "29", "29??", " 5", "5??", "7", "7??", "7??", "9??", " 25??", "25??", "27??", "27??", "27??", "29", "41", "43", "54/19", " 67", "71", "73", "73/1", "77", " 78", "97/5", " 61", "63", "68", "72??", "76", "76??", "79", "81", "83", "87", "87??", "89", " 89??", "93", " 99/4"]
    }, {
      name: "??????. ??????????????????????",
      number: ["5", "7", "7??", "7??/1", "7????????1", "7????????2", "7????????3"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["2"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "4"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "2/1", "9"]
    }, {
      name: "??????. ????????????????????",
      number: ["10", "11", "12", "12??", "13", "14"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["2", "4", "6", "16/4", " 8??", "8??", "16/1", "16/2", "16/3", "28/2", "28??", "28??", "30/1", "30??", "32", " 25"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "18", "20", "22"]
    }, {
      name: "??????. ?????????????????? ????????????????",
      number: ["12", "14", " 4", "18", "20", " 3", "7", "7??", "9", "9??", "11", "13", "15", "17", " 19", "19??", "21", "23", "25", " 27", "29/2"]
    }, {
      name: "??????. ?????????????????? ????????????????",
      number: ["1", "2"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["4", "6", "6/29", "10", "12/2"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["4", "6", "6/29", "10", "12/2", " 9", "11/15", "14", "17", "17??", "19", "19??"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["1/18", "3/1", "3??/1", "4/1", "4/2", "5", "5??", "6", "7??", "7/1", "8/1", "9/1", "10/1", "10/2", "11/1", "12/1", "13/1", "13/2", "14/17", "15", "15/1", "16", "16??", "17??", "18", "19", "19/1", "20/1", "22/1", "23", "24", "25/1", "27/21", "29/24", "31/1", "33/1", "35", "35??", "37/1", "41/1", "41/2", "43/30", "45", "45/1", "47/1", "49/1", "51/1", "51/2", "51/33"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["18 ????????????????"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "2??", "4", "4??", "6", "7", "7??", "9", "11", "13", "13??", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", " 2/1", "8", " 39??", "39??", "39??", "39??", "39??", "39??", "41??", "41??", " 68??", "99/2", "101", "107/2", "109??", " 89", "101??", "101??", " 12", "12??", "14", "14??", "18", "20", "22", "24", "26", "26??", "28", "30", "32", "34", "36", "36??", "40", "42", "43/57", "44", "48", "50", "52", "52??", "54", "56", " 68", "74", "109??", "109??", "111", "111??", "113", " 35??", "37??", "39/1", "39/2", "39??", "55", "55??", "57", "59/1", "59/2", "61", "61/2", "61??", "63", "64??", "65", "66", "67/2", "67??", "69/1", "69/2", "69/3", "71", "71/2", "73", "75", "77", "77/2", "79/2", "79??", "81", "83", "85", "87/1", "89", "89??", "89??", "91", "93", "97/1", " 60", "72", "103/1", "105/2"]
    }, {
      name: "??????. ????????'??????",
      number: ["3"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["6", "8", "10", " 5", "9", "12", " 7", "14", " 2", "4", " 11"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "4", "4/1", "4/2", "4/3", "6", "7", "8", "8/2", "8/3"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1/1", "1/7", "2/12", "3", "4", "7", "8/12", "9", "11", "15", "19"]
    }, {
      name: "??????. ???????????????????? ????????????????",
      number: ["4", "4??", "4??", "4??/14", "4??", "4??", "4??", "6??", "7/19"]
    }, {
      name: "??????. ???????? ??????????????????",
      number: ["1/54", "3", "4", "5", "6", "7", "8", "8/37", "9", "10", "12", "13", "14/1", "14/2", "15", "16", "17", "18", "19", "20", "21", "23", "24", "25", "26", "27", "28", "30", "34/1", "34/2", "36"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["4", "6", "6??", "7", "8", "8??", "9", "10??", "11", "12", "12??", "14", "14??", "16", "16??", "18", "20"]
    }, {
      name: "??????. ???????????????? ????????????????????????????????",
      number: ["7", " 4", "4/1", "13", "15", "15??", "17", " 8", "10", "12", "14", "16", "18", "20", "35", "37", "39", "41", "43", "45", "47", " 2??", "2/32", "3", "5", "5??", "9", "11", "14", "53"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2", "3", "3??", "3??", "4/2", "4/6", "5", "5??", "7", "7??", "7??", "8", "8??", "9", "9??", "10", "10??", "11", "12", "12??", "13", "14", "14??", "15", "16", "16??", "16??", "17", "17??", "18", "18??", "19??", "19??", "19/21", "20", "20??", "20??", "20??", "22", "23", "23??", "23??", "24", "24??", "25", "25??", "26/26", " 33??", "34", "35", "38", "38??", "40", " 27", "28", "29", "32", " 170/1??", "170/172", " 93", "95", "97", "99", "100", "101", "102", "103", "103??", "104", "106", "108", "110", "112", "114", "116", " 37", "37/13", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "48", "48??", "50", " 91/14", " 72", "75??", "84", "88", "90/92", "94/96", " 115", "122", "130", "131", " 51", "52", "54", "56", "56/15", "58", "62", "66", "68", "69", "70", "152", "174", "176", "180", " 123", "125", "125??", "127", "138", "140", "150", "152", "154", "156", "158", "160", "162", "164", "166", " 155", "157", "165", "169", " 172", "172/2"]
    }, {
      name: "??????. ????????'?????? ????????????????????",
      number: ["2", "2??", "4", "4??", "4??", "4??", "5", "5??", "5??", "5??", "5??", "7", "7??", "7??", "8", "8??", "9", "9??", "9??", "10", "10??", "11", "11??", "11??", "11??", "11??", "12", "12??", "12??", "13", "13??", "14", "15", "16", "16??", "16??", "18", "18??", "18??", "19", "19??", "20", "20??", "20??", "20??", "20??", "21", "21??", "21??", "21??", "22", "22??", "23??", "24", "24??", "24??", "24??", "25", "25??", " 25??", "25??", "26", "26??", "26??", "27", "27??", "27??", "28", "28??", "28??", "29", "29??", "30", "30??", "31??", "31??", "32", "32??", "32??", "33", "33??", "34", "34??", "34??", "35", "35??", "36", "37", "37??", "37??", "38", "38??", "38??", "38??", "39", "39??", "40", "40??", "41", "42", "43", "44", "45"]
    }, {
      name: "??????. ??????????????????",
      number: ["2/18", "3", "4", "5/1", "5/2", "6/1", "6/2", "7", "8", "9", "10/1", "10/2", "11/1", "11/2", "12/1", "12/2", "13/1", "13/2", "14/1", "14/2", "15", "16", "18", "19", "20", "22", "24", "26", "28/1", "28/2", "30"]
    }, {
      name: "??????. ????????????????????",
      number: ["09 ????????????", " 18", "2", " 15", "17"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["1/12", "1/12??", "1/12??", "1??", "3", "3/1", "3/2", "3??", "3??", "5", "5/1", "5??", "5??/1", "5??", "7/5", " 2/12", "2/12??", "4", "4??", "4??/1", "4??", "6", "6/1", "6/2", "6/3", "6/4", "6??", "6??", " 8", "8/1", "8/2", "8/3", "8/4", "8??", "8??", "8??", "8??", "10", "10??", "10??/1", "10??", "10??", "10??", "10??/1", "12/3", "12/3??"]
    }, {
      name: "??????. ?????????????????????? ????????????????",
      number: ["1/7", "3/8", "4/6", "5", "6", "8"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["4/2", "5/1", "5/2", "6", "7/1", "7/2", "7/3", "8", "8/1??", "9/1", "9/2", "9/3", "9/6", "10/2", "12/2", "13", "15/1", "17"]
    }, {
      name: "??????. ????????????????????????",
      number: ["19", "21", "25", " 3", "5"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "??????. ?????????????????? ????????",
      number: ["14??", "14??", "14??/1", "14??/2", "14??", "16??", "16??/1", "16??/2", "16??/3", "16??/5", "16??/7", "16??", "16??/1", "16??/2", "16??/3", "16??", "16??", "18", " 31", "31/1", "31/2", "31/3", "31/4", "33", "35", "35??", "35??", "37", "37/16", " 13", "13/1", "13??", "13??", "13??", "13??", "13-??/1", "13??", "13??", "15", "15/1", "15??", "17", "19", "21", "23", "23/1", "23??", "25", " 22", "24", "28", "30", "32/18", "34", " 2/10", "2??", "2??", "3", "3/1", "3/2", "3/3", "3??", "4", "4??", "5", "5??", "6", "7", "7/15??", "8", " 9/18", "11", "11??", " 44/11", "44??", "44??/1", "46", "46??", "48", "48??", "48/1", "50", " 39??", "39??", "39??/1", "41", "43", "45", "47", "49"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["8/10", "12", "14", "17/21", "23", "26", "28", "29", "30", "32", "34", "36", "38", "40", " 1", "1??", "4", "4??", " 3/15", "9??"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????",
      number: ["10", "12", "13/9", "15/20", "17", " 6", "6??", "7", "7/21", "8", "9", "9??", "9??", "11", "11/8", "11??", " 1", "2", "3", "4", "5"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3", "4", "5", "7", "9/1", "9/2", "10", "11", "12", "13", "14/1", "14/2", "16", "18", "20"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "4", "6", "16"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "5/2", "7", "7??", "8/1", "9", "10/1-2", "10/9-1", "10/9-2", "11", "12", "13", "15", "17/11", "19/8", "21", "21??", "23", "23??", "23??/2", "24", "25", "26", "27/1", "27/2", "29", "31/1", "33/2", "35", "35??", "37??", "37??", "37??", "37??", "41??", " 37", " 26", "28", "30", "30??", "34"]
    }, {
      name: "??????. ????????????????",
      number: ["3"]
    }, {
      name: "??????. ????????????????????",
      number: ["12", "14", "15", "16", "17", "25"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["10", "12", "14", " 2", "4/1", "4/2", "6"]
    }, {
      name: "??????. ???????????????? ?????????? ????",
      number: ["53", "53??", "55", "55/1", "55??", "55??", " 55??", "55??", " 57", "57/2", "59", " 79", "81/1", " 90", "90??", "92", "92??", "94", "96", "98/29", " 83/2", "83??", "87", "89", "91/29", "91/29??", "100/31", " 60", "62", "62/2", "62/4", "62/5", "62/7", "64", "64??", "64??", "66", "66/1", "66/3", "66/4", "66/5", "66/9", "66/21", "66/21??", "66/21??", "66/21??", "66??", "68", "70", "72/19", " 78/18", "80", "80/1", "82", "84", "84/1", "84/2", "84/3", "84??", " 61", "61??", "61??", "63", "63??", "63??", "65", "65/1", "65??", " 73", "73??", "73??", "75", "77", " 38", "40/11", " 42", "42/20", "42??", "44", "46", "46??", "46??", "48??", "48??", "50", "52", "52??", "52??", "54/21", " 2??", "4", "4??", "6", "8", "8??", "8??", "8??", "8??", "10", "10??", " 12", "14", "16", "16??", "16??", "18", "20", "22", "24", "26", "26??", "28", " 1??", "3", "3??", "5", "9", " 52/22", "52/22??", "54", "54/2", "54??", "54??/1", "56", "58"]
    }, {
      name: "??????. ??????????????",
      number: ["5/7", "6/8", " 1/10", "2??", "3", " 11", " 2"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "12", "13", "15", "17"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "4", "6", "7", "8", "10", "11", "13", "15", "18", "21"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "3??", "3/1", "3/2", "4", "4??", "6", "7"]
    }, {
      name: "??????. ??????????????",
      number: ["12", " 3", "5", "5??", "5??", "5??", "5??", "7", "7??", "7??", "9", "10", "11", "11??", "13", "15", "17", "19", "19??", "21", "21??", "23", " 1", "1/3-2", "2", "3/2", "4", "6"]
    }, {
      name: "??????. ??????????????????",
      number: ["1/36", "3/12", "4", "5??", "5/13", "12", "14", " 7", "10", "16", " 11", "11??", "13", "14??", "15", " 6", "9"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??/1", "1??/2", "3/1", "3/2", "4", "5", "6/2", "7", "8", "9/1", "9/2", "9??", "9??", "10", " 6??", "8", "11/14", "12/12", "13", "13/16", "14", "15", "16", "16??", "17/1", "17/2", "18/1", "18/2"]
    }, {
      name: "??????. ??????????????????????",
      number: ["12", "12/1", "12/2", " 2", "3", "5", "6"]
    }, {
      name: "??????. ???????? ??????????????????",
      number: ["12", "18", "30"]
    }, {
      name: "??????. ??????????????????",
      number: ["5", "7", "9", "10", "11", "13", "15", "18", "20", "21", "23", "25", "27", "31"]
    }, {
      name: "??????. ???????????????? ??????????",
      number: ["1/6", "3", "4", "5", "6", "7", "8??", "8/1", "9", "9??", " 14", "15", "16", "16??", "17", "19", "21/2", "23", "23??", "25", " 24", "26", "27", "27/3", " 29", "29??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2", "3", "4", "4??", "4/36", "5", "6", "6??", "6??", "7", "8", "9", "9??", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24??", "24??", "25", "26", "27", "27??", "28", "29", "30", "31", "32", "32??", "33", "34", "35", "36"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "5", "5??", "9", "10", "12"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "4", "5", "6", "6??", "7", "9", " 10", "12", "12??", "12??", "12??", "14", "14??", "14??", "15", "16", "16??", "16??", "17", "18", "19", "20", "22", "24"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4", "10", "12", "12??", "14??", "16", " 5", "7"]
    }, {
      name: "??????. ?????????????????? (????????????????)",
      number: ["1", "2", "2??", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17??", "18", "19", "19??", "20", "21", "21??", "22", "22??", "23", "24", "24??", "24??", "24??", "25", "26", "27", "27??", "28", "29", "29??", "30", "30??", "30??", "30??", "30??", "30??", "30??", "30??", "32", "32/2", "32??", "34", "36", "38", "40", "40??", "40??", "42", "42/1", "42??", "44", " 44??", "44??", "46", "48", "50", "50??", "52", "54", "56", "56??", "58", "60", "62", "62??", "64", "66", "68", "70", "72", "90"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["23", "23??", "25", "27", "27??", "29", "29??", "29??", "31", "32", "34", "34??", "34??", "36", "36??", "36??", "36??", "36??", "38", "38??", "38??", "38??", " 19", "21", "21??", " 2", "3", "4", "4??", "5", "5??", "6", "6??", "8", "10", " 7", "7??", "9", "12", "14", "14??", "14??", " 11", "15", "16", "16??", "16??", "17", "17??", "18??", "20", "22", "22??", "24", "24??", "26", "26??", "26??", "28", "28??", "30", "30??", "30??"]
    }, {
      name: "??????. ????????????????",
      number: ["39", "41", "43", "45", "47", "49", " 24"]
    }, {
      name: "??????. ?????????????? ????????????????",
      number: ["12", "14", "14??", "16", "18", " 4", "4??", "6", "6??", "6??", "8", "10", " 3", "3??", "3??", "5", "5??", "5??", "7", "9"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2/3", "2/4", "3", "5/1", "5/2", "6", "6??", "6??", "6??/1", "6??/2", "10"]
    }, {
      name: "??????. ???????????????????????? ??????????????",
      number: ["4", "6", "7", "17", "21/5", " 18/7", "20", "20??", "20??", "31", " 14", "16", "23/8", "23/8??", "25", "25??", "27"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "27", "27??", "29", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "43", "44", "45", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57/16", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", " 22", " 71", "72", "73", "74", "75", "76", "77", "78", "79", "83", "85"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["3", "3/2", "3??", "5", "7", "7??"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "7", "10", "12", "19"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["4", "6", "8", "9", "10", "12", "14"]
    }, {
      name: "??????. ???????????????????? ??????????????????",
      number: ["32", "34/2", " 5??", "5??", "5??", "7", "12??", "16??", "18", "20", "27", "38", "38??", " 9", "9??", "9??", "9??", "11"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "7??", " 92??", "92??", "94", "94/2", "98", "100", "100/2", "100??", "102", "102/2", "102??", "104", "104??", "106", "106??", "106??", "108", "108??", " 15", "15/2", "15/3", "15??", "17", "17/1", "19", "19/2", "21", "21/2", "23", "25", "27", "27/2", "29", "31", "33", "33/2", "35", "37", "37/2", "39/1", "39/2", "41/43", "45", "47", "47??", "47??/1", "49", "51", "53", "53/2", "55", "55/2", "59", "59??", "59??", "59??", "72", "72??", "72??", "72??", "72??", "74", "74/1", "74/2", "74??", "76/1", "76/2", "76??", "76??/1", "76??/2", "78", "80", "82", "82/2", "84??", "84??", "86", "88", "90", "90/2", "90??", "90??", " 6??", "8", "8??", "8??", "8??", "8??", "8??", "8??", "10", "10??", "11??", "12", "12/2", "12??", "13??", "14", "18", "18??", "20", "24", "24/2", "26", "30", "30/2", "30/3", "30/4", "32", "32/2", "34", "36", "36/2", "36??", "38", "38/2", "38??", "38??", "38/1", "40", "40??", "42", "44/20", "50??", "52", "52/2", "54??", "56", "56??", "58", "58/2", "60", "60/2", "62", "62/2", "64", "64/2", "64??", "66", "66/2", "68", "68/2", "70", "70/2"]
    }, {
      name: "??????. ??????????????????????",
      number: ["33", " 1", "3", "5", "24??", "35"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["19"]
    }, {
      name: "??????. ?????????????? ????????????????",
      number: ["17 ??????", " 1", " 2/8", "4", "6", "8", "10/15"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", " 1"]
    }, {
      name: "??????. ????????????????????",
      number: ["11??", "11??", "11??", " 1", "2??", "3", "5", "7", "7/9", "8", "10/18", "24", "26", "28", "28??", "30", "30??", " 11", "13", "15??", "15??", "17??", "17??", "32", "34", "36", "36??", "38", "40", "40/15", " 17", "21", "23"]
    }, {
      name: "??????. ?????????????????????????? ??????????????????",
      number: ["10"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["1", "1??", "2", "3", "4", "4??", "5", "6", "7", "8", "9", "10", "10??", "11", "12", "15", "15??", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24??", "25", "26", "27"]
    }, {
      name: "??????. ????????????????????",
      number: ["4", "6", "8", "10", "13"]
    }, {
      name: "??????. ?????????? ????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1??", "1??", "2", "3??", "4", "5??", "6", "8", "10", "11??", "12", "13??", "13??", "14", "16", "18", "24", "26", "28??", "30", "30??", "32", "34", "36", "38", "40", "40??", "42", "44", "46", "48", "48??", "50", "52??", "54", "56", "58", "60", "62", "64"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1??", "1??/1", "1??/2", "1??/1", "1??/2", "2??/1", "2??/2", "2??/3", "3", "3??", "3??", "3??", "3??/1", "3??/2", "3??", "3??/1", "3??", "3??", "3??/1", "3??/2"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1??", "1??/1", "1??/2", "1??/1", "1??/2", "2??/1", "2??/2", "2??/3", "3", "3??", "3??", "3??", "3??/1", "3??/2", "3??", "3??/1", "3??", "3??", "3??/1", "3??/2", " 2", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7", "2??", "2??", "2??/1", "2??", "2??", "2??", "2??", "2??/1", "2??/2", "4", "4??", "4??/1", "4??/2", "4??", " 16", "16/20", "18??", "18??", "18??", "18??", "18??", "20", "20??", "22", "22/1", "22/2", "22??", "24", "24??", " 10", "12", "12??", "12??", "12??", "12??", "12??/1", "14", "14??", "14??", "18", "18??", " 17", "26??", "30/1", "30/2", "30????????1", "30????????2", "30????????3", "30????????4", "30????????5", "30????????6", "32", "32??", "32??/1", "32/1", "32/2", "32/3", "32/4", "32/5", "32/6", "32/7", "32/8", "32/9", "32/10", "32/11", "32/12", "32/13", "32/14", " 6", "6/1", "6??", "6??", "6??", "8", "8??"]
    }, {
      name: "??????. ?????????????? ??????????????????????",
      number: ["4", "6", "11", "11??", "13", "13/1", "13/2", "14", "15", "15/1", "15/2", "16", " 7", " 8", "10", "12/16", " 3", "5", " 18", "24", "27/29"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "3/5", "4", "5??", "7??", "7??", "10", " 24"]
    }, {
      name: "??????. ???????????????????? ??????????????????",
      number: ["5", "7/14", " 2", "3", "4", "6", "8", "8??", "8??", "10", " 10"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["1", "2", "3", "3??", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15??", "16", "17", "18??", "20", "22", "24", "26", "28??", "28??"]
    }, {
      name: "??????. ??????????????????",
      number: ["11", "13", "16", "20", "21", "22", "24", "25", "27/1", "27/2", "28", "29/16", "30", "32", "34", "38"]
    }, {
      name: "??????. ???????????? ????",
      number: ["14", "16"]
    }, {
      name: "??????. ?????????? ??????????",
      number: ["1", "1??", "2", "2??", "2??", "2??", "3", "4", "5", "6", "6??", "8", "10"]
    }, {
      name: "??????. ????????????",
      number: ["3", "4", "4/1", "5", "6", "7", "8", "9", "10", "12", "14", "14/2", "16", "16/1", "18", "20", "22", "22??", "24", "24??", "28", "28/1"]
    }, {
      name: "??????. ???????????????? ????????????????????",
      number: ["5", "7", "9", "9??", "11", "13", "15", "17", " 14", "16", "16??", "18", " 2/6", "4", "4??", "6", "8", "10", "12", "12??"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["34??", "36", "36??", "38??", "40??", "42", "43", "44", "45", " 10", "10??", "12", "12??", "14", "14??", "16", "18", "18??", "18??", "20", "22", "26", "28", "28??", "30", "30??", "32", "32??", "34", "34??", " 6", "13??", "15", "15??", "15??", "17", "17??", "17??", "17/10", "19", "21", "23", "25", "25??", "27", "29", "31", "33", "35", "37", "39", "41", " 1/2", "1??", "2/34", "3", "3??", "4", "4??", "4??", "5", "6??", "7/11", "8/9", "9/12", "11", "11??", "11??", "13", "13??", "13??", "30"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["1", "2", "4", "4??", "6", "6??", "8??", " 8", " 8"]
    }, {
      name: "??????. ????????????????????????",
      number: ["4", "8", "8??", "16", " 6", "31/37", " 2", "13", "13??/1", "13??/2", "14??", "15??/1", "15??/2", "17", "19", "21", "23", "27", "29/1"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "5??", "5??", "5/7", "7??", "9", "11", "19", "21/1", "21/2"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "4/2", "4??", "5", "6/1", "6/2", "7", "8/1", "8/2", "8??", "9", "10", "11/30", "12/29", "13/27", "14/1", "14/2", "14??", "15/1", "15/2", "16/1", "16/2", "17", "18", "19/1", "19/2", "20/1", "20/2", "21/1", "21/2", "21??", "22", "23/1", "23/2", "24/1", "24??", "25/1", "25??", "26", "27/1", "27/2", "27/3", "28/3", "29", "30/6", " 72/3", " 75??", "75??", "77", "77/1", "77/2", "79", "79??", "79/51", " 31/1", "31??/2", "32", "33", "34/1", "34/2", "35", "36", "37", "38", "39/1", "39/2", "40/1", "40/2", "41", "42??", "42/1", "43", "43??", "44/1", "44/2", "44/3", "45/7", "49", "51", "53", "54", "55", "56/3", "60", "62", "64/1", "64/2", "65/5", "66/1", "66/2", "67??", "69", "69??/1", "69??/2", "71", "73/1", "73/2", "73??", "75/1", "75/2"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "6??", "7", "8/13", "9", "9/15", "10??", "11", "12", "12??", "13", "14", "14??", "15", "15??", "15??", "15??", "16??", "16??", "16??", "17/1", "18"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["18-26", "18??", "18??", "18??/1", "20??", "22", "24", "26", "27", "28", "29", "30", "71??", " 12/1", "13", "15", "15/1", "17", "17/1", "17/3", "26", "26/2", "26??", "26??", "26??/2", "26??/3", "26/1??", "26/1??", "26??/4", "26??", "26??", "26??/3", "26??/5", "26??", "26??", "26??", "28", "28/1", "28??", "28??", "28??", "28??/1", "28??/2", "30", "30/1", "30??", "30??/1", "32??", "32??", "32??", "34", "36", "38", " 12??/1", "12??/2", "14", "15/2", "16", "16/1", "17??", "17??/1", "17??/3", "17??/4", "17??/5", "17??", "19", "19/1", "19/2", "19/3", "19/5", "19/6", "19??", "19??", "19??", "21", "23", "23??", "25", "25??", "27", "27/1", "27/2", "27/3", "27/4", "27/6", "27??", "29", "30??", "31", "33", "34??", "34??/1", "34??", "35", "37", "39", "39??", "40", "40/2", "41", " 43", "45", "47", "49", "51", "67", "67/1", "181", "181/1", " 14", " 1", "2", "3", "3/1", "3/2", "3/3", "3/3??", "3/4", "3??", "3??", "4", "4??", "5", "5/1", "7", "7/1", "7/1??", "7/2", "7/3", "7/4", "7/5", "7/6", "7??", "7??/1", "7??/2", "7??", "7??", "7??/1", "7??", "7??/1", " 6", "6/1", "6??", "8", "9", "9/4", "9/8", "9??", "10", "11", "11/3", "11/5", "11??", "12", "12??", "12??", "12??", "12??/1", "12??/2", "12??/4", "14", "14/1", "14/1??", "24", "24/1", "24??", "24??/1"]
    }, {
      name: "??????. ?????????????? ??????",
      number: ["8??", " 3", "3??", "5/31", "7", "9", "11", "13", "16", "22", "23", "25", "27", "28", "30", "33", "35", "35??", "35??"]
    }, {
      name: "??????. ????????????",
      number: ["2", "3", "3??", "3??", "4", "5", "6", "7", "7??", "8", "9", "10", "11", "12", "12/1", "13", "14", "15", "16", "17", "18", "19", "20", "20??", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "33", "35", "37", "39", "41??", "41??", "43??", "43??", "45", " 1", " 3", "5/1", "5/2", "9", "13", "13/30", "36/26", "38", " 1", "2??", "4", "4??", "8", "10", "10??", "10??", "12??", "14/38", "18", "18??", "20", "20??", "20??/1", "22", "22??", "22/6", "24", "26", "28", "30??", "30??/2"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1??", "2/10", "17", "17??", "19", "28"]
    }, {
      name: "??????. ?????????????????????? ??????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"]
    }, {
      name: "??????. ????????????????????",
      number: ["17", "39", "41", "42", "43", "45", "46", "47", "48", "48??", "48??", "48??", "18/12", "50"]
    }, {
      name: "??????. ???????????????????? (????????????????)",
      number: ["2", "4", "6", "8", "10", "12"]
    }, {
      name: "??????. ???????????????? ??????",
      number: ["1", "2", "3", "4", "8", "9", "10", "11", "12"]
    }, {
      name: "??????. ????????????????????????",
      number: ["125", "129", "139", "143", "143??", "143??", "145", "146", "148", "150", "152", "152??", "154", " 14", "16", "46/1", "46/2", " 100", "122", "124", "126", " 10??", "14??", "23??", " 128", " 95", "97??", "97??/1", "97??/2", "97??", "99", "115", "117/125", "144", " 2", "4", "6", "8", "10", "12", " 171/18", "173/187", "193", " 174/32", " 188", "188/2", "190", "196", "198", "198??", "202", "204", " 210", "212", " 189", "195"]
    }, {
      name: "??????. ??????????????",
      number: ["3", "4"]
    }, {
      name: "??????. ?????????????????????????? ??????????",
      number: ["2", "3", "4", "6", "7", "8", "9/1"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["11", "13", "15", "50", "52", "52??", "54", "54??", " 14", "14??", "14??", "14??/1", "14??/2", "14??/3", "14??/4", "14??/5", "14??/6", "14??/7", "14??", "16", "16??", "18", "18??", "18??", "20", "20??", "22", "24", "24/1", " 2", "2/1", "4", "4??", "4??", "6", "6??", "8", "8??", "10", "12", "12/1", "12/2", "12/3", "12/4", "12/5", "12??", " 26", "26/1", "28", "30", "32", "32??", "32??/1", "34", "34??", "34??", "36/2", " 3", "3????????1", "3????????2", "3????????3", "3????????4", "3????????5", "3????????6", "3????????7", "3????????8", "3????????9", "3????????10", "3????????11", "3/1", "3/1??", "5", "5/1", "5??", "7", "7??", "7??/1", "7??", "9", "9??", "9??/1", "9??/2", "9??", "38", "39??", "40", "40??", "42", "42??", "44", "44/3", "48"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["1/3", "2??", "4/6", "14/18", "14??", "14??", "14??", " 19", "21", "23", " 16", "25"]
    }, {
      name: "??????. ????????????????",
      number: ["10", "12", "14", " 2", "3", "4", "5", "6", "7", "7/11", "8"]
    }, {
      name: "??????. ??????????????????",
      number: ["12", "14", "16", "17", "19", "20", "21", "22", "24", "28", "32", "38", "40"]
    }, {
      name: "??????. ????????????????????",
      number: ["32", "34", "36", "38", "42", "45", "49", "51??", "72", "81", "81??", "81??", "81??", " 201??", "203", "203??", "205", "213", "213??", "219", "219??", "220", "222", "224", "226", " 76??", "76??", "76??", "80", "80??", "82", "86", "86??", "88", "90", "90??", "93", "93??", "93??", "94", "95", "95??", "96", "97", "99", "100", "101", "102", "103", "103??", "104", "107", "107??", "108", "109", "110", "110??", "112", "113", "113??", "114", "16", "118", "119", "120", "121", "121??", "121??", "123", "123??", "124", "125", "125??", "126", "126??", " 127", "128", "128??", "131", "132", "134", "134??", "136", "136??", "139", "140", "141", "142", "142??", "144", "145", "145??", "148", "148??", "149", "150", "150??", "151", "152", "153", "154", "156", "157??", "158", "158??", "159??", "159??", "159??", "163", "167", "171", "173", "176", "189", "189??", "191", "193", "195", "197", "199", "201", "201??"]
    }, {
      name: "??????. ????????????",
      number: ["9"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1??", "4", "4??", "4??", "5", "6", "6??", "6??", "7", "7??", "7??", "8??", "8??", "9", "10", "11", "11??", "12", "13", "14", "15"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "1??", "3", "5", "5??", "10", "10??", "12"]
    }, {
      name: "??????. ??????????????",
      number: ["20/16", "22??", "25"]
    }, {
      name: "??????. ??????????????",
      number: ["1/7", "1/7??", "2/9", "3", "4", "4??", "4??/1", "5", "5??", "6", "6??", "6??/1", "7", "8", "9", "10/16", "10/19", "11", "12", "13/17", "13/17??", "14", "14??", "14??/1", "15", "16", "16??", "17", "17??", "17??/1", "18/11", "19", "21/8"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "3", "3??", "3??", "3??", "5", "7", "9", "11"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4", "4??", "6", "6??", "8", " 3", "3??", "5", "5??", "7", "7??", "7??", "9/40"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["36", "38", "38/14", "40", "46/17", " 21/9", "21??", "23", "23??", "25", "27", "27??", "28", "29", "29/8", "29??", " 22", "22/11", "24", "24??", "24??", "26", "26/8", " 7", "9", "11", "12", "12??", "12??", "13", "14", "15", "16", "17", "18", "18??", "19", " 1", "3", "4", "4??", "5", "6", "6??", "8", "8??", "8??"]
    }, {
      name: "??????. ?????????????????????????? (????????????????)",
      number: ["10"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "4", "4??", "5", "5??", "5??", "5??", "6", "7", "7??", "7??", "7??", "8", "8??", "8??", "8??", "8??", "9", "9??"]
    }, {
      name: "??????. ?????????? ??????????????????",
      number: ["5", "24", "26", "26/2", "27", "28", "29", "30", "31", "33", "34??", "34/1", "34/2", "34/3", "34/4", "34/5", "35", "36", "37", "39"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["3", "4", "5/1", "5/2", "5/3", "6", "7", "9", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22/1", "22/2", "23", "24", "26", "27", "29"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/10", "3", "3/2", "4", "5", "6", "7", "8", "13", "17", "23", "25", "27", "29", "31"]
    }, {
      name: "??????. ?????????????????????????? ??????????????????",
      number: ["5??", "5??", "5??", "28", "28??", "28??", "28??", "28??", "30/32", "30??", "30??", "34??", " 22", "24", " 2", "2/1", "3", "4", "4??", "5", "5??", "5??", "8", " 34/36", "38", "38??", "40", "42/43", " 5??", "5??"]
    }, {
      name: "??????. ??????????????????",
      number: ["6", "6??", "8", "8??", "10", "12", " 15", "15??", "16", "17", "18", "20", " 2", "2??", "4", "5", "5??", "5??", "7", "9"]
    }, {
      name: "??????. ??????????????????-????????????????????",
      number: ["41", "43??", "43??", "45", "45??", "45??", "47/14", "51", " 19", "20", "21", "26", "27??", "29", "29??", "29??", "31??", "32", "33", "33??", "33??", "34", "35", "36", "38", " 22", "22??", "24", "27", " 1/37", "2", "3", "4", "5", "5??", "6", "7", "7??", "7??", "8", "8??", "8??", "9", "9??", "10", "10??", "11", "11??", "11??", "12", "12??", "14", "14??", "15", "16", "18/2"]
    }, {
      name: "??????. ??????????????????????",
      number: ["9/10", "11", "13", "19", " 4", "6/1", "6/2", "8/2", "8/9", " 10", "12", " 33/1", "33/2", "34", "35??", "36", "37", "40", "42/1", "42/2", " 25", "25??", "25??", "25/1", "25/2", "27", "29", "29??", "29??/1", "29??/2", "30", "30??", "32", "33", " 1", "3", "5", "7/11"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/7", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11??", "12", "13", "14", "15", "20", "21", "25"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["1", "2", "2??", "4", "10??", "20"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["6", "8", "8??"]
    }, {
      name: "??????. ??????????????????",
      number: ["20??", "21??", "23", "27", "33/1", "33/2", "34??", "34/1", "34/2", "35", "35??", "36", "36??", "37", "37??", "39", "40", "41/1", "41/2", "42", "46/9", "48/6", "50", "52", "53", "54", "58", "60", " 3", "7", "8", "9", "10", "11", "12", "12??", "13", "14", "15", "15/1", "18", "18/2", "20", "22", "24", "26", "28/25"]
    }, {
      name: "??????. ?????????? ????????????????",
      number: ["2", "4", "4??", "6", "6/1", "6??", "6??", "6??", "8", "10", " 1", "3", "5", "5/1", "5??", "7", "7??"]
    }, {
      name: "??????. ??????????????????",
      number: ["8", "9", "10", "10??", "11", "13", "13??", "14/13", "16/12", " 18", "2", " 15", "15??", "17"]
    }, {
      name: "??????. ??????????????????????",
      number: ["36", "38", "39", "39??", "40", "41", "43", "43??", "44", "44??", "45", "46??", "47", "50??"]
    }, {
      name: "??????. ????????????????????",
      number: ["3/1", "5", "6", "6??", "7??", "8", "8??", "9/1", "9/2", "9/3", "9/4", "9/5", "10", "11/1", "11/2", "12", "12??", "14", "14??", "14??", "16", "17", "17??", "18", "18/1", "20", "22", "24", "24??", "26/2", "26??/3"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["1", "1??", "2", "2??", "3", " 15", "17", "17??", "19", "21", "23", "23??", "23??", "25", " 4", "6??", " 10", "12", "12??", "14", "14??", "14??", "14??", "14??", " 5", "6??", "7??", "8", "8??", "8??", "9", "11", "11??", "13", "13??", " 7"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/5", "2/7", "3", "3??", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20/2", "22/10"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["24", "24/1", "24/2", "24??", "28", "28/1", "28/2", "28/3", "28/4", "30", "30/1", "32", "32/1", "34", "34/1", "34/2", "34/3", "34/4", "34/6", "34/7", "34/11", "34/13", "34??????????", "34??????????", "34??????????", "34??????????", "34??????????", "34??????????", "34??????????", "", " 15/19", "21/18", "23", "23??", "23/16", "25", "27", "27????????1", "27????????2", "27????????3", "29/22", " 31/17", "33", "33/1", "33/2", "33/3", "33/4", "35", "35/1", "35/2", "37", "37/1", "37??", "37??", "39", "45", "45/1", "45????????5", " 36", "36/1", "38", "38/1", "40", "40??", "42", "42??", "42/1", "42/2", "42/3", "42/4", " 90", "90??", "90??/1", "94", "94??", "94/19", "96", "98", "98??", "100??", "110", "110/1", " 8", "11/11", "13", "14", "15/14", "16", "17", "18", "18??", "20", " 1", "2", "2??", "3", "4", "4??", "5/7", "6", "8??", "10", "12??", " 5??", "7/7", " 9/14", "19/15", "21/18", "22", " 47????????1", "47????????2", "47????????3", "49??", "49????????1", "49????????2", "49????????3", "51", "53????????1", "53????????2", "53????????3", "53????????4", "53??", "55", "57/130"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3", "4", "6", "10", "12", "12??"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["5", "8", "12", "14", "16", "17", "18", "20/45", "25", "27", "29/48"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["1??", "2", "3/1", "3/2", "3??", "4", "6", "6??", "7??", "8", "8??", "9", "9??", "10", "10??", "11", "11??", "12", "13", "13??", "13??", "14", "14??"]
    }, {
      name: "??????. ???????????? ??????????????????",
      number: ["47", "48", "49", "53", " 28??", "28??", " 51/2", "56", "56/2", "58/1", " 32", "37/1", "40", " 5", "5??", "5??", "5??", "9", "9??", "11/2", "13", "13??", "16", "22/26"]
    }, {
      name: "??????. ???????????? ??????????????????????",
      number: ["1", "2", "3", "3??", "4", "4??", "4??", "4??", "5", "6", "8", "10", "12", "16", "16??", "16??", "18", "20", "22", "24"]
    }, {
      name: "??????. ??????????????????",
      number: ["4"]
    }, {
      name: "??????. ???????????????? (????????????)",
      number: ["65", "66", "67", "68", "68??", "69", "70", "70??", "71", "72", "72??", "72??", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "92??", "93", "94", "94??", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "104??", "105", "107", "109", "109??", "111", "113", "115", "117", "119", " 1", "2", "2??", "3", "4", "5", "6", "6??", "7", "8", "8??", "9", "9??", "10", "11", "12", "13", "13??", "14", "15", "16", "17", "18", "19", "20", "21", "22", "22??", "23", "24", "25", "26", "27", "29", "30", "30??", "31", "31??", "34"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["2??", "2??", "2??"]
    }, {
      name: "??????. ?????????????? ????????????????",
      number: ["1", "3", "5", "7"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "4", "5", "6", "6??", "6??", "7", "9", "15", "23", "25", "26", "29/58", "32", "42"]
    }, {
      name: "??????. ???????????? ??????????????????????????",
      number: ["5", "9/2", "13/1", "15", "15/2", "17", "19", "21", "23", "23??", "23??", "25", "27", "29", "29/31", "32??", "33", "39", "41", "43", " 1/2", "9/2", "13", " 2", "2??", "4", "4??", "6", "6??", "8??", "10", "12", "12??", "14", "16", "18", "20", "20??", "20??", "22", "22??", "24", "26", "26??", "28", "28??", "28??", "28??", "30", "30??", "30??", "32", "32??", "32??", "34", "36", "36??", "38", "38??", "38??", "40", "40??", "42", "42??", "42??", "44", "44??", "46", "46??", "48", " 8", "1", " 75", "77", "79", "81", "83", "85/87", "92", "98", "102", " 84", " 67/7", " 89", "91", "93", "95", "97", "101", "103", "104", "106", "108", "110", "112", " 143/2", "145", " 55", "55??", "55??", "65", "69", "74", " 121", " 129", "131", "131??", "137", "139", " 130", "132", "134", "136", " 45", "47", "49", "51", "52", "53/3", "54", "56", "57/3", "58", "60", "62", "64", "66", "66??", "68", "70", "72", "76", "78", "80", "82", " 72", "72??", "73", " 111/113", "124", "126", "128", " 114", "116", "118", "120", "122"]
    }, {
      name: "??????. ???????????? ??????????????????????",
      number: ["8??", "8??", "9", "9??", "10", "12", "13", "14", "15??", "15??", "16", "17", "18??", "18??", "19", "19??", "19??", "20", "20??", "21??", "23", "24", "24??", "25/2", " 1", "2", "2??", "3", "4", "4??", "4??", "6", "6/11", "6??", "8/14", "11", "15", "16??", "18", "21", "24??", "24??", " 4", " 9", "33", " 26??", "26??", "26??", "27", "28", "28??", "29??", "29??", "30", "30??", "31", "32", "34", "38", "38??", "40"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["10??", " 85", "87", "110", "112", "114", " 10", "67", "69", "71", " 83", "92/98", "108", " 6", "53", "53??", "55??", "57", "61??", " 48"]
    }, {
      name: "??????. ?????????????????????? ??????????????????????",
      number: ["2", "4", "4/1", "4??", "4??", "6", "6??", "8", "8??", "8??/1", "8??", "10", "10??", "12", " 14", "14??", "14??", "14??", "14??", " 7", "7/1", "7??", "9", "9/1", "9??", "9??", "9??", "9??", "9??", "11??", " 3??", "3??/1", "3??/2", "3", "1/2", "3??/4", "3??/3", "1/4", "1??", "1/2??", "1??/1", "1??", "1/7", "1/1", "1??/2", "1??", "1/5", "1??/8", "1/3", "1", "6??/1", " 1/15", "1/16", "1/17", "1/18", "1/19", "1/20", "1/21", "1/22", "1/23", "3??", "5", "7??", "9??", "11/1", "23??", " 11", "11??", "13", "15", "15/1", "15/2", "15/3", "15/4", "15/5", "15/6", "15/7", "15/9", "17??", "17??", "17??", "19", "19/1", "19??", "19??", "19??/1", "19??", " 16", "18", "18/1", "18/1??", "18/1??", "18/2", "18/3", "18/4", "18/5", "18/6", "18/7", "18/8", "18/9", "18??", " 22/1", "24", "24??", "24??", "24??/1", "24??/2", "26", "26??", "26??", "26??/1", "26??", "28", "28/1", "28??", "28??/1", "28??/2", "28??", "28??", "28??", "28??/1", "30", "30/1", "30/2", "30/3", "30/4", "30/5", "30/6", "30??", "30??/1", "30??", "32", "32/1", "32/2", "32/3", "32/4", "32/5", "32/6", "32/7", "32/8", "32/9", "32/10", "32??", "32??/1", "32??/2", "32??/3", "32??/4", "34", "34??", "36", "36??", "36??/1", "36??", "36??/1"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "4??", "6", "8", "8??", "8??", " 4", "20", "20??", "21", "23", "24", " 1/1", "1/2", "2", "4", "4/1", "4/2", "4??", "4??/1", "4??/2", "4??/3", "4??/4", "6", "6/1", "6/2", "6/3", "6/4", "6/5", "6/6", "8", "8??", "8??", "8??/1", "8??", "8??", "9", "17", "17??", "17??", "17??", "19", "19??", "20", "20??", "21", "23", "24", "24/1", "26"]
    }, {
      name: "??????. ????????????????????",
      number: ["25", "25??", "27", "27??", "28", "29", "30", "30??", "31", "31??", "32", "33", "33??", "34", "35", "35??", "36", "36??", "37", "38", "40", "42", "42/2", "44", "44??", "46", "46??", " 1", "1/2", "2", "2/1", "4", "5/1", "5/2", "6", "6??", "7/1", "7/2", "8", "9", "10", "11", "11/2", "12/1", "12/2", "13/1", "13/2", "14", "15", "16", "17", "18/1", "18/2", "19", "20", "21/1", "21/2", "22/1", "22/2", "23", "24", "26"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3??", "5", "5??", "9", " 12", "12??", "14/39", "18/20", "24", "24??", "26/28", " 13/59", "15/60", "17/59??", "17/101", " 4"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"]
    }, {
      name: "??????. ?????????????? ??????",
      number: ["48/28", "48/28??", "48/28??", " 70", "72", "72??", " 28/12", "30", "30??", "32", "34/13", "40", "42??", "42??", "42??", "42??", "44", "50", "50??", "52", "54", "62", "64", "66", "68", " 2??", "4??", "4??", "4??", "16", "18", "20", "22"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["4", "6", "6??", "7", "8", "9/1", "9/2", "9/3", "9/4", "11", "12", "17/1", "17/2", "18", "18/1", "18/2", "19/1", "19/2", "19/3", "19??/1", "19??/2", "20", "21/1", "21/2", "23"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["43891"]
    }, {
      name: "??????. ????????????",
      number: ["3", "4", "5", "21"]
    }, {
      name: "??????. ????????????????????",
      number: ["14/11", "14??", "14??", "16", "16??", "16??", "16??", "20/2??", " 22 ??????????????", " 6??", "7", "8", "9", "13", "16", "17", "18", " 28", "31", "34", "35", "36??", "37", "38/9", "39", "45", "45??", "45??", "46/12", "47", "49", "51", "51??", "53", "53??", "54", "55", "57", "57/17", "59/18", "60", "61", "66", "68", "69", " 5??", "5??", " 80", "80??", "80??", "81", "82", "84", "85", "86", "87", "88", "91", "97", "99/13"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["1", "1??", "3", "5", "7", "10", "12"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["2", " 1", "3", "3??", "3??", "5", "5??", "7", "7??", "9", "9??", "9??"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "2??", "2??", "2/1", "3", "4/1", "4/2", "4??", "5/1", "5/2", "6", "7", "7??", "8", "8??", "9", "10", "10/1", "10/2", "11", "11/1", "11/2", "12", "12??", "12/1", "12/2", "13", "13/1", "13/2", "14", "15", "16", "16/1", "16/2", "16??", "17", "17/1", "17/2", "19/1", "19/2", "21", "22", "23", "24", "25", "26", "26??", "27", " 28/1", "28/2", "29/1", "29/2", "29/3", "30", "31??", "32", "32??", "32/1", "32/2", "33", "34", "34??", " 35", "37", "39", "39??", "41", "42", "44", "52", "52??", "54", "54??", "56", "56??", "56/2", "62", "64", "66", "68"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "16/15", "18/20", "21??", "22", "22??", "23", "24", "25", "26", "28", "31/37", "32", "34/36", "38/19", "41", "41/23", " 12", " 24 ??????????????", " 17/19", " 40/16", "42", "42??", "44", "49", "49??", "51/53", "55/13", "57", "59??", "59/67", "69", "70", "70??", "75/79", "81/83", "84", " 78", "80/17", " 82", "86", "99", " 87", "89??", "91??", "93", "95", " 92", "94", "94??", "96", "103", "104", "111"]
    }, {
      name: "??????. ????????????????????",
      number: ["40"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2??", "3", "3??", "4", "5", "6", "6??", "7", "7??"]
    }, {
      name: "??????. ????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["8", "10", "12", "14", "14??", "16", "18/2", " 2/26", "4", "6", "6??", "30"]
    }, {
      name: "??????. ????????????????????????",
      number: ["28??", "28??", "28??", "28??", "28/1", "28/2", "30", "32/2", " 5", "7", "19", "19/1", "21", "21/1", "21/2", "21/3", "23", "23??", "29", "29/1", "31", "31/2", "31/33", "33", "35", " 12", "14", "16", "16??", "18??", "18/2", "20/1", "22", "24", "26??", "26/1", "26/2", "26/3", "26??/1", "26??/2", "26/2??", " 4", "4??", "6", "6/1", "8", "10", " 45??", " 46??", "52", "54??", "85", "85??", " 48", "48??", "48??", "50", "50??", "50??", "51/1", " 53/1", "54", "55", "56/2", "57", "59", "63", "65", "67", "69", " 150", " 34", "36", "36??", "36??", "38", "38??", " 40/14", " 150??"]
    }, {
      name: "??????. ?????????????? (????????????????)",
      number: ["5", "8", "11", "17", "19", "23"]
    }, {
      name: "??????. ?????????????? (????????????)",
      number: ["18"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "3", "5", "5??", "5??", "5??", "7", "7??", "7??", "9", "9??", "9??", "11", "13??", " 2", "4", "6??", "8", "8??", "13", "13??", "13??", "17", "19/19", " 12", "12??", "12??"]
    }, {
      name: "??????. ????????????????????",
      number: ["9", "10", "11", "12"]
    }, {
      name: "??????. ??????????????????",
      number: ["1/14", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15/1", "15/2", "15/3", "16", "17", "18", "19", "20", "21/1", "21/2", "22/1", "22/2", "23/1", "23/2", "23/3", "24", "25", "26", "27", "28", "29", "30/1", "30/2", "31", "32", "34", "36/1", "36/2", "36/3", "40"]
    }, {
      name: "??????. ?????????????????? ????????????????",
      number: ["15", "16", "17", "18", "19", "21", "22", "23", "24", "161"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["5??", "6", "8", "10", "10??", " 3", "3??", "4", "5"]
    }, {
      name: "??????. ????????????????????",
      number: ["33"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "4", "6", "8", "10", "12", "16", "16/27", "22", "23/20", "24", "28"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "2??", "3", "4??", "5", "6/6", "8", "9", "10", "11", "12", "13", "14", "15/4", "16", "17", "18", "20", "21", "22", "23", "24", "25", "26", "27", "27??", "28", "31", "33"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["9", "11", "11/1", "11/2", "13", "15", "17/11", "19/14", " 2??", "2??", "3/7", "3??", "4", "5", "5??", "6??", "6??", "6??", "6??", "8??", "10", "10??", " 16", "18", "28", "30", "36"]
    }, {
      name: "??????. ??????????????????",
      number: ["14/39", " 8", "10", "12/10"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2/1", "2/2", "2/3", "2/4", "2/5", "3", "5", "5??", "6", "6??", "7", "8/127", "9", "11", "11/1", " 2", "2/1", "2/2", "20", "22/42", "25/169", "26", "26??", "27/31", "28", "28??", "29", "30", "32", "33", "41", "42", "43", "44", "45", "45/38", "46/2??", "49", "51", "55/2??", "55/1"]
    }, {
      name: "??????. ????????????????",
      number: ["37"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["??/??"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "2??", "3", "3??", "4", "4??", "5", "8", "8??", "9", "11", "15", "15??", "17", "17??", "17??", "32", " 2"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "1??", "1??", "3", "4/2", "5", "5??", "6", "8", "8??", "11", "12", "12??", "13", "16", "16??", "17", "17??", "18", "18??", "18??", "20", "21", "22", "22??", "23", "23??", "24", "25", "29??", "30", "30??", "30??", "31", "31??", "32", "33", "33??", "36", "38", "40", "41", "41??", "41??", "42", "42??", "43", "43??", "44", "45", "48", "50", "50??", "51", "51??", "53", "55", "57", " 57??", "59", "65", "65??", "69", "69??", "75", "75??", "75??", "77", " 11??", "27", "27??", "33??", "37", "41??", "43??"]
    }, {
      name: "??????. ?????????????? ????????????????",
      number: ["3??", "3/11", "4/9", " 7", "7??", "8", "8??", "9", "10", "11", "11/1", "12", "13/2", "15", "17/4"]
    }, {
      name: "??????. ?????????????? ????????",
      number: ["1", "2", "2??", "2??", "3", "4", "4??", "6", "6??", "6??", "8", "10??", "10??", "10??", "10??", " 17", "21/7", " 10"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "3??", "3??", "4", "5", "6", "7", "8", "8/27", "9", "11/1", "11/2", "11/3", "11/4", "12/49"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "4", "5", "6", "6??", "7", "9/11"]
    }, {
      name: "??????. ????????????????",
      number: ["2??", "6", "6/2", "8", "8/2", "12", "14/1", "14/2", "16/1", "16/2", "18", "20", "20??/2", "22", "22/2", "24", "26"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "5", "7"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1", "1??", "2", "3", "4", "5", "7", "9", "10", "10??", "12", "14", "16", "17", "18", "25", "27", "29", "29??", "29??", "31", "31??", "32", "33", "36", "37", "38", "40", "43", "45", "47", " 37??", "41", "43", "48", "52-54??", "56", "58", "60??", "60??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["29??", "35", "35??", "41", "41??", "", " 23", "29", " 12", "14", "16", "18", " 1/2", "3", "5", "7??", "9", "11", "13", "15", "15??", "17", "19", "21", "21??", "33", " 2", "2/4", "4", "6", "6??", "9??", "10", "25", "25??", "27", "31", "37", "39"]
    }, {
      name: "??????. ??????????-??????????????",
      number: ["58", " 61", "62", "64", "65/7", "66", "67", "68/10", "69", "71/8", "72", "73", "74", "75", "76", "77", "78/10"]
    }, {
      name: "??????. ??????????????",
      number: ["3/4", "5/1", "5/2", "7", "9", "11", "12??", "15", "17", "19", "21/1", "21/2", "21/3", "21/4", "24", "27", "28/1", "29", "32", "33", "34", "36", "37", "38", "39", "40", "41", "43", "45", "46", "48", "48??", "49", "50/2", "50/3", "51", "53", "54", "55", "56", "57", "59", "60", "61", "62", "63", "64", "64/1", "64/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "3", "4", "6", " 4??", " 69", " 22", "25", "29/11", "31", " 34/1", "36", "40", "42", "44", "46??", "48", "48/50", "55", "55??", "56", "60", "60??", "62", "64", "65", "66", "66??", "67", "67??", " 2??", "9/21", "10", "11/14", "12", "15", "16", "17/28", "21", " 5", "7", "8"]
    }, {
      name: "??????. ?????????????? ????????????????????",
      number: ["2", "2/1", "2??", "4", "4/1", "4/2", "4??", "4??/1", "4??", "4??", "4??", "6", " 8", "8/1", "8??", "10", "10??", "12", "12??", "12??/1", "14", "16", "16/1", "18", "18/1", "18/2", "18/3", "20", "20??", "22", "22??", "24", "26", "26??", "26??/1", "26??/2"]
    }, {
      name: "??????. ???????????????????? ????????",
      number: ["1", "1??", "1??", "1??", "1??", "2", "3", "3??", "3??", "3??", "4", "5", "5??", "6", "7", "8", "9", "10", "10??", "11", "11??", "12", "12??", "13", "13??", "14", "14??", "15", "16", "16??", "17", "17??", "18", "19", "20", "21", "21??", "22", "23", "25", "27", "29", "29??", "29??", "29??", "31", "33", "33??", "35", "35??", "35??", "39", "39??", "47"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["2", "3", "3??", "6", "8", "12??", " 47", "74", "76", "80/1", "82/1", "82/2", "84", "86", "88/2", "90/1", "92", "94??", "94/1", "96", "98/1", "98/2", "100", "100??", "104/1", "106", "108", "110/47", "114/1", "114/2", " 118", "120", "122", "122/1", "122/2", "122/3", "124/1", "124/2", "126/2", "128/1", "128/2", "130", "130/1", "132", "136", "138"]
    }, {
      name: "??????. ???????????????????? ????????????????????",
      number: ["3", "4", "9", "9??", "10", " 10", "12", "14", "16", "18", "20"]
    }, {
      name: "??????. ????????????????????-??????????????????",
      number: ["25", " 16", " 22"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1", "2", "3", "4", "5", "5??", "6", "7", "8", "9", "10", "12", " 19", "19??", "20/21", " 11", "12", "12??", "16??", "18/2", "19", "19??", "20/1??", "20/1??", "22", "22??", "22??", "23", "23??", "23??", "23??", "24", "25", "27", "29??", "37", "37/29", "39/24", "41", "43", "43??", "45", "45??", "45??", "47", "49", "49??", "49??", "51/53", "51??", "51??", " 12??", "16??", "18/2", "20/1??", "20/1??", "22", "22??", "24", " 23", "23??", "23??", "25", "27", "29", " 60", "61/11", "61??", "63", "64/13", "65", "66", "67", "69", "69/1", "69??", "71", "73", "74??", "75", "76", "76??", "77", "77??", "78", "79", "79??", "81", "81??", "83", "85", "85/40", " 82??", "92/39", "94??", "94??", "96", " 82", "82??", "84", "86", "89", "89/91", "89??", "93", " 37/97", "99", "101", "101??", " 34", "36", "38", "40/2", "42??", "44", "48", "48??", " 55", "57", " 42", "46", "54", "58", "60", "62", "64", "68", " 13", "15", "33", " 26"]
    }, {
      name: "??????. ????????????????",
      number: ["6/14", "12/14", "18/17", "21", "21??", "24", "29", "31??", "32/34", "36", "36/38", "37??", "37??", "42", "43", "44", "46", "48/28??", "42/28??", "50/38", "51/27", "52", "55/57", "62", " 2", "2/19", "3", "3??", "4", "5", "6", "11??", "12", "12/4", "17/18", "18", "18/7", "19", "20", "23"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "5"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "4", "5", "6", "8", "10", "12/14", "15", "17/1", "17/2", "19/1", "19/2", "20/1", "21", "22", "22??", "23", "24", "24??", "25", "25??", "25??", "26", "28", "28??", "30", "32/32"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["11", "11??", " 2", "2??", "3", "4", "4??", "6", "6??", "7", "7??", "8", "10", "12??", "12??", "12??", "12??", "14??", "14??", "14??", "14??", "14??", "16", "16??", "16??", "16??", "16??", "18", "18??", "18??"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["3", "4", "5", "6", "7", "8/2"]
    }, {
      name: "??????. ????????????????",
      number: ["21"]
    }, {
      name: "??????. ?????????????????? ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4", "4/1", "5"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11??", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "21/1", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38??", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "53", "55", "57", "59"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "3", "4", "4??", "5", "5??", "5??", "6", "7", "7??", "7??", "7??", "7??", "7??", "7??", "7??", "8", "9", "10", "11", "12", "12/1", "12??", "12??", "13", "14", "15", "15??", "16", "17", "18", "19", "21", "27", "29", "31", "31??", "33", "35", "37", "39", "41", "43"]
    }, {
      name: "??????. ??'???????????????? ??????????????????????",
      number: ["12??", " 21", " 3", "4", "4??", "4??", "4??", "5", "6", "7", "7??", "8", "9", "9??", "10", "11", "12", "13", "14", "16"]
    }, {
      name: "??????. ??????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4/1", "4/2", "5", "6", "6??", "7", "8", "10", "11", "12", "13", "14", "16", "17", "18", "19/1", "19/2", "20", "21", "23/1", "23/2", "27", "29/1", "29/2", "31", "33", "35", "36", "37", "38", "39", "39??", "43", "45/1", "45/2", "47", "49", "51", "53", "55", "57", "59", "61", "63"]
    }, {
      name: "??????. ???????????????? ????????",
      number: ["11", "11??", "13", "13??", "13??", "13??", "15", "15??", "17", "17??", "17??", "17??", "19/30"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"]
    }, {
      name: "??????. ????????????????????????",
      number: ["??/??", " 9", "11"]
    }, {
      name: "??????. ???????????? ??????",
      number: ["2", "2/1", "2/2", "2/3", "2/4", "2??", "4", "6", "6/1", "6/2", "6/3", "6??", "10", "10??", "10??", "10??", "10??", "12/10", " 1??", "3", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3??", "5", "5/1", "5/2", "5/3", "5/4", "5/5", "7", "7/1", "7/2", "7??", "7??", "9/8", "9/8??", "9??"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "4", "5", "6", "7", "8", "9", "10", "10??", "11", "12", "12??", "13", "15", "16", "19"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/9", "2/7", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "22", "22??", "24/14"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["14", "16", "18", " 4/2", "6"]
    }, {
      name: "??????. ????????????????",
      number: ["10", " 1", "3", "10??", "12", "14", "16", " 11", "13", " 7??", " 4", "4/6", "6", "6??", "7", " 9"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["23 ????????????", " 25", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "48", "50", "51", "53", "54", "56", "58", "60", "62", "64", "66", "68", "68??"]
    }, {
      name: "??????. ????????????????",
      number: ["55", "57", " 39??", "39??", "39??", "45", "47", "49", "51", "51??", "53", " 2", "2??", "6", "10", " 1", "4", "7", "8", "16/85", "20", "21", "21/30", "23", "25", "29/31", "31", "37", "37??", " 30", "32", "34", "35", "36", "38", "38??", "38??", "40", "42", "44/2", " 18", "26/2", " 33/1"]
    }, {
      name: "??????. ??????????????",
      number: ["4", "6", "12", "16", "20", "24"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["3/1", "4", "5", "6/1", "6/2", "7", "8", "9/1", "9/2", "10"]
    }, {
      name: "??????. ??????????",
      number: ["1??", "3", "5", "5/1", "5??", "8", "8/2", "10/6"]
    }, {
      name: "??????. ??????????????????????",
      number: ["80", "80??", "80??/1", "85", "87", "87/1", "87/3", " 63??", "65", "67", "67??", "68", "69", "70", "71", "71??", " 22", "24", "25", "26", "27", "28", "29", "30/1", "30/2", "30/3", "34", "35", "36", "37", "38", "38??/1", "38??/2", "39", "39??/1", "39??/2", "40", "41", "41??", "42", "43", "44/1", "44/2", "45/1", "45/2", "46", "46??", "47/1", "47/2", "48", "49", "49??", "50", "51", "52", "53", "54", "54??", "55", "57", "58", "58??", "59", "60", "61", "62", "62??", "63", "66", "66??", " 72", "73", "74", "75", "75??", "77", "80", "80??", "81", "83", "85", "87", "87??"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["6", "8", "9", " 2", "4", " 1", " 18/7", "18/9", " 12", " 12", "13", "14", "18/7", "18/7??"]
    }, {
      name: "??????. ???????????????? ???????????????? ??????????????????",
      number: ["12", "14", "16", "18", "20", "22", " 1/26", "3", "4/1", "4??", "5", "7", "8", "8??", "9", "10", "10??", "11", "12??", "12??", "13", "13??", "13??", "13??", "13??", "13??", "13??", "13??", "15", "15??"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["1", "2", "2??", "3", "5", "6", "10", "12", "14/22", " 9", " 7", "9??", "20"]
    }, {
      name: "??????. ?????????????????????? ????????????????????",
      number: ["2/1", "3/1", "3/2", "4", "5/14", "6", "7", "9"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["1", "2", "3", "4", "5", "5??", "6", "7", "8", "9", "10", "11", "12", "12/18", "13", "14", "15", "16", "17", "18", "18/1", "19", "21", "23", "23??", "25", "27", "29", "31", "31??", "33", "35", "35/1"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["1", "2??", "2??/1", "2??/1", "2??/2", "3", "3??", "5", "6", "7", "7??", "7??/1", "7??", "9", "11", "12", "12??", "12??", "13", "14", "14??", "14??", "14??", "14??", "14??/1", "14??/2", "15", "16", "16??", "16??", "16??", "16??", "16??", "18", "18/1", "21", "23", " 17", "19", "19??", "19??", "20", "20??", "20??", "22", "22/1", "22/2", "22??", "22??", "24", "25", "26", "28/45", " 27", "29", "29/1", "29/2", "29/3", "29??", "31", "31/1", "31/2", "31/3", "31??", "31??", "31??", "31??", "33", "33/1", "35", "37", " 30", "30/1", "30/2", "30/3", "30/4", "30/5", "30/6", "30/7", "30/8", "30/9", "30/10", "30??", "30??", "32", "32/1", "32/2", "32/3", "32/4", "32/5", "32/6", "32??", "32??", "32??", "32??", " 57", "59", "59/1", "59/2", "61", "63", "63/1", "65", "67", "67??", "69", "71", "73", "73/1", "75", "77", "79", " 34", "34/1", "34??", "34??/1", "34??", "36", "36??", "36??", "36??", "38", "38/1", "38/2", "38??", "38??", "38??/1", "38??", "38??", "38??", "38??", "40", "40??", "40??", "42", "42??", "42??", "42??", "42??", "62", "64", " 41", "41??", "41??", "41??", "41??", "41??", "41??", "41??", "41??", "43", "45", "45/1", "47", "47/1", "49", "49/1", "49/2", "51", "53", "53??", "55", "55/1"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["3", "4", "5", "5??", "7", "7??", " 1", "2??", " 1??", "1??", "1??", " 11", "13", "15", "15??", "17", "17??", " 19", "19??", "19??", "19??", " 5", "6??", "8"]
    }, {
      name: "??????. ???????????? ???????????????? ??????????",
      number: ["1", "2", "2??", "3", "4??", "4??", "5"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["11", "12", "12??", "12??", "13", "14", "14/1", "15", "15/1", "16", "16??", "17", "18??", " 3", "3/2", "4", "4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "5", "6", "6/1", "6/2", "7", "8", "8/1", "8/2", "8/3", "8/4", "8/5", "8/9", "9/10", "10", "10??"]
    }, {
      name: "??????. ???????????? ??????????????????????",
      number: ["65/1", "65/2", " 48", " 39/8", " 23", "23??", "25", "27", "29", "31", "33", "35", "37", " 8", "10??", "10??", "12", " 14", "16", "18/2", "20/1", "22", "22??", "24/2", " 26", " 1", "3??", " 17??", "17??", "17??", " 3", "5", "5??", "7", "7??", "7??", "9", "9??", "11", "11??", "11??", "11??", "13", "13??", "15", "17", "19", " 30", " 32", "34/2", " 36/1", "36??", "40", "42", "42??", "44/10"]
    }, {
      name: "??????. ??????????????",
      number: ["7", "9", "17/25", "18/20", "31", "35", "35??", " 2", "6", "10", "12"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["27", " 17", "25", " 1", "1??", "1??", "1??", " 2", " 3", "6", "6??", "6??", "15", " 22", "22??", "22??", "24/9", "26??", "26??", "28??", "28??", "30", "30??", " 40", "40??", "42", "42??", "44", "44??", "46", "46??", "46??", "48", " 31/2??", "34", "36", "38"]
    }, {
      name: "??????. ???????????? ???? ??????????????",
      number: ["1", "1??", "2", "2??", "3", "4", "5", "6", "7", "8", "8??", "9", "10", "10??", "11", "12"]
    }, {
      name: "??????. ??????????????????????",
      number: ["8??", " 01 ????????"]
    }, {
      name: "??????. ??????????????????",
      number: ["02 ????????????", " 4/47", "4/7", "3", "7", "9", "10", "11", "11/1", "11/2", "13", " 1"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4", "10", "12", " 13", "13??", "16", "17", "17??", "17??", "28", "29/31", "33/37", "40", "40??", "40??", "40??", "40??", "41", "43", "44", "44??", "48/52", "53", "69", "71", " 28", "32", "32??", "32??", "32??", "58", "71??", "72", "101", "105", "105??"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "4/10", "7", "12/14", "14", "16"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
    }, {
      name: "??????. ????????????",
      number: ["1", "3", "5", "6", "7", "10", "12"]
    }, {
      name: "??????. ????????????????????",
      number: ["6/10", "7", "8", "8/2", "9", "10", "10/1", "10/2", "11", "12", "13"]
    }, {
      name: "??????. ?????????? ????????????",
      number: ["10", "10/40", "12??", "12??", "12??", "14", "14??", "14??", "14??", "14??", "16", "16??", "18", "18??", " 2", "2??", "2??", "4", "6", "6??", "8??", " 1", "1/2", "1/4", "1??", "1??/4", "1??", "1??/6", "1/4??", "1/6", "3", "3??", "3??", "5", "5??", " 7", "9", "9??", "9??", "9??", "9??", "11", "13", "13??", "15", "15??", "17"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["1/1", "3", "3??", "5", "7??", "9", "11", "11??/1", "11??/2", "13", "13??", "13/2", "14", "15", "16", "18", "20", "22", "24", "24??", "26", "26/2", "26??", "28", " 10??", "12", "17", "19", "21", "23", "25", "27", "29", "30", "30??", "31", "32", "32??", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "44", "45", "45??", "46", "48", "50", "52", "54", " 1??", "1??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2??", "4", "6", "6??", "8", "10", "12", "13/30", "14", "15", "17", "21", "22/24", "23", "25", "26", "27", "28", "29", "30", "32", "32??", "34", " 01 ??????????", " 39 ????????????", " 5", "7", "9", " 48", "49", " 30??", "36/40", "37/2", "37/2??", "39", "39??", "41??", "41??", "42", "42??", "43??", "47"]
    }, {
      name: "??????. ???????????? (????????????????)",
      number: ["1??", "2", "2??", "3", "4", "5", "6", "7", "8", "9", "9??", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "34??", "35", "36", "39", "39??", "40", "41", "41??", "42", "43", "45", "47", "49"]
    }, {
      name: "??????. ???????????? (????????????)",
      number: ["1", "2", "3", "3??", "4", "5", "5??", "5??", "5??", "6", "7", "7??", "7??", "8", "9", "10", "11", "12", "13", "14", "16", "16??", "18", "18??"]
    }, {
      name: "??????. ???????????? (????????????????)",
      number: ["1", "1??", "1??", "2", "3", "4", "5", "5??", "6", "6??", "7", "8", "9", "9??", "9??", "9??", "10", "10??", "12", "14", "14??", "16", "16??", "18", "20", "20??", "22", "24", "26", "26??", "28"]
    }, {
      name: "??????. ?????????????????????? ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["12", "25", " 1", "4", "6", " 27", "29", "31", " 3", "13", "17"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "4", "4??", "6", "8", "10", " 12", "14", "16", "18", " 13", "13??", "13??", "15", "17", "51", "53", " 3", "5", "7"]
    }, {
      name: "??????. ????????????????????",
      number: ["21/2", "22/2", "24/2", "27/2", "28/2", "32/2", "33/2", "35/2", "36/2", "37??", "38/2", "40/2", "41/2", "42/2", "43/2", "45/2", "46/2", "47/2", "49/2", "50/2", "51/2", "55/2", "56/2", "58/2", "62/2", "68/2", "70/2", "70/3", "78/31", " 4/11", "4/1????????1", "4/11????????2", "6/2", "6/12", "8/11", "10", "10/13", "11/9", "12", "14", "15/9", "16", "17/10", "17??", "18", "19", "19??", "19/4", "19/11", "20", "20/2", "21", "22", "23", "24", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59/61", "60", "62", "63", "64", "66", "68", "70", "72", "74", "76"]
    }, {
      name: "??????. ?????????? ??????????",
      number: ["1", "3??", " 3", "5", "7", "9"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["22", "24", "24??", "24??", "26", "28", "28??", "30??", "30??", "30??", "32??", "32??", "36??", "36??", "38", "40", "42", "42??", "44", "46/48", " 96", " 17/19", " 33", "33??", "33??", "35", "37??", "41", "41??", "43", "43??", "45??", "45??", "45??", "45??", "47/49", "47??", "47??", "51", "53", "55", " 55??", "65", "57", "57??", "59", "65??", "67", "74??", "74??", "82", "86??", "86??", "88??", "88??", " 50", "52", "60", "62", "71", "73", "75", "77", "79", "90/92", " 55??", " 4", "6", "8/5", "9", "12", "14/26", "15/3", "25", "25??"]
    }, {
      name: "??????. ????????????????",
      number: ["15??", "18??", "20"]
    }, {
      name: "??????. ??????????????????",
      number: ["16", "21", " 2/16", "4/2", "6/1", "6/2", "8??", "8/1", "8/2", "10/1", "10/2", "10/3", "12", "14", "18", "18??", "20/1", "20/2", "22", "23/1", "23/2", "24", "25/1", "25/2", "25??", "26/33", "27", "29/1", "29/2", "31/1", "33", "35", "37/1", "37/2", "39", "41", "43", "45/1", "45/2", "47", "49", "51/35"]
    }, {
      name: "??????. ??????????????",
      number: ["17", "19", " 3", "4", "5/1", "5/2", "6/1", "6/2", "7", "8", "9/1", "9/2", "10", "11/1", "11/2", "12/1", "12/2", "13/1", "13/2", "14/1", "14/2", "15/1", "15/2", "16"]
    }, {
      name: "??????. ????????????????????",
      number: ["124", "124/140", "124??", " 124/1", "124/2", "124/3", "124/4", "137", "137/1", " 110", " 209", "211", "213", "213/1", "215/1", "220", "220????????1", "220????????2", " 38/1", "75", "77", " 38/40"]
    }, {
      name: "??????. ???????????????????????? ??????????????????????",
      number: ["4", "6", "10", "12", " 1/3", "1-3/11", "4??", "4??", "4??", "5", "9", "11", "11??", "11??", "11??", "15", "17", "17/1", " 13"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["6??", "7", "7/1", "7/2", "8", "10", "10/43"]
    }, {
      name: "??????. ??????????????",
      number: ["4", "6??", "8", "10", "12", "14", "16", "16??", "20", "22", "24", "26", "28", "30", " 7", "9", "11", "13", "32", "38", "40"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "2??", "2??", "2??", "2??", "3", "3??", "4", "5", "5??", "6", "7", "8", "8??", "8??", "9", "10", "10??", "11", "11??", "11??", "12", "13", "14", "15", "16", "16??", "17", "18", "19", "19??", "20", "20??", "21", "21??", "23", "23??", "24", "25", "25??", "26", "27", "28", "29", "30", "30??", "31", "32", "32??", "33", "33??", "34", "35", "35??", "36", "36??", "37", "37??", "38", "38??", "39", " 40", "41", "41??", "42", "43", "43??", "44", "45", "47", "47??", "48", "48??", "49", "49??", "50", "51", "53", "55", "57"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "32", "34", "36", "38", "40", "42"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", " 16", "18", "24", "24??", " 4", "4??", "12", "12??", "12??", "12??"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "5", "7", "9/37"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1??", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
    }, {
      name: "??????. ???????????????????????? ??????????",
      number: ["12", "14/1", "14??", "15??/1", "15??/2", "16/20", "17", "17??", "18", "19", "19/2", "21", "22/1", "22/2", "23/1", "23/2", "23??", "24", "25", "26/1", "26/2", "27/1", "27/2", "28", "29/1", "29??", "30/1", "30/2", "31/1", "31/2", "32", "33", "35", "37/1", "37/2"]
    }, {
      name: "??????. ????????????????????",
      number: ["6", "6??", "6??", "8", "9", "10", "10??", "10??", "11", "14", "18", "20", " 1", "3", "5", "7", "7??"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
    }, {
      name: "??????. ?????????????? ??????????????????",
      number: ["26", " 18", "18??", "18??", "22", "22??", " 15", " 13", "15??", " 2", " 3", "3/1", "3/2", "5", "10", "12", "12??", "12??"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["16", "18??", "18??", "18??", "20", "20??", "20??", "20??", "20??", "22", " 8??", "8??", "12", "12??", "12??", " 8??", "10??", "10??", "12??", "12??", "12??", " 2", "4", "6", "8", "8??", "8??", "8??", "10", "18??", "18??", " 9", "9??", "9??", "9??", "9??", "11", "11??", "13", "18", "24", "24??", "24??", "24??", "26", "26??"]
    }, {
      name: "??????. ??????????????????????-??????????????????",
      number: ["3", "5", "7", "7??"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["3??", "4", "10", "11", "13", "16", "17", "18", "19", "20", "21", "23", "29", "31"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["1", "3", "3??", "4", "4??", "6", "6??", "7", "8", "8??", "8??", "9", "10"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["1", "2", "2/1", "3??", "3??", "4", "7", " 1", "3"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["2/1", "4", "6", "8", " 4??", "4??", "4??", " 16", "18", "18??", "18??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["32", "32??", "36", " 1/35", "3/5", "4", "5", "6", "8", "9", "10", "11", "12", "13", "14", "14??", "15", "16", "17", "18", "19", "20", "20/2", "21", "22", "23", "24", "26", "27", "29", "32??", " 14??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["12", "14", "16", "18"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/10", "2/10", "3", "4", "5", "11", "12", "13", "13??", "14", "15", "16", "17", "19", "20", "22/11", "23", "25"]
    }, {
      name: "??????. ???????????????? ??????????",
      number: ["1", "2", "3", "4", "5", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32"]
    }, {
      name: "??????. ????????????????????",
      number: ["26", "26??", "26??", "26/1", "27??", "28", "28??", "28??", "28/1", "29", "30", "31/2", "31/28", "32", "34"]
    }, {
      name: "??????. ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ???????????????????????? ??????????????",
      number: ["8", "8/16", "10", " 2", "4", "4??", "4??", "8", " 5", "12/2", "18/2", " 36", " 9", "9??", "14", "16", "16/1", "28/2", "30??", "32", "34/1", "34??", " 30 ????????????", " 1", "1??", "1??", "1??", "3", "3??", "7"]
    }, {
      name: "??????. ?????????????????????? ????????????",
      number: ["1", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "11/11", "15", " 8/10", "12/7", " 2", "2??", "4", "4??"]
    }, {
      name: "??????. ????????????",
      number: ["17", "19", "20", "22", "23", "24", "25"]
    }, {
      name: "??????. ???????? ????????????????????",
      number: ["3??", "3??", "18", "22"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["1", "2", "3", "4", "5", "6", "8", "8??", "10", "12", "12??", "14", "14??", "16", " 18", "20", "22", "24", "26", "26??", "28", "28??", "28??", "30", "32", "32??", "32??", "34", "34??"]
    }, {
      name: "??????. ???????????????????? ????????????????????",
      number: ["8", "10", "12", "13", "13??", "13??", "14", "15", "16", "16/1", "16/2", "17", " 1/79", "1??", "3", "4", "4??", "5", "7", "7??"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "10"]
    }, {
      name: "??????. ??????????-????????????????",
      number: ["28"]
    }, {
      name: "??????. ??????????????????",
      number: ["5", "20", "22", "24", "25", "27", "35/1", "35/2", "35/3", "35/4", "37/1", "37/2", " 06 ??????????????"]
    }, {
      name: "??????. ????????????????",
      number: ["15??", "19", " 1", "1??", "3/5", "4", "13/6"]
    }, {
      name: "??????. ????????????????????????",
      number: ["33??", "33??", "33??", "35/9", " 31", " 37", "39", "43", "43/1", "43/2", "43/3", "43/4", "43/6", "43/7", "43/8", "43/9", "45", "47", "49", "49??", "49??", " 53", "53??", "55", " 51", "51??", "51??", " 3", "5", "7", "8??", "9", "11", "12/7", "13", "15", "15??", "15??", "17??", " 4??", "6", "6??", " 48", "50", "52", "58", "60", "60??", "60??", " 54", " 62", "62??", "62??", "62??", " 11??", "11??", "13/24", "32", " 23", "25", "25/1", "25??", "25??/1", "27", "27??", "27??", "29", "38/44", " 17", "21", "36", " 26", "26??", "26??", "28", "30", " 30??"]
    }, {
      name: "??????. ????????????????",
      number: ["18", "19", "20", "22", "22??", "25", "27", "29", "30", "31"]
    }, {
      name: "??????. ??????????????",
      number: ["1/16", "3/1", "3/2", "4", "5", "6", "6/1", "8", "9", "10/38", "11??", "11/1", "11/2", "11/3", "12/1", "13/1", "13/2", "13/3", "14/1", "14/2", "15", "16/1", "16/2", "17", "19", "19/2", "20", "21", "22", "23/1", "23/2", "24", "26/1", "26/2", "28", "30", "30/1", "32", "34/1", "34/2", " 38", "38??", "40", "42"]
    }, {
      name: "??????. ??????????????????????",
      number: ["9??", " 1", "1/1", "1/2", "1/3", "2", "2??", "2??/1", "2??/2", "2??/3", "2??/4", "3", "5", "5/1", "5/2", "5/3", "5/4", "5/5", "5??", "5??", "5??/1", "5??/2", "6", "6/1", "6/1??", "6/1??", "6/1??", "6/1??", "6/1??", "6/1??", "6/2", "6/3", "6/4", "6??", "6??", "7", "8", "8/1??", "8??", "9", "9/1", "9/2", "9/3", "9/4", "9/5", "9/6", "9/7", "9??", "9??/1", "9??", "10", "10/1", "10/2", "10/1??", "10??", "12", "12/37", "12/37??", "12??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8??", "9", "10", "11", "12", "13", "13/1", "14", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38??", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "49??", "50", "51", "51??", "52", "53", "54", "55", "56", "58", "59", "62", "64", "65", " 66", "67", "68", "69", " 71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "84"]
    }, {
      name: "??????. ????????????????????",
      number: ["5??", "12", "14", "16", "18", " 35", "37", "39", "41", "43", "43??", "51", "53", "55", " 29", "31", "33", "33??", "35??", "45", "45??", "45??", "47", "49"]
    }, {
      name: "??????. ??????????????????????",
      number: ["20??", "21", "22", "22??", "23??", "24", "26??", "28/2", "30", "32", " 2", "4/6", "4/6??", "6", "10??", "14", "15/17", "17/6", "27", " 1", "3", "5", "7", "13", "23", "23??", "25"]
    }, {
      name: "??????. ????????????????????????",
      number: ["43984", " 19", "19??", "19??", "21", "21??", " 8", "10", "10??", "14", "16", "16/18-2", "16/18-3", "18", "20??", " 12/42", "17??", " 20 ??????????????", " 13", "13??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1", "3", "3??", "4", "5", "5??", "5??", "6??", "6??", "7", "8"]
    }, {
      name: "??????. ????????????????????",
      number: ["19"]
    }, {
      name: "??????. ???????????????????? (????????????????)",
      number: ["2", "2??", "4", "6", "6??", "10", "12", "14", "16", "16??", "18", "20", "22", "24", "24??", "24??", "26", "28", "32", "34"]
    }, {
      name: "??????. ??????????????????",
      number: ["1/3", "3??", "4/6", "5", "7", "8", "10", "11", "12", "13", " 4/6", "14"]
    }, {
      name: "??????. ?????????????? ????????",
      number: ["1", "2", "3", "4", "5", "6", "8", "9", "10", "12", "13", "14", "15", "18", " 17", "19", "20", "21", "22", "24", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "41", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["3", "5"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "6/5", "7/5"]
    }, {
      name: "??????. ?????????????????? (????????????????)",
      number: ["2", "6", "8", "12", "15", "17", "20", "24", "28", "55"]
    }, {
      name: "??????. ?????????? ????????????????",
      number: ["20", "20??", "20??", "22", "22??", "26", " 31", "31??", "33", "35??", "35??", "37", "37??", "39", "39??", "41/22", " 5", "5??", "7", "9", "10", "10??", "11", "12", "13/2", "14", "15", "16", "16??", "18", "18/1", "22/1", " 29", " 1", "1??", "1??", "3", "3??", "7", " 28/25", "30", "32", "34", "36", "38", "38??", "38??", "40", "42", " 43"]
    }, {
      name: "??????. ?????????? ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????",
      number: ["4/31", "5", "7/1", "7/2", "8", "9", "10", "11", "12", "13", "14/1", "14/2", "15", "15??", "16", "17", "17??", "18", "19/1", "19/2", "20", "21/17", "22/1", "22/2", "23/18", "24/1", "24/2", "25/1", "25/2", "26", "27", "28", "29/1", "29/2", "30", "31", "32", "32??", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "43??", "44", "45", "45??", "46", " 47", "48", "49", "50/1", "50/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "4", "5", "5??", "7", "7??", "7??", "9", "11", "13", "13??", "15", "17", "23", "25", "27", "27??", "29", "31"]
    }, {
      name: "??????. ????????????",
      number: ["5", "5(????????????10??)", "5/2", "5??", "5??", " 9", "11", "13", "14??", "22", "22??", "22??", "24"]
    }, {
      name: "??????. ??????????????????????",
      number: ["44??", "44??", "46", " 30", "46", "48??", "52", "52??", "56", "56??", "56??", "58", "60", "62/20", " 1", "2", "3/7", "9/11", "13", "13??", "15/17??", "17??", "18/14", "18/24", "19??", "19??", "21", "23??", "24", "25", "27", "29??", "33", "35", "35??", "35??", "37??", "37??", " 45", "64", "66", "68", "69", "71", "76", "78", "92/94", "94", "96/98", "104", " 16??", "16??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1", "2", "3", "6", "7", "7/1", "8", "9/2", "10", "11", "13/1", "15", "16"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2??", "3", "3??", "3??", "3??/1", "4", "4??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["19"]
    }, {
      name: "??????. ???????????? ????????",
      number: ["13", "15", "17", "19", "21", "23", "25", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "68", "70", "72", "74", "76", "80", "82", "84", "86", "88", "90", "92", "92??", "94", "96", " 5", "5??", "7", "8", "9", "9/1", "10", "11", "16", "16??", "18", "18/1", "20/1", "20/2", "20/3", "20/4", "20/5", "22/1", "22/2", "22/4", "22/5", "24", "26"]
    }, {
      name: "??????. ????????????????????????",
      number: ["5", "5/1"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "34", "40"]
    }, {
      name: "??????. ???????????????????????? ??????????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16??", "17", "18", "18??", "19", "20", "21", "22", "23", "24", "25", "26", "26??", "27", "28", "29", "29??", "30", "30??", "31", "32", "33", "34/2", "35", "37", "39", "39??", "41", "43", "44??", "45", "47"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/1", "3/1", "3/2", "4", "5/1", "5/2", "6", "7/1", "8/3", "10", "12/1", " 7/1", "7/2", "9", "12", "14", "16"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["12/1", "12/2", "13", "14/1", "14/2", "15", "16", "17/1", "17/2", "18", "19", "21/1", "21/2", "22/26", "24", "25", "26/17", "27", "28", "30/1", "30/2", "32", "34"]
    }, {
      name: "??????. ?????????????????????? ??????????????????",
      number: ["11", "11??", "28", " 1", "1??", "2", "4", " 24??", "26", "30", " 17", " 3", "3??", "5", "5??", "5??", "6", "7", "7??", "8", "9", "10", "12", "13", "14", " 13", "15", "20/19", "24"]
    }, {
      name: "??????. ??????????????????",
      number: ["8"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["1/53", "2/55", "3/1", "3/2", "4", "5", "6", "8", "9", "11/1", "11/2", "13/1", "13/2", "14/17", "15", "16", "16/1", "16/2", "17", "18/1", "20", "22"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["18", "22", " 2/1", "2??", "4", "6", "8", "8??", "10", "10??", "12", "12??", "13/22", "14??", "15/19", "17", "19", "21", "23", "25", "27", "29", "31", "33", " 3", "5", "7", "9/11", " 32", "32??", "35", "37", "39"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8??", "9", "10", "11", "12", "13", "13??", "14", "15", "15??", "17", "18", "18??", "19", "20", "21", "22", "23", "24", "25", "25??", "26", "27", "27??", "29"]
    }, {
      name: "??????. ???????????????? ????????????????????",
      number: ["7", "7??", "12??", "14", "14/1", "14??", "14??", "16", "16??", "16??", "16??", "18", " 1", "2", "3", "4??", "8", "10", "12", "12??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["4", "5", "5??", "11", "12", "14", "15", "16", "16??", "17", "18", "18??", "19", "21"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "??????. ????????????????",
      number: ["22", "24", "26", "26??", "30", "35", "37/19", "57??", " 5", "7", "8??", "8/10", "10??", "14/30", " 3", " 16/2", "18", " 53", "57", "59", "61", "63", "65"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "3", "4??", "4??", "5", "5??", "6", "7", "8", "8??", "9", "10/1", "10/2", "11", "12", "13", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", " 19", "21"]
    }, {
      name: "??????. ?????????? ??????????????",
      number: ["13??", "13??", " 3", "5", "7", "9", "11", "13", "15??", "15/41", " 16", "18??", "18??", "19", "19??", "19??", "21", "21??", "21??", "23", "23??", "23??", " 18", "20", "26", "27", "27??", "28", "29", " 12", "14", "14??", "14??", "14??", "17/46"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["3", "5", " 7", "9"]
    }, {
      name: "??????. ????????????????????????",
      number: ["9", "14??", "16", "16??", "18", "18??", " 1", "3", "7", "10", "12??", " 17", " 8/11", "11/8", "13", "15", "15??", "15??", " 2", "6??", "6??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["2", "3", "3??", "3??", "3??", "6/1", "6/2", "6??/21", "7/41", "10", "12", "12??", "12??", "14/43", "14/43-1", "14/43-2", "14/43-3", "18", "20"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "2??", "2??", "4??", " 1", "1/1", "1??", "1??", "1??", "1??", "1??", "1??", "1??", "1??", "1??/2", "3", "3/1", "3/5", "3??", "3??", "3??", "3??/1", "5", "5/1", "6", "6/1", "6??", "7", "7/1", "7??", "8", "8??", "8??", "10", "10??", " 21/1", "21/2", "21/3", "21??", "23", "23??", "23??", "25", "25??", "27", "27??", "27??", "29", "29??", "31", "31/1", "31/2", "31/3", "31/4", "31/5", "31/6", "31/7", "31/8", "31??", "31??", "31??", "31??/1", "31??/2", "31??/3", "31??", "31??", "31??", "31??", " 18", "20", "20/1", "20/2", "20/3", "20/4", "22", "22??", "38", "38??", "40", "40??", "40??", "40??", "40??", "40??", "40??/1", "40??", "40??", "40??", "40??/1", "42", "42/1", "42/2", "42??", "42??", "44", "44??", "44??/1", "44??", " 9", "9??", "9/1", "9??", "11", "11/1", "11/2", "11/3", "13/10", "13/10??", "12", "12??", "14", "14??", "14/1", "14/2", " 15??", "17", "19"]
    }, {
      name: "??????. ?????????????????????? ??????????????",
      number: ["10??", "11", "12??", "15", "17", " 2", "4", "4??", "12", "14", "14??", "16", "20", "20??", " 2??", "6", "6??", "8", " 3", "9", "10/10", "11??"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["34/51", "34/51??", "36", "38", "40", "40/1", "40??", "42", "44", "44??", "46", " 8", "8??", "8??", "10", " 9", "9??", "9??", "9??", "9??", "9??", "11", "11??", "11??", " 1", "1/25", "1??", "3", "3??", "5", "7", "7??", "7??", " 2", "2/27", "2??", "2??", "4", "4??", "6", "6??", " 14/33", "16", "18", "20", "20??", "22", "24", "24??", "26", "26??", "28", "30", "30??", "30??", "32", " 2??", "2??", " 17", " 19", "21", "21??", "23"]
    }, {
      name: "??????. ????????-?????????? ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "44"]
    }, {
      name: "??????. ??????????",
      number: ["2", "4", "8", "10", "11", "12", "14", "16", "18", "19", "20", "22", "24", "26", "29", "30", "36", "38", "40", "42"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "2??", "3", "4", "5", "5/1", "6", "8", "10", "12", "12??", "14", "16", "16??", "18", "20"]
    }, {
      name: "??????. ??????????????????????",
      number: ["14", " 4", "6", "6??", "8", "10", "12", "12??"]
    }, {
      name: "??????. ????????????",
      number: ["7", "10", "10??", "13", "14", "14??", "15", "17", "18", "19", "20", "22", "24", "26", "30", "37", "39", "39??", "45", "55", "55??"]
    }, {
      name: "??????. ??????????????????",
      number: ["4", "6", "7", "8", "8??", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", " 2??", "3/1", "3/2", "5/2"]
    }, {
      name: "??????. ??????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["7/14", "12/12", "13", "14", "16", " 7/14", "12/12", "13", "14", "16", " 2", "2??", "3", "4", "6", "8"]
    }, {
      name: "??????. ??????????????????????",
      number: ["10", " 3", "5", "8", "12", "28", " 7"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["2"]
    }, {
      name: "??????. ???????? ??????????????",
      number: ["4", "6", "8", "10", "30/1"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2/1", "2/2", "3", "4", "5", "7", "8", "11", "11/2", "15/1", "15/2"]
    }, {
      name: "??????. ???????????????????????????? ????????????????????",
      number: ["43", "44", "45", "46", "47", " 1", "2", "3", "4", "5/1", "5/2", "6", "6??/1", "6??/2", "7", "7??/1", "7??/2", "9", "10", "11", "12", "13/1", "13/2", "15", "16", "17", "18", "19", "20", "21", "22", "23", "23??", "24/1", "24/2", "25/1", "25/2", "25/3", "26/1", "26/2", "27", "28", "29", "30", "31", "32", "32??", "33", "34", "35", "36", "37", "37??", "38/1", "38/2", "39", "40", "41", "42"]
    }, {
      name: "??????. ??????????????",
      number: ["12"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["1", "3", "5", "5??", "7", "10", "11", "13", "15", "17", "19", "21", "21??", "23", "25", "27", "27??", "29", " 14", " 3/1", "3/2", "4/2", "5/1", "5/2", "7/1", "7/2", "8/1", "8/2", "9", "9/1", "9/2", "10/1", "10/2", "10??", "10??", "10??", "20", "20??", "20??", "20??", " 6", " 6", "8"]
    }, {
      name: "??????. ????????????????????????",
      number: ["24", "26", "30", "35", "37", "37??"]
    }, {
      name: "??????. ????????????????????",
      number: ["7", "9", "10", "12", "12??", "14", "14??", "16", " 20", "20??", "21", "21??", "23", "23??", "26", "26??", "26??", "26/6", "26/8", "26/9", "26/10", "26/30", "26/30??", "26/39", "28", "28/1", "28/4", "28/5", "28/6", "28/10-3", "28/12-1", "28/12-2", "28/13", "28/14-2", "28??", "28??", "28??", "28??", "29", "29??", "30", "30/5", "31", "31??"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1", "2??", "4??", "4??", "5", "5??", "6", "7", "9", "10", "11", "16", "18", "26", "28", "30", "43", "43??", "44??", "45", "47", "63", "64", "74"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17??", "18", "19", "19??", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "45", "47", "49", "51"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["39", "39/2", "41", "41/1", "41/2", "43", "43/1", "45", "45/1", "47", "47/1", "49", "51/24", " 29", "29/1", "29/2", "29/3", "31", "31/1", "33", "35", "35/1", "35/2", "37", " 7", "7/1", "7/2", "7/3", "7/4", "9", "9/1", "9/2", "9??", " 1", "3", "3/1", "5", "5/1", "5/1??", " 1/5", "11", "11/1", "11/2", "11/3", "13", "13??", "13??", "15", "17", "19/1", "21", "21/1", "23", "25", "25/1", "25/2", "27"]
    }, {
      name: "??????. ?????????????????? ????????",
      number: ["3??", "5"]
    }, {
      name: "??????. ????????????",
      number: ["2", "3", "3??", "4", "6", "8", "10", "12", "14??", "16??", "16??", "16??"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "28", "28??", "30", "30??", "32", "32??", "34/2", " 4/6", "42", " 8/10", "20"]
    }, {
      name: "??????. ??????????????????",
      number: ["51", "53/8-1", "53/8-2", "100/3", "100??/1", "100??/2", "104/1", "104/2", "104/3", "106", "108/1", "108/2", "108/3", "110", "112", "114", "116/2", "118/1", "118/2", "118/3", "118/4", "120", " 23", "25/1", "25/2", "27", "27??", "29", "31/1", "31??", "31??", "40??", "42/1", "42??", "44/1", "44/2", "46", "48", "50", "50??", "52", "52??", " 37", "39", "41", "43", "45", "47", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "92", "94", "96", "96??", "98", "100", " 1/5", "3", "5", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22", "24", "26/1", "26/2", "28/1", "28/2", "32", "34", "36"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["44", "44??", " 26", "26??", "31", "32??", "32??", "32??", "32??", "32??", "33", " 17", "18", "21", "23", "25", "27", "27??", "29", "29??", " 34", "34??", "36", "36??", "36??", "36??", "37", "38", " 15/1", "15/2", "15/3", "15/4", " 11", " 3", "5", "7/9"]
    }, {
      name: "??????. ???????????? ??????????????????",
      number: ["8", " 4", "4??", "4??", "6", "6??", "11", "11??", "11??", "13", "15", "17", "19", "23", "25", "25??", " 1", " 2??", "2??", " 8??", "52??", " 52", "54"]
    }, {
      name: "??????. ?????? ????????????????",
      number: ["2", "6", " 16", " 5"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2/1", "2/2", "3", "5"]
    }, {
      name: "??????. ????????????????????",
      number: ["9/2", "11", "13", "13/1", "15", "17", "19", "21", "23", "25", " 1", "2", "3", "3??", "4", "5", "6", "7", "8??", "10??", " 8", "10", "12", "12??", "14", "14??", "14??", "14??", "14??", "14??", "16", "16??", "18", "18??", "20", "22", "24", "26", "27", "27/1", "28", "28??", "32", " 29", "29/1", "30", "31"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["2", "2??", " 4", "4??", "9", "10", "11", "12", "16", "17", "18"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2", "2??", "3", "4", "5", "6", "7", "8", "9", "10", "12", "13", "13??", "17", "19", "20", "20??", "21??", "24", "25", "26", "27", "28", "29", "30", "32", "33", "34", "35", "37", "38", "39", "40", "41", "46", "46??", "48", "50", "52", "56", "58", "62", "62??", "62??", "66", "68", "72", "82"]
    }, {
      name: "??????. ??????????????????",
      number: ["10", "14", "16", " 8/61", "9"]
    }, {
      name: "??????. ??????????????????",
      number: ["82", "84", "88", "96", " 107", "116??", "120??", "122", "142", "146", " 83/53", "87/30", " 69/71", "75", "104/24", "106", "106??", "108", "110", "114", "116", "120", "124", "126", " 46", "47", "48/50??", "49/51", "51", "53", "54", "55", "56", "57", "58", "59", "60", "62/64", "68", "72", "72??", "74", "76", " 39/92", "41", "41??", "43??", "43??", "45", "92/39", "94??", "94??", " 5", "5/60", "5??", "7", "7??", "7??", "9", "9/11", "9??", "12", "13", "14", "14??", "19", "23", "23??", "24", "25", "26", "27", "28", "29", "30", "30/32", "31", "32", "34", "35", "37", "37/97", "38", " 97", "99", "101", "148", "160", " 43", "47??", "58??"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["2", "3", "5", "7", "7??", "9", " 5??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["16 ????????????", " 8", "1"]
    }, {
      name: "??????. ?????????????????????? ????????",
      number: ["15????", "17????", "19????"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["7", "14", "16", "18", " 18??", "20", "26", "28??", "28??", " 2", "4", "6", "8", "10", "12"]
    }, {
      name: "??????. ????????????????????",
      number: ["24", "26??", "28", " 1", "5", "11/1", "22", "22??", "24", "26", "36", " 16", "18", "22", "22??", " 1/1", "2??", " 30", "32", "32??", " 6", "8", " 1??", " 10", "10??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "15", "17", "18", "38??"]
    }, {
      name: "??????. ????????????????",
      number: ["1??", "1??", "4??", " 3", "3??", "3??", " 4??", "4??", "6", "6??", "6??", "6??", "6??", "6??", "8", "8??", "10"]
    }, {
      name: "??????. ?????????? ??????????",
      number: ["7"]
    }, {
      name: "??????. ?????????????????????? ????????????",
      number: ["6", "8", "8/1", "10", "20", "20/1", "20/2", "20/4", "20/7", "22", "22/2", "22??", "26", "28", "28/1"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", " 67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "4", "20"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "4", "6", "8", "9", "11", "12", "13", "14", "19", "21", "22", "23", "25", "27", "28", "29", "31", "32", "34", "36", "40", "42", "46"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["3", "5", "7", "7??", "9"]
    }, {
      name: "??????. ?????????????????????? ??????????????????",
      number: ["35", "37", " 13", "15??", "15??", "146", " 15", "19", "21", "21??", "27", "29", "29??", "29??", "29??", "29??", "29??", "150", "158", "158??", "174", "182", " 126", "128", "130", "132", "134", "136", "136??", "138", "140", "142", "144", "148", "150??", "152", "154", "156/1", "156/2", " 30", "30??", " 2", "4", "6", "8", "10", "12", "14", "24", "26", "28", " 6??", "20??", " 1", "3", "3??", "5", "5??", "40", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "70??", "72", "74", "76", "78", "80", "82", "84", " 16", " 18", "20", "22", " 32", "34", "36", "38", "42", "48??", "86", "88", "90", "92", "94", "96", "98", "100", "102", "104", "106", "108", "110", "112", "114", "114??", "116", "118", "120", "122"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "2", "2??", "2??", "2??", "2??", "10??", "11", "12", "13", "13??", "13??", "15", "17", "17??", "17??", "17??", "17??", "18", "18??", "18??", "18??", "18??", "18??", "19", "19/1", "19/2", "19/3", "19??", "19??", "19??", "19??", "19??", "19??", "19??", "20", "21", "21??", "21??", "21??", "22", "22??", "22??", "23", "23??", "23??", "24", "24??", "24??", "24??", "25", "26??", "26??"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "??????. ??????????????????",
      number: ["15"]
    }, {
      name: "??????. ?????????????????????????????? ??????????????",
      number: ["18 ????????", " 14", " 13"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "3??", "3??", "4", "4??", "5", "6/3", "8", "8/2", "10", "12", "12??", "14/1", "14/2", "15", "16/1", "16/2", "17/1", "17/2", "18", "20", "22", "22/2", "23", "24", "25", "26", "27", "28", "29", "30", "30/1", "30/2", "31", "32/1", "32/2", "33", "34", "35", "37", "39", "41", "44"]
    }, {
      name: "??????. ???????????????????????? ????????????",
      number: ["89", "89/1", "89??", "91/1", "91/2", "93", "93/2", "93/3", "93/4", "93/5", "93/6", "93/7", "93/8", "93/9", "93/13", "93/14", "93??", "93??/1", "93??/4", "93??", "95", "95??", "95??", "95??", "95??/1", "95??", "97", "97??", "99", "99??", "101", "101/1", "101??", "103", " 83", "83??", "85", "85??", "85??", "85??", "87", "87/1", "87/2", "87/3", "87/4", "87/5", "87??", "87??", "87??", "87??", "87??", " 1", "3", "3??", "5", "5??", "7", " 37", "39", "39??", "39??", "41", "41??", "43", "43??", "45", "45??", "45??", " 27", "27/2", "27??", "29", "29??", "29??", "29??", "31", "31??", "31??", "31??", "33", "35", "35??", "35??", "35??", "37??", "37??", " 2", "2/1", "2??", "6??", "8??", "9", "9??", "10", "11", "11??", "13", "13??", "15", "15??", "15??", "17", "17??", "19", "19??", "19??", "19??", "19??", "21", "21??", "23", "23??", "25/1", "25??", " 47", "47??", "47??", "49", "49/1", "49??", "49??", " 12", "14", "16", "18", "20", "22", "28", "32", "32??", "32??", "38", "40", "42", "48??", " 51/2", "51/2??", "51/2??", "53", "55", "57", "59/1", "59/2??", "59/3", " 61/2", "61/2??", "63", "63??", "65", "65??", "67", "67??", "69", "71", "73/1", " 75/2", "75/2??", "75/2??", "75/2??", "77", "81", "81/1"]
    }, {
      name: "??????. ??????????????",
      number: ["2/71", "3", "5", "5??", "5/1", "7??", "7/1", "8", "8??", "8??", "9", "13", "15", "15??", "15??", "17", "17??", "19", "21", "21??", "21??", "23", "23??", "27", "27??", "33", "33??", "33??"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1??", "3", "14", "16/1", "16/2", "16/3", "16/4", "18", "20", "24", "26", "28", "30/3", "32", "34", "36", "36/1", "38", "40", "42", "42??", "44", "48", "48??"]
    }, {
      name: "??????. ?????????????????? ??????????????",
      number: ["3", "6", " 6"]
    }, {
      name: "??????. ??????????????",
      number: ["1/72", "2", "3", "4", "5", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "38", "40", "42", "44", "46", "48", "50"]
    }, {
      name: "??????. ???????????????? ??????????",
      number: ["1", "1??", "2", "3", "3??", "5", "7", "9", "10/9", "11", "12/8", "13", "14", "15", "16", "17", "18", "18??", "19", "20", "21", "23", "25"]
    }, {
      name: "??????. ??????????????",
      number: ["5", "5??", "8", "9", "9??", "10", "10??", "10??", "10??", "11", "11??", "13/2", "14", "14??", "14??", "15", "16", "16??", "16??", "16/1", "19", "19??", "19??", "20", "21", "22", "23??", "24", "25", "25??", "26", "26??", "27", "27??", "28", "30", "32", "33/12", "36", "36??", "38??", "39", "40", "40??", "47", "47??", "49"]
    }, {
      name: "??????. ??????????????????????",
      number: ["94", "94??", "94??", "94??", "94??", "102", "102??", "104", "104??", "106", "106??", "108", " 39", "41", "43", "45", "47", "47/3", "49", "51", "90", "90??", "90??/1", "92", "94", "94??", "94??", "94??", "94??", "96/13", "96??", "96??", "98", "100", "100/1", "100/2", " 1/2", "5", "5/1", "6", "7", "7??", "8", "10", "11", "12", "13", "14", "15", "17", "18", "19", "19??/1", "19??/2", "20", "21", "22/1", "23", "23??", "23??", "23??", "23??", "23??", "23??", "24/2", "25", "25??", "26", "27??", "28", "29", "31/1", "31/2", "33", "33??", "33??/1", "33/1", "34", "35", "35/1", "36", "36/2", "37", "38", "40", "42", "42/2", "44", "46", "46/1", "48", "48/1", "50", "52", "52/2", "54??", "54??", "54??", "56", "58", "64", "66", "68", "74", "74??", "80??", "82", " 84??", " 76", "80", "84??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "3/1", "5/2", "7", "9", "9/9", " 4", "6", "8", "10"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3??", "3??", "4", "4??", "5", "5??", "6", "6??", "7", "9??", "10", "11", "13", "15"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "2??", "3", "3??", "4??", "5", "6", "6??", "7", "9", "9??", "10", "11", "12", "12??", "13", "14", "15", "15??", "16", "18", "19", "21", "21??", "23", "25", "25??", "27", "29", "31", "31??", "33", "33??", "35", "37", "41", " 16??", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "39", "40", "43", "45", "47", "49", "49??", "51", "53", "55", "57", "59", "61", "63", "65", "67", "67??", "69", "71", "73", "75", "77", "79", "81", "83", "85", " 42", "44", "46", "48", "87", "89", "91", "93", "95"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "2", "2??", "3", "3??", "4", "5/1", "5/2", "5??", "5??", "6", "7", "8/1", "8/2", "9", "10", "11/30", "12", "13/25", "14/32", "15", "16/27-1", "16/27-2", "17", "18", "19", "20", "21/42", "22", "24/44", "26", "26/51", "28", "28/1", "30", "32"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["4", "6", "8", "8??", "8??", "8??", "10", "12", "14", "14/3", "14??", "14??", "16", "16??", "18", "20", "20??", "22", "26", "26??", "28", " 11", "11??", "11??", "11??", "13", "13??", "13??", "15", "15??", "15??", "17", "17??", "19", "19??", "19??", "21", " 3", "5", "5??", "7", "7??", "9", "9??", "9??"]
    }, {
      name: "??????. ?????????????????? ?????????? (????????????????)",
      number: ["6", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "19", "21", "23"]
    }, {
      name: "??????. ??????????????",
      number: ["1??", "1??", "2????????????1", "2????????????2", "2 ????????????3", "2??", "2??", "3??", "4????????????1", "4????????????2", "5", "5??", "6", "6??", "6??", "6??", "6??", "6??", "6??", "7", "7??", "10", "10??", "10??", "10??", "10??", "10??", "11", "11??", "11??", "12", "16", "44", "44??", "47", "48", "49", "50", "50??", "50??", "50??", "53", "53??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["3", "7", "9", " 2", "1", " 13??", "13??", "14", "16", "17/6", "18", "20", "22", "24/2"]
    }, {
      name: "??????. ???????????????????? ????????????????????",
      number: ["1??", "14", "14/1", "14/2", "14/6", "14??", "14??", "14??", "14??"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "1??", "1??/1", "1??/2", "1??/3", "1??", "2", "2??", "2??", "2??", "2??", "3", "4", "4??", "6", "6??", "6??", "7??", "7??/1", "7??/2", "7??/3", "7??/4", "7??/5", "8", "10"]
    }, {
      name: "??????. ??????????????????????",
      number: ["10", "14", " 1", "2", "3", "3??", " 7", "27", "27??", "29", "33/1", "33/2", "35", "36", "37/1", "37/2", "38", "39", "41", "42", "44", "44/2", "44/3", "46", "48", "48??", "50", "52", "56"]
    }, {
      name: "??????. ??????????????",
      number: ["11", "12", "14", " 3??", "3??", "4", "4??", " 1/6", "4"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8/1", "9", "10/1", "11", "12", "13/13", "14/1", "15/26", "16/11", "17", "18/24", "19", "20", "21", "22/2", "23", "24", "24??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["40", "41", "42", "43/1", "43/2", "44", "44??", "45", "45??", "46/1", "46/2", "46??/1", "46??/2", "47", "48", "49", "50", "54", "56", "58", "59", "60/1", "60/2", "61??", "62", "62??", "64", "66", "68", " 63??", "72", "72??", "73", "73??", "74", "75", "75??", "76??", "76??", "76??", "77", "77??/1", "77??/2", "78", "79", "81/20", "82", "83/29", "84", "85", "85??", "86", "87", "87??", "88", "90", "90??", "91", "92", " 1", "2", "3", "4", "4??", "5", "6", "7", "8", "9/1", "9/2", "9/3", "10", "11/1", "11/2", "12", "13", "14", "15", "16", "17", "20/1", "20/2", "20/3", "21", "22", "23", "24??", "25/20", "26", "27", "28/1", "28/2", "29", "30", "31", "31??", "31/1", "31??/2", "32", "33", "33??", "34", "35", "36/1", "36/2", "37", "38", "38??", "39", "39??"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "5", "8/1", "8/2", "9/1", "9/2", "9/3", "11", "12", "13", "15", "17/44", "18", "20/46"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["13", "15", "15??", " 16", "16/1", "16/2", "16/4", "33??", " 1", "1/1", "2", "2??", "3", "3??", "3??", "3??", "3??", "3??/1", "3??/1", "3/3", "4", "5", "5??", "5??", "5/3", "6", "7", "7??", "7/1", "7??", "8/1", "9", "9??", "9??", "9/3", "11", "11??", "1??", "11??", "11??/1"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "34", "36", "37", "38", "39", "40", "41", "42", "43", "44", "46", "47"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["8", " 2", "4"]
    }, {
      name: "??????. ????????????????????",
      number: ["6", "7", "10", "10??", "12"]
    }, {
      name: "??????. ??????????????",
      number: ["8/1", "8/2"]
    }, {
      name: "??????. ????????????",
      number: ["1/60", "1/65", "1/69", "2", "2/58", "3", "3/1", "3??", "4", "5", "6", "7"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["4", "4??", " 3", " 2"]
    }, {
      name: "??????. ????????'????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??"]
    }, {
      name: "??????. ????????????",
      number: ["44", "46", "50", " 50", "50??", "50??", "50??", "52", "54", "54??", "56", "56??", " 58??", "60/1", "62", " 70", "72", "74", "78", "80", "80??", " 68", " 1", "3", "4", "5", "5??", "5??", "6", "8", "26", "26??", "26??", " 14", "18??", "20", "32", "32??", "32??", "34", " 18??", "18??", " 22", "24", "28??", "28??", "40", "40??", " 10", "10??", "12", "28", "30", "30/6", "30??", "32??", "36", "38", " 16", "18??", " 18", " 6??", "6??"]
    }, {
      name: "??????. ????????????",
      number: ["31", "31??", "33", "35/1", "35/2", "37", "37??", "39", "39/1", "41", "43", "45", "47", "47??", "49", "49/2", "51", "51??", "53", "55", "55??"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["5", "13", " 2", "2??", "4", "6??", "8/4", " 6"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "7??", "8", "9", "9??", "10", "11", "12", "13", "14", "15", "15/1", "16", "17", "18", "19", "20", "21", "21/1", "22", "23", "23/1", "24", "24/1", "25", "25/1", "26", "27", "27/1", "28", "28/1", "29", "29/1", "30", "31", "33", "33/1"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1", "2/4", "3", "4", "10/12", "12??", "20", "23", "24", "26", "27", "28", "30", "32", "34", "35", "44/22", "46", "48/5", "50", " 51", "53"]
    }, {
      name: "??????. ??????????????????????",
      number: ["19", "19/1", "19/2", "19/3", "20??", "20??/2", "20??/3", "21", "21??", "22/1", "22/2", "23", "24/1", "24/2", "26", "27", "28", "28/2", "28??", "29", "30", "30??", "32", " 33??", "36", "38", "41/1", "42", "43/1", "43/2", "43/3", "43/4", "43/5", "44", "45", "45/2", "46??", "46", "47", "50/6", "50/6-2", "52", "52/2", "54", "54/2", " 2", "6", "8", "10", "11"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "3??", "3??", "3??", "3??", "3??", " 2", "4", "4??", "4??", "5", "5/1", "5??", "6", "6??", "6??", "8", "10", "12/15"]
    }, {
      name: "??????. ?????????? ??????????????",
      number: ["1", "2", "3", "4", "5 6", "7", "8", "9", "10", "11", "12", "13", "14"]
    }, {
      name: "??????. ????????????",
      number: ["??/??", " 2", "2/18", "3", "3/2", "4", "5", "5/1", "6", "6/2", "7", "7/2", "8", "9", "9??", "10/17"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "3??", "3??", "4", "4??", "5", "5??", "5??", "5??", "6??", "7", "10", "10??", "11", "14", "15??", "15??", "15??", "16", "17", "17??", "19", "31"]
    }, {
      name: "??????. ???????????????????? ????????????????",
      number: ["3", "3/1", "5", "5??", "5??", " 4", "6", "6/8??", "6/8??", "8", "8??", "10", "12", "14"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/9", "5", "7", "11", "11??", "12", "12??", "12??", "13/5", "14", "14??", "16", " 1/8", "2/6"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["1/24", "3", "10", " 4", "5/9", "7/10", "8/7", "9", "12", "14", "16", "18", "19", "21", "23", "24", "55", "56", "57", "58", "59", "60", "61", "62", "63/4", "64", "65/5", "65??", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "80", "82", "84", "86", "88", "90", "92", "94"]
    }, {
      name: "??????. ????????????????",
      number: ["02 ????????????", " 1", "1??", "1??", "2", "2??", "3", "4", "4??", "4??", "5", "5??", "6", "7", "7??", "7??", "8", "8??", "8??", "10", "10??", "10??", "11", "11??", "11??", "11??", "12", "12??", "15", "15??", "16", "16??", "16??", "18", "20", "21", "21??", "21??", "22", "22??", "22??", "22??", "22??", "22??", "22??", "23", "23??", "23??", "23??", "23??", "23??", "23??", " 25", "25??", "26", "26??", "26??", "27", "27??", "27??", "28"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "5", "7"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "8", "10", "12", "16", "20", "27/13"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["2", "6", "6??", " 5??", "7/10", "9", "10/8", " 11/9", "12/7", "13/14", " 3", "4", "5??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "2", "4", "6", "6??", "6??", "6??", "6??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["8", "21/8", " 25", "25??", "26", "27/6", "28", " 12??", "14", "14??", "16", "18", "18??", "18??", "20/8", "22/7", "24/7", "24??", " 7", "11??", "11??", "13", "13/4", "13??", "15/5", "17/5", "19??", "19??", "19??", " 29", "29/3", "29??", " 9"]
    }, {
      name: "??????. ???????????? ?????????? II",
      number: ["20", "22", " 23/35", " 7", "10/1", "10/2", "10/3", "10??", "11", "13", "15", "16", "19", " 3", "4/6??", "4/6", "4/6??", "5", "6/1", "9", "10/1", "17", "21"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/3", "5", "5/24", "6"]
    }, {
      name: "??????. ??????????????????",
      number: ["11", "13", "15", "16", "17", " 2", " 63/5", "65", "67", "69", "69??", "71", " 62", "62??", "62??", "64", "66", "68", "68??", "70", "72", "74", "74??", "76", "78", " 63??", "69??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1/2", "3", "5", "7", "17"]
    }, {
      name: "??????. ???????????? ??????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "17", "18"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "3??", "5", "5??", "7", "9", "11", " 2/9", "4", "6", "8", "10", "12", "14", "16", "16??", "18", "20", "22", "24"]
    }, {
      name: "??????. ????????????????????",
      number: ["14", "14??", "16", "16??", "18", "18??", "20", "20/1", "20/2", "20/3", "20/4", "22", "22??", "2??/1", "22??", "24", "24??", "24??/1", "24??", "26", "26/1", "26/2", "26/3", " 1", "1??", "3", "3??", "5", "5??", "5??/1", "7", "7??", "7??", "7??", "7??", "9", "9??", "9??", "9??/1", "9??", "9??", "9??", "9??", "9??/1", "9??/1", "9??/2", "9??", "11", "11??", "11??/1", "11??", "11??", "11??/1", "11??", "11??", "17", "17/1", "17/2", "17/3", "17/4", "17/5", "17/6", "17/7", "17??", "17??", " 2", "2??", "2??", "4", "4??", "4??", "4??", "4??", "4??/1", "4??/2", "4??/3", "4??", "4??", "6", "8", "8/1", "8/2", "8??", "8??", "10", "10??", "10??", "10??", "10??", "10??/1", "10??/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "11", "13", "15", " 14", "23", "24??", "26"]
    }, {
      name: "??????. ?????????????????????? ??????????",
      number: ["1", "1??", "3", "5", "7", "9", "11"]
    }, {
      name: "??????. ??????????????????",
      number: ["12", "13", "14", "15", " 7", "1", " 9", "11"]
    }, {
      name: "??????. ???????????????????? ??????",
      number: ["3", "5", "6", "6??", "7", "9", "11"]
    }, {
      name: "??????. ????????????????????",
      number: ["8"]
    }, {
      name: "??????. ??????????????????",
      number: ["18", "2"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1/1", "1/2", "2", "3", "5", "7", "7/1", "7/2", "7??", "7??", "7??/1", "7??/2", "7/9??", "7/9??", "7/9??", "7/9??", "9", "9/1", "9??", "9??/1", "11", "15"]
    }, {
      name: "??????. ??????????????????????",
      number: ["9", "10", "10??", "11", "12/1", "12/2", "13", "14", "14/10", "16/10", "18", "18/2", "20", "22", "24", "24/1", "26", "26/2", "28", "28/2", "30", " 2??"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "4??", "4??", "5", "6/1", "6/2", "7", "8", "9/1", "9/2", "11", "13", "21"]
    }, {
      name: "??????. ???????????????? (????????????)",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????????? ??????",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26"]
    }, {
      name: "??????. ???????????????????????????? ??????????",
      number: ["1", "1??", "1??", "2", "2??", "3", "3??", "5", "6", "7", "8", "8??", "10", "14", "16", "16/1"]
    }, {
      name: "??????. ??????????????????",
      number: ["83/32", "85/34", "87", "89", "91", "93/39", " 11", "11??", "12", "14/1", "16", "18/1", "18/2", "18/3", "20/31-1", "20/31-2", "22", "24/1", "26", "28/1", "28/2", "28/3", "28??", "35", "35??", "37??", "37/28", " 21", "23", "27/1", "27/2", "29", "30/1", "30/2", "31/1", "31/2", "31??", "41", "47/1", "47/2", "49/1", "49/2", "51", " 32", "34", "34??/1", "34??/2", "34??/3", "36", "38", "40/1", "40/2", "42", "42??/1", "42??/2", "42??", "44", "46??", "46/1", "48", "50", "50??", "50??", "52??", "52??", "53", "54", "55/22", "56/1", "56/2", "57/15", "58", "59", "60", "61", "62", "63/1", "63/2", "64", "65", "66", "67/1", "67/2", "68", "69", "69??", "71", "73", "75", "77", "77??", "77/1", "79", "81"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4"]
    }, {
      name: "??????. ??????'??????????-????????????????????",
      number: ["1??", "2/1", "2/2", "2??", "3", "5", "7", "15", "18/2", "24/1", "24/2", "26/1", "26/2"]
    }, {
      name: "??????. ??????'????????????",
      number: ["77", "79", "81", "120", "120??", " 121", "125", "125??", "126", "127", "127/1", "128", "129", "129/1", "130/1", "130/2", "131", "131/1", "133/3"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "8"]
    }, {
      name: "??????. ??????????????????",
      number: ["25/120", "28", "30", "32", "34", " 35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "52", "54", "55", "56", "57", "58"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["1", "3", "3??", "6", "6??", "6??", "8", "8??", "8??", " 18", "20/32"]
    }, {
      name: "??????. ?????????????????? ????????????????",
      number: ["1/29", "3??", "5", "8", "8??", "10", "12", "14", "16", "18", "18??", "18??", "18??", "20", "20??", "22", " 3"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "3", "3/2", "3/3", "4/1", "4/2", "5??", "6/1", "6/2", "6/3", "7", "8", "9", "10", "11/1", "11/2", "12", "13", "15/1", "15/2", "16/1", "16/2", "20/1", "20/2", "22", "22/1", "22/2", "23/1", "23/2", "25/1", "25/2", "27/1", "27/2", "29/1", "29/2", "31/1", "31/2", "33"]
    }, {
      name: "??????. ??????'????????",
      number: ["54/27", "55", "56/32", "57", "57??", "58", "59", "60", "61/27", "62", "64", "66", "68", "70", "72", "72??", "74", "76", "78", "80/25", " 1/5", "2/7", "3", "4", "4??", "5", "6", "7", "8", "8??", "9", "9??", "10", "10??", "11", "12", "13", "13??", "14", "15", "16/25", "17", "18/32", "19", "19??", "20", "21", "22", "22??", "23", "24", "25", "26", "27", "28", "28??", "29", "30", "31", "32", "33", "34/33", "35/29", "36", "37/34", "38", "39", "40", "41", "42", "43", "43??", "44", "45", "45??", "46", "47", "48", "49", "50", "51", "52", "53"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["23"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/15", "2/17", "3/1", "3/2", "4", "5", "6", "7", "8", "8??", "9", "10", "11", "11??", "12", "13/1", "13/2", "14", "15/1", "15/2", "16", "17/1", "17/2", "17??/26", "17??", "17??", "17??", "19", "20/24", "21", "22/1", "22/2", "23/1", "23/2", "24", "25/21", "26??", "26??", "27/20", "28", "30/1", " 66", "67/17", "68", "70", "72??", "74", "76/10", " 30/2", "31/1", "31/2", "32", "33", "34/19", "35/1", "35/2", "37", "38", "38??", "39/1", "39/2", "40", "41/19", "43/24", "45", "46", "47", "48", "49", "50", "51", "52/22", "53/1", "53/2", "54", "55/1", "55/2", "56", "57", "58", "59", "61/1", "61/2", "62??", "63??", "63/1", "63??", "64", "65/1", "65/2", " 36/18", "42/1", "42/2", "44/1", "44/2", "60/1", "60/2", "50/17", "61??/1", "61??/2", "62/1", "62/2", "63/2", "67/15", "68", "70", "72??/1", "72??/2", "72/1", "72/2", "74/1", "74/2", "76/15"]
    }, {
      name: "??????. ???????????????????????? ??????????????????",
      number: ["25 ??????????????", " 4", "6", "8", "10"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["1", "1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1/10", "1??", "2", "2/1", "2/1??", "2??/1", "2??", "2??", "3", "4", "4/1", "6", "6??", "6??", "8", "10", "10/1", "10??", "10??", "10??/1"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "3??", "4", "4/1", "4/2", "6/1", "8/2", "10", "10??", "14/1", " 13", "13??", " 3", "10/1", "12", "12/1", "12/2", "14", "16/1", "27"]
    }, {
      name: "??????. ???????? ????????????????????",
      number: ["2"]
    }, {
      name: "??????. ??????????????????",
      number: ["63", "63/1", "65", "67", "67/2", "68/2", "69/1", "69/2", "71??", " 64", "84", " 56", "58", "60", "62"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "3??", "6", "6??", " 5", "5??", "5??", "5??", "5??", "5??", "7", "9", "13"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "56??", "57", "58", "58??", "59", "60", "60??", "61", "62", "63", "64", "65", "66", "67", "67??", "69", "71", "73", "75", "75??", "75??", "77", "77??", "79", "79??", "81", "81??", "83", "83??", "89", "91", "91??", "93", " 1", "1??", "2", "2??", "2??", "3", "4", "5", "6", "7", "8", "8??", "9", "10", "11", "12", "12??", "13", "13??", "13??", "13??", "14", "15", "16", "17", "17??", "18", "19", "20", "20??", "20??", "21", "22", "23", "24", "25", "25??", "25??", "26", "27", "28", "29", "29??", "30", "31", "32", "32??", "33", "34", "34??", "35", "36", "37", "37??", "38", "38??", "38??", "40", "41", "42", "43", "44"]
    }, {
      name: "??????. ?????????????????????????? ??????????",
      number: ["5", "9/70", "11", "11/107", "16"]
    }, {
      name: "??????. ??????????????????",
      number: ["5", "5??", "7", "7??", "9", "9??", "11", "13", "13??", "13??", "15", "15??", "15??", "15??", "17", "17??", " 1/9", "3", " 4", "6", "8", "8??", "8??", "8??", "10", "12", "12??", "12??", "14", "14??", "14??"]
    }, {
      name: "??????. ?????????????? ??????????????????",
      number: ["2??", "2??", " 4", "6??", "8", "10/1", "10/2", "11", "12", "13", "14/2", "15", "15/2", "16/1", "16/2", "16/3", "17", "17/1", "18", "19/1", "19/2", "21", "23", "24", "25", "26/1", "27", "27/2", "29", "31", "33/2", "33/7", "35", "35/2", "37", "39", "41", "41/1"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["7", "10", "12", "14", "20", "24", "24??", "24??", "26", "28", "28??", "28??", "28??", "28??", "28??", "28??", "31", "31??", "31??", "38", "39", "39??", "40??", "40??", "40??", "41", "42", "43", "43??", " 48", "51??", "53", "54", "56", "57", "28", "58??", "58??", "58??", "60", "61", "64", "67", "67??", "68", "71", "73??", "73??", "75", "75/75", "75??", "75??", "79", "79??", "79??", "81", "81??"]
    }, {
      name: "??????. ????????????-??????????'????????????",
      number: ["1??", "2", "4", "4/2", "4??", "6", "7", "8", "9", "9??", "9??", "10??", "10/2", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "23??", "24", "25", "25??", "26", "28", "28??", "28??", "28??", "29", "30", "30??", "30??", "31", "32", "34", "36", "36??", "37", "38", "39??", "40", "42", "42/41", "42/70", "44", "46", "47", "48", "49"]
    }, {
      name: "??????. ???????????????? ????????",
      number: ["10"]
    }, {
      name: "??????. ????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "3", "5", "7", "8", "9", "10", "11", "14??", "14??", "14??", "14??", "15", "15??", "15??", "15??", "15??", "16", "16??", "16??", "16??", "16??", "17", "19", "22??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????????",
      number: ["4", " 1/20", "3", "5", "5??", "7/7", " 11", "11??"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["20", " 4", "6", "8", "8??", "10", "10??", "12", "12??", "12??", "14", "16", "18/21", " 3", "3??", "3??", "3??", "5", " 5??", "5??", "7", "7??", "7??", "7??", "9", "11", "11??", "11??", "11??", "13", "13??", "13??", "13??", "15", "15??", "15??", "17", "17??", "19", "19??", "21", "23/25", " 1", "2??"]
    }, {
      name: "??????. ???????????????? (????????????)",
      number: ["2", "2??", "4", "6", "8", "10", "12", "13", "13??", "14", "14??", "15", "16", "18", "20", "22", "22??", "24", "26", "28", "30"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["1", "1??", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17??", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38??", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "59", "61", "63", "65", "67", "69", "71", " 73", "75", "77", "79", "81", "83", "85", "85??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["9", " 109??", "109??", "109??/1", "109/2", "111", "115/1", "115/2", "115/3", "152", "154", " 117", "119/1", " 134", "142", "146", "152??", " 121", "121??", "121/2", "123", "125", "127", "127??", "129", "129??", "129/1", "131", " 160", "160??", "160??", "160??", "160??", "160??", "160??", "160??", "164", "166", "168", "168??", "170", "172", " 34/38", "37", "39", "47", "47??", "51", "51??", "53", " 40", "40/42", "40??", "40??", "42", "46", "58", "60", "60??", "62??", "62??", "64", "82", "86", "98", "102", "104", "104??", "110", "116", "116??", "118", "118/2", " 1/3", "2/6", "2/9", "4", "6", "8", "12", "13??", "13??", "13??", "13??", "13??", "14/18", "15", "15??", "15/1", "17/2", "19/21", "20", "23/25", "24??", "24??", "25", "26", "27", "30/5", "31", "31??", "31??", "33", "63", " 126/2", "126??", " 55", "57", "59", "61", "63", "63??", "65", "65??", "69", "69??", "69??", "69??", "85", "85/87", "87/89", "89", "99", "99/1", "103", "103??", "105", "107", "122/1", "124", "132", " 82"]
    }, {
      name: "??????. ????????????-????????????????????????",
      number: ["2", "4??", "7", "14/2", "15"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4??", "5", "6", "7", "8/9", "9", "11/10", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "28", "30/2"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "2??", "3", "4", "5", "7", "8", "9", "10", "11", "12", "12??", "13", "14", "15", "16", "17", "18", "18??", "18??", "19", "20", "21", "22", "23", "24", "26", "27", "28??", "28??", "28??", "30", "30??", "32", "34", "35", "36", "37", "38", "39", "41", "42", "43", "44", "44??", "45", "46", "47", "48", "48??", "49", "51", "51??", "52", "53", "54", "55", "56", "58", "59", "60", " 62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "83??", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "94??", "95", "96", "98", "100"]
    }, {
      name: "??????. ????????????????????",
      number: ["9", "11", "13/7", "14/16", "15/7", "20??", "32/1", "32/2", "32/3??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "26", "28", "30", "32", "34"]
    }, {
      name: "??????. ??????????????",
      number: ["5", "7", "17"]
    }, {
      name: "??????. ??????????",
      number: ["3", "5", "9", "9??", "11", "11??", "13", "15", " 8/1", "8/2", "8/3", "8/4", "8/5", "8/6", "8/7", "8/8", "8/9", "8/10", "8/11", "8/12", "8/13", "8/14", "10", "10/2", "19", "19??????????", "19??????????", "21/1", "21??????????", "23", "25", "27", "27/1"]
    }, {
      name: "??????. ???????????????????? ??????????????????",
      number: ["2", "4", "4??", "6", "6??"]
    }, {
      name: "??????. ?????????? ??????????????",
      number: ["2", " 2", "2??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["6", "8", "16/1", "16/2", "22", "23/15", "24", "32/4", " 1", "2", "3", "4", "5", " 34", "36", "37", "39", "41/42"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "4", "5", "6-8"]
    }, {
      name: "??????. ?????????? ????????",
      number: ["1", "1??", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["10", "15/4"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "4", " 25", "25??", " 2/1", "3", "5", "6", "7", "8", "8??", "9/11", "11??", "12", "13", "14", "15", "16", "17", "18", "20", "22", "22??", "23/25", "24", "26", "28"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["10", "10??", "12", "12??", "12??", "14??", "14??", "14??", "14??", "16/1", "16??", "16??", "16??", "16??/1", "16??", " 1/3", "2", "2??", "2??", "3", "4", "4/4", "4??", "5", "7", "7??", "9", " 11", "13", "13/1", "15", "15/1", "17", "17??", "17??/1", "17??", "17??", "17??", "19", "21"]
    }, {
      name: "??????. ????????????????????",
      number: ["35??/2", "37/2", "37/3", "38/1", " 3", "3/1", "3/2", "5", "7/1", "7??", "9", "10??", "10??/2", "11/1", "11/2", "12", "12??", "13", "14", "14??", "14??", "15", "19/1", "19/2", "21", "23", "23??/1", "23??/2", "23??/3", "25", "25??", "25??", "25??/2", "25/3", "26/2", "26/3", "27", "27??", "28", "28/2", "29/2", "29/3", "30", "31", "31??", "31??", "31??/2", "31??/3", "32/1", "32/2", "33", "35", "35??/1"]
    }, {
      name: "??????. ???????????????????????? ??????????",
      number: ["3", "4", "5", "6", "6??", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19??", "20", "20??", "21", "21??", "23", "25", "27", "29"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["3", "3??", "5"]
    }, {
      name: "??????. ??????????????",
      number: ["8", " 29", " 3", "17", " 4"]
    }, {
      name: "??????. ??????????'??????????",
      number: ["12??", "27", "30"]
    }, {
      name: "??????. ????????????????",
      number: ["116", "116/1", "118", "118/1", "118??", "118??/1", "120/4????????5", "120/4??????????", "120/4??????????", "120/4??????????1", "120/4??????????", "120/4??????????", "120/4??????????", "122", "122/4", "122??", "124", "124/5", "126", "126/1", "126/2", "126/3", " 2", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18", " 11/1", "11??", "13", "15", "15??", "17/2", "17??", "17??/3", "19", "20/1", "20/2", "20/3", "21", "22", "23", "24", "25", "25/1", "25/2", "26", "27??/1", "27??/2", "29??", "31/1", "31/2", "32", "33/1", "33/2", "35", "35??", "37", "39", "41", "43/3", "43??/1", "43??/2", "45", "47", "48/1", "49", "51", "53", "54", "56", "56/1", "56??/2", "58??", " 40", "42", "44", "46", "50", "51", "52", "54", "60??", "61", "62??/2", "62??/1", "62??/2", "62??", "64/2", " 55", "55??", "70", "72", " 57", "59", "61", "63", "65", "67", "67??", "67??", "69/39", "71", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88/20", "90??", "92", "93", "94", "95", "97", "98", "100", "102", "104", "106", "108", "110", "110??", "110??", "110??", "110??", "112", "114", "116", "116??", "118", "118??"]
    }, {
      name: "??????. ????????????????????",
      number: ["24", " 18", " 9", "1"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["3", "5", "5/1", "7"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4", "5", "5??", "6", "7", "8", "9", "10", "11/50", "12"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["8", " 6??", " 14", " 2", "4", "4??", "4??", "6", "6??", " 23", "23??", "25", "25??", "27??", "29", " 11", "15", "15??", "15??", "17", "21", " 7", "9", "13", " 8", "23??", "23??", " 27??", " 6??", "6??", "8??", "8??", "8??", "10", "12", " 1??", "1??", "1??", "3/1", "5"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1??", "2", "3", "3??", "3??/1", "3??/2", "3??/3", "3??", "3/1", "4", "4??", "4/1", "5", "14", "17", "17??", "17??", "17??", "17??", "18", "18??", "18/1", "18/2", "24", "24??", "24/26", "30", "30??", "38/40", "40??", "40??", "42??", "44", "44/1"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["50", "50??", "51", "52", "53", "54", "54??", "55", "56", "57", "58", "59", "59??", "60", "61", "62", "62/1", "63", "64", "65", "66", "66??", "67", "68", "69", "71", "73", "75", "77", "79", "81", "83", "83??", "85", "85??", "87", "89", "91", "93", "95", "97", "101", "103", "105", "105??", "105??", "105??", " 1", "2", "2??", "2??", "2??/1", "3", "3/1", "4", "4??", "5", "5??", "6", "7", "8", "9", "9??", "10", "11", "12", "13", "14", "14??", "15", "16", "17", "18", "18??", "19", "20", "20??", "21", "22", "22??", "23", "23??", "24", "24??", "25", "25/1", "26", "26??", "27", "28", "29", "29??", "30", "30??", "31", "31??", "32", "33", "33??", "34", "34/34??", "34??", "36", "37", "38", "40", "40??", "41", "42", "42??", "43", "43??", "44", "45", "45??", "46", "47", "49", " 91/1", "91??", "91??", "91??", "91??", "91??", " 135", "137", "137??", "139", "141", "143", "145", "147", "149", "153", "155", "157", "159", "161", "163", "165", "167", "169??", " 70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "90??", "92", "94", "96", "98", "100", "102", "104", "106", "107", "108", "108??", "109", "110", "111", "111??", "112", "112??", "112??", "113", "114", "115", "116", "116??", "117", "117??", "119", "121", "123", "125", "127", "129", "131", "133"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "5/1", "5/2", "6", "7", "9", "11", "12"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/16", "3", "3??", "5", "7/1", "7/2", "9", "11", " 13", "15"]
    }, {
      name: "??????. ????????????????????",
      number: ["3/1", "3/2", "5", "7", "9", "11/10", "19", "25??"]
    }, {
      name: "??????. ????????????????????",
      number: ["7", "9", "10", "11", "11??", "12", "14", "16", "19", "20", "21", "23", "24", "24??", "25", "26", "27", "28", "30", "33", "34", "35", "39", "39??", "39??", "41", "42", "44", "46", "48", "50", "50??", "52", "52??", "53", "58", "60", "62", "64", "66??", "66??"]
    }, {
      name: "??????. ???????????????????? ????????",
      number: ["3??", "6", "6/8", "8", "8/1", "8/2", "8/3", "8??", "9", "13??", "13??/1", " 1", "1/1", "1/2", "1/2??", "2", "2??", "3", "4", "4??", "4??", "4??", "4??", "5", "6/1", "6/2", "6/3", "7"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "7", "8", "9", "11", "12", "13", "14", "15", "16", "17", "19", "21", "23", "24", "28", "29", "31??", "32", "33", "34", "36", "38", "42"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["3", "5??", "5??", "7", "7??", "7??", "9", "10/1", "12", "12??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["7", "9", "9??", "12", "16", "16??", "18", "18??", "22"]
    }, {
      name: "??????. ??????????????????????",
      number: ["15", "22", " 7", "8/1", "8/3"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "4"]
    }, {
      name: "??????. ?????????? ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "27??", "29", "29/1", "30", "31", "32"]
    }, {
      name: "??????. ???????????????????????? (????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "9??", "10", "11", "11??", "12", "13", "15", "15??", "15??", "17", "19", "21", "23", "25", "27", "29", "31", "33", "34", "35", "36", "37", "37??", "38", "40", "41", "41??", "42", "43", "43??", "43??", "43??", "44", "45", "46", "46??", "47", "48", "49", "50", "50/1", "50??", "51", "52", "52/1", "52??", "52??", "53", "55", "55??", "57", "59", "59??", "59??", "60", "60/1", "61", "62", "63", "64", "64??"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["4", "4/7", "5/10", "7", "8", "9", "9/3", "10", "10/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "3", "7", "9/11", "10", "12", "12??", "13/15", "14", "16", "16??", "16??", "17", "18", " 21", "23", "27", "29"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["3", "3??", " 6"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/7", "2", "2??", "2??", " 8", "10??", "10??", "17/19", "21", "23", "31", " 36", "38", "65", "65??", "67", "67??", "67??", "67/5", "67/10", "67/11", "67/12", "67/13", "69", "69??", "71/13", " 12??", "12??", "55"]
    }, {
      name: "??????. ????????????????????",
      number: ["5", "6", "8"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "1??", "2", "3", "4", "5", "5??", "6", "7", "7??", "8", "9", "11", "11??", "13", "15", "18", "18??", "20", "21", "23", "25", "25??", "26", "28", "30", "32", "34", "36", "36??"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["20", " 3", "3??", "4"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["3", "3??", "3??", "5", "7", " 5??", " 1??", "1/2", "2", "2??", "4", "6", "8", "9??", " 9??", "11/1", " 6??", "8??", "10", "10??", "10??", "10??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29"]
    }, {
      name: "??????. ????????????????????",
      number: ["17/32", "33", " 3", "4", "6", "7", "8", "10", "12", "14", "14??", "16", "16??"]
    }, {
      name: "??????. ??????????????-??????????????????????????",
      number: ["7", "7??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "5", "5/1", "6", "7", "7??", "8", "8/1", "9", "9??", "10", "10/2", "10??", "11", "12", "13", "14/1", "14/2", "15", "16/1", "16/2", "17", "18", "18/2", "19", "20/1", "20/2", "21", "22/1", "22/2", "23", "24", "25", "26", "27/1", "27/2", "28", "29", "30", "31", "32", "33", "34", "35/1", "35/2", "36", "37/1", "37/2", "37/3", "38", "39/1", "39/2", "41", " 43", "45"]
    }, {
      name: "??????. ??????????????",
      number: ["15/1", "15/2", "17", "19", " 25", "27", "29", "31", "33", "35", "37", "39", "39??", "41", "43", "45", "47", "49", "51", " 53", "55", "57", "59", "59??", "61", "63", "65", "67", "69", "70", "71", "73", "75", "77", "79", "81", "83", "85", "87", "90", "91", "93", "95", "97", "99", "101", "103", "105", "107", "111", "113"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "6", "8", "8/7", "8??", "8??", "8??", "12??", " 1/10", "3", "5", "5/15", "5/16", "12", "15", "17"]
    }, {
      name: "??????. ????????????????'?????????????? ??????",
      number: ["18", "22"]
    }, {
      name: "??????. ????????????????????????",
      number: ["6", "9", "10", "12", " 1", "11", "11??", "14", " 5", "7", " 2", "4", "8/1", "8/2", "14??", "14??"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", " 3", "4", "5", "6", "7", "8", "9", "10", "11", "15", "17"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["1", "2", "5"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1", "2", "2??", "4", "5", "6", "7", "9", "10", "14", " 25", "27", "27??", "31", " 15", "36", "43", "44", "45", "46/52", "51", "53", "54", "55", "56", "57", "60", "60/15", " 8", "11", "13", "14/20", "16", "18", "19", "19??", "20", "21", " 22/17", "24", "26", "32", "32??", "34", "37", " 59/5", "61", "63/12", "64", "66", "68", "68??", "70", "71", "71??", "72", "73", "75"]
    }, {
      name: "??????. ???????????????????????????? ????????????????????",
      number: ["8", "10/12", "15", "17", "19", "21", "22", "23"]
    }, {
      name: "??????. ???????????????????????? ??????????????",
      number: ["1", "2/14", "3", "4", "7", "10", " 26", "31", "33", "35", "36", "37", "37??", "42", "44", "45", "45??", "45??", "46", "47", "48", "49", "51", "51/7", "53", "53??", "54", "55", "57/17", "59/18", " 11", "12", "13", "17", "19", "21", "23", "25", "25??", "29/18", " 80", "86??", "87", "89", "95", "111/2"]
    }, {
      name: "??????. ???????????? ????????",
      number: ["22", "23", "24", "25", "27", "28", "29", "30", "30??", "31", "32", "33", "35", "37", "39", "41", "43"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1", "1??", "2", "3", "4", "4??", "5", "6", "7", "7??", "8", "9", "10", "11", "11??", "12", "12??", "13", "13??", "14", "15", "16", "17", "19", "21", "21??", "23", "25"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8??", "9", " 10", "11", "11??", "13", "15", "17", "18", "20", "21", "21/2", "21/3", "21/4", "21??", "22", "23", "25", "25??", "27", "29", "31", "33", "35", "37", "37??", "39??"]
    }, {
      name: "??????. ?????????????????????????? ??????????????",
      number: ["1", "2", "3", "4??", "5", "5??", "6", "8??", "9", "12", "12??", "12??", "14", " 7", " 20??", "21??", "27", "33", "34/1", "34/2", "34??", "35", "35/1", "35/2", "36", "36??", "37", "37??", "38", "39", "40", "41/1", "41/2", "42", "44", "46/9", "48/6", "50", "52", "53", "54", "58", "60", " 10", "11", "13", "15", "16", "18", "20", "22", "24", "25/28", "26"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["1", "2", "3", "3??", "4", "4??", "5", "6", "7", "7??", "9", "9/1", "11", "11??", "11??", "13", "17"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "5", "6", "6??", "7", "9", "11", "13", " 8", "15"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["1", "3", "3??", "3??", "3??", "5", "5??", "5??", "7", "7??", "9", "9/1", "9/2", "9??", "9??", "11", " 4", "4??", "6", "8", "10"]
    }, {
      name: "??????. ???????????????? ??????????",
      number: ["2", "2??", "19", "19??", "81/4??"]
    }, {
      name: "??????. ????????????",
      number: ["1", "1??", "1??", "1??", "3", "3??", "11", "13", "15", "17"]
    }, {
      name: "??????. ????????????????????",
      number: ["15/17", "17", "22", "24", "25", "25??", "26/8", "26??", "27??", "28", "28??", "28??", "32??", "32??", " 13", "13??", "13??", "13??", "14/6", "16", "18", "18??", "20", " 3", "5", "7", "7??", "11", "11??", " 4", "4??", "6", "6??", "8", "8/11", "10", "12"]
    }, {
      name: "??????. ????????????????????????",
      number: ["40??", " 1/21", "2/20", "3", "4/1", "4/2", "5", "6/2", "7", "7??/1", "7??/2", "8", "9/9", "10/1", "10/2", "10??", "11", "11??", "12", "13", "13??", "14", "15??", "16", "17", "18", "19/1", "20", "23", "23??", "24", "25", "25/1", "26", "27/2", "28??", "29", "29??", "30/1", "30/2", "31/1", "31/2", "32/1", "32/2", "33", "33??/1", "33??/2", "34", "35/2", "37", "38", "40/1", "40/2"]
    }, {
      name: "??????. ???????????????????? ??????????",
      number: ["4", "10", "14/34", "16", "19"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2/3", "3", "4", "5", "6", "7", "7??", "9", "11", "13", "17", " 4??", " 08 ????????????"]
    }, {
      name: "??????. ??????????????????????",
      number: ["52/1", "52/2", "52/33", "54", "56", "56??", "58", "58??", "58??/1", "60", "60??", "60??", "62", "64", "64??", "64??/2", "66", "66/2", "66/3", " 3", "4/13-1", "4/13-2", "5", "6", "7/1", "7/2", "8/1", "8/2", "8??", "9", "11/1", "11/2", "12/1", "12/2", "13", "14", "15", "16", "17/1", "17/2", "18", "19", "20", "21", "21/1", "21/2", "22", "23/1", "23/2", "24", "25", "26/1", "28", "29", "30", "31", "33", "34", "34??", "34??/1", "34??/2", "35/1", "35/2", "36", "38/1", "38/2", "39", "40", "41", "43/1", "43/2", " 44", "44/2", " 36??/1", "36??/2", "38??", "39", "40??", "42", "46", "46??", "47", "49", "50??", "50/1", "50/2", "51/1", "51/2", "53??", "53/1", "55/1", "55/2", "57", "59", "59/2", "61", "61/3", "63", "65", "67", "69??", "71", "73", "75", "77", "79"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["8", "8??", " 10", "12", "12??", "17", " 3", "5", "7/1", " 18/14", "22/16", "23", "25", "27", "28", "32", "33", "34/1", "36", "38", "48", "48??", "50", "51/1", "52", "54/2", "56/1", "60/25", "62/28", "64/1", "64??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["43/8", " 45", "47/1", " 20", "21", "21??", "22", "22??", "23", "24", "25", "26", "26??", "27", "28", "29", "30", "30??", "31", "32", "33", "33??", "34", "35", "36", "37", "38", "39", "40/29", "44", " 6??", "8", "8??", "9", "9??", "10/33", "11/35", "12/38", "13/40", "14", "15"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["3", "7/18", "9", "10/16", "11", "12", "13", "14", "15", "16", "17/15", "18/3"]
    }, {
      name: "??????. ?????????????????????????????? ??????????????????",
      number: ["3", "3??", "4", "7", "8"]
    }, {
      name: "??????. ?????????????????? ??????????????",
      number: ["27", "29", " 2??", "2??", "2??", " 4", "6", "7", "11", "19", "19??", "21", " 10", "12", "12??", "14", "25", " 05 ????????????"]
    }, {
      name: "??????. ??????????????????????",
      number: ["11", "13/1", "13/2", "15", "16", "17/1", "17/2", "18", "19", "19/10", "20", "21/9", "22", "23", "24", "25"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "2??", "2??", "2??", "2??", "3", "3??", "3??", "3??", "4", "5", "5??", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", " 59", "60", "61", "62", "63", "64", "64??", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "80??", "81", "82", "83", "84", "85", "86", "87", "99", "101"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "18", "20", "22", " 24/19"]
    }, {
      name: "??????. ???????????????????? ??????????????????",
      number: ["3", "4", "4??", "27", "27??"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "3??", "3/1", "4", "5", "6", "7", "8", "9/36", "10/1", "10/2", "11", "12", "13", "14/1", "14/2", "14??", "15", "16/1", "16/2", "17", "18", "19", "20/1", "20/2", "21/1", "21/2", "22", "23/1", "23/2", "24/1", "24/1??", "25/1", "25??", "27", "28", "29/1", "30", "32/1", "32/2", "34", "36", "36??", "38??"]
    }, {
      name: "??????. ???????????????? (????????????????)",
      number: ["3", "6", "8", "9", "10", "13", "18", "20", "25", "26", "27", "29"]
    }, {
      name: "??????. ???????????????????????? ????????????",
      number: ["19", "20", "21"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["6??", "6??/1", "20", "20??", "22", "22/2", "24", "26", "28", "32/1??", "34", "36", "38/2"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["3", "4", "6", "8", "10", "12", "14", "16", "18"]
    }, {
      name: "??????. ????????????",
      number: ["17", "19/1", "19/2", "19??", " 3", "3??", "5", "7/1", "7/2", "9", "11", "13", "15"]
    }, {
      name: "??????. ??????????????????????????????????????????",
      number: ["2/1", "2/1??", "3/5", "4", "4??", "6", "7", "8", "9", "10", "11/19", "12", "13", "14", "15", "16", "17", "18/2", "20/1", "22"]
    }, {
      name: "??????. ??????????",
      number: ["2", "4"]
    }, {
      name: "??????. ?????????? (????????????????)",
      number: ["1", "2", "2??", "4", "10", "11", "12", "13", "16", "24", "25", "26", "27", "28"]
    }, {
      name: "??????. ????????????????????",
      number: ["4/1", "4/2", "4??", "6/2", "7/1", "7/2", "8??", "13/1", "13/2", "15/1", "15/2??", "15??", " 18", "19", "20/21", "21", "25", "27", "29/8", "34/1", "35", "36", "37", "38/1", "38/2", "44", "45", "46/2", "47", "48/1", "48/2", "49", "50/1", "51", "52/3", "53/1", "53/2", "57/1", "57/2", "59", "61", "63", "65??", "67"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["3/1", "3/2", "4", "5", "6", "7", "9", "10"]
    }, {
      name: "??????. ???????????????????????????? ??????????????",
      number: ["5", "5??", "7", "7??", "13", "15", "15??", "15??", "15??", " 1/5", "3", "3??"]
    }, {
      name: "??????. ??????????????????",
      number: ["11", "15"]
    }, {
      name: "??????. ???????????????????? ??????????????",
      number: ["25/21", "27", "29", "29??", "31", "31??", "33", "33??", "33??/1", "35", " 15/13", "17", "19", "19??", "21", "21/1", "21??", "21??/1", "23", " 1", "2", "4", "4????????1", "4????????2", "4????????3", "4????????4", "4??", "6??", "6??/1", " 20", "20/1", "20/2", "20/3", "20/4", "22", "24", "24??", "24??", "26", "26??", "28", "30", "30/1", "30??", "45", "45??", "45??", "45??", "47", "47??", "47??", "49", "51", "53", "53/1", "53/2", "53/3", "53??", "55", " 37", "39", "39??", "41/28", "41/29??", "41??"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "5", "7", "8??", "8??", "8??", "10", "10??", "12", "16", "19??", "23", "23??", "23??", "23??", "27/29", "31/33", "43", "47"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "4", "6", "15", " 5", "5??", "7", "7??", "8/10", "9", "10??", "10??", "12/14", "14", "14??", "14??", " 16", "20", "20??", "20??", "22"]
    }, {
      name: "??????. ??????????????????",
      number: ["2"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "3/8", "5", "6", "9/2", "11", "11??", "11??", "12", "14", " 2??", "4/2", " 6??"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "3??", "4", "5", "6", "7", "9", "10", "11", "12", "13", "15", "16/1", "16/2", "17", "22", "22/3", "24/1", "24/2", "24??", "26"]
    }, {
      name: "??????. ??????'????????????",
      number: ["11", "13", "14/1", "14/2", "15", "16", "17", "18", "19", "20/1", "20/2", "21", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34/19", "35", "36", "37", "38", "39", "41", "43", "45", "112/40", " 1/8", "3", "8/1"]
    }, {
      name: "??????. ?????????????? ????????",
      number: ["2??", "2??", "5??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "4"]
    }, {
      name: "??????. ??????????????????????",
      number: ["8", "14??", "27", "27??", "29??", " 16", "16??", "16??", "18", " 21", "21??", "21??", " 2??", "5/7", "15??", " 8", "14??", "14??", "14??/1", "14??/2", "16", "16/1", "16/2", "16/3", "16??", "16??/1", "16??/2", "16??/3", "16??/4", "16??/5", "16??/6", "16??/7", "16??", "16??", "16??/1", "16??/2", "16??/3", "16??/4", "16??/5", "16??", "16??", "18", "18/1", "18/2", "27", "27??", "27??/1", "27??/2", "29", "29??", "29??/1", "29??", "29??", "29??"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["1/23", "2", "3", "5", "7", "9", " 2??"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1??", "7??", " 3", "5", "5??", "5??", "7", "9", "11", "11??", "11??", " 17??", " 15", "15??", "15??", "17", "17??", "19", "19??", "20", "22", "24", "26", "26??", "28", "30", "32", "32??", " 2", "2??", "2??", "2??", "4", "4??", "4??", "4??", "6", "6??", "6??"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "6", "8", "9", "10", "11", "13", "13??", "15", "16", "18", "20", "22", "22??", "22??", "23", "24", "26"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["4", "6", "6??", "8", "8??", "8??/1", "8??", "14??/1", " 14", "14/1", "14/2", "14??", "16", "18", "18/1", "18/2", "18??", "20", "22", " 3", "3??", "3??", "5", "5/1", "5/2", "5/3", "7", "9", "9/1", " 11", "11??", "13", "15", "17", "19", "19??", "19??/1", "19??/2", "19??/3", "21", "21/1", "21??", "23", "23??", "25/27"]
    }, {
      name: "??????. ????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "1??", "2", "3", "4", "5", "5??", "6", "7", "7??", "8", "9", "10", "11", "12", "13", "13??", "14", "15", "16", "17", "18", "19", "19??", "20", "21", "21??", "21??", "21??", "22", "23", "23??", "24", "24??", "25", "25??", "26", "27", "28", "29", "29??", "30", "30??", "31", "32", "33", "33??", "34", "35", "36", "37", "38", "39", "39??", "40", "41"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["2", "2??", "3", "5", " 4", "6", "7", "8", "10"]
    }, {
      name: "??????. ???????????? ????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "16", "18", "19", "20", "21", "22", "23", "24", "26", "30", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"]
    }, {
      name: "??????. ??????????????????????",
      number: ["8", "9??", "11", " 15", " 1", "3", " 26??", "28", "33/37"]
    }, {
      name: "??????. ?????????????? ????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "2??", "4", "4??", "4??", "4??", "6", "8", "10", "12", " 1", "3", "5??", "7", "7??", "7??", "9", "11", "11??", "13", "15", "17", "19", "21", "23", "23??", "25", "27", " 14", "16", "18", "20??", "22", "24", "26", "28", "30", "32", "34", " 5", "2"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["7??", "9", "11??", "13??", "15/46", " 2", "3", "4", "5", "6", "7", "7??", "8", "10", "11", "12", "14", "16"]
    }, {
      name: "??????. ??????????????",
      number: ["2??", "4", "6", "8", "13", "14", "15", "15??", "16", "16??", "17", "17??", "18", "19", "22", "22??", "23", "23??", "24", "24??", "24??", "26", "32", "32??", "44", "48"]
    }, {
      name: "??????. ??????????????????????",
      number: ["54??", "56", "58", "60", "61", "62", "62??", "66", "67", "68", "68??", "69", "69??", "70", "70??", "72", "73", "73??", "73??", "73??", "74", "75", "76", "78", "80", "82", "84", "86", "86??", "86??", "86??", "96??", " 3", "5", "7", "8", "9", "10", "10??", "11", "12", "12??", "14", "14??", "15", "16", "17", "17??", "18", "18??", "19", "20", "20??", "21", "21??", "22", "23", "23??", "24", "24??", "25", "26", "27", "28", "29", "30", "30??", "32", "33", "34", "34??", "34??", "35", "36", "36??", "37", "37??", "39", "39??", "39??", "39??", "39??", "41", "41??", "42", "43", "43??", "45", "48", "50", "54"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1??", "32", " 3/1", "3/2", "5/1", "5/2", "7/1", "7/2", "9/1", "9/2", "11/1", "11/2", "19", "27", "31", "37"]
    }, {
      name: "??????. ??????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????? (????????????????)",
      number: ["37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "82", "84", "86", "88", "90", "92", "94", "94??", "96", " 1", "1??", "2", "2??", "2??", "2??", "3", "4", "5", "5??", "6", "7", "7??", "8", "9", "9??", "9??", "10", "11", "11??", "12", "13", "14", "16", "16??", "17", "17??", "18", "19", "20", "20??", "20??", "20??", "20??", "21", "22", "23", "24", "25", "25??", "26", "27", "27??", "28", "29", "30", "31", "32", "33", "34", "35", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "58", "60", "62", "64", "66", "68", " 70", "72", "74", "76", "78", "80"]
    }, {
      name: "??????. ????????????????????????",
      number: ["12", "14", " 3", "4", "5", "6", "8/15", "11", "13"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["8/7", "9", " 2", "4", "5", "6", "7", "33"]
    }, {
      name: "??????. ????????????????",
      number: ["2/13", "3", "5", "6", "8"]
    }, {
      name: "??????. ?????????? ??????????????????",
      number: ["17/7", "19", "21/10", "24/10", "26", "28", " 2/4", "3", "5", "5/2", "6", "6/2"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "3??", "5", "6", "11??", " 1??", "2/37", "12", "13", "13??", "14", "15", "16", " 15"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "5", "6??", "7", "9", "11"]
    }, {
      name: "??????. ???????????????????? (????????????????)",
      number: ["64??", "65", "68", "70", "70??", "71", "72", "72??", "73", "74", "76", "76??", "82??", "83", "86", " 1", "1??", "2", "3", "4", "5", "6", "6??", "7", "8", "9", "10", "11", "12", "12??", "12??", "13", "14", "14??", "14??", "15", "16", "17??", "18/1", "18/2", "19", "20", "21", "24", "25", "25??", "26", "26/1", "26/2", "27", "27??", "27??", "27??", "27??", "28", "28??", "30", "32", "34", "36", "38", "42", "44", "46", "48", "50", "52", "52??", "52??", "54", "54??", "56", "56??", "58", "60", "62", "64"]
    }, {
      name: "??????. ???????????????????? (????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "6??", "7", "7??", "8", "9", "9??", "9??", "10", "11", "11??", "12", "12??", "13", "14", "15", "16", "17", "18", "18??", "19", "20??", "20??", " 20", "21", "22", "24", "25", "25??", "26", "27", "28", "29", "30"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "4", "14??"]
    }, {
      name: "??????. ???????? ????????????????",
      number: ["1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12/10", "13", "14", "14??", "14??", "14??", "15", "15??", "17", "19", "19/2", "23"]
    }, {
      name: "??????. ???????? ???????????????? (????????????????)",
      number: ["1", "1??", "2", "3", "4", "5", "6", "7", "7??", "8", "9", "9??", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "20??", "21", "22", "22??", "23", "24", "24??", "25", "26", "27", "28", "29", "29??", "30", "31", "31??", "32", "33", "34", "35", "36", "37", "37??", "38", "38??", "40", "40??"]
    }, {
      name: "??????. ??????????????",
      number: ["1??", "3", "3??", "5??", "6", "8", "9", " 2", "4"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??", "1??", "2??", "4", " 6", "8", "10"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "2", "5", "7"]
    }, {
      name: "??????. ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????",
      number: ["3", "9", "24"]
    }, {
      name: "??????. ??????????????",
      number: ["3", "5", " 9", "9??", "9??", "10", "11", " 12/5", "15", "15/7", "15??", "15??", "15??", "16", "19/7", " 18 ??????"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "2??", "3", "4", "4??", "5", "8", " 6"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "3", "5/1", "7/9", "8/12-1", "8/12-2", "8/12-3", "9/1", "9/2", "10/1", "10/2", "11/1", "11/2", "13/1", "13/2", "13/4", "13/5", "14", "15", "15??", "16", "18", "19", "19??", "20??", "20??", "20??", "21", "22/1", "22/2", "22/3", "22/4", "23", "25", "27", "27??", "29", "31/1", " 33/1", "33/2", "33/3", "33/4", "33/5", "33/6", "33/7", "33/8", "33/9", "33/10", "35/1", "35/2", "35/3", "35/4", "35/5", "35/6", "35/7", "35/8", "35/9", " 2", "6", "6??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4", "100", "102", "104", "106", "107", " 3", "5", "6", "7", "8", "9", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "29??", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "92", "94", "96", "98"]
    }, {
      name: "??????. ????????????????????",
      number: ["1??", "1??", "1/16", "2", "2??/14", "3", "4", "5/1", "5/2", "6", "7", "8", "9", "10/1", "10/2", "11", "11??", "12/1", "12/2", "13", "14", "15", "16", "17/1", "17/2", "17??", "18", "18/6", "19/1", "19/2", "19/3", "20/7", "21/1", "21/2", "22", "24", "24/1", "25", "27", "28", "29", "30", "31", "32", "33", "34", "34??", "35", "36", "37", "38", "39", "40/1", "40/3", "41/1", " 40", "41/2", "42", "43", "44", "45", "46", "47", "47/1", "48", "49", "51", "53", "55/1", "55/2", "57"]
    }, {
      name: "??????. ??????????????????",
      number: ["2/1", "2/2", "4/1", "4/2", "6", "8", "12", "14/1", "14/2", "16"]
    }, {
      name: "??????. ????????????????????-??????????????????",
      number: ["1??", "1??", "1??", " 2", "2??", "3", "3??", "5", " 4", "4??", "5??", "5??", " 1", "1??"]
    }, {
      name: "??????. ??????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????",
      number: ["7", "15", "17", "17??"]
    }, {
      name: "??????. ????????????????????",
      number: ["2/71", "4", "4??", "4??", "6", "6??", "8/24", "8??", " 5", "5??", "7", "7??", "7??", "9", "9/22", "9??", " 12", "12/1", "13??", "14", "16", "18??", "18??", "18??", "20", " 22", "23", "24", "26", "28", "28??", "30", "32/51"]
    }, {
      name: "??????. ??????????",
      number: ["13", "13??", "21", "23", "23??", "25", "27", "28", "28??", "29", "30", "30??", " 39", "53", "55", "58", "60??", "62", "63/65", "64", "64??", "66??", "66??", "66/14", "68", "75"]
    }, {
      name: "??????. ??????????????",
      number: ["3", "13/15", "19", "19??", "23", "25", "25??", "28", "29", "30", "30??", "30??", "33"]
    }, {
      name: "??????. ???????????? (????????????????)",
      number: ["2", "4", "6", "6??", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "62??", "64", "66", "68", "68??", "70", " 76??", "76??", "76??", "76??", "76??"]
    }, {
      name: "??????. ????????????-??????????????????",
      number: ["8"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "2", "2??", "2??", "2??", "2??", "4", "4/2", "4??", "4??", "4??", "7", "9", "11/1", "11??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??", "1??", " 3", "4", "5", "7", "7??", "9", "11", "11??", " 1??"]
    }, {
      name: "??????. ??????????",
      number: ["25"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["23", "23??", "23/4??", "23??", " 2"]
    }, {
      name: "??????. ????????????????",
      number: ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15/2", "16", "17", "18", "19", "20", "21"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "3", "4", "5", "6", "8", "10", "11", "12", "13", "14", "17", "19", "21", "25", "28", "28??", "29", "33", "35", "36", "37", "37??", "38", "40", "42", "44", "46", "50", "52", "54", "58"]
    }, {
      name: "??????. ????????????????????",
      number: ["30", "30/1", "30/2", "30/2??", "34", "34??", "34/1", "34/1??", "34/2", "34??", "36", "36/1??", "36??", "36??/1", "36??", "38", " 35", "35/1", "37", "37/2", "39", "39/13", "41", "43", "43/12", "45", "45/11", "47", "49", "51", "53", "55", "55??", "57", "59", "61", "63", "65", "67", "69", " 22/15", "24", "26", "28/41", "28??", "28/41??", "28/41??", "28/41??", "28/41??", "28/41??", "28/41??", "28/41??", "28/41??", "28/41??", "28/41??", "33/1", "33/43", "33/43????????1", "33/43????????2", "33/43????????3", "33/43????????4", "33/43????????5", "33/43????????6", "33/43????????9", "33/47????????7", " 18", "18??", " 5/3", "7", " 5/1", "5/2", " 4", "8", "8??", "10", " 27", "29", "29??", "31", "31/1", "31/2", " 11", "15/5", "19/11", " 46/1", "48", "48??", "50/2", " 52/3", "52??", "54", "54??", "56", "58", "58??", "60/5", "60??", " 71??", "71??", "71??", "71??", "71??", "71??", "73??", "73??", "73??", "73??", "73??", "73??", "75", "75??", "77", "79", "81", "81/1", "81??", "81??", "83??", "85", "85??", "85??", "87??", "87??"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "14", "48", "50", "56/12"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "4", "4??/1", "4??/2", "5", "5??", "5??/1", "5??/2", "6/1", "6/2", "7/1", "7/2", "8", "8/7", "10??", "12", "13", "14", "15", "16", "17", "18", "19/1", "19/2", "21", "23/1", "23/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "3??", "3??", "5", "6", "7", "9", "11", "13", "14/1", "14/2", "15", "16", "17", "18", "19", "20/1", "21", "20/2", "22", "23", "26/1", "26/2", "27", "29", "30", "31", "33", "34", "35", "36", "36/1", "40/1", "46"]
    }, {
      name: "??????. ????????????",
      number: ["1", "1??", "9", "9??", "9??", "9??", "9??", "9??", "9??", "9??", "11??", "12", "13", "13??", "15", "15??", "16"]
    }, {
      name: "??????. ???????????? (????????????????)",
      number: ["1", "1??", "2", "3", "4", "5", "6", "7", "8??", "8??", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24??", "24??", "25", "26", "27", "27/1", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "46", "47", "48", "49", "50", "51", "52", "53", "53??", "55", "56", "57", "58", "59", "60", "60/1", " 61", "62", "63", "64", "65", "65/1", "66", "67", "68", "68/1", "69", "70", "70??", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82"]
    }, {
      name: "??????. ???????????? (????????????)",
      number: ["44", "44??", "45", "46", "46??", "47", "48", "49", "49??", "49??", "50", "52", "52??", "53", "55", "55??", "57", "59", "61", "63", "65", "67", "69", "71", "73", "73??", "73??", "75", "75??", "75??", "75??", "77", "79", "81", "83", "85", "87", " 1", "1??", "1??", "1??/2", "2", "2??", "3", "3??", "3??", "3??", "4", "5", "6", "7", "8", "9", "10", "11", "11??", "12", "12??", "13", "14", "15", "16", "17", "18", "18??", "19", "20", "21", "22", "22??", "23", "24", "24??", "25", "26", "26/1", "27", "28", "28??", "29", "30", "30??", "31", "32", "33", "33??", "34", "35", "36", "37", "38", "39", "39??", "40", "40??", "41", "42", "43", "43??"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["3", "4/1", "4/2", "5", "6", "7", "9/2", "10/1", "10/3", "11", "13", "14/1", "14/2", "15/1", "15/2", "17/1", "17/2", "17/3", "19"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36"]
    }, {
      name: "??????. ??????'????????????????",
      number: ["14??", "16", "21", "23", "25", "27", "46", "62", "63", "65", "67", "69", "71", "77/69", "79", "81", " 1", "1??", "5", "7", "9", "11", "13"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10??", "11", "12", "13", "13??", "14", "15", "16", "16??", "17", "18", "18??", "19", "19??", "20", "20??", "21", "22", "23", "23??", "24", "25", "25??", "26", "26??", "28", "28??", "29", "30", "31", "32", "33", "34", "34/1", "35", "36", "37", "37/2", "38", "38??", "39"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["1", "1/1", "1/2", "1??", "5", "5/1", "5/2", "5??", "8", "8??", "9", "9??", "10", "10??", "11", "12", "12??", "14", "14??", "15", "15??", "16"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1/9", " 2/4", "3", "6/3", "7/9", "8/6", "11", "12", "14", "18??", "18??", "18??", "22", "22??", " 19", "24", "26??", "37", "41", "45/7", " 23", "25", "38/1", "38/2", "40", "42", "46", "48/7", " 47/8", "49", "51", "53??", "55", "57??", "59", "59??", "80", "82", "84"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "2/1", "22", "33", " 1", "3??", "3??", "5", "5/1", "7"]
    }, {
      name: "??????. ??????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3", "4??", "9", "11", "12", "12??", "14", "16", "16??", "17", "17??", "18", "18??", "18??", "19", "19??", "19??", "20", "20??", "21", "22", "22??", "22??", "22/1", "23", "23??", "24", "25", "25??", "25??", "26", "30", "32", "33/2", "33/27", "34", "36", "46"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1??", "1??/2", "1??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["09 ????????????????", " 3", "4", "6", "6??", "7/10", "8", " 9/9", "10", "10??", "11", "11??", "12", "13", "14", "15", "16", "17", "17??", "18", "18/20", "19", "20", "21", "21/12", "22", "23", "24", "25", "26/17", "27/29", "28/19", "28??", "33", " 30"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "1??", "1/6", "1??", "3", "9", "10", "11", "12", "13", "15", "15??", "17", "18", "19", "20", "21", "22", "22??", "23", "23??", "24", "24??", "25", "26", "27", "27??", "28", "28??", "29", "29??", "29??", "31", "35", "35??", "37", "37??", "39", "39??", "41", "41??", "45", "45??", "49??", "49??", "49??", "53", "53??", "57", "57??", "57??", "58", "58??", "58??", "59", "59??"]
    }, {
      name: "??????. ?????????????? (????????????????)",
      number: ["1", "2", "3", "4", "4??", "5", "6", "6??", "7", "8", "9", "10", "10??", "11", "12", "13", "14", "15", "15??", "16", "17", "18", "20", "21", "22", "23", "24", "25", "25??", "26", "27", "28", "29", "30", "30??", "31", "32", "33", "34", "34??", "36"]
    }, {
      name: "??????. ?????????????????????????? ??????????????????????",
      number: ["2", "2??", "2??", "2??/1", "2??/2", "2??/3", "2??/4", "2??/5", "4", "4??", "4??", " 8", "8??", "12", "12/1", "12/2", "12/3", "14", "14/1", "14/1??", "14/2", "14/3", "14/4", "14/5", "14/6", "14/7", "14/8", "14/9", "14??", "14??????????", "14??", "18", "18/1", "18/2", "18/3", "18/4", "18/5", "18/6", "18??", "18??", "22", "24", "24/1", "24/2", "24/3", "24/4", "24/5", "24/6", "24/7", "24/8", "24??", "24??", "26??", "26??", "26??", "26??", "28"]
    }, {
      name: "??????. ????????????????????????",
      number: ["16/1", "16/2", "18", "19/1", "19/2", "20", "21", "22", "23/1", "23/2", "23/3", "24", "25", "27", "28", "29", "30??", "31/1", "31/2", "32", "33", "34", "36", "38/1", "38/2", "39", "41", "43", "44", "46", "50", "50??", "50??", "51", " 1", "3", "4", "5/1", "5/2", "6", "7", "7??", "8/1", "8/2", "9", "10??", "10/1", "10/2", "11/1", "11/2", "12"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1", "1??", "1??", "1??", "2", "2??", "3", " 1??", "1??", " 1??"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["1", "3", "3??", "4/6", "7", "9", "11", "11??", "12", "12??", "13", "13??", "16", "16??", "18/29", " 14", " 2", "6", "6??", "6??", "10", "10??", "12??"]
    }, {
      name: "??????. ?????????????????? ??????????????",
      number: ["5/9", "8", "19", "21", "23", "25", "32"]
    }, {
      name: "??????. ????????????????????",
      number: ["14??", " 15/1", "15/2", "17", "19", "21", "23/1", "23/2", "23/5", "25", "27/1", "27/2", "27/3"]
    }, {
      name: "??????. ??????????????????",
      number: ["05 ??????????????", " 4", "6", " 1??", " 3"]
    }, {
      name: "??????. ?????????????????? (????????????????)",
      number: ["1", "2", "2??", "3", "4", "4??", "5", "6", "6??", "6??", "6??", "6??", "7", "8", "8??", "9", "9??", "10", "11", "11??", "12", "12??", "12??", "13", "15", "15??", "16", "17", "17??", "18", "19", "19??", "20", "20??", "21", "21??", "23", "23??", "25", "25??", "27", "27??", "29", "31", "33", "35", "37", "39", "41", "41??", "43", "43??", "45", "47", "47??", "49", "51??", "51??", "51??", "51??", "51??", "51??", "51??", "51??", "51??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "4", "5", "10", "12", "13", "17", "18", "25"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "3", "4", "4??", "5", "6", "9", " 2", "4", "4??", "6", " 7", "8", "10", "10??", " 17", "19", "23", "23/1", "27"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["3", "3??", "5", "5??", "5??", "9", "11", "13", "15", "17", "21", "21??", "21??", "26", "28", "30", "32", "34", "40", "40??", "42", "42??", "42??", " 4", "4??", "6", "10", "12", "14", "16", "18", "20", "20??", "24??", " 33", "34", "35", "38??", "39", "40", "40??", "41", "41??", "42", "42??", "42??", "43", "43??", "60", "62", "64", "68", "70??", "74", "74??", "74??", "74??", "76", "76??", "76??", "78", "78??", "80", "80??", "82", "84", "84??", "86", "88", "88/2"]
    }, {
      name: "??????. ?????????????????????? ??????????????",
      number: ["3", "3??", "3??/1", "3??/2", "3??/4", "3??", "3??", "3??/1", "3??", " 2", "2/1", "4", "4/1", "6", " 5", "7", "7/1", "7??", "7??", "7??", "8", "9", "9??", "9??", "9??", "9??/1", "10", "10/1", "10/2", "22", "22/1", "24", "24/1", "24/2", "24/4", "24/5", "24/6", "26", "28", "28/1", "32", "32??", "34"]
    }, {
      name: "??????. ???????? ??????????????????????",
      number: ["3", "3/4", "3??", "5", "6", "6/5", "6??", "6??", "7", "8", "9", "9??", "10", "11", "12", "13", "13/6", "14", "15", "15??", "15??", "16", "16/3", "17", "18", "18??", "18??", "19", "20", "20??", "20??", "20??", "20??", "20??", "20??"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["101", "101??", "112", "114", "114??", "114??", "115", " 55", "55??", "55??", "57", "60", "71", "71??", "75??", "75??", "76", "77??", "84", "92", "96??", "98??", "100", "100/1", "101", "102", "104", "104/1", "104/3", "106", "106??", "108", "109??", "110", "110??", "111", "112", "113"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["8", "24", "32", "40", "42", "48", " 79", " 86", "107", "111", "119", "127", " 11", "13", "15", "17", "31", "66", "84", "86", "86??", "86??", "86??", "86??", "86??", "86??", "86??", "87", " 83", " 37/41", "47/49", "53/3"]
    }, {
      name: "??????. ?????????????????????????? ??????????????",
      number: ["10/24??", "10/24??", "10/24??", "10/24??", "10/24??", "10/24??", "10/24??", "10/24??", "10/24??", " 19??", "19??/1", "21", "23", "23/1", "25", "25/1", "25/2", "25/3", "25??", "25??/1", "25??", "25??", "25??", "25??", "27/23", "27??", "27??", "27??", "27??", "28", "28??", "28??", "28??/1", "30", "30??", "30??", "32", "32??", "32??", "34", "34/1", "34/2", "34/3", "34/4", "34/5", "34/6", "34??", "36", "36??", "36??", " 1", "1/1", "1??", "1??", "3", "3/1", "3/2", "3??", "3??", "5", "7", "9", " 2", "2??", "4", "4??", "4??", "4??", "4??", "5/1", "5/2", "5/3", "5/4", "5/5", "5/6", "5/7", "5/8", "5??", "5??", "6", "6/1", "6??", "6??/1", "6??", "7??", "7??/1", "8", "8/1", "8/2", "9/1", "9/2", "10", "11", "11/1", "11??", "11??", "11??", "12", "12/1", "12??", "13", "13??", "13??", "13??", "15/3", "15/3??", "15/3??", "15/3??", "15/3??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "2", "2??", "3", "4", "4??", "12", "16", "16??", "18", "20", "20??", "22", "34", " 6"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["1", "2", "3", "3??", "4", "5", " 6", "9", "11", "12", "13", "13??", "15", "15/1", "15/1??", "15??", "17", "19", "19??", " 4??", "21", "21??", "21??", "23", "25", "25/1", "27", "29", "29??", "31", "31??", "31??", "33", "33??", "35", "37", "39"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1??", "2", "3??", "3??", "4", "5", "6", "6??", "6??", "7", "9", "9??", "10", "11", "11??", "11??", "11??", "11??", "12", "14", "14??", "14??", "15", "15??", "17", "18", "19", "19??", "20??", "25", "27", "27??", "27??", "28", "33", "34", "34??", "35", "37", "38", "38??", "38??", "38??", "39", "39/1", "39/3", "75", "75??", "75??", "75??", "75??", "75??"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["3", "7", "7??", "29", "39", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "63??", "64", "65", "66", "67", "68", "69", "70", "71", "73", "74", "76", "78", "80", "82", "84", " 4", "8", "10", "10??", "28", "30", "32", "34", "36", "38", "40", "42", " 6", "24/15"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1/7", "2/9", "3", "4", "4??", "6", "8", "10", "12/10", "15", " 21 ??????????????", " 16", " 5"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "2??", "4", "6", "8", "10", "10??", "12/1", "12/2", "14", "16", "17", "18/1", "18/2", "19", "20", "22/1", "22/2", "24", "26??", "28", "36", "42", " 1", "5", "9", "9/2", "11", "13", "15", "15/1", "15??", "27", "27/1", "29", "29/2", "31", "31/2", "33", "39", "39/2", "43", "45", "45??", "48", "51", "53", "55", "55/2", "57", "59", "61"]
    }, {
      name: "??????. ??????????????????????",
      number: ["9", "26", "26??", "73/2", "75", "75/2", "77", "79", "81", "81??", "83", "85", "85/2", "87", "89", "91", "93", "95", "97", "99", " 1", "1/2", "3", "3??", "5/1", "7", "7/2", "9??", "11", " 12", "14/1", "16/16", "23", "23/2", "23??", "25", "25/1", "25/2", "27", "29/1", "31/18", "33", "35", "35??", "37", "39/1", "39/2", "41", "41/2", "43/2", "43/3", " 22", "24", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "67/2", "69", "71", " 10", "11??", "11??", "12/8", "13/2", "13??", "13??", "15", "15??", "17/9", "19", "19/14", "21", "21??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["13", "15", "16", "18", " 3", "5", "7", "9", " 4", "6/6", "8", "10", "10??", "11/8", "12/1", "12/2"]
    }, {
      name: "??????. ?????????? ??????????????",
      number: ["2", "2??", "4", "8/4", "10", "10??"]
    }, {
      name: "??????. ?????????? ????????????",
      number: ["6", "8", "10??", "12", "12/14", "14", "16", "16??", "16??", "18", "18??", "21"]
    }, {
      name: "??????. ???????????? ?????????? (????????????????)",
      number: ["2", "2??", "3", "3??", "4", "4??", "4??", "5", "5??", "6", "6??", "7", "7??", "8/1", "8??", "8??", "9", "10", "10??", "11", "12", "14", "16", " 13", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "32??", "33", "33??", "34", "36", "38", "40", " 35", "37", "39", "41", "41/1", "41/2", "42", "43", "44", "45", "45??", "46", "47", "47??", "47??", "48", "48??", "49", "50", "51", "51/1", "52", "53", "54", "55", "56", "57", "58", "58??", "59", "59/2", "60", "61", "62", "62/2", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "76", "78"]
    }, {
      name: "??????. ???????????? ?????????? (????????????)",
      number: ["61", "62", "63", "64", "65", "66", "66??", "67", "67??", "68", "69", "70", "70??", "72", "73", "74", "75", "75??", "76", "77", "78", "79", "79??", "80", "80??", "80??", "81", "82", "83", "84", "85", "86", "87", "88", "88??", "89", "90", "90??", "91", "91??", "92", "93", "93??", "94", "95", "96", "97", "97??", "97??", "98", "99", "100", "101", "102", "102??", "104", "106", "106??", "106??", "108", "108??", " 1", "2", "2??", "3", "4", "5", "6", "6??", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19??", "19??", "20", "21", "22", "23", "24", "25", "25??", "26", "26??", "27??", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38??", "39", "39??", "40", "41", "42", "43", "43??", "44", "44??", "45", "45??", "46", "47", "47??", "48", "48??", "49", "50", "51", "52", "53", "53??", "53??", "54", "54??", "55", "56", "57", "58", "58??", "59", "59??", "60", "60/1"]
    }, {
      name: "??????. ???????????? ?????????? (????????????????)",
      number: ["32", "34", "36", "38", "40", "41", "42", "43", "44/1", "44/2", "44/3", "45", "45??", "46", "47", "48", "48??", "49", "50", "50??", "51", "52", "53", "54", "55", "56", "56??", "56??", "57", "57??", "58", "59", "60", "60??", "61", "61??", "63", "63??", "65", "67", "69", "71", "73", "75", "75??", "77", "79", "79??", "81"]
    }, {
      name: "??????. ??????????????????????",
      number: ["15", "17", "17??", "18", "19", "20", "22", "22??", "23", "25", " 1/8", "2/6", "3", "4", "5", "6", "8", "10/22", "11", "12", "13", "14", "16/14"]
    }, {
      name: "??????. ??????????????",
      number: ["35", "35??", "36", "37/1", "37/2", "37/3", "38", "40", "41", "41/2", "42", "43", "44", "46", "47", "48", "49", "50", "52", "54", "56", "58", "60", "62", "64", "66", " 3", "6", "8", "10", "10/1", "12", "12??", "13", "14", "15", "15/1", "17", "17/1", "19", "19/1", "19??/1", "19??/2", "21", "21/2", "22", "23", "25", "26", "27", "28", "29", "29/1", "29/2", "29/3", "30/12", "30/12-2", "31/2", "32", "32/1", "33", "33/1", "34"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/8", "5", "6", "6/2", "7", "7/2", "9", "10", "12", "14", "16/1", "16/2", "18/21", "20", "22", "22/2", "83/1"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "4", "7", "7??", "7??", "12", "12??", "16", "20", "20??", "21", "21??", "21??", "21??", "21??", "21??", "21??", "26", "27", "27??", "27??", "28", "28??", "28??", "28??", "28??", "28??", "28??", "29", "29??", "30", "30??", "30??", "31", "31??", "31??"]
    }, {
      name: "??????. ???????????????????? ??????????????",
      number: ["1", "1??", "3", "3??", "5", "6", "7", "7/1", "7/2", "9", "11", "13", "15", "17", "17/1", "19", "21", "23", "25", "26", "27", "28", "28??", "29", "31", "37", "39", "41", "43", "45", "47", "49", "51", "53"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["2", "2??", "2??", "4", "4/1", " 3", "5", "5??", "5??", "7", "9", "11", "13", "13/1", "13??", "15", "15??"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["2", "3", "4", "5", "6", "8", "9", "10", "11", "11??", "14", "15", "17", "18"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["1/1", "1/2", "1/3", "2/12", "3", "4", "4??", "5", "6", "6??", "7", "8/1", "8/2", "8??", "9", "9??", "10", "11", "12", "13", "14", "16/18", "17??", "17/1", "17/2", "19", "20", "21", "22/1", "22/2", "23", "24/7", "25/1", "25/2", "25/3", "27", "29", "31", "31??"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1??", "2", "2??", "3", "3??/3", "4", "6", "7", "7??", "9", "9??", "10", "11", "13", "15", "19", "21", "23", "25", "29"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["8", "11", "13", "14", "15", " 21??", "24", "25", "27", "32/22", " 38", "40", "42", "44", "46", "48", "50", " 21", "21??", "34", "36", " 35??", "37", "41", "41??", "50??", "50??", "50??", "50??", "50??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "5", "5??", "6", "7", "8", "10", "12", "14", "16", "18", "20", "22", "22??", "24", "26", "26??", "28", "29", "30", "31", "32", "32??", "36", "38", "38??", "42", "42??"]
    }, {
      name: "??????. ????????????????????",
      number: ["6", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "23", "24", "25", "26", "27"]
    }, {
      name: "??????. ?????????????? (????????????)",
      number: ["1", "1??", "2", "2??", "2??", "3", "3??", "4", "5", "5??", "6", "6??", "7", "8", "8??", "9", "10", "10??", "11", "12", "13", "14", "15", "15??", "17", "19", "19??", "21", "23", "25", "27"]
    }, {
      name: "??????. ????????????",
      number: ["1", "3??", "4??", "5", "5??", "7", "8", "10"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "3/2", "4", "5", "6", "7", "8", "9", "10", "11", "11??", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "42", "44", "46", "48", "50", "50/2"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", " 2", " 46/24", " 25", "30", "32", "37", "39", " 28", " 55/20", "56/63", "57/17", "59", "61", "63", " 3", "5", "7", "8", "9", "10", "16", " 50", "52", "54", "56", " 11", "13/24", "15/35", "17", "19", "20/37", "21", "22", "23/22", "24", "24??", "26/24", " 43", " 60", "76", "78", "82", "82??", "82??", "83", "85", "87", "87??", "87??"]
    }, {
      name: "??????. ????????????",
      number: ["119", " 15", "17", "18", "19", "19??", "19??", "20", "21", "21??", "23", "23??", "23??", "25", " 11 ??????????????", " 12??", "22", "22??", "24", "26", " 3", "3??", "3??", "3??", "4", "6", "8", "10"]
    }, {
      name: "??????. ???????????? (????????????)",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????? ??????????????????????",
      number: ["4", "4??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "6", "9", "11"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "13"]
    }, {
      name: "??????. ????????????????????",
      number: ["39", "41", "43", "45", "45/3", "47", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", "75", "77", " 3", "5", "7", "8", "9", "10", "12", "17", "19", "21", "23", "25", "27"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "3", "4", "5", "6", "7", "7??", "8", "9", "10/1", "11", "11??", "12", "12??", "12??", "12??", "13", "14", "15", "17", "20", "22"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1/35", "3", "4", "5", "5??", "6", "8", " 14 ??????????????", " 4??", "6??", "7", "10/11", "12", " 18", " 9/9", "11", "11??", "13/10"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "2??", "4", "8", "10", "12", "14", "14/3", "14??", "14??", " 7??", "7??", "9??", "9??", "11??", "11??", "11??", "13", "15", "15??", "40??", "40??", "40??", "42", "42/1", "44", "44??", "52", "52??", "54", "54??", "54??", "56", "56??", "56??", "58", "58??", "58??", "109", "109??", "111", "113"]
    }, {
      name: "??????. ??????????????????",
      number: ["9", "9??", "9??", "9??", "11", "11??", "16", "16??", "18", "20", "22??", " 4/1", "5", "6", "7", "7??", "8", "10/2", "14/1", " 3", " 2"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "16"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["23", "25", "27", " 9", "9??", "9??", "9??", "11", "11??", "13", "15", "15??", "20", "21", " 3", "3??", "4", "4??", "5", "5??", "6", "7", "7??", "7??"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["1", "2", "2/1", "2/2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    }, {
      name: "??????. ????????????????????-??????????????????",
      number: ["17/4", "27/29", "31", " 2", "4", " 3", "5??", "6/8", "7/9", "7/9??", "9", "10", "12", "14", "15", "15/17", "15/17??", "15??", "17", "17/19"]
    }, {
      name: "??????. ????????????????????-????????????????????",
      number: ["1??", "4??", " 2??", "2??", "4??", "4??", "4??", "5", "6", "6??", " 7", " 1", "2??", " 2", "4", "4??", "6", "6/2", "6??", "6??", "6??"]
    }, {
      name: "??????. ?????????????????????? ??????????",
      number: ["4", "5", "5??", "6", "7", "7/1", "7/2", "7??", "8", "9", "9??", "9??", "11", "11??", " 16", "17", "17/1", "17/2", "17??", "19", "19/1", "19/2", "19??", "21", " 13", "13/1", "13/2", "13??", "15", "15/1", "15??", "15??", "17??", " 1??", "3", "3/1", "3??", "3??", "5/1", "5/3"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["8", "12", " 2/6", "6", " 5", "7", "7??", "7??", "18", "28??", "28/32"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2??/1", "17", "17/23", "17??", "17??/1", "19", "19/1", "19??", "21", "21??", "25/2", "25??", "28", "74", " 1/2", "3", "3??", "5", "5/1", "5??", "5??", "7", " 31", "31??", "33", "33??", "35", "37", "39/48", " 23", "23??", "23??", "23??", "23??", "23??", " 25", "27", " 32/51??", "41/15", "43", "45", "47", "47??", "49", "58", " 2", "2??", "2??", "2??", "4", "4??", "6", "8", "8??", "8??", "10", "10??", "12", "12??", "12??", "16"]
    }, {
      name: "??????. ??????????????????????",
      number: ["30??/12-1", "30??/12-2", "31", "32", "33/1", "34", "35/12", "36", "37/1", "37/2", "38", "39", "40/1", "40/2", "41/1", "41??", "42", "43", "44", "45", "46/9", "47", "48", "49/9", "49??/12", "50", "51", "52", "53", "54", "55/1", "55/2", "56", "57", "58", "59", "60/1", "60/2", "61", "63", "63??", "63??/1", "63??/2", "64", "65/1", "65/2", " 1/17", "1??", "1??/1", "1??/2", "1??", "1??/ 23", "1??", "2", "3", "4", "5", "6/1", "6/2", "7/1", "7/2", "8/1", "8/2", "9", "10", "11", "12/32", "13/1", "13/2", "14/25", "15/1", "15/2", "16", "17/1", "17/2", "18", "19/1", "19/2", "20/1", "20/2", "21", "21??", "22", "23??", "23/1", "23/2", "24", "25", "25/1", "25/2", "26", "27", "28/1", "28/2", "29", "30/7", " 66/1", "66/2", "67", "68", "69/1", "69/2", "70", "71/1", "71/2", "72/1", "72/2", "73", "74", "76/1", "76??", "78"]
    }, {
      name: "??????. ????????????????????????",
      number: ["8", "27/16", "29", "31", "31??", "35", "35??", "37", "37??", "37??", "39", " 2", "4", "11", "13", "13??", "13??", "15", "15??", "15??", "17", "19", "21", "23/16", "25", " 1", "3"]
    }, {
      name: "??????. ????????",
      number: ["3", "101", "103", " 17", " 14", "19", "19??", "19??", "19??", "19/4", "21", "24", "26", "28", "30", "34", "34??", "36", "36??"]
    }, {
      name: "??????. ???????? (????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13??", "14", "15", "16", "16??", "17", "18", "19", "19??", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "32", "34"]
    }, {
      name: "??????. ????????????????????",
      number: ["7", "9", "11", "11??", "13"]
    }, {
      name: "??????. ??????????????????",
      number: ["3/55", "5/24", "6", "7", "8", "9/11", "10/1", "10/2", "12/1", "12/2", "14", "15", "16", "17", "18", "19/1", "19/2", "20", "22", "26/6", "28/1", "28/2", "30", "30/2", "32/2", "34/1", "34/2", "38/2", "40", "42"]
    }, {
      name: "??????. ?????????????????????? ???????????? ??????????????????????",
      number: ["10", "12", "14", " 22", "22??", "24", "57/1", "57/2", "64", "64??", "67", "68", "70", "72", "72/1", "74", "74??", "76", "76/2", "76/3", "78??", " 3??", "3??", "3??", "3??", "5", "7??", " 1/2", "1??", "1??", "1??", "3", "7", " 2", "4", "4??", " 22??", "24??", "24??", "24??", " 16/4", "20", "20??", "22??"]
    }, {
      name: "??????. ?????????????????????? ???????????? ????????????????????????",
      number: ["1", "1??", "3", "5", "7", "9", "11", "13", "15", "17", " 22", "24", "26", "28", "30", "32", "34", "36", "38", "40", " 35??", "37", "37??", "37??", "37??", "37??", "39", "41", "43", "45", "45??", " 19", "21", "23", "25", "31", "33??", "35", " 23", "27/5", " 8", "14", "14/18", "16", "16??", "16??", "16??"]
    }, {
      name: "??????. ?????????????????????? ???????????????????? ????????????????",
      number: ["1", "1??", "1??", "1/1", "2", "2??", "2??", "2??", "3", "4", "4??", "5", "6", "6??", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "16??", "16??", "16??", "16??", "16??", "16??", "16??", "16??", "17", "18", "18??", "18??", "18??", "19", "20", "21", "22", "23", "23??", "24", "24??", "25", "25??", "26", "27", "27/12", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", " 40??", "41", "42", "43", "44", "45", "46", "47", "48", "48??", "49", "50", "50??", "52", "54"]
    }, {
      name: "??????. ?????????????????? ????????????-????????????????????????",
      number: ["9", "9/10", "11", "16", " 1", "3", "3/1", "3/2", "4", "4??", "4??", "5", "6", "7??", "7/9", "8", "8??", "10", "10??", " 20 ??????????????"]
    }, {
      name: "??????. ?????????????? ??????????????????????-????????????????",
      number: ["11", "13", "13??", "15", "18/20", "19", "19??", " 4", " 14 ??????????????", " 1", "3", "4/6", "5", "7", "11"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1/3", "5/6", "7", "9", "11", "11??", "13", "13??", "15??", "15/1??", "17", "19", "21", "21??", "21??/34", " 5", "12", "12??", "13??", "14", "15", "16", "17??", "18??", "18??", "18??", "20", "20??", "20??", "22", "22??", "22??", "22??", "22??", "22??", "22??", "24", "24??", "24??", "24??/1", "24??/2", " 2", "6", "6??", "8", "8??", "12??", "14??", "16??", "16??", "18", "18??", " 2??"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["1", "1/4", "1??", "2", "3", "3??", "3??", "3??", "4", "5", "6", "7", "7??", "8", "9", "9??", "10", "11", "11??", "11??", "12"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51"]
    }, {
      name: "??????. ??????????????????",
      number: ["20/1", "22", "24", "24/1", "24??", "24??", "24??/1", "24??/2", "24??/3", "26", "26??", "26??", "28", "28/1", "28??", "28??", "28??", "30", " 3", "5", "5??", "5??", "5??/1", "7", "7??", "7??", "7??/1", "7??", "7??/1", "9", "9??", " 10", "10??", "12", "12??", "14", "14??", "16", "18", "18??", "18??", " 4????????1", "6", "6/1", "6??", "8", "8/1", " 11", "11??", "11??", " 7/20", "7/20??", "7/20??", "15", "15??", "17", "17/1", "17??", "17??", "17??", "19", "19/1", "19/2", "19/3", "19/4", "19/5", "19/6", "19/7", "19/8", "19/9", "19/10", "19/11", "19/12", " 34", "34/1", "34/2", "34/3", "34/4", "34/5", "34/6", "34/7", "34/8", "34/9", "34/10", "34/11", "34/12", "36", "38", "38??", "40/16", "40/16??", " 21", "23", "23/1", "23/2", "23/3", "23??", "23??", " 25", "29", "42", "42/1", "42/2", "42??", "44", "44/1", "44/2", "44/3", "44/4", "44??", "44??", "46"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "3", "4", "4??", "6", "8", " 10/33", "12", "14", "14??", "18", " 9"]
    }, {
      name: "??????. ??????????????",
      number: ["1/16", "2/14", "3", "3/1", "3/2", "3/18", "4", "4/1", "4/2", "5", "5/15", "6", "7", "7/1", "7??/1", "8", "8/1", "8/2", "8??", "11/8", "13", "13/1", "13/2", "13/10", "14", "15/5", "15/9", "16", "18", "19", "19/1", "19??", "22", "24"]
    }, {
      name: "??????. ???????????????????????? ??????????????",
      number: ["4", "5", "6/11", "10", "10??", "10??"]
    }, {
      name: "??????. ????????????",
      number: ["2", "2??", " 1", "4", "9"]
    }, {
      name: "??????. ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["1", "5", "6", "8", " 9", "1"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "4", " 48", "50", "57", "58", "59", "59??", "60", "61", "64", "65", "67", "70", " 45", "46/10", "47/1", "47/2", "47??", "49", " 5/1", "5/2", "5/3", "7", "8", "9/1", "9/2", "10??", "10/2", "13", "16", "17", "18", "18/1", "18/2", "19", "20", "21/1", "21/2", "21/3", "22", "24", "25/1", "25/2", "25/3", "26", "26??", "27", "28", "29", "30", "31", "32/1", "32/2", "34", "35", "36/1", "36/2", "37/1", "37/2", "37/3", "38", "38??", "39", "40", "41", "42/1", "42/2", "42/3", "43", "44/1", "44/2", " 2", "3", "4", "8"]
    }, {
      name: "??????. ???????????????? (????????????)",
      number: ["1", "2", "2??", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "17??", "18", "19", "20", "21", "22", "23", "23??", "24", "25", "26", "27", "28", "30", "31/17", "32", "34", "36", "38", "40", "42", "44", "46"]
    }, {
      name: "??????. ???????????????? (????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "7??", "9", "9??"]
    }, {
      name: "??????. ????????????",
      number: ["1", "1??", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??", "1??/1", "1??/2", "2/1", "2/2", "3", "4", "5", "6", "7/1", "7/2", "8", "8??", "8??", "9/5"]
    }, {
      name: "??????. ???????????????????????????? ????????????",
      number: ["1", "2", "3", "4", "5", "5??", "6", "6??", "7", "8", "9", "9??", "9??", "10", "11", "11??", "13"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "30", "32", "34", "36"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", " 3??", " 3", "5", "5??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "4", "5", "5??", "6", "7", "7??", "8", "8??", "9??", "10??", "10??", "10??", "11", "12", "14", "15"]
    }, {
      name: "??????. ??????????????????????????????????",
      number: ["20??", " 7??", "22", "28", "28??", "32", "32??", "32??", " 12", "15", "16", "20", " 9", "11"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4", "6", "8", "8??", "10", "14", "21??", "23", "23??", "24", "24??", "25", "27", "27??", "28", "28??", "29", "30", "30??", "31", "31/11", "32", "33??", "35/12", "36", "36??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38??", "39", "40", "40??", "41", "42", "42??", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", " 92", "94", "98", "100", "102", "104", "106", "121", "123", "125", "127", "129", "131", "131??", "133", "133??", "133??", "135", " 66", "67", "68", "69", "70", "70??", "71", "72", "73", "74", "75", "77", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "92", "93", "95", "97", "99", "101", "103", "105", "107", "109", "111", "113", "115", "117", "119"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1??", "1??", "1??", "3", "4", "4/2", "5", "5/2", "5/3", "7/1", "7/2", "8", "9??", "9??", "9/2", "9/3", "10", "10/1", "10/2", "11??", "11/6", "12", "12/2", "14/2", "14/3", "16", "18/1", "18/2", "20/8"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "4/1", "6", "8", "10", "10??", "12", "14??", "14/2", "19", "19??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]
    }, {
      name: "??????. ????????????????????",
      number: ["8??", "8??", "22", "24", "27", "29", "29??", "29??", "30", "31/33", " 13", "15", "17", "17/2", "19", "23", "23??", " 2", "3", "5/2", "5/2??", "8????????????30", " 45/1", " 36", "37/2", "38", "39", "39??", "40??", "40??", "41/8", "42", "43/11", "44", "45/1????????????26", "45/1????????????33", "46/2", " 8", " 8"]
    }, {
      name: "??????. ???????????????????? (????????????)",
      number: ["1", "1??", "1??", "2", "2??", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11??", "12", "13", "14", "15", "16", "16??", "17", "17??", "18", "19", "20", "20??", "21", "22", "22??", "23", "24/24??", "24??", "25", "25??", "26", "27", "27??", "28", "28??", "28??/1", "28??", "29", "29??", "29??", "30", "30??", "30??", " 31", "31??", "32", "33", "34", "35", "35??", "36", "37", "38", "39", "40", "41", "42", "44", "44/1", "44??", "45", "45??", "46", "48??", "53", "59", ""]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "6", "6??", "8", "9", "10", "10/1", "11", "12", "14", "16", "16/2", "24", "26", " 17", " 20"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "3", "5", "5/2", "6", "7", "7/1", "8", "8??", "9", "10", "10??"]
    }, {
      name: "??????. ??????????????",
      number: ["5", "9", "10", "11/1", "11/2", "12", "13", "14", "17", "19", "21", "21/1", "21/2", "22/1", "22/2", "23", "24", "26/1", "26/2", "27", "27??", "27/2", "29", "31/1", "33/1", "33/2", "33/3", "33/4", "35/1", "35/2", "57/1", "59", "61", "63", "65/43", "68", " 18", "41/1", "41/2", "43/1", "43/2", "43??", "43??", "45", "47", "49", "51/1", "51/2", "51/3", "53"]
    }, {
      name: "??????. ?????????????? (????????????????)",
      number: ["1", "2", "2??", "3", "4", "5", "6", "7", "8", "10", "11", "11??", "13", "14", "14??", "14??", "14??", "15", "16", "17", "17??", "18", "19", "20", "21", "22", "23", "24", "25", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "68??"]
    }, {
      name: "??????. ??????????????",
      number: ["6"]
    }, {
      name: "??????. ??????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3/9", "4/7", "5??", "6", "8", "9", "14", "14??"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["4", "5", "6", "6??"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "3??", "5", "6", "6??", "8", " 1????????1"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3??", "5/34", " 6/1", "6/2", "8", "10/1", "10/2", "12??", "12/2", "14/1", "14/2", "16/36", "16/36??", "18??/1", "18/2", "20", "22", "24/1", "24/2", "24??", "26", "26??", "28/1", "28/2", "30", "30??/1", "30??/2", "32", "32??", "36", "36??", "38/2", "40", "42/1", "42/2", "44", "44??", "46", "48/1", "48/2", "50", "52", "52??", "52/1", "54"]
    }, {
      name: "??????. ??'????????",
      number: ["3"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "3", "3??", "5", "5??", "5??", "7", "7??", "7??/1", "9", "9??", "11", " 2", "4", "4??", "6", "8", "10", "12", "14", "16", "18", "20", "24", "26", "28", "28??"]
    }, {
      name: "??????. ??????????????????-????????????????????????",
      number: ["12", "16", "18", "20", "24", "24/1", "26", "28", "30", "32", "32/1", "32/2", "34", "36", "38", "38/1", "40", "48", "60", "62", "86", " 136", "136??", " 90", "92", "94", "96"]
    }, {
      name: "??????. ??????????????????-????????????",
      number: ["1", "2", "2??", "2??", "2??", "2??", "3", "3??", "4", "6", "7", "7??", "9", " 8", "8??", "12", "12??", " 23", " 29"]
    }, {
      name: "??????. ??????????????????-??????????????????????",
      number: ["11", "13", "13??", "15/17", "17/18", "19/21", " 4??", "8??", "10", "10??", "10??", "14", "14??", "25", "27", "31", "33", "35", "35??", "37", "39", "41", " 1", "3", "3??", "7", "7??", "9", "13/5"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["4", "9", "11", " 13"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "4", "5", "6/31", "7", "8??", "8/32", "10", "12", "13/2", "14", "15", "16/13", "17", "18/16", "19", "20", "21", "22", "23", "24", "24/1", "25/27", "27", "27??", "27??", "27??", "29", "47"]
    }, {
      name: "??????. ??????'????????",
      number: ["3", "4/6", "12"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23??", "25/3"]
    }, {
      name: "??????. ??????????????",
      number: ["3", "5", "6/22", "7/1", "9/2", " 8??", "8/15", "10/22", "11", "11??", "11??", "11??", "12/19", "13", "15", "16/19", "18", "18/14", "19/20", "22/18", " 17", "21", "23", "24", "26/17", "27", "28/12", "30", "32", "34/2", "36/13", "38", "40", "41", "42/1", "42/2", "42/3", "42??/1", "42??/2", "43", "44", "45", "47"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["1", " 3", "3??", "5", "5??", "9", "9??", "11??", "13", "14", "14??", "15", "16", "16??", "17", "18", "18??", "18??", "19", "20", "21", "22", "23", "25", " 2", "4", "4??", "6", "7", "8", "12", "12??"]
    }, {
      name: "??????. ?????????????? ????????????????",
      number: ["37", "37??", "39", "41", " 1", "3", "6", "8??", "36", "42", "48??", " 19", "23??", " 13", "15", "17", "17??", " 23", "23??", "23??", "25", "25??", "27", "31", "31??", "33", "35??", "66", " 32??", "33??", "35??", "37??"]
    }, {
      name: "??????. ?????????????????? ????????????????????",
      number: ["7", "9", "17", "21", "25", "27", "29/1", "29/2", "29/3", "31", "33", "41"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "4??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "3", "6", "7", "8", "10/8"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "3??", "3??", "4", "4??", "5", "6", "7", "8", "8??", "9", "10", "10??", "12", "12??", "14"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "1/1??", "2", "2??", "2??", "3", "4", "5", "6", "7", "8", "8??", "8??", "9", "11", "12", "12??", "14", "15", "15??", "15??", "16", "17", "18", "19", "19??", "20", "21", "22", "23", "24"]
    }, {
      name: "??????. ????????????????????-????????????????",
      number: ["2", " 5", " 1", " 14/13", "16", "16??"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["1/18", "3", "3??", "5", "5??", "6", "8"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3/2", "5"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["3", "5", "7", "8", "10"]
    }, {
      name: "??????. ??????????-????????????????????",
      number: ["1", "1??", "3", "4", "5", "5??", "6", "7/2", "8", "8/1", "8/2", "8??", "8??/1", "9", "10/14", "11/10", "11??", "12", "13/5", "15/6", "16", "17", "17??", "18", "19", "20", "21", "22", "23", "24", "25", "26", "28", "30", "32", "34", "36", "38"]
    }, {
      name: "??????. ??????????????",
      number: ["35/1", "35/2", "36", "36??", "36??", "36/38", "37", "39/1", "39/2", "40/1", "40/2", "40/3", "41/1", "42/49", "43/51", " 3/5", "6/1", "6/2", "6/3", "6/4", "7", "7??", "7??", "10??", "12", "14", "16", "17/1", "17/2", "18", "19", "19??", "20", "20??", "21", "22/1", "22/2", "22/65", "23", "24/1", "24/2", "25/1", "25/2", "25??", "26", "27/1", "27/2", "27/3", "27/4", "28", "29/1", "29/2", "30", "31??", "31/2", "31??/1", "32", "32??", "33", "34"]
    }, {
      name: "??????. ???????????? ??????",
      number: ["3", "7", "9", "13", "13??", " 17", "19", "19??", "21", "31??", " 29", "31", "33??", "33??", "33??", "33??", "35", "37/20", "41", "43", "49", "49??", "51", "53", "65", " 15??"]
    }, {
      name: "??????. ???????????? ?????? (????????????????)",
      number: ["1", "3", "4", "4??", "5", "6", "8", "10", "12", "14", "14??", "16", "17??", "19", "20", "22", "24", "24??", "26", "28??", "28??/1", "28??/2", "30", "32", "34", "36", "40", "42", "44", "46"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "12", "14"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["2", "3", "4", "5", "6", "8??", "9", "12", "13", "31", "37", "39", "47", "75??", "81"]
    }, {
      name: "??????. ??????????????????",
      number: ["16", "18", "20", "26", "27", "29", "29/1", "29/2", "29??", "29??", "29??", "29??", "29??", "29??", "30/1", "30/2", " 5", "7", "10", "12", "14"]
    }, {
      name: "??????. ?????????????????? ??????????????????????",
      number: ["17", " 1/27", "3", "3??", "3??", "3??", "5", "5??", "5??", "7", "7??", "9", "9??", "11", "13", "13??", "15", "15??", "15??", "15??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["16", "16??", "16??", "18/1", "18/2", "19", "20", "21", "22", "22??", "22??", "23", "24", "25", "27/2", "27/3", "29", "29??", "31", "33", "35"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "3", "4", " 6", "1", " 5", "7"]
    }, {
      name: "??????. ????????????????",
      number: ["32 ????????????", " 3", "3??", "4", "5"]
    }, {
      name: "??????. ?????????????????????? ??????????",
      number: ["5", "6", "8", "10", "12/2", " 12", "12/1"]
    }, {
      name: "??????. ????????",
      number: ["2"]
    }, {
      name: "??????. ???????? (????????????)",
      number: ["1", "1??", "1??/1", "5", "7", "9", "10??", "11", "17", "20/1", "20??", "21/1", "22/1", "22/2", "22/3", "23/1", "24/1"]
    }, {
      name: "??????. ???????? (????????????????)",
      number: ["1"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??", "2??", "3", "4", "5", "5/1", "11", "11??", "13", "13/1", "13/2", "17", "17/1", "19/1", "22??", "22??", "22??", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "37", "38", "39", "40", "40/1", "41", " 9"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "3", "4", "5", "6", "11"]
    }, {
      name: "??????. ????????????????-????????????",
      number: ["8", "9", "10", "10??", "10??", "11", "12", "13", "14", "14??", "15", "16", "17", "18", "19", "21", "24", "26", "26??", "26??", "26??", "30"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "4??", "4??", "5", "6??", "8", "19", " 17", "21", "37", "39", "41", "51", "53", "65", "67"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["5", "5??"]
    }, {
      name: "??????. ????????-??????????????????",
      number: ["2/17", "2??", "3/15", "4", "5", "6", "7", "11", "13", "13", "14", "16", " 26", "26????????2", "28/9", "30", "32", " 15", "15/1", "15/1??", "17", "23/7", "27??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["2/6", "2/6??", "20", "21", "21??", "23"]
    }, {
      name: "??????. ????????????????????????",
      number: ["22", "22??"]
    }, {
      name: "??????. ????????-????????????????????????",
      number: ["1/18", "2/16", "3", "3??", "5", "6", "7", "9", "11", "12", "14", "15", "16", "18", "19", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"]
    }, {
      name: "??????. ??????????????????????????????????????",
      number: ["1", "2??", "4", "4??", "4??", "8", "15", "18", "20", "22", " 1??", "1??", "1??", "1??", "3", "7", "8??", "9", "11", "12", "13/10", "22/15"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1", "1??", "1??", "2", "3", "4", "4??", "5", "6", "7", "8", "9", "10", "11", "12", "12??", "13", "14", "14??", "15", "15??", "16", "16??", "18", "18??", "20", "22", "24", "24??", "26", "26/1", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["15", "21", "21??", "25", "25??", " 10", " 2", "2??", "2??", "2??", "2??", "3??", "4", "6", "8", "27"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["29", "31", " 1", "2", "3", "4", "5", "6", "8", "8??", "8/2", "18", "19", "21", "23", "24", "25", "25/2", "26/1", "26/2", "27", "27/2", "28", "28??", "30", "32", "33", "62", "62??", "64", "64??", "66", " 58", "58??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "4", "6", "8", "10", "12", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", " 85", "85??", "89/16", "93??", "94", "95", "96", " 73", "74", "75", "76", "77", "78", "79", "80", "81 82", "84", "86", "88", "90", "92", " 91", "93", "106", "106??", "106??", " 2", "2??", "7??", " 97??", "97??", "99", "99??", "99??", "101", "101??", "101??"]
    }, {
      name: "??????. ??????????????????",
      number: ["8"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2/6", "3", "4", "5", "6", "7", "8", "9", "10", "12", "13", "15", "17", "19", "21", "23", "25", " 11"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1/3", "1/3??", "1??", "2", "2/6", "5", "24??"]
    }, {
      name: "??????. ????????????????????",
      number: ["4", "5", "6", "7", "9", "12", "13/15", " 34", " 21", "23/48", "25/49", "29", "29??", "31", "35", "37", "37??", "38", "41", "47"]
    }, {
      name: "??????. ???????????????????? ??????????????????",
      number: ["21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", " 13", "15????????1", "15????????2", "15????????3", "15????????4", "15????????5", "15/1??", "17", "19????????1", "19????????2", "19????????3", "19????????4", "19????????5", "20", "20/1", " 1", "3????????1", "3????????2", "3????????3", "5", "7????????1", "7????????2", "7????????3", "7????????4", "7????????5", "9", "11????????1", "11????????2", "11????????3", "11????????4"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????",
      number: ["2/1", "2/2", "2??", "4", "5", "6", "8", "10", "12", "16"]
    }, {
      name: "??????. ????????????????????????",
      number: ["5", "7", "7??", "9", "13/15", "17", "19", "21", "21??", "23", "25"]
    }, {
      name: "??????. ????????????????????",
      number: ["60", "62", "66", "68", "70", "70??", "72", "73", "74", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "94", "96", "98", "100", "106", "108", "110", "111/1", "111/2", "111/3", "111/4", "111/5", " 112", "113", "114", "115", "117", "125", "127/1", "127/2", "127??", "129/1", "129/2", "131", "133", "135", "137", "137??", "139"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "5", "7??", " 6", " 26", "28", "28??", "29", " 17", "19", "21", "23", "25"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "8/15"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["15", "15??", "21"]
    }, {
      name: "??????. ??????????????",
      number: ["1/20", "2/68", "3", "4", "4/2", "5", "6", "6??", "6??", "7", "8", "8??", "9", "10", "10??", "11", "12", "13", "14", "15", "16??", "16/19", "17", "18/16", "19", "20", "21", "22", "22??", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32/17", "33", "35", "37", "39", "41", "43", "45", "47", "47/19"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "6", "8??", "11", "18/1", "20", "22"]
    }, {
      name: "??????. ????????????",
      number: ["1", "3", "5", "7", "9", "12??", " 1", "1??", "1??", "3", "3/1", "5", "5/1", "5??"]
    }, {
      name: "??????. ???????????? (????????????????)",
      number: ["1", "2", "3", "4", "4??", "5", "7", "8", "9", "10", "11", "11??", "12", "13", "15", "16", "17", "18", "18??", "19", "21", "23", "24", "25", "26", "27", "27??", "28", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "44??", "45", "46", "48", "50", "50??", "52"]
    }, {
      name: "??????. ???????????? (??????????????)",
      number: ["2", "2??", "4", "4??", "6", "6/1", "8", "8??", "10", "10??", "10??", "12", "14", "16", "18", "18??", "18??", "20", "22", "24", "26", "26??", "28", "28??", "30/51"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["3??", "4??", "4??", "6", "8", "8??", "8??", "10", "10??", "10??", " 1", "3??", "3??", "5??", "5??", "7??", " 2", "3", "4", "5", "7", "9"]
    }, {
      name: "??????. ????????????????",
      number: ["7", " 3??", "3??", "3??", "3??", "5??", "42"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "5", "9", "10", "10??", "11", "16", "18", "20", "22", "23", "25", "27", "32", "34??", "36", "37", "38", "39", "39??", "40", "42", "43??", "44", "46", "62", "63", "65/67", "69/71", "79", "81"]
    }, {
      name: "??????. ???????????????????? ??????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1", "3", "5", "7", "8", "9", "9??", "10", "11", "12/14", "13", "13??", "13??", "15/1", "15/2", "15/3", "15??", "16", "17/8", "19/1", "19/2", "21/2", "23/1", "23/2", "25", "25??", "26/7", "27/1", "27/2", "27/3", "28", "29/1", "29/2", "29/3", "30", "31/1", "31/2", "32/2", "33", "34/1", "34/2", "35/1", "35/2", "36/1", "36/2", "37", "38/1", "38/3", "38??", "39", " 40", "41", "42", "42??/1", "42??/2", "43", "44", "45/1", "45/2", "46/1", "48", "50", "54"]
    }, {
      name: "??????. ????????????????????????",
      number: ["20", "22", "24", "26", "27", "28", "29", "31", "32", "33", "35", " 2", "4", "6", "9", "10/12", "11", "14", "16", "17", "18/2", "20/6", " 3", "3??", "5"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["1", "2/1", "2/2", "3", "4/1", "4/2", "5/1", "5/2", "6", "7", "8", "9", "11", "13", "14", "15", "16", "17", "19", "22", "23", "24", "25/1", "25/2", "26", "28", "29", "30/1", "30/2", "30/3", "31 32/1", "32/2", "33", "34", "35", "36", "37", "37??", "39", "41", "43", "45", "47/1", "47/2"]
    }, {
      name: "??????. ????????????????????",
      number: ["16", " 25", " 3", "23", "34", "34??", " 8", "1"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["3", "4/24", "5", "6", "7", "8", "9", "9??", "10", "11", "13", "15", "17", "19", "19??", "21"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "2/1", "3", "6", " 02 ????????????"]
    }, {
      name: "??????. ??????????????",
      number: ["3", "5", "7", "7??", "9", "9??", "11", "11??", "13", " 15", "15??", "17", "17??", "18/22", "19/28", "21", "22", "23", "24", "25", "26", "27/22", "28", "29", "30", "32", "34", "35", "35??", "37", "38", "40", "41", "42", "43", "45", "47", "48", "49", "51", "51??", " 16", "18", "18??", " 2", "4", "6", "8", "10", "10??", "12", "14", "14??", "14??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["4", "4??"]
    }, {
      name: "??????. ???????????????????? ????????????????",
      number: ["1", "3", "4", "6"]
    }, {
      name: "??????. ????????????????????????",
      number: ["54", "54??", "56", "58", "58/13", "60", "60/14", "62", "64", "66", "68", "70", "72", "74", "74??", "76", "78", " 2", "2/14", "4", "6/13", "8/14", " 15/1", "24/13", "26/14", "26??", "28", "30/27", "33", "34", "34??", "36", "36/2", "38", "38??", "40??", "40/1", "42", "42/1", "42??", "42??/1", "44", "44??", "44??", "46", "46??", "48", "48/1", "48/2", "50", "50/1", "52", " 5", "7", "9", "10", "10??", "11", "12", "12/13", "14", "16", "17", "18/21", "19", "21/23", "22", "23/30", "24", "25", "27", " 80", "82", "84", "86", "88/7", "90"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "3", "3??", "3??", "5", "7", "9"]
    }, {
      name: "??????. ??????????????",
      number: ["3/1", "3/2", "4", "5", "6", "7", "8/1", "8/2", "10"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "8", "9", "12", "13", "14"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["1/15", "3", "6", "9", "10", "13", "15", "16/12", "18", "22/2", "24/1", " 4??", "8"]
    }, {
      name: "??????. ??????????????????",
      number: ["8/1", "10", "12/1", "12/2", "15", "16", "21", "23/1", "23/2", "25", "27", "29", "31", "33", "35", "37/1", "37/2", " 2/7", "3/1", "3/2", "4/6-2", "5/1", "5/2", "7/1", "7/2", "9", "9/2", "11", "13"]
    }, {
      name: "??????. ????????????",
      number: ["3", "5/2", "5/3", "5/4", "6/1", "6/2", "6/3", "8", "9", "10", "10??", "11", "11/1", "11/2", "12", "13/1", "13/2", "14/1", "14/2", "16/1", "16/2", "18", "18??", "18??/1"]
    }, {
      name: "??????. ????????????",
      number: ["3", "3??", "4", "5", "5??", "6", "6??", "7", "8/1", "10/2", "12/1", "14", "14??", "16", "16??", "18", "22/8"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "3", "3??", "3??", " 31", "33", " 21", "23", "25", " 2", "2??", "2??/1", "2??/2", "2??/3", "2??/4", "2??/8", "2??/9", "4", "5/12", "6", "7", "8", "10", "12", "14", "16", "18", "19??", "19??", "19??", "20", "22", "24", "26", "27", "28", "29", "30", "32", "34", "36", "38", "40", "42", "43", "44", "44??", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "56??", "57", "58", "59", "60", "61", "62", "63", "65", "67", "69", " 71", "73", "75", "77", "79", "81", "83", "85"]
    }, {
      name: "??????. ????????????",
      number: ["87", "88", "89", "90/1", "90/2", "91", "92", "93", "94", "95", "96", "97", "97/2", "98", "99/1", "99/2", "99/3", "100", "101??", "103", "104", "105", "106", "107", "108", "109", "110", "111", " 5??", "6", "8", "10", "11", "13", "17", "26", "28", "30", "32", "34", "36", "38", "42", "44", "44??", "48??", " 33", "33??", "40", "41", "42", "43", "44/1", "44/2", "46", "47", "48", "50", "53", "55", "56", "57", "60", "61", "62/1", "62/2", "62/3", "63", "64", "65", "67", "68??/1", "68??/2", "68??/3", "68??/4", "68??/5", "68??/6", "69", "69??", "69??", "70", "72", "73", "74", "75", "76", "79", "80", "81", "82", "83", "84", "85"]
    }, {
      name: "??????. ????????????????????",
      number: ["22", "22/2", "25", "27", "29", "31", "32", "32??/1", "34??", "34/1", "34/2", "36/1", "36/2"]
    }, {
      name: "??????. ????????????????????",
      number: ["2??", "4", "4??", "4??", "4??", "4??", "7", "7??", "8", "8??", "9", "9??", "10", "15", "16", "16??", "16??", "16??", "17"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["3", "5", "7", "9"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "9/2", "10", "11", "12", "12??"]
    }, {
      name: "??????. ???????????? ??????????????????????????",
      number: ["1"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "6", "6??", "6/2", "8", "15"]
    }, {
      name: "??????. ???????? ???????????????? ??????????????????????????",
      number: ["3", " 1", "2", "3", "4", "5", "5/1", "5??", "6", "7", "7??", "8", "9", "10", "10??", "11", "13", "15", "17", "19", "19/1", "19??"]
    }, {
      name: "??????. ??????????????????",
      number: ["8", "8/1", "8/2", "8/4", " 1", "2", "3", "4/1", "4/2", "5", "6", "6??", "6??", "8"]
    }, {
      name: "??????. ????????????????????",
      number: ["8/9", "9", "10", "11", "12", "13"]
    }, {
      name: "??????. ????????????????",
      number: ["59/1", "59/2", "61/1", "63/1", "63/2", "65", "66", "67", "69", "73", "73??", "75/1", "75/2", "77", " 6", "8", "12", "24", "26/1", "26/2", "28/1", "28/2", "28??/1", "28??/2", "28??/3", "32", "34", "36", "37", "38", "39", "40??", "41", "42", "43", "44/1", "44/2", "45/1", "45/2", "46/1", "46/2", "49/1", "49/2", "49/3", "51/1", "51/2", "54", "55", "56", "57", "58"]
    }, {
      name: "??????. ????????????????????",
      number: ["17", "18", " 3", "4/8", "7", "9", "10", " 22", "23", "26/41", "28", "29", "29??", "29??", "30/33"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["4", "4??", "5", "6", "7", "8", "9/1", "9/2", "9/3", "10", "11", "12/1", "12/2", "13", "14", "15/1", "15/2", "16/1", "16/2", "16/5", "17"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["1", "2/44", "3", "4", "6", "8", "10", "12", "14", "16/13", " 7", "7??", "9", "11", "17", "19", "20", "22", "24", "26", "27", "28", "28??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", " 3", "5", "6", "7", " 4", "4??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "28??", "29", "31", "33", "33??"]
    }, {
      name: "??????. ?????????????????????? ????????????????",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "20/14", " 9??", "15/1", "15/2", "15/3", "15/4"]
    }, {
      name: "??????. ?????????? ??????????",
      number: ["1", "2", "3", "3??", "3??", "4", "5", "7", "7??", "7??", "7??", "8??", "9", "11", "11??", "11??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "3", "5", "6", "8", "10", "10??", "11", "11??", "12", "14", "17", "19", "23", " 18", "20", "25", "27/78"]
    }, {
      name: "??????. ?????????????????????? ????????????",
      number: ["3", "3??", "4", "5", "7", "8", "9", "9??", "10", "12", "14", "15", "16", "17", "18", "19", "21", "22", "22??", "23", "26", "27", "25", "27", "28", "29", "30", "31", "32", "33", "34", "36", "37", "39", "41", "42", "43", "44", "45", "45??", "46", "46??", "48", "50", "52", "54"]
    }, {
      name: "??????. ??????????????",
      number: ["29", "31", "32", "32/5", "32??", "33", "33??", "34", "34/2", "34??", "35", "35??", "36", "37", "37??", "38", "39", "40", "41", "45", "46", "46/6", "47", "48", "49", "50", "50/1", "51", "52", "53", "54??", "55", "55??", "56", "57", "58/2", "59", "59/1", "59/2", "61", "61??", "61??", "62", "63/2??", "64", "64??", "65??", "66", "66/6", "67", "69", "69??", "71", " 1", "3", "5", "6", "6/1", "6/2", "6/3", "7", "8", "9", "10", "11", "12", "13", "14", "15", "17", "19", "20", "21/5", "22", "23", "24", "24/7", "25/1", "25/2", "25/27", "26", "26??", "28", "28/1"]
    }, {
      name: "??????. ??????????????-????????????????",
      number: ["1", "1??", "2", " 3??", "5??", "5??", " 4", "4??", "4??", "6", "6??", "8", " 3", " 9??", "11", "11??", "13", "14", "15", "15??", "15??", "17", "21", "23??", " 3??", "7??", "7??", "9", " 5", "10", "12", "12??", "12??", "12??", "12??", "19", "23"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??", "3", "4/1", "4/2", "6", "7", "9", "11", "12", "13", "14", "15", "16/19", "21"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4", "5", "5/2", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "5??", "6", "7 8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19??", "20", "21", "22", "23", "23??", "23??", "24", "25", "26", "27", "27??", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "37??", "38", "39", "40", "41", "42", "44", "46", "48", "50"]
    }, {
      name: "??????. ?????????????????? ????????",
      number: ["1", "1/1", "1/2", "1/2??", "1/3", "1/3??", "1/3??", "1/3??", "1/3??", "1??", "3", "4/6", "5/6", "6/5", "7", "7??", "8", "9", "10/5", "11", "13", " 12", "13/1", "14??", "15", "15??", "16", "17/1", "19/10", "20", "20??", "21", "22/15", "23", "25/17"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["4", "5/7", "6", " 14"]
    }, {
      name: "??????. ?????????????????? ???????????????????? ????????????????",
      number: ["1", "1??/1", "1??/2", "3", "5", "6", "7", "8", "9", "11/1", "11/2", "12", "12??", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "24", "24/2", "25", "26", "28", "30", "32", "34", "36", "38", " 21??", "29", "33", "44", "44??", "50/2", "52", "52/1", "54"]
    }, {
      name: "??????. ?????????????????? ?????????????????? ??????????????????",
      number: ["3", "5", "7", "9", "11", "13", "15", "20", "48??", " 1"]
    }, {
      name: "??????. ??????????????????",
      number: ["1/19", "2/21-1", "2/21-2", "3/2", "3/3", "4", "5", "5??", "6/1", "6/2", "6??", "7/1", "7/2", "8/1", "8/2", "9", "10/1", "10/2", "11/1", "11/2", "11/3", "12", "13/1", "13/2", "13/3", "13??/1", "13??/2", "14", "15/1", "15/2", "15??/1", "15??/2", "16/1", "16/2", "16/3", "16/4", "17", "18/1", "18/2", "18/3", "18??", "19/1", "19/2", "20", "21", "22", "23/1", "23??", "24", "25", " 60/1", "60/2", "61", "61??", "62/1", "62/2", "63", "64", "65/1", "65/2", " 26/1", "26/2", "27/1", "27/2", "28/1", "28/2", "29", "30/2", "31", "32", "33", "34/13", "35", "36/14", "37", "37??", "38/1", "38/2", "40/1", "40/2", "41/1", "41/2", "42/1", "42??", "43/1", "43/2", "44", "45", "46/1", "46/2", "47", "48", "49", "50/11", "50/13", "51", "52", "53", "54/1", "54/2", "55", "56", "57/1", "57/2", "58", " 69", "71", "71??", "73", "75", "75??", "76/14", "77", "78", "79", "80", "81", "82", "83/17", "84", "85/14", "85??", "86", "86??", "87??", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99??", "99/15", "103"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1/9", "2/11", "3", "5", "6", "7", "8", "9", "9??", "10", "11", "11??", "12", "13", "14", "15/23", "16", "17/30", "18/21", "19", "20??", "20??", "20??", "21", "22", "23", "24", "25", "26", "27", "28/27", "29", "30/32", "31", "32", "34", "34??", "35", "36", "37/29", "37/23", "37/24", "38", "40", "41", "42", "43", "44", "45", "46", " 47", "48", "49", "50", "51", "52", "53/25", "54", "55/30", "56", "56??", "57", "58", "59", "60", "60??", "61", "62", "62??", "63", "64", "65", "66", "67", "68/67", "69", "71", "73", "75", "75??", "77", "79/23"]
    }, {
      name: "??????. ????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ???????????????????????????? ??????????????",
      number: ["3", "4", "5", "5??", "6", "7??", "9", "9??", "11"]
    }, {
      name: "??????. ???????????????????? ????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "2??", "5", "5??", "6", "7", "8", "9", "9??", "10", "11", "11??", "12", "13", "13/1", "14", "15", "15??", "16", "16??", "18", "18??", "19", "19??", "21", "22", "22/1", "23??", "24", "24??", "25", "25??", "26", "33", "33??", "33??/1", "41", "44", "44??", "44??", "45"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "7", "9", "9??", "11", "13", "15", "20"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "5", "7", "8", "8/2", "9", "9/2", "9/3", "10", "11", "11/25", "12", "12/23", "13"]
    }, {
      name: "??????. ?????????????????????????? (????????????????)",
      number: ["1??", "1??", "2/1", "2??", "2??", "3??", "3??", "4??", "4??", "5??", "5??", "6", "6??", "6??", "7??", "7??", "8??", "8??", "9??", "9??", "9??", "10??", "10??", "11??", "11??", "12??", "12??", "14??", "14??", "15"]
    }, {
      name: "??????. ??????????",
      number: ["8", "10", "24", "25", "27", "29", "31", "33", "35-37", "38"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["1", "1??", "1??", "2", "2/1??", "2??", "2??", "3", "4", "4??", "5", "5??", "6", "6??", "7", "8", "9", "10??", "10??", "10??", "11", "11??", "12", "12??", "13", "14", "15", "15??", "16", "17", "19"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["3", "4", "7", "9", "11", "15"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["3/25", "5", "7/9", "11/106", "13/135", "15", "21??", "23", "23/126", "29", " 18", "20", "20??", "22", "22??", " 2/4", "4", "6", "8", "10", "12", "14", "28", "30", " 27", " 16", "25", "27"]
    }, {
      name: "??????. ?????????? ??????????????????",
      number: ["2"]
    }, {
      name: "??????. ?????????????????????? ????????????????",
      number: ["5/9", "7", "10/1", "12/4", " 11"]
    }, {
      name: "??????. ????????????????????",
      number: ["12", "19", "28"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["11", "12", "13/8", "22", "24", "26", " 6", " 14", "15", "17??", "17??", "19", "21", "23", "25", "27", "28", "29", "31", "31/1", "31??/1", "31??/2", "33", "34", "34??", "35", "36/2", "36/3", "37", "38", "39", "39/1", "39??/1", "39??/2", "40", "40??", "41", "42/33", "43", "44/34", "45", "46", "46/2", "47", "48/1", "48??", "52", "56", "56??", "58", " 47??", "51", "52", "54??"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2", "3", "4/1", "4/2", "5", "6/1", "6/2", "8", "10"]
    }, {
      name: "??????. ????????????????????",
      number: ["44013", " 2/9", "4", " 8", " 16", "23", "25", "27", "32", "35/43", " 9", "34", " 6"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["13", "13??", "13??", "13??", " 3", "4", "5", "8", "8??", "10", "10??", "12", "13??", "14", "15", "17??", "19/21", "20"]
    }, {
      name: "??????. ???????????????????????? ????????",
      number: ["100", "102", "104", "106", "108", "110", "112", "114", "116", "118", "120", "120??", "120??", "122", "124", "126", "128", "130", "132", "132??", "134", "135??", "135??", "136", "137", "138", "139", "144", "148", "154", "156", "158", "160", "164", "166", "166??", "167", "167??", "167??", "167??", "168", "169", "169??", "169??", "169??", "169??", "169??", "170", " 172", "174", "176", "178", "180", "219", "219??", "219??", "219??", "221", "223", "225??", "227", "229", "231", "231??", "231??", "231??", "233", "235", "237", "239", "239??", " 52", "55", "56", "57", "58", "58??", "58??", "60", "62", "66", "66??", "66??", "68", "68??", "68??", "69", "70", "71", "72", "72??", "73", "74", "75", "76", "76??", "77", "78", "79", "80", "83??", "84", "89", "92", "94??", "94??", "94??", "94??", "94-96", "95", "95??", "95??", "105", "107", "109", "109??", "115", "135", " 42", "44", "44??", "46", "48", "50", "50??", " 26", "28", "28??", "32", "32??", "34", "34??", "34??", "34??", "34??", "34??", "34??", "34??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "2??", "3", "4", "5", "5??", "6", "6??", "7??", "8", "10??", "10??", " 7", "7??", "9"]
    }, {
      name: "??????. ?????????????????????????? ????????????????????",
      number: ["8", "14", "16", "16??", "18", "19/2", "19/4", "19/6", "19/7", "19/8", " 3", " 4", "6", "6??", "19/1"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "3/1", "3/2", "4", "11", "12", "13/1", "13/2", "14", "15/1", "15/2", "16", "25", "27", "29"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["4", "6", "8", "8??"]
    }, {
      name: "??????. ????????????????",
      number: ["10"]
    }, {
      name: "??????. ????????????????",
      number: ["7", "7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7??", "42", "44", "46", "46/1", "46/2", "46/3", "46/4", "46/5", "4/", "48??", "48??", "48??", "50", "52", "54", "54??", "54??", "54??", "54??", "54??", " 20", "22", "24", "26", "26/1", "26/2", "26/3", "26/4", "26/5", "26/6", "28", "28/1", "30", "32", "32??", "34", "36", " 1", "1/1", "1/2", "1/3", "1??", "1??", "1??", "1??", "1??", "1??", "2", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/58", "2??", "2??", "2??", "2??", "2??/1", "2??/2", "2??/3", "2??", "2??/1", "3", "3/1", "3/2", "3/3", "3??", "4", "4??", "4??", "4??", "4??", "5", "5/1", "6????????", "6??", "6??", "6??", "6??/1", "6??/2", "6??/3", "8", "10", "10??", "12", "14", "14/1", "14/2", "14/3", "14??", "16", "16/1", "16/2", "16/3", "18"]
    }, {
      name: "??????. ????????????????-????????????????",
      number: ["49", "49??", "49??", "49??", "49??", " 1", "1/3", "3"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "3??", "4", "4??", "4??", "5", "6??", "7", "7??", "8", "8??", "9", "9??", "10", "10??", "10??", "11", "11??", "11??", "11??", "14", "14??", "15", "15??", "16", "18??", "18??", "20", "27"]
    }, {
      name: "??????. ?????????????????????????? ??????????????????",
      number: ["18", "19", " 14", "16", " 20", "21", " 10", "10/10", "12", "12??", " 5", "7", "13", " 3", "3??", " 4??", "4??", " 6", "6??", "6??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "3/7", " 7/36", "12", "28??"]
    }, {
      name: "??????. ???????????????????? ??????????",
      number: ["25/1", "26/1", "26/2", "30/22", "31", " 2??", "3", "5", "8", "9", "12", "14", "17"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "2??", "3", "4", "4??", "4??", "4??", "5", "6", "6??", "6??", "6??", "7", "7??", "8", "8??", "9", "9??", "9??", "10", "10??", "11", "11??", "12", "12??", "13", "13??", "13??", "14", "14??", "14??", "15", "15??", "15??", "15??", "16", "16??", "16??", "16??", "17", "17??", "17??", "17??", "17??", "18", "19", "19??", "19??", "19??", " 20", "20??", "20??", "20??", "21", "21??", "22", "22??", "22??", "22??", "23", "25", "25??", "28", "28??", "30", "30??", "30??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", " 5/21", "8", "8??"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "5??", " 2", "4", "4??", "6", "10", "12", "14", "16", " 7"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "4", "4??", "4??", "6"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "26", "27", "28", "29", "31", "32", "33", "35", "37", "38", "39", "41"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "10", "13", "14", "16", "17", "22"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12/1", "12/2", "14", "16", "18"]
    }, {
      name: "??????. ????????????????????????",
      number: ["18"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["2", "19", "19??", "27"]
    }, {
      name: "??????. ????????????????",
      number: ["34", " 4", "5", "6", "6??", "7", "8", "10", "10??", "16", "16/2", "18", "18/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["4??", "6??", " 2", "4??", "6"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "16"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["71", "72", "72??", "74", "76", "77", "79", "80", "82", "83", "84", "86", "88", "90", " 5", "7", "7??", "9", "11", "12", "12??", "13", "14", "14??", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24??", "25", "26", "27", "28", "29", "30", "31", "31??", "32", "32??", "33", "34", "34??", "35", "36", "37", "38/1", "38/2", "39", "40", "40??", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "51??", "52", "53", "54", "55", "56", "56??", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", " 1", "1??", "2", "3", "4", "4??", "6", "6??", "8", "10", "10??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "4", "10", "10??", " 9??", "11", "11??", " 7", "7??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["5", "7", "8", "8??", "8??", "9", "10/15", "11", "13", "13??", "15", " 1", "2", "3", "4", "4??", "6"]
    }, {
      name: "??????. ?????????????????????? (????????????????)",
      number: ["1", "6", "8", "8??", "10", "10??", "12", "12??", "12??", "14??", "14??", "16", "16??", "17", "19", "19??", "20", "21", "23", "24", "25", "26??", "28", "68"]
    }, {
      name: "??????. ???????????????? ????????????????????",
      number: ["07 ??????????????", " 1", "5??", " 9", "9??", " 3", "3??", "3??", "3??", "5", "5??"]
    }, {
      name: "??????. ????????????????????",
      number: ["4", "6", "7", "8", "9", "9??", "11", "13"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "2/4"]
    }, {
      name: "??????. ????????????????",
      number: ["15??", " 1", "2", "3", "4", "4??", "5/1", "6", "6/1", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "28/1", "28/2", "28??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "5", "5??", "25/29", "31", "31??", "31??", " 6", "12", "14", "16", "33", "35", "37", "39", "41"]
    }, {
      name: "??????. ??????????????",
      number: ["57", "57/1", "57??", "57??", "57??", "58", "58/1", "59", "59??", "61", "61??", "72", "72/1", "74", "74/76", "74/76??", "76", "78", " 18/10", "20", "21", "22", "23", "23??", "24", "25", "25/11", "36", "27", "28", "29/7", "30/10", "31", "31/12", "33", "33/11", "34", "35/10", "36", "36/1", "37/9", "38", "38/13", "39", "39/6", "40", "41/1", "41/5", "42", "43", "43/10", "44", "45", "45/9", "46", "46/1", "47", "48", "49/7", "50", "51", "52", "53", "54", "54??", "54??/2", "55", "55/12", "55/55", "58", "60", "60/1", "62", "66", "66/1", "68", "68/1", "70", "70/1", " 2", "3", "4", "5/11", "6", "7/12", "8", "9", "9/1", "10", "11", "12", "12??", "13", "13/2", "14", "15", "15/1", "15??"]
    }, {
      name: "??????. ????????????????????",
      number: ["2/24", "3/42", " 25/27", "29", "49", " 7/13", "12/42", "14", "14??", "16", "16??", "16??"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "4", "5", " 9", "12"]
    }, {
      name: "??????. ??????????????",
      number: ["19/8", "21", "21??", "24", "24??", "25", "27??", "31", "33", "35", "37", "38/1", "39", "41/1", "41/2", "43", "45", "47", " 72??", " 49", "49??", "53", "55", "57", "59", "61??", "65", "71"]
    }, {
      name: "??????. ?????????????? (????????????????)",
      number: ["1??", "2", "2??", "2??", "4", "6", "8", "10", "12", "14", "16", "18", "19", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "40??", "42", "44"]
    }, {
      name: "??????. ?????????????? (????????????????)",
      number: ["1", "1??", "3", "3??", "5", "5??", "7", "9"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3??", "5", "8", "10", "10/9", "10/11", "11/17", "12/12", "14/11", "16/9", "17/13", "18", "19/10", "19/10??-1", "20", "20??", "21", "21??", "22", "23", "23??", "24", "25", "26", "28", " 1"]
    }, {
      name: "??????. ??????????????",
      number: ["11", "13", "13??", "15", "15??", "15??", "15/1", "15/2", "15/4", "15/5", "15/8", "17??", "19", "19??", "19??/1", "19??/2", "19??", " 2", "2??", "6", "6??", "6??", "6??", "6??/1", " 8", "8??", "8??/2", "8??/3", "8??/4", "8??", "8??", "8??", "8??", "8??/1", "8??", "8/1", "8/3", "8/4", "8/5", "8/6", "10", "10??", "10??", "10??", "10/2", "12", "12/1", "12/2", "12??", "12??/1", "12??/2", "12??", "14", "14??", "15??", "16", "16/1", "16/2", "20", "20/1", "20??", "20??", "20??", " 3", "3??", "3/4", "3/5", "5", "5??", "5??", "7", "7??", "7??", "7??", "7/1", "7/2", "7/3", "7/5", "7/7", "7/9", "7/11", "7/12", "9/1"]
    }, {
      name: "??????. ??????????????????????",
      number: ["6", "8"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["5", "7", "9"]
    }, {
      name: "??????. ????????????",
      number: ["1", "1??", "3", "3/5", "5", "5/1", "7", "9", "9??", "11", "15", "17", " 4", "4/2", "5??", "6", "8", "8??", "10", "10??", "12", "14"]
    }, {
      name: "??????. ???????????????? ????????",
      number: ["4/39??", "6", "9/37", "10/19", "11", "13", "14", "14??", "19"]
    }, {
      name: "??????. ????????????????????",
      number: ["36", "36??", "38/16", "40", "42", "42??", "44", "44??", "46/2", " 28", "30", "32", "34", "34??", " 50", "50??", "52", "52??", "52??", "54", "54??", " 63", "88/3", "90/2", " 1", "2", "2??", "3", "6", "6??", "7??", "8/2", "10", "10/1", " 14", " 5", "7??", "9", "9??", "11", "16", "16??", "18", "18??", "20", "22", "22/14", "24", "26/9"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["9??", "14??", "14??", " 12", "13", "13??", "13??", "14", "15", "15??", "16", "17", "17??", "17??", "18", " 7??", "9??", " 14??", " 2", "3", "3??", "5", "8", "8??", "9", "10", "11", "11??", "11??", "11??", " 9??"]
    }, {
      name: "??????. ????????-??????????????????",
      number: ["2/103", "3", "5", "7", "9"]
    }, {
      name: "??????. ??????????????",
      number: ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", " 1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["01 ??????", " 1??", "1??", "1??", "1??", "2??", " 2", "4", "6", "8", "10", "10??", "12"]
    }, {
      name: "??????. ?????????????? ??????????????????",
      number: ["10", "12", "14", "16", "18", "20", "23"]
    }, {
      name: "??????. ???????????????? ????????????????????",
      number: ["1??", "2", "3", "3??", "4", "5", "6", "8", "9", "12", "14", "14??", "14??", "16", "16/1", "17"]
    }, {
      name: "??????. ???????????????????? ??????????",
      number: ["1", "2", "3", "4", "4??", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "23??", "24", "25", "26", "27", "28", "28??", "29", "29??", "29??", "30", "31", "32", "33", "33??", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46/48", "47", "48", "49", "50", "50??", "51", "52", "53", "54", "54??", " 55", "56", "56??", "56??", "57", "58", "59", "59??", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "73??", "74", "75", "76", "77", "78", "79", "79??", "80", "80/1", "80/2", "80??", "81", "82", "82/1", "84", "84??", "84??", "84??", "84??/1", "83??", "84??", "84??", "84??", "84??", "82??", "82??", "83", "85/87", "86", "88", "89", "90", "90??", "92", "93", "94", "96", "98", "100", "100??", "102", "104", "106", "108", "108??", "110", "112", "114", " 116", "118", "120", "122", "124", "126", "128", "130", "132", "134", "134??", "136", "138", "140", "142"]
    }, {
      name: "??????. ????????????",
      number: ["5", "7/1", "7/2", "9/1", "9/2", "11/1", "11/2", "13", "15", "17??", "17/1", "19"]
    }, {
      name: "??????. ????????????????????????",
      number: ["13 ????????????????", " 2", "4", "16", "18", "19", "23", "26", "27/44", "28", "35", "38", "38/44", "40", "44", "50/49", "52", "53/55", "57/59", "62", "64", "70", " 25/49", " 45"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "6", "13", "13??", "14", "16", "17", "18"]
    }, {
      name: "??????. ??????????????",
      number: ["18", "18??", "20", "22", "22??", "24", "26", "29", "30", "32", " 23", "25", "25/1", "25/2", "27", " 28", "31", "31??", "33", "36", " 34", " 17", "19", "21", "21/1", "21/2", "29/1", " 4", "4??", "6", "8", "10", "14", "18??", "20??", " 3", "5", "7"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "2/1", "3", "3??", "4", "6", "8", "15", "16", "17"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["36", " 38", "45/9", "47", "49", " 19", "21/23", "31/11", " 9", "11/13", "12", "14", " 24", "26", "26??", "28", "30", "35", "35/11", "35/21", " 34", "34??", "34??", "35??", "39", "43/2", " 51"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1", "3", "4", "5", "5/2", "6", "7", "8", "15", " 10/17", "12??", " 17", "19", " 20", "22/9", "25", "26", "37", " 21", "23", "23??", " 24", "27", " 28", "4", " 39/8"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1/1", "1/2", "2/2", "3/1", "3/2", "4??", "6??", "6/1", "7", "9", "10/1", "10/2", "11/1", "11/2", "12", "13/1", "13/2", "13/3", "14/1", "14/2", "14/3", "14/4", "15", "20/1", "20/2", "20/3", "20/4"]
    }, {
      name: "??????. ????????????????",
      number: ["1/10", "3", "9", "13/2", "16", "17", "18", "21", " 20", "23", "24"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "3/1", "3/2", "3/3", "3/5", "3/6", "14/1", "14/1??", "14/3", "14/4", "14/5", "14/6", "14/7", " 1", "1/1", "1??", "1??/1", "1??/2", "1??", "1??", "2", "3/4", "6", "8", "8/1", "10", "10/1", "10/1??", "12", "12/1", "12??", "14", "14/2", "14??"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1/1", "3", "5", "21", "21/1"]
    }, {
      name: "??????. ????????????????",
      number: ["15 ????????????", " 6", "8", "10", " 3", "12", "14", "14??", " 9"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "2/1", "2/2", "2??", "2??", "2??", "2??/1", "2??/2", "2??/3", "4", "4??", "4??", "6", "6/1", "6??", "6??/1", "8", "8??", "8??", "8??", "10", "10/1", "10??", "10??", "10??", "10??", "10??/1", "10??/2", " 12", "12??", "12??", "14"]
    }, {
      name: "??????. ?????????????????? (????????????????)",
      number: ["1", "3"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1??", "2/1", "2/2", "3", "5", "5/1", "5/2", "5??", "5??", "5??", "5??", "7", "7/1", "7/2", "9", "9/1", "11", "11/1", "11/2", "11/3", "13", "13/1", "13/2", "13/3", " 19", "19??", "19??", "19??", "19??/1", "19??", "19??", "19??", "19??", "19??", "21", "21??", "23", "23??", "25", "25??", "27", "27??", "27??", "27??", "27??", "27??", "27??", "27??", "29", "29??", "29??/27", "30", "30??", "30??/1", "30??/2", "30??/3", "31", "32", "32??", "33", "34", "35", "36", "37", "37/1", " 15", "17", "17/1", "17/2", "17??", "17??", "17??", "17??", "17??/1", "17??/2", "17??", "17??", "17??"]
    }, {
      name: "??????. ??????????????????-????????????????????",
      number: ["2", "4", "4/6", "5", "5??", "7", "7??", "9", "9??"]
    }, {
      name: "??????. ??????????????????",
      number: ["11", "11??", "11??", "11??", "11??", "11??", "11??", "11/1", "11/2", " 1", "1/1", "2", "5"]
    }, {
      name: "??????. ????????????????",
      number: ["14", "15", "15??", "16", "17", "17??", "17??", "17??", "18", "18??", "19", "19??", "20", "20??", "21", "22", "22??", "24", "24??", "24??", "24??", "26", "28"]
    }, {
      name: "??????. ??????????????????",
      number: ["6", "10", "12", "14", "16", " 3??", "6", "9", "10", "11", "12", "13", "14", "15", "16", "17", " 21"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "4", "4/6", "15", "17"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "4", "8", "10", "12", "13", "14", "16", "18", "21"]
    }, {
      name: "??????. ????????????????",
      number: ["3"]
    }, {
      name: "??????. ?????????????????????? ??????????",
      number: ["1", "1??", "2", "2??", "3", "3??", "4", "4??", "5", "6", "6??", "7", "8", "9", "9??", "10", "11", "11??", "12", "12??", "13", "14", "15", "16", "16??", "17", "18", "19", "19??", "20", "22", "23??", "24", "26", "28", "30"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1/1", "1/2", "3/1", "3/2", "5", "6", "7", "8/1", "8/2", "9", "10", "11/1", "12/1", "12/2", "13", "14", "15", "16/1", "16/2", "17", "18/1", "18/2", "20", "21??/1", "21??/2", "23/1", "23/2", "25/2"]
    }, {
      name: "??????. ????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1??", "2", "2??", "2??", "3", "3??", "3??", "4", "4/7", "4??", "6", "6??", "7", "8", "9"]
    }, {
      name: "??????. ???????????????????? (????????????????)",
      number: ["6", "6??", " 9", " 4", "8", "10", "10??"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "4", "6", " 3", "4", "6", "8", "9", "10", "11", "11??", "11??", "12??", "12??", "13", "14", "15", "15??", "16", "16/2", "17", "18", "18/1", "18/1??", "18/1??", "19", "19??", "19??", "20", "21", "22", "22??", "22??", "22??", "23", "23??", "23??", "24", "24/29", "25", "25??", "25??", "27", " 15", "19", " 8", " 2", " 5", "6", "7", "8", "9??", "9??/1", "9??/2", "9??/3", "9??/4", "10", "11", "12", "14", "16??", "17"]
    }, {
      name: "??????. ???????????????? ????",
      number: ["2", "2??", "3", "7", "8", "13", "13??", "23", "23??", "39", "48"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "11/1", "11/2", "11/3", "12", "13", "14", "15", "16", "16??", "16??", "17", "18", "19", "21/3", "22/5", "23", "24", "25", "26", "28"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["10", "11", "12", "13", "14", "15", "17", " 2", "4", "6", "8"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4", "6/1", "6/2", "6/3", "7", "8", "11", "11??", "13", "14", "15", "17/1", "17/2", "18/1", "18/2", "18/3", "19", "20/2", "20/3", "21", "23", "25"]
    }, {
      name: "??????. ?????????? ??????????",
      number: ["1", "2", "3", "5", " 1??", "1??", "3??", "3??", "5??", "5??", "5??", "10"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "1??", "2", "3", "5", "6", "7", "8", "9", "9??", "9??", "9??", "10", "11", "11??", "12", "13", "14", "15", "15??", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "28", "29", "30", "31", "32", "32??", "33", "34", "35", "36", "37", "38", "39", "41", "45", "47", "48", "49", "51", "52", "53", "54", "56", "57", "58", "59", "60", "60??", "61", "62", "63", "64", "65", "65??", " 66", "67", "68", "69", "70", "71", "72", "72??", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "84", "86", "88", "88??", "92", "94", "94??", "96", "98", "100", "102", " 40", "42"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "1??", "1??", "1??", "2", "3", "3??", "4", "5", "7", "7??", "8", "9"]
    }, {
      name: "??????. ???????????? ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["1??", "2", "3", "4", "5", "6", "7/1", "7/2", "8", "8??", "9", "9??", "13", "19", "23", "23/25", "27", "29/1", "29/2", "29/3", "29/4", "29??", "31??", "33", "34", "34??", "35", "36", "38", "38??", " 44/50", "49", "50"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "1??", "1??", "2", "3", "4", "5", "6", "6??", "6??", "7", "7??", "8", "9", "10", "11", "12", "12??", "13", "15"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/3", "1-3/5", "2-4/7", "5", "7", "8", "8??", "8??", "8??", "9", "9??", "9??", "9??", "9??", "10", "10??", "10??", "10??", "11", "11??", "12", "12??", "12??", "12??", "14", "14??", "16", " 28/9", "28??", "30", "32", "32??", "32??", "34", "34??", "36", "38", "38??", "40", "42/4", " 45", "45/2", " 8/2??", "17", "17??", "19", "19??", "20", "20??", "21", "21??", "22", "22??", "23", "23??", "24", "24??", "24??", "25", "25??", "25??", "27", "27/6", "31", "31??", "31??", "31??", "33", "33??", "35", "37", "39", "39??", "41", "41??", "41??", "43", "43??", "43??", " 28"]
    }, {
      name: "??????. ????????-????????????????",
      number: ["1", "1/2", "3", "3??", "5", "7", "9/1", "9/2", "11/1", "11/2", "11/3", "13", "15/1", "15/2", "17", "19", "21/1", "23/1", "23/2", "24/35", "25/1", "25/2", "25/3", "25/4", "25/5", "27/1", "27/2", "29", "31", "33"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["2", "2/1", "2/3", "2/4", "2??", "2??/1", "2??", "3", "3/1", "3??", "3??", "3??", "4", "4/1", "5", "5/1", "5??", "6", "6??", "8"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "2??", "2??", "3", "3??", "4", "4/3", "4??", "5", "7", "8", "8??", "8??", "8??", "8??", "9", "14", "16", "16??", "18"]
    }, {
      name: "??????. ??'??????",
      number: ["3", "7"]
    }, {
      name: "??????. ??'????????????????????",
      number: ["3", "3??", "4", "5", "6/1", "6/2", "7", "8/1", "8/2", "8/3", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20/1", "20/2", "21", "21??", "22/1", "22/2", "23", "23??", "25/1", "25/2", "27/1", "27/2", "27/3", "27/4", "28", "30", "32", "32??", "34", "36/1", "36/2", "38", "52", "54", "56/1", "56/2", "58", "60", "61", "62/1", "62/2", "63/1", "63/2", " 31", "33", "35/21", "35/22", "37", "39??/1", "39??/2", "39??/3", "39??/1", "39??/2", "40", "41", "42", "43", "44", "45", "47/1", "47/2", "48", "49", "50", "51/1", "51/2", "57", " 64/1", "64/2", "66", "68/1", "68/2"]
    }, {
      name: "??????. ????????????????",
      number: ["8", " 1", "1??", "1??", "2", "15", "17", "19", "23", "25", "27", "29", "31", "33", "34??", "34??", "34??", "34??", "34??", "34??", "34??", "35", "41", "43", "43??", "44", "46", "47", "48", "49", "50", "51", "52", "53", "54??", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "69", "71"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "3??", "5", "6", "6??", "7", "7??", "8", "9", "10", "10/14", "10/14??", "11", "12/16", "15??", "18", "19"]
    }, {
      name: "??????. ??????????????????",
      number: ["4", "5"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "9", "14", "16", "18", "20"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["44"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "3", "3??", "5", "5??", "5??", "7", "9", "11", "13", "15", "15??", "17", "19", "21", "23", "25", "27", "29??", "29??", "29??", "31", "33", "35", "35??", "37", "39", " 2", "2??", "2??", "2??", "4", "4??", "6", "8", "10", "12", "14", "14/3", "14??", "16", "16??", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "36??", "38", "40", "42", "44", "46", "46??", "48", "50", "50??", "52", "54", " 56", "58", "60", "62", "64", "64??", "66", "66??", "68", "70", "72", "74", "76", "76??", "78", "80", "82", "84", "86", "86??", "88", "92", "94", "96", "96??", "98", "100", "102", "104", "106", "106??", "106??", "108", "110", "110??", "112", "112??", "114", "114??", "116", "118"]
    }, {
      name: "??????. ??????????????????",
      number: ["14", "14??", "16", "18", "18??", "20", " 2/18", "8/13", " 34", "36", "38", " 40", "42/10", "44", "46", "46??", "46??", " 10??", "22/9", "22/9??", "22/9??", "24", " 26", "28", "30", "32", " 1/10", "3", "3??", "5", "5??", "5??", "5??", "7", " 9", "9??", "9??", "11", "11??", "13??"]
    }, {
      name: "??????. ???????????????? ??????????",
      number: ["8??", "14", " 3/1", "3/2", "5", "7", "9", "11/13", "15/17", "19", "21", "21??", "23", "25", "27", "33/30", "37", "41", "43", "53", "57", "59"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["23??", "25", "28", "34", "36", " 3/1", "3/2", "4??", "4??", "5", "6", "7", "8", "9??", "10", "11", "11??", "12", "13", "14", "15", "16", "17", "18", "19", "19/5", "20", "22", " 4"]
    }, {
      name: "??????. ????????????????????????",
      number: ["4", "5/1", "5/2", "6", "7/1", "7/2"]
    }, {
      name: "??????. ????????????????",
      number: ["9??", "17??", "35", "37", "39", "41", "43", "44", "45", "47", "51", "54", "55", "57", "59", "59??", "63", "65", "67", "69", "71", " 3??", "3??", "11??", "13", "13??", "13??", "13??", "23", "25", "25??", "25??", "27", "27??", "27??", "31??", "49", "51", "53", "73", " 1", "3", "5", "7", "9", "11", "17", "17??", "19", "21", "21??", "29", "31", "33", "98", " 14", "16", "18", "20", "20??", "22", " 2", "2??", "2??", "4", "4??", "4??", "6", "8", "10", "12"]
    }, {
      name: "??????. ?????????????? ??????",
      number: ["3", "4", "5"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "24??", "25", "26", "27"]
    }, {
      name: "??????. ??????????????????????",
      number: ["42", "46", "47", "48", "49", "53", "55", "57", "59", "61", "63", " 16", "19", "20", "26/24", "27", "30/13", "30??/13", "33/1", "33/2", "35/1", "35/2", "37/38", "39"]
    }, {
      name: "??????. ????????????????????",
      number: ["29", "29??", "29??", "31", "31/1", "33", "33/1??", "33??", "35", "35/1", "37??", "37??/1", "38", "38/1", "38/2", "38/3", "38/5", "38/6", "40", "40/3", "40??", " 9", "9/2", "11??", "13", "13??", "13??/1", "13??", "15", "15/5", "17", "17/1", "17??", "19/1", "19??", "19??/1", " 12", "12/1", "12??", "14", "14??", "16", "16??", "18", "18/1", "18??", "20", "22", "22/1", "24/4", "26", "30/1", "30??", "32", "34", "34??", "36/2", " 21", "23", "23/2", "25", "25??", "27", "27/29", " 4", "4/1", "4/2", "4??", "6", "6/2", "8", "10/3", " 44", "44??", "44??", "46", " 56", " 40??", "42", "42??", "42??", "42??", "42??", "42??", " 1", "1/1", "1/3", "1/4", "1/5", "1/6", "3", "5", "5??", "5??/1", "5??/2", "7", "7??", "7??", "7??", " 11??", "11??", "11??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["4 ????????.1", "4 ????????.2", "4 ????????.3", "4 ????????.4", "4 ????????.5", "4 ????????.6", "4 ??????", "7", "4 ????????.8", "4 ????????.9", "4 ????????.10", "4 ????????.11", "4 ????????.12", "4 ????????.13", "4 ????????.14", "4 ????????.15", "4 ????????.16", "4 ????????.17", "4??", "4??", "4??"]
    }, {
      name: "??????. ??????????????",
      number: ["3", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "19??", "20", "21", "22", "23", "23??", "23??", "24", "25", "25??", "26", "28", "29", "30/5", "32", "31", "33", "34/19", "37", "39", "40", "41", "41??", "42", "43", "44", "45", "45??", "46/10", "47", "49", "50", "51", "51??", "52", "53", "53??", "53??", "54", "54??", "55", "56", "59", "58", "60", "61", "62", "63", "64", "64??", "66", "66??", "70/56"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/1", "2", "2/1", "3/1", "4", "4/1", "5/1", "6", "6/1", "7/1", "8", "8/1", "9/1", "10", "10/1", "11/1", "12", "12/1", "13/1", "14", "14/1", "15/1", "16", "16/1", "18", "20", "22", "24", "26", "28"]
    }, {
      name: "??????. ????????????????",
      number: ["2??", "4", "4??", "6", "8", "8??", "8??", "8??/1", "8??", "10", "12", "14??", "14??", "14??", "14??/1", "14??/2", "16", "16/1", "16/2", "18", "20", "29", "29??"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "4", "5", "6??", "7??", "7??", "8/5??", "9", "11", "13", "15", "16", "17", "17??", "18", "19", "19??", "20/24", "21/13", "22", "24/27", "25", "27", "29", "29??", " 39", " 28", "30", "30??", "31/16", "32", "34", "35", "35??", "37", "41"]
    }, {
      name: "??????. ????????????????????",
      number: ["7", "7??", "8", "10", "12", " 3", "5"]
    }, {
      name: "??????. ????????????",
      number: ["1", "1??", "2", "3", "3??", "4", "5", "5??"]
    }, {
      name: "??????. ?????????????? ??????????????",
      number: ["1", "3", "5", "7/18", "10/8"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/14", "5", " 2", "3", "4", "7", "8", "10", "11", " 13", "14/16", "18", "22"]
    }, {
      name: "??????. ??????????",
      number: ["2/3", "3", "5", "4/1", "4/2", "6", "7", "8/1", "8??", "9/1", "9/2", "9/3", "9??", "10", "12", "13", "14", "15", "16/17", "18", "19", "20", "22/1", "22/2", "22/3", "22??", "23", "27/1", "27/2", "29??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "2??", "3", "3??", "4", "11", "11??", "12", "13", "14", "14??", "16", "17", "19", "19??", "22/1", "24", "28", "32", "33", "34", "39", "41", "41??", "43", "45", "45??", "49"]
    }, {
      name: "??????. ????????????",
      number: ["18", "36/1", "36/2", "38/1", "38/2", "40", "42", "44", "46/1", "46/2", "46/3", "48", "50", "52/1", "52/2", "54/1", "54/2", "56", "58", "60/1", "60/2", "62", "62??", " 14", "16", "23", "25", "27", "29", "31", "33", "35", "37", "37/1", "39", "41", "43", "43/1", "45", "47", "49", "51", "53", "55", "55??/1", "55??/2", "57", "59", "61", "61/1", "61/2", "61/3", "63", "65", "67", "69/1", "69/2", "71", "73", "75/1", "75/2", "77", "79", "81", "83/1", "83/2", "83/3", "85??", " 1", "6/1", "7", "8", "9", "11", "12", "13", "15", "17", "17/2", "19", "19/2"]
    }, {
      name: "??????. ??????????????",
      number: ["7/11", "10", "10??", " 12", "12??", "12??", "14", "16", "17", "17??", "18", "19", "20/2", "23", "29", " 22/1", "22/2", "23/1", "24", "25", "26", "27/1", "27/2", "28/1", "28/2", "28/3", "30", "32/1", "32/2", "34", "34/1"]
    }, {
      name: "??????. ???????????????????? ??????????????",
      number: ["23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", " 3", "5", "7", "9", "9/1", "11", "13", "15", "19", "19/1"]
    }, {
      name: "??????. ??????????????????-??????????????????",
      number: ["3", "3??", "3/2", "5", "5/1", "5/2", "5??", "9", "10", "11", "13", "15/1", "15/2", "20", "20??", "22", "22??"]
    }, {
      name: "??????. ????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????",
      number: ["6", "8", "9??", "11", "11??", " 13/15"]
    }, {
      name: "??????. ??????????",
      number: ["3"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71"]
    }, {
      name: "??????. ?????????????????? (????????????)",
      number: ["1", "1/2", "2", "2??", "2??", "3", "3??", "4", "5", "6", "7", "8", "8??", "9", "10", "11", "12", "12??", "12??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1/13", "2", "3", "4", "4??", "5/14"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "6", " 4", " 3??", "4/16", "10??"]
    }, {
      name: "??????. ?????????????????? ????????????????",
      number: ["1", "1??", "3", "3??", "4", "4??", "4??", "5", "6", "7", "7??", "7??", "7??/1", "8", "8/1", "9", "11", "13", "15", "15??", "17", "19", "19/4", "19/5", "21", "23", "23/1", "25"]
    }, {
      name: "??????. ???????????? ??????????????????",
      number: ["20", "20??", "20??"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["1", "2", "3", "4", "5", "5/1", "6", "6??", "7", "8", "9", "9/2", "13", "15", "17", "19", "19??", "21", "23", "25", "27", "27/1", "29", "31"]
    }, {
      name: "??????. ????????????",
      number: ["1/12", "2/10", "3", "4", "5", "5/1", "6", "7", "7/2", "8", "8/2", "10/9", "11/9", "12/1", "13", "13/2", "14", "14/2", "15", "15/2", "16", "16/1", "16/2", "16/3", "16??", "16??/1", "16??/2", "17", "19/1", "19/2", "20", "21", "22", "22/1", "22/2", "23", "24", "24/1", "24/2", "24/7", "25", "25/2", "27", "27/2", "29", "29/1", "29/2", "31/78", "32", "32??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "5", " 7", "8", "9", "11"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "4", "5", "7", "8", "9", "10", "11", "12", "16"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "4", "5/1", "5/2", "6", "7/1", "7/2", "8/1", "8/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["59", " 11", "13", "13??", "19", "21", " 31", "31??", "33", "35", "37", "37??", "39/14", "42/15", "44", "48", "50", "52", "52/16", "154/15", "54/16", "56", "58", "58??", "60", " 45", "45/1", "45??", "45??", "47", "47/1", "57", " 64", "68", "70", "70/1", "72/3", "72/4", "74", "74??", "74??", "76/4", "82", "82??", "84", " 28", "30", "32", "34", " 1"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3", "3/1", "3/3", "3????????1", "3????????2", "3????????3", "3????????4", " 3??", "3??/1", " 4"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "2??", "2/2", "4", "4??", "4??", "6", "6??", "8", "8??", "8??", "8??", "8??", "10", "12", "14", "16", "18", "20", "22"]
    }, {
      name: "??????. ??????????????????????",
      number: ["21??", "24/1", "24/2", "28??", "29/1", "29/2", "33/1", "35", "36", "37", "38", "38/2", "39/1", "39/2", "40", "43/1", "43/2", "44", "46", " 8", "9", "9??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1??", "1??", "3??", "5", "6", "12", "13"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["21", "21??", " 6", "6??", "8", "8??", "8??", "10", "10??", "10??", "10??", "10??", "10??", " 3", "3??", "3??", "3??", "5", "7", "7??", "7??", "9", "9??", "11", "13", "15/14", "17"]
    }, {
      name: "??????. ??????????????????",
      number: ["11", "11??", "30/32", " 15/18", "17", "19", "19??", "21", "23", "25", "27", "29/1", "29/2", "31", "38", "40", "42", "44", "46", " 3/56", "5", "7/43", "18/59", "20/54", "24", "26/41", " 2/50", "8", "10", " 12", "14", "16"]
    }, {
      name: "??????. ?????????????????????? ????????",
      number: ["1", "2", "4", "15??"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["1", "1??", "1??", "3", "3??", "3??", "5", "5??", "7", "7??", "9??"]
    }, {
      name: "??????. ?????????????????? ????????",
      number: ["1", "1/12", "4", "6", "8", "10", "11", "12", "13", "15", "15??", "16", "16??", "17", "18", "18??", "19", " 25", " 20", "20??", "20??", "21", "22", "22??", "23", "24", "25??", "26", "26??", "27", "27??", "29", "29??", "30", "30??", "31", "31??", "32", "33", "33??", "34", "36", "38", "38??", "38??", "39/41", "40/10", "42/13", "44", "46", "47", " 20", "21", "22", "22??", "23", "24", "25", "25??", "26", "27", "28", "29", "30", "31", "32", "33", "34", "36", "37", "38", "38??", "40", "40/10", "42/13", "44", " 3", "5", "9", "9??"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "19", "19", "20", "21", "22", "23", "24", "26", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "64??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2??", "2??", "3", "4", "5", "6", "7", "8", "9", "10/1", "10/2", "11/1", "11/2", "13", "14/1", "14/2", "17/1", "17/2", "18/1", "18/2", "19", "20", "21", "22", "24??", "24??"]
    }, {
      name: "??????. ???????????????????????? ??????????",
      number: ["14", "14??", "16", "16??", "16??", "29", "29??", "29??", "29/1", " 1", "3", "4", "6", "6??", "8", "8/10", "10", "10/5", "11", "12", "12??", "15", "17", "19", "21", "23/4", "25", "25??", "25??", "25??", "25??", "25??", "27", "27??", " 20", "20??", "22", "22/1", "24", "31", "31??", "33", "35", "37", "37??", "39", "41"]
    }, {
      name: "??????. ????????????",
      number: ["3", "3??", " 14 ????????????"]
    }, {
      name: "??????. ???????????? (????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "9", "10", "11", "12", "13", "14", "14/1", "15", "16", "17", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "37", "38", "39", "40", "41", "43", "45", "47"]
    }, {
      name: "??????. ???????????? (????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "14??", "15", "16", "17", "18", "18??", "19", "20", "21", "22", "23", "23??", "24", "25", "25??", "26", "26??", "27", "27??", "28", "29", "30", "31", "32", "33", "34", "36", "38", "40", "40??", "42", "44", "46", "46??", "46??", "48", "50", "51", "52", "54", "56", "56/1", "56/2", "56/3", "56??", " 57", "58", "60", "60??", "61", "62", "64", "64??", "66", "68", "68/1", "70", "70/1", "70/2", "70/3", "70/4", "70/5", "70/6", "70/7", "70/8", "70/9", "70/10", "70/11", "70/12", "70/13", "70/14", "70/110", "8071", "76", "77", ""]
    }, {
      name: "??????. ???????????? (????????????????)",
      number: ["1", "2", "2??", "3", "4", "5", "6", "7", "8", "9", "10", "10??", "11", "12", "12??", "13", "13??", "14", "14??", "15", "16", "17", "18", "19", "21", "21??", "22", "23", "24", "27", "27??"]
    }, {
      name: "??????. ?????????????????????? ????????????",
      number: ["6??", "6/8", "6/8-1", "7", "8", "9", "10", "12", "20", "20??"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7/1", "7/2", "8/12", "9", "10", "11/1", "11??"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["59", "100", "102??", "102??", "104", "104??", "106", "110", "111", "111??", "112??", "112??", "115??", "115??", "117", "118", "119", "120", "121", "123", "125", "127", "129", "129??", "129??", "129??", "131??", "131??", "133??", "139", "139??", "143", "145", " 70/16", "70??", "70??", "72", "74", "74??", "74??", "76", "78", "78??", "78??", "82", "84/86", "87", "89??", "89??", "91", "93", "95", "96", "97", "99", "101", "103", "106/11", "107", " 88", "92", "92/94", "109", "112", "113??", " 18", "20", "22", "22??", "24", "26", "28", "30", "30??", "30??", "32", "34", "36", "36??", "38", "38??", "40", "40/85", " 2", "3", "4", "4??", "5", "6", "7", "9", "12", "12??", "13", "14", "25", "25??", "27", "27??", "28??", "29", "31", "33/35", "37", "39", "39??", "41", "41??", "43", "43??", "45", "51", " 42", "44", "44??", "44??", "44??", "44??", "46", "48", "52", "53/80", "54/56", "55", "58", "60", "60??", "60??", "60??", "64", "64??", "65", "65??", "66", "66??", "67", "67??", "67??", "68/21", "69", "73", "75", "77", "79", "81", "83", "83??", "85", " 57??", "57??", "59??", "61/17", " 61/17??", "63/28", " 1"]
    }, {
      name: "??????. ???????????????????? ????????????????????",
      number: ["17/11", "19", "21", "23", "25", "27", "29", "31", "33", " 2", "4", "5", " 3", " 8", "9/27??", "11", "14", "16", "16??", "18", "18/1", "18??", "20", "20/1", "22", "24", "26", "28", "30", "32", "34", "36", "36??", "36??", "38", "40", "42", " 43", "47"]
    }, {
      name: "??????. ??????????????",
      number: ["11??", "24", "24/56", "26/1", "26/2", "28/1", "28/2", "30/2", "31/1", "32", "34/1", "34/2", "35", "36/1", "36/2", "38/1", "40", "42/46", " 18", "20", "20??", "22", " 1??", "1??", " 6", "8", "10", "12/62", "14/51", " 1", "2", "2??", "2??", "2??", "2??", "2??", "2??", "2??", "3", "5", " 4", "4??", "9", "11", "13", "15", "17", "19", "21", "23", "23??", "25", "25??", "27", "27??", "29", "29??", "31/53"]
    }, {
      name: "??????. ??????????????????",
      number: ["5", "5??", " 9", "9??", "11", "12", "12/1", "18", "18??", "23", "23/1", "27"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??", "3", "3??", "4/1"]
    }, {
      name: "??????. ????????????????-????-????????",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????? ????????",
      number: ["3", "5", "5??", "5??", "9??", "12", "14/55", "23", "25/1", "25/2", "25/3", "26", "26??", "27", "28", "29", "30", "31", "33", "35", "35??", "37", "41", "41/2", "43/1", "43/2", "43/3", "43/4", "45"]
    }, {
      name: "??????. ??????????????-????????????????????",
      number: ["4", "8", "10", " 22", "24", "100", "100/57", " 25", "37", "39", "57"]
    }, {
      name: "??????. ??????????????????????",
      number: ["10", "10??", "12/28", "14/9", "14??", "16", "18/16", " 3", "5", "7", "9", "11/32", "13/37", "15", "17", "19", "21??", "23", "25", "25??", "27", "31/41", "33", "35", "35??", "37", "37??", "39", " 20", "53/31", "55", "59", "61", "63", "65", " 45", "47", "47??", "49", "49??"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["1", "3", "9", "17", "18/1", "18/2"]
    }, {
      name: "??????. ????????????",
      number: ["1", "1/1", "3", "3??????????1", "3??????????2", "3/1", "6", "6??", "6??", "6/1", "8"]
    }, {
      name: "??????. ????????????????????????",
      number: ["19", "21", " 13", "23", "23??", "25", "27", "29/18", "31/7", "33", "33??", "35", "35??", " 10", "35??", " 34", "37", " 24", "24??", "28", "30/20", "30/20??", " 26", "26??", "26??", " 24??", "28??", "28??", "30/20??"]
    }, {
      name: "??????. ?????????????????????? ??????????",
      number: ["1", "2", "4", "4??", "6", "8", "10", "12"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["2/25", "5/6"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "4", "5", "6", "8", "10", "12", "14", "16??", "16??"]
    }, {
      name: "??????. ????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????-????????????????????????",
      number: ["10", "10??", "23"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["8", "15"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "3", "4", "6", "15", "15??", "18", "20", "23", "24", "25", "26", "27", "28", "28??", "30", "30??", "32", "34", "34??"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["11/27", "12/22", "13", "14", "15/29", "16/27", "17", "18", "19", "22", "24", " 1/1", "5", "5??", "5??/1", "5??/2", "7/13", "9"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["2??/1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13/22", "14", "16"]
    }, {
      name: "??????. ??????????????????",
      number: ["1??", "2", "6"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17/25", "19/32", "21", "23", "25"]
    }, {
      name: "??????. ??????????????",
      number: ["10", "12", "16", "16??", " 13", "15", " 8??", " 9", "17", "21", " 8"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3", "4", "6", "7", "8", "9", "10/9", "11", "12", "13", "14", "16", "18", "19"]
    }, {
      name: "??????. ??????????????????????",
      number: ["13/2", "14/1", "15/1", "16/3", "17", "18/5", "202", " 1/2", "3/1", "4", "5/2", "6", "7/1", "8/1", "8??", "8??/2", "9/2", "10", "10??", "10??/1", "10??/2", "12", "12??"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["43892", " 6", "11", "13", "15", "16", "17", "18", "19", "21", "23", "23??", " 1", "3", "3??", "5", "7"]
    }, {
      name: "??????. ?????????? ????????????",
      number: ["2??", " 1", "1??", "3", "3??", "3??", "5", "5??", "5??", " 13", "15", "17", "17??", "17??", "19", "19??", "19??", "19??", " 9/61", "11", "11??", "11??", " 2/1", "2??", "2??/2", "2??/3", "2??/4", "4", "6", "8", "8??", " 14", "16", "16??", "16??", "18", "20", "20/1", "20??"]
    }, {
      name: "??????. ????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????",
      number: ["11", " 1", "2/3", "3/14", "4", "6", "8", "10", "12", "12??", "14", " 16/21", " 1", "9", "9??", "16", "18"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "2??", "3", "4", "5", "6", "8", "10", "10??"]
    }, {
      name: "??????. ????????????????",
      number: ["7", "8", "8??", "9", "9??", "10", "14", "18", "20", "22", "24"]
    }, {
      name: "??????. ???????????? ??????????????????",
      number: ["28", "30", "30??", "30??", "34", "36"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "4", "5", "6", "6??", "7", "7??", "8", "8????????1", "9", "10????????1", "10????????2", "10????????3", "10??", "17"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "1??", "3", " 1", "14??", "16??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "3", "3??", "4", "5", "6", "7/34", "8/36", "9/29", "10/31", "11", "12", "13", "14", "15/1", "15/2", "16/1", "16/2", "17", "18/1", "18/2", "19??", "19/46", "21/53", "22", "23", "24/1", "24/2", "24/3", "25", "27", "29", "31", "33", "35/1", "35/2", "37/76", "45/38"]
    }, {
      name: "??????. ??????????????????",
      number: ["12", "12??", "12??", " 16", "18", "18??", "18??", "20", "20??", "22", "22??", "22??", "22??", "22??", "24", "24??", "26", "26??", "28", "28??", " 34", "34??", "36", "38", "40", " 1", "1??", "1??", "1??", " 17", "17??", "19", "21", "21??", "23", "25??", " 2/19", "2??", "2??", "10", "14??", "14??", "14/19", " 25", "27", "29", "31", " 5", "5??", "5??", "7", "7??", "7??", "13"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["5", "5??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "2??", "2??", "4", "4??", "6", "8"]
    }, {
      name: "??????. ????????????????",
      number: ["102", "104", "106", "108", "110", "111/1", "111/2", "112", "114", "116", "118??/1", "118??/2", "120/1", "120/2", "122", "124/1", "124/2", "126", " 5", " 9", "9??", "30/1", "32", "32/1", "32/2", "32/34", " 13/71", " 25", "25??", "27", "27??", "28/2", "29", "31", "33", "33??", "33??", "33??", "36", "37", "37??", "38", "38??", "38??", "38??", "39", "40", "42/44", "43", "46??", "48", "48??", "50", "52", "54", "56", "58", "58??", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "84/1", "86", "88", "92", "94", "96", "98", "100", "100??", "100??", "100??", "100??/1", "100??/2", " 49", "49??", "49??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????????????? ?????????? ????????????????????????????????",
      number: ["1", "4", "4??", "6", "6??", "8", "10", "12", "14", "14/1", "14/2", "16", "18"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3/1", "3/2", "4", "5", "7", "8", "9", "10", "11", "12/1", "14", "14/2", "18", "18/3"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "6", "8", "10", "12", "14"]
    }, {
      name: "??????. ??????'?? ????????????????????????",
      number: ["2", "4", "4??", "11/13", "15/17", "17", " 23", "25", "37", "39", "39??", " 41", "41??"]
    }, {
      name: "??????. ??????'?? ????????????????????",
      number: ["3", "5??", "12", "12??", "12??", "14", "14??", "14??", "26/28", " 1", "1??", "1/2", "31", "31??", "31??", "33", "33??", "35", "37", " 13", "13/1", "22"]
    }, {
      name: "??????. ??????'?? ????????????????",
      number: ["3", "5", "6", "7", "8", "13", "20", "22", "27", "50", "54"]
    }, {
      name: "??????. ??????'?? ??????????????????",
      number: ["1", "2", "3", "5", "6", "7", "9", "9??"]
    }, {
      name: "??????. ??????'?? ????????????????",
      number: ["1", "1??", "1??", "2", "2??", "3", "4", "5", "5??", "6", "6??", "7", "8", "9", "10", "10??", "11", "12", "12??"]
    }, {
      name: "??????. ??????'?? ??????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["11", "11/1", "13??", "17/2", "19", "19/1", "21/9", " 3/2", "5/1", "7/2", "9", " 4", "6", "8", "8/1", "8????????1", "8????????2", "10"]
    }, {
      name: "??????. ?????????? ??????????",
      number: ["1", "2", "3", "4", "4??", "5", "7", "9", "10", "11", "12", "13", "13/1", "15", "16"]
    }, {
      name: "??????. ??????????????",
      number: ["??/??"]
    }, {
      name: "??????. ?????????????? ??????????????????",
      number: ["58/2??", "58/2??", "58/2??", "58/2??", "60", "68", "68", "70", "72", "74", "76", " 103", "103??", " 82", "84", "91", "93", " 43", "45", "45??", "47", "47??", "48", "49", "49/51", "50", "51/50", "52??", "52??", "52??", "53", "55", "55??", "55??", "57", "59/65", "73", "75", " 1", "1/5", "3", "5", "5??", "5??", "5??", "7", "9", "11", "11??", "13", " 18", "20", "21", "22", "24", "25", "26", "26??", "26??", "26??", "27", "28??", "30??", "30??", "31", "33??", "33??", "35", "37/41", " 59", "59??", " 77", "79", "81", "89", " 10", "10??", "12", "14", "14??", " 32/38", "40", "42", "44", "46", " 15"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4", "5/1", "5/2", "6", "7", "8", "9", "10", "11", "12/1", "12/2", "13", "16", "17/1", "17/2", "17/3", "18/1", "18/2", "20", "22", "24/1", "24/2", "26", "28", "30/22"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["1", "1??", "1??", "4", "4??", " 5", "22", "50", " 7", "9", "11", "15", "17", "19"]
    }, {
      name: "??????. ?????????????????? ????????????????",
      number: ["1", "1??", "1??", "2", "3", "4/2", "5", "5??", "7", "7??", " 6", "9??", "11", " 12", "14", "15/10", "17??", "17??", "19", "21/16"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["8", "10", "12", "14", "19", "19/56", "23", "25", "27", "29", "31", "33/5", "35", "37", "39", "41", "43", "45", "47", "49", " 49/1", "49/2", "49??", "54", " 3/5", "3/5??", " 2/10", "2/10??", "4", "4/1"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "4", "5", "6", "7", "8", "12", "13"]
    }, {
      name: "??????. ????????'????????????",
      number: ["28"]
    }, {
      name: "??????. ??????????????????",
      number: ["38"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "7", "9", " 11", "13", "15", "17", "19", " 10", "10/31", " 2", " 4", "6"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "3??", "4", "4??", "5", "5/1", "6", "8", "17", "19"]
    }, {
      name: "??????. ?????????????? ????????",
      number: ["2", "2??", "4", "4??", "6", "6??", "6??", "6??"]
    }, {
      name: "??????. ??????????????",
      number: ["4", "7", "9", "9??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["10", "12/1", "12/2", "13", "13/1", " 3", "4", "6/18", " 18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "6", "7", "8", "9", "10", "11", "20"]
    }, {
      name: "??????. ???????? ????????????",
      number: ["6", "8"]
    }, {
      name: "??????. ''??????????'' ??????????????",
      number: ["1", "3"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "1??", "2", "2??", "3", "4", "4??", "5", "5??", "6", "7", "8", "9", "10", "11", "11??", "12", "13", "14", "15", "15??", "16", "17", "17??", "18", "19", "20", "21", "22", "22??", "23", "24", "25", "26", "26??", "27", "27??", "28", "28??", "29", "30", "31", "32", "33", "34", "35", "48", "52"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "3/1", "4", "4/2", "5", "5??", "6", "6/1", "11"]
    }, {
      name: "??????. ??????????'??????",
      number: ["2", "3", "4", "4??", "4??", "5", "7", "8", "9", "9??", "10", "11", "12", "13", "13??", "14", "15", "16", "28", "28??", "29", "30", "30??", "30??", "31", "31??", "32", "33", "35", "37", "38", "39", "40", "40??", "41", "43", "47", "48", "49", "51", "53", "55", "57", "59", "59??", "65"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["2", "4", "8", "10", "11", "12", "13", "14", "16", "17??", "17??", "18", "21", "23", "23??/1", "23??/2", "25", "27", "29"]
    }, {
      name: "??????. ??????????'????????????",
      number: ["1", " 28/30", "30", "32", "34", "34??", "36", "38", "41", "41/2", " 17", "17??", "17??", "19", "19??", "21", " 23", "23??", "27", "28", "29", "31", "33", "33??", "35", "35??", " 3", "3??", "3??", "4/2", "5", "7", "7??", "11", "11??", "11??", "13", "15??", " 37", "39", " 22", "24", " 14", "16??", "18??", "20", "20??", "20??", "20??", "20??", " 6??", "10", "16", "16??"]
    }, {
      name: "??????. ????????????",
      number: ["25/27", "55", "55??", "57", "74"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "2/6-1", "3/1", "3/2", "4/1", "4/2", "4??/2", "4??/4", "5", "5??/1", "5??/2", "5??/1", "5??/2", "6", "7??/1", "7??/2", "8", "8??", "9", "10", "10??", "11", "14", "15", "16/1", "16/2", "16??", "17"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "5", "9", " 13", "15", "16", "18"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "4", "6", "8??", "10", "12", "12??", "16", "18", "18??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2", "4", "5", "5??", "5??/1", "5??/2", "20", "22"]
    }, {
      name: "??????. ??????????????????",
      number: ["8??", "10", "19", "21"]
    }, {
      name: "??????. ???????????????? C????'??",
      number: ["11", "13", "13??", "15", "15??", "17", "17??", " 2/1", "2??", " 1??", " 6", "6??", "8", " 12??", " 10", "12", "14", "14??", "14??", "16", "18", " 2??", "2??"]
    }, {
      name: "??????. ???????????????? ??????'??",
      number: ["1", "3", "3/5", "3??", "5", "7", "7??", "9", "9/1", "9??"]
    }, {
      name: "??????. ??????????????",
      number: ["8", "10", "10??", "12", "12??", "14", "16", "16??", "18", "18??", "20", "20??", "22", "22??", "24", "24??", "26", "28", "30", "32", "34", "38", "38??", "38??", "38??", "42", "42??", "44", "48", "50", "50??"]
    }, {
      name: "??????. ?????????????? (????????????)",
      number: ["1", "2", "11", "12", "14", "18", "21"]
    }, {
      name: "??????. ?????????????? (????????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["4", "5", "6", "7", " 68"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1/2", "1/2??", "3??", "5", "11-15", "17", "19", "23", "25", " 2", "2??", "4", "6", "8", "10", "10/4", "10??", "10??", "12", "14", "15", "16/16", "18", "20/21"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "2??", "3", "4", "5", "6", "7", "8/1", "8/2", "9/1", "9/2", "10", "10??", "10??", "10??", "10??", "10??", "10??/1", "10??/2", "11", "11??", "11??", "14", "15/1", "15/2", "16", "16??", "16??/1", "17", "18", "19/1", "19/2", "19/3", "20", "21/1", "21/2", "22", "23", "24", "25/1", "25/2", "26/1", "26/2", "26??/1", "26??/2", "27", "28", "28??/1", "28??", " 29/60", "30", "32", "32??", "34", "34??", "36", "38/1", "38/2", "40/1", "40/2", "42", "42/1", "42/2", "44", "44??/1", "44??/2"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "6??", "6??", "6??", "7/3", "8??", "8??", "9", "9??", "10", "10??", "10??", "11", "12", "12??", "12??", "13", "16", "16??", "18/20", "21/23", "22", "24/15", "25", "25/17", "27/16", "30", "30??", "31??", "36", "36??", "37", "39", " 5"]
    }, {
      name: "??????. ????????????????",
      number: ["4", "4??", "5", "5??", "6", "7", "7??", "8", "9", "9??", "10", "11", "11??", "13", "16", "16??", "18", "18??", "20", "22", "24", "24??", "26", "28", "28??", "29", "29??", "30", "32"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["1", "1/1", "1/2", "1??", "2??", "2??/2", "3", "3/1", "3/2", "3/3", "3??", "3??", "3??", "3??", "4", "4/1", "4??", "5", "5??", "5??", "5??", "7??", "8", "8/2", "8??", "8??/1", "9", "9??", "12", "14??", " 11", "13", "14", "14??", "16", "16??", "20", "20/1", "20/2", "20??", "22", "22??", "22??/1", "24", "24??"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "12", "14", "16", "18"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["28", "28??", "29", "30", "31", "33", "33??", "35", " 17??", "19", "21", "21??", "22/1", "22/2", "22/3", "23", "24/1", "24/2", "27/29", " 3??", "6", "6??", "7", "7??", "8", "8??", "9", "10/11", "11/13", "12", "12/18", "13/20", "14/16", "15"]
    }, {
      name: "??????. ??????????????????",
      number: ["6", " 5", "5??", "5??", "14", "16/6", " 6??", " 3??", "13", " 8", "19", "21"]
    }, {
      name: "??????. ?????????????????? (????????????)",
      number: ["1", "2", "2??", "2??", "3", "4", "4??", "5", "6", "6??", "7", "8", "9", "10", "10??", "11", "12", "13", "14", "15", "16", "18"]
    }, {
      name: "??????. ?????????????????????? ??????????????????",
      number: ["18", "18??", "18??/1", "20", " 4", "6", "6??", "8", "8??", "10", "10??", "12", "14", "14??", "14??", "16", "16??", " 22/10", "24", "24??", "24??", "26", "28", "28??", "29", "30", "32", "34", "34/12", " 23"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["3"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2/1", "4", "4/1", "4??", "5??", "6", "7", "8", "9", "10/30", "11/34", "38/9"]
    }, {
      name: "??????. ?????????? ????????????",
      number: ["36", "38", "40", "44", "46", "55", "61", "63", "71", "73", "83"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1/6", "3", "3/2", "4", "4/2", "5", "5/2", "5??", "5??", "5??", "6", "7", "7/2", "7/4", "7??", "8", "10"]
    }, {
      name: "??????. ????????????????????-??????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"]
    }, {
      name: "??????. ????????????????????????????????????",
      number: ["1??", " 12/2", "16"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["7??", "7??", "7??", "9??", "9??", "9??", "12", "13", "14/16", "17", "18", "21", "22", "23", "24", "26"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["01 ??????", " 7/9", "8/12", "14", " 5", "9", "10", "10??", "10??", "25", "26", "27", "28??"]
    }, {
      name: "??????. ????????????????????????????????",
      number: ["2/20", "4", "4??", "4??", "4??", "6", "6??", "6??", "8", "8??", "8??", "10??", "13", "13??", "13??", " 3", "17/2", "25", "27", "29", "31", "35", "37", "39", "41", "42", "43", "45", "47"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["4", "5", "7", "12", "24"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1", "1??", "1??", "1??", "2", " 26", "26??", "52", "52??"]
    }, {
      name: "??????. ?????????????????? ??????????????",
      number: ["12", "12??", " 3", "6", "6??", " 7/2", "8", "9", "10??", " 14/1", "14/2", "16", "18", " 17/1", "17/2", "20", "22"]
    }, {
      name: "??????. ?????????????????????? ????????????",
      number: ["3", "5", "7", "9", "11", "13", "15", "17", "19", " 3", "5", "4??", "8", "8??"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["8", "9", "10", "11", "13", "16", "17", "18", "19", "20", "21", "23", "25", "27"]
    }, {
      name: "??????. ????????????????",
      number: ["19", "19/54", "19/68", "19/8", "75??", "75??", " 12", "12/157", "12/175", "12/192", "14", "16", " 9", "11", "13", " 4", "4??", "6", "8", "10", " 1", "1??", "2", "2??", "3", "5"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3??", "4", "5", "6", "7", "9/1", "9/2", "10", "11", "12", "13", "13/2", "14/1", "14/2", "14??", "15/1", "15/2", "16", "17", "18", "19", "20", "21", "22/1", "22/2", "23", "24", "25", "26", "27", "27/1", "27/2", "28", "29/1", "29/2", "30", "31", "33/1", "33/2", "34", "35", "36", "37", "38", "39", "40", "41/1", "41/2", "42", "43", "45", "46??", "47", "48", "49", "51", " 53/1", "53/2", "55/1", "55/2"]
    }, {
      name: "??????. ?????????????????? ??????????????????",
      number: ["5", "7", "9", "11", " 1", "2", "3", "3??", " 6", "6??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "2??", "3", "3??", "4", "5", "6", "7", "8", "8??", "9", "10"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "4", "6", " 12 ??????????"]
    }, {
      name: "??????. ????????????????????",
      number: ["4", "4-6", "7/6", " 12", "16", "20", "24", "24??", " 28"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3??", "5/35", "7/34", "9/23", " 4", "6", "8", "14/21", "33/8"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2/8", "6/7", " 4/13", "7/9", "9", "10", "11", "13", "15", "17"]
    }, {
      name: "??????. ??????????????????????",
      number: ["11", " 4", "5", "5/7??", "6", "7", "9", "12/14", "12??"]
    }, {
      name: "??????. ?????????? ????????????",
      number: ["35/37", "35/37??", " 2", "4", "5", "6", "6??", "7", "7??", "8", "9", "10", "12", "14", " 22/1", "22/11", "23/9", "24", "25", "26", "26??", "27", "28", "28??"]
    }, {
      name: "??????. ???????????????? (????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "7??", "8", "9", "11", "12", "13", "13/1", "14", "16", "17", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "40??"]
    }, {
      name: "??????. ???????????????? (????????????????)",
      number: ["1", "2", "3", "4", "4??", "5", "5??", "6", "6??", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16??", "17", "17??", "18", "18??", "19", "20", "20??", "21"]
    }, {
      name: "??????. ??????????????????????",
      number: ["23", "25", "27", "29", "31", "33", "35", "37", "41", " 4/6", "13"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "2/1", "2??", "2??/1", "2??/2", "2??/3", "2/3", "3", "3/2", "3/3", "3/4", "3/5", " 25??", "33/1", "33/2", "33/3", "35", "38", " 4", "6", "8/1", "8/2", "9", "10/1", "10/2", "12/1", "12/2", "14", "16/1", "16/2", "18/1", "18/2", "20"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["3", "3??", "4", "5", "5??"]
    }, {
      name: "??????. ???????????????????????????? ????????????",
      number: ["4", "9", "13", "15", "17", "19"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "2/6", "3", "4", "5", "6", "6??", "7/1", "7/2", "8", "9/1", "9/2", "10", "10/2", "10/3", "11/1", "11/2", "11/3", "12", "14", "16", "18", "20", "20/2", "20/3", "22", "22/2", "24", "24/2"]
    }, {
      name: "??????. ??????????????",
      number: ["28", "30", "32", "42", " 36", "38", "40", "44", "46/48"]
    }, {
      name: "??????. ????????????????????",
      number: ["3/11", "5", "7", "7??", "8", "8/6", "9", "9/2", "9??", "10", "11??", "11/1", "13/1", "14/2", "15/2", "19", "19??", "21", "21/2", "23"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4??", "6"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/5", "1/5??", "2", "2??", "3", "3??", "4", "4??", "4??", "4??", "5", "5??", "5??", "6", "6??", "6??", "7", "8", "9", "9??", "9??", "10", "11", "11??", "11??", "12", "12??", "13", "14", "14/2", "15", "16", "17", "18??", "18??", "18??", "18??", "19", "19??", "19??", "20", "20??", "21", "22", " 22??", "23", "24", "24??", "25", "26", "27", "27/1", "28/1", "28??", "29", "30", "31", "32", "32??", "32??", "33", "35", "35??", "35??", "35/5", "37", "37??", "37??", "41", "41??", "43", "43??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["2"]
    }, {
      name: "??????. ??????????????",
      number: ["9??", "11", "11??", "13", "13??", "13??", "14", "14??", "15", "16", "16??", "17/2", "17??", "17??", "18/19", "51??", " 1", "1/21", "1/22", "2/20", "2??", "3", "3??", "4", "5", "5??", "6", "7", "7??", "8", "8??", "8??", "9", "10", "10/1", "10??", "12", "12??", "12??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1/12", "2/10", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19/13", "20", "22", "24/11", "26/10", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48/11"]
    }, {
      name: "??????. ?????????????????????? ??????????????",
      number: ["1", "2", "3", "4", "4??", "5", "6", "7", "8", "9", "10", "10??", "11", "12", "13", "14", "15", "16", "16??", "17", "19"]
    }, {
      name: "??????. ??????????????????????",
      number: ["16", " 33", "42", "44", " 2", "2/21", "3", "3??", "4", "4??", "6", "6??", "7", "8", "9", "9??", "10", "10??", "11", "12", "13", "14", "15", "15??", "18", "20", "20/50", "22", " 19", "21", "23/25", "29", "30", "36", "36??", "38", "40/52"]
    }, {
      name: "??????. ?????????????????? ????????",
      number: ["4", "6", "6??", "8??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3/1", "3/2", "4", "5", "7", "9", "10", "11", "12", "12/2", "13"]
    }, {
      name: "??????. ??????????????????",
      number: ["3/2", "7", "20", "21", "23/25", "27/4", "32", "32??", "32??", " 36/5", "38", " 1??", "1??", "2", "2??", "2??", "2??", "2??", "2??", "2??", "6", "18??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1/32", "2", "3??/15", "3/8", "4", "5/8", "7", "7??", "8", "9", "10/9", "11/31", "12/12", "13", "14", "15", "16/34", "17", "17??", "17??", "18", "18??", "18??", "19??", "19/1", "20", "21", "21??", " 27/15", "29??", "29/14", "33", "33??", "33/18", "34/12", "35", "37/24", "43/33", "44", "44/2", "45/36", "45??", "45??", "47", "48", "49??", "49/8", "50", "51", "52", "52??", "54", "54??", "56", "57??", "57/1", "59", "60", "61", "62??", "63", "64", "66", "67", "67??", "68", "69/9", "70", "73", "75", "77/10"]
    }, {
      name: "??????. ????????????",
      number: ["4", "6", "9", "44", "57"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["23??", " 21", "21??", "23", "25??", "25??", "27", "27??", " 29", "29??", "31/1", " 37", "37??", "37??", "41", "41??", "49", " 37??", "37??", "39", "39??", "41??", "43", "43??", "43??", "45", "45??", "51", "53", "55", "57", " 37??", "37??", "39??", " 35", "35??", "35??", "35??", "35??", "35??", " 39??", "39??", "41??", "61", " 6", "7", "7??", "7??", "8", "9", "11", " 1??", "2", "3", "3??", "3??", "3??", "4", "5??", " 13/14", "15", "15??", "17", "17??", "17??"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "2??", "3", "4", "5", "5??", "6", "6??", "7", "8", "8??", "9", "10", "10??", "11", "11??", "12", "12??", "13", "14", "14??", "15", "16", "17", "19", "19??", "21", "21??", "23", "28"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1??", "2", "2??", "3", "3??", "4", "4??", "5", "6", "7", "7??", "8", "9", "9??", "9??/1", "9??", "10", "12", "14", "14??", "16", "16/1", "18", "18??", "18??", "18??", "18??", "18??/1", " 11", "13", "15", "18??", "18??/1", "18/1", "20", "22", "22??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["17", "19", "21", " 1", "2??", "2??", "3", "5", "7", "9", " 6", "8", "11", "12", "13", "13??", "14", "15", "16"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["3", "3??", "4", "4??", "5", "5??", " 2", "3", "7", "7/13", "9", "9??", "10", "11", "11??", "13", "15", "17", "17??", "19", "19??", "21", "21??", "23", "25/10", " 11??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["7??", "17"]
    }, {
      name: "??????. ?????????????????? ??????????????",
      number: ["4", "5", "5/7", "6", "8", "8??", "12", "14", "14??", "14??"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "4", "6", "6/1"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "8", "11/1", "11/2", "12", "13", "13??", "14", "15", "16", "17/1", "17/2", "17??/1", "17??/2", "18", "19/18", "20", "21/17", "22", "23", "24/19", "25", "26", "27/1", "27/2", "27??", "28", "28??", "29??", "29/1", "29/2", "29/3", "30", "30??", "31/1", "31/2", "32", "33/1", "33/2", "34", "35", "35/16", "36", "37/17", "38/18", "39", "40/19", "41", "41??", " 42", "43/1", "43/2", "44", "45", "46", "47", "48", "48??", "49", "50", "50??", "51/1", "51/2", "52", "53/1", "53/2", "54", "55/1", "55/2", "57", "57??", " 58", "60", "60??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1", "2", "3", "6", "6??", "10/15", "12/28", "14", "20/2??", "22", "24", "26/1", "26/2", "26??", "28/2", "30", "32", "32??", "32??", "32??", "34", "34??", "34??", " 4", " 36", "38", "40", "42/1", "42/2", "42/3", "42/4", "44/1", "44/2", "44", "46??", "48", "50", "52", "54/93", "60", "62", "64", "66"]
    }, {
      name: "??????. ?????????????????? ??????????????",
      number: ["16", "18", "18/1", "18??", "18??/1", "29", "29/1", "29/2", "29/3", "29??", "29??/1", "29??", "29??????????", "29??", "33/35", "33/35??", " 19", "21????????1", "21????????2", "21????????2/1", "21????????2/2", "21????????3", "21????????4", "21????????5", "21????????6", "21????????7", "21????????8", "21????????9", "21????????10", "21????????11", "21????????12??", " 1", "1??", "1??", "1??", "1??", "1??", "1??/1", "3", "3/1", "3/2", "3/3", "3??", "3??", "3??", "3??/1", "5", "5/1", "7", "7??", "7??/1", "7??/2", "7??", "7??", "7??", "9", "9/1??", "9/2", "9/3", "11", "11??", "11??", "11??", "11??/1", "11??/2", "13", "13/1", "13/2", "13??", "13??/1", "13??", "15", "15/1", "15/2", "15??", "15??", "15??", "15??", " 4", "4??", "4??", "6", "6??", "6??/1", "6??/2", "6??/3", "12", "14", "14/1", "14/2", "14/3", "14/4", "14/5", "14/6", "14/7", "14/8", "14/9", "14/10", "14/11", "14/12", "14/13", "14/14", "14/15", "14??", "14??/1", "14??/2", " 2", "2??", "2??/1", "2??", "2??/1", "2??", "2??", " 2/4", "2??", "2??/1", "2??", "2??", "2??/1", "2??/2", "2??", "2??", "2??/1", "2??", "2??", "2??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "4", "5", "6", "7", "8", "12", " 61", "61??", "64", "66", "68", "68??", "68??", " 39", "40??", "40??", "40??", "40??", "40??", "43", "43/1", "43??", "43??", "49", "58"]
    }, {
      name: "??????. ????????",
      number: ["1??", "2/36", "3/1", "3/2", "4/1", "4/2", "6", "5/1", "5/2", "7", "9/1", "9/2", "10", "14", "15", "15/1", "15/2", "17", "17/1", "17/2", "18", "19"]
    }, {
      name: "??????. ????????????????????",
      number: ["2/8", "3", "4/1", "4/2", "5", "6", "7", "9", "9??", "9??/1", "9??/2", "10", "11", "11??", "12", "13", "14", "15", "15??", "16", "17", "17/2", "18", "19", "20", "21??", "21/6", "22", "22/1", "24", "26", "28"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "1??", "2/1", "2/2", "3", "4", "4??/1", "4??/2", "4??/3", "5", "6/1", "6/2", "6??", "7", "8", "8??/1", "8??/2", "9/1", "9/2", "10", "11", "11/1", "11/2", "12", "13", "14", "15", "16", "17/1", "17/1??", "17/2", "17/3", "18", "18/1", "18/2", "19", "20/1", "20/2", "21", "21/1", "21/2", "22/1", "22/2", "23", "24", "25", "26/1", "26/2", "27/1", "27/2", "27/3", "27/4", "29/1", " 29/2", "30/1", "30/2", "30/3", "30/4", "31", "32/1", "32??/1", "33", "34", "35", "37", "39/1", "39/2", "39/3", "40", "41", "42", "43", "44/1", "44/2", "44/3", "45", "47", "49/1", "49/2", "49/3", "49/4", "51??", "53", "55", "57/1", "57/2", "59/1", "59/2"]
    }, {
      name: "??????. ??????????????????",
      number: ["57", "59/1", "59/2", "61", "63", "65", "67", " 3", "3??", "4", "5", "6", "7", "8", "9", "10", "11", "12/1", "12/2", "13", "14/2", "15", "16/1", "17", "18/1", "18/2", "19", "20/1", "20/2", "21", "22/9", "23", "24/10", "25/1", "25/2", "26", "33", "35", "35??/1", "35??/2", "37/2", "39", "41", "43", "49", "51/1", "53", "53??", "55"]
    }, {
      name: "??????. ???????????????? (????????????????)",
      number: ["1", "2", "2??", "2??", "3", "4", "5", "8", "8??", "9", "9??", "11", "12", "13", "14", "15", "16", "18", "20", "22", "22??", "22??", "24"]
    }, {
      name: "??????. ???????????????? ????????",
      number: ["1", "3", "3??", "5", "5??", " 6", "8", "8??", "10", " 7", "9", "9??", "11", "11/61", " 16", "16/18", "31", "33", "39", "41", "43", "47/107", " 22", "49", "51", "55", "55??", "57", "59", " 25", "27/35", " 13", "14", "15", "15??", "17??", "17??", "19", "23", " 7", " 61", "63", "64", "65"]
    }, {
      name: "??????. ??????????????????????",
      number: ["11", "13"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["3", "4", "5", "6??", "6/1", "6/2", "7", "8", "8??", "9", "11", "12", "12??", "12??", "13", "13/6??", "14", "17", "17??", "19??", "19??"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "4", "4/8", "5", "6", "7"]
    }, {
      name: "??????. ?????????????????????????? ??????????????",
      number: ["39", " 1", "2", "3", "3/1", "4", "5", "5/1", "6", "7", "7/1", "7/2", "8", "9", "9/1", "9/2", "10", "11", "11/1", "11/2", "12", "13", "14", "15", "15/1", "15/2", "16", "17", "17/1", "17/2", "17??", "18", "19", "19/1", "19/2", "19??", "20", "21", "21/2", "22", "23", "23/1", "23/2", "23??", "24", "25", "26", "27", "27/1", "27/2", "28", "29", "29/1", "30", "31", "32", "33", "34", "35", "35/1", "35/2", "35/3", " 37", "37/6", "37??", "39", "40", "41", "43", "45", "47", "49", "49/1", "49/5", "57"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "7/1", "7/2", "8/1", "8/2", "8/3", "8/4", "9", "10/1", "10/2", "10/3", "10/4", "11", "12", "18", "20/1", "20/2", "22", "24", "26", "28"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3", "5"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "2??", "6??", "7", "8", "9"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1", "2/3", "2??", "2??", "3", "4", "5", "8", "10", "12", "14", " 7", "7??", "9"]
    }, {
      name: "??????. ??????????",
      number: ["1", "3", "4", "5"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8??", "9", "10", "11", "13", "14", "14??", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "25??", "26", "27", "27??", "28", "29", "30", "31", "32", "33", "34", "34??", "35", "36", "37", "37/2", "38", "39", "41", "43"]
    }, {
      name: "??????. ?????????????? ??????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????",
      number: ["02 ????????????", " 1", "3??", "4??", "5??", "6", "8", "8??", "8??", "9", "10", "11", "13"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "4/2", " 1??", "3", "3/1", " 12", "12/1", " 6/1", "6/7", "6/2", "6/3", "6/4", "6/6", "6/5", "6/8", "6??", "6??", "6??", "6??", "6", "6??", "6??", "8??", "8??", "8??", "8", "8??", " 19", "51", "51??", "53", "53/1", "58??", "58??/1", "60", "60??", "97", " 83", "83??", "103", "105/14", "109", "111", "113", "121", " 5", "5/1", "5??", "5??", "7", "7/1", "7??", "7??/1", "7??", "7??", "7??", "28??", " 47", "47/1", "49"]
    }, {
      name: "??????. ??????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ??????????????????",
      number: ["92", "93", "94", "95", "95??", "96", "97", "98", "98??", "99", "100", "101", "103", "104", "105", "106", "107", "108", "108??", "110", "112", "114", "116", "118", "120", "122", " 1", "1??", "2", "2??", "4", "6", "7", "8", "10", "12", "14", "16", "22", "24", "26", "26??", "28", "30", "32", "34", "36", "37", "37??", "38??", "39", " 38", "40", "41", "42", "43", "44", "45", "45??", "46", "46??", "47", "48", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "60??", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "70??", "71", "71??", "72", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "83??", "83??", "84", "85", "86", "87", "88", "88??", "89", "89??", "89??", "90", "91"]
    }, {
      name: "??????. ??????????????",
      number: ["7??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2??", "4??", "4??", "6??", "6??", "6??", "6??/1", "8", " 2", "2??", "2??", "2??", "2??", "2??", "2??", "4", "5", "6", "6??", "6??", "6??", "6??", "7", "7??", "8", "8??", "9", "9??", "10", "10??", "10??", "10??", "10??", "110??", "11", "12", "12??", "12??", "12??", "12??", "12??", "12??", "13", "13??", "14", "14??", "15", " 16", "16??", "16??", "18", "18??", "20", "21??", "21??", "21??", "22", "26", "31", "31??", "31??", "31??", "31??", "31??", "31??"]
    }, {
      name: "??????. ????????????????????????",
      number: ["12??", "16??"]
    }, {
      name: "??????. ????????????????????????????????????",
      number: ["3", "5", "5/1", "7", "7??", "9", " 6", "8", "8??", "11", "13", " 4", "4??", "4??", "4??"]
    }, {
      name: "??????. ????????????",
      number: ["11", "13", "15", " 12", "14", "16", " 18", "20", "22", "24", "26", " 10??", " 2/58", "4", " 3", "3??", "5", "7"]
    }, {
      name: "??????. ??????????????????????",
      number: ["3", " 5", "6", "7", "9", "9??", "9??"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["15", " 1??", "2", "3", "8", "15", "15??"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["11", "14??", "14??", "14??", "14??", "16", " 21", "22", "25", "27", "29", " 3/1", "5/1", " 4", "8"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["12/1??", "12/2", "12/2??", "12/6", "12/83", "12/84", "12??", "12??", "12??", " 4", "4??", "4??", "8", " 1??", "1??", "3", "3??", "3/5", "16", "16??", "16??", "16??", "16??", "16??", "16??", "16??", "16??", "18", "18??", "18??", "18??", " 5", "5??", "19", "22", "22??", "22??", "22??", "24", "26/16", "28", " 7", " 11??", "11??", "11??", "15??", "15??", "15??", "15??", "15??", "17/19", "17??", "17??", "17??", "17??", "17??", "17??", "19", "21", " 3", "9", "9??", "11", "11??", "11??", "11??", "13", "13??", "15??", "17", "17??", "17??", " 18??", "18??", "18??", "20", "20??", "20??", "20??", "20??", "20??", "20??", "22??", "22??", " 7??", "7??", "7??", " 5??", "5??", "5??", "5??"]
    }, {
      name: "??????. ?????????????????? (????????????????)",
      number: ["1", "2", "3", "4", "4??", "5", "6", "7", "8", "9", "12??", "13", "14", "15", "16", "17", "19", "19??", "21", "23", "37??", "39", "40", "40??", "41", " 3", "3??", "5", "5??"]
    }, {
      name: "??????. ?????????????????? (????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "6??", "7", "8", "8??", "12", "14", "20"]
    }, {
      name: "??????. ????????????????????????",
      number: ["15", "17??", " 16", "20", "21", "22", "23", "26", "26/28", "28/30", "28??/30??", "29", "29/33", "30", "32??", "32??", "34", "35??", "35??", "37/41", "38", "43", "45/49", "48", "49", " 2", "3/9", "8/14", "11", " 52/58", " 55", "57", "59", "60", "62", "64/68", "65", "67", "69", "71", "72", "74", "74??", "74??", "76/78", "77", "79", "80", "81", "82", "82??", "83/85"]
    }, {
      name: "??????. ??????????????????",
      number: ["32", " 4", "9", "12", "13", "13??", "15", "18/20", "19", "19??", "24", "26", "28", "29", "31", "36"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["11??", " 1/15", "3", "3??", "5", "7", "9", " 11", "13", "13??", "15", "17", " 2??", "2/17", "4", "6", "8", "10", "12", "12??", "12??", "12??", "12??", "14"]
    }, {
      name: "??????. ???????????????????????? ??????????????????",
      number: ["9/31", "33", "35", "36/11", "37", "37??", "37??/1", "37??/2", "38/1", "38/2", "39/1", "39/2", "40/1", "40/2", "41", "42/1", "42/2", "42??", "43", "44", "45", "46", "47/1", "47/2", "49", "50", "51", "52", "53", "60"]
    }, {
      name: "??????. ?????????? ??????????????",
      number: ["3??", "4??", "4??", "5", "6", "6??", "7", "7??", "8", "8??", "9", " 10", " 4", "4??", "4??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["17/19", "21", "22??", "23", "24", "25", "26", "26??", "27", "28", "30", "30??", "31", "32", "33", "34", "35", "37"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
    }, {
      name: "??????. ????????????????????",
      number: ["01 ??????????"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["1/2", "2/1", "3", "3??", "4", "5/1", "6/1", "7", "8/1", "9/1", "10", "11/1", "11??", "13/7", "14/15", "15", "16/6", "17", "18", "19/1", "20", "21/1", "23/1", "24", "24??", "25", "26", "27", "28/25", "29/28", "30", "30/26", "31", "32", "33??", "33/1", "33/2", "34/1", "35", "35/1", "36/1", "37", "38/1", "39/1", "40/1", "40??", "41", "42", "43", " 44", "44/32", "45/1", "45/2", "46", "47/1", "48/1", "48??", "49", "50/1", "51/37", "52/1", "52/35", "53/2"]
    }, {
      name: "??????. ????????????????",
      number: ["5", "6", "7", "8", " 14", "23", "25", "25/1", "27", "27/1", "29", "29/1", "31", "31/1", "31/2", "33", " 47", "49", "50", " 33??", "35", "37", "39", "43", "45"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["1/17", "3", "4/1", "4/2", "5", "6/1", "6/2", "7", "8/1", "8/2", "9", "10??", "10/1", "11", "12/1", "12/2", "13", "13??", "14/1", "14/2", "15/20", "16/1", "16/2", "16/3", "17", "22/18", "26", "26??", "28", "30", "32", "34", "36"]
    }, {
      name: "??????. ??????????????????",
      number: ["1/12", "2", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "38??", "39", "40", "41", "42", "43", "44", "45", "46"]
    }, {
      name: "??????. ??????????????????",
      number: ["11??", "13", "13/1", " 15", "17", "17/1", "19", "19??", "19??", "19/1", "20", "20??", "21", "21??", "21??", "21??", "22", "23", "23??", "23??", "23??", "23??", "23??/1", "24", "30", "30/1", "34", "34??", "35", "36", "36??", "38", "38??", "38/1", "40", " 1", "1/8", "3??", "3??", "3??", "3??", "4", "4??", "5", "5??", "5??/1", "7", "7/1", "8", "8??", "9", "9/1", "9/2", "10??", "10??", "12", "14", "16", "16/1"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["3", " 4", "4/9", "6", "7", "7/9", "7??", "8", "9"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "8/1", "9/3", "10", "15", "16", "17", "18", "20", "28", "30", "31/21", "32", "34"]
    }, {
      name: "??????. ??????????????????????",
      number: ["15", "15/3", "17/1", "17/2", "19/1", "19/2", " 6", " 11", " 2", "2??", "2??", "8??", " 3??"]
    }, {
      name: "??????. ????????????",
      number: ["1/24", "3", "3??", "5/8", "6", "7", "9", "31", "32"]
    }, {
      name: "??????. ?????????????? ????????????????",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26/1", "26/2", "30/1", "30/2", "34", "36", "38/1", "38/2", "40", "42", "44", "63", "65/1", "65/2", "65/3", "67", "69"]
    }, {
      name: "??????. ?????????????? ????????????",
      number: ["34", "34??", " 1", "2", "4", "6", "8", "8??", "10", "10??", " 1??", "1??", "1??", "1??", "12", "12??", "14", "14??", " 16", "16??", "18", "20", "20??"]
    }, {
      name: "??????. ????????????????????",
      number: ["3", "4", "5", "5/1", "6", "7", "8", "9", "10", "11", "12", "13", "13??", "14", "16", "18", " 1", " 23", "25", "25??", "27", "29", "34", "34??", "36", "38", "40", " 15", "17", "19", "20", "21", "22", "24", "26", "28", "30/1", "30/2"]
    }, {
      name: "??????. ??????????????",
      number: ["22", "24", "26", "30", "32", "34", "36", "38", "40", "42"]
    }, {
      name: "??????. ??????????????",
      number: ["1", " 4"]
    }, {
      name: "??????. ????????????????????",
      number: ["8"]
    }, {
      name: "??????. ???????????????? ??????????",
      number: ["26", "29", "31??", "32", "32??", "33", "39", " 1", "2", "3", "4", "9", " 20", " 2??", "2??", "6", "6??", "10", "12"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "2", "4", "5", "9", "9??", "12", "14", "15", "16", "17", "18", "19", "20", "23"]
    }, {
      name: "??????. ????????????????????",
      number: ["2/1", "2/2", "3", "4/1", "4/20", "5", "6/1", "6/2", "6/55", "7/1", "7/2", "8/1", "8/2", "9", "10/1", "10/2", "11/1", "11/2", "12", "12/1", "14/1", "14/2", " 32", "34", "35/1", "35/2", "36", "37/1", "37/2", "40", "41", "42", "43", "48", "63", "65", "67"]
    }, {
      name: "??????. ????????????????????????",
      number: ["3??", "4", "6", "8", "8/13", "10", "13", "13??", "23", "33", "33??", "35", "37", "39", "43", "45", "48", "49"]
    }, {
      name: "??????. ??????????????????????",
      number: ["65", "65??", "67", "68??", "69", "71", "73", "75", "75??", "75??", "77", "77??", "79", "79??", "79??", "85", "85??", "85??", "89", "89??", "89??", "89??", "91", "91??", "91??", "91??", "99", "102", " 24", "24??", "24??", "26", "26??", "26??", "28", "28??", "28??", "31", "31??", "31??", "32", "33", "34", "37", "37??", "38", "38??", "39", "40", "41", "42", "43", "44", "44??", "45", "46", "47", "48", "49", "50", "50??", "51", "52", "53", "53??", "54", "54??", "55", "56", "57", "57??", "58", "58??", "59", "60", "60??", "61", "62", "64", "66", "68"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "5", "7", "9", "9??", "13", "15"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "9", "28", "28??", "30", "30??"]
    }, {
      name: "??????. ???????????????? ??????????????????",
      number: ["7??", "10??", " 22 ??????????????", " 1/22", "2/1", "7", " 03 ????????????"]
    }, {
      name: "??????. ??????????????????",
      number: ["5", "7", "12??", " 1/11", "3", " 9", "10??", "12??"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["3", "5", "5??", "6", "7", "8/10", "8??", "9", "12", "12??", "13", "15", "15??", "16/2", "17", "17??", "18", "18??", "20", "20??", "22/24", "24??", "26", "26??", "28", "30", " 4", "4??", " 21/23", "25/40", " 27", "27/31", "29", "31", " 34", "36", "36??", "36??", "38", "38??", "40", "40??", "42", "42??", "42??", "44", "46", " 19", " 1", "1??", "1??", "1??", "2", "2??", "3", "4", "5", "6", "7", "7??", "8", "9", "10", "11", "12"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "1??", "1/6", "3", "3/8", "3/34", "6/8", "9/11"]
    }, {
      name: "??????. ????????????????????????",
      number: ["2", "9", "11", "17", "18", "18??", "18??", "19", "20??", "21"]
    }, {
      name: "??????. ????????????????",
      number: ["17", "18", "19", "20", "20??", "20??/1", "20??/2", "20??", "22/12", "22/12-2", "22??", "23/1", "23/2", "23/3", "24/15", "24/15-2", "25", "26", "26/2", "27", "29/13", "31/1", "31??", "33??", "33/1", "33/2", "33/3", "35", "35/1", "35/2", "37/1", "37/2", "37/3", "39??", " 2??", "2??", "2????", "2??", "2??", "3", "3??", "3????", "3??", "3??", "4", "4??", "5", "6", "7", "8", "8??", "8??", "9", "10/1", "10/2", "10/3", "10/4", "10/5", "10??", "10??/1", "10/1??", "10??", "11", "12", "12??", "13", "14??", "14??/1", "14??", "14??/1", "14??", "15/1", "15/2", "16/1", "16??", "16??/1", "16??/2"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["11??", "13", "15", "17", "19", " 8"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["3", "4", "5", "7", "9"]
    }, {
      name: "??????. ???????????????? ??????????????",
      number: ["22", "45", "45??", " 23", "39", "41", "41??", "41??", "49", "49??", " 43", "43??", " 47", "47??", " 53", " 59", "61", "65", " 1", "3", "4", "5", "5??", "6", "7", "7??", "8", "9", "9??", "10", "11", "12", "13", "14", "15", "15??", "16", "17", "18", "19", "20", "21", "23", "23??", "26", "28", "30", "34??", "36", "39", " 25", "27", "29", "31"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["1", "3", "3??", "5", "5??", "5??", "15", "15/1", "15/2", "15??", "15/2??", "15??/1", "15/1??", "15/4"]
    }, {
      name: "??????. ???????????? ????????????????",
      number: ["11", "15/15", "16", "18/14", "21", " 6", "10", "11"]
    }, {
      name: "??????. ????????????",
      number: ["1", "1??", "1??", "2", "2??", "3", "3??", "4", "5", "5/2", "6", "7", "8??", "8??", "9", "10", "12", "14", "14??", "16", "18", "20", "22"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "3", "5", "7", "9", "10", "11", "13", "14", "15/9", "16", "17/22", "18", "19", "20/21", "21", "23/23"]
    }, {
      name: "??????. ?????????????????????????? ??????????????",
      number: ["1", "2", "3", "3??", "3??", "5", " 53", "53??", "55", "55??", "57", "59??", "59??", "61", "63", "63??", "63??", "65??", "84", "86", "88", "88/92", "94", " 33/34", "35/1", "37", "37??", "48", "48??", "50", "50??", "50??", "52", "52??", "52??", "54", "56", "58", "62", "62??", " 39", "41", "47", "49", "51??", "51??", "66", "68", "70", "70??", "72", "74", "78", "78??", "80", "82", " 7", "9", "9??", "10", "11", "12", "12??", "14", "15", "16/18", "16/22", "16??", "23", "24", "26", "26??", "27", "29", "30/10", "32", "34", "36", "42", " 17/52", "19/21", "31", "44??", "46", " 4", "6", "8/16", " 61"]
    }, {
      name: "??????. ????????????????????????",
      number: ["23", "25", "25??", "27", "31/6-1", "31/6-2", "38", "40", "42/1", "42/2", "44/1", "44/2", "46/8", " 2/1", "2/3", "2??", "2??", "3", "4", "5", "6", "6/1", "6/2", "7", "8", "9", "10", "11??", "12", "13", "14", "15", "15??", "17", "17??", "18", "19/44", "20", "24", "28", "30", "30??", "32/1", "32/2", "34", "36"]
    }, {
      name: "??????. ????????????",
      number: ["31", "33", "33/35", " 1/2", "1??", "1??", "1??", "2", "4", "6", "7", "15/8", "18", "20", "21", "22/28", "23", "25", "27", "29", "29/41", "31??", "31??", "32", "34", "36", "40", "41??", "43", "45", "46", "47", "49??", "49??", "50", "55", "55??", "55??", "55??"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "3", "5", "8/4", "8??", "11", "11??", " 19", "3"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "3", "4/1", "4/2", "4/3", "5", "6", "10/1", "10/2", "12", "14", "16"]
    }, {
      name: "??????. ??????????????????",
      number: ["5/48", "6", "7", "7/1", "7/2", "7??", "8", "10/35", "37/9"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "3", "4", "5/1", "5/2", "6", "6??", "7", "8??", "9/4", "10/6"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["1??", " 4", "4??", "6", "6??", "8", "10", "12", " 2", "2??", "3", "3??", "5", "7", "8", "10", "10/20", "13", "13??", "20", "20??", "20??", "22", "22??", "24", "26", "27", "27??", "29", "34", "36", "38"]
    }, {
      name: "??????. ?????????????? ????????????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31"]
    }, {
      name: "??????. ???????????????? ??????'??",
      number: ["3", "9??", " 4", "6", "6??", "6??", " 1"]
    }, {
      name: "??????. ????????????????",
      number: ["3", "4??", "5", "8??", "15/4", "22", "24", "26", "28", "32??", "34", "38", "40", "42", "42??", "42??", "44", "44??", "44??", "44??", "46", "46??", "46??", "48", "48??", "48??", "50", "50??", "50??", "50??", "50??", "52", " 13", "15", "17", "19", "19??", "21", "23", "25", "27", "27??", "27??", "29", " 1/2", "4", "5??", "6", "7/11", "8", "8??", "8??", "10", "10??", "12", "14", "16", " 36", " 2", " 30", "32", "32??", "34", " 42??"]
    }, {
      name: "??????. ??????????????????",
      number: ["1/3", "2/5", "4", "5", "6", "8", "10", "12", "14/16"]
    }, {
      name: "??????. ???????????? ????????????????",
      number: ["3", "5"]
    }, {
      name: "??????. ?????????????????? ????????????",
      number: ["4", "6", "8", "8??", "8??", "10/2", "10/11", " 10/1", "10/3", "10/5", "10/6", "10/7", "10/87", "10??", "12", "12/1", "14", "14/1", "14??", "14??", "14??", "16", "16/4", "16/5", "16??", "16??", "16??", "16??/1", "18/1", " 3", "5", "7", "9", "9??", "11", "13", "13/1", "16/1", "16/2"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "1/2", "2", "3/15", "4/13", "7", "7??", "7??/2", "8", "8/2"]
    }, {
      name: "??????. ???????????????? ????",
      number: ["52/2", "52", "53", "54", "55/1", "55/2", "57", "58", "59", "59/1", "60", "60/2", "61", "61??", "61??", "62", "63", "64", "65", "75", "77", "77/2", "79", "81", "83", "85", " 4", "4??", "5", "6", "6??", "6??", "7", "8", "9", "9??", "10??", "10??", "10/2", "11", "12", "12/3", "13/1", "13/2", "14??", "14/1", "14/2", "15", "16/1", "16/2", "17", "17??", "17??", "18/1", "18/2", "20/19", "22/20", "22", "23", "26", "28", "30", "33", "34", "35", "35??", "36", "37", "38", "38??", "39", "40", "42", "43", "44", "45", "46", "47", "48", "49", "49/1", "50", "51"]
    }, {
      name: "??????. ????????????????????",
      number: ["4/7", "5/9", "6/8", "7", "7??", "9"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "4", "4??", "5", "9", "13", "15", "16", "17", "18", "19", "21", "23", "26", "32", "33", "34", "34??", "42", "42??", "44", "44??", "53", "55", "57", "57??", "61", "61/1", "63", "63??", "63??/1", "64", "64??", "67", "67??"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["2/1", "2/2", "6/1", "6/2", "8/1", "8/2", "9/1", "9/2", "10", "11/1", "11/2", "12/1", "12??", "13/1", "13/2", "14", "15", "15??", "16", "17", "17??", "18", "19", "20/1", "20/2", "20??", "21/1", "21/2", "21/3", "22", "24", "24??", "26", "26??", "28/1", "28/2", "28??", "30", "32", "34", "36/1", "36??", "38", "40", "40/1", "40/2", "40??", "44"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "3??", "4/1", "4/2", "6", "7", "7??", "8", "8??", "9", "11", "11??", "13", "15", "16/1", "16/2", "16/3", "17", "19", "21"]
    }, {
      name: "??????. ???????????????? ??????????",
      number: ["2", "2??", "2??", "2??", "3", "5"]
    }, {
      name: "??????. ??????????????????????",
      number: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "21??"]
    }, {
      name: "??????. ???????????? ??????????????????",
      number: ["1", "3", "5", "7", "9", "11", "13", " 2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "28", " 32", "34", "38", "38??", "38??"]
    }, {
      name: "??????. ????????????????????",
      number: ["??/??"]
    }, {
      name: "??????. ???????????????? ????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "10??", "10??/2", "11"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "2", "2??", "2??", "3", "5", "6", "7", "8", "8/1", "8/2", "9", "9??", "10", "11", "11??", "12", "12??", "13", "14", "15", "16", "18", "20"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
    }, {
      name: "??????. ??????????????????",
      number: ["2/5", "3/1", "3??", "3??/1", "3??/2", "4", "4??", "4??/1", "5", "6", "7", "8", "9", "10", "11/10", "12/12", "13/1", "13/2", "14", "15/2", "15/3", "16", "16??", "16??/1", "17", "17??", "18", "18??", "18??/1", "19", "19/1", "19/2", "20", "20??", "21/1", "21/2", "22", "22/1"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1??", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "12??", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "32", "34", "36"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "1??", "2", "3", "5??", " 2", "5", "7", "7??", "9", "9??", "9??", "9??", "11", "15", " 17", "19"]
    }, {
      name: "??????. ??????????????",
      number: ["5", "7", "9/1", "9/2", "11", "13", "14", "15", "16/1", "16/2", "16??", "17/20", "17/20??", "18", "20/1", "20/2", "22/1", "22/2", "22/3", "22/4", "24", "26", "26/1", "26/2", "28", "28/1", "30", "32", "34", "38/1", "38/2", "40/1", "40/2", "40/3", "42", "44/1", "44/2", "44/3", "46", "46/1", "46/2", "46/18", " 2/1", "4", "6", "6/1", "8/1", "8/2", "10", "12"]
    }, {
      name: "??????. ????????????????????????????????",
      number: ["4", "5", "7"]
    }, {
      name: "??????. ??????????????????????????????",
      number: ["11/13", "14/14", " 2", "3??", " 1", "1??", "1??", "1??", "2??", "2??", "2??", " 7", "9", "13/16", "15", "19", "21", "23/17", " 10", "12??", " 16", "20/15", " 5", "8"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["18", "18??", "20", "20??", "22", "22??", "24", "24??", "26", "28", "30", " 22??", " 27", "27/2", "27??", "29", "29??", "31", " 40", "42", "42??", "42??", "42??", "44", "44??", "46??", "48", "59", "59/2", "59??", "60", "61/57", "63", "67", "69", "71", "75", "76", "78", "79", "80", "84", "85", "86", "87", "88/20", "90", "93", "94", " 33/10", "35", "37/9", "43", " 42??/1", " 1", "1/12", "7", "11", "11/11", " 1??", "2", "2??", "4", "8??", " 17", "17??", "19", "21", "21/7", "23", "25", " 10", "12", "14", "14??", "16", "16??", "16??", "18??"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["1", "2", "2??", "4", "4??", "5", "6", "9", "11", "14", "15", "16", "17/1", "17/2", "17/3", "19", "19??", "19??", "20", "21", "22", "22??", "38??", "38??", " 3??", "6/1", "6/2", "15??", "15??", "15??", "16??", "16??", "16??", "17", "38"]
    }, {
      name: "??????. ??????????????????",
      number: ["7", "11", "12??", "12??", "12/1", "12/2", "12/3", "17/69", "19/58"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["17/50", "21"]
    }, {
      name: "??????. ??????????????????????",
      number: ["19", "20", "21", "22/1", "22/2", "28", "28??/20", "32"]
    }, {
      name: "??????. ????????????????????????",
      number: ["38/2", "38/4", " 38/7", " 51", " 28/55", "30", "32", "32??", "34", "35", "37", "38", "40", "41", "42", " 8/1", "8/2", "8/3"]
    }, {
      name: "??????. ????????????????????????????",
      number: ["4", " 12", "13", "15", "16/30", "17", "19/9", " 18", "20", "22", "24", "26", "28", "28??", "30", "34", "36", "38", "40", "42", "44", "46", "50/7", "54", "56/47", "58", "60", "61/32", "23", "25", "27", "29", "31", "33", "33??", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", "75"]
    }, {
      name: "??????. ????????????",
      number: ["1/22", "3", "4", "6", " 9"]
    }, {
      name: "??????. ????????????????",
      number: ["1", "2", "5", "7", "9", "16"]
    }, {
      name: "??????. ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13/1", "14", "15", "16", "16/1", "17", "17/1", "18", "18/1", "19", "19/1", "21", "23", "25", "27", " 22", "24", "26", "28", "29", "31", "32", "33/1", "33/2", "35", "36", "37", "38", "39", "40", "41", "42", "43", "47", "49", "51"]
    }, {
      name: "??????. ??????????????????????",
      number: ["77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118"]
    }, {
      name: "??????. ????????????????",
      number: ["8", "12", " 12", "14", "14??", "16", "18", "20", "55", "57", "57??", "59", "59??", "61", "61??", " 3", "5", "7/1", "7/2", "7/3", "9/1", "9/2", "11/1", "11/2", "13/1", "13/2", "15", "17", "19", "19??/1", "19??/2", "19??/3", "19??/4", "21", "23/1", "23/2", "25/1", "27/1", "27/2", "29", "32", "33", "35", "37", "39/1", "39/2", "39??", "41", "43/1", "43/2", "45/1", "49"]
    }, {
      name: "??????. ????????????????????????",
      number: ["7", "11", "11??", "11??", "13??", " 6/10", "12", "15", "16??", "17", "18", "19", "19??", "20", "21", "23", "24", "26", "28", "30", "32", " 2", "2??", "4"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "29/1", "30", "31", "32", "33", "34", "35", "37", "39", "39??", "41", "43", "45"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["24/26", " 16??", "16??", "16??", "18", "20", "22", " 17", "19", "21", " 3", " 5/7", "9", "9??", "11", "11??", "13", "13??", " 16/80", " 6", "10", "10??", "12", "12??", "14"]
    }, {
      name: "??????. ?????????????????? ??'????????????????",
      number: ["2", "8", "8??", "10", "12", "12??", "14", "16", "20", "24", " 25", "33/30", " 26/2", "30"]
    }, {
      name: "??????. ????????????????????????",
      number: ["36", " 3/1", "3/2", "5", "6", "7", "8", "8??", "9/1", "9/2", "9/3", "11/13", "12/1", "12/2", "14", "17/14", "18", "19/13", "20/12", "21", "22/13", "24", "24/1", "24/2", "26/1", "26/2", "26/3", "28/16", "30", "34/1", "34/2"]
    }, {
      name: "??????. ????????????????????????",
      number: ["1", "7"]
    }, {
      name: "??????. ?????????????????????? ??????????",
      number: ["3", "4", "4??", "8", "8??", "10"]
    }, {
      name: "??????. ???????????? ????????????",
      number: ["3", "4", "5", "6", "7", " 8", "8??", "8??", "10??", "13"]
    }, {
      name: "??????. ???????????????? ????????????????",
      number: ["7", "7??", " 1", "1/10", "2/7", "2/8", "2??", "3", "4", "4??", "5", "6", " 8", "8??", "10", "12/8"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "3", "3??", "4", "5", "6", "7"]
    }, {
      name: "??????. ???????????? ??????????",
      number: ["1", "1??", "1??", "3", "3??", "5", "5??", "7", "10", "10??", "14"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "4", "4??", "5", "8", "9", "9??", "11"]
    }, {
      name: "??????. ?????????????????? ????????",
      number: ["100", " 48", "49/20", "61", "63", " 34", "39", "41", "43"]
    }, {
      name: "??????. ?????????????? ??????????",
      number: ["1", "3", "5"]
    }, {
      name: "??????. ???????????????? (????????????????)",
      number: ["1", "1??", "2", "2??", "3", "3??", "4", "5", "6", "7", "7??", "8", "9", "9??", "10", "11", "12", "12??", "13", "14", "15", "15??", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26??", "28??"]
    }, {
      name: "??????. ???????????????? (????????????)",
      number: ["1", "2", "2??", "3", "3??", "4", "5", "5??", "6", "6??", "7", "8", "9", "10", "11", "12", "12??", "13", "14", "15", "16", "17", "18", "19", "20", "21", "21??", "22", "22??", "23", "23??", "24", "25", "26", "27", "27??", "28", "29", "29??", "30", "31", "32", "32??", "33", "34", "35", "36", "36??", "37", "38", "39", "40", "41", "41??", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "55/1", "56", " 111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "127??", "128", "129", "129??", "129??", "130", "130??", "130??", "131", "132", "133", "133??", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "144??", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "155??", "156", "158", "158??", "160", "160??", "162", "166", "168", " 57", "57??", "58", "59", "60", "61", "62", "63", "64", "64??", "65", "65??", "66", "66??", "67", "67??", "68", "68??", "69", "70", "71", "72", "72??", "73", "74", "74??", "75", "76", "77", "77??", "78", "78??", "79", "79??", "80", "82", "83", "83??", "84", "85", "86", "87", "88", "89", "90", "91", "91??", "92", "93", "94", "95", "96", "97", "98", "99", "100", "100??", "101", "102", "103", "103??", "104", "105", "106", "107", "108", "109", "110", "110??", "", " 164", "164??", "166??", "170", "170??", "172", "174", "174??", "176", "178", "180", "182", "184", "186", "187", "188", "190", "192", "194", "196", "196/1", "196??"]
    }, {
      name: "??????. ???????????????? (????????????????)",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "15", "15??", "17", "17??"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["4", "4??", "4??", "6", "6??", "8", "8??", "10", "10??", "12", "14", " 2", "2??", "3", "3??", "5", "7", "7??", "9", "9??", "11??", "13", "18", "31/87"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4", "6", "8"]
    }, {
      name: "??????. ?????????????????????????? ??????????????",
      number: ["02 ????????????"]
    }, {
      name: "??????. ????????????",
      number: ["3", "4/1", "6/1", "6/2", "10", "12", "14/8"]
    }, {
      name: "??????. ??????????????",
      number: ["16/38", "18", "21", "23", "24/1", "25", "26", "27", "28/1", "28/2", "29", "30", "31", "32", "33"]
    }, {
      name: "??????. ?????????????? (????????????)",
      number: ["1", "1??", "2", "3", "3??", "4", "5", "5??", "6", "7", "8", "8??", "9", "10", "11", "11??", "11??", "12", "12??", "12??", "12??", "12??", "13", "14", "15", "16", "17", "17??", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "33??", "34", "35", "36", "38", "40", "42", "44", "46", "48", "50", "52"]
    }, {
      name: "??????. ????????????????????",
      number: ["1/14", "2??/1", "2??/2", "2??", "2??", "2??", "2??", "2??", "4", "4??", "6", "8", "9/20", "10", "12", "14", "16/1", "16/2", "18", "20/7"]
    }, {
      name: "??????. ???????????? ????????",
      number: ["2/1", "2/2", "2/6", "2??", "2??", "2??", "4", "5", "6", "7", "8", "8??", "12??", "13", "14", "16", "18", "20", "22", "22/26", " 35/37", " 26", "26??", "26??", " 31", "33"]
    }, {
      name: "??????. ????????????????????",
      number: ["4", "4??", " 1", "1/22", "3", "5", "7??", " 13 ??????????????", " 9", "10", "11/1", "12", "12??", " 16", "16??", "17", "17/2", "18", "18??", "18??", "18??", "19", "20", "21", "22", "23", "24", "25", "30", "30/35", "30??", "30??", "34??", " 29", "32/34", "36/7", " 42", "44", " 6", "21", "38", "48", "50", "52", " 39/1"]
    }, {
      name: "??????. ???????????????????? ??????????????",
      number: ["3", " 4", "5", "8/20"]
    }, {
      name: "??????. ??????????-????????????????",
      number: ["12", "12/1", "14", "14??", "14??", "16", "16??", "18", "18??", "18??", "20", "22", "24", "24/1", " 7", "9", "9??/1", "11", "11??", "13", "13??", "15", "15??", "15??", "15??/1", "17", "17/1", "17/1??", "17/2", "17/3", "17/4", "17/5", "17/6", "17/7", "17??", "17??/1", "17??", "19", "19/1", "19/2", "19/3", "19??", "19??/1", " 1", "1??", "3", "5", "5??", " 4", "4/1", "4??/1", "4??", "6", "8", "8??", "10", "10??", "10??/1"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "4", "6", "10", " 1", "1??", "1??", "1??", "3", " 12", "14", "16", "27/6", "29", "30", "31", "31??", "33/19"]
    }, {
      name: "??????. ??????????",
      number: ["9", "11", "12"]
    }, {
      name: "??????. ?????????? ????????????",
      number: ["2", "4", " 3", "5"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "4/6", "6", "12", "13", "14", "15", "15??", "16", "17", "19", "20"]
    }, {
      name: "??????. ????????????????????",
      number: ["1", "2", "2/20", "3??", "3/1", "3/2", "4", "4??/1", "4??/2", "5??", "6??", "6??/21", "7/2", "7??", "7??/2", "9"]
    }, {
      name: "??????. ???????????????? ????????????????????",
      number: ["1", "3/1", "3/2", "3??", "4", "6", "9", "15", "33"]
    }, {
      name: "??????. ??????????????????",
      number: ["15/23", "20/22", " 5", "7", "10/12", "10/12??", "10/12??"]
    }, {
      name: "??????. ?????????????????? ????????",
      number: ["1", "1??", "1??", "3", "3??", "3??", "3??", "4", "4??", "5", "6", "6??", "6??", "8", "8??", "10"]
    }, {
      name: "??????. ???????????? ????????????????????",
      number: ["13", "13??", "14", "14??", "14??", "14??", "16", " 1", "3", "4", "6", "9", "9??"]
    }, {
      name: "??????. ??????????????",
      number: ["3", "4", "5", "7", "9", "13", "15", "17", "19"]
    }, {
      name: "??????. ????????????????????",
      number: ["40/37", "42/48", "45", " 2/8", "7", "7/10", "9??", "21", "27", "29", "30/39", "34", "36", "37", "41", "44", "46", "51", "55"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "3", "5", "9", "9??", "9/2", "10", "11", "12", "13", "14", "15", "15??", "18", "20", "21/4"]
    }, {
      name: "??????. ???????????????????????????? ????????????",
      number: ["3", "5", "7/10", "9", "9??", "11", "11??", "13", "15", "17", "19", "21", "21??/1", "21??/2", "23", "23??", "25", "29/23", "31/40", "31??", "31??", " 20", "22", "24", "26", "28", "30/21", "32/38", "34", " 2", "2??", "4", "6", "8", "10", "12", "14", "16", "18", " 33", "35", "37", "39", "41", "43", "45", "45??", "47", " 36", "40/1", "42", "42/44", "44", "44??", "46", "46??", "48", "48??", " 51??", "53", "53??", "53??", "53??", "55", "55??", "62", "62??", "70", "72", " 47??", "47??", "49", "49??", "49??", "49??", "49??", "51", "51??", "64", "66", "68", " 52", "54", "56/7", "58??", "60??", "60??", "60??", "64??", "66??", "68??", " 57", "57??", "57??", "57??", "57??", "59??", "61??", "61??", "61??", "63??", " 59", "61", "63"]
    }, {
      name: "??????. ????????????",
      number: ["13", "15", "15??", "17/8", "19/11", "21/12", "22/12", "23/9", "24", "24??", "25", "27/4", " 34/1", "36", "38", "40", "42", "44", " 26", "28", "29/5", "30/6", "32", "33", "33/1", "33/2", "35", "39/1", "39/2", "41/1", "41/2", "43/2", "47/1", "47/2", " 2/19", "3", "4", "6", "7", "8", "12", " 8??", "10??", "12??", "14", "16", "18/14", "42??"]
    }, {
      name: "??????. ???????????? ????????????????",
      number: ["2/11", "3/1", "3/2", "5", "7", "9", "10", "11", "15", "17", "19"]
    }, {
      name: "??????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42"]
    }, {
      name: "??????. ?????????????? (????????????)",
      number: ["6", "8", "10", "17", "19", "21"]
    }, {
      name: "??????. ???????????????? ????????????",
      number: ["2", "6??", "9/13", "14", "15", "16", "17??", "20", " 28", "28??", "29", "29??", "30", "31", "31??", "32", "33", "34", "36", "36??", "36??", "37", "37??", "38", "40", "41", "42", "42??", "42??", "44??", "45", "46", "47", "48", " 50", "50/1", "50/2", "50/3", "55", "58", "67/69??", "67/69??", "67/69??", "68", "69", "70", "73", "75", "75??", "76", "77", "77??", "77??", "77??", "78", "78??", "79", "80", "80??", "82", "83", "83??", "85", "85??", "85??", "85??", "86", "87", "87??", "88", "88??", "88??", "89", "89??", "90", "91", "92", "92??", "93", "94", "95", "95??", "95??", "97", "97??", "97??", "101", "101??"]
    }, {
      name: "??????. ????????????",
      number: ["7", "7??", "9", "12", "14", "17", " 1", "2", "3", "4", "5", "6", "6/1", "6??", "8/2"]
    }, {
      name: "??????. ?????? ??????????",
      number: ["1", "1/11", "3", "5", "7", "7??", "7??", "7??", " 12", "14", "14??", "14??", "14??", "16", "18", "18??", " 02 ??????????????", " 4", "6", "6??", "6??", "8", "10", "10??", "10??", "20", " 5??", "9", "9??", "9??", "11", "11??", "13", "15"]
    }, {
      name: "??????. ???????? ??????????????",
      number: ["4", "5", "5??", "6", "7", "9", "10", "10/12", "12", "12??", "14", "24", "81??", " 16", "18", "18??", "18??", " 20", "22", "24", "28??", "30", "30??", "32", "63", "69??", "71", "75", "81", "81/2", "81/20", "81??", " 1", "2", "3", "31", "35", "39", "49", "51", "53", "53??", "53/55", "61", " 44", "46", "46??", "48", "48??", "50", "52", "52??", "83??", "85", "87", "89", "89??", " 83", "83??", " 36", "36/1"]
    }, {
      name: "??????. ???????? ????????",
      number: ["6"]
    }, {
      name: "??????. ???????? ????????????????",
      number: ["3", "5", "7"]
    }, {
      name: "??????. ??????????????????",
      number: ["2", "6/32", "8/12", "12/59", " 18", "25", "28", "34??", "34??", "36", "37", "40", "42", "42??"]
    }, {
      name: "??????. ?????????????????? ??????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53"]
    }, {
      name: "??????. ???????????????????? ????????????",
      number: ["2", "4", "6", "16", "18", "20", "22", "24", " 1"]
    }, {
      name: "??????. ??????????????????",
      number: ["1", "3", "5", "6", "7", "8", "9", "11", "12", "13", "14", "16", "18", "19", "20"]
    }, {
      name: "??????. ????????????????",
      number: ["26/2", "27/1", "27/2", "28", "29/26", "30", "31", "31??", "32", "34/23", "36", "38", "40", "41", " 1/2", "1/3", "2/5", "3", "3??", "4", "5", "6", "7", "7??/1", "7??/2", "7??/1", "7??/2", "8/1", "8/2", "9", "9??", "10", "11/1", "11/2", "12/1", "12/2", "13", "14", "14/1", "14/2", "15", "16/1", "16/2", "17", "18", "18??", "19/1", "19/2", "19/3", "19??", "20", "21??", "21??", "22/1", "22/2", "23", "24", "24??", "25/1", "25/2", "26/1", " 2", "18"]
    }, {
      name: "??????. ???????????????????????? ????????????",
      number: ["26", "28", "30", "31", "32", "33", "39", "41"]
    }, {
      name: "??????. ????????????",
      number: ["44/1", "44/2", "44/3", "46", "48", " 1/26", "2/13", "3", "4", "5", "6", "7", "8", "9", "10", " 1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"]
    }, {
      name: "??????. ????????????????????",
      number: ["2", "3", "4", "5", "6/11", "6??/1", "6??/2", "8/1", "8??", "9", "10/1", "10/2", "11/1", "11/2", "13", "13??/1", "13??/2", "15", "17/1", "17/2"]
    }, {
      name: "??????. ???????????????????????? ??????????????",
      number: ["1", "1/1", "1??", "1??", "2", "2??", "2??", "2??", "3", "3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3??", "3??", "4", "5", "6", "6/1??", "6??", "7", "7??", "7??", "7??", "7??", "7??", "8", "8/1", "9", "9/1", "9/2", "9/3", "9/4", "11", "11/1", "11/2", "13", "13??", "13??", "13??"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "3", "5", "6", "6??", "7", "7??", "7??", "8", "9", "10", "12", "14", " 72", "72??", "84", "86", "86??", "86??", "86??", "86??"]
    }, {
      name: "??????. ????????????????",
      number: ["2", "2??", "2??", "2??", "2??", "2??", "2??", "2??", "2??/1", "2??", "2??", "4", "4??", "4??", "4??", "4??", "6", "8", "8??", "10", "12", "12??", "14", "16", "18", "18??", "20", "22", "23", "24", "28", "28/18", "30", "32/50", "34", "34??", "36", "38", "40", "44/48", "50??", "52", "54", "56", "58", "58/2", "58/60", "60", "60/1", "60/3", "60/4"]
    }, {
      name: "??????. ??????????????????",
      number: ["14", "20/1", "20/18", "20/18??", "22", "22??", "22??", "24/23", " 21 ????????????", " 6", "8", "8/1", "10/14", "10/14??", "12/11", " 5", "5/1", "5??", "5??/1", "5??/2", "5??/3", "5??/4", "5??", "5??/1", "5??/2", "5??/3", "5??/4", "6/1", "7", "7/1", "7/2", "9??", "11", " 13", "13/1", "15", " 26/36", "28/45"]
    }, {
      name: "??????. ????????????",
      number: ["1", "3/5", "6/31", "13", "13??", "14??", "18/20", "22", "23??", "23??", "25", "28", "28??", "29", "32", "34", "35", " 41", "42", "44", "74", " 57", "59", "66"]
    }, {
      name: "??????. ?????? ????????????",
      number: ["2", "3/5", "16"]
    }, {
      name: "??????. ???????????? ??????????????????",
      number: ["1/37", "5", "7", "18/20", "20", "22", " 2", "2??", "4", "12/2", "14/1"]
    }, {
      name: "??????. ??????????????",
      number: ["2", "4", "5", "7", "9", "11", "12", "12??", "13", "29"]
    }, {
      name: "??????. ?????????????? (????????????)",
      number: ["25", "27", "29", "32"]
    }, {
      name: "??????. ?????????? ??????????????",
      number: ["33", "35", "37??", "37/1", "37/2", "38", "39", "40", "41", "41??", "42/1", "42/2", "43/1", "43/2", "44/1", "44/2", "45??", "45/1", "45/2", "45/3", "46", "47/1", "47/2", "48/1", "48/2", "50", "50??", "52/1", "52/2", "54", "56/1", "56/2", " 32", "34??", "34??", "36/1", "36/2", " 53/16", "55/9", "57/1", "57/2", "60", "61/3", "63", "64", "67/1", "67/2", " 3", "4", "8", "10", " 20??", "23/2", "24/1", "26", "28/2", "30", " 7/2", "9/12", "11", "13/1", "15/2", "17", "19", "21/1"]
    }, {
      name: "??????. ???????????? ??????????????",
      number: ["4", "28/32", "38", "38??", " 06 ??????????????"]
    }, {
      name: "??????. ?????????????????? ??????",
      number: ["1", "3", "4", "5", "5??", "6", "7", "8", "9", "10", "10??", "11", "14??", "14??", "14??", "14??", "14??", "16", "16??", "20", " 13", "13/2??", "15??", "15??", "17??", "17??", "19", "22", "24", "26", "26??", "28", " 21??/20", "21??", "21??", "21??", "21??", "23", "25", "27", "27??", "28/31", "29??", "29??", "29??", "29??", "30??", "30/18", "32", "33", "33??", "35", "36", "36??", "38", "40", " 21??", " 14??"]
    }, {
      name: "??????. ??????????????????????",
      number: ["4??", "5/2", "6", "10", "11", "11??", "13", "13??", "15/23", "19", "20", "21", "26", "29", "40", "51", "56??", "57", "58"]
    }, {
      name: "??????. ??????????????????",
      number: ["3", "6/4", "7", "8", "9/7", "10", "11", "13", "15"]
    }, {
      name: "??????. ????????",
      number: ["3/1", "3/2", "5/2", "7/1", "7/2", "7/3", "8/1", "8/2", "12/1", "12/2", "13", "14", "15", "16/1", "16/29", "17/1", "17??", "18/1", "18/2", "19", "20/1", "20/2", "21", "22/1", "22/2", "23", "24/1", "24/2", "25/1", "25/2", "26", "27/1", "27/2", "28", "32/1", "32/2", "34", "36/1", "36/2", "38/1", "38/2", "38/3", "40", "40??", "42/2"]
    }, {
      name: "??????. ??????????????????????",
      number: ["1", "2", "3", "3/19", "4", "4??", "5", "5/30", "6", "6/28", "7", "8", "9", "9??", "10", "11", "11/6", "11??", "12", "13", "13/5", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "31??", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51"]
    }, {
      name: "??????. ??????????????????????????",
      number: ["1/3", "3", "4", "5", "6", "7", "8", "9/1", "10", "11", "11/1", "12", "13/1", "14/1", "15/20", "16/22", "17/1", "18/25", "19", "20", "22", "24", "26"]
    }, {
      name: "???????????? ???????????????? 14-?? ???? ??????????",
      number: ["1", "2", "3", "4", "5"]
    }, {
      name: "???????????? ???????????????? 21-?? ???? ????????-?????????????????????? ??????",
      number: ["??/??"]
    }, {
      name: "???????????? ????????????????",
      number: ["15", "15??", " 1", "1??", "1??", "3??", "3??", "5", "5??", "5??", " 12", " 12", "18", "20/1", "20/1??", "22", "22??", "22??", " 12??", "12??", " 2", "4", "4??", "4??", "4??", "4??", "6", "8", " 3", " 1/2", "1??", "1??", "1??/1", "1??/2", "1??", "1??/1", "1??/2", "1??", "1??", "1??", "2/1", "5??/1", "110", " 2??", "2??", "5??", "5??", "10"]
    }, {
      name: "???????????? ??????????????????-??????????????????",
      number: ["1", "2", "2??", "4??", "5", "6", "7", "7??", "8", "9??", "9??", "11??", "11??", "10", "12", " 4"]
    }, {
      name: "???????????? ??????????????????-????????????????????",
      number: ["3", "9"]
    }, {
      name: "???????????? ??????????????",
      number: ["1??", "3", "4", "16", "17", "20"]
    }, {
      name: "???????????? ????????????????????????",
      number: ["1", "2??", " 2"]
    }, {
      name: "?????????????????? ??????????????????????",
      number: ["8", "17", "21??", " 10", "10-14", "12??", "17??", "19", "19??", "19??/1", "19??", "19??", "21", "23", "23??", "23??", "25", "25??", "25??", " 16", "16??", "16??", "16??", "16??", "18", "18??", "18??", "18??", "18??", "18??", "33", " 14", "14/1", "14??", "14??", "14??", "14??", "14??", "14??", " 3", "3??", "5", "5??", "5??", "7", "7??", "7??", " 9", "9??", "9??", "11", "11??", "13", "13??", " 26", "26??", "26??", "26??", "26??", "26??", "28", " 1", "1??", "1??"]
    }, {
      name: "?????????????????? ??????????????????????",
      number: ["16", "17??", "18", "18/1", "20", "22", "24/51", " 10", "10/1", "12", "12/1", "12/3", "14/1", " 4", "4/1", "6", "8", "8/1"]
    }, {
      name: "???????????? ????????????????",
      number: ["1", "12", "14"]
    }, {
      name: "????. ????????????????",
      number: ["8"]
    }, {
      name: "????. ????????????????????",
      number: ["1??"]
    }, {
      name: "????. ??????????????????????",
      number: ["5", "9/1"]
    }, {
      name: "????. ????????????????????????",
      number: ["2"]
    }, {
      name: "????. ??????????????????",
      number: ["1", "2", "3", "4", " 1"]
    }, {
      name: "????. ???????????? ????????????",
      number: ["1", "3??", "3??", "5", "5??"]
    }, {
      name: "????. ????????????????????",
      number: ["1", "3"]
    }, {
      name: "????. ??????????????????????????",
      number: ["8"]
    }, {
      name: "????. ??????????????????????",
      number: ["1", "4", "7", "7??", " 2", "2??", " 8", "9", "10", "10??", "10??", "12"]
    }, {
      name: "????. ?????????????????? ??????????",
      number: ["4"]
    }, {
      name: "????. ???????? ????????????????",
      number: ["1"]
    }, {
      name: "????. ??????????????????",
      number: ["14", " 4", "4??", "6", "8", "8??", " 6", "8"]
    }, {
      name: "????. ????????????????????????",
      number: ["1"]
    }, {
      name: "????. ????????????????????",
      number: ["1", "1/1", "1/2", "1/2??", "1/3", "1/3??", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1/10", "1/11", "1/12", "1/13", "1/14", "1/15", "1/16", "2", "2??", "3", "3/1", "3/2", "3/3", "3/4", "4", "4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7", "4/8", "5", "6", "6/1", "6/2", "6/3", "6/4", "8", "8/1", "8??", "8??/1", "10/24"]
    }, {
      name: "????. ????????????????",
      number: ["2"]
    }, {
      name: "????. ??????????????????????????????",
      number: ["1", "3", "5", "9", "11"]
    }, {
      name: "????. ??????????????????",
      number: ["1"]
    }, {
      name: "????. ??????????????",
      number: ["2", "3"]
    }, {
      name: "????. ????????????????????????",
      number: ["1", "2", "3"]
    }, {
      name: "????. ????????????????????????",
      number: ["1", "9"]
    }, {
      name: "????. ??????????????????????????????",
      number: ["1"]
    }, {
      name: "????. ??????????",
      number: ["1"]
    }, {
      name: "????. ??????????'????????????",
      number: ["1", "2", "25", " 2??"]
    }, {
      name: "????. ??????????????????",
      number: ["1", "1??", "3", "3??", "3??"]
    }, {
      name: "????. ???????????????? ????????",
      number: ["1", "3", "5", "5??/1", "9", "11", " 6", "8", "10"]
    }, {
      name: "????. ???????????? ??????????",
      number: ["3", " 5"]
    }, {
      name: "????. ????????????????????",
      number: ["01 ????????????"]
    }, {
      name: "????????. 1-?? ??????????????????????",
      number: ["2", "4", "6", "8", "10", "12", "14"]
    }, {
      name: "????????. 1-?? ????????????",
      number: ["2", "4", "10", "12"]
    }, {
      name: "????????. 1-?? ????????????????",
      number: ["1", "2", "3", "4", "6", "8"]
    }, {
      name: "????????. 1-?? ????????????????????",
      number: ["3", "8", "13", "14??", "16", "26", "28??", "28??", "28??", "34??"]
    }, {
      name: "????????. 1-?? ????????????????",
      number: ["7", "11", "13", "15", "17", "17??", "19", "19??", "21", "23", "25"]
    }, {
      name: "????????. 2-?? ??????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "15", "16", "17", "18", "22", "23", "25", "26", "27"]
    }, {
      name: "????????. 2-?? ????????????",
      number: ["1", "2", "4", "6"]
    }, {
      name: "????????. 2-?? ????????????",
      number: ["1", "3", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16"]
    }, {
      name: "????????. 2-?? ????????????????",
      number: ["6", "14"]
    }, {
      name: "????????. 2-?? ????????????????????",
      number: ["11", "22"]
    }, {
      name: "????????. 2-?? ???????????????????? ??????????????????",
      number: ["6", "7", "8", "9", "10", "11", "12", "13", "15", "17", "18", "19", "26"]
    }, {
      name: "????????. 3-?? ????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "15"]
    }, {
      name: "????????. 4-?? ????????????????????",
      number: ["23", "25"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "5"]
    }, {
      name: "????????. ??????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ???????? ????????????????",
      number: ["3", "5", "6", "8", "10"]
    }, {
      name: "????????. ??????????????????????",
      number: ["5"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "3??", "5", "5??", "5??", "6", "6??", "7", "7??", "7??", "7??", "8", "8/1", "8/2", "9", "9??", "9??", "11", "13/1", "13/2"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["1", "1??", "3", "5", "5??", "5??", " 7??", "7??", "7/9", "9", "11", "13"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "5"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["2/4", "56??/12"]
    }, {
      name: "????????. ??????????????????",
      number: ["3"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "5", "7", "9"]
    }, {
      name: "????????. ????????????????????",
      number: ["12", "14", "15", "17", "25", "25??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["20", "23"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "5", "7", "8", "9", "11", "15/1", "15/2"]
    }, {
      name: "????????. ????????????????????????",
      number: ["6"]
    }, {
      name: "????????. ??????????????????",
      number: ["1", "1??", "1??", "2", "2??", "3", "4", "5", "6", "7", "8", "10"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1", "2", "3", "4", "4/36", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
    }, {
      name: "????????. ????????????????????",
      number: ["1", "2", "3", "3??", "3??", "4", "5", "5??", "6", "7", "8", "17", "19", "21", "23", "24", "30"]
    }, {
      name: "????????. ???????????????????? 3",
      number: ["19"]
    }, {
      name: "????????. ?????????????? ??????????",
      number: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "11??", "12", "15", "14", "16", "17", "18", "19", "19??", "20", "25"]
    }, {
      name: "????????. ?????????????????? ????????????????????",
      number: ["1??", "2", "2??", "3", "4", "8", "10", " 11", "13", "15", "17", "19", "20", "22??"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "4", "4??", "4??", "4??", "5", "6", "7/11", "8", "10", "10??", "13", "13??", "14??", "15"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["19", "2"]
    }, {
      name: "????????. ????????????????????",
      number: ["7", "9"]
    }, {
      name: "????????. ????????????????????",
      number: ["6", "8", "10", "11", "12", "13", "14", "15", "17", "21", " 9"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "8", "8/2", "10/1", "10/2"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "5", "9", "11", "13", "15"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4", "4/1", "6", "6/2"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["7"]
    }, {
      name: "????????. ????????????????????",
      number: ["12/11", "13", "16", "18", "19", "20"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "14", " 19"]
    }, {
      name: "????????. ??????????????",
      number: ["1??", "1??", "3", "3??", "4", "5", "6", "6/1", "7", "8", "9", "10", "11", "11??", "12", "13", "15", "17", "18", "18/1"]
    }, {
      name: "????????. ?????????????? (????????????????)",
      number: ["1", "1??", "2", "4", "5", "7"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3"]
    }, {
      name: "????????. ??????????????????????",
      number: ["11??", " 1", "2??", "3", "4", "5", "6", "7", "8", "9", "9??", "10", "11", "11??", "12", "13", "14", "16", "18"]
    }, {
      name: "????????. ??????????-????????????????????",
      number: ["06 ??????????????"]
    }, {
      name: "????????. ??????????????????????",
      number: ["8"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2", "2??", "4", "6", "7", "8", "9", "10", "12", "12??", "14", "14??", "14??"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "3??", "4/1", "4??/2", "6", "6??"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["28/15", "30", "32/2", "34", "34/1", " 2", "2/8", "2/18", "3", "4", "5", "5??", "6", "7", "8", "9", "10", "12", "12/13", "12/2", "12??", "14", "14/1", "14/2", "14??", "16", "16??", "18", "20", "20/2", "21/9", "22", "24", "24/1", "24??", "26", "26/1", "26/2", "26??", "28", "28??", "30", "30??", "32", "32??", "33", "34", "34/1", "36", "37??", "31/13", "32", "33", "35", "37", "39", "41", "43", "43/2", "43/12"]
    }, {
      name: "????????. ?????????????? ??????????",
      number: ["1", "2??", "3", "4", "5", "7??", "7/1", "8", "10"]
    }, {
      name: "????????. ???????????????? ??????????????????",
      number: ["3", "3/2", "4", "5", "6", "6/2", "7", "8", "8/2", "8??/1", "8??/2"]
    }, {
      name: "????????. ??????????????",
      number: ["10", "12", "14", "17", "19", "21/17", "23", " 11", "13"]
    }, {
      name: "????????. ??????????????????????",
      number: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "19??", "19??", "20", "21", "22", "22??"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["8", "10", "12", "14", "14??", "15/14-1", "15/14-2", "17/13"]
    }, {
      name: "????????. ??????????????",
      number: ["??/??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["4", "5", "6/2", "6/3", "6/4", "6/5", "7", "8"]
    }, {
      name: "????????. ????????????????????",
      number: ["1/1", "1/2", "2/1", "2/2", "3", "4", "5", "6", "7", "8", "9", "9??", "11??", "11??", "14", "15", "17", "19", "21", "23"]
    }, {
      name: "????????. ????????????????????",
      number: ["2", "4", "4??", "6", "8", "10", "10??"]
    }, {
      name: "????????. ????????????????????",
      number: ["2", "3", "4", "5"]
    }, {
      name: "????????. ????????????????????",
      number: ["2"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "4", "4??", "4??", "5", "5??", "9"]
    }, {
      name: "????????. ??????????????????????",
      number: ["4", "6", " 01 ????????????"]
    }, {
      name: "????????. ????????????????????????",
      number: ["4", "5", "6", "7/1", "7/2", "8/1", "8/2", "8/3", "9", "10", "11", "12", "13", "14", "15/1", "15/2", "16", "18", "20"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4", "6", "17", "20", "21/2", "21/34", "22", "24", "25", "27", "32", "34"]
    }, {
      name: "????????. ????????-????????????????????",
      number: ["98"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ??????????-????????????????",
      number: ["2", "2", "2??", "3", " 5", "5/2", "5/3", "6", "11/80", "12", "13", "14/115", "15", "17"]
    }, {
      name: "????????. ????????????????",
      number: ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23"]
    }, {
      name: "????????. ????????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "3??", "4", "4??/1", "5", "5??", "6/1", "6/2", "7", "7/1", "8/1", "8/2", "9", "10", "10/1", "10??", "11/1", "11/2", "12", "12??", "12??/2"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["2", "5", "7", "9"]
    }, {
      name: "????????. ????????????????????",
      number: ["1", "4", "6", "8"]
    }, {
      name: "????????. ??????????????????",
      number: ["1??", "3", "3??", "3??", "4", "5??", "6", "8", "10", "12", "14"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "5", "6", "7", "9", "10", "10??", "13", "14", "16", "18", "39"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4", "4/2", "9", "10", "10/2", "10/3", "17/10", "19", "32/1"]
    }, {
      name: "????????. ????????????????",
      number: ["3", " 8", "9", "10", "11", "13/26"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1??", " 4??"]
    }, {
      name: "????????. ??????????????????",
      number: ["5??"]
    }, {
      name: "????????. ???????????????????????? ??????????",
      number: ["4", "4/2", "5", "6", "7/1", "7/2", "8", "9", "10", "12", "14"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "15", "17"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "5", "6", "7", "8", "10", "12"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "3/1", "4", "5", "5??", "6", "6??", "7", "8", "8/1", "8/2", "8/3", "9", "10", "10??", "11", "12/34", "13/32", "16", "17", "18", "18??", "19", "20", "21", "24", "26"]
    }, {
      name: "????????. ????????????",
      number: ["1/13", "2/15", "2??", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13??", "14", "15", "16", "17"]
    }, {
      name: "????????. ??????????????",
      number: ["10/1", "10/2", "12/2", "14/1", "14/2", "21??"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2/18", "3", "3/5", "5??", "10", "12"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4", "5??", "6", "7", "8"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["3", "4"]
    }, {
      name: "????????. ??????????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "5", "7", "7??"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "4", "4??"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "4", "5", "6", "7", "7/1", "8", "9", "10", "10/2", "10/3", "11"]
    }, {
      name: "????????. ??????????????????????????????",
      number: ["3/1", "3/3", "5/1", "5??", "7/9", "7/10", "10/1", "10/2", "11", "12/1", "12/2", "13", "15", "17/26", "28"]
    }, {
      name: "????????. ???????????????? ????????????????",
      number: ["33/9", "34/1", "34/2", "34/3", "35", "36", "37", "37??", "39", " 1/65", "2", "3", "4", "5/1", "5/2", "6/1", "6/2", "7", "7/17", "8", "9", "9??/1", "9??/2", "9??/3", "10", "10/15-1", "10/15-2", "11??", "11/1", "11/2", "12", "12/18", "13/1", "13/2", "14??", "14??/1", "16", "16??", "19", "21/1", "21/2", "22/1", "22/2", "22/3", "23/1", "23/2", "24/1", "25", "26", "26??", "27", "28", "29", "30", "31/8", "32/1", "32/2"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["2/24", "4", "8", "12", "14", "16"]
    }, {
      name: "????????. ????????????????",
      number: ["27/15", " 1/10", "2/1", "2/8", "3", "4", "5", "5/2", "6", "7", "8/1", "8/2", "9", "10/1", "10/2", "11", "12/1", "12/2", "13", "14/7", "15/14", "15/3", "17", "19", "21/2"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["1", "2", "3", "4/1", "4/2", "22"]
    }, {
      name: "????????. ????????????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ????????????????????????",
      number: ["5"]
    }, {
      name: "????????. ???????????????????????? ??????????????",
      number: ["3", "5", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "18", "18??", "20", "22", "24", "41", "42", "43"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "3", "4/1", "4/2"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "5", "7", "9", "13??", "15", "19", "20"]
    }, {
      name: "????????. ????????????????",
      number: ["2??", "4??", "5", "6", "6??", "7", "9"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1", "2", "3", "4", "5", "6??", "7", "8", "9", "9/14", "10", "12", "14"]
    }, {
      name: "????????. ????????????????????",
      number: ["3/1", "3/2", "3/3", "5", "7"]
    }, {
      name: "????????. ???????????? ????????????",
      number: ["3", "4??", " 5"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2", "4", "6"]
    }, {
      name: "????????. ??????????????????",
      number: ["4", "6", "8", "40", "50", "52"]
    }, {
      name: "????????. ?????????????????????? ????????????",
      number: ["10", "12", "13/16", "14", "15", "15????????3", "17", "17/25", " 3????????1", "3????????2", "4", "5", "6", "8", "9"]
    }, {
      name: "????????. ????????????????????",
      number: ["1"]
    }, {
      name: "????????. ????????????????????",
      number: ["3/2", "3/3", "5/1", " 05 ??????????????", " 1", "2", "3/1", "4", " 6"]
    }, {
      name: "????????. ????????????????",
      number: ["2", "12", "14??", "18??", "19??", "19??", "19??", "20", "20??", "21??", "21??", "21??", "21??", "21??", "22", "22??"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "4", "5", "6", "6??", "7", "8", "9", "10", "11", "12", "14", "16"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "1??", "1??", "1??/2", "1??", "1/1", "1/2", "2/2", "2/3", "2/4", "2??", "2??", "2??/1", "3??", "3??/2", "3??/1", "3??", "4", "5??", "5??/2", "5??", "5??/2", "5??", "5??", "6??", "7", "7??", "7??", "7??/2", "7??/1", "7??/2", "7??/3", "7??/4", "7/1", "7/3", "8", "8??", "10", "14", "14/2", "16", "18", "18/2", "18/3", "18??", "18??", "20"]
    }, {
      name: "????????. ??????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ????????????????????",
      number: ["1", "3", "4", "6", "8", "8??", "10"]
    }, {
      name: "????????. ?????????????? ????????????????????",
      number: ["35/5", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "53", "55", "57", "59", "61", "63", " 1/1", "1/2", "3/1", "3/2", "3/3", "3/4", "4", "5", "6", "7", "8", "9/1", "9/2", "10/1", "10/2", "11", "13", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    }, {
      name: "????????. ????????????????",
      number: ["3??", "3??", "4", "4??"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "2??", "2??", "3", "4", "4??", "4??", "5", "8", "9", "9??", "10", "12", "14"]
    }, {
      name: "????????. ?????????????????????? ??????????????????",
      number: ["8"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4", "5", "6", "8", "10", "11", "14", "15/1", "15/2", "19", "21", "23", "25", "27"]
    }, {
      name: "????????. ??????????????",
      number: ["2", "3", "11", "11/1"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "3", "4", "4??", "5", "6", "6??", "6??", "7", "8", "9", "10", "11", "13"]
    }, {
      name: "????????. ??????????????",
      number: ["1/5", "2/7", "3", "4", "5", "6", "6/1", "6/8", "7", "7/5", "9", "9/1", "9/2", "10", "11/3", "12", "12/1", "12/2", "13", "14", "15", "16", "17", "17??", "18", "19", "21", "21??"]
    }, {
      name: "????????. ?????????????? ??????????????",
      number: ["3", "4", "6", "7", "8", "11", "11??", "12/1", "12/2", "12??", "14", "16"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "4", "9", "11", "24", "26", "52", "52??", "52??", "52??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["8", "9", "10", "14/11"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["2", "17", "19/1", "19/2", "19??", "21", "23"]
    }, {
      name: "????????. ????????????????????",
      number: ["4", "4??", "4??"]
    }, {
      name: "????????. ???????????????????? (????????????????)",
      number: ["1", "3", "5", "7", "11", "15", "17/1", "17/2", "19/1", "19/2", "23", "25", "27"]
    }, {
      name: "????????. ????????????????????????????????",
      number: ["3", "5"]
    }, {
      name: "????????. ???????? ????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7??", "8", "10", "12", "14", "16"]
    }, {
      name: "????????. ??????????????????????",
      number: ["8"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "4", "5", "6", "7", "8", "10??", "10/1", "10/2", "10/3", "10/4", "11", "12", "12??", "14??", "15"]
    }, {
      name: "????????. ??????'??????????-??????????????????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "10/2", "11", "12/1", "12/2"]
    }, {
      name: "????????. ??????????????????????????????",
      number: ["8", "9", "10", "11", "14", "16", "17"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2/7", "3", "5", "5/1", "7", "7/2", "8"]
    }, {
      name: "????????. ?????????????????? ????????????",
      number: ["23"]
    }, {
      name: "????????. ???????????? ??????????",
      number: ["1", "2", "2??", "3", "3??", "4", "5", "5??", "6", "6??", "7", "8", "8??", "9", "11", "11??", "13"]
    }, {
      name: "????????. ?????????????????????????? ??????????",
      number: ["1", "1??"]
    }, {
      name: "????????. ????????????-??????????'????????????",
      number: ["4", "6", "7", "7??", "7??", "10", "10??", "13??/1", "13??/2", "15??/1"]
    }, {
      name: "????????. ??????????????????",
      number: ["5", "7", " 1??", "1??", "1??", "2", "3", "4", "5??", "6", "8", "9", "10", "12"]
    }, {
      name: "????????. ????????????????",
      number: ["4", "6", "8", "9", "10", "12", "18"]
    }, {
      name: "????????. ????????????????????",
      number: ["7??", "7??", "9/5"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["1", "1??", "2", "3", "4", "5", "6", "8", "9", "10", "11", "12", "13", "13??", "14", "14??", "15"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2??", "3/7", "19"]
    }, {
      name: "????????. ??????????????????????????????",
      number: ["2??", "2??", "4??", "6??", "6/1", "6/2", "8/1", "8/2", "8/3", "10", "10??", "12", "14"]
    }, {
      name: "????????. ????????????????",
      number: ["2", "4", "5", "6"]
    }, {
      name: "????????. ??????????????????",
      number: ["2", "4", "6", "7", "9", "10"]
    }, {
      name: "????????. ??????????????????????",
      number: ["10", "12", " 3", "4", "5", "7/1", "7/2", "7/3", "8", "9/1", "9/2", "11/1", "11/2"]
    }, {
      name: "????????. ???????????????????????? ??????????",
      number: ["3", "4", "5", "6", "8"]
    }, {
      name: "????????. ??????????????????????",
      number: ["11", "11??", "13", "19", "22??", " 20", "22", " 3", "4", "5", "6", " 12"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ??????????????????",
      number: ["11/1", "11/2"]
    }, {
      name: "????????. ???????????????????????? ??????????",
      number: ["3", "4", "5"]
    }, {
      name: "????????. ????????????????????????",
      number: ["4", "6", "8", "10", "12"]
    }, {
      name: "????????. ????????????????????????",
      number: ["16", "18????????1", "18????????2", "18????????3", "20", " 17/31??", " 3", "3/1", "5", "5??", "5/2", "7", "9", "9??", "11", "13/23", " 6", "8", "10", "12", "14"]
    }, {
      name: "????????. ????????????????????????",
      number: ["16", "18/5"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["2", "3", "4/1", "4/2", "6", "6??", "7", "8/1", "8/2", "9", "11", "13", "15", "17"]
    }, {
      name: "????????. ????????????????????",
      number: ["4", "7", "8", " 10"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["7??"]
    }, {
      name: "????????. ?????????? ??????????????????",
      number: ["1??", "2??", "3", "4", "5", "8", "8??", "9", "10", "13"]
    }, {
      name: "????????. ???????????????????? ????????????????????",
      number: ["7", "1"]
    }, {
      name: "????????. ?????????????? ??????????",
      number: ["1"]
    }, {
      name: "????????. ????????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["1??", "3", "3??/1", "3??/2", "4", "5/1", "6", "7", "8", "9", "9??/1", "9??/2", "10", "11", "12", "13", "14", "15", "16/1", "16/2", "17", "17??", "18/1", "18/2", "20", "22", "24/1", "24/2", "26", "28"]
    }, {
      name: "????????. ?????????????????? ??????????",
      number: ["10", "12"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["2??", "3", "3/1", "3??", "4", "4??"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["12"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "3??", "4", "4??", "5"]
    }, {
      name: "????????. ?????????????????? ??????????????",
      number: ["3"]
    }, {
      name: "????????. ??????????????????????",
      number: ["4"]
    }, {
      name: "????????. ??????????????????",
      number: ["4"]
    }, {
      name: "????????. ??????????????????",
      number: ["3"]
    }, {
      name: "????????. ???????? ????????????",
      number: ["1", "3", "5"]
    }, {
      name: "????????. ????????????????",
      number: ["3"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["7"]
    }, {
      name: "????????. ????????????????????????",
      number: ["17", "19/5", " 16", "16??", "16??", "16??", "18", " 2/8", "4", "4/8", "4/8??", "4/8??", "4/9", "12??", "12??", "15", "15/1", "15??"]
    }, {
      name: "????????. ???????????? ????",
      number: ["3"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "3", "4", "6", "7", "7??", "14", "16", "18", "20", "22", "24", "26", "26??"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "7??", "8", "9", "12", "13", "14", "14??", "14??", "14??", "14??", "15", "15??", "15??", "16", "16??", "16??", "17", "18", "18??", "19", "20", "21", "22"]
    }, {
      name: "????????. ????????????????",
      number: ["4", "6"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "8", "8??", "8??", "10??", "13", "14??", "16", "22", "26??", "28??", "28??", "34"]
    }, {
      name: "????????. ????????????????",
      number: ["3"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3/1", "3/2", "4", "5", "6", "6/1", "7", "8", "9", "10", "11", "12/1", "12/2", "13", "15", "16/2", "17", "19"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "4/30", "5", "7", "8", "12", "12??", "17"]
    }, {
      name: "????????. ????????????",
      number: ["1", "2", "3", "5??"]
    }, {
      name: "????????. ??????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "1??", "2", "2??", "2??", "2??", "2??", "4", "4??", "4??", "4??", "5", "6", "7", "9", "11", "11??", "11??"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["8", "8??"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "4", "5", "7/1", "7/2"]
    }, {
      name: "????????. ?????????????? (????????????????)",
      number: ["1", "1??", "2", "3", "4", "5", "6", "8", "10"]
    }, {
      name: "????????. ?????????????? (????????????????)",
      number: ["1", "2", "4", "8"]
    }, {
      name: "????????. ??????????????",
      number: ["1", "2", "3", "5", "6", "6??", "7", "8", "9", "10", "10??", "10??", "11", "11??", "11??", "12", "14", "14??"]
    }, {
      name: "????????. ?????????????????????? ??????????????",
      number: ["14", "18", " 3"]
    }, {
      name: "????????. ????????????????????",
      number: ["1", "2", "3", "4", "6", "8", "10", "12", "13", "14", "15", "16", "17"]
    }, {
      name: "????????. ??????'??????????????????",
      number: ["6"]
    }, {
      name: "????????. ????????????????????",
      number: ["2", "4", "6"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "3", "3/1", "3/2", "4", "4/1", "4/2", "5", "5/1", "5/2", "6", "7", "7/1", "7/2"]
    }, {
      name: "????????. ????????????????",
      number: ["2??/1", "2??/2", "2??/3", "3", "4", "5??/1", "5??/2", "5/1", "5/2", "6/1", "6/2", "7", "8", "8??/2", "10/1", "10/2", "12/1", "12/2", "13", "14", "14/2", "14/3", "15", "16/1", "16/2", "18/1", "18/2", "20", "20??", "20/1", "20/2"]
    }, {
      name: "????????. ??????????????????????????????",
      number: ["1"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3/1", "3/2", "4", "5", "6/8", "7", "9", "11", "66"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "3??", "4", "4??", "5", "6", "6??", "7", "7??", "7??", "7??", "7??", "7??", "8", "9", "10", "11", "11??", "12", "12/2", "13", "13??", "15", "15??", "16", "16??", "17", "17??", "18", "18??", "19", "19/2", "19??/1", "19??/2", "20", "21", "22", "24", "24??", "26", "26??", "28/20"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2"]
    }, {
      name: "????????. ????????????????????",
      number: ["2", "3", "5"]
    }, {
      name: "????????. ??????????????????????????????",
      number: ["2", "3", "4", "5", "6"]
    }, {
      name: "????????. ??????????????????????????????",
      number: ["2", "3", "4", "5", "6", " 24/15"]
    }, {
      name: "????????. ????????????????????????????????",
      number: ["3", "4", "5", "6/1", "6/2", "7", "8", "9/2", "9/1", "10", "11", "12"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2/2", "4", "4/2", "4??", "5", "6", "7", "8", "8/2", "9", "10", "12"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "4", "5/1", "5/2", "6", "7/1", "7/2", "8", "9", "10/1", "10/2", "11", "12"]
    }, {
      name: "????????. ??????????????",
      number: ["1", "1??", "2", "3", "3/2", "4", "5", "5/2", "6", "6??", "8", "8/2", "9", "10", "11", "16"]
    }, {
      name: "????????. ??????'???????????? ??????????",
      number: ["7", "9", "11/12", "13", "14"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["15", " 25", " 27", "28"]
    }, {
      name: "????????. ??????????????",
      number: ["2", "3", "5", "6", "7", "7??", "10", "12", "14", "16", "18", "20", "20??", "22", "24", "24??", "26", "28", "30", "32", "34", "38", "40", "44", "46", "50", "52", " 3??", " 5??"]
    }, {
      name: "????????. ????????????????????",
      number: ["1"]
    }, {
      name: "????????. ????????????????",
      number: ["4"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1/25", "9"]
    }, {
      name: "????????. ??????????????",
      number: ["19"]
    }, {
      name: "????????. ????????",
      number: ["1", "3", "5", "7", "9"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2", "4", "6", "7", "8", "9", "9??", "10", "11", "12", "13", "13??", "14", "15", "17", "25", "27", "27??", "29", "30"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["17", "20", "21", " 4", "7", "8", "9", "9??", "9??", "10/2", "12", "14", "21/13", "24/5"]
    }, {
      name: "????????. ????????????????",
      number: ["1??", "3", "3/18", "4", "6", "6/1", "6/2", "7", "9", "9/1", "9/2", "9/3", "11", "11??", "13", "15", "16", "17/6", "18", "18/1", "18/2", "18/3", "20", "20/1", "20/2", "22", "22/2", "23", "24", "24/1", "24/2", "24/3", "24/4", "26", "26/2", "28", "30", "31/2", "32", "34", "34/2", "36", "38", "40", "42", "42/1", "42/2"]
    }, {
      name: "????????. ????????????????",
      number: ["3/2??", "5/1", "5/2", "6", "7", "8", "9", "11/1", "11/2", "11/3", "15/1", "15/2", "15/3", "19??"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "3??", "5", "5??", "7/1", "7/2", "9??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4/1", "4/2", "5", "7", "7/2", "9??", "9??/2", "11/1"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "4", "5", "6", "8", "10", "12", "14", "16"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1", "1/1", "1??", "1??", "1??", "2", "2??", "3", "3??", "3??", "3??", "3??", "3??", "3??", "4", "5", "5??", "5??", "6", "7", "8", "9", "10", "11", "12", "12??", "13", "14", "15", "15/1", "16", "16??", "17", "18", "19", "20??", "21", "23", "25", "25??", "27", "29", "31", "31??", "33", "35", "37"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "3/1", "3/2", "4/1", "4/2", "7", "8", "9/1", "9/2", "10/1", "10/2", "11/1", "13", "17", "17??", "19"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "5/7", "6", "8", "11", "11??", "18", "19", "19??", "19??", "19??"]
    }, {
      name: "????????. ????????????????",
      number: ["2", "2??", "2??", "2??", "4", "6", "8", "8??", "8??", "10", "10??", "12", " 2??"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "4", "5", "6", "6??", "8", "10", "13"]
    }, {
      name: "????????. ????????????????",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "4", "6", "7/26", "9"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["4", "6", "7", "7/9", "10", "13/19", " 03 ??????"]
    }, {
      name: "????????. ????????????????????",
      number: ["2", "4"]
    }, {
      name: "????????. ??????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10", "12"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "5"]
    }, {
      name: "????????. ????????????????????????????????",
      number: ["3", "5", "5??", "7", "7??", "9", "9??", "11"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "2/1", "3", "3/2", "5", "5/1", "5/2", "5/3", "7", "9/1"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["3", "3/2", "3??", "5", "5??", "18", "19/3"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "5", "7"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "3??", "3??", "11/1"]
    }, {
      name: "????????. ????????????????",
      number: ["3/1", "3/2", "4", "5", "6", "7", "8"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1/2", "1/3", "3", "5", "6/1", "6/2", "6/4", "6??", "7", "8", "9", "10", "11/1", "12", "13", "14", "15", "16", "16??", "17", "18", "19"]
    }, {
      name: "????????. ??????????????",
      number: ["1", "2", "2??", "3", "4/1", "4/2", "5", "7", "7??", "9", "11", "13", "15", "17", "19", "21", "23", "25"]
    }, {
      name: "????????. ????????????????????",
      number: ["1/5", "3", "3/1", "3/2", "6"]
    }, {
      name: "????????. ??????????????",
      number: ["1", "2", "3", "3??"]
    }, {
      name: "????????. ????????????????????",
      number: ["2/61", "3", "4", "5", "6", "6??", "7", "8", "9", "10", "10??", "11", "12", "13??", "14"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "2", "3", "5", "7", "9"]
    }, {
      name: "????????. ????????????????????",
      number: ["4", " 3", "3/1", "3????????5", "3??", "7", "7????????1", "7????????2", "7????????3", "7????????4"]
    }, {
      name: "????????. ??????????????????????",
      number: ["8/9", "9", "10", "11", "12", "13", " 3", "3/8", "4", "5/6", "6"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "3", "4", "6/1", "6/2", "6/3", "8", "9", "10", "11", "13/1", "13/2", "15", "17", "19/1", "19/2", "19??", "21", "23/1", "23/2", "25", "27/1", "27/2", "27??", "29", "29/19", "57??", "69"]
    }, {
      name: "????????. ???????????? ??????????????",
      number: ["4", "5"]
    }, {
      name: "????????. ?????????????????????? ????????????",
      number: ["??/??"]
    }, {
      name: "????????. ????????????????",
      number: ["7", "9", "9/2", "11", "11/21", " 4", "6??", "6??", "6??/1", "6??/1"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["1", "5"]
    }, {
      name: "????????. ?????????????? ??????????????????",
      number: ["1", "1??", "1??", "2", "3/1", "3/2", "4", "4??", "5", "6", "7/1", "7/2", "8"]
    }, {
      name: "????????. ????????????????????????????????",
      number: ["3/1", "3/2", "5", "7", "7/1", "9", "11", "13/1", "15/1", "15/2", "17", "19", "23", "23/1", "25??", "25/1"]
    }, {
      name: "????????. ????????????????????????",
      number: ["4"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "4", "5", "6", "7", "10", "12", "13", "14"]
    }, {
      name: "????????. ??????????????????",
      number: ["7", "12", "14"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "3??", "4", "4??", "5", "6??"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "3??"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["7"]
    }, {
      name: "????????. ????????????????",
      number: ["4", "5", "6/2", "6/3", "7", "8", "9", "20/1", "20/2"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1", "1??", "1??/2", "1??", "3", "3??", "4", "5/1", "5/2", "5/3", "5/4", "5/5", "5??", "6/1", "6/2", "7??", "7??", "7/1", "7/2", "8", "8??", "9", "9??", "10", "11", "12", "14", "16/1", "16/2", "16/3"]
    }, {
      name: "????????. ??????????????????",
      number: ["9", "11", "13", "15", " 1", "3", "5", "5/1", "7", "7/1"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["1/33", "2??", "3??", "3??", "4", "4??", " 5??"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "8/1", "8/2", "8/3", "10/1", "10/2"]
    }, {
      name: "????????. ??????????????????",
      number: ["2??", "4", "6", "10", "10??", "11", "12"]
    }, {
      name: "????????. ????????????????",
      number: ["10", " 5", "6", "7", "9", "12"]
    }, {
      name: "????????. ???????????????? (????????????????)",
      number: ["1", "1"]
    }, {
      name: "????????. ????????????????????",
      number: ["7", "9", "11", "11??", "13", "13??"]
    }, {
      name: "????????. ????????????",
      number: ["2??", "5", "5??"]
    }, {
      name: "????????. ??????????????????",
      number: ["2", "2??", "10", "10??", " 4", "4??", "6", "8"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "4", "19"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1", "2", "3", "4", "4??", "5", "6", "8", "8??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["13", "14", "16", "17", "17??", "19", "19??", "20", "22"]
    }, {
      name: "????????. ??????????????????",
      number: ["5", "6", "8", "9??", "9??", "9??", "9??", "10", "12", "14"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "4", "5"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "4", "5", "6", "10"]
    }, {
      name: "????????. ????????-??????????????????",
      number: ["1", "3??", "4", "4??", "6", "6??", "6/2", "6/3", "7", "8", "9/1", "9/2", "10", "11"]
    }, {
      name: "????????. ??'??????????????????????",
      number: ["3", "3??", "4", "5", "6", "7"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "2", "3", "3??", "4", "4??", "5", "6", "7", "8", "10", "12/16", "18", "19"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "4", "6", "8"]
    }, {
      name: "????????. ??????????????????",
      number: ["6", "9", "11", "13", "15"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "3??", "4", "6", "7", "8/12", "8??", "8", "9", "10", "10??", "11", "12", "13", "14", "15", "17", "19/34"]
    }, {
      name: "????????. ????????????????????",
      number: ["2", "4", "6", "10", "18", "18??"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "6"]
    }, {
      name: "????????. ????????????",
      number: ["2", "3", "4", "5/2", "5/3", "6", "7", "8", " 1"]
    }, {
      name: "????????. ??????????????",
      number: ["1", "1??", "2", "3", "3/2", "4", "5", "5??", "6", "7", "7??", "8", "8??", "9", "10", "11", "11??", "11/1", "12", "14", "15", "15??", "15??", "16", "18"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "4", "5", "6", "8", "8??", " 10"]
    }, {
      name: "????????. ????????????????????",
      number: ["3", "5", "5??", "7", "9", "11"]
    }, {
      name: "????????. ??????????????",
      number: ["3/22", "5", "7/1", "7/2", "7/3", "7/9", "11", "13", "13/2", "13/3", "15"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3/1", "3/2", "3??", "3??/1", "3??/2", "4/2", "5??", "5/1", "5/2", "6", "7", "7/1", "7/2", "8/1", "8/2", "10/1", "10/2", "12", "14"]
    }, {
      name: "????????. ????????????????????",
      number: ["4", "6", "8", "10"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "14", "16", "18", "20", "22"]
    }, {
      name: "????????. ????????????????????",
      number: ["8", "10", "12", " 20", "22", "24"]
    }, {
      name: "????????. ????????????",
      number: ["1", "3/1", "3??", "4", "5/1", "5/2", "5", "7", "9", "10??", "11", "13", "15", "17/1", "17/2", "19"]
    }, {
      name: "????????. ??????????????",
      number: ["18"]
    }, {
      name: "????????. ?????????????? (????????????????)",
      number: ["1", "2", "3", "4", "4??", "5", "5??", "6", "7", "9", "11"]
    }, {
      name: "????????. ?????????????? (????????????)",
      number: ["1", "1??", "2", "2??", "3", "3??", "4", "5", "5??", "6", "6??", "7", "9", "10", "11", "12", "13", "14", "15", "16", "16??", "18", "20", "22", "24", "26", "26??", "27", "29", "33", "39", "43/16", "59", "59??", "69"]
    }, {
      name: "????????. ?????????????? 1",
      number: ["1", "2", "3", "4", "4??", "5", "5??", "6", "7", "9", "11"]
    }, {
      name: "????????. ?????????????? 2",
      number: ["1", "3", "4", "5"]
    }, {
      name: "????????. ?????????????? 3",
      number: ["2", "4", "6", "8", "10", "12"]
    }, {
      name: "????????. ?????????????????????? ????????????",
      number: ["1/2", "1/3", "3", "3??", "3??/1", "3??/2", "5", "5??", "7", "9", "11", "13"]
    }, {
      name: "????????. ????????????????",
      number: ["4/1", "4/2", "6", "7", "8", "8??", "10/1", "10/2", "10/3", "12", "14"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "8/1", "8/2", "9", "10/1", "10/2", "10/3", "15", "17", "17??/1", "17??/2", "17??", "17??", "17??"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["2", "3??", "9"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1/2??", "4/1", "4/2", "6", "6??", "8", "10/1", "10/2", "12/1", "12/2", "16"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "7", "14", "28"]
    }, {
      name: "????????. ????????????????????",
      number: ["4", "5", "7", "8", "9", "10", "11", "12", "14", "14/2", "18", "18/3"]
    }, {
      name: "????????. ??????????????????????????????????????????",
      number: ["1", "2", "4", "4??"]
    }, {
      name: "????????. ????????????????????",
      number: ["3/1", "3/2", "5", "6", "7/1", "7/2", "8", "10", "11", "12", "13", "14", "15", "16", "18/1", "18/2", "20/19"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["2", "4", "6", "8", "12", "14", "16", "18", "20", "22", "24", "26"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2/13", "7", "9", "11", "11/1"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "4", "5", "6", "7", "8", "9", "10", "10??", "11", "12"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "3??", "4", "6", "8", "8??"]
    }, {
      name: "????????. ??????????????????",
      number: ["1", "3", "5", "6", "7", "8", "9", "10", "11", "12", "13/5"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "1??", "2", "3", "4", "5", "6", "7", "8", "8??"]
    }, {
      name: "????????. ??????????????????????????????",
      number: ["3", "4", "5", "6", "7", "9", "11"]
    }, {
      name: "????????. ????????????????????",
      number: ["2/10", "10/2"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["01 ??????????"]
    }, {
      name: "????????. ????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ??????????????????",
      number: ["3/9", "4/7", "5", "6/6", "7/1", "8", "8??", "9/1", "9/2", "10", "11", "12"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "2", "3", "10", "11", "12", "13", "14", "15", "15??", "16", "17", "18", "19", "20", "21", "23"]
    }, {
      name: "????????. ????????????????",
      number: ["1", "2", "4", "6", "10"]
    }, {
      name: "????????. ?????????????? ????????????",
      number: ["8", "8/20", "10", "10/2"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4/13", "6/14", "7", "8", "8/2", "9", "10", "10/2"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "3??", "4", "5", "7", "8", "9", "10", "11", "11??", "12"]
    }, {
      name: "????????. ??????????????????????",
      number: ["10/1", "10/2", "12/1", "12/2", "14", "16"]
    }, {
      name: "????????. ????????????????????????",
      number: ["2", "3", "5", "7", "9", "11", "13"]
    }, {
      name: "????????. ????????????????????",
      number: ["8", " 1", "2"]
    }, {
      name: "????????. ????????????????????",
      number: ["1", "3??", "4/10", "10"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2??"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["2/1", "2/2", "4", "5/1", "5/2", "6/1", "6/3", "7/1", "8", "8/2", "11/1", "19/1"]
    }, {
      name: "????????. ????????????????????????????",
      number: ["1", "1??", "1??", "1??", "1??", " 6"]
    }, {
      name: "????????. ??????????????????????",
      number: ["4/47", "6/48", "8", "10", "12/65"]
    }, {
      name: "????????. ????????????????????????",
      number: ["11"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "4/6", "5", "9??/1"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1/8", "4/1", "4/2", "5"]
    }, {
      name: "????????. ??????????????????",
      number: ["1/1", "1/2", "2", "3/1", "3/2", "3??/1", "3??/2", "4", "5??", "5/1", "5/2", "6", "7", "8"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "5", "7/15", "30/6", "104/2"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "4", "5", "6", "8"]
    }, {
      name: "????????. ??????????????????",
      number: ["1", "2"]
    }, {
      name: "????????. ??????????????????",
      number: ["2??", "3"]
    }, {
      name: "????????. ?????????????????? 2",
      number: ["11", "17", "20"]
    }, {
      name: "????????. ?????????????????? 3",
      number: ["3", "4", "6", "8"]
    }, {
      name: "????????. ??????????????????",
      number: ["3", "3??", "5", "5??"]
    }, {
      name: "????????. ????????????????????????",
      number: ["7"]
    }, {
      name: "????????. ????????????????????",
      number: ["15", "16", "17", "18", "26", "28", " 1/5", "9/1"]
    }, {
      name: "????????. ????????????????????????",
      number: ["8", " 8??", "10", "16", "16??", "18", " 6"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3", "5", "6", "6??", "7", "9", " 8", "8??", "10", "11", "13", "13??", "15", "16", "16??", "18", "18??", "20", "23", "25", "27", "29", "31"]
    }, {
      name: "????????. ??????????????",
      number: ["1??", "2??", "3/1", "4??", "5", "6", "6/1", "7", "9"]
    }, {
      name: "????????. ????????????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ????????????????????",
      number: ["1/1", "1/2", "2", "4", "5/1", "5/2", "6/1", "6/2", "6??", "7", "8??", "9??", "9/37", "10/1", "10/2", "12/16", "13", "15", "16/1", "16/2", "18/1", "18/2", "20"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["12", "14", "14??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["9", "13"]
    }, {
      name: "????????. ???????????? ??????????",
      number: ["1", "2", "3", "4", "4??", "5", "6", "7", "7??", "8", "9", "10", "11", "12", "13", "14", "15", "17", "19", "21", "23", "25", "27", "29"]
    }, {
      name: "????????. ???????????? ?????????? 1",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "11"]
    }, {
      name: "????????. ???????????? ?????????? 2",
      number: ["1", "2", "3", "4", "6"]
    }, {
      name: "????????. ???????????? ?????????? 4",
      number: ["1", "3"]
    }, {
      name: "????????. ??????????????????????",
      number: ["06 ????????????"]
    }, {
      name: "????????. ??????????????",
      number: ["3", "4", "5/1", "5/2", "6", "7", "8", "10", "12/27"]
    }, {
      name: "????????. ??????????????????????",
      number: ["1", "1??", "3", "3??", "3/1", "3/2", "4", "4??", "5", "5??", "6", "7??", "8", "9", "10"]
    }, {
      name: "????????. ??????????????",
      number: ["2", "3", "4", "6", "8"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["1", "3", "5", "10", "13/1", "13/2", "15", "16", "17", "18", "19"]
    }, {
      name: "????????. ???????????? ????????????????",
      number: ["1", "14??", "16", "44??"]
    }, {
      name: "????????. ????????????",
      number: ["4"]
    }, {
      name: "????????. ??????????????????????",
      number: ["7/14", "9/2", "11", "11/2", "13", "13??", "15/1"]
    }, {
      name: "????????. ????????????????????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }, {
      name: "????????. ??????????????????",
      number: ["2", "6", "8/9", " 4"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3/1", "3/2", "4", "5/1", "5/2", "6", "7/1", "7/2", "8"]
    }, {
      name: "????????. ??????????????????",
      number: ["6", "8", "10", "12", "16"]
    }, {
      name: "????????. ???????????????? ????",
      number: ["15", "17", "19", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", " 1", "2/41", "3", "4", "5/1", "5/2", "6", "7/1", "7/2", "8", "9", "10/1", "10/2", "11", "11/2", "12", "13/1", "13/2", "14", "16", "18", " 25/1", "25/2"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2", "6", "18"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["1", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
      name: "????????. ??????????????????",
      number: ["1/31", "2/33", "3/1", "4", "4??", "4??", "5/2", "6", "8", "8??", "9/2", "10", "10??", "11", "11??", "12", "13", "14", "14??", "15", "15/1", "16", "18", "17", "19", "20", "21", "22", "22??", "23", "23??"]
    }, {
      name: "????????. ????????????????",
      number: ["1/17", "2??", "7??", "8", "12", "14/1", "14/2", "15", "16", "17", "18/1", "18/2", "21", "23/19"]
    }, {
      name: "????????. ??????????????????????????????????",
      number: ["2/13", "7/5"]
    }, {
      name: "????????. ????????????????????",
      number: ["1", "2/1", "2/2", "2??", "3/1", "3/2", "4", "5", "6", "7", "8", "10", "10/1", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21/1", "21/2", "22/1", "22/2"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["1", "1??", "3", "3??", "5", "7", "7??", "9", "10", "11", "12", "13", "15"]
    }, {
      name: "????????. ???????????? 1",
      number: ["1", "2", "3", "4", "5", "6", "6??", "7", "8", "9", "9/1", "10", "11", "11/1", "12", "13", "14"]
    }, {
      name: "????????. ???????????? 2",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16"]
    }, {
      name: "????????. ????????????????????",
      number: ["2", "3", "4", "6", "8", "9", "10", "11"]
    }, {
      name: "????????. ????????????????????????",
      number: ["3"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["3", "7/33"]
    }, {
      name: "????????. ??????????????????????",
      number: ["10", "12", "13", "13??", "15", "15??", "17", "19", "19??", "21"]
    }, {
      name: "????????. ???????????????? (????????????)",
      number: ["1", "2", "2??", "3", "3??", "4", "5", "6", "6??", "7", "7??", "8", "8??", "9", "9??", "10", "11", "12", "13", "14", "14??", "14??", "15", "15??", "16", "16??", "17", "17??", "18", "19", "20", "21", "23", "25", "26", "26??", "27", "28", "28??", "29", "29??", "31", "31??", "33", "35", "36", "37", "39", "41", "41??", "43", "43??", "45", "47", "49", "51", "53", "55", "57"]
    }, {
      name: "????????. ???????????????? ????????????",
      number: ["3", "4", "5", "7/1", "8", "8??", "8??", "9/2", "13", "13/21", "13/21??", "13/21??", "16", "18/19", " 12"]
    }, {
      name: "????????. ???????????????? ???????????? (????????????????)",
      number: ["12??", "23", "23??", "25", "29", "31", "33"]
    }, {
      name: "????????. ??????????????????????",
      number: ["3", "5", "11", "11??", "12", "14"]
    }, {
      name: "????????. ????????????????????",
      number: ["2??/1", "2??/2", "2??", "2??", "2??", "2??", "2??"]
    }, {
      name: "????????. ???????????????? ??????????",
      number: ["3", "3??"]
    }, {
      name: "????????. ????????????????",
      number: ["??/??"]
    }, {
      name: "????????. ??????????????????????",
      number: ["2", "3", "3/3", "4", "5", "6"]
    }, {
      name: "????????. ????????????",
      number: ["3", "4", "5", "6", "7/1", "7/2", "8", "9", "10", "12", "14", "16"]
    }, {
      name: "????????. ??????????????????",
      number: ["3/1", "3/2", "5", "6/1", "6/2", "7", "9/1", "9/2", "11"]
    }, {
      name: "????????. ??????????????",
      number: ["3", "3??", "4", "5"]
    }, {
      name: "????????. ?????????????????????? ????????????",
      number: ["4??", "6??", "6??"]
    }, {
      name: "????????. ??????????????????",
      number: ["11", "13", "25", "27", "28", "28??", "30", "30??", "32", "34??", "35", "37", "38", "40"]
    }, {
      name: "????????. ?????????????????? (????????????????)",
      number: ["1", "3", "4", "5", "6", "7", "8", "11", "13", "15", "18", "20", "22", "24", "26", "28"]
    }, {
      name: "????????. ????????????????????????",
      number: ["1", "1/3??", "4", "5/2??", "7/9"]
    }, {
      name: "????????. ????????????????",
      number: ["3", "4/1", "4/2", "5/1", "5/2", "6/1", "6/2", "6/3"]
    }, {
      name: "????????. ??????????????????????????",
      number: ["9", "9??", "10", "11"]
    }, {
      name: "????????. ??????????",
      number: ["3/1", "3/2", "4", "5", "6/1", "6/2", "7", "8/1", "8/2", "10/1", "10/2", "12/1"]
    }, {
      name: "???????????? ????????????????????????",
      number: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28"]
    }, {
      name: "???????????? ????????????????????",
      number: ["1", "6", "8", "8??", "10"]
    }, {
      name: "???????????? ????????????????????????????????",
      number: ["3"]
    }, {
      name: "???????????? ?????????????????? ??????",
      number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "23"]
    }, {
      name: "???????????? ????????????????????",
      number: ["??/??"]
    }, {
      name: "???????????? ????????????????????????",
      number: ["??/??"]
    }, {
      name: "???????????? ????????????????",
      number: ["4/1", "4/2", "5", "6", "7", "8", "8??/1", "10/1", "10/2", "10/3", "12", "14"]
    }, {
      name: "???????????? ??????????????-??????????????????????",
      number: ["3", "8", "22", "22??", "26", "28", "30", "32", "34"]
    }, {
      name: "??????????. ???????????? ????????????",
      number: ["1??", "1??/1", " 1??", "1??", "1??", "1??", " 10", "10??", "12", "12??", "14", "14??", "16", " 1??", "1??/1", " 1??", "1??", " 19", "19/1", " 3", "3??", "3??/1", "3??/2", "3??", "3??", "3??/1", "3??/2", "3??/3", "3??/4", "3??", "3??", " 5", "5??", "5??", "5??", "5??", "5??", "5??", "7", "7??", "7??/1", "7??/2", "7??", "7??/1", "7??", "7??", "7??", "7??", "7??", "7??", "9", "9/1", "9??", "9??/1", "9??", "9??", "9??", "9??", "9??", "9??", "9??", "9??/1", "9??/2", " 1??", "8??", " 28", "28??", "28??", "28??", "30", "32", "32??", "32??", "34", "34??", "34??", "36", "36??", " 6??", "24/1", "26"]
    }, {
      name: "??????????. ??????????????????????",
      number: ["3??", "5??", "7??", "8", "9??", "10??", "15", "17", "18??", " 25", " 87", "89", "89??", "93", " 1", "1??", "1??", "2", "3", "5", "5??", "7", "9", "9/1", "11", "11??", "13", "13??", "17", "17??", "19", "20", "20??", "20??", "21", "21??", "22??", "22??", "22??", "23", "23??", "24", "25", "27", "29", "31", "32", "33", "35", "37", "37??", "39", "41", "43", "47", "47??", "49", "61", "63", "65", "67", "67??", "67??", "67??", "67??", "69", "71", "71??", "77", "79", "81", "83", "85", " 3??", "42??", " 31/33", "33"]
    }, {
      name: "??????????. ???????????????? ????????????????",
      number: ["15", "17", "17??", "23", "23??", "28??", "30", "30??", " 22", "22??", "22??", "22??", "24", "24??", "24??", "24??", "26", "26??", "26??", "26??", " 14", "16", " 2", "4", "4??", "6", "6??", "8", "8??", "8??", "10", "10??", "11??", "12??", "13??", "14??", " 2??", "2??", "2??", "4??", "4??", " 1??", "3", "3??", "5", "5??", "9", "11", "11??"]
    }, {
      name: "??????????. ????????????????????????",
      number: ["1", "3??", "5", "6", "8??", "13", "15", "17", "17??", "19"]
    }, {
      name: "??????????. ??????????????????",
      number: ["16/50", "18", "18??", "18??", "20", "22", "22??", "22??", "24??", "24/93", "61", "71/2", "73", "75", "77/1", "79/2", "81", "83", "85", "87", "89", "91/1", "93/2", " 95", "95??", "95??", "95??", "95??", "95??", "95??", "97", "103", " 1", "3", "4", "5", "6/1", "7", "8", "8??", "9", "10", "10??", "11", "12", "12??", "12??", "13", "14/45", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49/2", " 51", "55", "59", "67", "69", " 26/54", "28", "28??", "28??", "28??", "28??", "30", " 32", "32??", "34", "36", "36??", "36??", "38", "38??", "38??", "38??", "40", "40??", "42", "44", "46", "46??", "50", "52", "52??", "52??", "107", "107??"]
    }, {
      name: "??????????. ???????????????? ????????",
      number: ["21", "23", "27", " 12/1", "12??", "14", "14??", "14??", "16", "18", "18??", "18??", "19", "19/1", "20", "20??", "20??", "22", " 2", "2/35", "2??", "3", "3??", "4", "4??", "5/2", "6", "7", "8", "8??", "8??", "9", "9??", "10/2"]
    }, {
      name: "??????????. ???????????? ??????????????????????",
      number: ["35", "35/1", "35??", "37", "37/1", "37/2", "37/3", "39", "39/1", "39??", "39??", "39??/1", "39??", "39??/1", "39??/2", "39??", "41", "43", "43??", "43??", "43??/1", "43??", "43??", "45", "45??", " 1", "1/1", "1/2", "1??", "1??/1", "1??/2", "1??/3", " 2", "2/37", "2??", "2??", "2??", "2??", "3??????????1", "2??????????2", "2??/1", "2??/2", "2??", "4????????1", "4????????2", "4????????3", "4????????4", "4????????5", "4????????6", "4????????7", "4????????8", "4????????9", "4??", "4??", "6????????1", "6????????2", "6????????3", "6????????4", "6????????5", "6????????6", "6????????7", "6????????8", "6??????????1", "6??????????2", "6??????????1", "6??????????2", "6??", "6??", "6??"]
    }, {
      name: "??????????. ???????????? ??????????????????????",
      number: ["13", "13/1", "13/2", "13??", "13??", "15", "15??", "15??", "17", "17??", "19", "19/1", "19??", "19??", "19??", "19??", "21/38", " 7", "7/1", "7/2", "7??", "7??", "8????????1", "8????????2", "8????????3", "8????????4", "8????????5", "8????????6", "8????????7", "8????????8", "8????????9", "8??", "8??", "9", "9??", "9??", "10", "10??????????1", "10??????????2", "10??????????3", "10??????????4", "10??????????5", "10??????????6", "10??????????7", "10??????????8", "10??", "11", "11??", "11??", " 12", "12??", "12??", "12??", "12??????????1", "12??????????2", "12??", "12??", "12??", "12??", "12??", "12??", "12??", "14", "14??", "14??", "14??/1", "14??", "14??", "14??/1", "14??", "14??/1", "14??/2", "16", "16/1", "16??", "16??", "16??/1", "16??", "16??/1", "16??/2", "16??", "16??????????1", "16??????????2", "18", "18/20", "18??", "18??", "18??", "23/27", "23??", "25", "25/1", "25??", "25??", "27", "27/1", "27/2", "27/3", "27??", "27??/1", "27??", "27??/1", " 20", "20??", "20??/1", "20??/2", "20??/3", "20??", "20??/1", "22", "22/1", "22/2", "22/3", "22/4", "22/5", "22/6", "24", "24/1", "24/2", "24??", "24??/1", "24??/2", "24??/3", "24??", "24??", "26", "26??", "26??/1", "26??/2", "28", "28??", "30", "30??", "32", "32??", "32??", "32??", "34", "36", "38", "40", "40/1", "40/2", "40/3", " 42", "42??", "42??/1", "42??", "42??", "44", "44??", "44??/1", "44??/2", "44??/3", "44??/3", "44??/4", "44??/5", "44??/6", "44??/7", "46", "46/1", "46/2", "46??", "46??/1", "46??/2", "46??", "46??", "46??", "46??", "46??/1", "47", "47??", "48", "48??", "49", "49??", "49??49??", "49??", "51", "51/1", "51/2", "51??", "51??", "51??", "53", "53??", "53??", "53??/1", "55", " 50", "50??", "52", "52/1", "52/2", "52/3", "52??", "54", "54??", "54??", "56", "56/1", "56??", "56??", "56??", "56??/1", "57", "58", "58??", "58??", "59", "59??", "60", "61", "61??", "61??", "62", "63", "63/1", "63??", "63??", "63??", "64", "65", "65/1", "65/2", "65/3", "65/4", "65/5", "65/6", "65/7", "65??", "65??", "65??", "65??", "65??", "65??"]
    }, {
      name: "??????????. ???????????????? ??????????????????",
      number: ["2", "2??", "4??", "4??", "4??", "4??", "6", "6??", "8", " 1", "1/19", "1/20", "3", " 18", "20", "24", "28", " 7", "9??", "33", "35", "37", "39", "40", "41??", "42", "42/2", "42??", "42??", "43", "43??", "44", "45", "47", "49", "51", "53", "55", "55??", "57", "59", "61", "67", " 12", "14", "16", "22", " 9??", "9??", "13", "13??", "15", "17", "19", "21", "23", "25", "27", "29", "31", "31??", " 26", "30", "32", "34", "36", "36??", "38", " 5", "9", "11", "12", "12??", " 8/1", "8??", "8??", "8??", "10/1", "10/2", "10/3", "10/4", "10/5", "10/6", "12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7", "12/8", "12/9", "12/10", "12??", "12??/1", "12??/2", "12??/3", "12??/4"]
    }, {
      name: "??????????. ??????????????????????????",
      number: ["13", "15", "15??", "15??", "23", "25", "27", "59??", "59??", " 3", "5", "6", "8", " 17", "17??", "17??", "19", "21", "46/1", "46??", "48", "58", "60", "62", " 7", "9", "11", "26", "30", "30??", "30??", "30??", "36", " 82", "86", "87", "88", "90", "92", " 84", "87", "87??", "94/1", "94/2", "94/96", "96", "98/2", " 38", "70", "70/2", "74", "74??", " 87??", " 108????????2", "108????????3", "108/1", "108/4", "108/1??", "110", "110/1", "110/2", "110??", "112", "114", "114??", "114????????2", "116", "116??", "116/1", "116/2", " 100/2", "100/2??", "102", "104", "106", "106/1", "106/4", " 89", "91", "93", "93/1", "93/2", "95", "95??", "95/1", "95/3", "97", "97??", "99", "101", "103", "105", "105??", "105??", "105??/2", " 118", "118????????2", "118??", "118??", "118??/1", "118??/2", "118??", "120", "120????????2", "120????????3", "120??", "122", "122????????2", "122????????3", "124", "124??", "126????????1", "126????????2", "126????????3", "126????????4", "128", "128/1", "128/2", "130/57", "132"]
    }, {
      name: "??????????. ???????????????? ??????????????",
      number: ["6", "10", "12", "14", "18", "18??", "18??", "18??", "18??", "18??", "18??", "18??", " 1/102", "3", "3??", "5", "5??", "7", "7??", " 2/1", "3??", "4", "5??", "7??", "7??", "9", "9??", "11", "11??", " 20", "20??", "22", "22??", "24", "24??", "26", "26??", " 20??", "20??", "20??", "20??", "20??", "20??", "32??", " 20??", "20??", "21??", "28", "28??", "30", "32", "32??", "32??", "32??", "32??", "32??", "32??"]
    }, {
      name: "??????????. ???????????????????? ??????????",
      number: ["3??", "3??/1", "3??/2", "3??/3", "3??/5", "3??", "3??", "3??/1", "5", "5??", "5??/5", "7??", "7??", "7??", "9", "9/1", "11??", "13", "13/1", "13??", "15", "15/1", "15/2", "15/3", "15/4", " 12", "12??", "14", "14/1", "14/2", "14/3", "16", "18", "18/1", "18??", "18??", "18??", "20", "20/1", "20??", "20??", "22/20", "22/20??", " 24", "24??", "26", "26??", "28", "28??", "28??", "28??", "30/2", " 15/27", "19", "19/1", "19??", "19??", "21", "21??", "21??", "21??", "21-??/1", "23", "23??", "25", "25??", "25??", "25??", "25??", "27", "27??", "29", "31", "31/1", "31??", "31??", "33/44", " 1", "1/2", "1/7", "1??", "1??", "3??/4", "3??/1", " 32??", " 36", "36??", "38", "38??", "40", " 39", "39??", "39??", "39??", "41", "43"]
    }, {
      name: "??????????. ???????????????? ????????????????????",
      number: ["1", " 9", "9??", "17", "17??", "19", "42", "44", "46??", "46??", " 30/28", "30/28??", "38??", "40", "40??", " 2", "4", "4??", "6", "8", " 10", "10??", "12", "14", "14??", "16", " 20", "22", "24", "28", " 3", "3??", " 7"]
    }, {
      name: "??????????. ?????????????????? ??????????????????",
      number: ["12??", "12??", "12??", "12??", "18", "24", "24??", " 6", "8", "8??", "10", "10??", "12", "12??", "12??", "12??", "14", " 2/12", "4", " 2??", "2??", "2??", " 7", "11", "13", " 12??"]
    }, {
      name: "??????????. ?????????????? ????????",
      number: ["6??", "8", " 1??", " 2/13", "2??", "2??", "4", "5", "5??", " 1", "1??", "2", "3", "3??", "3??", "3??", "3??", " 5??", " 12", "12??", " 14??", "18", "18??", "18??", "18??", "18??", " 10??", "12??", " 10", "10??", "10??", "10??", "10??", "10??", "10??", "12??", " 7", "7??", "7??", "9", "9??", "9??", " 7??", "7??", "9??", "9??", "9??", "9??", " 15", "17", "19", "19/11", " 9??", "13", "13??"]
    }, {
      name: "??????????. ??????????????",
      number: ["31", "31/1", "31??", "32", "32/1", "32/2", "33", "33??", "33??/1", "33??", "35", "39", "39/1", "39/2", "39/3", "39/4", "39/5", "39??", "39??", "41", "41??", "43", "43??", " 16", "18", "18??", "20", "22", "22??", "24", "24/1", "24??", "26", "28", " 23", "23??", "23??/1", "23??", "25", "25/1", "25/2", "25/3", "25/4", "25/5", "25/6", "25/7", "25/8", "25/9", "25/10", "25/11", "25/12", "25/13", "25/14", "25/15", "25/16", "25/17", "25/18", "25/19", "25/20", "25/21", "27", "29", " 3", "5", "7", "9", "9??", "11", "11/1", "11/2", "11/3", "13", "13??", "15", "15??", "17", "17??", "17??", "17??", "17??", "19", "19??", "21", "21/1", "21/2", " 4", "6", "6/1", "6/2", "6??", "6??", "8", "10", "12", "12/1", "12??", "12??", "14"]
    }, {
      name: "??????????. ?????????????????????????? ??????????????",
      number: ["2", "3", "3??", "4??", "4??", "4??", "4??", "5", "5??", "7/2", "9/1", "15/7", "17", " 6", "6??", "6??", "6??", "6??", "8", "8??", "8??", "10", "12", "14", "18", "24", "26", "28", "30", "32", "34", "36", "40", "42", "44", "46", "48", "50", "52", "54", "56", " 31", "33", " 35", "37", " 119", "119??", "119??", "119??", "123", "152", "152??", "190", "196", " 73", "75", "77", "79", "81", "83", "85", "87", "91", "93", "95", "97", "99", " 39??", " 59/1", "61/1", "61/1??", "62/2", "63/1", "63/2", "65/1", "67", "69/1", "69/2", "71/1", "71/2", " 28/2", "51", "53", "55", "57", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", " 39??", " 41", " 126", "126??", "128", " 115", "115??", "117", "130", "138", "138??", "140", "144", "146", "146??", "150", "150??", "150??", " 82", "84/1", "84/2", "88", "90", "92", "94", "96", "98", "100", "102", "104", "106", "112", "114/1", "114/2", "114/3", " 132", "134??", "136", "136??"]
    }, {
      name: "??????????. ???????????????????????? ????????????????????",
      number: ["60", "60/1", "60/2", "60/3", "62", "62??", "62??/1", "62??", "64??", "66??", " 68", "68??", "70", "72", "72/2", "72??", "72??", "72??/2", "72??/3", "74/9", "87/11", "87/12", "87/13", "89", "89/1", "89/2", "89/3", "89??", "89??", "89??/1", "91??", "91??/1", "91??/2", "91??", "91??", "91??/3", "93??", "93??", "93??", "93??", "93??", "95??", "95??", "97/1", "97/15", " 85", "85/1", "85/2", "85/4", " 16", "16/12", "16??", "18", "18??", "18??", " 8", "8??", "8??", "8??", "8??", "10", "10??", "12", "12??", "12??", "12??", "14", "14/13", "14??", "14??", " 2/1", "2??", "2??", "2??", "4", "4??", "4??", "4??", "4??", "4??", "6", " 35", "35??", "37", "37??", "39", "41/1", " 43", "43/2", "45", "47", "49", "49??", "49??", "51??", "53", "55", "55??", "57", "59", "59??", "61", " 20", "20??", "20??", "20??", "20??", "22", "22??", "24", "24??", "24??", "24??", "26", "26??", "26??", "26??", "28", "28/10", "28??", "28??", "28??", "30", "30??", " 32", "32??", "32??", "32??", "32??", "32??", "34", "34??", "36/7", " 1", "1/9", "1??", "1??", "1??", "3", "3??", "3??", "3??", "3??", "5", "5??", "5??", "5??", "7", "7??", "7??", "7??", " 15", "15??", "15??", "15??", "17", "17??", "17??", "17??", "17??", "17??", "19", "21??", "21??", " 21", "21??", "21??", "23", "25", "25??", "29", "31", " 5??", "11", "11??", "11??/2", "11??", " 44/10", "44??", "44??/1", "44??/4", "44??", "44??/1", "46", "46??", "48/9", " 69", "69??", "71", "73", "73/1", "73/2", "73/3", "73/5", "73/6", "73/7", "73/10", "73/11", "73/13", "73??", "73??", "73??", "75", "75/1", "75/2", "75??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/2??", "75/4??", "77", "77/1", "77/2", "77/3", "77/5", "77/6", "77/14", "79", "79/1", "79??", "81", "81/11", "81??", "81??", " 38/10", "38/10??", "38/10??", "38??", "38??", "40", "42/13", " 50", "52", "52/1", "52??", "54/1", "54/9", "56??", " 63/12", "63/15", "63/12??", "63/12??", "63/12??", "63/12??", "63/12??", "63/12??", "63/12??", "63/13??", "63??", "65", "67"]
    }, {
      name: "??????????. ????????",
      number: ["8", "10", "10??", "12", "14", "16", " 2", "2/3", "2/3??", "4", "4??", "6", "6??", " 1", "3", "5", "5??", "7", "9", "9??", "9??", " 13", "13/13", "13??", "13??", "13??", "15", "15??", "17", "17??", "19", "19/18", "21"]
    }, {
      name: "??????????. ????????????????",
      number: ["6", "6??", "6??", "6??", "8", "8??", "8??", "8??", "10", "10??", "10??", "10??", "12", "20??", "20??", "24??", "30", " 1", "1??", "2", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7", "2/8", "2/9", "2/10", "2/11", "2/12", "2/13", "2/14", "2??", "3/2", "4", "4??", "4??", "4??", "4/1", "4/2", "4/3", "4/4"]
    }, {
      name: "??????????. ?????????? ??????????????",
      number: ["1", "1??", "2", "3", "24", "24??", " 57", "59", "61", "63", "65", "67", "69", "76", "76??", "78", "78??", "80", "82", "84", "86", "88", "90"]
    }, {
      name: "??????????. ??????????",
      number: ["27", "29", "29??", " 24", "43", "45", "47", " 31", "33", "35", "35/2", "35/3", "35/4", "37", "39", "39/2", "41", "41??", "43", " 2", "9", "22", "42/1", "44", "46", " 6/18", "11", "11??", "13", "15", "17/15", "21", " 23", "25", " 24/2", "26", "28/1", "28/2", "40", " 34", " 4", "4/2", " 1", "1????????????1", "3", "5", "6", "8", " 10", "16", "16??", "18", "20", " 65", "86", "86/2", "88", "88??", "90", "143", "145", "147", "149", "151", "151??", "153", " 94/5", "96", "98", "100", "102", " 63", "69", "82", "82??", "84", "84??", "84??", "84??", " 49", "50", "52", "54", "54??", "58", "58/1", "58/2", "62", "62??", "64", "66", "70", "70/1", "72", "74", "74/2", "76", "78"]
    }, {
      name: "??????????. ??????????????????????",
      number: ["10", "10??", "10??", "10??", "12", "12??", "12??", "12??", "14", "14/1", "14/2", "14/3", "14/4", "14/5", "14/6", "14??", "14??", "14??", "14??", "14??", "14??", "14??", "16", "16/1", "16/2", "16??", "16??", "16??", "16??", "16??", "16??/1", "16??", "18", "18??", "18??", "18??", "18??", "20", "20/1", "20/2", "20??", "22", "22??", "22??/1", "22??", "22??", "22??/1", "22??/2", "24", " 1", "1????????1", "1????????2", "1??", "1??", "1??/1", "1??/2", "2??", "2??", "5", "5/1", "5/2", "5/3", "5/4", "5/5", "5/6", "5/7", "5??", "5??/1", "5??/2", "5??/3", "5??/4", "5??/5", "5??/6", "5??/7", "5??/8", "7", "7/1", "7/2", "7??", "7??", "7??/1", "7??", "7??", "7??", "7??", "9", "9??", "9??/1", "9??", "11", "11??", "13", "13/1", "13/2", " 26", "26/1", "26/2", "26/3", "26??", "28", "28/1", "28/2", "28/3", "28/4", "28??", "28??/1", "28??", "28??/1", "28??", "28??/1", "28??/2", "28??", "30", "30/1", "30??", "32", "32??", "32??", "32??/1", " 21", "21/1", "21/2", "21/3", "21??", "23", "23??", "23??/1", "23??/2", "23??", "25", "25/1", "27", "27??", "27??/1", "27??", "27??", "29??", "31", "31/1", "33", "33??", "35", " 15", "15??", "15??/1", "15??", "15??", " 37", "37??", "37??", "37??", "37??/1", "39", "39??", "39??", "39??", "41", "43", "43/1", "43/2", "45/28??", " 49", "49/1", "49/2", "49??", "49??", "51", "51??", "51??", " 34", "34/1", "34??", "34??", "34??/1", "34??", "34??", "34??", "36", "36/1", "36/2", "36/3", "36??", "36??", "36??/1", "38", "38/1", "38??", "40", "40/1", "40??", " 52", "52/1", "52/2", "52??", "52??/1", "52??", "52??", "52??", "54"]
    }, {
      name: "??????????. ?????????????????? ??????????????????",
      number: ["18/30", " 20", "22", "24", " 32", "32/34", "32??", "34", "34??", "36??", "38??", "44", "44??", "46", "46/2", " 15", "21", "23", "25", "25??", "31", "33", " 7", " 7/60", "9", "11", "13"]
    }, {
      name: "??????????. ????????????????",
      number: ["11", "11??", "16", "18", " 2", "4", "6", "8", " 1", "3", "3??", "5", "5??", "5??", "5??", "7", "7??", "7??", "9", "9/47", "9??", "10", "10/2", "10??", "12", "14", " 50", " 21", "23", "25", "27", " 15", "17", "19", " 29", "31", "35", " 37", "37/1", " 43??", "43??", "44", "45", "46", "47", "48", " 39", "41", "42", "43", " 34", "38", "40", "40??", "40??", "49/2", "49/2??", "51/2", "52/2", "54/1", "56", " 54", "54??", "58", "60", " 75/2", " 67", "67??", "67??", "67??", "67??", "69/1", "71/2", "71??", " 73/1", "88/2", "90/1", "92/2", " 77/1", "77??", "79", "81", "83", "96", "98/2", "100/1", "100??", " 65", " 51", "53", "53??", " 55??", "57", "59", "61/2", "63", "63??", " 68??", "68/1", "70", "72", "74", "76", "78", " 80/57", "82", "82??", " 62??", "62??", "62/1", "64", "66", " 109", "109??", " 116??", "126", "128/2", " 89??", "89??", " 102", "104", "104??", "106/2", "106??", "108/1", "112", "114/2", "116/1", "118", "120", "122", "122??", "124", " 87", "91", "93", "93??", "93??", "95", "97", "99/1", "101/2", "103", "103??", "105", "107", "107??", " 113", "115", "117", "119/121", "121??", "121??", "121??", "121??", "130/1", "132/1", "132/2", "132/3", "132/4", "134??", "136", "138", " 142", "144", "144??", "146/2", " 148/1", "172??", " 123", "125", "127", "129", "131", "133", "135", "153??", " 84", "84??", "84??", " 20", " 28/1", "30", "30??", "32", " 22", "24", "26", "26??"]
    }, {
      name: "??????????. ????????????????????????????????",
      number: ["41", " 75", " 31", "33", "33/2", "35", "35??", "37", "37??", "39/1", " 20", "20/1", "21/2", "22", "23", "25", " 15", "17", "19", " 8", "10", "12", " 28", " 1", "3", "5", "7", "11/15", " 14/17", "16", "16??", "18/2", " 28", " 47", "49", "51", "53", "55", "74", "76", "76??", "77", "78", "84", " 64", "66", "66??", "94", "94??", " 43", "45", "50/2", "52", "54", "54??", "56", "58", "62", " 6", " 34", " 36", "38", "40", "42", "44", "46", "48/2"]
    }, {
      name: "??????????. ????????????",
      number: ["1", "3", "3??", "5", "5??", "5??", " 31", "31??", "33", "35", " 9", "9??", "9??", "9??", "17", "17??", "17??", "19??", "19/3", " 31??", " 35??", " 8??", "10??", " 37", "37??", "37??", "39", "62", "62??", "64", "64??", "64??", "64??", "64??", " 6", "6??", "8", "10", "12??", " 62??", " 4", "4??", " 41", "41??", "41??", "41??", "41??", "45", "45??", "45??", "70", "72", "74", "76", "78", "80??", "85", "85??", " 80", " 80??", "80??", "82", "88", "88??", "88??", "90", "92", "100", " 84", "88??", " 94", "104", "106", "108", "110", " 96", "96??", "98", " 66", "66??", "68", "68??", "68??", "68??", "70", "70??", "70??"]
    }, {
      name: "??????????. ?????????????????????????? ??????????????",
      number: ["2", "2??", "2??", "2/1", "2/2", "2/3", "3", "3??", "3??", "3??/1", "3??", "3/4", " 4", "4??", "5", "6", "6??", "6??", "7", "7??", "8", "8??", "8??", "8??", "8??/1", "8/1", "10", "10??", "10/1"]
    }, {
      name: "??????????. ??????????????",
      number: ["1??", "1/60", "1/60??", "3", "3??", "5", " 2", "2??", "4??", "6", "6??", " 2??", "4", " 8/28", "10", "14", "16", " 17??", "30??", " 38", "44", "46", " 15/1", "26", " 22", "24", "28", "34", "40", "42", " 24??", "24??", "28??", "30??", "32", " 17", " 28??", "30"]
    }, {
      name: "??????????. ????????????????????",
      number: ["18", "18??", "20", "20/2", "22/1", "24", "26/2", " 2/1", "2/1??", "4", "6", "8", "8/2", "10", "10/1", "10??", "12", "12??", "14", "16", "16??", "16??", " 21", "30", "30??", " 1", "1??", "1??", "1??", "3", "3??", "5??", "7??", "17", "17??", "17??", "17??", " 3??", "7??", " 5", "5??", "7", "9", "11", "13", "13??", "15", "15/17", "19"]
    }, {
      name: "??????????. ?????????????? ??????????????",
      number: ["10", "10??", "14", "14??", "16", "16??", "16??", "16??", "19", "20", "20??", "20??", "20??", "21", "22", "22??", "23", "24", "24??", "24??", "24??", "24??", "24??", "26", "26??", "26??", "28", "28??", "28??(??????????????)", "28?? (??????????????)", "28??(??????????????)", "30", "32", "34", "34??", "34??", "34??", "36", " 5", "6", "7", "8", "8/16??", "9", "9??", "9??", "9??", "11", "11??", "12", "12??", "13", "13??", "13??", "15", "15??", "17", "17/1", "18", "21??", "21??", " 6", "6??", "6??", "6??", "6??", "6??", "8", "8/1", "8/2", "8/3", "8/4", "10", "10??", "10??", "11??", "12??", "13", "13??", "13??", "13??", "14", "14??", "14??", "15", "15??", "15??/1", "15??/2", "15??", "15??", "15??", "16", "16??", "16??", "16??", "16??", "16??", "17", "17/1", "17/2", "18", "19", "19??", "19??", "20", "20??", "20??", "21", "21/1", "21/2", "21/3", "21??", "21??/1", "21??/2??", "21??", "21??", "22", "22??", "22??", "22??", "22??", "22??", "23", "23??", " 23??/1", "23??/2", "23??/3", "23??", "23??", "23??/1", "23??/2", "24", "24??", "24??", "24??", "24??", "24??", "25", "25/1", "25/2", "25??", "26", "26??", "26??", "26??", "28", "28??", "28??", "30", "30/1", "30/2", "32", "32/1", "32/2", "32??", "34??", "34??", "34??", "36", "36??", "36??", "36??", "38", "40", "42", "44", "44/1"]
    }, {
      name: "??????????. ???????????? ??????????",
      number: ["2", "2??", "2??", "4", "8", "10", "12", "12??", "12??", "12??", "14??", "14??", "14??", " 6", "6??", "16/2", "18", "18??", "18??", " 1", "1??", "3", "3??", "3??", "5", "5/1", "5??", "7", "7??", "9", "9??", "9??", " 11", "11??", "13", "15", "15??", "17", "17??", " 19", "21", " 20", "20??", "20??", "22", "22??", "22??", "24", "24??", "24??", "24??", "26", "26??", "26??", "26??", "28", "28??", "28??", "28??"]
    }, {
      name: "?????????? ??????????????????",
      number: ["6/8", "7", "9", "10", " 5", "5??"]
    }, {
      name: "?????????? ????????????????????????",
      number: ["1??", "2??", "2??", "2??", "2??", "3", "5/31", "8", "10", "11", "12", "13", "13??", "14", "15", "16", "20", "20??", "21", "22", "23", "24", "26", "28", "28??", "28??", "30", "30??", "32", "34", "34??", "34??", "36", "38"]
    }, {
      name: "?????????? ??????????????????????????",
      number: ["3", "5"]
    }, {
      name: "?????????? ??????????????",
      number: ["10", "13", " 5??", "8"]
    }, {
      name: "?????????? ??????????????????????????",
      number: ["3/5", "10??", "14", "16", "18", "18??", "20", "20??", "21", "22", "23??", " 10??"]
    }, {
      name: "?????????? ????????????????????????????",
      number: ["2", "2??", "2??", "4"]
    }, {
      name: "?????????? ??????????????????????????",
      number: ["1"]
    }, {
      name: "?????????? ????????????????????????",
      number: ["1"]
    }, {
      name: "?????????? ??????????????????",
      number: ["3", "4", "4??", "5", " 6", "7", "8", "9/1", "9/2", "10", "12", "12??", "14/24", "14??", "14??", " 1", "3", "5", " 1", "7??", "11", "13", "13??", "15", "17", "18", "20", "24"]
    }, {
      name: "?????????? ????????????",
      number: ["3", "4", "5", " 7"]
    }, {
      name: "?????????? ??????????????????????",
      number: ["2", "3??", "4", "4??", "5", "5??", "7"]
    }, {
      name: "?????????? ????????????????????",
      number: ["13??", "15", "17", "18", "19", " 11", "13", " 2/12", "6", "8", "10", " 3", "5"]
    }, {
      name: "?????????? ??????????????????????????",
      number: ["17??", "19", "23"]
    }, {
      name: "?????????? ??????????????????????????",
      number: ["2", "3??", "4", "4??", "5", "6", "9", "10", "11", "12", "14", "20", "24"]
    }, {
      name: "?????????? ??????????????????????",
      number: ["2", "4", "6", "8", "10", "12"]
    }, {
      name: "???????? ?????????????????????????? 18 ????",
      number: ["1??", "1/2"]
    }, {
      name: "???????? ??????????-??????????????????",
      number: ["4", "6", "7??", "8", "8??", "13??", "13??", "13??", "15/1", "15/2"]
    }, {
      name: "???????? ??????????????????????",
      number: ["??/??"]
    }, {
      name: "???????? ????????????????????",
      number: ["25", " 1??", "2", "2??", "3", "4", "4??", "4??", "5??", "5??", "5??", "6", "9", "10", "12", "13", "21", "39", "41", "45", "45??", "47", "49", "53", "57"]
    }, {
      name: "???????? ??????????????????",
      number: ["2", "4", "6", "14", "25", "28"]
    }, {
      name: "???????? ????????????????",
      number: ["100", "101??", "101??", "101??/1", "103", "103??", " 98", " 90", "90??", "98??", "98??", " 5", "7", "7/2", "9", "15/2", "16", "17", "17??", "17??", "18", "18??", "19", "20", "22", "25", "25/1", "26", "26??", "27", "27??", "28", "28??", "28??", "29", "30", "30??", "31", "32", "34", "34??", "36", "38", "40", "42", "42??", "44", "44??", "48", "48??", "52", "54", "104??", " 125??", "215", "275", "27????", "28????", " 35", "35??", "58", "58??", "58??", "58??"]
    }, {
      name: "???????? ??????????????????????",
      number: ["22", "48", "48??", "50", "54", "104", " 12", "14", "16", "18", "20", "21", "21??", "22", "22??", "24", "26/15", "32/1", "32/2", "34", "35", "35??", "36", "37", "37??", "38", "38??", "39", "39??", "40", "41", "42", "44", "44??", "46/1", "46/2", "46/3", "46??", " 17", " 3", "5", "7", "11", "15", " 2??", "4", "4/27"]
    }, {
      name: "???????? ????????????????????",
      number: ["7", "9", "11", "11??", "11/1", "13", "13??", "15", "17", "17??", "19", " 1", "3", "5", "5/1", "5/2", "71??", " 166??", "168", "170", "170??", "170??", "172", "172/1", "172/3", "172/4", "172/5", "172/6", "172??", "172??/1", "172??", "172??/1", "174??", "174??/2", "174??/3", "174??/4", " 168??", "168??", "168??/1", "168??/1", " 57", "57/1", "59", "61", "61/1", "61??", "61??", "63", "63??", "65", "65/2", "65/3", "152", "152/1", "152/2", "152/5", "152/6", "152/8", "152????????1", "152????????2", "154", "154??", "156", "156/1", "158", "158/1", "158/6", "158/10", "1584", "158??", "158??", "158??/1", "158??/2", "160/14", " 121", "121/1", "121/3", "121/3??", "121/3??", "121????????1", "121??", "121??/1", "121??/2", "123", "123??", "125", "158/2", "158/3", "158/4", "158/5", "158/7", "158/9", "160", "160/1", "160/2", "160/3", "160/4", "160/5", "160/6", "160/8", "160/10", "160/12", "160/13", "160/1??", "160??", "160??/1", "164", "166", "166??", "166??", "168??", "168??", "168??", "168??", "168??", "168??", "168??/1", "168??/2", " 21", "21/1", "21/3", "21/4", "21/5", "21/6", "21??", " 127/18", "129", "131", "133/1", "135/2", "137/1", "139/2", "141/21", "143/22", "145", "147", "149/2", "151", "153/2", "157/1", "157/24", "159", "159/1", "174", "174??", "174??", "174/1", "176??", "176??", "176??", "178", "178??", "178/1", "180/21", "180/21??", "180/21??", "180/21??", " 179", "179/1", "179??", "201/203", "203/201", "210", "210????????1", "210??", "210??/1", " 161/1", "163", "163/1", "163/2", "165", "167", "169/25", "169/25??", "169/25??", "171", "171/3", "171/12??", "171/18", "175", "177/1", "177/2", " 182", "188", "190", "211", "242/10", "244", "244/1", " 2", "2/1", " 4", "6", "8", "8/1", " 12", "14/1", "16", "16/1", "18", "18/1", "46", "50", " 2??", "2??", "4/1", " 16/1", "48", " 49", "51", "51/1", "51??", "51??", "53", "53??", "55", "55/1", "55??", "55??", "67??", " 62/1", "62/3", "62/4", "144??", "144??/1", "144??/2", "144??/3", "144??/4", "144??/5", "144??", "144??", "144??/1", "144??", "146", "146??/2", "148", "148/1", "148/2", "148/3", "148??", "150/15", " 56", "58", "58??", "58??", "60", "62", "62??", "68"]
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

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 57,
      vars: 0,
      consts: [["preserveAspectRatio", "none", "width", "100%", "height", "100%", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 841.89 190.24", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 841.89 190.24"], ["type", "text/css"], ["d", "M13.13,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28H13.57v80.56h-0.44V19.88z", 1, "st0"], ["d", "M58.63,19.88h0.72l6.63,149.33h0.04l6.63-149.33h0.72v154.97h-0.44V25.31H72.9l-6.65,149.54h-0.48L59.12,25.31\n\th-0.04v149.54h-0.44V19.88z", 1, "st0"], ["d", "M76.85,19.88h0.44v154.97h-0.44V19.88z", 1, "st0"], ["d", "M80.76,19.88h6.34c1.51,0,2.68,3.56,3.51,10.65c0.83,7.09,1.25,17.65,1.25,31.69c0,6.8-0.13,12.83-0.37,18.11\n\tc-0.25,5.28-0.59,9.7-1.03,13.25c-0.44,3.55-0.97,6.21-1.58,8.02c-0.61,1.81-1.28,2.73-2,2.73H81.2v70.53h-0.44V19.88z M87.1,103.61\n\tc0.61,0,2.48-3.13,3.08-13.51c0.19-3.28,0.69-7.2,0.91-11.83c0.22-4.63,0.33-9.99,0.33-16.06c0-12.31-0.36-21.71-1.06-28.22\n\tc-0.71-6.51-1.8-13.41-3.26-13.41h-5.9v83.03H87.1z", 1, "st0"], ["d", "M109.77,19.88h10.4v0.54h-9.96v73.39h9.37v0.42h-9.37v80.13h10.05v0.5h-10.49V19.88z", 1, "st0"], ["d", "M533.11,19.88h10.4v0.54h-9.96v73.39h9.37v0.42h-9.37v80.13h10.05v0.5h-10.49V19.88z", 1, "st0"], ["d", "M143.99,19.88h11.72v154.97h-0.44V20.42h-10.84v154.43h-0.44V19.88z", 1, "st0"], ["d", "M181.76,87.16l-6.67-67.29h0.61l9.29,94.2v-94.2h0.44v94.2l9.28-94.2h0.61l-6.67,67.29l7.53,87.68h-0.59\n\tl-7.24-84.65l-2.92,29.73v54.92h-0.44v-54.92l-2.92-29.73l-7.24,84.65h-0.59L181.76,87.16z", 1, "st0"], ["d", "M198.22,19.88h0.44v151.28L209.4,19.88h0.68v154.97h-0.44V23.58L198.9,174.85h-0.68V19.88z", 1, "st0"], ["d", "M232.97,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L232.97,20.01z M237.17,123.4\n\tl-3.89-99.04h-0.04l-4.03,99.04H237.17z", 1, "st0"], ["d", "M325.32,19.88h0.44v94.2l10.87-94.2h0.66l-7.57,65.98l8.01,88.99h-0.59l-7.78-86.37l-3.6,31.46v54.92h-0.44\n\tV19.88z", 1, "st0"], ["d", "M355.92,19.88h9.2v0.54h-8.76v154.43h-0.44V19.88z", 1, "st0"], ["d", "M380.61,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.21,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.49\n\tc0,21.41-0.03,45.15-0.08,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC382.24,172.02,381.53,174.85,380.61,174.85z", 1, "st0"], ["d", "M309.53,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.21,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.49\n\tc0,21.41-0.03,45.15-0.08,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC311.16,172.02,310.45,174.85,309.53,174.85z", 1, "st0"], ["d", "M213.39,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M220.13,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H220.13z M220.06,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H220.06z", 1, "st0"], ["d", "M345.73,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC352.1,135.38,349.87,175.65,345.73,175.65z M345.73,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C351.5,51.79,348.46,19.94,345.73,19.94z", 1, "st1"], ["d", "M371.48,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15s6.37,40.27,6.37,78.15\n\tC377.85,135.38,375.62,175.65,371.48,175.65z M371.48,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\ts5.77-31.85,5.77-77.55C377.25,51.79,374.21,19.94,371.48,19.94z", 1, "st1"], ["points", "403.5,93.95 398.22,93.95 398.22,19.88 397.79,19.88 397.79,174.85 398.22,174.85 398.22,94.36 \n\t\t403.5,94.36 \t", 1, "st1"], ["d", "M409.87,19.34c-4.14,0-6.37,40.27-6.37,78.15c0,37.89,2.23,78.15,6.37,78.15s6.37-40.27,6.37-78.15\n\t\tC416.24,59.61,414.01,19.34,409.87,19.34z M409.87,175.05c-2.73,0-5.77-31.85-5.77-77.55c0-45.7,3.04-77.55,5.77-77.55\n\t\ts5.77,31.85,5.77,77.55C415.64,143.2,412.6,175.05,409.87,175.05z", 1, "st1"], ["d", "M165.97,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC172.34,135.38,170.11,175.65,165.97,175.65z M165.97,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C171.74,51.79,168.7,19.94,165.97,19.94z", 1, "st1"], ["d", "M140.46,114.02c-0.62,36.68-3.25,61.03-5.63,61.03c-2.73,0-5.77-31.85-5.77-77.55c0-45.7,3.04-77.55,5.77-77.55\n\tc2.05,0,4.28,18.03,5.26,46.41h0.6c-0.88-25.97-2.87-47.01-5.86-47.01c-4.14,0-6.37,40.27-6.37,78.15c0,37.89,2.23,78.15,6.37,78.15\n\tc3.54,0,5.68-29.42,6.23-61.63H140.46z", 1, "st1"], ["d", "M33.37,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L33.37,20.01z M37.57,123.4\n\tl-3.89-99.04h-0.04L29.6,123.4H37.57z", 1, "st0"], ["d", "M300.08,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L300.08,20.01z M304.28,123.4\n\tl-3.89-99.04h-0.04l-4.03,99.04H304.28z", 1, "st0"], ["d", "M426.85,19.53h0.44v154.3h9V19.53h0.44v154.3h9V19.53h0.44v154.96h-19.32V19.53z", 1, "st0"], ["d", "M450.21,19.53h0.44v94.2l10.87-94.2h0.66l-7.57,65.98l8.01,88.99h-0.6l-7.77-86.39l-3.6,31.49v54.9h-0.44V19.53\n\tz", 1, "st0"], ["d", "M464.89,19.53h0.44v154.96h-0.44V19.53z", 1, "st0"], ["d", "M502.75,19.53h0.44V170.8l10.73-151.28h0.68v154.96h-0.44V23.21l-10.74,151.28h-0.68V19.53z", 1, "st0"], ["d", "M552.76,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79H553.2v3.79h-0.44V170.16\n\tz M565.49,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H565.49z", 1, "st0"], ["d", "M613.07,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M619.81,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H619.81z M619.74,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H619.74z", 1, "st0"], ["d", "M642.59,19.53h0.44v154.4h9V19.53h0.44v154.4h9V19.53h0.44v154.96h-19.31V19.53z", 1, "st0"], ["d", "M683.43,19.53h9.2v0.53h-8.76v154.43h-0.44V19.53z", 1, "st0"], ["d", "M722.58,177.97c-0.91,0-1.72-1.24-2.44-3.7c-0.72-2.45-1.33-6.07-1.82-10.85c-0.5-4.77-0.88-10.56-1.15-17.36\n\tc-0.27-6.8-0.4-14.53-0.4-23.22h0.44v0.65c0,15.77,0.46,28.08,1.39,36.9c0.93,8.83,2.26,16.66,3.99,16.66\n\tc0.76,0,1.14-1.08,1.78-3.25c0.64-2.16,1.5-8.63,1.95-12.54c0.45-3.91,0.81-8.58,1.06-14.01c0.25-5.42,0.37-11.39,0.37-17.9\n\tc0-10.43-0.38-18.77-1.13-25.07c-0.76-6.3-1.8-11.35-3.13-11.35h-2.2v-0.58h2.2c1.24,0,2.22-4.74,2.92-10.53\n\tc0.7-5.8,1.05-14.11,1.05-24.97c0-11.72-0.41-23.51-1.25-29.9c-0.83-6.36-1.98-9.55-3.45-9.55c-1.64,0-2.86,3.62-3.66,10.85\n\tc-0.81,7.24-1.28,20.64-1.43,34.66h-0.44c0.16-14.88,0.68-26.47,1.57-34.72c0.88-8.23,2.21-12.37,3.96-12.37\n\tc0.76,0,1.46,0.92,2.1,2.72c0.63,1.81,1.18,4.45,1.64,7.92c0.45,3.48,0.8,7.74,1.05,12.8c0.25,5.06,0.37,10.92,0.37,17.58\n\tc0,9.12-0.25,16.97-0.76,23.55c-0.5,6.58-1.31,10.61-2.42,12.05v0.44c0.48,0.29,0.93,1.37,1.35,3.25c0.42,1.89,0.78,4.45,1.1,7.71\n\tc0.31,3.25,0.56,7.04,0.74,11.39c0.18,4.35,0.28,9.05,0.28,14.11c0,7.37-0.14,14.04-0.42,19.97c-0.28,5.93-0.67,11.03-1.17,15.29\n\tc-0.51,4.28-1.1,7.57-1.79,9.88C724.13,176.81,723.38,177.97,722.58,177.97z", 1, "st0"], ["d", "M765.66,19.53h6.34c1.51,0,2.68,3.54,3.51,10.63c0.83,7.09,1.25,17.66,1.25,31.69c0,6.8-0.13,12.85-0.37,18.13\n\tc-0.25,5.28-0.59,9.69-1.03,13.23c-0.44,3.55-0.96,6.23-1.58,8.04c-0.61,1.81-1.28,2.7-2,2.7h-5.69v70.54h-0.44V19.53z M772.01,103\n\tc0.62,0,2.57-4.8,3.09-13.25c0.2-3.28,0.69-7.21,0.91-11.83c0.22-4.63,0.33-9.99,0.33-16.07c0-12.29-0.36-21.71-1.07-28.21\n\tc-0.71-6.51-1.79-13.41-3.26-13.41h-5.9V103H772.01z", 1, "st0"], ["d", "M813.38,45.14c0,3.9-0.02,7.1-0.04,9.55c-0.03,2.46-0.09,4.56-0.17,6.29c-0.08,1.74-0.18,3.15-0.31,4.23\n\tc-0.12,1.08-0.28,2.14-0.47,3.14v-4.33c0.22-1.44,0.37-3.59,0.44-6.4c0.07-2.82,0.11-6.98,0.11-12.49V19.53h0.43V45.14z", 1, "st0"], ["d", "M822.51,104.17c-0.7,0-1.35-0.91-1.94-2.71c-0.59-1.81-1.1-4.52-1.51-8.14c-0.42-3.62-0.75-8.04-0.98-13.24\n\tc-0.23-5.21-0.36-11.29-0.36-18.24c0-13.6,0.4-24.06,1.2-31.36c0.8-7.3,2-10.96,3.59-10.96h6.41v154.96h-0.45v-70.32h-5.39\n\tl-5.71,70.32h-0.55L822.51,104.17z M828.48,103.22v-83h-6.05c-1.42,0-2.48,6.94-3.18,13.52c-0.7,6.58-1.06,15.73-1.06,27.46\n\tc0,6.07,0.11,11.54,0.31,16.39c0.2,4.84,0.71,8.88,0.86,12.16c0.4,8.36,2.43,13.48,3.06,13.48H828.48z", 1, "st0"], ["d", "M797.81,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M804.55,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H804.55z M804.48,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H804.48z", 1, "st0"], ["d", "M633.22,20.01h0.57l6.19,154.97h-0.48l-2.06-51.01h-7.99l-2.08,51.01h-0.48L633.22,20.01z M637.42,123.4\n\tl-3.89-99.04h-0.04l-4.03,99.04H637.42z", 1, "st0"], ["d", "M672.68,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC679.05,135.38,676.82,175.65,672.68,175.65z M672.68,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C678.45,51.79,675.41,19.94,672.68,19.94z", 1, "st1"], ["d", "M754.06,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC760.42,135.38,758.19,175.65,754.06,175.65z M754.06,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C759.83,51.79,756.79,19.94,754.06,19.94z", 1, "st1"], ["d", "M786.67,175.65c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC793.04,135.38,790.81,175.65,786.67,175.65z M786.67,19.94c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C792.44,51.79,789.4,19.94,786.67,19.94z", 1, "st1"], ["d", "M699.57,175.71c-4.14,0-6.37-40.27-6.37-78.15c0-37.89,2.23-78.15,6.37-78.15c4.14,0,6.37,40.27,6.37,78.15\n\tC705.94,135.44,703.71,175.71,699.57,175.71z M699.57,20c-2.73,0-5.77,31.85-5.77,77.55c0,45.7,3.04,77.55,5.77,77.55\n\tc2.73,0,5.77-31.85,5.77-77.55C705.34,51.85,702.3,20,699.57,20z", 1, "st1"], ["d", "M94.45,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28H94.89v80.56h-0.44V19.88z", 1, "st0"], ["d", "M241.77,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28h-10.98v80.56h-0.44V19.88z", 1, "st0"], ["d", "M257.09,19.88h0.44v74.07h10.98V19.88h0.44v154.97h-0.44V94.28h-10.98v80.56h-0.44V19.88z", 1, "st0"], ["d", "M518.49,19.53h6.74c0.61,0,1.19,0.8,1.72,2.38c0.53,1.59,1,4.02,1.41,7.27c0.4,3.27,0.72,7.28,0.94,12.05\n\tc0.23,4.77,0.34,10.42,0.34,16.94c0,4.62-0.08,9.03-0.25,13.23c-0.17,4.19-0.4,7.89-0.69,11.08c-0.29,3.18-0.64,5.75-1.04,7.69\n\tc-0.4,1.95-0.84,3.07-1.33,3.37v0.44c0.51,0.14,1,1.12,1.46,2.93c0.46,1.8,0.86,4.34,1.21,7.59c0.34,3.27,0.62,7.24,0.82,11.94\n\tc0.2,4.71,0.31,10.02,0.31,15.96c0,6.94-0.13,13.06-0.38,18.34c-0.26,5.29-0.61,9.66-1.06,13.13c-0.46,3.47-1,6.11-1.64,7.92\n\tc-0.64,1.81-1.33,2.71-2.07,2.71h-6.48V19.53z M525.23,93.39c0.53,0,2.2-1.13,2.77-10.17c0.18-2.84,0.66-6.33,0.88-10.52\n\tc0.22-4.21,0.33-9.05,0.33-14.53c0-5.79-0.1-10.86-0.31-15.2c-0.2-4.35-0.49-7.92-0.85-10.75c-0.36-2.81-0.51-4.53-0.75-6.54\n\tc-0.31-2.63-1.48-5.71-2.04-5.71h-6.33v73.42H525.23z M525.16,173.77c0.63,0,2.5-4.15,3.22-12.84c0.26-3.12,0.72-7.01,0.95-11.72\n\tc0.23-4.7,0.35-10.24,0.35-16.61c0-6.65-0.13-12.33-0.38-17.04c-0.26-4.7-0.7-8.48-1.01-11.4c-0.91-8.62-2.51-10.07-3.06-10.07h-6.3\n\tv79.67H525.16z", 1, "st0"], ["d", "M592,104.17c-0.7,0-1.35-0.91-1.94-2.71c-0.59-1.81-1.1-4.52-1.51-8.14c-0.42-3.62-0.75-8.04-0.98-13.24\n\tc-0.23-5.21-0.36-11.29-0.36-18.24c0-13.6,0.4-24.06,1.2-31.36c0.8-7.3,2-10.96,3.59-10.96h6.41v154.96h-0.45v-70.32h-5.39\n\tl-5.71,70.32h-0.55L592,104.17z M597.97,103.22v-83h-6.05c-1.42,0-2.48,6.94-3.18,13.52c-0.7,6.58-1.06,15.73-1.06,27.46\n\tc0,6.07,0.11,11.54,0.31,16.39c0.2,4.84,0.71,8.88,0.86,12.16c0.4,8.36,2.43,13.48,3.06,13.48H597.97z", 1, "st0"], ["d", "M277.08,104.17c-0.7,0-1.35-0.91-1.94-2.71c-0.59-1.81-1.1-4.52-1.51-8.14c-0.42-3.62-0.75-8.04-0.98-13.24\n\tc-0.23-5.21-0.36-11.29-0.36-18.24c0-13.6,0.4-24.06,1.2-31.36c0.8-7.3,2-10.96,3.59-10.96h6.41v154.96h-0.45v-70.32h-5.39\n\tl-5.7,70.32h-0.55L277.08,104.17z M283.05,103.22v-83H277c-1.42,0-2.48,6.94-3.18,13.52c-0.7,6.58-1.06,15.73-1.06,27.46\n\tc0,6.07,0.11,11.54,0.31,16.39c0.2,4.84,0.71,8.88,0.86,12.16c0.4,8.36,2.43,13.48,3.06,13.48H283.05z", 1, "st0"], ["d", "M487,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.2,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.5\n\tc0,21.41-0.03,45.15-0.07,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC488.64,172.02,487.92,174.85,487,174.85z", 1, "st0"], ["d", "M570.58,174.85c-0.48,0-0.89-0.36-1.23-1.08v-1.2c0.36,0.86,0.77,1.29,1.21,1.29c0.8,0,1.44-6.17,1.89-13.98\n\tc0.45-7.83,0.79-18.53,1.01-32.13c0.22-13.59,0.35-29.63,0.4-48.07c0.04-18.45,0.06-38.39,0.06-59.8h9.37v154.97h-0.44V20.42h-8.5\n\tc0,21.41-0.03,45.15-0.07,63.61c-0.05,18.45-0.2,34.47-0.44,48.07c-0.24,13.59-0.61,24.31-1.11,32.12\n\tC572.22,172.02,571.5,174.85,570.58,174.85z", 1, "st0"], ["d", "M730.17,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79h-14.04v3.79h-0.44\n\tV170.16z M742.9,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H742.9z", 1, "st0"], ["d", "M41.71,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79H42.15v3.79h-0.44V170.16\n\tz M54.44,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H54.44z", 1, "st0"], ["d", "M468.18,170.16h1.45c0.61-11.29,1.09-23.08,1.42-35.39c0.34-12.29,0.59-24.51,0.76-36.68\n\tc0.17-12.14,0.27-23.87,0.3-35.16c0.03-11.28,0.04-21.48,0.04-30.6v-12.8h9.2v150.63h1.75v4.33h-0.44v-3.79h-14.05v3.79h-0.44\n\tV170.16z M480.91,170.16V20.06h-8.32v19.22c0,8.68-0.02,18.38-0.06,29.08c-0.04,10.71-0.14,21.86-0.31,33.43\n\tc-0.17,11.57-0.41,23.23-0.73,34.93c-0.32,11.72-0.77,22.87-1.34,33.44H480.91z", 1, "st0"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "style", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " .st0 { stroke: #000000; stroke-width: 0.5; } .st1 { stroke: #000000; stroke-width: 0.5; stroke-miterlimit: 10; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "polygon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\n  height: 15vh;\n  z-index: 100;\n  position: fixed;\n  background-color: #fff;\n  width: 100%;\n  bottom: 0;\n}\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmcvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNXZoO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn1cbmZvb3RlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
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

    FullpriceComponent.??fac = function FullpriceComponent_Factory(t) {
      return new (t || FullpriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]));
    };

    FullpriceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FullpriceComponent,
      selectors: [["app-fullprice"]],
      decls: 23,
      vars: 1,
      consts: [[1, "fullprice"], [1, "fullprice__title-wrap"], [1, "fullprice__title"], [1, "fullprice__price"], [1, "fullprice__machine"], ["alt", "machine", 3, "src"], [1, "fullprice__text-wrap"], [1, "fullprice__text"], ["href", "https://t.me/Home_Party_Bot", "target", "_blank", 1, "fullprice__link"], ["routerLink", "", 1, "fullprice__back-button"]],
      template: function FullpriceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u041D\u0415\u041C\u0410\u0404 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " \u0412 \u041D\u0410\u042F\u0412\u041D\u041E\u0421\u0422\u0406");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u0426\u0406\u041D\u0410: 8 000 \u0413\u0420\u041D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0435\u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0431\u043E\u0442\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "@Home_Party_Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, ",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " \u0434\u043E \u0442\u043E\u0433\u043E \u0436 \u0432\u0441\u044C\u043E\u0433\u043E \u0437\u0430 1 \u0433\u0440\u0438\u0432\u043D\u044E.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\u041D\u0410\u0417\u0410\u0414");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.machine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".fullprice[_ngcontent-%COMP%] {\n  display: flex;\n}\n.fullprice__title-wrap[_ngcontent-%COMP%] {\n  width: 58vw;\n  position: relative;\n}\n.fullprice__title[_ngcontent-%COMP%] {\n  margin-top: 30.47vh;\n  margin-left: 75px;\n  margin-bottom: 125px;\n  position: relative;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  letter-spacing: -2.5px;\n  font-size: 112.33px;\n  line-height: 100%;\n  color: #55f91b;\n  z-index: 1;\n}\n.fullprice__price[_ngcontent-%COMP%] {\n  margin-left: 75px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 47.29px;\n  color: #fff;\n  line-height: 100%;\n}\n.fullprice__machine[_ngcontent-%COMP%] {\n  top: 4.95vh;\n  right: 0;\n  position: absolute;\n  height: 70.76vh;\n  width: 20vw;\n}\n.fullprice__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  z-index: 0;\n}\n.fullprice__text-wrap[_ngcontent-%COMP%] {\n  width: 42vw;\n  position: relative;\n  text-align: center;\n}\n.fullprice__text[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 35.23vh;\n  margin-left: 100px;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 51.95px;\n  color: #fff;\n  line-height: 100%;\n}\n.fullprice__link[_ngcontent-%COMP%] {\n  color: #55f91b;\n}\n.fullprice__back-button[_ngcontent-%COMP%] {\n  left: calc(50% - 4.58vw);\n  margin-top: 125px;\n  background-color: #55f91b;\n  color: #004a99;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 7px;\n  cursor: pointer;\n  font-size: 24.21px;\n  font-family: \"DIN Pro CondensedMedium\";\n  padding: 19px 77px;\n  margin-bottom: 25vh;\n}\n@media only screen and (min-width: 1681px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 7vw;\n    margin-bottom: 11.9vh;\n    margin-left: 4.46vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n    margin-left: 4.46vw;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    padding: 1vh 4.58vw;\n    margin-top: 8vh;\n    border-radius: 0.5vw;\n  }\n}\n@media only screen and (min-width: 1680px) {\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 44.79%;\n  }\n}\n@media only screen and (max-width: 1600px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 21vh;\n    font-size: 92.33px;\n    margin-bottom: 12.5vh;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    padding: 2vh 4.58vw;\n    margin-top: 3vh;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 237px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n}\n@media only screen and (max-width: 1366px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n    font-size: 92.33px;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 24vh;\n  }\n}\n@media only screen and (max-width: 1152px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 190px;\n    font-size: 78px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 17vh;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 6vh;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 33.61vh;\n    margin-bottom: 11.04vh;\n    font-size: 60px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 17vh;\n  }\n}\n@media only screen and (max-width: 854px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 27.61vh;\n    margin-left: 40px;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 67vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-left: 40px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 112px;\n  }\n}\n@media only screen and (max-width: 847px) {\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-top: 20vh;\n    margin-left: 40px;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 32%;\n  }\n  .fullprice__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 8vh;\n  }\n}\n@media only screen and (max-width: 835px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 155px;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 72.15px;\n    margin-bottom: 14.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 45.45px;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 53.4px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    position: absolute;\n    left: calc(30.73% + 4.58vw);\n    padding: 15px 77px;\n    margin-top: 2vh;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 58vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 42vw;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    text-align: left;\n    font-size: 3vw;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 70vh;\n    width: 32%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    position: absolute;\n    left: calc(30.73%);\n    padding: 8px 50px;\n    margin-top: 3vh;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 155px;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 72.15px;\n    margin-bottom: 14.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 45.45px;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 53.4px;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(30.73% + 4.58vw);\n    padding: 15px 77px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 125px;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-bottom: 12.01vh;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 58vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 42vw;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    text-align: left;\n    font-size: 3vw;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 70vh;\n    width: 32%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    position: absolute;\n    left: calc(30.73%);\n    padding: 8px 50px;\n    font-size: 15px;\n    margin-top: 5vh;\n  }\n}\n@media only screen and (max-width: 732px) {\n  .fullprice[_ngcontent-%COMP%] {\n    height: 65vh;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 4vw;\n    margin-left: 3%;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(22%);\n    font-size: 15px;\n    padding: 5px 40px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 11vh;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 9vw;\n    margin-bottom: 15.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 7vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 7vw;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(30.73% + 4.58vw);\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 0;\n    width: 58vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 42vw;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    text-align: left;\n    font-size: 3vw;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    height: 70vh;\n    width: 32%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-left: 2.27%;\n    font-size: 4vw;\n    margin-top: 30vh;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 5px 40px;\n    left: calc(22%);\n  }\n}\n@media only screen and (max-width: 480px) {\n  .fullprice[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 11vh;\n    width: 100%;\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    margin-left: 19.27%;\n    font-size: 9vw;\n    margin-bottom: 16.01vh;\n  }\n  .fullprice__machine[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 40vh;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    font-size: 7vw;\n  }\n  .fullprice__text-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    margin-top: 2vh;\n    margin-left: 19.27%;\n    font-size: 7vw;\n  }\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    left: calc(30.73% + 4.58vw);\n  }\n}\n@media only screen and (max-width: 384px) {\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .fullprice__back-button[_ngcontent-%COMP%] {\n    margin-top: 9px;\n    left: calc(30.73%);\n  }\n  .fullprice__title[_ngcontent-%COMP%] {\n    font-size: 36.93px;\n    margin-top: 114px;\n    margin-left: 41px;\n  }\n  .fullprice__title-wrap[_ngcontent-%COMP%] {\n    margin-top: 55px;\n  }\n  .fullprice__price[_ngcontent-%COMP%] {\n    font-size: 23.27px;\n  }\n  .fullprice__text[_ngcontent-%COMP%] {\n    font-size: 27.33px;\n    line-height: 31.49px;\n    letter-spacing: -1px;\n    margin-left: 41px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVsbHByaWNlL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmcvc3JjXFxhcHBcXGZ1bGxwcmljZVxcZnVsbHByaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mdWxscHJpY2UvZnVsbHByaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtBQ0ZGO0FETUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRFFFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0F4QlU7RUF5QlYsVUFBQTtBQ05KO0FEVUU7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDVEo7QURXSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFVBQUE7QUNUTjtBRGFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1pKO0FEZUU7RUFDRSxjQXJFVTtBQ3dEZDtBRGdCRTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkEzRVU7RUE0RVYsY0EzRVM7RUE0RVQsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNkSjtBRGtCQTtFQUVJO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNoQko7RURtQkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDakJKO0VEb0JFO0lBQ0UsZ0JBQUE7RUNsQko7RURxQkU7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7RUNuQko7QUFDRjtBRHVCQTtFQUVJO0lBQ0UsYUFBQTtFQ3RCSjtBQUNGO0FEMkJBO0VBRUk7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUMxQko7RUQ2QkU7SUFDRSxnQkFBQTtFQzNCSjtFRDhCRTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQzVCSjtBQUNGO0FEZ0NBO0VBRUk7SUFDRSxpQkFBQTtFQy9CSjtFRGtDRTtJQUNFLGlCQUFBO0VDaENKO0FBQ0Y7QURvQ0E7RUFFSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNuQ0o7QUFDRjtBRHVDQTtFQUVJO0lBQ0UsZ0JBQUE7RUN0Q0o7QUFDRjtBRDBDQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VDekNKO0VENENFO0lBQ0UsZUFBQTtFQzFDSjtFRDZDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzNDSjtBQUNGO0FEK0NBO0VBRUk7SUFDRSxnQkFBQTtFQzlDSjtFRGlERTtJQUNFLGVBQUE7RUMvQ0o7QUFDRjtBRG1EQTtFQUVJO0lBQ0UsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNsREo7RURxREU7SUFDRSxlQUFBO0VDbkRKO0VEc0RFO0lBQ0UsZUFBQTtFQ3BESjtFRHVERTtJQUNFLGdCQUFBO0VDckRKO0FBQ0Y7QUR5REE7RUFHSTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUN6REo7RUQ0REU7SUFDRSxZQUFBO0VDMURKO0VENkRFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDM0RKO0VEOERFO0lBQ0UsaUJBQUE7RUM1REo7QUFDRjtBRGdFQTtFQUdJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQ2hFSjtFRG1FRTtJQUNFLFVBQUE7RUNqRUo7RURtRUk7SUFDRSxjQUFBO0VDakVOO0VEcUVFO0lBQ0UsZUFBQTtFQ25FSjtBQUNGO0FEdUVBO0VBQ0U7SUFDRSxzQkFBQTtFQ3JFRjtFRHVFRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQ3JFSjtFRHdFRTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQ3RFSjtFRHlFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDdkVKO0VEMEVFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUN4RUo7RUQyRUU7SUFDRSxXQUFBO0VDekVKO0VENEVFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUMxRUo7RUQ2RUU7SUFDRSxrQkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDM0VKO0FBQ0Y7QUQrRUE7RUFDRTtJQUNFLG1CQUFBO0VDN0VGO0VEK0VFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUM3RUo7RURnRkU7SUFDRSxXQUFBO0VDOUVKO0VEaUZFO0lBQ0UsY0FBQTtFQy9FSjtFRGtGRTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDaEZKO0VEbUZFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNqRko7RURvRkU7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUNsRko7RURxRkU7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDbkZKO0FBQ0Y7QUR1RkE7RUFDRTtJQUNFLHNCQUFBO0VDckZGO0VEdUZFO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0VDckZKO0VEd0ZFO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VDdEZKO0VEeUZFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUN2Rko7RUQwRkU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ3hGSjtFRDJGRTtJQUNFLFdBQUE7RUN6Rko7RUQ0RkU7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQzFGSjtFRDZGRTtJQUNFLDJCQUFBO0lBQ0Esa0JBQUE7RUMzRko7QUFDRjtBRCtGQTtFQUVJO0lBQ0UsaUJBQUE7RUM5Rko7RURpR0U7SUFDRSxzQkFBQTtFQy9GSjtBQUNGO0FEbUdBO0VBQ0U7SUFDRSxtQkFBQTtFQ2pHRjtFRG1HRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VDakdKO0VEb0dFO0lBQ0UsV0FBQTtFQ2xHSjtFRHFHRTtJQUNFLGNBQUE7RUNuR0o7RURzR0U7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ3BHSjtFRHVHRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDckdKO0VEd0dFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDdEdKO0VEeUdFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUN2R0o7QUFDRjtBRDJHQTtFQUNFO0lBQ0UsWUFBQTtFQ3pHRjtFRDJHRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDekdKO0VENEdFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQzFHSjtBQUNGO0FEOEdBO0VBQ0U7SUFDRSxzQkFBQTtFQzVHRjtFRDhHRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQzVHSjtFRCtHRTtJQUNFLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0VDN0dKO0VEZ0hFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUM5R0o7RURpSEU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDL0dKO0VEa0hFO0lBQ0UsV0FBQTtFQ2hISjtFRG1IRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUNqSEo7RURvSEU7SUFDRSwyQkFBQTtJQUNBLGVBQUE7RUNsSEo7QUFDRjtBRHNIQTtFQUNFO0lBQ0UsbUJBQUE7RUNwSEY7RURzSEU7SUFDRSxpQkFBQTtFQ3BISjtFRHVIRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VDckhKO0VEd0hFO0lBQ0UsV0FBQTtFQ3RISjtFRHlIRTtJQUNFLGNBQUE7RUN2SEo7RUQwSEU7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ3hISjtFRDJIRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDekhKO0VENEhFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUMxSEo7RUQ2SEU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDM0hKO0FBQ0Y7QUQrSEE7RUFDRTtJQUNFLHNCQUFBO0VDN0hGO0VEK0hFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VDN0hKO0VEZ0lFO0lBQ0UsbUJBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7RUM5SEo7RURpSUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQy9ISjtFRGtJRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUNoSUo7RURtSUU7SUFDRSxXQUFBO0VDaklKO0VEb0lFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQ2xJSjtFRHFJRTtJQUNFLDJCQUFBO0VDbklKO0FBQ0Y7QUR1SUE7RUFDRTtJQUNFLGdCQUFBO0VDcklGO0FBQ0Y7QUR3SUE7RUFDRTtJQUNFLGdCQUFBO0VDdElGO0FBQ0Y7QUR5SUE7RUFFSTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQ3hJSjtFRDJJRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ3pJSjtFRDRJRTtJQUNFLGdCQUFBO0VDMUlKO0VENklFO0lBQ0Usa0JBQUE7RUMzSUo7RUQ4SUU7SUFDRSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtFQzVJSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZnVsbHByaWNlL2Z1bGxwcmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4uZnVsbHByaWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHJcblxyXG4gICZfX3RpdGxlLXdyYXAge1xyXG4gICAgd2lkdGg6IDU4dnc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzAuNDd2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0yLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTEyLjMzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICB9XHJcblxyXG4gICZfX3ByaWNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICBmb250LXNpemU6IDQ3LjI5cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fbWFjaGluZSB7XHJcbiAgICB0b3A6IDQuOTV2aDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA3MC43NnZoO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQtd3JhcCB7XHJcbiAgICB3aWR0aDogNDJ2dztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDM1LjIzdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcclxuICAgIGZvbnQtc2l6ZTogNTEuOTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19saW5rIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgfVxyXG5cclxuICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQuNTh2dyk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjQuMjFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDc3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDExLjkwdmg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0LjQ2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNC40NnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgIHBhZGRpbmc6IDF2aCA0LjU4dnc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDh2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41dnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiA0NC43OSU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjF2aDtcclxuICAgICAgZm9udC1zaXplOiA5Mi4zM3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMi41dmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAydmggNC41OHZ3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMzdweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3ZoO1xyXG4gICAgICBmb250LXNpemU6IDkyLjMzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUycHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTkwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzhweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3ZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTd2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZ2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzMuNjF2aDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTEuMDR2aDtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3ZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjcuNjF2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIGhlaWdodDogNjd2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDExMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDdweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiAzMiU7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNTVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xyXG4gICAgICBmb250LXNpemU6IDcyLjE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0LjAxdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDQ1LjQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgZm9udC1zaXplOiA1My40cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcclxuICAgICAgcGFkZGluZzogMTVweCA3N3B4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB3aWR0aDogNTh2dztcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0LXdyYXAge1xyXG4gICAgICB3aWR0aDogNDJ2dztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgd2lkdGg6IDMyJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IGNhbGMoMzAuNzMlKTtcclxuICAgICAgcGFkZGluZzogOHB4IDUwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJl9fdGl0bGUtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1NXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzIuMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTQuMDF2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDB2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDUuNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0LXdyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xyXG4gICAgICBmb250LXNpemU6IDUzLjRweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcclxuICAgICAgcGFkZGluZzogMTVweCA3N3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mdWxscHJpY2Uge1xyXG4gICAgJl9fdGl0bGUtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTIuMDF2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgJl9fdGl0bGUtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIHdpZHRoOiA1OHZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQtd3JhcCB7XHJcbiAgICAgIHdpZHRoOiA0MnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcHJpY2Uge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICB3aWR0aDogMzIlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgbWFyZ2luLXRvcDogMzB2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogY2FsYygzMC43MyUpO1xyXG4gICAgICBwYWRkaW5nOiA4cHggNTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMnB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBoZWlnaHQ6IDY1dmg7XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBsZWZ0OiBjYWxjKDIyJSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNS4wMXZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZS13cmFwIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgd2lkdGg6IDU4dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDQydnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyLjI3JTtcclxuICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgICBsZWZ0OiBjYWxjKDIyJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmZ1bGxwcmljZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX3RpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNi4wMXZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dC13cmFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcclxuICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XHJcbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAuZnVsbHByaWNlIHtcclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICBsZWZ0OiBjYWxjKDMwLjczJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDM2LjkzcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDExNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDFweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZS13cmFwIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjMuMjdweDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyNy4zM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzEuNDlweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZnVsbHByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICB3aWR0aDogNTh2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZ1bGxwcmljZV9fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMC40N3ZoO1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XG4gIGZvbnQtc2l6ZTogMTEyLjMzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzU1ZjkxYjtcbiAgei1pbmRleDogMTtcbn1cbi5mdWxscHJpY2VfX3ByaWNlIHtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDQ3LjI5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cbi5mdWxscHJpY2VfX21hY2hpbmUge1xuICB0b3A6IDQuOTV2aDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA3MC43NnZoO1xuICB3aWR0aDogMjB2dztcbn1cbi5mdWxscHJpY2VfX21hY2hpbmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgei1pbmRleDogMDtcbn1cbi5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gIHdpZHRoOiA0MnZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mdWxscHJpY2VfX3RleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzNS4yM3ZoO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDUxLjk1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cbi5mdWxscHJpY2VfX2xpbmsge1xuICBjb2xvcjogIzU1ZjkxYjtcbn1cbi5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgbGVmdDogY2FsYyg1MCUgLSA0LjU4dncpO1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ZjkxYjtcbiAgY29sb3I6ICMwMDRhOTk7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNC4yMXB4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBwYWRkaW5nOiAxOXB4IDc3cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1dmg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MXB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDd2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxMS45dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDQuNDZ2dztcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgZm9udC1zaXplOiAyLjV2dztcbiAgICBtYXJnaW4tbGVmdDogNC40NnZ3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDF2aCA0LjU4dnc7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICB3aWR0aDogNDQuNzklO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjF2aDtcbiAgICBmb250LXNpemU6IDkyLjMzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIuNXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDMwdmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIHBhZGRpbmc6IDJ2aCA0LjU4dnc7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjM3cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxN3ZoO1xuICAgIGZvbnQtc2l6ZTogOTIuMzNweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDI0dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MnB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTd2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDE3dmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDZ2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMzMuNjF2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMS4wNHZoO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICAuZnVsbHByaWNlX19iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTd2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjcuNjF2aDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICBoZWlnaHQ6IDY3dmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMTJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDdweCkge1xuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuZnVsbHByaWNlX19iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMTU1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA3Mi4xNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0LjAxdmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fbWFjaGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG4gIC5mdWxscHJpY2VfX3ByaWNlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0NS40NXB4O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA1My40cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XG4gICAgcGFkZGluZzogMTVweCA3N3B4O1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuZnVsbHByaWNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgd2lkdGg6IDU4dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dC13cmFwIHtcbiAgICB3aWR0aDogNDJ2dztcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA2dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fcHJpY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxuICAuZnVsbHByaWNlX19tYWNoaW5lIHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgd2lkdGg6IDMyJTtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0IHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogY2FsYygzMC43MyUpO1xuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZnVsbHByaWNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDE1NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xuICAgIGZvbnQtc2l6ZTogNzIuMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNC4wMXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDUuNDVweDtcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0LXdyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBtYXJnaW4tbGVmdDogMTkuMjclO1xuICAgIGZvbnQtc2l6ZTogNTMuNHB4O1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSArIDQuNTh2dyk7XG4gICAgcGFkZGluZzogMTVweCA3N3B4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDEyNXB4O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMi4wMXZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogNTh2dztcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0LXdyYXAge1xuICAgIHdpZHRoOiA0MnZ3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIGhlaWdodDogNzB2aDtcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIG1hcmdpbi10b3A6IDMwdmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSk7XG4gICAgcGFkZGluZzogOHB4IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzJweCkge1xuICAuZnVsbHByaWNlIHtcbiAgICBoZWlnaHQ6IDY1dmg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBsZWZ0OiBjYWxjKDIyJSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMTF2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICBmb250LXNpemU6IDl2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxNS4wMXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogN3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmZ1bGxwcmljZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuZnVsbHByaWNlX19iYWNrLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogNTh2dztcbiAgfVxuICAuZnVsbHByaWNlX190ZXh0LXdyYXAge1xuICAgIHdpZHRoOiA0MnZ3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIGhlaWdodDogNzB2aDtcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjI3JTtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xuICB9XG4gIC5mdWxscHJpY2VfX2JhY2stYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4IDQwcHg7XG4gICAgbGVmdDogY2FsYygyMiUpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mdWxscHJpY2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUtd3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMTF2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE5LjI3JTtcbiAgICBmb250LXNpemU6IDl2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxNi4wMXZoO1xuICB9XG4gIC5mdWxscHJpY2VfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuZnVsbHByaWNlX19wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogN3Z3O1xuICB9XG4gIC5mdWxscHJpY2VfX3RleHQtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1sZWZ0OiAxOS4yNyU7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIGxlZnQ6IGNhbGMoMzAuNzMlICsgNC41OHZ3KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAuZnVsbHByaWNlX190aXRsZS13cmFwIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mdWxscHJpY2VfX3RpdGxlLXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmZ1bGxwcmljZV9fYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBsZWZ0OiBjYWxjKDMwLjczJSk7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzYuOTNweDtcbiAgICBtYXJnaW4tdG9wOiAxMTRweDtcbiAgICBtYXJnaW4tbGVmdDogNDFweDtcbiAgfVxuICAuZnVsbHByaWNlX190aXRsZS13cmFwIHtcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xuICB9XG4gIC5mdWxscHJpY2VfX3ByaWNlIHtcbiAgICBmb250LXNpemU6IDIzLjI3cHg7XG4gIH1cbiAgLmZ1bGxwcmljZV9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNy4zM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMS40OXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MXB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FullpriceComponent, [{
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

    MainComponent.??fac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 6,
      vars: 1,
      consts: [[1, "main"], [1, "main__logo"], ["alt", "logo", 3, "src"], [1, "main__hiddenElement"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["main[_ngcontent-%COMP%] {\n  background-image: url('main_bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  background-attachment: fixed;\n}\n\n.main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main__logo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 9.35%;\n  top: 3vh;\n  width: 27.2%;\n  height: 20.66vh;\n}\n\n.main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.main__hiddenElement[_ngcontent-%COMP%] {\n  margin-top: 30vh;\n  visibility: hidden;\n}\n\n@media only screen and (max-width: 1280px) {\n  .main__logo[_ngcontent-%COMP%] {\n    top: 5vh;\n  }\n}\n\n@media only screen and (max-width: 835px) {\n  main[_ngcontent-%COMP%] {\n    background-image: url('main_bg-table.png');\n  }\n\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 0vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n\n@media only screen and (max-width: 812px) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 9.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 800px) and (max-device-height: 1280px) and (orientation: portrait) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 2.05vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 0vh;\n  }\n}\n\n@media only screen and (max-width: 800px) and (max-device-height: 640px) and (orientation: landscape) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 9.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .main__logo[_ngcontent-%COMP%] {\n    top: 0vh;\n  }\n}\n\n@media only screen and (max-width: 740px) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 6.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 0vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n\n@media only screen and (max-width: 568px) {\n  .main__logo[_ngcontent-%COMP%] {\n    right: 9.35%;\n    top: 6.03vh;\n    width: 27.2%;\n    height: 20.66vh;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 37.89%;\n    top: 0vh;\n    right: 31.055%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n\n@media only screen and (max-width: 414px) {\n  main[_ngcontent-%COMP%] {\n    background-image: url('main_bg-mob.png');\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .main__logo[_ngcontent-%COMP%] {\n    width: 49.375%;\n    top: 0vh;\n    right: 25.3125%;\n  }\n  .main__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    margin-top: 2.05vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9GOlxccHJvamVjdFxcRDJcXFR1Ym9yZ1xcY29kZVxcdHVib3JnL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRE47O0FES0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0E7RUFFSTtJQUNFLFFBQUE7RUNMSjtBQUNGOztBRFVBO0VBQ0U7SUFFRSwwQ0FBQTtFQ1RGOztFRFlBO0lBQ0UsYUFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0VDVEY7RURXRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQ1RKO0FBQ0Y7O0FEYUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNaSjtFRGVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNiTjtBQUNGOztBRGtCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDaEJGO0VEa0JFO0lBQ0UsZUFBQTtFQ2hCSjtBQUNGOztBRG9CQTtFQUVJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ25CSjtFRHNCSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDcEJOO0FBQ0Y7O0FEeUJBO0VBRUk7SUFDRSxRQUFBO0VDeEJKO0FBQ0Y7O0FENEJBO0VBRUk7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDM0JKO0VEOEJJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUM1Qk47QUFDRjs7QURpQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFQy9CRjtFRGlDRTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQy9CSjtBQUNGOztBRG1DQTtFQUVJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ2xDSjtFRHFDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDbkNOO0FBQ0Y7O0FEd0NBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUN0Q0Y7RUR3Q0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUN0Q0o7QUFDRjs7QUQwQ0E7RUFDRTtJQUVFLHdDQUFBO0VDekNGO0FBQ0Y7O0FENENBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7RUMxQ0Y7RUQ0Q0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUMxQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIC8vaGVpZ2h0OiA5NXZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX2xvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDkuMzUlO1xyXG4gICAgdG9wOiAzdmg7XHJcbiAgICB3aWR0aDogMjcuMiU7XHJcbiAgICBoZWlnaHQ6IDIwLjY2dmg7XHJcblxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19oaWRkZW5FbGVtZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5tYWluIHtcclxuICAgICZfX2xvZ28ge1xyXG4gICAgICB0b3A6IDV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICAvL2hlaWdodDogOTAuMzN2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLXRhYmxlLnBuZycpO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX2xvZ28ge1xyXG4gICAgd2lkdGg6IDM3Ljg5JTtcclxuICAgIHRvcDogMHZoO1xyXG4gICAgcmlnaHQ6IDMxLjA1NSU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyLjA1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgJl9fbG9nbyB7XHJcbiAgICAgIHJpZ2h0OiA5LjM1JTtcclxuICAgICAgdG9wOiA5LjAzdmg7XHJcbiAgICAgIHdpZHRoOiAyNy4yJTtcclxuICAgICAgaGVpZ2h0OiAyMC42NnZoO1xyXG5cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLm1haW5fX2xvZ28ge1xyXG4gICAgd2lkdGg6IDM3Ljg5JTtcclxuICAgIHRvcDogMi4wNXZoO1xyXG4gICAgcmlnaHQ6IDMxLjA1NSU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5tYWluIHtcclxuICAgICZfX2xvZ28ge1xyXG4gICAgICByaWdodDogOS4zNSU7XHJcbiAgICAgIHRvcDogOS4wM3ZoO1xyXG4gICAgICB3aWR0aDogMjcuMiU7XHJcbiAgICAgIGhlaWdodDogMjAuNjZ2aDtcclxuXHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluIHtcclxuICAgICZfX2xvZ28ge1xyXG4gICAgICB0b3A6IDB2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICAmX19sb2dvIHtcclxuICAgICAgcmlnaHQ6IDkuMzUlO1xyXG4gICAgICB0b3A6IDYuMDN2aDtcclxuICAgICAgd2lkdGg6IDI3LjIlO1xyXG4gICAgICBoZWlnaHQ6IDIwLjY2dmg7XHJcblxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWFpbl9fbG9nbyB7XHJcbiAgICB3aWR0aDogMzcuODklO1xyXG4gICAgdG9wOiAwdmg7XHJcbiAgICByaWdodDogMzEuMDU1JTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDIuMDV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcclxuICAubWFpbiB7XHJcbiAgICAmX19sb2dvIHtcclxuICAgICAgcmlnaHQ6IDkuMzUlO1xyXG4gICAgICB0b3A6IDYuMDN2aDtcclxuICAgICAgd2lkdGg6IDI3LjIlO1xyXG4gICAgICBoZWlnaHQ6IDIwLjY2dmg7XHJcblxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubWFpbl9fbG9nbyB7XHJcbiAgICB3aWR0aDogMzcuODklO1xyXG4gICAgdG9wOiAwdmg7XHJcbiAgICByaWdodDogMzEuMDU1JTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDIuMDV2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICBtYWluIHtcclxuICAgIC8vIGhlaWdodDogOTIuNjB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLW1vYi5wbmcnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAubWFpbl9fbG9nbyB7XHJcbiAgICB3aWR0aDogNDkuMzc1JTtcclxuICAgIHRvcDogMHZoO1xyXG4gICAgcmlnaHQ6IDI1LjMxMjUlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMi4wNXZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJtYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fX2xvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5LjM1JTtcbiAgdG9wOiAzdmg7XG4gIHdpZHRoOiAyNy4yJTtcbiAgaGVpZ2h0OiAyMC42NnZoO1xufVxuLm1haW5fX2xvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYWluX19oaWRkZW5FbGVtZW50IHtcbiAgbWFyZ2luLXRvcDogMzB2aDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgdG9wOiA1dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODM1cHgpIHtcbiAgbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLXRhYmxlLnBuZ1wiKTtcbiAgfVxuXG4gIC5tYWluX19sb2dvIHtcbiAgICB3aWR0aDogMzcuODklO1xuICAgIHRvcDogMHZoO1xuICAgIHJpZ2h0OiAzMS4wNTUlO1xuICB9XG4gIC5tYWluX19sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIuMDV2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgcmlnaHQ6IDkuMzUlO1xuICAgIHRvcDogOS4wM3ZoO1xuICAgIHdpZHRoOiAyNy4yJTtcbiAgICBoZWlnaHQ6IDIwLjY2dmg7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHdpZHRoOiAzNy44OSU7XG4gICAgdG9wOiAyLjA1dmg7XG4gICAgcmlnaHQ6IDMxLjA1NSU7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAwdmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHJpZ2h0OiA5LjM1JTtcbiAgICB0b3A6IDkuMDN2aDtcbiAgICB3aWR0aDogMjcuMiU7XG4gICAgaGVpZ2h0OiAyMC42NnZoO1xuICB9XG4gIC5tYWluX19sb2dvIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluX19sb2dvIHtcbiAgICB0b3A6IDB2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgcmlnaHQ6IDkuMzUlO1xuICAgIHRvcDogNi4wM3ZoO1xuICAgIHdpZHRoOiAyNy4yJTtcbiAgICBoZWlnaHQ6IDIwLjY2dmg7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHdpZHRoOiAzNy44OSU7XG4gICAgdG9wOiAwdmg7XG4gICAgcmlnaHQ6IDMxLjA1NSU7XG4gIH1cbiAgLm1haW5fX2xvZ28gaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMi4wNXZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5tYWluX19sb2dvIHtcbiAgICByaWdodDogOS4zNSU7XG4gICAgdG9wOiA2LjAzdmg7XG4gICAgd2lkdGg6IDI3LjIlO1xuICAgIGhlaWdodDogMjAuNjZ2aDtcbiAgfVxuICAubWFpbl9fbG9nbyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubWFpbl9fbG9nbyB7XG4gICAgd2lkdGg6IDM3Ljg5JTtcbiAgICB0b3A6IDB2aDtcbiAgICByaWdodDogMzEuMDU1JTtcbiAgfVxuICAubWFpbl9fbG9nbyBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyLjA1dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYWluX2JnLW1vYi5wbmdcIik7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm1haW5fX2xvZ28ge1xuICAgIHdpZHRoOiA0OS4zNzUlO1xuICAgIHRvcDogMHZoO1xuICAgIHJpZ2h0OiAyNS4zMTI1JTtcbiAgfVxuICAubWFpbl9fbG9nbyBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyLjA1dmg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
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

    PromokodComponent.??fac = function PromokodComponent_Factory(t) {
      return new (t || PromokodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_streets_service__WEBPACK_IMPORTED_MODULE_3__["StreetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PromokodComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PromokodComponent,
      selectors: [["app-promokod"]],
      decls: 67,
      vars: 6,
      consts: [[1, "promokod"], [1, "promokod-wrap"], [1, "promokod__textimg"], [1, "promokod__textimg-wrap"], [1, "promokod__title"], [1, "title-home"], [1, "title-party"], [1, "title-last"], [1, "promokod__links-wrap"], [1, "promokod__links"], ["routerLink", "/fullprice"], ["routerLink", "/rules", "routerLinkActive", "active"], [1, "links__exception"], [1, "promokod__machine"], ["alt", "machine", 3, "src"], [1, "promokod__content"], [1, "content__title"], [1, "content__action"], [1, "action__item"], ["alt", "beer", 3, "src"], [1, "action__plus"], ["alt", "plusicon", 3, "src"], ["alt", "misic", 3, "src"], ["alt", "play", 3, "src"], [1, "content__input"], ["for", "quantity", 1, "input__title"], [1, "input__inbut"], ["type", "text", "id", "quantity", "name", "quantity", "placeholder", "\u0432\u0432\u0435\u0434\u0438 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434", 3, "keyup.enter"], ["quantity", ""], [3, "click"], ["href", "https://t.me/Home_Party_Bot", "target", "_blank"]],
      template: function PromokodComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u041F\u0420\u0418\u0412\u0406\u0422,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u042F - HOME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "PARTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "PARTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "MASTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\u043A\u0443\u043F\u0438\u0442\u0438 \u043C\u0435\u043D\u0435 \u0437\u0430 \u043F\u043E\u0432\u043D\u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u043A\u0446\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\u0442\u0435\u0445. \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 093 566 88 81");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\u0412 \u043C\u0435\u043D\u0435 \u0454 \u0432\u0441\u0435, \u0449\u043E \u0442\u0440\u0435\u0431\u0430 \u0434\u043B\u044F \u0442\u0432\u043E\u0454\u0457 \u0445\u043E\u0443\u043C \u043F\u0430\u0442\u0456:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "30 \u043B\u0456\u0442\u0440\u0456\u0432 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " \u043F\u0438\u0432\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Tuborg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\u043A\u043E\u043B\u043E\u043D\u043A\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " \u0434\u043B\u044F \u043F\u0430\u0442\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\u0456\u0433\u0440\u0438 \u0434\u043B\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " \u0442\u0432\u043E\u0457\u0445 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " \u0433\u043E\u0441\u0442\u0435\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\u0429\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0435\u043D\u0435 \u0437\u0430 1 \u0433\u0440\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function PromokodComponent_Template_input_keyup_enter_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](60);

            return ctx.onEnter(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PromokodComponent_Template_button_click_61_listener() {
            return ctx.checkPromokod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043C\u043E\u0436\u043D\u0430 \u0437\u0434\u043E\u0431\u0443\u0442\u0438 \u0432 Telegram. \u0423 \u0447\u0430\u0442-\u0431\u043E\u0442\u0456 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "@HomePartyBot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.machine, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.beer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.plusicon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.misic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.plusicon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.play, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
      styles: [".promokod-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.promokod__textimg[_ngcontent-%COMP%] {\n  display: flex;\n  width: 57.56%;\n}\n.promokod__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 9vh;\n}\n.promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 16px;\n  padding: 3.285px 27px 3.285px 49px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  letter-spacing: -2.5px;\n  font-size: 104.43px;\n  line-height: 100%;\n  color: #fff;\n  background-color: #004a99;\n}\n.promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n  margin-bottom: 12.99vh;\n}\n.promokod__links[_ngcontent-%COMP%] {\n  margin-left: 51px;\n  display: flex;\n  justify-content: space-between;\n  width: 35vw;\n  position: absolute;\n}\n.promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #55f91b;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 23.71px;\n  line-height: 100%;\n  cursor: pointer;\n  z-index: 1;\n}\n.promokod__links[_ngcontent-%COMP%]   .links__exception[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.promokod__machine[_ngcontent-%COMP%] {\n  height: 74.47vh;\n  width: 44.79%;\n}\n.promokod__machine[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.promokod__content[_ngcontent-%COMP%] {\n  width: 36.25%;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n  margin-top: 25vh;\n  margin-bottom: 3vh;\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 30.88px;\n  line-height: 100%;\n  letter-spacing: -1px;\n  color: #55f91b;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2vh;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n  width: 18.22%;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 1.23vh;\n  width: 100%;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-family: \"MuseoSansCyrl700\";\n  font-size: 20.83px;\n  color: #55f91b;\n  text-transform: uppercase;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 19.5px;\n  color: #fff;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 35px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 19px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 18px 30px 18px 30px;\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid #99a1a8;\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 26.76px;\n  color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  margin-right: 9px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 20px 47px 20px 47px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 25.66px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 7px;\n  cursor: pointer;\n  width: 221px;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 35px;\n  letter-spacing: -1px;\n  color: #fff;\n}\n.promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #55f91b;\n}\n.rules[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n}\n@media only screen and (min-width: 1681px) {\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 55.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 5vw;\n    padding: 3.285px 1.6vw 3.285px 2.91vw;\n    margin-bottom: 1.52vh;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 35vw;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.75vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n    margin-bottom: 0vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 2.08vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 0.56vw;\n    font-size: 1.1vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n    margin-bottom: 5px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    padding: 18px 2.8vw 18px 2.8vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 20.69vw;\n    font-size: 1.5vw;\n    border-radius: 0.5vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.95vw;\n  }\n}\n@media only screen and (max-width: 1677px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n    width: 12.5vw;\n  }\n}\n@media only screen and (max-width: 1666px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 1.5vh 5.4% 1.5vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1.7vh 8.46% 1.7vh 8.46%;\n  }\n}\n@media only screen and (max-width: 1663px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n  }\n}\n@media only screen and (max-width: 1660px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n  }\n}\n@media only screen and (max-width: 1644px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    letter-spacing: 0;\n  }\n}\n@media only screen and (max-width: 1600px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 15vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 17%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1vw;\n  }\n}\n@media only screen and (max-width: 1536px) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 9vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.9px;\n  }\n}\n@media only screen and (max-width: 1300px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.8px;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n    margin-bottom: 1.52vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 26vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n}\n@media only screen and (max-width: 1279px) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 9vh;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 55.21%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 42%;\n    margin-left: 5.31%;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (max-width: 1253px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.75px;\n  }\n}\n@media only screen and (max-width: 1177px) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 10vh;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -0.61px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 2.8vh;\n  }\n}\n@media only screen and (max-width: 854px) {\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 25.5vw;\n  }\n}\n@media only screen and (max-width: 847px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 7vh;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n@media only screen and (max-width: 835px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 69.27%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.63px;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 84.27vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 24.88px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 27.21%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 28.23px;\n    margin-bottom: 1.87vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18.34px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 30.39px;\n    margin-bottom: 1.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 23px;\n    padding: 23.7px 15px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 21.17px;\n    padding: 20.883px 60px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 32.19px;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 47.63px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 58%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n    width: 43%;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 42%;\n    margin-left: 5.31%;\n    position: absolute;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14.5px;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 36.25%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    margin-top: 33vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n  }\n}\n@media only screen and (max-width: 800px) and (max-device-height: 1280px) and (orientation: portrait) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 69.27%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.63px;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-bottom: 0;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 84.27vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 24.88px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 27.21%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 28.23px;\n    margin-bottom: 1.87vh;\n    letter-spacing: -0.3px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18.34px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 30.39px;\n    margin-bottom: 1.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 23px;\n    padding: 23.7px 15px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 21.17px;\n    padding: 20.883px 60px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 32.19px;\n  }\n}\n@media only screen and (max-width: 800px) and (max-device-height: 640px) and (orientation: landscape) {\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 7vh;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-left: 17px;\n    letter-spacing: 0;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    letter-spacing: -0.9px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18.09px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 17.5px 15px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 19.5px 60px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: -1px;\n  }\n}\n@media only screen and (max-width: 741px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-bottom: 18vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 58%;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n    width: 43%;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 42%;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 36.25%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    margin-top: 33vh;\n    letter-spacing: 0;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n    letter-spacing: -0.5px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n    margin-bottom: 0;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 7.5vw;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    display: inline-block;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 84.27vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 24.88px;\n  }\n  .promokod__links[_ngcontent-%COMP%]   .links__exception[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 33%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 3.45vw;\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 30.39px;\n    margin-bottom: 1.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 23px;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 21.17px;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n    width: 28.5vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.05vw;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-bottom: 18vh;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 58%;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    height: 80vh;\n    width: 43%;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 36.25%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    font-size: 1.735vw;\n    margin-top: 33vh;\n    letter-spacing: 0;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 3.8vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    margin-bottom: 1.85vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.7vh 5.4% 1.7vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n    padding: 1.9vh 8.46% 1.9vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.1vw;\n    letter-spacing: -0.35px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .promokod-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promokod__textimg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 20.41vh;\n    margin-bottom: 0;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 7.5vw;\n    padding-left: 2.21%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    display: inline-block;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 75vh;\n    width: 100%;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 3.8vw;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 33%;\n    height: 100%;\n    margin-top: 6.93vh;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 72.26%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 3.45vw;\n    margin-bottom: 1vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 18.37%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 1.19vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.2vw;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    width: 5.94%;\n    margin-top: 3.22vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 4vw;\n    margin-bottom: 0.46vh;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 4.5vw;\n    padding: 1vh 5.4% 1vh 5.4%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n    padding: 1vh 8.46% 1vh 8.46%;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 4.05vw;\n  }\n}\n@media only screen and (max-width: 384px) {\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    top: 80vh;\n  }\n}\n@media only screen and (max-width: 375px) {\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    top: 75vh;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .promokod__content[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .promokod__textimg-wrap[_ngcontent-%COMP%] {\n    width: 59.07%;\n  }\n  .promokod__title[_ngcontent-%COMP%] {\n    margin-top: 107px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 34.1px;\n    margin-bottom: 6px;\n    padding: 0.5px 0px 0.5px 9px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    padding-right: 9px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n    padding-right: 8px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n    padding-right: 16px;\n  }\n  .promokod__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-party[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .promokod__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    padding-right: 16px;\n  }\n  .promokod__machine[_ngcontent-%COMP%] {\n    width: 122px;\n    margin-top: 72px;\n  }\n  .promokod__links-wrap[_ngcontent-%COMP%] {\n    top: 92vh;\n  }\n  .promokod__links[_ngcontent-%COMP%] {\n    width: 255px;\n    margin-left: 35px;\n    bottom: 7px;\n  }\n  .promokod__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13.36px;\n  }\n  .promokod__content[_ngcontent-%COMP%] {\n    width: 255px;\n    z-index: 1;\n    margin-top: -12px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__title[_ngcontent-%COMP%] {\n    margin-bottom: 11px;\n    font-size: 12.95px;\n    letter-spacing: -0.35px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%] {\n    width: 46px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 3px;\n    font-size: 8.64px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%] {\n    margin-top: 17px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__action[_ngcontent-%COMP%]   .action__plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 9px;\n    font-size: 16.31px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   .input__inbut[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 8px 12px 8px 12px;\n    font-size: 12.35px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 21px 9px 21px;\n    font-size: 11.36px;\n  }\n  .promokod__content[_ngcontent-%COMP%]   .content__input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14.76px;\n    letter-spacing: -0.41px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9rb2QvRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZy9zcmNcXGFwcFxccHJvbW9rb2RcXHByb21va29kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9tb2tvZC9wcm9tb2tvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7QUNISjtBRE1FO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNKSjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNMSjtBRE9JO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkE3Qk87QUN3QmI7QURRSTtFQUNFLGFBQUE7QUNOTjtBRFVNO0VBQ0Usc0JBQUE7QUNSUjtBRGNFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGNJO0VBQ0UsY0FyRFE7RUFzRFIsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDWk47QURlTTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNiUjtBRGtCRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDaEJKO0FEa0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDaEJOO0FEb0JFO0VBQ0UsYUFBQTtBQ2xCSjtBRHFCTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBMUZNO0FDdUVkO0FEc0JNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNwQlI7QUR1QlU7RUFDRSxnQkFBQTtBQ3JCWjtBRHVCWTtFQUNFLFdBQUE7QUNyQmQ7QUR5QlU7RUFDRSxhQUFBO0FDdkJaO0FEeUJZO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDdkJkO0FEMEJZO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F2SEE7RUF3SEEseUJBQUE7QUN4QmQ7QUQrQlE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQzdCVjtBRGlDVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDL0JaO0FEbUNRO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDakNWO0FEb0NRO0VBQ0UsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBOUpJO0VBK0pKLFlBQUE7RUFDQSxjQS9KRztFQWdLSCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNsQ1Y7QURxQ1E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNuQ1Y7QURxQ1U7RUFDRSxjQTlLRTtBQzJJZDtBRDJDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FDeENGO0FEMkNBO0VBRUk7SUFDRSxhQUFBO0VDekNKO0VEOENJO0lBQ0UsY0FBQTtJQUNBLHFDQUFBO0lBQ0EscUJBQUE7RUM1Q047RURnREU7SUFDRSxXQUFBO0VDOUNKO0VEZ0RJO0lBQ0UsZ0JBQUE7RUM5Q047RURvRE07SUFDRSxpQkFBQTtFQ2xEUjtFRHFETTtJQUNFLGtCQUFBO0VDbkRSO0VEc0RVO0lBQ0UsaUJBQUE7RUNwRFo7RURzRFk7SUFDRSxhQUFBO0VDcERkO0VEeURZO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtFQ3ZEZDtFRDhEUTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUM1RFY7RUQrRFE7SUFDRSxjQUFBO0lBQ0EsOEJBQUE7RUM3RFY7RURnRVE7SUFDRSxrQkFBQTtFQzlEVjtFRGlFUTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VDL0RWO0VEa0VRO0lBQ0UsaUJBQUE7RUNoRVY7QUFDRjtBRHVFQTtFQUVJO0lBQ0UsY0FBQTtFQ3RFSjtFRDZFVTtJQUNFLGdCQUFBO0VDM0VaO0VEOEVVO0lBQ0UsaUJBQUE7RUM1RVo7RURrRlE7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUNoRlY7RURtRlE7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0VDakZWO0VEb0ZRO0lBQ0UsZ0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7RUNsRlY7QUFDRjtBRHlGQTtFQUtVO0lBQ0UsOEJBQUE7RUMzRlY7RUQ4RlE7SUFDRSxnQ0FBQTtFQzVGVjtBQUNGO0FEbUdBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pHRjtBQUNGO0FEb0dBO0VBQ0U7SUFDRSxpQkFBQTtFQ2xHRjtBQUNGO0FEcUdBO0VBTVE7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VDeEdSO0FBQ0Y7QUQ4R0E7RUFHTTtJQUNFLGNBQUE7RUM5R047RURpSEk7SUFDRSxtQkFBQTtFQy9HTjtFRG9ISTtJQUNFLGtCQUFBO0VDbEhOO0VEb0hNO0lBQ0UsVUFBQTtFQ2xIUjtFRG9IUTtJQUNFLGdCQUFBO0VDbEhWO0FBQ0Y7QUR5SEE7RUFJTTtJQUNFLGtCQUFBO0VDMUhOO0VEaUlNO0lBQ0UsbUJBQUE7RUMvSFI7RURtSVE7SUFDRSxrQkFBQTtFQ2pJVjtFRG9JUTtJQUNFLGtCQUFBO0VDbElWO0FBQ0Y7QUR5SUE7RUFDRTtJQUNFLHNCQUFBO0VDdklGO0FBQ0Y7QUQwSUE7RUFDRTtJQUNFLHNCQUFBO0VDeElGO0FBQ0Y7QUQySUE7RUFHTTtJQUNFLGdCQUFBO0lBQ0EscUJBQUE7RUMzSU47RURpSk07SUFDRSxnQkFBQTtFQy9JUjtFRGtKTTtJQUNFLFdBQUE7RUNoSlI7QUFDRjtBRHNKQTtFQUVJO0lBQ0Usa0JBQUE7RUNySko7RUR3SkU7SUFDRSxhQUFBO0VDdEpKO0VEeUpFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VDdkpKO0VEeUpJO0lBQ0UsZ0JBQUE7RUN2Sk47QUFDRjtBRDRKQTtFQUNFO0lBQ0UsdUJBQUE7RUMxSkY7QUFDRjtBRDZKQTtFQUVJO0lBQ0UsbUJBQUE7RUM1Sko7RUQrSkU7SUFDRSxVQUFBO0VDN0pKO0FBQ0Y7QURpS0E7RUFFSTtJQUNFLFVBQUE7RUNoS0o7RURtS0U7SUFDRSxVQUFBO0VDaktKO0VEc0tNO0lBQ0UsdUJBQUE7RUNwS1I7RUR1S007SUFDRSxpQkFBQTtFQ3JLUjtBQUNGO0FEMktBO0VBQ0U7SUFDRSxhQUFBO0VDektGO0FBQ0Y7QUQ0S0E7RUFHTTtJQUNFLG1CQUFBO0VDNUtOO0VEK0tJO0lBQ0Usa0JBQUE7RUM3S047RURpTEU7SUFDRSxZQUFBO0VDL0tKO0VEaUxFO0lBQ0Usa0JBQUE7RUMvS0o7QUFDRjtBRG1MQTtFQUVJO0lBQ0Usc0JBQUE7RUNsTEo7RURxTEU7SUFDRSxXQUFBO0VDbkxKO0VEc0xFO0lBQ0UsYUFBQTtFQ3BMSjtFRHVMRTtJQUNFLG1CQUFBO0VDckxKO0VEdUxJO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ3JMTjtFRHdMSTtJQUNFLHFCQUFBO0VDdExOO0VEeUxJO0lBQ0UsV0FBQTtFQ3ZMTjtFRDBMSTtJQUNFLGFBQUE7RUN4TE47RUQyTEk7SUFDRSxnQkFBQTtFQ3pMTjtFRDZMRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUMzTEo7RUQ4TEU7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQzVMSjtFRDhMSTtJQUNFLGtCQUFBO0VDNUxOO0VEZ01FO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQzlMSjtFRGlNRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDL0xKO0VEa01NO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUNoTVI7RUR1TVU7SUFDRSxhQUFBO0VDck1aO0VEdU1ZO0lBQ0UscUJBQUE7RUNyTWQ7RUR3TVk7SUFDRSxrQkFBQTtFQ3RNZDtFRDBNVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQ3hNWjtFRDBNWTtJQUNFLFdBQUE7RUN4TWQ7RUQrTVE7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0VDN01WO0VEZ05RO0lBQ0UsZUFBQTtJQUNBLG9CQUFBO0VDOU1WO0VEaU5RO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtFQy9NVjtFRGtOUTtJQUNFLGtCQUFBO0VDaE5WO0FBQ0Y7QUR5TkE7RUFFSTtJQUNFLG1CQUFBO0VDeE5KO0VENE5JO0lBQ0Usa0JBQUE7RUMxTk47RUQ2Tkk7SUFDRSxXQUFBO0VDM05OO0VEOE5JO0lBQ0UsYUFBQTtFQzVOTjtFRCtOSTtJQUNFLHFCQUFBO0VDN05OO0VEZ09JO0lBQ0UsYUFBQTtFQzlOTjtFRGtPRTtJQUNFLFVBQUE7RUNoT0o7RURtT0U7SUFDRSxVQUFBO0VDak9KO0VEb09FO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNsT0o7RURxT0U7SUFDRSxnQkFBQTtFQ25PSjtFRHNPRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDcE9KO0VEc09JO0lBQ0UsaUJBQUE7RUNwT047RUR3T0U7SUFDRSxhQUFBO0VDdE9KO0VEeU9NO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQ3ZPUjtFRDRPVTtJQUNFLGdCQUFBO0VDMU9aO0VENk9VO0lBQ0UsaUJBQUE7RUMzT1o7RURpUFE7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUMvT1Y7RURrUFE7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0VDaFBWO0VEbVBRO0lBQ0UsZ0JBQUE7SUFDQSxnQ0FBQTtFQ2pQVjtFRG9QUTtJQUNFLGdCQUFBO0VDbFBWO0FBQ0Y7QUR5UEE7RUFFSTtJQUNFLHNCQUFBO0VDeFBKO0VEMlBFO0lBQ0UsV0FBQTtFQ3pQSjtFRDRQRTtJQUNFLGFBQUE7RUMxUEo7RUQ2UEU7SUFDRSxtQkFBQTtFQzNQSjtFRDZQSTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUMzUE47RUQ4UEk7SUFDRSxxQkFBQTtFQzVQTjtFRCtQSTtJQUNFLFdBQUE7RUM3UE47RURnUUk7SUFDRSxhQUFBO0VDOVBOO0VEaVFJO0lBQ0UscUJBQUE7SUFFQSxnQkFBQTtFQ2hRTjtFRG9RRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNsUUo7RURxUUU7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDblFKO0VEcVFJO0lBQ0Usa0JBQUE7RUNuUU47RUR1UUU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDclFKO0VEd1FFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUN0UUo7RUR5UU07SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0VDdlFSO0VEOFFVO0lBQ0UsYUFBQTtFQzVRWjtFRDhRWTtJQUNFLHFCQUFBO0VDNVFkO0VEK1FZO0lBQ0Usa0JBQUE7RUM3UWQ7RURpUlU7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUMvUVo7RURpUlk7SUFDRSxXQUFBO0VDL1FkO0VEc1JRO0lBQ0Usa0JBQUE7SUFDQSxxQkFBQTtFQ3BSVjtFRHVSUTtJQUNFLGVBQUE7SUFDQSxvQkFBQTtFQ3JSVjtFRHdSUTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUN0UlY7RUR5UlE7SUFDRSxrQkFBQTtFQ3ZSVjtBQUNGO0FEK1JBO0VBR007SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUMvUk47QUFDRjtBRG9TQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQ25TSjtFRHdTTTtJQUNFLHNCQUFBO0VDdFNSO0VEMlNVO0lBQ0Usa0JBQUE7RUN6U1o7RUQ0U1U7SUFDRSxrQkFBQTtFQzFTWjtFRGdUUTtJQUNFLGtCQUFBO0VDOVNWO0VEaVRRO0lBQ0Usb0JBQUE7RUMvU1Y7RURrVFE7SUFDRSxvQkFBQTtFQ2hUVjtFRG1UUTtJQUNFLG9CQUFBO0VDalRWO0FBQ0Y7QUR3VEE7RUFFSTtJQUNFLG1CQUFBO0VDdlRKO0VEMFRFO0lBQ0UsbUJBQUE7RUN4VEo7RUQwVEk7SUFDRSxnQkFBQTtFQ3hUTjtFRDJUSTtJQUNFLFdBQUE7RUN6VE47RUQ0VEk7SUFDRSxhQUFBO0VDMVROO0VENlRJO0lBQ0UscUJBQUE7RUMzVE47RUQ4VEk7SUFDRSxhQUFBO0VDNVROO0VEZ1VFO0lBQ0UsVUFBQTtFQzlUSjtFRGlVRTtJQUNFLFVBQUE7RUMvVEo7RURrVUU7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ2hVSjtFRG1VRTtJQUNFLGdCQUFBO0VDalVKO0VEb1VFO0lBQ0UsVUFBQTtFQ2xVSjtFRG9VSTtJQUNFLGdCQUFBO0VDbFVOO0VEc1VFO0lBQ0UsYUFBQTtFQ3BVSjtFRHVVTTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ3JVUjtFRDBVVTtJQUNFLGdCQUFBO0VDeFVaO0VEMlVVO0lBQ0UsaUJBQUE7RUN6VVo7RUQrVVE7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUM3VVY7RURnVlE7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0VDOVVWO0VEaVZRO0lBQ0UsZ0JBQUE7SUFDQSxnQ0FBQTtFQy9VVjtFRGtWUTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7RUNoVlY7QUFDRjtBRHVWQTtFQUVJO0lBQ0Usc0JBQUE7RUN0Vko7RUR5VkU7SUFDRSxXQUFBO0VDdlZKO0VEMFZFO0lBQ0UsVUFBQTtFQ3hWSjtFRDJWRTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7RUN6Vko7RUQyVkk7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDelZOO0VENFZJO0lBQ0UscUJBQUE7RUMxVk47RUQ2Vkk7SUFDRSxXQUFBO0VDM1ZOO0VEOFZJO0lBQ0UsYUFBQTtFQzVWTjtFRCtWSTtJQUNFLGdCQUFBO0lBQ0EscUJBQUE7RUM3Vk47RURpV0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDL1ZKO0VEa1dFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7RUNoV0o7RURrV0k7SUFDRSxrQkFBQTtFQ2hXTjtFRG1XTTtJQUNBLGdCQUFBO0VDaldOO0VEc1dFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ3BXSjtFRHVXRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDcldKO0VEd1dNO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUN0V1I7RUQyV1U7SUFDRSxhQUFBO0VDeldaO0VEMldZO0lBQ0UscUJBQUE7RUN6V2Q7RUQ0V1k7SUFDRSxnQkFBQTtFQzFXZDtFRDhXVTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQzVXWjtFRDhXWTtJQUNFLFdBQUE7RUM1V2Q7RURtWFE7SUFDRSxrQkFBQTtJQUNBLHFCQUFBO0VDalhWO0VEb1hRO0lBQ0UsZUFBQTtJQUNBLDhCQUFBO0VDbFhWO0VEcVhRO0lBQ0Usa0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7RUNuWFY7RURzWFE7SUFDRSxpQkFBQTtFQ3BYVjtBQUNGO0FENFhBO0VBRUk7SUFDRSxtQkFBQTtFQzNYSjtFRDhYRTtJQUNFLG1CQUFBO0VDNVhKO0VEOFhJO0lBQ0UsZ0JBQUE7RUM1WE47RUQrWEk7SUFDRSxXQUFBO0VDN1hOO0VEZ1lJO0lBQ0UsYUFBQTtFQzlYTjtFRGlZSTtJQUNFLHFCQUFBO0VDL1hOO0VEa1lJO0lBQ0UsYUFBQTtFQ2hZTjtFRG9ZRTtJQUNFLFVBQUE7RUNsWUo7RURxWUU7SUFDRSxVQUFBO0VDbllKO0VEc1lFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNwWUo7RUR1WUU7SUFDRSxnQkFBQTtFQ3JZSjtFRHdZRTtJQUNFLFVBQUE7RUN0WUo7RUR3WUk7SUFDRSxnQkFBQTtFQ3RZTjtFRDBZRTtJQUNFLGFBQUE7RUN4WUo7RUQyWU07SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUN6WVI7RUQ4WVU7SUFDRSxnQkFBQTtFQzVZWjtFRCtZVTtJQUNFLGlCQUFBO0VDN1laO0VEbVpRO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VDalpWO0VEb1pRO0lBQ0UsZ0JBQUE7SUFDQSw4QkFBQTtFQ2xaVjtFRHFaUTtJQUNFLGdCQUFBO0lBQ0EsZ0NBQUE7RUNuWlY7RURzWlE7SUFDRSxnQkFBQTtJQUNBLHVCQUFBO0VDcFpWO0FBQ0Y7QUQyWkE7RUFFSTtJQUNFLHNCQUFBO0VDMVpKO0VENlpFO0lBQ0UsV0FBQTtFQzNaSjtFRDhaRTtJQUNFLFVBQUE7RUM1Wko7RUQrWkU7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0VDN1pKO0VEK1pJO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQzdaTjtFRGdhSTtJQUNFLHFCQUFBO0VDOVpOO0VEaWFJO0lBQ0UsV0FBQTtFQy9aTjtFRGthSTtJQUNFLGFBQUE7RUNoYU47RURtYUk7SUFDRSxnQkFBQTtJQUNBLHFCQUFBO0VDamFOO0VEcWFFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ25hSjtFRHNhRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDcGFKO0VEc2FJO0lBQ0UsZ0JBQUE7RUNwYU47RUR3YUU7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDdGFKO0VEeWFFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUN2YUo7RUQwYU07SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ3hhUjtFRDZhVTtJQUNFLGFBQUE7RUMzYVo7RUQ2YVk7SUFDRSxxQkFBQTtFQzNhZDtFRDhhWTtJQUNFLGdCQUFBO0VDNWFkO0VEZ2JVO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VDOWFaO0VEZ2JZO0lBQ0UsV0FBQTtFQzlhZDtFRHFiUTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtFQ25iVjtFRHNiUTtJQUNFLGdCQUFBO0lBQ0EsMEJBQUE7RUNwYlY7RUR1YlE7SUFDRSxnQkFBQTtJQUNBLDRCQUFBO0VDcmJWO0VEd2JRO0lBQ0UsaUJBQUE7RUN0YlY7QUFDRjtBRDZiQTtFQUVJO0lBQ0UsU0FBQTtFQzViSjtBQUNGO0FEK2JBO0VBRUk7SUFDRSxTQUFBO0VDOWJKO0FBQ0Y7QURtY0E7RUFFSTtJQUNFLGVBQUE7RUNsY0o7QUFDRjtBRHNjQTtFQUdJO0lBQ0UsYUFBQTtFQ3RjSjtFRHljRTtJQUNFLGlCQUFBO0VDdmNKO0VEeWNJO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VDdmNOO0VEMGNJO0lBQ0Usa0JBQUE7RUN4Y047RUQyY0k7SUFDRSxrQkFBQTtFQ3pjTjtFRDRjSTtJQUNFLG1CQUFBO0VDMWNOO0VENmNJO0lBQ0UsYUFBQTtFQzNjTjtFRCtjTTtJQUNFLHFCQUFBO0VDN2NSO0VEZ2RNO0lBQ0UsbUJBQUE7RUM5Y1I7RURtZEU7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNqZEo7RURvZEU7SUFDRSxTQUFBO0VDbGRKO0VEcWRFO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ25kSjtFRHFkSTtJQUNFLGtCQUFBO0VDbmROO0VEdWRFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQ3JkSjtFRHdkTTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtFQ3RkUjtFRDJkVTtJQUNFLFdBQUE7RUN6ZFo7RUQyZFk7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VDemRkO0VENmRVO0lBQ0UsZ0JBQUE7RUMzZFo7RUQ2ZFk7SUFDRSxXQUFBO0VDM2RkO0VEa2VRO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ2hlVjtFRG9lVTtJQUNFLGtCQUFBO0VDbGVaO0VEc2VRO0lBQ0UsMEJBQUE7SUFDQSxrQkFBQTtFQ3BlVjtFRHVlUTtJQUNFLDJCQUFBO0lBQ0Esa0JBQUE7RUNyZVY7RUR3ZVE7SUFDRSxrQkFBQTtJQUNBLHVCQUFBO0VDdGVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9tb2tvZC9wcm9tb2tvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4ucHJvbW9rb2Qge1xyXG4gICYtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDU3LjU2JTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA5dmg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgcGFkZGluZzogMy4yODVweCAyN3B4IDMuMjg1cHggNDlweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNdXNlb1NhbnNDeXJsNzAwJztcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTIuNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEwNC40M3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICYtbGFzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIuOTl2aDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2xpbmtzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAzNXZ3OyAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjMuNzFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5saW5rc3tcclxuICAgICAgJl9fZXhjZXB0aW9ueyAgICBcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfSAgICAgXHJcbiAgfVxyXG5cclxuICAmX19tYWNoaW5lIHtcclxuICAgIGhlaWdodDogNzQuNDd2aDtcclxuICAgIHdpZHRoOiA0NC43OSU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDM2LjI1JTtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzAuODhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICBjb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuXHJcbiAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4LjIyJTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yM3ZoO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW9TYW5zQ3lybDcwMCc7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMC44M3B4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5LjVweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgJl9faW5idXQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4IDMwcHggMThweCAzMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5YTFhODtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNi43NnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCA0N3B4IDIwcHggNDdweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1LjY2cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIyMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucnVsZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODFweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTUuMjElO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDMuMjg1cHggMS42dncgMy4yODVweCAyLjkxdnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41MnZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogMzV2dztcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxuXHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy44dmg7XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMi4wOHZ3O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41NnZ3O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjF2dztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMi44dncgMThweCAyLjh2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXRfX2luYnV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMC42OXZ3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjk1dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzdweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSBwIHtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2l0ZW0gcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy44dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEyLjV2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY2NnB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjV2aCA1LjQlIDEuNXZoIDUuNCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMS43dmggOC40NiUgMS43dmggOC40NiU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NjNweCkge1xyXG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XHJcbiAgICBmb250LXNpemU6IDIuMXZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjYwcHgpIHtcclxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQ0cHgpIHtcclxuICAucHJvbW9rb2Qge1xyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43MzV2dztcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAucHJvbW9rb2Qge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IC5jb250ZW50IHtcclxuICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcblxyXG4gICAgICAgIC5hY3Rpb25fX2l0ZW0ge1xyXG4gICAgICAgICAgd2lkdGg6IDE3JTtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjF2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUzNnB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA5dmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIC5pbnB1dF9faW5idXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjV2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjUydmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDI2dmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24gLmFjdGlvbl9fcGx1cyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSAudGl0bGUtbGFzdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDl2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTUuMjElO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzIHtcclxuICAgICAgd2lkdGg6IDQyJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUuMzElO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUzcHgpIHtcclxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzdweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSAudGl0bGUtbGFzdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3MgcCB7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9faW5wdXQgcCB7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIuOHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xyXG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNS41dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0N3B4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDd2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB9XHJcbiAgICAmX19saW5rc3tcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzVweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNjkuMjclO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAuNDF2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTYuNjNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMjElO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzLXdyYXAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogODQuMjd2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogNzIuMjYlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNC44OHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbWFjaGluZSB7XHJcbiAgICAgIHdpZHRoOiAyNy4yMSU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNi45M3ZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICB3aWR0aDogNzIuMjYlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4LjIzcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjg3dmg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE4LjM3JTtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMTl2aDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOC4zNHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUuOTQlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwLjM5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNDZ2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjMuN3B4IDE1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMS4xN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMC44ODNweCA2MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMyLjE5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcclxuICAucHJvbW9rb2Qge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDcuNjNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWhvbWUge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtcGFydHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTglO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogNDIlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNS4zMSU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAzNi4yNSU7XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjczNXZ3O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzN2aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjh2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44NXZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMS43dmggNS40JSAxLjd2aCA1LjQlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMXZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNjkuMjclO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAuNDF2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTYuNjNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMjElO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4NC4yN3ZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rcyB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuODhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMjcuMjElO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDcyLjI2JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOC4yM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44N3ZoO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTguMzclO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4xOXZoO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4LjM0cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNS45NCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy4yMnZoO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS40NnZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMy43cHggMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxLjE3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwLjg4M3B4IDYwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzIuMTlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDd2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmX190aXRsZSBwIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC45cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24gLmFjdGlvbiB7XHJcbiAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTguMDlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNy41cHggMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOS41cHggNjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MXB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWhvbWUge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtcGFydHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNTglO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogNDIlO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMzYuMjUlO1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43MzV2dztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMzdmg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjh2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44NXZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMS43dmggNS40JSAxLjd2aCA1LjQlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMXZ3O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjAuNDF2aDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNy41dnc7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtaG9tZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1wYXJ0eSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLWxhc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mtd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4NC4yN3ZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rcyB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDI0Ljg4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpbmtze1xyXG4gICAgICAgICZfX2V4Y2VwdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX21hY2hpbmUge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDcyLjI2JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzLjQ1dnc7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxOC4zNyU7XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjE5dmg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ydnc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNS45NCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy4yMnZoO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19pbnB1dCB7XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS40NnZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjd2aCA1LjQlIDEuN3ZoIDUuNCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMS4xN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4LjV2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjA1dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTh2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dGltZy13cmFwIHtcclxuICAgICAgd2lkdGg6IDU4JTtcclxuICAgIH1cclxuXHJcbiAgICAmX190ZXh0aW1nIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICB3aWR0aDogNDMlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzLXdyYXAge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDM2LjI1JTtcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNzM1dnc7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2l0ZW0gcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy44dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2lucHV0IHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjF2dztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnByb21va29kIHtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGV4dGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RleHRpbWctd3JhcCB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMC40MXZoO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3LjV2dztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMjElO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1ob21lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlLXBhcnR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rcy13cmFwIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDc1dmg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzIHtcclxuICAgICAgd2lkdGg6IDcyLjI2JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy44dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA2Ljkzdmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy40NXZ3O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fYWN0aW9uIHtcclxuICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTguMzclO1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4xOXZoO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnZ3O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUuOTQlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40NnZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMXZoIDUuNCUgMXZoIDUuNCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgICAgICAgICAgcGFkZGluZzogMXZoIDguNDYlIDF2aCA4LjQ2JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjA1dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XHJcbiAgLnByb21va29ke1xyXG4gICAgJl9fbGlua3Mtd3JhcHtcclxuICAgICAgdG9wOiA4MHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLnByb21va29ke1xyXG4gICAgJl9fbGlua3Mtd3JhcHtcclxuICAgICAgdG9wOiA3NXZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAucHJvbW9rb2R7XHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5wcm9tb2tvZCB7XHJcblxyXG4gICAgJl9fdGV4dGltZy13cmFwIHtcclxuICAgICAgd2lkdGg6IDU5LjA3JTtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwN3B4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNC4xcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXB4IDBweCAwLjVweCA5cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgJi1wYXJ0eSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxhc3Qge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19tYWNoaW5lIHtcclxuICAgICAgd2lkdGg6IDEyMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xpbmtzLXdyYXAge1xyXG4gICAgICB0b3A6IDkydmg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlua3Mge1xyXG4gICAgICB3aWR0aDogMjU1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgICBib3R0b206IDdweDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTMuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMjU1cHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEyLjk1cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcblxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOC42NHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTdweDtcclxuXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTYuMzFweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAmX19pbmJ1dCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMi4zNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjFweCA5cHggMjFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMS4zNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0Ljc2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucHJvbW9rb2Qtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvbW9rb2RfX3RleHRpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTcuNTYlO1xufVxuLnByb21va29kX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDl2aDtcbn1cbi5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMy4yODVweCAyN3B4IDMuMjg1cHggNDlweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zQ3lybDcwMFwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XG4gIGZvbnQtc2l6ZTogMTA0LjQzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGE5OTtcbn1cbi5wcm9tb2tvZF9fdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTIuOTl2aDtcbn1cbi5wcm9tb2tvZF9fbGlua3Mge1xuICBtYXJnaW4tbGVmdDogNTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMzV2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnByb21va29kX19saW5rcyBwIHtcbiAgY29sb3I6ICM1NWY5MWI7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDIzLjcxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDE7XG59XG4ucHJvbW9rb2RfX2xpbmtzIC5saW5rc19fZXhjZXB0aW9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG59XG4ucHJvbW9rb2RfX21hY2hpbmUge1xuICBoZWlnaHQ6IDc0LjQ3dmg7XG4gIHdpZHRoOiA0NC43OSU7XG59XG4ucHJvbW9rb2RfX21hY2hpbmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5wcm9tb2tvZF9fY29udGVudCB7XG4gIHdpZHRoOiAzNi4yNSU7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjV2aDtcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc2l6ZTogMzAuODhweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBjb2xvcjogIzU1ZjkxYjtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgd2lkdGg6IDE4LjIyJTtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yM3ZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fuc0N5cmw3MDBcIjtcbiAgZm9udC1zaXplOiAyMC44M3B4O1xuICBjb2xvcjogIzU1ZjkxYjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE5LjVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDM1cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IC5pbnB1dF9faW5idXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgcGFkZGluZzogMThweCAzMHB4IDE4cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTlhMWE4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAyNi43NnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG59XG4ucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIwcHggNDdweCAyMHB4IDQ3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZGVuc2VkTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMjUuNjZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ZjkxYjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzAwNGE5OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMjFweDtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCBhIHtcbiAgY29sb3I6ICM1NWY5MWI7XG59XG5cbi5ydWxlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODFweCkge1xuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDU1LjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIHBhZGRpbmc6IDMuMjg1cHggMS42dncgMy4yODVweCAyLjkxdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41MnZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiAzNXZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNzV2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIG1hcmdpbi10b3A6IDMuOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMgaW1nIHtcbiAgICB3aWR0aDogMi4wOHZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNTZ2dztcbiAgICBmb250LXNpemU6IDEuMXZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIHBhZGRpbmc6IDE4cHggMi44dncgMThweCAyLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IC5pbnB1dF9faW5idXQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwLjY5dnc7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMS45NXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzdweCkge1xuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxLjJ2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgICBtYXJnaW4tdG9wOiAzLjh2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg1dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBwYWRkaW5nOiAxLjd2aCA1LjQlIDEuN3ZoIDUuNCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgcGFkZGluZzogMS45dmggOC40NiUgMS45dmggOC40NiU7XG4gICAgd2lkdGg6IDEyLjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjY2cHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgcGFkZGluZzogMS41dmggNS40JSAxLjV2aCA1LjQlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxLjd2aCA4LjQ2JSAxLjd2aCA4LjQ2JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjYzcHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBmb250LXNpemU6IDIuMXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NjBweCkge1xuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQ0cHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjczNXZ3O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgICB3aWR0aDogMTclO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogOXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgLmlucHV0X19pbmJ1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjUydmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjZ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIGltZyB7XG4gICAgd2lkdGg6IDI3cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDl2aDtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDU1LjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogNDIlO1xuICAgIG1hcmdpbi1sZWZ0OiA1LjMxJTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1M3B4KSB7XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3N3B4KSB7XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIH1cbiAgLnByb21va29kX19saW5rcyBwIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNjFweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgICBtYXJnaW4tdG9wOiAyLjh2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1LjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDdweCkge1xuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbWFjaGluZSB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzVweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNjkuMjclO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwLjQxdmg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDU2LjYzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODQuMjd2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogNzIuMjYlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMjQuODhweDtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiAyNy4yMSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAyOC4yM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuODd2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgICB3aWR0aDogMTguMzclO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjE5dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDE4LjM0cHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyB7XG4gICAgd2lkdGg6IDUuOTQlO1xuICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAzMC4zOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNDZ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgcGFkZGluZzogMjMuN3B4IDE1cHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjEuMTdweDtcbiAgICBwYWRkaW5nOiAyMC44ODNweCA2MHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gICAgZm9udC1zaXplOiAzMi4xOXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMnB4KSB7XG4gIC5wcm9tb2tvZC13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0Ny42M3B4O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWhvbWUge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190ZXh0aW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG4gIC5wcm9tb2tvZF9fbWFjaGluZSB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIHdpZHRoOiA0MyU7XG4gIH1cbiAgLnByb21va29kX19saW5rcy13cmFwIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiA0MiU7XG4gICAgbWFyZ2luLWxlZnQ6IDUuMzElO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCB7XG4gICAgd2lkdGg6IDM2LjI1JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNzM1dnc7XG4gICAgbWFyZ2luLXRvcDogMzN2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHAge1xuICAgIGZvbnQtc2l6ZTogMS4ydnc7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyB7XG4gICAgbWFyZ2luLXRvcDogMy44dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgcGFkZGluZzogMS43dmggNS40JSAxLjd2aCA1LjQlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgcCB7XG4gICAgZm9udC1zaXplOiAyLjF2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNjkuMjclO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwLjQxdmg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDU2LjYzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzLXdyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDg0LjI3dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19saW5rcyB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAyNC44OHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fbWFjaGluZSB7XG4gICAgd2lkdGg6IDI3LjIxJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNi45M3ZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDI4LjIzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44N3ZoO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSB7XG4gICAgd2lkdGg6IDE4LjM3JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xOXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxOC4zNHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIHdpZHRoOiA1Ljk0JTtcbiAgICBtYXJnaW4tdG9wOiAzLjIydmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjQ2dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHBhZGRpbmc6IDIzLjdweCAxNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIxLjE3cHg7XG4gICAgcGFkZGluZzogMjAuODgzcHggNjBweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMzIuMTlweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA3dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjlweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgZm9udC1zaXplOiAxOC4wOXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBwYWRkaW5nOiAxNy41cHggMTVweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTkuNXB4IDYwcHg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDFweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtcGFydHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIGhlaWdodDogODB2aDtcbiAgICB3aWR0aDogNDMlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogNDIlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAzNi4yNSU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjczNXZ3O1xuICAgIG1hcmdpbi10b3A6IDMzdmg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDEuMnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIG1hcmdpbi10b3A6IDMuOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMi4xdnc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDIwLjQxdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNy41dnc7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjIxJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1wYXJ0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzLXdyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDg0LjI3dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19saW5rcyB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAyNC44OHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgLmxpbmtzX19leGNlcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLnByb21va29kX19tYWNoaW5lIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA2Ljkzdmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IHtcbiAgICB3aWR0aDogNzIuMjYlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMy40NXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHtcbiAgICB3aWR0aDogMTguMzclO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjE5dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDIuMnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIHdpZHRoOiA1Ljk0JTtcbiAgICBtYXJnaW4tdG9wOiAzLjIydmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMzAuMzlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjQ2dmg7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMS4xN3B4O1xuICAgIHBhZGRpbmc6IDEuOXZoIDguNDYlIDEuOXZoIDguNDYlO1xuICAgIHdpZHRoOiAyOC41dnc7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBwIHtcbiAgICBmb250LXNpemU6IDQuMDV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICAucHJvbW9rb2Qtd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA0LjV2dztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1ob21lIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtcGFydHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTglO1xuICB9XG4gIC5wcm9tb2tvZF9fdGV4dGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIGhlaWdodDogODB2aDtcbiAgICB3aWR0aDogNDMlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAzNi4yNSU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjczNXZ3O1xuICAgIG1hcmdpbi10b3A6IDMzdmg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBwIHtcbiAgICBmb250LXNpemU6IDEuMnZ3O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMge1xuICAgIG1hcmdpbi10b3A6IDMuOHZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDEuODV2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgIHBhZGRpbmc6IDEuN3ZoIDUuNCUgMS43dmggNS40JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBwYWRkaW5nOiAxLjl2aCA4LjQ2JSAxLjl2aCA4LjQ2JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMi4xdnc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnByb21va29kLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnByb21va29kX190ZXh0aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvbW9rb2RfX3RleHRpbWctd3JhcCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuICAucHJvbW9rb2RfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMC40MXZoO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDcuNXZ3O1xuICAgIHBhZGRpbmctbGVmdDogMi4yMSU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtaG9tZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtcGFydHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnByb21va29kX19saW5rcy13cmFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3MgcCB7XG4gICAgZm9udC1zaXplOiAzLjh2dztcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDYuOTN2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAzLjQ1dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0ge1xuICAgIHdpZHRoOiAxOC4zNyU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9faXRlbSBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMTl2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19pdGVtIHAge1xuICAgIGZvbnQtc2l6ZTogMi4ydnc7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19hY3Rpb24gLmFjdGlvbl9fcGx1cyB7XG4gICAgd2lkdGg6IDUuOTQlO1xuICAgIG1hcmdpbi10b3A6IDMuMjJ2aDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40NnZoO1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgcGFkZGluZzogMXZoIDUuNCUgMXZoIDUuNCU7XG4gIH1cbiAgLnByb21va29kX19jb250ZW50IC5jb250ZW50X19pbnB1dCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gICAgcGFkZGluZzogMXZoIDguNDYlIDF2aCA4LjQ2JTtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogNC4wNXZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgdG9wOiA4MHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgdG9wOiA3NXZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5wcm9tb2tvZF9fY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5wcm9tb2tvZF9fdGV4dGltZy13cmFwIHtcbiAgICB3aWR0aDogNTkuMDclO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwN3B4O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAzNC4xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIHBhZGRpbmc6IDAuNXB4IDBweCAwLjVweCA5cHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBwOm50aC1jaGlsZCgyKSB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgcDpudGgtY2hpbGQoMykge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLnByb21va29kX190aXRsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9tb2tvZF9fdGl0bGUgLnRpdGxlLXBhcnR5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnByb21va29kX190aXRsZSAudGl0bGUtbGFzdCB7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICAucHJvbW9rb2RfX21hY2hpbmUge1xuICAgIHdpZHRoOiAxMjJweDtcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mtd3JhcCB7XG4gICAgdG9wOiA5MnZoO1xuICB9XG4gIC5wcm9tb2tvZF9fbGlua3Mge1xuICAgIHdpZHRoOiAyNTVweDtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICBib3R0b206IDdweDtcbiAgfVxuICAucHJvbW9rb2RfX2xpbmtzIHAge1xuICAgIGZvbnQtc2l6ZTogMTMuMzZweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAyNTVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XG4gICAgZm9udC1zaXplOiAxMi45NXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0ge1xuICAgIHdpZHRoOiA0NnB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX2l0ZW0gcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBmb250LXNpemU6IDguNjRweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2FjdGlvbiAuYWN0aW9uX19wbHVzIHtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9fYWN0aW9uIC5hY3Rpb25fX3BsdXMgaW1nIHtcbiAgICB3aWR0aDogMTJweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gICAgZm9udC1zaXplOiAxNi4zMXB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgLmlucHV0X19pbmJ1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIC5wcm9tb2tvZF9fY29udGVudCAuY29udGVudF9faW5wdXQgaW5wdXQge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTIuMzVweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMXB4IDlweCAyMXB4O1xuICAgIGZvbnQtc2l6ZTogMTEuMzZweDtcbiAgfVxuICAucHJvbW9rb2RfX2NvbnRlbnQgLmNvbnRlbnRfX2lucHV0IHAge1xuICAgIGZvbnQtc2l6ZTogMTQuNzZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDFweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PromokodComponent, [{
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

    RulesComponent.??fac = function RulesComponent_Factory(t) {
      return new (t || RulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    RulesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RulesComponent,
      selectors: [["app-rules"]],
      decls: 23,
      vars: 0,
      consts: [[1, "rules-wrap"], ["routerLink", "", 1, "rules__button"]],
      template: function RulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u041F\u0440a\u0432\u0438\u043B\u0430 \u0430\u043A\u0446\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " \u0429\u043E \u0442\u0430\u043A\u0435 Lorem Ipsum?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Lorem Ipsum - \u0446\u0435 \u0442\u0435\u043A\u0441\u0442-\"\u0440\u0438\u0431\u0430\", \u0449\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0432 \u0434\u0440\u0443\u043A\u0430\u0440\u0441\u0442\u0432\u0456 \u0442\u0430 \u0434\u0438\u0437\u0430\u0439\u043D\u0456. Lorem Ipsum \u0454, \u0444\u0430\u043A\u0442\u0438\u0447\u043D\u043E, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u044E \"\u0440\u0438\u0431\u043E\u044E\" \u0430\u0436 \u0437 XVI \u0441\u0442\u043E\u0440\u0456\u0447\u0447\u044F, \u043A\u043E\u043B\u0438 \u043D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u0434\u0440\u0443\u043A\u0430\u0440 \u0432\u0437\u044F\u0432 \u0448\u0440\u0438\u0444\u0442\u043E\u0432\u0443 \u0433\u0440\u0430\u043D\u043A\u0443 \u0442\u0430 \u0441\u043A\u043B\u0430\u0432 \u043D\u0430 \u043D\u0456\u0439 \u043F\u0456\u0434\u0431\u0456\u0440\u043A\u0443 \u0437\u0440\u0430\u0437\u043A\u0456\u0432 \u0448\u0440\u0438\u0444\u0442\u0456\u0432. \"\u0420\u0438\u0431\u0430\" \u043D\u0435 \u0442\u0456\u043B\u044C\u043A\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u0436\u0438\u043B\u0430 \u043F'\u044F\u0442\u044C \u0441\u0442\u043E\u043B\u0456\u0442\u044C, \u0430\u043B\u0435 \u0439 \u043F\u0440\u0438\u0436\u0438\u043B\u0430\u0441\u044F \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u043C\u0443 \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u0456, \u0437\u0430\u043B\u0438\u0448\u0430\u044E\u0447\u0438\u0441\u044C \u043F\u043E \u0441\u0443\u0442\u0456 \u043D\u0435\u0437\u043C\u0456\u043D\u043D\u043E\u044E. \u0412\u043E\u043D\u0430 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u0438\u0437\u0443\u0432\u0430\u043B\u0430\u0441\u044C \u0432 60-\u0438\u0445 \u0440\u043E\u043A\u0430\u0445 \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0441\u0442\u043E\u0440\u0456\u0447\u0447\u044F \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u0432\u0438\u0434\u0430\u043D\u043D\u044E \u0437\u0440\u0430\u0437\u043A\u0456\u0432 \u0448\u0440\u0438\u0444\u0442\u0456\u0432 Letraset, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u0438\u043B\u0438 \u0443\u0440\u0438\u0432\u043A\u0438 \u0437 Lorem Ipsum, \u0456 \u0432\u0434\u0440\u0443\u0433\u0435 - \u043D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u043E \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430\u043C \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440\u043D\u043E\u0433\u043E \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043A\u0448\u0442\u0430\u043B\u0442 Aldus Pagemaker, \u044F\u043A\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043B\u0438 \u0440\u0456\u0437\u043D\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 Lorem Ipsum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u0427\u043E\u043C\u0443 \u043C\u0438 \u043D\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0454\u043C\u043E\u0441\u044C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " \u0412\u0436\u0435 \u0434\u0430\u0432\u043D\u043E \u0432\u0456\u0434\u043E\u043C\u043E, \u0449\u043E \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0438\u0439 \u0437\u043C\u0456\u0441\u0442 \u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0430\u0436\u0430\u0442\u0438 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u0442\u0438\u0441\u044C \u043B\u044E\u0434\u0438\u043D\u0456, \u044F\u043A\u0430 \u043E\u0446\u0456\u043D\u044E\u0454 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438. \u0421\u0435\u043D\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F Lorem Ipsum \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0446\u0435\u0439 \u0442\u0435\u043A\u0441\u0442 \u043C\u0430\u0454 \u0431\u0456\u043B\u044C\u0448-\u043C\u0435\u043D\u0448 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u043B\u0456\u0442\u0435\u0440 \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \"\u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442. \u0422\u0443\u0442 \u0456\u0434\u0435 \u0442\u0435\u043A\u0441\u0442.\" \u0426\u0435 \u0440\u043E\u0431\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u0445\u043E\u0436\u0438\u043C \u043D\u0430 \u043E\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439. \u0411\u0430\u0433\u0430\u0442\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C \u0432\u0435\u0440\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C Lorem Ipsum \u044F\u043A \u0437\u0440\u0430\u0437\u043E\u043A \u0456 \u043F\u043E\u0448\u0443\u043A \u0437\u0430 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \"lorem ipsum\" \u0432\u0456\u0434\u043A\u0440\u0438\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u044F\u043A\u0456 \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0449\u0435 \u0432 \u0437\u0430\u0440\u043E\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u0441\u0442\u0430\u043D\u0456. \u0420\u0456\u0437\u043D\u0456 \u0432\u0435\u0440\u0441\u0456\u0457 Lorem Ipsum \u0437'\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0437\u0430 \u043C\u0438\u043D\u0443\u043B\u0456 \u0440\u043E\u043A\u0438, \u0434\u0435\u044F\u043A\u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E, \u0434\u0435\u044F\u043A\u0456 \u0431\u0443\u043B\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0443\u043C\u0438\u0441\u043D\u043E (\u0437\u043E\u043A\u0440\u0435\u043C\u0430, \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0456). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\u0417\u0432\u0456\u0434\u043A\u0438 \u0432\u0456\u043D \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " \u041D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u043E\u0457 \u0434\u0443\u043C\u043A\u0438 Lorem Ipsum \u043D\u0435 \u0454 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u0438\u043C \u043D\u0430\u0431\u043E\u0440\u043E\u043C \u043B\u0456\u0442\u0435\u0440. \u0412\u0456\u043D \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0437 \u0443\u0440\u0438\u0432\u043A\u0443 \u043A\u043B\u0430\u0441\u0438\u0447\u043D\u043E\u0457 \u043B\u0430\u0442\u0438\u043D\u0441\u044C\u043A\u043E\u0457 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0438 45 \u0440\u043E\u043A\u0443 \u0434\u043E \u043D.\u0435., \u0442\u043E\u0431\u0442\u043E \u043C\u0430\u0454 \u0431\u0456\u043B\u044C\u0448 \u044F\u043A 2000-\u0440\u0456\u0447\u043D\u0443 \u0456\u0441\u0442\u043E\u0440\u0456\u044E. \u0420\u0456\u0447\u0430\u0440\u0434 \u041C\u0430\u043A\u043A\u043B\u0456\u043D\u0442\u043E\u043A, \u043F\u0440\u043E\u0444\u0435\u0441\u043E\u0440 \u043B\u0430\u0442\u0438\u043D\u0438 \u0437 \u043A\u043E\u043B\u0435\u0434\u0436\u0443 \u0425\u0435\u043C\u043F\u0434\u0456\u043D-\u0421\u0438\u0434\u043D\u0456, \u0449\u043E \u0443 \u0412\u0456\u0440\u0434\u0436\u0456\u043D\u0456\u0457, \u0432\u0438\u0432\u0447\u0430\u0432 \u043E\u0434\u043D\u0435 \u0437 \u043D\u0430\u0439\u043C\u0435\u043D\u0448 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0438\u0445 \u043B\u0430\u0442\u0438\u043D\u0441\u044C\u043A\u0438\u0445 \u0441\u043B\u0456\u0432 - consectetur - \u0437 \u0443\u0440\u0438\u0432\u043A\u0443 Lorem Ipsum, \u0456 \u0443 \u043F\u043E\u0448\u0443\u043A\u0443 \u0446\u044C\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 \u0432 \u043A\u043B\u0430\u0441\u0438\u0447\u043D\u0456\u0439 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0456 \u0437\u043D\u0430\u0439\u0448\u043E\u0432 \u0431\u0435\u0437\u0441\u0443\u043C\u043D\u0456\u0432\u043D\u0435 \u0434\u0436\u0435\u0440\u0435\u043B\u043E. Lorem Ipsum \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u0456\u0432 1.10.32 \u0442\u0430 1.10.33 \u0446\u0438\u0446\u0435\u0440\u043E\u043D\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \"de Finibus Bonorum et Malorum\" (\"\u041F\u0440\u043E \u043C\u0435\u0436\u0456 \u0434\u043E\u0431\u0440\u0430 \u0456 \u0437\u043B\u0430\"), \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E\u0433\u043E \u0443 45 \u0440\u043E\u0446\u0456 \u0434\u043E \u043D.\u0435. \u0426\u0435\u0439 \u0442\u0440\u0430\u043A\u0442\u0430\u0442 \u0437 \u0442\u0435\u043E\u0440\u0456\u0457 \u0435\u0442\u0438\u043A\u0438 \u0431\u0443\u0432 \u0434\u0443\u0436\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0438\u043C \u0432 \u0435\u043F\u043E\u0445\u0443 \u0412\u0456\u0434\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F. \u041F\u0435\u0440\u0448\u0438\u0439 \u0440\u044F\u0434\u043E\u043A Lorem Ipsum, \"Lorem ipsum dolor sit amet...\" \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0437 \u043E\u0434\u043D\u043E\u0433\u043E \u0437 \u0440\u044F\u0434\u043A\u0456\u0432 \u0440\u043E\u0437\u0434\u0456\u043B\u0443 1.10.32.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " \u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043D\u0438\u0439 \u0437 XVI \u0441\u0442\u043E\u0440\u0456\u0447\u0447\u044F, \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0438\u0436\u0447\u0435 \u0434\u043B\u044F \u0432\u0441\u0456\u0445 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u0435\u043D\u0438\u0445. \u0422\u0430\u043A\u043E\u0436 \u0442\u043E\u0447\u043D\u043E \u0437\u0430 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u043E\u043C \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u043E \u0440\u043E\u0437\u0434\u0456\u043B\u0438 1.10.32 \u0442\u0430 1.10.33 \u0446\u0438\u0446\u0435\u0440\u043E\u043D\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \"de Finibus Bonorum et Malorum\" \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u043E\u043C \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E, \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0438\u043C 1914 \u0440\u043E\u043A\u0443 \u0425.\u0420\u0435\u043A\u0435\u043C\u043E\u043C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u0414\u0435 \u0441\u043E\u0431\u0456 \u0432\u0437\u044F\u0442\u0438 \u0442\u0440\u043E\u0445\u0438?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " \u0406\u0441\u043D\u0443\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0430\u0440\u0456\u0430\u0446\u0456\u0439 \u0443\u0440\u0438\u0432\u043A\u0456\u0432 \u0437 Lorem Ipsum, \u0430\u043B\u0435 \u0431\u0456\u043B\u044C\u0448\u0456\u0441\u0442\u044C \u0437 \u043D\u0438\u0445 \u0437\u0430\u0437\u043D\u0430\u043B\u0430 \u043F\u0435\u0432\u043D\u0438\u0445 \u0437\u043C\u0456\u043D \u043D\u0430 \u043A\u0448\u0442\u0430\u043B\u0442 \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0438\u0445 \u0432\u0441\u0442\u0430\u0432\u043E\u043A \u0430\u0431\u043E \u0437\u043C\u0456\u0448\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043B\u0456\u0432, \u044F\u043A\u0456 \u043D\u0430\u0432\u0456\u0442\u044C \u043D\u0435 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u0434\u043E\u043F\u043E\u0434\u0456\u0431\u043D\u043E. \u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u0442\u0435\u0441\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 Lorem Ipsum, \u0432\u0438 \u043C\u0430\u0454\u0442\u0435 \u0443\u043F\u0435\u0432\u043D\u0438\u0442\u0438\u0441\u044C \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0442\u0435\u043A\u0441\u0442\u0443 \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E \u043D\u0456\u0447\u043E\u0433\u043E, \u0449\u043E \u043C\u043E\u0433\u043B\u043E \u0431 \u0432\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0443 \u0447\u0438\u0442\u0430\u0447\u0430 \u043A\u043E\u043D\u0444\u0443\u0437. \u0411\u0456\u043B\u044C\u0448\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u043E\u043C\u0438\u0445 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432 Lorem Ipsum \u0432 \u041C\u0435\u0440\u0435\u0436\u0456 \u0433\u0435\u043D\u0435\u0440\u0443\u044E\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0448\u043B\u044F\u0445\u043E\u043C \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u043D\u044F \u043D\u0430\u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0434\u0430\u043D\u0438\u0445 \u043F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u043E\u0441\u0442\u0435\u0439 Lorem Ipsum. \u041F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u0456\u0441\u0442\u044C \u0446\u044C\u043E\u0433\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0440\u043E\u0431\u0438\u0442\u044C \u0439\u043E\u0433\u043E \u043F\u0435\u0440\u0448\u0438\u043C \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u043C \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C Lorem Ipsum. \u0412\u0456\u043D \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0441\u043B\u043E\u0432\u043D\u0438\u043A \u0437 \u0431\u0456\u043B\u044C\u0448 \u044F\u043A 200 \u0441\u043B\u0456\u0432 \u043B\u0430\u0442\u0438\u043D\u0438 \u0442\u0430 \u0446\u0456\u043B\u0438\u0439 \u043D\u0430\u0431\u0456\u0440 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0440\u0435\u0447\u0435\u043D\u044C - \u0446\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0433\u0435\u043D\u0435\u0440\u0443\u0432\u0430\u0442\u0438 Lorem Ipsum, \u044F\u043A\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0454 \u043E\u0441\u043C\u0438\u0441\u043B\u0435\u043D\u043E. \u0422\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0437\u0433\u0435\u043D\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 Lorem Ipsum \u043D\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u0438\u043C\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0456\u0432, \u0436\u0430\u0440\u0442\u0456\u0432, \u043D\u0435\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u0438\u0445 \u0434\u043B\u044F \u043B\u0430\u0442\u0438\u043D\u0438 \u0441\u043B\u0456\u0432 \u0456 \u0442.\u0456\u043D.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".rules-popup[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.rules-position[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.rules-wrap[_ngcontent-%COMP%] {\n  z-index: 2;\n  padding: 10px;\n  top: 20%;\n  color: #fff;\n}\n.rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 1.5em;\n}\n.rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.rules__button[_ngcontent-%COMP%] {\n  padding: 2.5px 5px;\n  background-color: #55f91b;\n  color: #004a99;\n  border: 1.5px solid #004a99;\n  cursor: pointer;\n}\n@media only screen and (min-width: 1681px) {\n  .rules__button[_ngcontent-%COMP%] {\n    width: 2vw;\n    font-size: 1.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%] {\n    width: 59.52vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1vw;\n  }\n}\n@media only screen and (max-width: 1681px) {\n  .rules__button[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    font-size: 15px;\n  }\n  .rules-wrap[_ngcontent-%COMP%] {\n    width: 59.52vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5vw;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    letter-spacing: 1px;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .rules-wrap[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 18vh;\n    font-size: 30px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 15vh;\n    margin-bottom: 15px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 10vh;\n  }\n}\n@media only screen and (max-width: 414px) {\n  .rules-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW9rb2QvcnVsZXMvRjpcXHByb2plY3RcXEQyXFxUdWJvcmdcXGNvZGVcXHR1Ym9yZy9zcmNcXGFwcFxccHJvbW9rb2RcXHJ1bGVzXFxydWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvbW9rb2QvcnVsZXMvcnVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDRSxZQUFBO0FDTEo7QURRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ05KO0FEU0U7RUFLRSxVQUFBO0VBR0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDYko7QURlSTtFQUNFLGtCQUFBO0FDYk47QURnQkk7O0VBRUUsa0JBQUE7QUNkTjtBRGlCSTtFQUNFLG1CQUFBO0FDZk47QURrQkk7RUFDRSxtQkFBQTtBQ2hCTjtBRG9CRTtFQUNFLGtCQUFBO0VBQ0EseUJBakRVO0VBa0RWLGNBakRTO0VBa0RULDJCQUFBO0VBQ0EsZUFBQTtBQ2xCSjtBRHNCQTtFQUVJO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0VDcEJKO0VEdUJFO0lBQ0UsY0FBQTtFQ3JCSjtFRHVCSTtJQUNFLGdCQUFBO0VDckJOO0VEd0JJO0lBQ0UsZ0JBQUE7RUN0Qk47RUR5Qkk7SUFDRSxnQkFBQTtFQ3ZCTjtBQUNGO0FENEJBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUMzQko7RUQ4QkU7SUFDRSxjQUFBO0VDNUJKO0VEOEJJO0lBQ0UsZ0JBQUE7RUM1Qk47RUQrQkk7SUFDRSxlQUFBO0VDN0JOO0VEZ0NJO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDOUJOO0FBQ0Y7QURtQ0E7RUFHTTtJQUNFLGVBQUE7RUNuQ047QUFDRjtBRHdDQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUN2Q0o7RUR5Q0k7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUN2Q047QUFDRjtBRDRDQTtFQUlNO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQzdDTjtBQUNGO0FEa0RBO0VBSU07SUFDRSxnQkFBQTtFQ25ETjtBQUNGO0FEd0RBO0VBS007SUFDRSxtQkFBQTtFQzFETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvbW9rb2QvcnVsZXMvcnVsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3JlZW4tY29sb3I6ICM1NWY5MWI7XHJcbiRibHVlLWNvbG9yOiAjMDA0YTk5O1xyXG5cclxuXHJcblxyXG4ucnVsZXMge1xyXG4gICYtcG9wdXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi1wb3NpdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi13cmFwIHtcclxuICAgIC8vIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAvL2hlaWdodDogNTB2aDtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gYm9yZGVyOiAzcHggc29saWQgJGJsdWUtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBoMyxcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWluZGVudDogMS41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDIuNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgJGJsdWUtY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODFweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICB3aWR0aDogMnZ3O1xyXG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICYtd3JhcCB7XHJcbiAgICAgIHdpZHRoOiA1OS41MnZ3O1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODFweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi13cmFwIHtcclxuICAgICAgd2lkdGg6IDU5LjUydnc7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcclxuICAucnVsZXMge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmLXdyYXAge1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5ydWxlcyB7XHJcbiAgICAmLXdyYXAge1xyXG5cclxuICAgICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICAucnVsZXMge1xyXG5cclxuICAgICYtd3JhcCB7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucnVsZXMtcG9wdXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucnVsZXMtcG9zaXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJ1bGVzLXdyYXAge1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IDIwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucnVsZXMtd3JhcCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ydWxlcy13cmFwIGgzLFxuLnJ1bGVzLXdyYXAgcCB7XG4gIHRleHQtaW5kZW50OiAxLjVlbTtcbn1cbi5ydWxlcy13cmFwIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ydWxlcy13cmFwIHAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnJ1bGVzX19idXR0b24ge1xuICBwYWRkaW5nOiAyLjVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWY5MWI7XG4gIGNvbG9yOiAjMDA0YTk5O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMDRhOTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcbiAgLnJ1bGVzX19idXR0b24ge1xuICAgIHdpZHRoOiAydnc7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgfVxuICAucnVsZXMtd3JhcCB7XG4gICAgd2lkdGg6IDU5LjUydnc7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgcCB7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgxcHgpIHtcbiAgLnJ1bGVzX19idXR0b24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLnJ1bGVzLXdyYXAge1xuICAgIHdpZHRoOiA1OS41MnZ3O1xuICB9XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXZ3O1xuICB9XG4gIC5ydWxlcy13cmFwIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnJ1bGVzLXdyYXAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgLnJ1bGVzLXdyYXAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAucnVsZXMtd3JhcCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAxOHZoO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucnVsZXMtd3JhcCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC5ydWxlcy13cmFwIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RulesComponent, [{
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u042F\u043A\u0449\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0443 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0431\u0443\u0434\u0438\u043D\u043E\u043A, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0432 \u043F\u043E\u043B\u0435 \"\u2116 \u043A\u0432.\" \u0432\u0432\u0435\u0434\u0438\u0442\u044C \u0434\u0435\u0444\u0456\u0441 \u0447\u0438 \u0442\u0438\u0440\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegistrationComponent_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "option", 29);
      }

      if (rf & 2) {
        var street_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", street_r7.name);
      }
    }

    function RegistrationComponent_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "option", 30);
      }

      if (rf & 2) {
        var number_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", number_r8);
      }
    }

    function RegistrationComponent_div_36_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegistrationComponent_div_36_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

          var i_r11 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r12.onSelect(i_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r10);
      }
    }

    function RegistrationComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegistrationComponent_div_36_div_1_Template, 2, 1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.time);
      }
    }

    function RegistrationComponent_app_congratulation_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-congratulation", 34);
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

    RegistrationComponent.??fac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_streets_service__WEBPACK_IMPORTED_MODULE_1__["StreetsService"]));
    };

    RegistrationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 41,
      vars: 5,
      consts: [[1, "registration"], [1, "registration-wrap"], [1, "registration__title"], [1, "title-last"], [1, "registration__form-wrap"], ["name", "hidden_iframe", "id", "hidden_iframe", "onload", "if(submitted) {}", 2, "display", "none"], ["action", "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeGl8-rxMlP7mUG14Dl2bzPTpSxCxrZVJi9HVjQLgoYFbAZIw/formResponse", "method", "post", "target", "hidden_iframe", "onsubmit", "submitted = true", 1, "registration__form"], ["id", "name", "type", "text", "placeholder", "\u041F\u0406\u0411", "name", "entry.1164165259"], ["id", "age", "type", "text", "placeholder", "\u0412\u0456\u043A", "name", "entry.655215280"], ["id", "phone", "type", "tel", "placeholder", "\u041C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0439 +380", "name", "entry.2093370698", "maxlength", "13"], ["class", "form__flat-validation", 4, "ngIf"], [1, "form__adress"], [1, "adress__street"], ["id", "adress__street", "type", "text", "placeholder", "\u0412\u0443\u043B\u0438\u0446\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 (\u043C.\u041A\u0438\u0457\u0432)", "name", "entry.603895323", "list", "dynmicStreetsIds", 3, "input"], ["id", "dynmicStreetsIds", 1, "adress__street-item-wrap"], ["class", "adress__street-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "adress__house"], ["id", "adress__house", "type", "text", "placeholder", "\u2116 \u0431\u0443\u0434.", "name", "entry.1082754812", "list", "dynmicHouseIds"], ["id", "dynmicHouseIds", 1, "adress__house-item-wrap"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "adress__flat", "type", "text", "placeholder", "\u2116 \u043A\u0432.", "name", "entry.1184917692", 1, "adress__flat"], [1, "custom-select"], ["type", "text", "id", "inputTime", "name", "entry.78551953"], ["id", "timeText", 1, "select-selected", 3, "click"], ["class", "select-items", 4, "ngIf"], ["rows", "3", "name", "entry.2048610841", "placeholder", "\u0412\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440", "lass", "form__comment"], ["type", "submit", 3, "click"], ["class", "congratulation-wrap", 4, "ngIf"], [1, "form__flat-validation"], [1, "adress__street-item", 3, "value"], [3, "value"], [1, "select-items"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "congratulation-wrap"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u0412\u0412\u0415\u0414\u0406\u0422\u042C \u0414\u0410\u041D\u0406");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u0414\u041B\u042F \u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0418");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "HOME PARTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "MASTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "iframe", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, RegistrationComponent_p_18_Template, 2, 0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function RegistrationComponent_Template_input_input_21_listener() {
            return ctx.geHouse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "datalist", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, RegistrationComponent_option_24_Template, 1, 1, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "datalist", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, RegistrationComponent_option_29_Template, 1, 1, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegistrationComponent_Template_div_click_33_listener() {
            return ctx.chooseTime();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\u0417\u0440\u0443\u0447\u043D\u0438\u0439 \u0447\u0430\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, RegistrationComponent_div_36_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "textarea", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegistrationComponent_Template_button_click_38_listener() {
            return ctx.valueCheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, RegistrationComponent_app_congratulation_40_Template, 1, 0, "app-congratulation", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.flatPopup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.numbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.timeItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.congratulation);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_3__["CongratulationComponent"]],
      styles: [".registration[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.registration-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n.registration__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 155px;\n}\n.registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 3.285px 37px 3.285px 56px;\n  font-family: \"MuseoSansCyrl700\";\n  font-style: italic;\n  letter-spacing: -2.5px;\n  font-size: 104.43px;\n  line-height: 100%;\n  color: #fff;\n  background-color: #004a99;\n}\n.registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n  margin-bottom: 11vh;\n}\n.registration__form-wrap[_ngcontent-%COMP%] {\n  width: 515px;\n  margin-right: auto;\n  margin-left: auto;\n  position: relative;\n}\n.registration__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  top: 26vh;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 31.62px;\n  line-height: 100%;\n  padding: 9.5px 22px;\n  box-sizing: border-box;\n  border: 1px solid #afb0af;\n  margin-bottom: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 10px;\n  position: relative;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street-item-wrap[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  background-color: #fff;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin-top: -12px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-right: 10px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9.5px 15px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  margin: 0;\n  width: 100%;\n}\n.registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 9.5px 15px;\n}\n.registration__form[_ngcontent-%COMP%]   .form__flat-validation[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  border: 1px solid red;\n  font-family: \"DIN Pro Cond Light\";\n  text-align: center;\n  color: #f1f1f1;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 12px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-top: 3px solid #c7c7c6;\n  border-right: 3px solid #c7c7c6;\n  transform: rotate(135deg);\n  right: 46px;\n  bottom: 25px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n  bottom: 12px;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n  font-family: \"DIN Pro Cond Light\";\n  font-size: 31.62px;\n  line-height: 100%;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.5);\n  padding: 12.5px 22px;\n  border: 1px solid transparent;\n  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #55f91b;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  height: 115px;\n  overflow-x: scroll;\n}\n.registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover, .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .same-as-selected[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #004a99;\n}\n.registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 24px 47px 24px 47px;\n  font-family: \"DIN Pro CondensedMedium\";\n  font-size: 30.59px;\n  background-color: #55f91b;\n  border: none;\n  color: #004a99;\n  text-transform: uppercase;\n  border-radius: 14px;\n  cursor: pointer;\n}\n.congratulation-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (min-width: 2880px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 31px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 18px;\n  }\n}\n@media only screen and (min-width: 3200px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 37px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 24px;\n  }\n}\n@media only screen and (min-width: 5120px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 50px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 37px;\n  }\n}\n@media only screen and (min-width: 6400px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 65px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 52px;\n  }\n}\n@media only screen and (min-width: 1681px) {\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14.35vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6vw;\n    padding: 3.285px 2.2vw 3.285px 3.33vw;\n    margin-bottom: 0.92vh;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%] {\n    height: 11vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 3vh;\n    border-radius: 0.45vw;\n  }\n}\n@media only screen and (max-width: 1677px) {\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 1.26vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 1.25vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 20px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 8px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n    padding: 2.28vh 9% 2.28vh 9%;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 29.57vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 14px;\n    width: 15px;\n    height: 15px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.35vw;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .registration[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 12px;\n    width: 12px;\n    height: 12px;\n  }\n  .registration[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 6px;\n  }\n}\n@media only screen and (max-width: 835px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 20.31vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.96px;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n@media only screen and (max-width: 812px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 35vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 2.26vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%] {\n    height: 14vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 2.25vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 10px;\n    width: 11px;\n    height: 11px;\n    right: 24px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 2px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n    padding: 2.28vh 9% 2.28vh 9%;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 20.31vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 56.96px;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 0.735vh 2.26vw;\n    margin-bottom: 10px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1.959vh 9% 1.95vh 9%;\n  }\n}\n@media only screen and (max-width: 740px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 35vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 1vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 1vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 10px;\n    width: 11px;\n    height: 11px;\n    right: 24px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 2px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (max-width: 736px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 3.285px 37px 3.285px 22px;\n  }\n}\n@media only screen and (max-width: 667px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 7px;\n    width: 9px;\n    height: 9px;\n    right: 24px;\n    border-top: 1.5px solid #c7c7c6;\n    border-right: 1.5px solid #c7c7c6;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-radius: 7px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 17vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 8.2vw;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 72.26%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 25.96px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n}\n@media only screen and (max-width: 568px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 14vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 6.2vw;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 30.65%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 35vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 0.9vh 1vw;\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__flat[_ngcontent-%COMP%] {\n    padding: 0.9vh 0.85vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__street[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .form__adress[_ngcontent-%COMP%]   .adress__house[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    margin-bottom: 1.1vh;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 1.85vw;\n    padding: 1.15vh 1vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 7px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 2px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .registration-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registration__title[_ngcontent-%COMP%] {\n    padding-top: 17vh;\n  }\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 8.2vw;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 1vh;\n  }\n  .registration__form-wrap[_ngcontent-%COMP%] {\n    width: 72.26%;\n  }\n  .registration__form[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 21px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n    bottom: 11px;\n  }\n  .registration__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 24.36px;\n  }\n}\n@media only screen and (max-width: 384px) {\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%]:after {\n    bottom: 14px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .form__flat-validation[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .registration__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 29.78px;\n    margin-bottom: 6px;\n    padding: 2px 15px 2px 9px;\n  }\n  .registration__title[_ngcontent-%COMP%]   .title-last[_ngcontent-%COMP%] {\n    margin-bottom: 17px;\n  }\n  .registration__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 15.65px;\n    padding: 0.883vh 5px;\n  }\n  .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .registration__form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   .select-selected[_ngcontent-%COMP%] {\n    padding: 1.15vh 5px;\n  }\n  .registration[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 14.69px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0Y6XFxwcm9qZWN0XFxEMlxcVHVib3JnXFxjb2RlXFx0dWJvcmcvc3JjXFxhcHBcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtBQ0ZGO0FESUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkEzQk87QUN3QmI7QURPTTtFQUVFLG1CQUFBO0FDTlI7QURXRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEYUk7O0VBRUUsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1hOO0FEY0k7RUFDRSxZQUFBO0FDWk47QURnQk07RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ2RSO0FEaUJVO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNmWjtBRGlCWTtFQUNFLFdBQUE7QUNmZDtBRGtCWTtFQUNFLGFBQUE7QUNoQmQ7QURvQlU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNsQlo7QURxQlU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQ25CWjtBRHNCVTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ3BCWjtBRHNCWTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ3BCZDtBRHVCWTtFQUNFLGFBQUE7QUNyQmQ7QUR3Qlk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ3RCZDtBRG9CWTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FDdEJkO0FEb0JZO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUN0QmQ7QURvQlk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ3RCZDtBRDBCVTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ3hCWjtBRDZCTTtFQUNFLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzNCUjtBRCtCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUM3Qk47QUQrQk07RUFDRSxhQUFBO0FDN0JSO0FEZ0NNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDOUJSO0FEaUNNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDL0JSO0FEa0NNOztFQUVFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0VBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNoQ1I7QURtQ007RUFDRSxrQkFBQTtFQUNBLHlCQXpMTTtFQTBMTixTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDakNSO0FEb0NNOztFQUVFLG9DQUFBO0VBQ0EsY0FwTUs7QUNrS2I7QURzQ0k7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkE3TVE7RUE4TVIsWUFBQTtFQUNBLGNBOU1PO0VBK01QLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDcENOO0FEeUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN0Q0Y7QUR5Q0E7RUFJUTtJQUNFLFlBQUE7RUN6Q1I7RUQ0Q007SUFDRSxZQUFBO0VDMUNSO0FBQ0Y7QURnREE7RUFJUTtJQUNFLFlBQUE7RUNqRFI7RURvRE07SUFDRSxZQUFBO0VDbERSO0FBQ0Y7QUR3REE7RUFJUTtJQUNFLFlBQUE7RUN6RFI7RUQ0RE07SUFDRSxZQUFBO0VDMURSO0FBQ0Y7QURnRUE7RUFJUTtJQUNFLFlBQUE7RUNqRVI7RURvRU07SUFDRSxZQUFBO0VDbEVSO0FBQ0Y7QUR5RUE7RUFFSTtJQUNFLG9CQUFBO0VDeEVKO0VEMkVFO0lBQ0UsY0FBQTtJQUNBLHFDQUFBO0lBQ0EscUJBQUE7RUN6RUo7RUQ0RUU7SUFDRSxjQUFBO0VDMUVKO0VEK0VJOztJQUVFLGNBQUE7RUM3RU47RURnRkk7OztJQUdFLGNBQUE7RUM5RU47RURpRkk7SUFDRSxZQUFBO0VDL0VOO0VEa0ZJO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VDaEZOO0FBQ0Y7QURxRkE7RUFFSTtJQUNFLGlCQUFBO0VDcEZKO0VEc0ZJO0lBQ0UsZ0JBQUE7RUNwRk47RUQwRkk7O0lBRUUsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLG9CQUFBO0VDeEZOO0VENkZNO0lBRUUscUJBQUE7RUM1RlI7RURnR0k7SUFDRSxvQkFBQTtFQzlGTjtFRGdHTTs7SUFFRSxpQkFBQTtJQUNBLHNCQUFBO0VDOUZSO0VEaUdNO0lBQ0UsWUFBQTtFQy9GUjtFRGtHTTtJQUNFLFdBQUE7RUNoR1I7RURvR0k7SUFDRSxnQkFBQTtJQUNBLDRCQUFBO0VDbEdOO0FBQ0Y7QUR1R0E7RUFFSTtJQUNFLGFBQUE7RUN0R0o7RUR5R0U7SUFDRSxZQUFBO0VDdkdKO0VEeUdJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDdkdOO0VENEdNO0lBRUUscUJBQUE7RUMzR1I7QUFDRjtBRGtIQTtFQUdNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDbEhOO0VEcUhJO0lBQ0UsV0FBQTtFQ25ITjtBQUNGO0FEd0hBO0VBRUk7SUFDRSxzQkFBQTtFQ3ZISjtFRDBIRTtJQUNFLG9CQUFBO0VDeEhKO0VEMEhJO0lBQ0Usa0JBQUE7RUN4SE47RUQySEk7SUFDRSxtQkFBQTtFQ3pITjtFRDZIRTtJQUNFLE1BQUE7RUMzSEo7RUQ2SEk7O0lBRUUsa0JBQUE7RUMzSE47RURnSU07O0lBRUUsa0JBQUE7RUM5SFI7RURpSU07SUFDRSxZQUFBO0VDL0hSO0VEbUlNO0lBQ0UsWUFBQTtFQ2pJUjtFRHFJSTtJQUNFLGtCQUFBO0VDbklOO0VEdUlFO0lBQ0UsWUFBQTtFQ3JJSjtBQUNGO0FEeUlBO0VBRUk7SUFDRSxtQkFBQTtFQ3hJSjtFRDJJRTtJQUNFLGlCQUFBO0VDeklKO0VEMklJO0lBQ0UsZ0JBQUE7RUN6SU47RUQ2SUU7SUFDRSxhQUFBO0VDM0lKO0VEOElFO0lBQ0UsU0FBQTtFQzVJSjtFRDhJSTs7SUFFRSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7RUM1SU47RURpSk07SUFFRSxxQkFBQTtFQ2hKUjtFRG9KSTtJQUNFLG9CQUFBO0VDbEpOO0VEb0pNO0lBQ0UsWUFBQTtFQ2xKUjtFRHFKTTs7SUFFRSxpQkFBQTtJQUNBLHNCQUFBO0VDbkpSO0VEc0pNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ3BKUjtFRHVKTTtJQUNFLFdBQUE7RUNySlI7RUR5Skk7SUFDRSxnQkFBQTtJQUNBLDRCQUFBO0VDdkpOO0FBQ0Y7QUQ0SkE7RUFFSTtJQUNFLHNCQUFBO0VDM0pKO0VEOEpFO0lBQ0Usb0JBQUE7RUM1Sko7RUQ4Skk7SUFDRSxrQkFBQTtFQzVKTjtFRCtKSTtJQUVFLG1CQUFBO0VDOUpOO0VEa0tFO0lBQ0UsTUFBQTtFQ2hLSjtFRGtLSTs7SUFFRSxrQkFBQTtFQ2hLTjtFRHFLTTs7SUFFRSxrQkFBQTtFQ25LUjtFRHNLTTtJQUNFLFlBQUE7RUNwS1I7RUR3S007SUFDRSxZQUFBO0VDdEtSO0VEMEtJO0lBQ0Usa0JBQUE7RUN4S047RUQ0S0U7SUFDRSxZQUFBO0VDMUtKO0FBQ0Y7QUQ4S0E7RUFJTTs7SUFFRSx1QkFBQTtJQUNBLG1CQUFBO0VDL0tOO0VEa0xJO0lBQ0UsbUJBQUE7RUNoTE47RURtTEk7SUFDRSw2QkFBQTtFQ2pMTjtBQUNGO0FEc0xBO0VBRUk7SUFDRSxtQkFBQTtFQ3JMSjtFRHdMRTtJQUNFLGlCQUFBO0VDdExKO0VEd0xJO0lBQ0UsZ0JBQUE7RUN0TE47RUQwTEU7SUFDRSxhQUFBO0VDeExKO0VEMkxFO0lBQ0UsU0FBQTtFQ3pMSjtFRDJMSTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUN6TE47RUQ4TE07SUFFRSxxQkFBQTtFQzdMUjtFRGlNSTtJQUNFLG9CQUFBO0VDL0xOO0VEaU1NOztJQUVFLGlCQUFBO0lBQ0EsbUJBQUE7RUMvTFI7RURrTU07SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDaE1SO0VEbU1NO0lBQ0UsV0FBQTtFQ2pNUjtFRHFNSTtJQUNFLGdCQUFBO0VDbk1OO0FBQ0Y7QUR3TUE7RUFFSTtJQUNFLG1CQUFBO0VDdk1KO0VENE1JO0lBQ0Usa0NBQUE7RUMxTU47QUFDRjtBRCtNQTtFQUdNO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLCtCQUFBO0lBQ0EsaUNBQUE7RUMvTU47RURrTkk7SUFDRSxrQkFBQTtFQ2hOTjtBQUNGO0FEcU5BO0VBRUk7SUFDRSxzQkFBQTtFQ3BOSjtFRHVORTtJQUNFLGlCQUFBO0VDck5KO0VEdU5JO0lBQ0UsZ0JBQUE7RUNyTk47RUR3Tkk7SUFFRSxtQkFBQTtFQ3ZOTjtFRDJORTtJQUNFLGFBQUE7RUN6Tko7RUQ0TkU7SUFDRSxNQUFBO0VDMU5KO0VENE5JOztJQUVFLGtCQUFBO0VDMU5OO0VEK05NOztJQUVFLGtCQUFBO0VDN05SO0VEZ09NO0lBQ0UsWUFBQTtFQzlOUjtFRGtPTTtJQUNFLFlBQUE7RUNoT1I7RURvT0k7SUFDRSxrQkFBQTtFQ2xPTjtBQUNGO0FEdU9BO0VBRUk7SUFDRSxtQkFBQTtFQ3RPSjtFRHlPRTtJQUNFLGlCQUFBO0VDdk9KO0VEeU9JO0lBQ0UsZ0JBQUE7RUN2T047RUQyT0U7SUFDRSxhQUFBO0VDek9KO0VENE9FO0lBQ0UsU0FBQTtFQzFPSjtFRDRPSTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUMxT047RUQrT007SUFFRSxxQkFBQTtFQzlPUjtFRGlQTTtJQUVFLGlCQUFBO0VDaFBSO0VEb1BJO0lBQ0Usb0JBQUE7RUNsUE47RURvUE07O0lBRUUsaUJBQUE7SUFDQSxtQkFBQTtFQ2xQUjtFRHFQTTtJQUNFLFdBQUE7RUNuUFI7RURzUE07SUFDRSxXQUFBO0VDcFBSO0VEd1BJO0lBQ0UsZ0JBQUE7RUN0UE47QUFDRjtBRDJQQTtFQUVJO0lBQ0Usc0JBQUE7RUMxUEo7RUQ2UEU7SUFDRSxpQkFBQTtFQzNQSjtFRDZQSTtJQUNFLGdCQUFBO0VDM1BOO0VEOFBJO0lBRUUsa0JBQUE7RUM3UE47RURpUUU7SUFDRSxhQUFBO0VDL1BKO0VEa1FFO0lBQ0UsTUFBQTtFQ2hRSjtFRGtRSTs7SUFFRSxjQUFBO0VDaFFOO0VEcVFNOztJQUVFLGNBQUE7RUNuUVI7RURzUU07SUFDRSxZQUFBO0VDcFFSO0VEd1FNO0lBQ0UsWUFBQTtFQ3RRUjtFRDBRSTtJQUNFLGtCQUFBO0VDeFFOO0FBQ0Y7QUQ2UUE7RUFJUTtJQUNFLFlBQUE7RUM5UVI7RURrUkk7SUFDRSxlQUFBO0VDaFJOO0FBQ0Y7QURxUkE7RUFHTTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFQ3JSTjtFRHdSSTtJQUNFLG1CQUFBO0VDdFJOO0VENFJJOztJQUVFLGtCQUFBO0lBQ0Esb0JBQUE7RUMxUk47RUQrUk07O0lBRUUsbUJBQUE7RUM3UlI7RURrU0U7SUFDRSxrQkFBQTtFQ2hTSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbi1jb2xvcjogIzU1ZjkxYjtcclxuJGJsdWUtY29sb3I6ICMwMDRhOTk7XHJcblxyXG4ucmVnaXN0cmF0aW9uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiAxNTVweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAzLjI4NXB4IDM3cHggMy4yODVweCA1NnB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ011c2VvU2Fuc0N5cmw3MDAnO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTA0LjQzcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgJi1sYXN0IHtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTF2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZm9ybS13cmFwIHtcclxuICAgIHdpZHRoOiA1MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB9XHJcblxyXG4gICZfX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI2dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzEuNjJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDkuNXB4IDIycHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZmIwYWY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAmX19hZHJlc3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5hZHJlc3Mge1xyXG4gICAgICAgICAgJl9fc3RyZWV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmX19zdHJlZXQtaXRlbS13cmFwIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICZfX3N0cmVldC1pdGVtIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICZfX2hvdXNlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDkuNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJl9fZmxhdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDkuNXB4IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19mbGF0LXZhbGlkYXRpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjN2M3YzY7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2M3YzdjNjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgIHJpZ2h0OiA0NnB4O1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIGJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzEuNjJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgcGFkZGluZzogMTIuNXB4IDIycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuMSkgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0LWl0ZW1zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0LWl0ZW1zIGRpdjpob3ZlcixcclxuICAgICAgLnNhbWUtYXMtc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAyNHB4IDQ3cHggMjRweCA0N3B4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xyXG4gICAgICBmb250LXNpemU6IDMwLjU5cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb25ncmF0dWxhdGlvbi13cmFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODgwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDMxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjAwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDM3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MTIwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAzN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDAwcHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDY1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiA1MnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTY4MXB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNC4zNXZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHAge1xyXG4gICAgICBmb250LXNpemU6IDZ2dztcclxuICAgICAgcGFkZGluZzogMy4yODVweCAyLjJ2dyAzLjI4NXB4IDMuMzN2dztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC45MnZoO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NXZ3O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0ge1xyXG5cclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Quc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCxcclxuICAgICAgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIHtcclxuICAgICAgICBoZWlnaHQ6IDExdmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40NXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzdweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTR2aDtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNi4ydnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19mb3JtIHtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMS4yNnZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODV2dztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCAxLjI1dnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgICBwYWRkaW5nOiAyLjI4dmggOSUgMi4yOHZoIDklO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fZm9ybS13cmFwIHtcclxuICAgICAgd2lkdGg6IDMwLjY1JTtcclxuICAgIH1cclxuXHJcbiAgICAmX19mb3JtIHtcclxuICAgICAgdG9wOiAyOS41N3ZoO1xyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgYm90dG9tOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm1fX2FkcmVzcyAuYWRyZXNzIHtcclxuXHJcbiAgICAgICAgJl9faG91c2UgaW5wdXQsXHJcbiAgICAgICAgJl9fZmxhdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjl2aCAwLjM1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICBib3R0b206IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDIwLjMxdmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDU2Ljk2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNS45NnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcblxyXG4gICAgICAgIC5zZWxlY3QtaXRlbXMgZGl2LFxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNS45NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDIxcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNC4zNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybS13cmFwIHtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2LjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMzV2aDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMi4yNnZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE0dmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xyXG4gICAgICAgICAgcGFkZGluZzogMS4xNXZoIDIuMjV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICByaWdodDogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgICAgICBwYWRkaW5nOiAyLjI4dmggOSUgMi4yOHZoIDklO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDIwLjMxdmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDU2Ljk2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Qge1xyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyMXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICZfX2Zvcm0ge1xyXG5cclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjczNXZoIDIuMjZ2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjk1OXZoIDklIDEuOTV2aCA5JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2LjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMzV2aDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMXZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODV2dztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuICAucmVnaXN0cmF0aW9uIHtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUge1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMy4yODVweCAzN3B4IDMuMjg1cHggMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgI2M3YzdjNjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNjN2M3YzY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE3dmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDguMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19mb3JtLXdyYXAge1xyXG4gICAgICB3aWR0aDogNzIuMjYlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Qge1xyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyMXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHZoO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2LjJ2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiAzMC42NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMzV2aDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjg1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC45dmggMXZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybV9fYWRyZXNzIC5hZHJlc3Mge1xyXG5cclxuICAgICAgICAmX19ob3VzZSBpbnB1dCxcclxuICAgICAgICAmX19mbGF0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX3N0cmVldCxcclxuICAgICAgICAmX19ob3VzZSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuODV2dztcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCAxdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbiB7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE3dmg7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDguMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUtbGFzdCB7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvcm0td3JhcCB7XHJcbiAgICAgIHdpZHRoOiA3Mi4yNiU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1pdGVtcyBkaXYsXHJcbiAgICAgICAgLnNlbGVjdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYm90dG9tOiAyMXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBib3R0b206IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIC5jdXN0b20tc2VsZWN0IHtcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcclxuICAgICAgICAgIGJvdHRvbTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtX19mbGF0LXZhbGlkYXRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24ge1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDI5Ljc4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxNXB4IDJweCA5cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZS1sYXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZm9ybSB7XHJcblxyXG4gICAgICBpbnB1dCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUuNjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjg4M3ZoIDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1c3RvbS1zZWxlY3Qge1xyXG5cclxuICAgICAgICAuc2VsZWN0LWl0ZW1zIGRpdixcclxuICAgICAgICAuc2VsZWN0LXNlbGVjdGVkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuMTV2aCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxNC42OXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucmVnaXN0cmF0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMTU1cHg7XG59XG4ucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAzLjI4NXB4IDM3cHggMy4yODVweCA1NnB4O1xuICBmb250LWZhbWlseTogXCJNdXNlb1NhbnNDeXJsNzAwXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0yLjVweDtcbiAgZm9udC1zaXplOiAxMDQuNDNweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0YTk5O1xufVxuLnJlZ2lzdHJhdGlvbl9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMXZoO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybS13cmFwIHtcbiAgd2lkdGg6IDUxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI2dmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmQgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAzMS42MnB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogOS41cHggMjJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FmYjBhZjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQgaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fc3RyZWV0LWl0ZW0td3JhcCB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQtaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA5LjVweCAxNXB4O1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fZmxhdCB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDkuNXB4IDE1cHg7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19mbGF0LXZhbGlkYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiRElOIFBybyBDb25kIExpZ2h0XCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2M3YzdjNjtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2M3YzdjNjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgcmlnaHQ6IDQ2cHg7XG4gIGJvdHRvbTogMjVweDtcbn1cbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgYm90dG9tOiAxMnB4O1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRJTiBQcm8gQ29uZCBMaWdodFwiO1xuICBmb250LXNpemU6IDMxLjYycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAxMi41cHggMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCAwLCAwLCAwLjEpIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVmOTFiO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdjpob3Zlcixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNhbWUtYXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGNvbG9yOiAjMDA0YTk5O1xufVxuLnJlZ2lzdHJhdGlvbl9fZm9ybSBidXR0b24ge1xuICBwYWRkaW5nOiAyNHB4IDQ3cHggMjRweCA0N3B4O1xuICBmb250LWZhbWlseTogXCJESU4gUHJvIENvbmRlbnNlZE1lZGl1bVwiO1xuICBmb250LXNpemU6IDMwLjU5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWY5MWI7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDRhOTk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbmdyYXR1bGF0aW9uLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODgwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDMxcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDM3cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMjRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MTIwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDUwcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMzdweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDY1cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogNTJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgxcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxNC4zNXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgIHBhZGRpbmc6IDMuMjg1cHggMi4ydncgMy4yODVweCAzLjMzdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45MnZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDMwLjY1dnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3Quc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyB7XG4gICAgaGVpZ2h0OiAxMXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDN2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjQ1dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY3N3B4KSB7XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTR2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDYuMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgICBwYWRkaW5nOiAwLjl2aCAxLjI2dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0LCAucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fZmxhdCB7XG4gICAgcGFkZGluZzogMC45dmggMC44NXZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYsXG4ucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQge1xuICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xuICAgIHBhZGRpbmc6IDEuMTV2aCAxLjI1dnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogOHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgIHBhZGRpbmc6IDIuMjh2aCA5JSAyLjI4dmggOSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDMwLjY1JTtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgICB0b3A6IDI5LjU3dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDE0cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSBpbnB1dCwgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2ZsYXQge1xuICAgIHBhZGRpbmc6IDAuOXZoIDAuMzV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAucmVnaXN0cmF0aW9uIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbiAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzNXB4KSB7XG4gIC5yZWdpc3RyYXRpb24td3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDIwLjMxdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA1Ni45NnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0ge1xuICAgIHRvcDogMDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGlucHV0LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAyNS45NnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyBkaXYsXG4ucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQge1xuICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMjFweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gICAgYm90dG9tOiAxMXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDI0LjM2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybS13cmFwIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTR2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDYuMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDMwLjY1JTtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgICB0b3A6IDM1dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMS44NXZ3O1xuICAgIHBhZGRpbmc6IDAuOXZoIDIuMjZ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19faG91c2UgaW5wdXQsIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19mbGF0IHtcbiAgICBwYWRkaW5nOiAwLjl2aCAwLjg1dnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIHtcbiAgICBoZWlnaHQ6IDE0dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgZm9udC1zaXplOiAxLjg1dnc7XG4gICAgcGFkZGluZzogMS4xNXZoIDIuMjV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgcmlnaHQ6IDI0cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgIHBhZGRpbmc6IDIuMjh2aCA5JSAyLjI4dmggOSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMjAuMzF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDU2Ljk2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDI1Ljk2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgZm9udC1zaXplOiAyNS45NnB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gICAgYm90dG9tOiAyMXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcbiAgICBib3R0b206IDExcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjQuMzZweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtLXdyYXAge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmVnaXN0cmF0aW9uX19mb3JtIGlucHV0LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMC43MzV2aCAyLjI2dnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxLjk1OXZoIDklIDEuOTV2aCA5JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xuICAucmVnaXN0cmF0aW9uLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxNHZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogNi4ydnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybS13cmFwIHtcbiAgICB3aWR0aDogMzAuNjUlO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0ge1xuICAgIHRvcDogMzV2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGlucHV0LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxLjg1dnc7XG4gICAgcGFkZGluZzogMC45dmggMXZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDEuMXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSBpbnB1dCwgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2ZsYXQge1xuICAgIHBhZGRpbmc6IDAuOXZoIDAuODV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3QtaXRlbXMgZGl2LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgICBwYWRkaW5nOiAxLjE1dmggMXZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICByaWdodDogMjRweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gICAgYm90dG9tOiAycHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS44dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIHBhZGRpbmc6IDMuMjg1cHggMzdweCAzLjI4NXB4IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDdweDtcbiAgICB3aWR0aDogOXB4O1xuICAgIGhlaWdodDogOXB4O1xuICAgIHJpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICNjN2M3YzY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjYzdjN2M2O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbi13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTd2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSBwIHtcbiAgICBmb250LXNpemU6IDguMnZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0td3JhcCB7XG4gICAgd2lkdGg6IDcyLjI2JTtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSBpbnB1dCxcbi5yZWdpc3RyYXRpb25fX2Zvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMjUuOTZweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3QtaXRlbXMgZGl2LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBmb250LXNpemU6IDI1Ljk2cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDIxcHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXIge1xuICAgIGJvdHRvbTogMTFweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyNC4zNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5yZWdpc3RyYXRpb24td3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucmVnaXN0cmF0aW9uX190aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDE0dmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiA2LjJ2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtLXdyYXAge1xuICAgIHdpZHRoOiAzMC42NSU7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSB7XG4gICAgdG9wOiAzNXZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDEuODV2dztcbiAgICBwYWRkaW5nOiAwLjl2aCAxdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fYWRyZXNzIC5hZHJlc3NfX2hvdXNlIGlucHV0LCAucmVnaXN0cmF0aW9uX19mb3JtIC5mb3JtX19hZHJlc3MgLmFkcmVzc19fZmxhdCB7XG4gICAgcGFkZGluZzogMC45dmggMC44NXZ3O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19zdHJlZXQsIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmZvcm1fX2FkcmVzcyAuYWRyZXNzX19ob3VzZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4xdmg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgZm9udC1zaXplOiAxLjg1dnc7XG4gICAgcGFkZGluZzogMS4xNXZoIDF2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogN3B4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcbiAgICBib3R0b206IDJweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucmVnaXN0cmF0aW9uLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAxN3ZoO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogOC4ydnc7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgLnRpdGxlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtLXdyYXAge1xuICAgIHdpZHRoOiA3Mi4yNiU7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3QtaXRlbXMgZGl2LFxuLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkIHtcbiAgICBmb250LXNpemU6IDV2dztcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogMjFweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uX19mb3JtIC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gICAgYm90dG9tOiAxMXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDI0LjM2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVyIHtcbiAgICBib3R0b206IDE0cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuZm9ybV9fZmxhdC12YWxpZGF0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnJlZ2lzdHJhdGlvbl9fdGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAyOS43OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nOiAycHggMTVweCAycHggOXB4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX3RpdGxlIC50aXRsZS1sYXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICB9XG4gIC5yZWdpc3RyYXRpb25fX2Zvcm0gaW5wdXQsXG4ucmVnaXN0cmF0aW9uX19mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE1LjY1cHg7XG4gICAgcGFkZGluZzogMC44ODN2aCA1cHg7XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbl9fZm9ybSAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LWl0ZW1zIGRpdixcbi5yZWdpc3RyYXRpb25fX2Zvcm0gLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZCB7XG4gICAgcGFkZGluZzogMS4xNXZoIDVweDtcbiAgfVxuICAucmVnaXN0cmF0aW9uIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNC42OXB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegistrationComponent, [{
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

    StreetsService.??fac = function StreetsService_Factory(t) {
      return new (t || StreetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    StreetsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: StreetsService,
      factory: StreetsService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StreetsService, [{
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