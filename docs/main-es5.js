(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkanas_portfolio"] = self["webpackChunkanas_portfolio"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/home/home.component */
      8263);
      /* harmony import */


      var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sign-in/sign-in.component */
      3653);
      /* harmony import */


      var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up/sign-up.component */
      8422);
      /* harmony import */


      var _manage_portfolio_manage_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-portfolio/manage-portfolio.component */
      8633);
      /* harmony import */


      var _guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards/admin/admin.guard */
      9256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
      }, {
        path: 'sign-up',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent
      }, {
        path: 'login',
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent
      }, {
        path: 'manage-portfolio',
        component: _manage_portfolio_manage_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.ManagePortfolioComponent,
        canActivate: [_guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_4__.AdminGuard]
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! aos */
      3907);
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/language/language.service */
      3469);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(titleService, metaService, languageService) {
          _classCallCheck(this, _AppComponent);

          this.titleService = titleService;
          this.metaService = metaService;
          this.languageService = languageService;
          this.title = "Anas-portfolio";
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.languageService.initLanguage();
            this.titleService.setTitle("Med Anas Guerbouj | MEAN Stack Developer | MERN Stack Developer | Software Engineer");
            this.metaService.addTags([{
              name: "keywords",
              content: "Frontend, MEAN Stack Developer , MERN Stack Development , Software Engineer, software, developer"
            }, {
              name: "description",
              content: "As a software engineer with expertise in both MEAN and MERN stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js and Express."
            }]);
            aos__WEBPACK_IMPORTED_MODULE_0__.init();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
        styles: [".nav[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FBQUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdlxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/home/home.module */
      3783);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng2-animate-on-scroll */
      4565);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/service-worker */
      7334);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      2340);
      /* harmony import */


      var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-google-analytics */
      4462);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      9476);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);
      /* harmony import */


      var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sign-in/sign-in.component */
      3653);
      /* harmony import */


      var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-up/sign-up.component */
      8422);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      7844);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _manage_portfolio_manage_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./manage-portfolio/manage-portfolio.component */
      8633);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      function _HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, './assets/i18n/', '.json');
      }

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_16__.AnimateOnScrollModule.forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
        }), ngx_google_analytics__WEBPACK_IMPORTED_MODULE_20__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.trackAnalyticID), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__.SignInComponent, _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent, _manage_portfolio_manage_portfolio_component__WEBPACK_IMPORTED_MODULE_6__.ManagePortfolioComponent
          /* ArchiveComponent */
          ],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_16__.AnimateOnScrollModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_20__.NgxGoogleAnalyticsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule]
        });
      })();
      /***/

    },

    /***/
    4321:
    /*!***************************************************************!*\
      !*** ./src/app/components/general/footer/footer.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      7175);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent(analyticsService) {
          _classCallCheck(this, _FooterComponent);

          this.analyticsService = analyticsService;
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 17,
        vars: 1,
        consts: [[1, "footer-left-bar", "d-none", "d-md-block"], ["href", "https://github.com/anasgarbouj", "target", "_blank", 3, "click"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/mohamed-anas-guerbouj-5b1729222/", "target", "_blank", 3, "click"], [1, "fab", "fa-linkedin-in"], [1, "footer-right-bar", "d-none", "d-md-block"], ["href", "mailto:anaskping@gmail.com", "target", "_blank", 3, "click"], [1, "footer-credits", "text-center"], ["href", "https://github.com/anasgarbouj", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "github");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_linkedin", "footer", "github");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "footer", "email");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "anaskping@gmail.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_florece", "footer", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Built with Angular by Mohamed Anas Guerbouj");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_16_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_florece", "footer", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateFooter", undefined);
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBQ0ksY0RHWTtBQ0hoQjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkRMUTtBQ0toQjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUZSO0FBSVE7RUFDSSxlQUFBO0VBQ0EsY0RwQkk7QUNrQmhCO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBS1k7RUFDSSxtQkFBQTtBQUhoQjtBQVFJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQU5SO0FBUVE7RUFDSSx3QkFBQTtBQU5aO0FBU1E7RUFDSSwwRkRwQ0Q7RUNxQ0MsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjRHRESTtBQytDaEI7QUFVSTtFQUNJLDBGRG5ERztFQ29ESCxlQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFUUjtBQVdRO0VBQ0ksY0RyRUk7RUN1RUosMERBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxvQkFBQTtBQVRaO0FBV1k7RUFDSSxxQkFBQTtFQUNBLGNENUVBO0FDbUVoQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xyXG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcclxuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuZm9vdGVye1xyXG4gICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG5cclxuICAgIC5mb290ZXItbGVmdC1iYXI6YWZ0ZXIsIC5mb290ZXItcmlnaHQtYmFyOmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbGVmdC1iYXIgbGksIC5mb290ZXItcmlnaHQtYmFyIGxpe1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1sZWZ0LWJhcntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAtMTZweDtcclxuICAgICAgICBsZWZ0OiA1MXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItcmlnaHQtYmFye1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICByaWdodDogNDFweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgICAgIC1tcy1sZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICAgICAgICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1ybDtcclxuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWNyZWRpdHN7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcblxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkTGlnaHRTbGF0ZTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("animateFooter", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(":enter", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)("*", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            opacity: 0,
            transform: "translateY(100%)"
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(50, [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            opacity: 1,
            transform: "none"
          }))])])])])]
        }
      });
      /***/
    },

    /***/
    854:
    /*!******************************************************!*\
      !*** ./src/app/components/general/general.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory2
          );
        },

        /* harmony export */
        "GeneralModule": function GeneralModule() {
          return (
            /* binding */
            _GeneralModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer/footer.component */
      4321);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      5298);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      9476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      function _HttpLoaderFactory2(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
      }

      var _GeneralModule = /*#__PURE__*/_createClass(function _GeneralModule() {
        _classCallCheck(this, _GeneralModule);
      });

      _GeneralModule.ɵfac = function GeneralModule_Factory(t) {
        return new (t || _GeneralModule)();
      };

      _GeneralModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _GeneralModule
      });
      _GeneralModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
            useFactory: _HttpLoaderFactory2,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_GeneralModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
        });
      })();
      /***/

    },

    /***/
    5298:
    /*!***************************************************************!*\
      !*** ./src/app/components/general/header/header.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      7175);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/language/language.service */
      3469);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      function HeaderComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "First content");
        }
      }

      function HeaderComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
        }
      }

      function HeaderComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
        }
      }

      function HeaderComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
        }
      }

      function HeaderComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "pointer-events": a0
        };
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(router, analyticsService, languageService) {
          _classCallCheck(this, _HeaderComponent);

          this.router = router;
          this.analyticsService = analyticsService;
          this.languageService = languageService;
          this.responsiveMenuVisible = false;
          this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
          this.cvName = "";
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.languageFormControl.valueChanges.subscribe(function (val) {
              return _this.languageService.changeLanguage(val);
            });
            this.languageFormControl.setValue(this.languageService.language);
          }
        }, {
          key: "scroll",
          value: function scroll(el) {
            if (document.getElementById(el)) {
              document.getElementById(el).scrollIntoView({
                behavior: "smooth"
              });
            } else {
              this.router.navigate(["/home"]).then(function () {
                return document.getElementById(el).scrollIntoView({
                  behavior: "smooth"
                });
              });
            }

            this.responsiveMenuVisible = false;
          }
        }, {
          key: "openLinkedin",
          value: function openLinkedin() {
            // Get the LinkedIn link from translation
            this.languageService.translateService.get("Header.linkedInlink").subscribe(function (link) {
              // Open the LinkedIn link in a new window
              window.open(link, '_blank');
            });
          }
        }, {
          key: "downloadCV",
          value: function downloadCV() {
            var _this2 = this;

            this.languageService.translateService.get("Header.cvName").subscribe(function (val) {
              _this2.cvName = val; // app url

              var url = window.location.href; // Open a new window with the CV

              window.open(url + "/../assets/cv/" + _this2.cvName, "_blank");
            });
          }
        }, {
          key: "getScrollPosition",
          value: function getScrollPosition(event) {
            this.pageYPosition = window.pageYOffset;
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(language) {
            this.languageFormControl.setValue(language);
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
              return ctx.getScrollPosition(ctx.getScrollPosition($event));
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
          }
        },
        decls: 96,
        vars: 51,
        consts: [[1, "navbar", "main-navbar", "on-top"], [1, "header-container"], ["tabindex", "-1", 1, "logo", "fade-enter-done"], ["href", "/", "aria-label", "home"], [1, "hex-container"], [1, "logo-container"], ["src", "/assets/images/me/anas.png", "alt", "Logo"], ["ngbNav", "", 1, "menu-ul"], ["nav", "ngbNav"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbNavItem", ""], ["target", "_blank", "ngbNavLink", "", 1, "main-btn", "cv-btn", 3, "click"], ["ngbNavLink", "", 1, "main-btn", "cv-btn", 3, "click"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click"], ["target", "_blank", 1, "main-btn", "cv-btn", 3, "click"], [1, "main-btn", "cv-btn", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_10_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
              return ctx.scroll("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "01. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HeaderComponent_ng_template_17_Template, 1, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_18_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
              return ctx.scroll("jobs");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "02. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HeaderComponent_ng_template_25_Template, 1, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_26_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_27_listener() {
              return ctx.scroll("projects");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "03. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, HeaderComponent_ng_template_33_Template, 1, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_34_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_testimonial", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_35_listener() {
              return ctx.scroll("testimonial");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "04. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, HeaderComponent_ng_template_41_Template, 1, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_42_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_43_listener() {
              return ctx.scroll("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "05. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, HeaderComponent_ng_template_49_Template, 1, 0, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_51_listener() {
              return ctx.openLinkedin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_55_listener() {
              return ctx.downloadCV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_59_listener() {
              return ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "aside", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_64_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_65_listener() {
              return ctx.scroll("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "01. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_70_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_71_listener() {
              return ctx.scroll("jobs");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "02. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_76_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_77_listener() {
              return ctx.scroll("projects");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "03. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_82_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_testimonial", "menu", "click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_83_listener() {
              return ctx.scroll("testimonial");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "04. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_89_listener() {
              return ctx.openLinkedin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](91, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_93_listener() {
              return ctx.downloadCV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](95, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@animateMenu", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 23, "Header.Item1"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 25, "Header.Item2"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 27, "Header.Item3"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 29, "Header.Item4"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 31, "Header.Item5"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 33, "Header.linkedInname"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 35, "Header.cvBtn"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](49, _c0, !ctx.responsiveMenuVisible ? "none" : ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 37, "Header.Item1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 39, "Header.Item2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 41, "Header.Item3"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 43, "Header.Item4"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](91, 45, "Header.linkedInname"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](95, 47, "Header.cvBtn"), " ");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
        styles: [".main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #0a192f;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.main-navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #64ffda;\n}\n.main-navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .hex-container[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 80px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #112240;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #ccd6f6;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64ffda;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #64ffda;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: #64ffda;\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #64ffda;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #64ffda;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: 0px;\n  z-index: 11;\n  padding: 0px 50px;\n  width: 100%;\n  height: 100px;\n  background-color: rgba(10, 25, 47, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: var(--transition);\n  filter: none !important;\n  pointer-events: auto !important;\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n          user-select: auto !important;\n  padding: 0 50px;\n}\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n  .dropdown-toggle::after {\n  display: none;\n}\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%] {\n  fill: #0a192f;\n}\n#logo[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64ffda;\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .hex-container[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64ffda;\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0NBO0VBQ0MsWUFBQTtFQUNBLG1CRERlO0VDRWYsMEZEU1U7QUNSWDtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNELDBEQUFBO0FBQ0g7QUFFSTtFQUNELFlBQUE7RUFDQSxZQUFBO0FBQUg7QUFNRTtFQUNDLGdCQUFBO0FBSkg7QUFPRTtFQUNDLGdCQUFBO0FBTEg7QUFPRTtFQUNDLGlCQUFBO0FBTEg7QUFRQztFQUNDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZEQUFBO0FBTkY7QUFRRztFQUNDLHdCQUFBO0FBTko7QUFRRztFQUNDLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxpQkFBQTtBQU5KO0FBUUc7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVFHO0VBQ0MsYUFBQTtBQU5KO0FBT0k7RUFDQyxXQUFBO0FBTEw7QUFVQztFQUNDLDZEQUFBO0VBQ0EsVUFBQTtBQVJGO0FBVUM7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCRC9FYztFQ2dGZCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwRkQxRVM7RUMyRVQscURBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUFSRjtBQVNFO0VBQ0MsYUFBQTtFQUVBLDhCQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNEN0ZhO0FDc0ZoQjtBQVFHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQU9JO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0FBTEw7QUFNSztFQUNDLGNBQUE7RUFDQSxjRHRHVTtFQ3VHVixlQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQU1LO0VBQ0MscUJBQUE7RUFDQSxpQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQVVDO0VBQ0MsNEJBQUE7QUFSRjtBQVVDO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFSRjtBQVNFO0VBQ0MsY0RsSWE7QUMySGhCO0FBVUM7RUFDQyxjRHRJYztFQ3VJZCxlQUFBO0FBUkY7QUFVQztFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7QUFSRjtBQVVDO0VBQ0MsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFSRjtBQVNFOzs7RUFHQyxXQUFBO0VBQ0EsYUFBQTtBQVBIO0FBU0U7RUFDQyxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJEL0phO0VDZ0tiLHlCQUFBO0FBUEg7QUFRRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJEdEtZO0VDdUtaLDZHQUFBO0FBTko7QUFTRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJEL0tZO0VDZ0xaLDBHQUFBO0FBUEo7QUFVRztFQUNDLGtDQUFBO0FBUko7QUFTSTtFQUNDLE1BQUE7RUFDQSx3QkFBQTtFQUNBLDBHQUFBO0FBUEw7QUFVSTtFQUNDLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUFBO0FBUkw7QUFlQztFQUNDLGFBQUE7RUFFQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7S0FBQSxpQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsZUFBQTtBQWJGO0FBaUJBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtBQWREO0FBaUJBO0VBQ0MsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsNkRBQUE7QUFkRDtBQWlCQTtFQUVFO0lBQ0MsU0FBQTtJQUNBLHNCQUFBO0VBZkQ7QUFDRjtBQW1CQTtFQUNDO0lBQ0MsYUFBQTtFQWpCQTtBQUNGO0FBb0JBO0VBQ0M7O0lBRUMsYUFBQTtFQWxCQTtBQUNGO0FBcUJBO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEZEL1BVO0FDNE9YO0FBc0JBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFuQkQ7QUFzQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBbkJEO0FBc0JBO0VBQ0Msb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQW5CRDtBQXNCQTtFQUNDLDhCQUFBO0FBbkJEO0FBa0NBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQS9CRDtBQWtDQTtFQUNDLGFBQUE7QUEvQkQ7QUFrQ0E7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7QUEvQkQ7QUFrQ0E7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEvQkQ7QUFtQ0M7RUFDQyxtQkFBQTtBQWhDRjtBQW9DQTtFQUNDLGFBQUE7QUFqQ0Q7QUFvQ0E7RUFDQyxjQUFBO0FBakNEO0FBb0NBO0VBQ0MsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQWpDRDtBQW9DQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWpDRDtBQW9DQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtBQWpDRDtBQW9DQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWpDRDtBQW9DQTtFQUNDLDBEQUFBO0FBakNEO0FBb0NBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBakNEO0FBb0NBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBakNEO0FBb0NBO0VBQ0MsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7QUFqQ0QiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuLm1haW4tbmF2YmFyIHtcclxuXHRoZWlnaHQ6IDcwcHg7XHJcblx0YmFja2dyb3VuZDogJE5hdnk7XHJcblx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuXHQubG9nbyB7XHJcblx0XHRhIHtcclxuXHRcdCAgZGlzcGxheTogZmxleDtcclxuXHRcdCAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy8gVGhpcyB3aWxsIHZlcnRpY2FsbHkgY2VudGVyIHRoZSBsb2dvXHJcblx0XHQgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdCAgY29sb3I6ICM2NGZmZGE7XHJcblx0XHJcblx0XHQgIC5oZXgtY29udGFpbmVyIHtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuXHRcdCAgfVxyXG5cdFxyXG5cdFx0ICBpbWcge1xyXG5cdFx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHRcdGhlaWdodDogODBweDtcclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdFxyXG5cdC5tZW51LXVsIHtcclxuXHRcdGxpIHtcclxuXHRcdFx0bWFyZ2luOiAwcHggMTNweDtcclxuXHRcdH1cclxuXHRcdC8vIEZpcnN0IGFuZCBMYXN0IGxpIGhhcyBubyBtYXJnaW5cclxuXHRcdGxpOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRcdH1cclxuXHRcdGxpOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm1lbnUtcmVzcG9uc2l2ZSB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDBweDtcclxuXHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0cmlnaHQ6IDBweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XHJcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdFx0b3V0bGluZTogMHB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuXHRcdGxpIHtcclxuXHRcdFx0YSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jdi1idG4ge1xyXG5cdFx0XHRcdHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5sYW5ndWFnZS1jb250YWluZXIge1xyXG5cdFx0XHRcdHdpZHRoOiAyMDBweDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMThweDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMHB4O1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5hc2lkZS1zaG93IHtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcblx0XHRyaWdodDogMHB4O1xyXG5cdH1cclxuXHRhc2lkZSB7XHJcblx0XHR3aWR0aDogNzV2dztcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnk7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRyaWdodDogLTYyNXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xyXG5cdFx0Ym94LXNoYWRvdzogcmdiYSgyLCAxMiwgMjcsIDAuNykgLTEwcHggMHB4IDMwcHggLTE1cHg7XHJcblx0XHRwYWRkaW5nOiAyNXB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuXHRcdG5hdiB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG5cdFx0XHRvbCB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0bGkge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHggYXV0byAxMHB4O1xyXG5cdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJEdyZWVuO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGEge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuXHRcdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzcHggMjBweCAyMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuY3YtYnRuIHtcclxuXHRcdHBhZGRpbmc6IDdweCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5uYXYtbGluayB7XHJcblx0XHRwYWRkaW5nOiA1cHggMHB4O1xyXG5cdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRtYXJnaW46IDBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHRjb2xvcjogJEdyZWVuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQubmF2LW51bWJlciB7XHJcblx0XHRjb2xvcjogJEdyZWVuO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHQubmF2LXRleHQge1xyXG5cdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG5cdH1cclxuXHQubWVudS13cmFwcGVyIHtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHdpZHRoOiAzNnB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0ei1pbmRleDogMTE7XHJcblx0XHQuaGFtYnVyZ2VyLW1lbnUsXHJcblx0XHQuaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIsXHJcblx0XHQuaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcclxuXHRcdFx0d2lkdGg6IDM2cHg7XHJcblx0XHRcdGhlaWdodDogMS41cHg7XHJcblx0XHR9XHJcblx0XHQuaGFtYnVyZ2VyLW1lbnUge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcclxuXHRcdFx0YmFja2dyb3VuZDogJEdyZWVuO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xyXG5cdFx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRib3R0b206IDhweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAkR3JlZW47XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuXHRcdFx0XHRcdHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR0b3A6IDhweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAkR3JlZW47XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuXHRcdFx0XHRcdHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5hbmltYXRlIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG5cdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0dG9wOiAwcHg7XHJcblx0XHR6LWluZGV4OiAxMTtcclxuXHRcdHBhZGRpbmc6IDBweCA1MHB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMjUsIDQ3LCAwLjg1KTtcclxuXHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuXHRcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG5cdFx0ZmlsdGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xyXG5cdFx0dXNlci1zZWxlY3Q6IGF1dG8gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmc6IDAgNTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5vbi10b3Age1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0b3A6IDA7XHJcblx0ei1pbmRleDogOTtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcbn1cclxuXHJcbi5uYXYtc2hhZG93IHtcclxuXHRoZWlnaHQ6IDcwcHg7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDMwcHggLTEwcHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cdC5tYWluLW5hdmJhciB7XHJcblx0XHQubmF2LWxpbmsge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODI3cHgpIHtcclxuXHRuYXYgLm5hdiB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgyN3B4KSB7XHJcblx0Lm1lbnUtd3JhcHBlcixcclxuXHQubWVudS1yZXNwb25zaXZlIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59XHJcblxyXG4uZmxhZy10ZXh0IHtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW46IDAgMTBweDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDRweDtcclxuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3Ige1xyXG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjY2JkNWY1ICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogIzBhMTkyZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZSB7XHJcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNjYmQ1ZjUgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3I6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmU6YWZ0ZXIge1xyXG4vLyAgICAgY29udGVudDogXCIgXCI7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjNThlMmM0O1xyXG4vLyAgICAgd2lkdGg6IDYxJTtcclxuLy8gICAgIGhlaWdodDogMXB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbi8vIH1cclxuLmFycm93LWxhbmd1YWdlIHtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGZpbGw6ICM2NGZmZGE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LnNob3cge1xyXG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiAjY2NkNmY2ICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG5cdGxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2IoMiAxMiAyNyAvIDcwJSk7XHJcbn1cclxuXHJcbi5hcnJvdy1hY3RpdmUge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0d2lkdGg6IDI1cHg7XHJcblx0ZmlsbDogIzY0ZmZkYTtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlIHtcclxuXHQuYXJyb3ctYWN0aXZlIHtcclxuXHRcdHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcblx0fVxyXG59XHJcblxyXG4ubG9nbyBhIC5sb2dvLWNvbnRhaW5lciBzdmcgcG9seWdvbiB7XHJcblx0ZmlsbDogIzBhMTkyZjtcclxufVxyXG5cclxuI2xvZ28ge1xyXG5cdGNvbG9yOiAjNjRmZmRhO1xyXG59XHJcblxyXG4ubG9nbyBhIC5sb2dvLWNvbnRhaW5lciBzdmcge1xyXG5cdGZpbGw6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbnN2ZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGZpbGw6IGN1cnJlbnRjb2xvcjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyBhIC5sb2dvLWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2dvIGEge1xyXG5cdGNvbG9yOiAjNjRmZmRhO1xyXG5cdHdpZHRoOiA0MnB4O1xyXG5cdGhlaWdodDogNDJweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmxvZ28gYSAuaGV4LWNvbnRhaW5lciB7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxufVxyXG5cclxuc3ZnIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZmlsbDogY3VycmVudGNvbG9yO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvIGEge1xyXG5cdGNvbG9yOiAjNjRmZmRhO1xyXG5cdHdpZHRoOiA0MnB4O1xyXG5cdGhlaWdodDogNDJweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("animateMenu", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)("*", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 0,
            transform: "translateY(-50%)"
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.stagger)(50, [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
            opacity: 1,
            transform: "none"
          }))])])])])]
        }
      });
      /***/
    },

    /***/
    4748:
    /*!**********************************************************!*\
      !*** ./src/app/components/home/about/about.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* binding */
            _AboutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      function AboutComponent_p_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 21);
        }

        if (rf & 2) {
          var text_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      var _AboutComponent = /*#__PURE__*/function () {
        function _AboutComponent(analyticsService) {
          _classCallCheck(this, _AboutComponent);

          this.analyticsService = analyticsService;
        }

        _createClass(_AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AboutComponent;
      }();

      _AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || _AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AboutComponent,
        selectors: [["app-about"]],
        decls: 55,
        vars: 6,
        consts: [["id", "about", 1, "section", "about"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "about-title"], [1, "section-title"], [1, "n-section-title"], [1, "row"], [1, "col-12", "col-md-6", "mb-4", "mb-md-0"], [1, "about-description"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "skills-list"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "skill-element"], [1, "underline"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "mt-4", "mt-md-0", "text-center"], [1, "lbrXps"], [1, "wrapper"], ["data-gatsby-image-wrapper", "", 1, "gatsby-image-wrapper", "gatsby-image-wrapper-constrained", "img"], [2, "max-width", "500px", "display", "block"], ["alt", "", "role", "presentation", "aria-hidden", "true", "src", "data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E", 2, "max-width", "100%", "display", "block", "position", "static"], ["aria-hidden", "true", "data-placeholder-image", "", 2, "opacity", "0", "transition", "opacity 500ms linear 0s", "background-color", "rgb(232, 232, 232)", "position", "absolute", "inset", "0px", "object-fit", "cover"], ["width", "300", "height", "300", "data-main-image", "", "sizes", "(min-width: 500px) 500px, 100vw", "decoding", "async", "src", "assets/images/me/anas garbouj.PNG", "srcset", "\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/anas garbouj.PNG 125w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/anas garbouj.PNG 250w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/anas garbouj.PNG 500w\n\t\t\t\t\t\t\t\t\t\t", "alt", "Headshot", 2, "object-fit", "cover", "opacity", "1"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "01.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 1, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "MongoDB, Express, Angular, NodeJS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "MongoDB, Express, ReactJs, NodeJS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "RxJS, NgRx ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "HTML & (S)CSS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "JavaScript, TypeScript ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Symfony ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "PHP, Python ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " git/github");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Bootstrap, Material, Tailwind ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "WordPress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "picture");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "noscript");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "AboutMe.Title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 4, "AboutMe.Paragraphs"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
        styles: ["@charset \"UTF-8\";\n\n.about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n  width: 324px;\n  margin: auto;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  border-radius: 3px;\n  bottom: 290px;\n  left: 23px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  color: #8892b0;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n.lbrXps[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 300px;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: block;\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  background-color: #64ffda;\n}\n.wrapper[_ngcontent-%COMP%]::before {\n  top: 0px;\n  left: 0px;\n  background-color: #0a192f;\n  mix-blend-mode: screen;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  border: 2px solid #64ffda;\n  top: 14px;\n  left: 14px;\n  z-index: -1;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::before, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus {\n  outline: 0px;\n  transform: translate(-4px, -4px);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover::after, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus::after {\n  transform: translate(8px, 8px);\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   [data-main-image][_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateZ(0);\n  transition: opacity 0.25s linear;\n  will-change: opacity;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: 0;\n  max-width: none;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nimg[alt=\"\"][_ngcontent-%COMP%], img[_ngcontent-%COMP%]:not([alt]) {\n  filter: blur(5px);\n}\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], .gatsby-image-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  mix-blend-mode: multiply;\n  filter: grayscale(100%) contrast(1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.gatsby-image-wrapper-constrained[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%], .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus   .img[_ngcontent-%COMP%] {\n  filter: none;\n  mix-blend-mode: normal;\n}\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBREdDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0M7RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUZIO0FBS0U7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxGO0FBUUM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEZDaENTO0VEaUNULGNDekNjO0FEbUNoQjtBQU9FO0VBQ0MsbUJBQUE7QUFMSDtBQVFFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNDOUNhO0VEK0NiLGVBQUE7RUFDQSxpQkFBQTtBQU5IO0FBV0E7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBUkQ7QUFXQTtFQUNDLGtEQUFBO0VBQ0EsMERBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNqRWU7QUR5RGhCO0FBV0E7RUFDQyxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFSRDtBQVdBO0VBQ0MseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFSRDtBQVdBOztFQUVDLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7QUFSRDtBQVdBOztFQUVDLFlBQUE7RUFDQSxnQ0FBQTtBQVJEO0FBV0E7O0VBRUMsa0RBQUE7QUFSRDtBQVVBOztFQUVDLDhCQUFBO0FBUEQ7QUFTQTtFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFORDtBQVFBO0VBQ0MsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBTEQ7QUFRQTs7RUFFQyxpQkFBQTtBQUxEO0FBUUE7OztFQUdDLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFMRDtBQVFBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwREFBQTtBQUxEO0FBUUE7RUFDQyxxQkFBQTtBQUxEO0FBUUE7RUFDQyxnQkFBQTtBQUxEO0FBUUE7O0VBRUMsWUFBQTtFQUNBLHNCQUFBO0FBTEQ7QUFRQTtFQUNDO0lBQ0MsaUJBQUE7SUFDQSxlQUFBO0VBTEE7QUFDRjtBQVFBO0VBRUU7SUFDQyxZQUFBO0lBQ0EsYUFBQTtFQVBEO0VBU0E7SUFDQyxZQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBUEQ7QUFDRjtBQVdBO0VBRUU7SUFDQyxXQUFBO0VBVkQ7RUFZQztJQUNDLFlBQUE7SUFDQSxhQUFBO0VBVkY7RUFhQztJQUNDLGFBQUE7RUFYRjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLmFib3V0IC5hYm91dC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1heC13aWR0aDogNDgwcHg7XG59XG4uYWJvdXQgLmFib3V0LWltZy1jb250YWluZXIge1xuICB3aWR0aDogMzI0cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3R0b206IDI5MHB4O1xuICBsZWZ0OiAyM3B4O1xufVxuLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyIGltZyB7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYm91dCAuc2tpbGxzLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTQwcHgsIDIwMHB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5hYm91dCAuc2tpbGwtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgY29sb3I6ICM4ODkyYjA7XG59XG4uYWJvdXQgLnNraWxsLWVsZW1lbnQgc3BhbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uYWJvdXQgLnNraWxsLWVsZW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLilrlcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmxiclhwcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmxiclhwcyAud3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRmZmRhO1xufVxuXG4ud3JhcHBlcjo6YmVmb3JlIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbn1cblxuLmxiclhwcyAud3JhcHBlcjo6YWZ0ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjRmZmRhO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE0cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyOjpiZWZvcmUsXG4ubGJyWHBzIC53cmFwcGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cblxuLmxiclhwcyAud3JhcHBlcjpob3Zlcixcbi5sYnJYcHMgLndyYXBwZXI6Zm9jdXMge1xuICBvdXRsaW5lOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC00cHgpO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyOmhvdmVyLFxuLmxiclhwcyAud3JhcHBlcjpmb2N1cy12aXNpYmxlIHtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggLTE1cHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XG59XG5cbi5sYnJYcHMgLndyYXBwZXI6aG92ZXI6OmFmdGVyLFxuLmxiclhwcyAud3JhcHBlcjpmb2N1czo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDhweCk7XG59XG5cbi5nYXRzYnktaW1hZ2Utd3JhcHBlciBbZGF0YS1tYWluLWltYWdlXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBsaW5lYXI7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIgaW1nIHtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaW1nW2FsdD1cIlwiXSxcbmltZzpub3QoW2FsdF0pIHtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbmltZyxcbnN2Zyxcbi5nYXRzYnktaW1hZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sYnJYcHMgLndyYXBwZXIgLmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGNvbnRyYXN0KDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xufVxuXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXItY29uc3RyYWluZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5nYXRzYnktaW1hZ2Utd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sYnJYcHMgLndyYXBwZXI6aG92ZXIgLmltZyxcbi5sYnJYcHMgLndyYXBwZXI6Zm9jdXMgLmltZyB7XG4gIGZpbHRlcjogbm9uZTtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5hYm91dC1pbWctY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYWJvdXQgLmFib3V0LWltZy1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuYWJvdXQgLmFib3V0LWltZy1jb250YWluZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvdHRvbTogMTkwcHg7XG4gICAgbGVmdDogNzRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    616:
    /*!************************************************************!*\
      !*** ./src/app/components/home/banner/banner.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BannerComponent": function BannerComponent() {
          return (
            /* binding */
            _BannerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      7175);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _BannerComponent = /*#__PURE__*/function () {
        function _BannerComponent(analyticsService) {
          _classCallCheck(this, _BannerComponent);

          this.analyticsService = analyticsService;
        }

        _createClass(_BannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BannerComponent;
      }();

      _BannerComponent.ɵfac = function BannerComponent_Factory(t) {
        return new (t || _BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _BannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BannerComponent,
        selectors: [["app-banner"]],
        decls: 19,
        vars: 7,
        consts: [[1, "section", "banner"], [1, "container"], [1, "section-box-banner"], [1, "content"], [1, "banner-title"], [1, "banner-description"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner"], ["href", "mailto:anaskping@gmail.com", "target", "_blanck", 1, "main-btn", 3, "click"]],
        template: function BannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hello! My name is");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Mohamed Anas Guerbouj.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "I build digital platforms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_16_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "banner", "email");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bannerTrigger", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 3, "Banner.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 5, "Banner.ActionBtn"), " ");
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
        styles: [".banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  background: linear-gradient(120deg, #50efb5, #8ff4ca, #7e57c2, #0087f2, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);\n  color: #fff;\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0VBO0VBQ0MsaUJBQUE7QUFBRDtBQUVDO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFBRjtBQUVFO0VBQ0MsbUJBQUE7RUFDQSxzQkFBQTtBQUFIO0FBRUc7RUFDQyxnQkFBQTtBQUFKO0FBR0c7RUFDQyxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRkRUTztBQ1FYO0FBSUc7O0VBRUMsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUpEbkJPO0VDb0JQLG9IQUFBO0VBWUEsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFiSjtBQWdCRztFQUNDLGNEM0NZO0FDNkJoQjtBQWlCRztFQUNDLGNEakRZO0FDa0NoQjtBQWtCRztFQUNDLG1CQUFBO0FBaEJKO0FBbUJHO0VBQ0MsZ0JBQUE7QUFqQko7QUFvQkc7RUFDQyxZQUFBO0FBbEJKIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uYmFubmVyIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHJcblx0LmNvbnRhaW5lciB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZTtcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblxyXG5cdFx0LnNlY3Rpb24tYm94LWJhbm5lciB7XHJcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG5cdFx0XHQuY29udGVudCB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogOThweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDEge1xyXG5cdFx0XHRcdGNvbG9yOiAjNjRmZmRhO1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDIwcHggM3B4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGgyLFxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDgwcHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICRNYWluRm9udDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcblx0XHRcdFx0XHQxMjBkZWcsXHJcblx0XHRcdFx0XHQjNTBlZmI1LFxyXG5cdFx0XHRcdFx0IzhmZjRjYSxcclxuXHRcdFx0XHRcdCM3ZTU3YzIsXHJcblx0XHRcdFx0XHQjMDA4N2YyLFxyXG5cdFx0XHRcdFx0IzI2YzZkYSxcclxuXHRcdFx0XHRcdCM0M2EwNDcsXHJcblx0XHRcdFx0XHQjZWVmZjQxLFxyXG5cdFx0XHRcdFx0I2Y5YTgyNSxcclxuXHRcdFx0XHRcdCNmZjU3MjJcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuXHRcdFx0XHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDIge1xyXG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDMge1xyXG5cdFx0XHRcdGNvbG9yOiAkU2xhdGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5iYW5uZXItZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDcwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHAge1xyXG5cdFx0XHRcdG1heC13aWR0aDogODAwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5kaXYtYnRuLWJhbm5lciB7XHJcblx0XHRcdFx0aGVpZ2h0OiA0M3B4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('bannerTrigger', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(":enter", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)("*", [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            opacity: 0,
            transform: "translateX(-50px)"
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0, _angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            opacity: 1,
            transform: "none"
          }))])])])])]
        }
      });
      /***/
    },

    /***/
    7237:
    /*!**********************************************************!*\
      !*** ./src/app/components/home/blogs/blogs.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogComponent": function BlogComponent() {
          return (
            /* binding */
            _BlogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/blog/blog.service */
      2036);
      /* harmony import */


      var src_app_services_comment_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/comment/comment.service */
      1511);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _c0 = ["commentInput"];

      function BlogComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sorry, you didn't put your name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BlogComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sorry, you didn't put the content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BlogComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Thank you for your comment. Just wait for admin to accept it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BlogComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "article", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_11_Template_article_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var blog_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.selectBlog(blog_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "footer", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var blog_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](blog_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 4, blog_r5.createdAt, "yyyy-MM-dd"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](11, 7, blog_r5.content, 0, 100), "... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Comments: ", blog_r5.comments.length, " ");
        }
      }

      function BlogComponent_div_12_div_12_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comment_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r12 == null ? null : comment_r12.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Posted by: ", comment_r12 == null ? null : comment_r12.name, "");
        }
      }

      function BlogComponent_div_12_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BlogComponent_div_12_div_12_li_4_Template, 5, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function BlogComponent_div_12_div_12_Template_form_submit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r13.addComment(ctx_r13.selectedBlog._id, _r11.value, _r10.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Post Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.comments);
        }
      }

      function BlogComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_12_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.clearSelectedBlog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_12_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_12_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.clearSelectedBlog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BlogComponent_div_12_div_12_Template, 12, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.selectedBlog.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 4, ctx_r4.selectedBlog.createdAt, "yyyy-MM-dd"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.selectedBlog.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.comments);
        }
      }

      var _BlogComponent = /*#__PURE__*/function () {
        // New property to track comment submission state
        function _BlogComponent(blogService, commentService) {
          _classCallCheck(this, _BlogComponent);

          this.blogService = blogService;
          this.commentService = commentService;
          this.selectedBlog = null;
          this.isAddingComment = false;
          this.showNotification = false;
          this.missingName = false;
          this.missingContent = false;
        }

        _createClass(_BlogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.blogService.getAcceptedBlogs().subscribe(function (blogs) {
              _this3.blogs = blogs;
            }, function (error) {
              console.error('Error fetching blogs:', error);
            });
          }
        }, {
          key: "selectBlog",
          value: function selectBlog(blog) {
            var _this4 = this;

            this.selectedBlog = blog;
            this.commentService.getCommentsForBlog(blog._id).subscribe(function (response) {
              _this4.comments = response.data.filter(function (comment) {
                return comment.status === 'accepted';
              });
            }, function (error) {
              console.error('Error fetching comments:', error);
            });
          }
        }, {
          key: "clearSelectedBlog",
          value: function clearSelectedBlog() {
            console.log('Clearing selected blog');
            this.selectedBlog = null;
          }
        }, {
          key: "addComment",
          value: function addComment(blogId, commentText, commenterName) {
            var _this5 = this;

            this.isAddingComment = true;
            this.missingName = false;
            this.missingContent = false; // Check if name or content is missing

            if (!commenterName.trim()) {
              this.missingName = true;
              return;
            }

            if (!commentText.trim()) {
              this.missingContent = true;
              return;
            }

            this.commentService.createComment(commentText, commenterName, blogId).subscribe(function (newComment) {
              _this5.isAddingComment = false;
              _this5.commentInput.nativeElement.value = '';
              _this5.showNotification = true;
              setTimeout(function () {
                return _this5.showNotification = false;
              }, 3000); // Hide notification after 3 seconds
            }, function (error) {
              console.error('Error adding comment:', error);
              _this5.isAddingComment = false;
            });
          }
        }]);

        return _BlogComponent;
      }();

      _BlogComponent.ɵfac = function BlogComponent_Factory(t) {
        return new (t || _BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_0__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_comment_comment_service__WEBPACK_IMPORTED_MODULE_1__.CommentService));
      };

      _BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BlogComponent,
        selectors: [["app-blogs"]],
        viewQuery: function BlogComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.commentInput = _t.first);
          }
        },
        decls: 13,
        vars: 5,
        consts: [["class", "notification-popup", 4, "ngIf"], [1, "section"], [1, "blogs-container"], [1, "section-box"], [1, "section-title"], [1, "n-section-title"], [4, "ngFor", "ngForOf"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "notification-popup"], [1, "blog-post", 3, "click"], [1, "blog-post-header"], [1, "blog-post-meta"], [1, "date"], [1, "blog-post-content"], [1, "blog-post-footer"], [1, "comments-count"], [1, "modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "close", 3, "click"], [1, "blog-post-content-full"], ["class", "blog-post-comments", 4, "ngIf"], [1, "blog-post-comments"], [1, "comment-form", 3, "submit"], ["type", "text", "placeholder", "Your name...", "required", ""], ["commenterName", ""], ["type", "text", "placeholder", "Add a comment...", "required", ""], ["commentInput", ""], ["type", "submit"]],
        template: function BlogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlogComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BlogComponent_div_1_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BlogComponent_div_2_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "05.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " blogs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BlogComponent_div_11_Template, 15, 11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BlogComponent_div_12_Template, 13, 7, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingName);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.missingContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showNotification);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.blogs);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedBlog);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
        styles: ["@charset \"UTF-8\";\n\n.blogs-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.blog-post[_ngcontent-%COMP%] {\n  background: #112240;\n  border: 1px solid #303C55;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin: 20px 0;\n  padding: 20px;\n  width: 100%;\n  max-width: 800px;\n  box-sizing: border-box;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #303C55;\n  padding-bottom: 10px;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  font-size: 1.5em;\n  margin: 0 0 10px;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-header[_ngcontent-%COMP%]   .blog-post-meta[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  font-size: 0.9em;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-header[_ngcontent-%COMP%]   .blog-post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-header[_ngcontent-%COMP%]   .blog-post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  content: \"\u2022\";\n  margin: 0 7px;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-header[_ngcontent-%COMP%]   .blog-post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before {\n  content: none;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-content[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  font-size: 1em;\n  line-height: 1.6;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-footer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding-top: 10px;\n  border-top: 1px solid #303C55;\n  color: #8892b0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n}\n.blog-post[_ngcontent-%COMP%]   .blog-post-footer[_ngcontent-%COMP%]   .comments-count[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #112240;\n  color: #e6f1ff;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #303C55;\n  border-radius: 10px;\n  max-width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n.blog-post-content[_ngcontent-%COMP%], .blog-post-content-full[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: #8892b0;\n  font-size: 28px;\n  padding: 5px;\n  margin: -10px -10px 10px 0;\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover, .modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  color: #e6f1ff;\n  text-decoration: none;\n}\n.blog-post-comments[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: #303C55;\n  border-radius: 5px;\n  padding: 15px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.blog-post-comments[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin-bottom: 10px;\n}\n.blog-post-comments[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.blog-post-comments[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #0a192f;\n  color: #a8b2d1;\n  padding: 10px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n.blog-post-comments[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.blog-post-comments[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e6f1ff;\n  margin: 0;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.blog-post-comments[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-size: 0.8em;\n  color: #a8b2d1;\n}\n.comment-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 10px;\n  gap: 10px;\n  margin-top: 20px;\n}\n.comment-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .comment-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #a8b2d1;\n  border-radius: 4px;\n  background-color: #303C55;\n  color: #e6f1ff;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n}\n.comment-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-moz-placeholder, .comment-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #8892b0;\n}\n.comment-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder, .comment-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #8892b0;\n}\n.comment-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, .comment-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #64ffda;\n  box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.07);\n}\n.comment-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #64ffda;\n  color: #0a192f;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1em;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  transition: background-color 0.3s ease;\n}\n.comment-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #31ffce;\n}\n.comment-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:disabled {\n  background-color: #a8b2d1;\n  cursor: not-allowed;\n}\n.notification-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #64ffda;\n  color: #0a192f;\n  padding: 10px 20px;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  z-index: 1050;\n  animation: slideIn 0.5s ease-out;\n}\n.notification-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n}\n@keyframes slideIn {\n  0% {\n    transform: translateX(-50%) translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(-50%) translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .blog-post[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 15px auto;\n    width: calc(100% - 30px);\n  }\n\n  .blog-post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .blog-post-meta[_ngcontent-%COMP%], .blog-post-content[_ngcontent-%COMP%], .blog-post-footer[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n@media (max-width: 480px) {\n  .blog-post[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: 20px auto;\n    padding: 10px;\n  }\n\n  .blog-post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n\n  .blog-post-meta[_ngcontent-%COMP%], .blog-post-content[_ngcontent-%COMP%], .blog-post-footer[_ngcontent-%COMP%] {\n    font-size: 0.85em;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    width: 320px;\n    padding: 20px;\n    margin: 10% auto;\n    border-radius: 10px;\n    max-height: 90vh;\n    overflow-y: auto;\n    box-sizing: border-box;\n  }\n\n  .blog-post-content[_ngcontent-%COMP%], .blog-post-content-full[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n  }\n\n  .modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 5px;\n    margin: -10px -10px 10px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDSjtBQUNBO0VBQ0ksbUJDUFk7RURRWix5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0k7RUFDSSxnQ0FBQTtFQUNOLG9CQUFBO0FBQ0Y7QUFDTTtFQUNFLGNDcEJRO0VEcUJSLG1KQ2pCRztFRGtCSCxnQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFTTtFQUNFLGNDOUJRO0VEK0JSLG1KQ3hCRztFRHlCSCxnQkFBQTtBQUFSO0FBRVE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQVY7QUFFVTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQVo7QUFHVTtFQUNFLGFBQUE7QUFEWjtBQU9JO0VBQ0ksY0NoRFE7RURpRFIsbUpDN0NHO0VEOENILGNBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUUk7RUFDSSxnQkFBQTtFQUNOLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQzdEYztFRDhEZCxtSkN2RFM7QURpRFg7QUFRTTtFQUNFLGtCQUFBO0FBTlI7QUFVRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FBUEo7QUFVRTtFQUNFLHlCQ3RGWTtFRHVGWixjQ2xGWTtFRG1GWixZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBUEo7QUFTRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFOSjtBQVVFO0VBQ0UsY0N0R1k7RUR1R1osZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFQSjtBQVVFOztFQUVFLGNDNUdZO0VENkdaLHFCQUFBO0FBUEo7QUFTRTtFQUNFLGdCQUFBO0VBQ0EseUJDckhZO0VEc0haLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FBTko7QUFRSTtFQUNFLGNDdEhVO0VEdUhWLG1CQUFBO0FBTk47QUFTSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQVBOO0FBU007RUFDRSx5QkN0SVE7RUR1SVIsY0NuSVE7RURvSVIsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVNRO0VBQ0UsZ0JBQUE7QUFQVjtBQVVRO0VBQ0UsY0MzSU07RUQ0SU4sU0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFSVjtBQVdRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDdkpNO0FEOEloQjtBQWNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtBQVhKO0FBYUk7O0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkMzS1U7RUQ0S1YsY0N4S1U7RUR5S1YsbUpDcktLO0FEMEpYO0FBYU07RUFDRSxjQy9LUTtBRHFLaEI7QUFTTTs7RUFDRSxjQy9LUTtBRHFLaEI7QUFhTTs7RUFDRSxhQUFBO0VBQ0EscUJDaExRO0VEaUxSLCtDQUFBO0FBVlI7QUFjSTtFQUNFLGtCQUFBO0VBQ0EseUJDdkxVO0VEd0xWLGNDL0xVO0VEZ01WLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUpDMUxLO0VEMkxMLHNDQUFBO0FBWk47QUFjTTtFQUNFLHlCQUFBO0FBWlI7QUFlTTtFQUNFLHlCQ3hNUTtFRHlNUixtQkFBQTtBQWJSO0FBaUJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkMvTVk7RURnTlosY0N2Tlk7RUR3Tlosa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBZEo7QUFnQkk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtSkN2Tks7QUR5TVg7QUFrQkU7RUFDRTtJQUNFLDRDQUFBO0lBQ0EsVUFBQTtFQWZKO0VBaUJFO0lBQ0UseUNBQUE7SUFDQSxVQUFBO0VBZko7QUFDRjtBQWtCRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esd0JBQUE7RUFoQko7O0VBbUJFO0lBQ0UsZ0JBQUE7RUFoQko7O0VBbUJFOzs7SUFHRSxnQkFBQTtFQWhCSjtBQUNGO0FBbUJFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VBakJKOztFQW9CRTtJQUNFLGdCQUFBO0VBakJKOztFQW9CRTs7O0lBR0UsaUJBQUE7RUFqQko7O0VBcUJFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBRUEsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VBbkJOOztFQXFCSTtJQUNFLHFCQUFBO0lBQ0EseUJBQUE7RUFsQk47O0VBdUJJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQXBCTjtBQUNGIiwiZmlsZSI6ImJsb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLmJsb2dzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYmxvZy1wb3N0IHtcbiAgYmFja2dyb3VuZDogIzExMjI0MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMwM0M1NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmxvZy1wb3N0IC5ibG9nLXBvc3QtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMDNDNTU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJsb2ctcG9zdCAuYmxvZy1wb3N0LWhlYWRlciBoMiB7XG4gIGNvbG9yOiAjZTZmMWZmO1xuICBmb250LWZhbWlseTogQ2FsaWJyZSwgU2FuIEZyYW5jaXNjbywgU0YgUHJvIFRleHQsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG4uYmxvZy1wb3N0IC5ibG9nLXBvc3QtaGVhZGVyIC5ibG9nLXBvc3QtbWV0YSB7XG4gIGNvbG9yOiAjODg5MmIwO1xuICBmb250LWZhbWlseTogQ2FsaWJyZSwgU2FuIEZyYW5jaXNjbywgU0YgUHJvIFRleHQsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4uYmxvZy1wb3N0IC5ibG9nLXBvc3QtaGVhZGVyIC5ibG9nLXBvc3QtbWV0YSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uYmxvZy1wb3N0IC5ibG9nLXBvc3QtaGVhZGVyIC5ibG9nLXBvc3QtbWV0YSBzcGFuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIG1hcmdpbjogMCA3cHg7XG59XG4uYmxvZy1wb3N0IC5ibG9nLXBvc3QtaGVhZGVyIC5ibG9nLXBvc3QtbWV0YSBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG4uYmxvZy1wb3N0IC5ibG9nLXBvc3QtY29udGVudCB7XG4gIGNvbG9yOiAjZTZmMWZmO1xuICBmb250LWZhbWlseTogQ2FsaWJyZSwgU2FuIEZyYW5jaXNjbywgU0YgUHJvIFRleHQsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLmJsb2ctcG9zdCAuYmxvZy1wb3N0LWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzMwM0M1NTtcbiAgY29sb3I6ICM4ODkyYjA7XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJlLCBTYW4gRnJhbmNpc2NvLCBTRiBQcm8gVGV4dCwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIFNlZ29lIFVJLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5ibG9nLXBvc3QgLmJsb2ctcG9zdC1mb290ZXIgLmNvbW1lbnRzLWNvdW50IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubW9kYWwge1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjI0MDtcbiAgY29sb3I6ICNlNmYxZmY7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMwM0M1NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ibG9nLXBvc3QtY29udGVudCwgLmJsb2ctcG9zdC1jb250ZW50LWZ1bGwge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5tb2RhbCAuY2xvc2Uge1xuICBjb2xvcjogIzg4OTJiMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogLTEwcHggLTEwcHggMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbCAuY2xvc2U6aG92ZXIsXG4ubW9kYWwgLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICNlNmYxZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsb2ctcG9zdC1jb21tZW50cyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDNDNTU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5ibG9nLXBvc3QtY29tbWVudHMgaDMge1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ibG9nLXBvc3QtY29tbWVudHMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmJsb2ctcG9zdC1jb21tZW50cyB1bCBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmY7XG4gIGNvbG9yOiAjYThiMmQxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYmxvZy1wb3N0LWNvbW1lbnRzIHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmJsb2ctcG9zdC1jb21tZW50cyB1bCBsaSBwIHtcbiAgY29sb3I6ICNlNmYxZmY7XG4gIG1hcmdpbjogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuLmJsb2ctcG9zdC1jb21tZW50cyB1bCBsaSBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjYThiMmQxO1xufVxuXG4uY29tbWVudC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbW1lbnQtZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYThiMmQxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDNDNTU7XG4gIGNvbG9yOiAjZTZmMWZmO1xuICBmb250LWZhbWlseTogQ2FsaWJyZSwgU2FuIEZyYW5jaXNjbywgU0YgUHJvIFRleHQsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4uY29tbWVudC1mb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyLFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg4OTJiMDtcbn1cbi5jb21tZW50LWZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICM2NGZmZGE7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDEwMCwgMjU1LCAyMTgsIDAuMDcpO1xufVxuLmNvbW1lbnQtZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRmZmRhO1xuICBjb2xvcjogIzBhMTkyZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJlLCBTYW4gRnJhbmNpc2NvLCBTRiBQcm8gVGV4dCwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIFNlZ29lIFVJLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG4uY29tbWVudC1mb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFmZmNlO1xufVxuLmNvbW1lbnQtZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YjJkMTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm5vdGlmaWNhdGlvbi1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0ZmZkYTtcbiAgY29sb3I6ICMwYTE5MmY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxMDUwO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC41cyBlYXNlLW91dDtcbn1cbi5ub3RpZmljYXRpb24tcG9wdXAgcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQ2FsaWJyZSwgU2FuIEZyYW5jaXNjbywgU0YgUHJvIFRleHQsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmxvZy1wb3N0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgfVxuXG4gIC5ibG9nLXBvc3QtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG5cbiAgLmJsb2ctcG9zdC1tZXRhLFxuLmJsb2ctcG9zdC1jb250ZW50LFxuLmJsb2ctcG9zdC1mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYmxvZy1wb3N0IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5ibG9nLXBvc3QtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICB9XG5cbiAgLmJsb2ctcG9zdC1tZXRhLFxuLmJsb2ctcG9zdC1jb250ZW50LFxuLmJsb2ctcG9zdC1mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5ibG9nLXBvc3QtY29udGVudCwgLmJsb2ctcG9zdC1jb250ZW50LWZ1bGwge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgLm1vZGFsIC5jbG9zZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IC0xMHB4IC0xMHB4IDEwcHggMDtcbiAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    5541:
    /*!**************************************************************!*\
      !*** ./src/app/components/home/contact/contact.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* binding */
            _ContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _ContactComponent = /*#__PURE__*/function () {
        function _ContactComponent(analyticsService) {
          _classCallCheck(this, _ContactComponent);

          this.analyticsService = analyticsService;
        }

        _createClass(_ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContactComponent;
      }();

      _ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || _ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ContactComponent,
        selectors: [["app-contact"]],
        decls: 17,
        vars: 12,
        consts: [["id", "contact", 1, "section", "contact"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["href", "mailto:anaskping@gmail.com", "target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "click"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_14_listener() {
              return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "contact", "email");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" 06. ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Contact.Pretitle"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Contact.Title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Contact.Content"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, "Contact.Btn"), " ");
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
        styles: [".contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #64ffda;\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNFQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQURSO0FBSUk7RUFFSSxrQkFBQTtFQUlBLGFBQUE7RUFJQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0R4QlE7RUN5QlIsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFIUjtBQUtJO0VBQ0ksa0JBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0R6Q1E7RUMwQ1IsZUFBQTtFQUNBLDBGRHZDRztFQ3dDSCxtQkFBQTtFQUNBLG1CQUFBO0VBSUEsdUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBUUE7RUFFSTtJQUNJLGFBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtFQU5OO0VBUU07SUFDSSxtQkFBQTtJQUNBLHNCQUFBO0VBTlY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5jb250YWN0e1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcblxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtdGl0bGV7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXByZS10aXRsZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICRHcmVlbjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICBcclxuICAgIC5jb250YWN0e1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcblxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    8263:
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _general_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../general/header/header.component */
      5298);
      /* harmony import */


      var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./banner/banner.component */
      616);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about/about.component */
      4748);
      /* harmony import */


      var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./jobs/jobs.component */
      6228);
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projects/projects.component */
      4143);
      /* harmony import */


      var _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./more-projects/more-projects.component */
      9162);
      /* harmony import */


      var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./testimonial/testimonial.component */
      635);
      /* harmony import */


      var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./blogs/blogs.component */
      7237);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./contact/contact.component */
      5541);
      /* harmony import */


      var _general_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../general/footer/footer.component */
      4321);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(analyticsService) {
          _classCallCheck(this, _HomeComponent);

          this.analyticsService = analyticsService;
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio");
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 12,
        vars: 0,
        consts: [[1, "nav"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "app-jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "app-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "app-more-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "app-testimonial");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "app-blogs");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-footer");
          }
        },
        directives: [_general_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__.JobsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.projectsComponent, _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__.MoreprojectsComponent, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_7__.TestimonialComponent, _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _general_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent],
        styles: [".nav[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQUFKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2XHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    3783:
    /*!************************************************!*\
      !*** ./src/app/components/home/home.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory3
          );
        },

        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      8263);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about/about.component */
      4748);
      /* harmony import */


      var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./banner/banner.component */
      616);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact/contact.component */
      5541);
      /* harmony import */


      var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./testimonial/testimonial.component */
      635);
      /* harmony import */


      var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./jobs/jobs.component */
      6228);
      /* harmony import */


      var _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./more-projects/more-projects.component */
      9162);
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./projects/projects.component */
      4143);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      7844);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      9476);
      /* harmony import */


      var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./blogs/blogs.component */
      7237);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _general_general_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../general/general.module */
      854);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);

      function _HttpLoaderFactory3(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
      }

      var _HomeModule = /*#__PURE__*/_createClass(function _HomeModule() {
        _classCallCheck(this, _HomeModule);
      });

      _HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || _HomeModule)();
      };

      _HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _HomeModule
      });
      _HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_general_general_module__WEBPACK_IMPORTED_MODULE_9__.GeneralModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
            useFactory: _HttpLoaderFactory3,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__.JobsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.projectsComponent, _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__.MoreprojectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__.TestimonialComponent, _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent],
          imports: [_general_general_module__WEBPACK_IMPORTED_MODULE_9__.GeneralModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule]
        });
      })();
      /***/

    },

    /***/
    6228:
    /*!********************************************************!*\
      !*** ./src/app/components/home/jobs/jobs.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobsComponent": function JobsComponent() {
          return (
            /* binding */
            _JobsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      1288);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      function JobsComponent_li_12_ng_template_3_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var jobDescriptionParagraph_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function JobsComponent_li_12_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, JobsComponent_li_12_ng_template_3_p_6_Template, 2, 3, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
        }

        if (rf & 2) {
          var job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", job_r2.Title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@ ", job_r2.Tab, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Date);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r2.Description);
        }
      }

      function JobsComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, JobsComponent_li_12_ng_template_3_Template, 8, 4, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", job_r2.Tab)("ngbNavItem", i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Tab);
        }
      }

      var _JobsComponent = /*#__PURE__*/function () {
        function _JobsComponent(analyticsService) {
          _classCallCheck(this, _JobsComponent);

          this.analyticsService = analyticsService;
          this.active = 0;
        }

        _createClass(_JobsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _JobsComponent;
      }();

      _JobsComponent.ɵfac = function JobsComponent_Factory(t) {
        return new (t || _JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _JobsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _JobsComponent,
        selectors: [["app-jobs"]],
        decls: 15,
        vars: 8,
        consts: [["id", "jobs", 1, "section", "jobs"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "jobs-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "jobs-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "title", "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "title", "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "title-tab-content"], [1, "company-tab-content"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"]],
        template: function JobsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "02.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function JobsComponent_Template_ul_activeIdChange_10_listener($event) {
              return ctx.active = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JobsComponent_li_12_Template, 4, 3, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "Experience.Title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Experience.Jobs"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        styles: ["@charset \"UTF-8\";\n\n  .jobs .jobs-tabs {\n  display: flex;\n}\n  .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .jobs-tabs ul {\n  display: block;\n  width: 185px;\n  border: none;\n}\n  .jobs .jobs-tabs a.active {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a:hover {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n}\n  .jobs .jobs-tabs li {\n  border-left: 2px solid #303C55;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: #303c55;\n}\n.jobs[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n    padding-left: 30px;\n  }\n\n    .jobs-tabs {\n    display: block !important;\n  }\n    .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLDhFQUFBO0FERUE7RUFDQyxhQUFBO0FBQ0Q7QUFDQztFQUNDLGlCQUFBO0FBQ0Y7QUFFQztFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0M7RUFDQyxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUM7RUFDQyxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0M7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsMERBQUE7RUFDQSxlQUFBO0VBSUEsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEsMERBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEZDM0NTO0VENENULGVBQUE7RUFDQSxjQ3JEYztBRGtEaEI7QUFNQztFQUNDLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0FBSkY7QUFRQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQUxEO0FBT0M7RUFDQyxjQ25FYztFRG9FZCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxGO0FBT0U7RUFDQyxjQ3ZFYTtBRGtFaEI7QUFTQztFQUNDLDBGQ3hFUztFRHlFVCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNDdEZjO0VEdUZkLG1CQUFBO0FBUEY7QUFVQztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFSRjtBQVVFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNDakdhO0FEeUZoQjtBQWFBO0VBRUU7SUFDQyxZQUFBO0lBQ0Esa0JBQUE7RUFYRDs7RUFjRDtJQUNDLHlCQUFBO0VBWEE7RUFhQTtJQUNDLDJCQUFBO0VBWEQ7RUFjQTtJQUNDLGNBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBWkQ7QUFDRiIsImZpbGUiOiJqb2JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMgLnRhYi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDM4cHg7XG59XG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTg1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjo6bmctZGVlcCAuam9icyAuam9icy10YWJzIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjI0MCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzY0ZmZkYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbjo6bmctZGVlcCAuam9icyAuam9icy10YWJzIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjQwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjRmZmRhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nOiAwIDIwcHggMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtZmFtaWx5OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzg4OTJiMDtcbn1cbjo6bmctZGVlcCAuam9icyAuam9icy10YWJzIGxpIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMzAzQzU1O1xuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMzAzYzU1O1xufVxuXG4uam9icyB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5qb2JzIC50aXRsZS10YWItY29udGVudCB7XG4gIGNvbG9yOiAjY2NkNmY2O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5qb2JzIC50aXRsZS10YWItY29udGVudCAuY29tcGFueS10YWItY29udGVudCB7XG4gIGNvbG9yOiAjNjRmZmRhO1xufVxuLmpvYnMgLmpvYi10aW1lIHtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgLW1vei1sZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgY29sb3I6ICNhOGIyZDE7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uam9icyAuam9iLWRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5qb2JzIC5qb2ItZGVzY3JpcHRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLilrlcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogIzY0ZmZkYTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5qb2JzIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLmpvYnMtdGFicyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLmpvYnMtdGFicyAudGFiLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLmpvYnMtdGFicyB1bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    9162:
    /*!**************************************************************************!*\
      !*** ./src/app/components/home/more-projects/more-projects.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MoreprojectsComponent": function MoreprojectsComponent() {
          return (
            /* binding */
            _MoreprojectsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      function MoreprojectsComponent_div_9_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var technology_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r4);
        }
      }

      function MoreprojectsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_div_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var project_r1 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.redirect(project_r1["demoLink"], $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.analyticsService.sendAnalyticEvent("click_pokemonlist_external_link", "projects", "click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.analyticsService.sendAnalyticEvent("click_pokemonlist_github", "projects", "click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoreprojectsComponent_div_9_li_16_Template, 3, 1, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.Title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
        }
      }

      var _MoreprojectsComponent = /*#__PURE__*/function () {
        function _MoreprojectsComponent(router, analyticsService) {
          _classCallCheck(this, _MoreprojectsComponent);

          this.router = router;
          this.analyticsService = analyticsService;
        }

        _createClass(_MoreprojectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }, {
          key: "redirect",
          value: function redirect(route, event) {
            var id = event.target.id;

            if (id == "demoLink" || id == "ghLink") {
              return;
            }

            window.open(route, "_blank");
          }
        }]);

        return _MoreprojectsComponent;
      }();

      _MoreprojectsComponent.ɵfac = function MoreprojectsComponent_Factory(t) {
        return new (t || _MoreprojectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _MoreprojectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MoreprojectsComponent,
        selectors: [["app-more-projects"]],
        decls: 11,
        vars: 6,
        consts: [[1, "section", "more-projects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "mt-5"], [1, "row", "p-0"], ["class", "col-12 col-md-6 col-lg-6 col-xl-4 project-col", "data-aos", "fade-up", "data-aos-duration", "1000", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "project-col", 3, "click"], [1, "more-project-box"], [1, "row", "w-100", "text-left", "m-0", "p-0"], [1, "col-6", "p-0"], ["src", "assets/images/folder.svg", "width", "40"], [1, "col-6", "d-flex", "p-0", "justify-content-end"], ["target", "_blank", 2, "color", "inherit", 3, "href", "click"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"], [1, "other-project-title", "mt-4"], [1, "other-project-description"], [1, "more-projects-skills"], [4, "ngFor", "ngForOf"], [1, "underline"]],
        template: function MoreprojectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MoreprojectsComponent_div_9_Template, 17, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "OtherProjects.Title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "OtherProjects.Projects"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        styles: [".more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover, .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #64ffda;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #ccd6f6;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n@media (max-width: 1300px) {\n  .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsIm1vcmUtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNHQztFQUNDLGFBQUE7RUFDQSxhQUFBO0FBREY7QUFHRTtFQUNDLGtEQUFBO0VBRUEsMERBQUE7RUFJQSxhQUFBO0VBSUEsOEJBQUE7RUFJQSxtQkFBQTtFQUdBLHNCQUFBO0VBSUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsMERBQUE7RUFDQSx5QkRqQ2E7RUNrQ2IsZUFBQTtBQURIO0FBR0c7RUFHQywyQkFBQTtBQURKO0FBR0c7RUFFQyxrREFBQTtBQUZKO0FBS0c7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNEM0NZO0FDd0NoQjtBQU1HO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0RuRFk7QUMrQ2hCO0FBT0c7RUFDQyxlQUFBO0VBQ0EsY0R6RFk7QUNvRGhCO0FBUUc7RUFJQyxhQUFBO0VBSUEscUJBQUE7RUFJQSxZQUFBO0VBR0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFRSTtFQUNDLGVBQUE7RUFDQSxjRG5GVztFQ29GWCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEZEOUVNO0FDd0VYO0FBT0s7RUFDQyxxQkFBQTtBQUxOO0FBYUE7RUFFRTtJQUNDLFlBQUE7RUFYRDtBQUNGIiwiZmlsZSI6Im1vcmUtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kTmF2eSAgICAgICAgIDogIzBhMTkyZjtcclxuJExpZ2h0TmF2eSAgICA6ICMxMTIyNDA7XHJcbiRMaWdodGVzdE5hdnkgOiAjMzAzQzU1O1xyXG4kU2xhdGUgICAgICAgIDogIzg4OTJiMDtcclxuJExpZ2h0U2xhdGUgICA6ICNhOGIyZDE7XHJcbiRMaWdodGVzdFNsYXRlOiAjY2NkNmY2O1xyXG4kV2hpdGUgICAgICAgIDogI2U2ZjFmZjtcclxuJEdyZWVuICAgICAgICA6ICM2NGZmZGE7XHJcbiRHcmVlbk9wYWNpdHkgOiByZ2JhKDEwMCwyNTUsMjE4LDAuMDcpO1xyXG5cclxuJE1haW5Gb250OiBDYWxpYnJlLFNhbiBGcmFuY2lzY28sU0YgUHJvIFRleHQsLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxTZWdvZSBVSSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4kQ29kZUZvbnQ6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLm1vcmUtcHJvamVjdHMge1xyXG5cdC5wcm9qZWN0LWNvbCB7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0aGVpZ2h0OiA0MDBweDtcclxuXHJcblx0XHQubW9yZS1wcm9qZWN0LWJveCB7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG5cdFx0XHQtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHQtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdC13ZWJraXQtYm94LWFsaWduOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHQtbXMtZmxleC1hbGlnbjogZmxleC1zdGFydDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZzogMnJlbSAxLjc1cmVtO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuXHRcdFx0XHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmOmhvdmVyLFxyXG5cdFx0XHQmOmZvY3VzIHtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAwIDIwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3ZnIHtcclxuXHRcdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICRHcmVlbjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm90aGVyLXByb2plY3QtdGl0bGUge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDEwcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRlc3RTbGF0ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm90aGVyLXByb2plY3QtZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRjb2xvcjogJExpZ2h0U2xhdGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tb3JlLXByb2plY3RzLXNraWxscyB7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdFx0LXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xyXG5cdFx0XHRcdC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdFx0LXdlYmtpdC1ib3gtZmxleDogMTtcclxuXHRcdFx0XHQtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHQtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuXHRcdFx0XHRmbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRtYXJnaW46IDIwcHggMCAwIDA7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHJcblx0XHRcdFx0bGkge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICRTbGF0ZTtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuXHRcdFx0XHRcdC51bmRlcmxpbmUge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMy41cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcblx0Lm1vcmUtcHJvamVjdHMge1xyXG5cdFx0LnByb2plY3QtY29sIHtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    4143:
    /*!****************************************************************!*\
      !*** ./src/app/components/home/projects/projects.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "projectsComponent": function projectsComponent() {
          return (
            /* binding */
            _projectsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      7844);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _c0 = ["imgContainer"];

      function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
        }
      }

      function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template, 3, 2, "ng-template", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var project_r1 = ctx_r16.$implicit;
          var i_r2 = ctx_r16.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r10.slide + i_r2);
        }
      }

      function projectsComponent_div_9_owl_carousel_o_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template, 2, 1, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
        }
      }

      function projectsComponent_div_9_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
        }
      }

      function projectsComponent_div_9_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var technology_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r19);
        }
      }

      function projectsComponent_div_9_a_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function projectsComponent_div_9_a_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
        }
      }

      function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template, 2, 2, "ng-template", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var project_r1 = ctx_r27.$implicit;
          var i_r2 = ctx_r27.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r22.slide + i_r2);
        }
      }

      function projectsComponent_div_9_owl_carousel_o_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template, 2, 1, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r8.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
        }
      }

      function projectsComponent_div_9_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
        }
      }

      function projectsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, projectsComponent_div_9_div_2_Template, 4, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function projectsComponent_div_9_Template_div_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.debug();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, projectsComponent_div_9_li_13_Template, 3, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, projectsComponent_div_9_a_15_Template, 2, 1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, projectsComponent_div_9_a_16_Template, 2, 1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, projectsComponent_div_9_owl_carousel_o_17_Template, 2, 2, "owl-carousel-o", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, projectsComponent_div_9_div_18_Template, 4, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", project_r1.img, "');");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("project-info-right", i_r2 % 2 == 0)("project-info-left", i_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 33, "FeatureProjects.Label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", project_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("justify-content-end", i_r2 % 2 == 0)("justify-content-start", i_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["ghLink"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["demoLink"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
        }
      }

      var _projectsComponent = /*#__PURE__*/function () {
        function _projectsComponent(analyticsService) {
          _classCallCheck(this, _projectsComponent);

          this.analyticsService = analyticsService;
          this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            navSpeed: 700,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000
          };
        }

        _createClass(_projectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "debug",
          value: function debug() {
            this.imgContainer.nativeElement.scroll({
              top: this.imgContainer.nativeElement.scrollHeight,
              left: 0,
              behavior: "smooth"
            });
          }
        }]);

        return _projectsComponent;
      }();

      _projectsComponent.ɵfac = function projectsComponent_Factory(t) {
        return new (t || _projectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _projectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _projectsComponent,
        selectors: [["app-projects"]],
        viewQuery: function projectsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
          }
        },
        decls: 12,
        vars: 6,
        consts: [["id", "projects", 1, "section", "projects"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "section-title"], [1, "n-section-title"], ["class", "d-flex project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "d-flex", "project-container"], ["class", "owl-carousel-o", 3, "options", 4, "ngIf"], ["class", "img-feature-project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], [1, "h-100"], [1, "project-box"], [1, "feature-project"], [1, "project-name"], [1, "project-description-box", 3, "click"], [1, "mb-0", 3, "innerHTML"], [1, "project-skills"], ["class", "ml-3", 4, "ngFor", "ngForOf"], [1, "project-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], [1, "owl-carousel-o", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "img-container"], ["imgContainer", ""], [1, "img-feature-project", "rounded", 3, "src", "alt"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-feature-project-container"], [1, "img-feature-project-box"], [1, "img-container", 2, "width", "auto"], ["width", "600px", 1, "img-feature-project", "rounded", 3, "src", "alt"], [1, "ml-3"], [1, "underline", "technology"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "ml-3", "fab", "fa-github"], [1, "ml-3", "fas", "fa-external-link-alt"]],
        template: function projectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "03.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, projectsComponent_div_9_Template, 19, 35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "FeatureProjects.Title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "FeatureProjects.Projects"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        styles: [".projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n  height: 450px;\n  margin: 100px 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .feature-project[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #64ffda;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 20px;\n  color: #ccd6f6;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: #112240;\n  color: #a8b2d1;\n  font-size: 18px;\n  border-radius: 3px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.owl-carousel-o[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.img-feature-project-container[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .img-feature-project-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project-box[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: #a8b2d1;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .img-feature-project-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .projects[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-start[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: #0a192fe3;\n  }\n}\n  .owl-theme .owl-dots .owl-dot.active span,   .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  background: #ffffff33;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 420px;\n  overflow: auto;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #64ffda;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUM7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQUFGO0FBQ0U7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSDtBQUNFO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0g7QUFDRTtFQUNDLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSDtBQUFHO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0RkWTtFQ2VaLDBGRFhPO0VDWVAsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFBRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNEeEJZO0FDMEJoQjtBQUFHO0VBQ0Msa0RBQUE7RUFFQSwwREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkRyQ1k7RUNzQ1osY0RuQ1k7RUNvQ1osZUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLGFBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQURJO0VBQ0MsZUFBQTtFQUNBLDBGRC9DTTtFQ2dETixlQUFBO0VBQ0EsY0R6RFc7RUMwRFgsa0JBQUE7RUFDQSxtQkFBQTtBQUdMO0FBRks7RUFDQyxtQkFBQTtBQUlOO0FBQUc7RUFDQyxnQkFBQTtBQUVKO0FBREk7RUFDQyxlQUFBO0FBR0w7QUFJQTtFQUNDLFlBQUE7QUFERDtBQUdBO0VBQ0MsYUFBQTtBQUFEO0FBR0E7RUFDQztJQUNDLGFBQUE7RUFBQTs7RUFFRDtJQUNDLFVBQUE7SUFDQSx5QkFBQTtJQUNBLDhCQUFBO0VBQ0E7RUFBQTtJQUNDLG1CQUFBO0lBQ0Esc0JBQUE7RUFFRDtFQUFBO0lBQ0MsV0FBQTtFQUVEOztFQUNEOztJQUVDLFVBQUE7RUFFQTtBQUNGO0FBQ0E7RUFDQzs7SUFFQyxpQ0FBQTtFQUNBO0FBQ0Y7QUFFQTtFQUNDO0lBQ0MsYUFBQTtFQUFBOztFQUdBO0lBQ0MsdUJBQUE7SUFDQSx5QkFBQTtFQUFEO0VBQ0M7SUFDQyxXQUFBO0VBQ0Y7RUFDQztJQUNDLFdBQUE7RUFDRjtFQUNDO0lBQ0MsdUJBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSx3Q0FBQTtJQUNBLGNEbklZO0lDb0laLGVBQUE7SUFDQSxrQkFBQTtFQUNGO0VBQ0M7O0lBRUMseUJBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0VBQ0Y7RUFBRTs7SUFDQyxjQUFBO0VBR0g7RUFBQztJQUNDLGFBQUE7RUFFRjtFQUNBOztJQUVDLFlBQUE7RUFDRDtFQUNBOztJQUVDLDZCQUFBO0VBQ0Q7RUFDQTtJQUNDLGtDQUFBO0VBQ0Q7RUFDQTtJQUNDLGtDQUFBO0VBQ0Q7RUFFQTs7SUFFQyxhQUFBO0lBQ0EscUJBQUE7RUFBRDtBQUNGO0FBSUE7O0VBRUMsa0NBQUE7QUFGRDtBQUtBO0VBQ0MscUJBQUE7QUFGRDtBQUtBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkQ7QUFLQSxVQUFBO0FBRUE7RUFDQyxVQUFBO0FBSEQ7QUFNQSxVQUFBO0FBRUE7RUFDQyxpQ0FBQTtFQUNBLGtCQUFBO0FBSkQ7QUFPQSxXQUFBO0FBRUE7RUFDQyxtQkQzTWU7RUM0TWYsa0JBQUE7QUFMRDtBQVFBLG9CQUFBO0FBRUE7RUFDQyxtQkRsTmU7QUM0TWhCIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuLnByb2plY3RzIHtcclxuXHQucHJvamVjdC1jb250YWluZXIge1xyXG5cdFx0aGVpZ2h0OiA0NTBweDtcclxuXHRcdG1hcmdpbjogMTAwcHggMDtcclxuXHRcdC5wcm9qZWN0LWluZm8tbGVmdCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogLTU3cHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0fVxyXG5cdFx0LnByb2plY3QtaW5mby1yaWdodCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtNTdweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0fVxyXG5cdFx0LnByb2plY3QtYm94IHtcclxuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0LmZlYXR1cmUtcHJvamVjdCB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0Y29sb3I6ICRHcmVlbjtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3QtbmFtZSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDIwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0LWRlc2NyaXB0aW9uLWJveCB7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdFx0cGFkZGluZzogMjVweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRTbGF0ZTtcclxuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0LXNraWxscyB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRtYXJnaW46IDI1cHggMCAxMHB4O1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0bGkge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAkU2xhdGU7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XHJcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdFx0LnRlY2hub2xvZ3kge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdC1saW5rcyB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdFx0XHRpIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWwtbyB7XHJcblx0d2lkdGg6IDYwMHB4O1xyXG59XHJcbi5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcblx0Lm93bC1jYXJvdXNlbC1vIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0ZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHRcdC5pbWctZmVhdHVyZS1wcm9qZWN0LWJveCB7XHJcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHR9XHJcblx0XHQuaW1nLWZlYXR1cmUtcHJvamVjdCB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucHJvamVjdC1pbmZvLXJpZ2h0LFxyXG5cdC5wcm9qZWN0LWluZm8tbGVmdCB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0LnByb2plY3QtaW5mby1yaWdodCxcclxuXHQucHJvamVjdC1pbmZvLWxlZnQge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0Lm93bC1jYXJvdXNlbC1vIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5wcm9qZWN0cyB7XHJcblx0XHQucHJvamVjdC1jb250YWluZXIge1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdFx0bWFyZ2luOiAzM3B4IDAgIWltcG9ydGFudDtcclxuXHRcdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdC1pbmZvLXJpZ2h0IHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdC1kZXNjcmlwdGlvbi1ib3gge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0XHRwYWRkaW5nOiAyNXB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0Y29sb3I6ICRMaWdodFNsYXRlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3QtaW5mby1yaWdodCxcclxuXHRcdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdFx0LnByb2plY3QtYm94IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuaW1nLWZlYXR1cmUtcHJvamVjdC1jb250YWluZXIge1xyXG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5wcm9qZWN0LWluZm8tcmlnaHQsXHJcblx0XHQucHJvamVjdC1pbmZvLWxlZnQge1xyXG5cdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHR9XHJcblx0XHQudGV4dC1yaWdodCxcclxuXHRcdC50ZXh0LWxlZnQge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdC5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5wcm9qZWN0LWluZm8tcmlnaHQgLnByb2plY3QtYm94LFxyXG5cdFx0LnByb2plY3QtaW5mby1sZWZ0IC5wcm9qZWN0LWJveCB7XHJcblx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICMwYTE5MmZlMztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3BhbixcclxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuXHR3aWR0aDogNjAwcHg7XHJcblx0bWF4LWhlaWdodDogNDIwcHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcblx0d2lkdGg6IDdweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggIzg4OTJiMDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0YmFja2dyb3VuZDogJEdyZWVuO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAkR3JlZW47XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    635:
    /*!**********************************************************************!*\
      !*** ./src/app/components/home/testimonial/testimonial.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestimonialComponent": function TestimonialComponent() {
          return (
            /* binding */
            _TestimonialComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/analytics/analytics.service */
      914);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      function TestimonialComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var testimonial_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", testimonial_r1.Comment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", testimonial_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" -", testimonial_r1.Name, ", ", testimonial_r1.Position, " of ", testimonial_r1.Company, " ");
        }
      }

      var _TestimonialComponent = /*#__PURE__*/function () {
        function _TestimonialComponent(analyticsService) {
          _classCallCheck(this, _TestimonialComponent);

          this.analyticsService = analyticsService;
        }

        _createClass(_TestimonialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TestimonialComponent;
      }();

      _TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) {
        return new (t || _TestimonialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService));
      };

      _TestimonialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TestimonialComponent,
        selectors: [["app-testimonial"]],
        decls: 11,
        vars: 6,
        consts: [["id", "testimonial", 1, "section", "testimonials"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], [4, "ngFor", "ngForOf"], [1, "testimonial-content"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"], ["alt", "", 1, "testimonial-photo", 3, "src"]],
        template: function TestimonialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "04.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestimonialComponent_ng_container_9_Template, 6, 5, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "Testimonial.Title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "Testimonial.Items"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
        styles: [".testimonials.section[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.testimonial-photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 20px;\n}\n\n.testimonial-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNEIiwiZmlsZSI6InRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy5zZWN0aW9uIC5zZWN0aW9uLWJveCB7XHJcblx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1waG90byB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1jb250ZW50IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    9256:
    /*!*********************************************!*\
      !*** ./src/app/guards/admin/admin.guard.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminGuard": function AdminGuard() {
          return (
            /* binding */
            _AdminGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5160);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      8293);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/auth/user.service */
      1213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AdminGuard = /*#__PURE__*/function () {
        function _AdminGuard(userService, router) {
          _classCallCheck(this, _AdminGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(_AdminGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this6 = this;

            var userInfo = this.userService.getCurrentUserIdAndRole();

            if (!userInfo) {
              this.router.navigate(['/login']);
              return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
                return observer.next(false);
              });
            }

            return this.userService.getUserById(userInfo.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (user) {
              if (user.role === 'admin') {
                return true;
              } else {
                _this6.router.navigate(['/login']);

                return false;
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function () {
              _this6.router.navigate(['/login']);

              return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
                return observer.next(false);
              });
            }));
          }
        }]);

        return _AdminGuard;
      }();

      _AdminGuard.ɵfac = function AdminGuard_Factory(t) {
        return new (t || _AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _AdminGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AdminGuard,
        factory: _AdminGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8633:
    /*!****************************************************************!*\
      !*** ./src/app/manage-portfolio/manage-portfolio.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ManagePortfolioComponent": function ManagePortfolioComponent() {
          return (
            /* binding */
            _ManagePortfolioComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_blog_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/blog.model */
      8266);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_blog_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/blog/blog.service */
      2036);
      /* harmony import */


      var _services_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/comment/comment.service */
      1511);
      /* harmony import */


      var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth/user.service */
      1213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function ManagePortfolioComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_tr_26_Template_button_click_11_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var blog_r6 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.confirmDelete(blog_r6._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_tr_26_Template_button_click_13_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var blog_r6 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9.openUpdateModal(blog_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_tr_26_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var blog_r6 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.openCommentsModal(blog_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Manage Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var blog_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](blog_r6.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](blog_r6.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((blog_r6.content == null ? null : blog_r6.content.length) > 40 ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](7, 4, blog_r6.content, 0, 40) + "..." : blog_r6.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](blog_r6.status);
        }
      }

      function ManagePortfolioComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_27_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.showModal = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManagePortfolioComponent_div_27_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.editBlogData.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "content");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "textarea", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManagePortfolioComponent_div_27_Template_textarea_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.editBlogData.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Author:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManagePortfolioComponent_div_27_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Status:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManagePortfolioComponent_div_27_Template_select_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r16.editBlogData.status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Created At:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Updated At:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_27_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.updateBlog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_27_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18.showModal = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.editBlogData.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.editBlogData.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.editBlogData.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](32, 6, ctx_r1.editBlogData.createdAt, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](38, 9, ctx_r1.editBlogData.updatedAt, "medium"));
        }
      }

      function ManagePortfolioComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Confirm Deletion");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Are you sure you want to delete this blog?");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_28_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r19.onConfirmDeletion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_28_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r21.onCancelDeletion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ManagePortfolioComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Confirm Deletion");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Are you sure you want to delete this comment?");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_29_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r22.deleteComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_29_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r24.showDeleteConfirmation = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ManagePortfolioComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.notificationMessage);
        }
      }

      function ManagePortfolioComponent_div_31_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManagePortfolioComponent_div_31_tr_18_Template_select_ngModelChange_6_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

            var comment_r26 = restoredCtx.$implicit;
            return comment_r26.status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_31_tr_18_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

            var comment_r26 = restoredCtx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r29.updateCommentStatus(comment_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Update Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_31_tr_18_Template_button_click_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

            var comment_r26 = restoredCtx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r30.confirmDeleteComment(comment_r26._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var comment_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](comment_r26.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](comment_r26.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", comment_r26.status);
        }
      }

      function ManagePortfolioComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_div_31_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r31.showCommentsModal = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ManagePortfolioComponent_div_31_tr_18_Template, 18, 3, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Manage Comments for ", ctx_r5.selectedBlog == null ? null : ctx_r5.selectedBlog.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.comments);
        }
      }

      var _ManagePortfolioComponent = /*#__PURE__*/function () {
        function _ManagePortfolioComponent(blogService, commentService, userService, router) {
          _classCallCheck(this, _ManagePortfolioComponent);

          this.blogService = blogService;
          this.commentService = commentService;
          this.userService = userService;
          this.router = router;
          this.blogs = [];
          this.comments = [];
          this.showModal = false;
          this.showCommentsModal = false;
          this.showConfirmationModal = false;
          this.selectedBlog = null;
          this.selectedBlogId = null;
          this.user = null;
          this.editBlogData = null;
          this.selectedCommentId = null;
          this.showDeleteConfirmation = false;
          this.showStatusUpdatePopup = false;
          this.notificationMessage = '';
          this.newBlogData = {
            title: '',
            content: '',
            author: ''
          };
          {
            this.setAuthor();
          }
        }

        _createClass(_ManagePortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadBlogs();
          }
        }, {
          key: "setAuthor",
          value: function setAuthor() {
            var userIdAndRole = this.userService.getCurrentUserIdAndRole();

            if (userIdAndRole) {
              this.newBlogData.author = userIdAndRole.id;
            }
          }
        }, {
          key: "createBlog",
          value: function createBlog() {
            if (!this.newBlogData.author) {
              alert('No author identified. Please log in.');
              return;
            }

            this.blogService.createBlog(new _models_blog_model__WEBPACK_IMPORTED_MODULE_0__.Blog('', this.newBlogData.title, this.newBlogData.content, this.newBlogData.author, [], 'pending')).subscribe(function (response) {
              alert('Successfully created a blog');
            }, function (error) {
              console.error('Error creating blog', error);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            // Remove the token from local storage
            localStorage.removeItem('token'); // Replace 'token' with the actual key you use
            // Redirect to the login page

            this.router.navigate(['/login']); // Adjust this path based on your routing setup
          }
        }, {
          key: "loadBlogs",
          value: function loadBlogs() {
            var _this7 = this;

            this.blogService.getAllBlogs().subscribe(function (blogs) {
              _this7.blogs = blogs;
            }, function (error) {
              console.error('Error fetching blogs', error);
            });
          }
        }, {
          key: "deleteBlog",
          value: function deleteBlog(blogId) {
            var _this8 = this;

            this.blogService.deleteBlog(blogId).subscribe(function () {
              _this8.blogs = _this8.blogs.filter(function (blog) {
                return blog._id !== blogId;
              });
              _this8.showConfirmationModal = false;
            }, function (error) {
              console.error('Error deleting blog', error);
            });
          }
        }, {
          key: "openUpdateModal",
          value: function openUpdateModal(blog) {
            this.selectedBlog = blog;
            this.editBlogData = Object.assign({}, blog); // Clone the blog data

            this.loadUserDetails(blog.author);
            this.showModal = true;
          }
        }, {
          key: "closeUpdateModal",
          value: function closeUpdateModal() {
            this.showModal = false;
          }
        }, {
          key: "updateBlog",
          value: function updateBlog() {
            var _this9 = this;

            var _a;

            if (!this.editBlogData || !((_a = this.selectedBlog) === null || _a === void 0 ? void 0 : _a._id)) {
              console.error('No blog data available for update');
              return;
            } // Set updatedAt to current time before sending the update


            this.editBlogData.updatedAt = new Date();
            this.blogService.updateBlog(this.selectedBlog._id, this.editBlogData).subscribe(function () {
              _this9.loadBlogs();

              _this9.closeUpdateModal();
            }, function (error) {
              console.error('Error updating blog', error);
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(blogId) {
            this.showConfirmationModal = true;
            this.selectedBlogId = blogId;
          }
        }, {
          key: "onConfirmDeletion",
          value: function onConfirmDeletion() {
            if (this.selectedBlogId) {
              this.deleteBlog(this.selectedBlogId);
              this.selectedBlogId = null;
            }
          }
        }, {
          key: "onCancelDeletion",
          value: function onCancelDeletion() {
            this.showConfirmationModal = false;
            this.selectedBlogId = null;
          }
        }, {
          key: "loadUserDetails",
          value: function loadUserDetails(authorId) {
            var _this10 = this;

            this.userService.getUserById(authorId).subscribe(function (user) {
              _this10.user = user;
            }, function (error) {
              console.error('Error fetching user details', error);
              _this10.user = null;
            });
          }
        }, {
          key: "openCommentsModal",
          value: function openCommentsModal(blog) {
            var _this11 = this;

            this.selectedBlog = blog;
            this.commentService.getCommentsForBlog(blog._id).subscribe(function (response) {
              _this11.comments = response.data;
              _this11.showCommentsModal = true;
            }, function (error) {
              return console.error('Error fetching comments:', error);
            });
          }
        }, {
          key: "updateCommentStatus",
          value: function updateCommentStatus(comment) {
            var _this12 = this;

            console.log('Updating status for comment ID:', comment._id); // Add this line for debugging

            this.commentService.updateCommentStatus(comment._id, comment.status).subscribe(function (updatedComment) {
              var index = _this12.comments.findIndex(function (c) {
                return c._id === updatedComment._id;
              });

              if (index !== -1) {
                _this12.comments[index] = updatedComment;
              }

              _this12.showStatusUpdatePopup = true;
              _this12.notificationMessage = "Status updated successfully!";
              setTimeout(function () {
                return _this12.showStatusUpdatePopup = false;
              }, 3000);
            }, function (error) {
              return console.error('Error updating comment status:', error);
            });
          }
        }, {
          key: "confirmDeleteComment",
          value: function confirmDeleteComment(commentId) {
            this.selectedCommentId = commentId;
            this.showDeleteConfirmation = true;
          }
        }, {
          key: "deleteComment",
          value: function deleteComment() {
            var _this13 = this;

            if (!this.selectedCommentId) {
              console.error('No comment selected for deletion');
              return;
            }

            this.commentService.deleteComment(this.selectedCommentId).subscribe(function () {
              _this13.comments = _this13.comments.filter(function (comment) {
                return comment._id !== _this13.selectedCommentId;
              });
              _this13.selectedCommentId = null;
              _this13.showDeleteConfirmation = false; // Close the confirmation modal
              // Set the message for the notification popup

              _this13.notificationMessage = "Comment deleted successfully!";
              _this13.showStatusUpdatePopup = true;
              setTimeout(function () {
                return _this13.showStatusUpdatePopup = false;
              }, 3000); // Hide after 3 seconds
            }, function (error) {
              console.error('Error deleting comment', error); // Optionally, display an error notification
            });
          }
        }]);

        return _ManagePortfolioComponent;
      }();

      _ManagePortfolioComponent.ɵfac = function ManagePortfolioComponent_Factory(t) {
        return new (t || _ManagePortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_1__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_comment_comment_service__WEBPACK_IMPORTED_MODULE_2__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _ManagePortfolioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ManagePortfolioComponent,
        selectors: [["app-manage-portfolio"]],
        decls: 34,
        vars: 8,
        consts: [[1, "blog-form"], [3, "ngSubmit"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["for", "content"], ["id", "content", "name", "content", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit"], [4, "ngFor", "ngForOf"], ["class", "modal", 4, "ngIf"], ["class", "confirmation-modal", 4, "ngIf"], ["class", "custom-modal", 4, "ngIf"], ["class", "notification-popup", 4, "ngIf"], [3, "click"], [1, "modal"], [1, "modal-content"], [1, "close-button", 3, "click"], ["type", "text", "id", "title", "name", "title", 3, "ngModel", "ngModelChange"], ["id", "content", "name", "content", 1, "anas", "w-100", 3, "ngModel", "ngModelChange"], ["for", "author"], ["type", "text", "id", "author", "name", "author", 3, "ngModel", "ngModelChange"], ["for", "status"], ["id", "status", "name", "status", 3, "ngModel", "ngModelChange"], ["value", "pending"], ["value", "accepted"], ["value", "rejected"], [1, "confirmation-modal"], [1, "custom-modal"], [1, "modal-actions"], [1, "notification-popup"], [3, "ngModel", "ngModelChange"]],
        template: function ManagePortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ManagePortfolioComponent_Template_form_ngSubmit_1_listener() {
              return ctx.createBlog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Title:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManagePortfolioComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.newBlogData.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Content:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ManagePortfolioComponent_Template_textarea_ngModelChange_9_listener($event) {
              return ctx.newBlogData.content = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Create Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Author");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ManagePortfolioComponent_tr_26_Template, 17, 8, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ManagePortfolioComponent_div_27_Template, 44, 12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ManagePortfolioComponent_div_28_Template, 9, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ManagePortfolioComponent_div_29_Template, 11, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ManagePortfolioComponent_div_30_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ManagePortfolioComponent_div_31_Template, 19, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManagePortfolioComponent_Template_button_click_32_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newBlogData.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newBlogData.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.blogs);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showModal);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showConfirmationModal);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDeleteConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showStatusUpdatePopup);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCommentsModal);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%] {\r\n    background-color: #f4f4f4;\r\n  }\r\n  \r\n  .modal[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 5;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: 15% auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    width: 100%;        \r\n    height: 150px;      \r\n    padding: 10px;      \r\n    margin-top: 10px;   \r\n    border: 1px solid #ccc; \r\n  }\r\n  \r\n  .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    box-sizing: border-box; \r\n}\r\n  \r\n  .close-button[_ngcontent-%COMP%] {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close-button[_ngcontent-%COMP%]:hover, .close-button[_ngcontent-%COMP%]:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  input[type=\"text\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  .confirmation-modal[_ngcontent-%COMP%] {\r\n    \r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    z-index: 5;\r\n  }\r\n  \r\n  .modal-actions[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    text-align: right;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n    max-height: 80vh; \r\n    overflow-y: auto; \r\n}\r\n  \r\n  \r\n  \r\n  .modal-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    table-layout: fixed; \r\n}\r\n  \r\n  .custom-modal[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 6;\r\n}\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n}\r\n  \r\n  .notification-popup[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background-color: green;\r\n  color: white;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  z-index: 7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsV0FBVyxTQUFTLGdDQUFnQztJQUNwRCxhQUFhLE9BQU8sZ0NBQWdDO0lBQ3BELGFBQWEsT0FBTyxpQ0FBaUM7SUFDckQsZ0JBQWdCLElBQUksNENBQTRDO0lBQ2hFLHNCQUFzQixFQUFFLGlDQUFpQztFQUMzRDs7RUFDQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0IsRUFBRSx1REFBdUQ7QUFDbkY7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTs7O0lBR0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxnQkFBZ0IsRUFBRSwwREFBMEQ7SUFDNUUsZ0JBQWdCLEVBQUUsd0VBQXdFO0FBQzlGOztFQUVBLGtGQUFrRjs7RUFDbEY7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUUsc0RBQXNEO0FBQy9FOztFQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztFQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoibWFuYWdlLXBvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICB9XHJcbiAgLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAvKiBGdWxsIHdpZHRoIG9mIHRoZSBjb250YWluZXIgKi9cclxuICAgIGhlaWdodDogMTUwcHg7ICAgICAgLyogTGFyZ2VyIGhlaWdodCBmb3IgbW9yZSB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgICAgIC8qIFBhZGRpbmcgZm9yIGludGVybmFsIHNwYWNpbmcgKi9cclxuICAgIG1hcmdpbi10b3A6IDEwcHg7ICAgLyogTWFyZ2luIGZvciBzcGFjaW5nIG91dHNpZGUgdGhlIHRleHRhcmVhICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBCb3JkZXIgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHVkZXMgcGFkZGluZyBhbmQgYm9yZGVyIGluIHRoZSBlbGVtZW50J3Mgd2lkdGggKi9cclxufVxyXG5cclxuICAuY2xvc2UtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZS1idXR0b246aG92ZXIsXHJcbiAgLmNsb3NlLWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIC5jb25maXJtYXRpb24tbW9kYWwge1xyXG4gICAgLyogQWRkIHlvdXIgbW9kYWwgc3R5bGluZyBoZXJlICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDgwdmg7IC8qIFNldHMgdGhlIG1heGltdW0gaGVpZ2h0IHRvIDgwJSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBBbGxvd3MgZm9yIHZlcnRpY2FsIHNjcm9sbGluZyBpZiB0aGUgY29udGVudCBleGNlZWRzIHRoZSBtYXggaGVpZ2h0ICovXHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIHRoZSB0YWJsZSB3aXRoaW4gdGhlIG1vZGFsIHRvIGVuc3VyZSBpdCBmaXRzIGFuZCBzY3JvbGxzIHByb3Blcmx5ICovXHJcbi5tb2RhbC1jb250ZW50IHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsgLyogVGhpcyBjYW4gaGVscCB3aXRoIHJlbmRlcmluZyBpc3N1ZXMgaW4gc29tZSBjYXNlcyAqL1xyXG59XHJcbi5jdXN0b20tbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLXBvcHVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHotaW5kZXg6IDc7XHJcbn1cclxuXHJcbiAgXHJcbiAgXHJcbiAgIl19 */"]
      });
      /***/
    },

    /***/
    8266:
    /*!**************************************!*\
      !*** ./src/app/models/blog.model.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Blog": function Blog() {
          return (
            /* binding */
            _Blog
          );
        }
        /* harmony export */

      });

      var _Blog = /*#__PURE__*/_createClass(function _Blog(_id, title, content, author, comments, // Assuming Comment is another model
      status, createdAt, updatedAt) {
        _classCallCheck(this, _Blog);

        this._id = _id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.comments = comments;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
      });
      /***/

    },

    /***/
    914:
    /*!*********************************************************!*\
      !*** ./src/app/services/analytics/analytics.service.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnalyticsService": function AnalyticsService() {
          return (
            /* binding */
            _AnalyticsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-google-analytics */
      4462);

      var _AnalyticsService = /*#__PURE__*/function () {
        function _AnalyticsService($gaService) {
          _classCallCheck(this, _AnalyticsService);

          this.$gaService = $gaService;
        }

        _createClass(_AnalyticsService, [{
          key: "sendAnalyticEvent",
          value: function sendAnalyticEvent(action, category, label) {
            this.$gaService.event(action, category, label);
          }
        }, {
          key: "sendAnalyticPageView",
          value: function sendAnalyticPageView(path, title) {
            this.$gaService.pageView(path, title);
          }
        }]);

        return _AnalyticsService;
      }();

      _AnalyticsService.ɵfac = function AnalyticsService_Factory(t) {
        return new (t || _AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService));
      };

      _AnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AnalyticsService,
        factory: _AnalyticsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1213:
    /*!***********************************************!*\
      !*** ./src/app/services/auth/user.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      1134);
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jwt-decode */
      2975);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      8293);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      3882); // Import 'of' here
      // Import 'map' and 'catchError' here


      var _UserService = /*#__PURE__*/function () {
        function _UserService(http) {
          _classCallCheck(this, _UserService);

          this.http = http;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + '/users';
        } // Sign up


        _createClass(_UserService, [{
          key: "signUp",
          value: function signUp(userData) {
            return this.http.post("".concat(this.apiUrl, "/signup"), userData);
          } // Sign in

        }, {
          key: "signIn",
          value: function signIn(credentials) {
            return this.http.post("".concat(this.apiUrl, "/signin"), credentials);
          } // Get user by ID

        }, {
          key: "getUserById",
          value: function getUserById(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          } // Update user

        }, {
          key: "updateUser",
          value: function updateUser(id, userData) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), userData);
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            var userIdAndRole = this.getCurrentUserIdAndRole();

            if (!userIdAndRole) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
            }

            console.log(userIdAndRole);
            return this.fetchFullUserDetails(userIdAndRole.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (user) {
              return user.role === 'admin';
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function () {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
            }));
          } // Delete user

        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          } // List all users

        }, {
          key: "listUsers",
          value: function listUsers() {
            return this.http.get("".concat(this.apiUrl));
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var token = localStorage.getItem('token');
            return !!token; // Return true if token exists
          }
        }, {
          key: "getCurrentUserIdAndRole",
          value: function getCurrentUserIdAndRole() {
            var token = localStorage.getItem('token');
            if (!token) return null;

            try {
              var decoded = (0, jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
              return {
                id: decoded.id,
                role: decoded.role
              };
            } catch (error) {
              console.error('Token decoding failed', error);
              return null;
            }
          }
        }, {
          key: "fetchFullUserDetails",
          value: function fetchFullUserDetails(userId) {
            return this.http.get("".concat(this.apiUrl).concat(userId));
          }
        }]);

        return _UserService;
      }();

      _UserService.ɵfac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
      };

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _UserService,
        factory: _UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2036:
    /*!***********************************************!*\
      !*** ./src/app/services/blog/blog.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogService": function BlogService() {
          return (
            /* binding */
            _BlogService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BlogService = /*#__PURE__*/function () {
        function _BlogService(http) {
          _classCallCheck(this, _BlogService);

          this.http = http;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/blog';
        }

        _createClass(_BlogService, [{
          key: "getHeaders",
          value: function getHeaders() {
            var token = localStorage.getItem('token'); // Adjust this according to how you store the token

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();

            if (token) {
              headers = headers.set('Authorization', "Bearer ".concat(token));
            }

            return headers;
          }
        }, {
          key: "getAllBlogs",
          value: function getAllBlogs() {
            return this.http.get(this.apiUrl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              return response.data;
            }));
          }
        }, {
          key: "getAcceptedBlogs",
          value: function getAcceptedBlogs() {
            return this.http.get("".concat(this.apiUrl, "/accepted")).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
              return response.data;
            }));
          }
        }, {
          key: "getBlogById",
          value: function getBlogById(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "createBlog",
          value: function createBlog(blog) {
            var headers = this.getHeaders();
            return this.http.post(this.apiUrl, blog, {
              headers: headers
            });
          }
        }, {
          key: "updateBlog",
          value: function updateBlog(id, blog) {
            var headers = this.getHeaders();
            return this.http.put("".concat(this.apiUrl, "/").concat(id), blog, {
              headers: headers
            });
          }
        }, {
          key: "deleteBlog",
          value: function deleteBlog(id) {
            var headers = this.getHeaders();
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "approveBlog",
          value: function approveBlog(id) {
            var headers = this.getHeaders();
            return this.http.put("".concat(this.apiUrl, "/approve/").concat(id), {}, {
              headers: headers
            });
          }
        }]);

        return _BlogService;
      }();

      _BlogService.ɵfac = function BlogService_Factory(t) {
        return new (t || _BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _BlogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _BlogService,
        factory: _BlogService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1511:
    /*!*****************************************************!*\
      !*** ./src/app/services/comment/comment.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommentService": function CommentService() {
          return (
            /* binding */
            _CommentService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CommentService = /*#__PURE__*/function () {
        function _CommentService(http) {
          _classCallCheck(this, _CommentService);

          this.http = http;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/comments';
        }

        _createClass(_CommentService, [{
          key: "getHeaders",
          value: function getHeaders() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            var token = localStorage.getItem('token');

            if (token) {
              headers = headers.set('Authorization', "Bearer ".concat(token));
            }

            return headers;
          }
        }, {
          key: "createComment",
          value: function createComment(content, name, blogId) {
            return this.http.post(this.apiUrl, {
              content: content,
              name: name,
              blogId: blogId
            });
          }
        }, {
          key: "getCommentsForBlog",
          value: function getCommentsForBlog(blogId) {
            return this.http.get("".concat(this.apiUrl, "/for-blog/").concat(blogId));
          }
        }, {
          key: "updateCommentStatus",
          value: function updateCommentStatus(commentId, status) {
            var headers = this.getHeaders();
            return this.http.put("".concat(this.apiUrl, "/approve/").concat(commentId), {
              status: status
            }, {
              headers: headers
            });
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(commentId) {
            var headers = this.getHeaders();
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(commentId), {
              headers: headers
            });
          }
        }]);

        return _CommentService;
      }();

      _CommentService.ɵfac = function CommentService_Factory(t) {
        return new (t || _CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _CommentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CommentService,
        factory: _CommentService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3469:
    /*!*******************************************************!*\
      !*** ./src/app/services/language/language.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageService": function LanguageService() {
          return (
            /* binding */
            _LanguageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _LanguageService = /*#__PURE__*/function () {
        function _LanguageService(translateService) {
          _classCallCheck(this, _LanguageService);

          this.translateService = translateService;
        }

        _createClass(_LanguageService, [{
          key: "initLanguage",
          value: function initLanguage() {
            this.translateService.addLangs(["en", "es"]);
            var language = navigator.language || navigator.userLanguage;
            language = "en"; // Setting the default language to English

            this.translateService.setDefaultLang(language); // Removed the this.location.go(language) line

            this.language = language;
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(language) {
            this.translateService.setDefaultLang(language); // Removed the this.location.go(language) line

            this.language = language;
          }
        }]);

        return _LanguageService;
      }();

      _LanguageService.ɵfac = function LanguageService_Factory(t) {
        return new (t || _LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
      };

      _LanguageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LanguageService,
        factory: _LanguageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3653:
    /*!**********************************************!*\
      !*** ./src/app/sign-in/sign-in.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignInComponent": function SignInComponent() {
          return (
            /* binding */
            _SignInComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/auth/user.service */
      1213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function SignInComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
        }
      }

      var _SignInComponent = /*#__PURE__*/function () {
        function _SignInComponent(userService, router) {
          _classCallCheck(this, _SignInComponent);

          this.userService = userService;
          this.router = router;
          this.userData = {
            email: '',
            password: ''
          };
          this.errorMessage = ''; // Add this line
        }

        _createClass(_SignInComponent, [{
          key: "login",
          value: function login() {
            var _this14 = this;

            this.userService.signIn(this.userData).subscribe({
              next: function next(response) {
                // Store the token in local storage
                localStorage.setItem('token', response.token); // Get current user ID from the token

                var userInfo = _this14.userService.getCurrentUserIdAndRole();

                if (userInfo && userInfo.id) {
                  // Fetch user details by ID
                  _this14.userService.getUserById(userInfo.id).subscribe(function (user) {
                    // Check if the user is an admin
                    if (user.role === 'admin') {
                      _this14.router.navigate(['/manage-portfolio']);
                    } else {
                      _this14.router.navigate(['/']);
                    }
                  }, function (error) {
                    console.error('Failed to fetch user details', error); // Handle error, maybe navigate to login or show an error message
                  });
                } else {
                  console.error('User ID not found in token'); // Handle error, maybe navigate to login or show an error message
                }
              },
              error: function error(_error) {
                console.error('Login failed', _error);
                _this14.errorMessage = _error.error.message; // Set the error message here
              }
            });
          }
        }]);

        return _SignInComponent;
      }();

      _SignInComponent.ɵfac = function SignInComponent_Factory(t) {
        return new (t || _SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _SignInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SignInComponent,
        selectors: [["app-sign-in"]],
        decls: 21,
        vars: 3,
        consts: [[1, "row"], [1, "col-md-4", "offset-md-4", "col-sm-6", "offset-sm-3"], [1, "card", "auth"], [1, "card-body", "auth-card"], [3, "submit"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "email"], ["type", "text", "name", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "********", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "submit", "value", "Login", 1, "btn", "btn-my"], [1, "text-center", "sign-up"], ["routerLink", "/sign-up"], [1, "alert", "alert-danger"]],
        template: function SignInComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_4_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignInComponent_div_5_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.userData.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.userData.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Don`t have an account ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " here. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userData.password);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: ["*[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n*[_ngcontent-%COMP%]   .text-right.forget-pass[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #d39e00;\n  text-decoration: none;\n}\n*[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%] {\n  color: #fff;\n}\n*[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d39e00;\n  font-weight: 600;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtBQUFGO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbip7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuLnRleHQtcmlnaHQuZm9yZ2V0LXBhc3MgYXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZDM5ZTAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuc2lnbi11cHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuc2lnbi11cCBhe1xyXG4gICAgY29sb3I6ICNkMzllMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    8422:
    /*!**********************************************!*\
      !*** ./src/app/sign-up/sign-up.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignUpComponent": function SignUpComponent() {
          return (
            /* binding */
            _SignUpComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var simple_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! simple-keyboard */
      8160);
      /* harmony import */


      var simple_keyboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth/user.service */
      1213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function SignUpComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
        }
      }

      var _SignUpComponent = /*#__PURE__*/function () {
        function _SignUpComponent(userService, router) {
          var _this15 = this;

          _classCallCheck(this, _SignUpComponent);

          this.userService = userService;
          this.router = router;
          this.userData = {
            name: '',
            email: '',
            role: 'normal',
            password: ''
          };
          this.c_password = ''; // Confirmation password

          this.errorMessage = ''; // Variable to store the error message

          this.value = "";

          this.onChange = function (input) {
            _this15.value = input;
            console.log("Input changed", input);
          };

          this.onKeyPress = function (button) {
            console.log("Button pressed", button);
            /**
             * If you want to handle the shift and caps lock buttons
             */

            if (button === "{shift}" || button === "{lock}") _this15.handleShift();
          };

          this.onInputChange = function (event) {
            _this15.keyboard.setInput(event.target.value);
          };

          this.handleShift = function () {
            var currentLayout = _this15.keyboard.options.layoutName;
            var shiftToggle = currentLayout === "default" ? "shift" : "default";

            _this15.keyboard.setOptions({
              layoutName: shiftToggle
            });
          };
        }

        _createClass(_SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signUp",
          value: function signUp() {
            var _this16 = this;

            // Check if passwords match
            if (this.userData.password !== this.c_password) {
              alert("Passwords do not match.");
              return;
            } // Sending data to the user service


            this.userService.signUp(this.userData).subscribe({
              next: function next(response) {
                // Handle successful sign up
                console.log('Sign up successful', response);

                _this16.router.navigate(['/login']); // Redirecting to login page

              },
              error: function error(_error2) {
                // Handle any errors here
                console.error('Sign up failed', _error2);
                _this16.errorMessage = _error2.error.message || 'Failed to sign up.';
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this17 = this;

            this.keyboard = new (simple_keyboard__WEBPACK_IMPORTED_MODULE_0___default())({
              onChange: function onChange(input) {
                return _this17.onChange(input);
              },
              onKeyPress: function onKeyPress(button) {
                return _this17.onKeyPress(button);
              },
              mergeDisplay: true,
              layoutName: "default",
              layout: {
                "default": ["q w e r t y u i o p", "a s d f g h j k l", "{shift} z x c v b n m {backspace}", "{numbers} {space} {ent}"],
                shift: ["Q W E R T Y U I O P", "A S D F G H J K L", "{shift} Z X C V B N M {backspace}", "{numbers} {space} {ent}"],
                numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"]
              },
              display: {
                "{numbers}": "123",
                "{ent}": "return",
                "{escape}": "esc ⎋",
                "{tab}": "tab ⇥",
                "{backspace}": "⌫",
                "{capslock}": "caps lock ⇪",
                "{shift}": "⇧",
                "{controlleft}": "ctrl ⌃",
                "{controlright}": "ctrl ⌃",
                "{altleft}": "alt ⌥",
                "{altright}": "alt ⌥",
                "{metaleft}": "cmd ⌘",
                "{metaright}": "cmd ⌘",
                "{abc}": "ABC"
              }
            });
          }
        }, {
          key: "handleNumbers",
          value: function handleNumbers() {
            var currentLayout = this.keyboard.options.layoutName;
            var numbersToggle = currentLayout !== "numbers" ? "numbers" : "default";
            this.keyboard.setOptions({
              layoutName: numbersToggle
            });
          }
        }]);

        return _SignUpComponent;
      }();

      _SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || _SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SignUpComponent,
        selectors: [["app-sign-up"]],
        decls: 28,
        vars: 5,
        consts: [[1, "row"], [1, "col-md-4", "offset-md-4", "col-sm-6", "offset-sm-3"], [1, "card", "auth"], [1, "card-body", "auth-card"], [3, "submit"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "name", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "********", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "c_password"], ["type", "password", "name", "c_password", "placeholder", "********", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "submit", "value", "Sign Up", 1, "btn", "btn-my"], [1, "text-right", "login"], ["routerLink", "/login"], [1, "alert", "alert-danger"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_4_listener() {
              return ctx.signUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SignUpComponent_div_5_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Name : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.userData.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Email : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.userData.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Password : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.userData.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Confirm Password : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.c_password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Already have an account ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userData.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userData.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.c_password);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["* {\n  margin-top: 20px;\n}\n* .login {\n  color: #fff;\n}\n* .login a {\n  color: #d39e00;\n  font-weight: 600;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFBRSxnQkFBQTtBQUFGO0FBQ0E7RUFDSSxXQUFBO0FBQ0o7QUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKnttYXJnaW4tdG9wOiAyMHB4O1xyXG4ubG9naW57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmxvZ2luIGF7XHJcbiAgICBjb2xvcjogI2QzOWUwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59Il19 */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        trackAnalyticID: "G-XE9X54XCMH",
        apiUrl: 'https://anasback.netlify.app/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map