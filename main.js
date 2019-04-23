(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-warning *ngIf=showWarning></app-warning> -->\n<!-- <app-instructions *ngIf=showInstructions></app-instructions> -->\n<app-usertest *ngIf=showUsertest></app-usertest>\n<app-colorblind *ngIf=showColorBlindness></app-colorblind>\n<app-astigmatism *ngIf=astigmatism></app-astigmatism>\n<!-- showUsertest -->\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: KEY_CODE, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["SPACE_BAR"] = 32] = "SPACE_BAR";
    KEY_CODE[KEY_CODE["J_KEY"] = 74] = "J_KEY";
    KEY_CODE[KEY_CODE["K_KEY"] = 75] = "K_KEY";
    KEY_CODE[KEY_CODE["L_KEY"] = 76] = "L_KEY";
})(KEY_CODE || (KEY_CODE = {}));
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
        //showWarning = true;
        this.showInstructions = false;
        this.showUsertest = true;
        this.astigmatism = false;
        this.showColorBlindness = false;
    }
    AppComponent.prototype.keyEvent = function (event) {
        // console.log(this.counter);
        console.log('show:', event.keyCode);
        if (event.keyCode === KEY_CODE.L_KEY) {
            this.astigmatism = true;
            this.showUsertest = false;
            this.showColorBlindness = false;
        }
        else if (event.keyCode === KEY_CODE.K_KEY) {
            this.astigmatism = false;
            this.showUsertest = false;
            this.showColorBlindness = true;
        }
        else if (event.keyCode === KEY_CODE.J_KEY) {
            this.astigmatism = false;
            this.showUsertest = true;
            this.showColorBlindness = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "keyEvent", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/warning/warning.component.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/instructions/instructions.component.ts");
/* harmony import */ var _usertest_usertest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usertest/usertest.component */ "./src/app/usertest/usertest.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _colorblind_colorblind_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./colorblind/colorblind.component */ "./src/app/colorblind/colorblind.component.ts");
/* harmony import */ var _astigmatism_astigmatism_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./astigmatism/astigmatism.component */ "./src/app/astigmatism/astigmatism.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _warning_warning_component__WEBPACK_IMPORTED_MODULE_5__["WarningComponent"],
                _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_6__["InstructionsComponent"],
                _usertest_usertest_component__WEBPACK_IMPORTED_MODULE_7__["UsertestComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _colorblind_colorblind_component__WEBPACK_IMPORTED_MODULE_9__["ColorblindComponent"],
                _astigmatism_astigmatism_component__WEBPACK_IMPORTED_MODULE_10__["AstigmatismComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/astigmatism/astigmatism.component.css":
/*!*******************************************************!*\
  !*** ./src/app/astigmatism/astigmatism.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: inline-block;\n}\n\np {\n  display: inline-block;\n  position: fixed;\n  top: 200px;\n  font-size: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXN0aWdtYXRpc20vYXN0aWdtYXRpc20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FzdGlnbWF0aXNtL2FzdGlnbWF0aXNtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMDBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/astigmatism/astigmatism.component.html":
/*!********************************************************!*\
  !*** ./src/app/astigmatism/astigmatism.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div *ngIf=\"!Stigmatism && !noStigmatism\">\n  <img src=\"../assets/Test-astimatisme.jpg\" alt=\"\">\n</div>\n<p *ngIf=\"!Stigmatism && !noStigmatism\">Do some lines appear blurier than others? (Y(yes)/N(no))</p>\n<p *ngIf=Stigmatism>Looks like you have some form of astigmatism. Please check with your nearst optometrist.</p>\n<p *ngIf=noStigmatism>We have found no astigmatism.</p>\n"

/***/ }),

/***/ "./src/app/astigmatism/astigmatism.component.ts":
/*!******************************************************!*\
  !*** ./src/app/astigmatism/astigmatism.component.ts ***!
  \******************************************************/
/*! exports provided: KEY_CODE, AstigmatismComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstigmatismComponent", function() { return AstigmatismComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["SPACE_BAR"] = 32] = "SPACE_BAR";
    KEY_CODE[KEY_CODE["Y_KEY"] = 89] = "Y_KEY";
    KEY_CODE[KEY_CODE["N_KEY"] = 78] = "N_KEY";
})(KEY_CODE || (KEY_CODE = {}));
var AstigmatismComponent = /** @class */ (function () {
    function AstigmatismComponent() {
        this.noStigmatism = false;
        this.Stigmatism = false;
    }
    AstigmatismComponent.prototype.keyEvent = function (event) {
        // console.log(this.counter);
        console.log('show:', event.keyCode);
        if (event.keyCode === KEY_CODE.Y_KEY) {
            this.Stigmatism = true;
            this.noStigmatism = false;
        }
        else if (event.keyCode === KEY_CODE.N_KEY) {
            this.noStigmatism = true;
            this.Stigmatism = false;
        }
    };
    AstigmatismComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AstigmatismComponent.prototype, "keyEvent", null);
    AstigmatismComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-astigmatism',
            template: __webpack_require__(/*! ./astigmatism.component.html */ "./src/app/astigmatism/astigmatism.component.html"),
            styles: [__webpack_require__(/*! ./astigmatism.component.css */ "./src/app/astigmatism/astigmatism.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AstigmatismComponent);
    return AstigmatismComponent;
}());



/***/ }),

/***/ "./src/app/colorblind/colorblind.component.css":
/*!*****************************************************!*\
  !*** ./src/app/colorblind/colorblind.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: inline-block;\n}\n\n.colorblind_question {\n  display: inline-block;\n  font-size: 35px;\n  position: fixed;\n  top:200px;\n}\n\n.question, .displayResult {\n  padding-left: 60px;\n}\n\n.displayResult{\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JibGluZC9jb2xvcmJsaW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb2xvcmJsaW5kL2NvbG9yYmxpbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbG9yYmxpbmRfcXVlc3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MjAwcHg7XG59XG5cbi5xdWVzdGlvbiwgLmRpc3BsYXlSZXN1bHQge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5cbi5kaXNwbGF5UmVzdWx0e1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/colorblind/colorblind.component.html":
/*!******************************************************!*\
  !*** ./src/app/colorblind/colorblind.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"pictures\" *ngIf=\"!end && !NotColorBlind\">\n  <img src=\"/assets/colorblind_pics/plate{{plate_number}}.png\" alt=\"plate{{plate_number}}\">\n</div>\n<div class=\"colorblind_question\">\n  <p class=\"displayResult\" *ngIf=\"end && !NotColorBlind\">{{displayResult}}</p>\n  <p *ngIf=\"!end && !NotColorBlind\">Do you see this number <b> {{result}} </b> (Y - yes /N- no)?</p>\n  <p class=\"question\" *ngIf=\"end && !NotColorBlind\">Please go to your nearest eye doctor or call 1800-000-000 for more help, our tests indicated\n    a possible chance of color blindness .</p>\n  <p class=\"question\" *ngIf=\"NotColorBlind\">You are all set! Our tests do not detect color blindness.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/colorblind/colorblind.component.ts":
/*!****************************************************!*\
  !*** ./src/app/colorblind/colorblind.component.ts ***!
  \****************************************************/
/*! exports provided: KEY_CODE, ColorblindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorblindComponent", function() { return ColorblindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["SPACE_BAR"] = 32] = "SPACE_BAR";
    KEY_CODE[KEY_CODE["Y_KEY"] = 89] = "Y_KEY";
    KEY_CODE[KEY_CODE["N_KEY"] = 78] = "N_KEY";
})(KEY_CODE || (KEY_CODE = {}));
var ColorblindComponent = /** @class */ (function () {
    function ColorblindComponent() {
        this.plate_number = 1;
        this.result = 12;
        this.case_val = 1;
        this.end = 0;
        this.NotColorBlind = 0;
        this.displayResult = "";
    }
    ColorblindComponent.prototype.keyEvent = function (event) {
        // console.log(this.counter);
        console.log('show:', event.keyCode);
        if (event.keyCode === KEY_CODE.Y_KEY) {
            this.case_val++;
        }
        else if (event.keyCode === KEY_CODE.N_KEY) {
            this.end = 1;
        }
        switch (this.case_val) {
            case 1:
                this.result = 12;
                this.plate_number = 1;
                this.displayResult = "Everyone should see number 12";
                break;
            case 2:
                this.result = 8;
                this.plate_number = 2;
                this.displayResult = "Red-green deficiency: 3";
                break;
            case 3:
                this.result = 29;
                this.plate_number = 3;
                this.displayResult = "Red-green deficiency:70";
                break;
            case 4:
                this.result = 5;
                this.plate_number = 4;
                this.displayResult = "Red-green deficiency: 2";
                break;
            case 5:
                this.result = 3;
                this.plate_number = 5;
                this.displayResult = "Red-green deficiency: 5";
                break;
            case 6:
                this.result = 15;
                this.plate_number = 6;
                this.displayResult = "Red-green deficiency: 17";
                break;
            case 7:
                this.result = 74;
                this.plate_number = 7;
                this.displayResult = "Red-green deficiency: 21";
                break;
            case 8:
                this.result = 6;
                this.plate_number = 8;
                this.displayResult = "Red-green deficiency: most people don’t see anything or see something wrong.";
                break;
            case 9:
                this.result = 45;
                this.plate_number = 9;
                this.displayResult = "Red-green deficiency: most people don’t see anything or see something wrong.";
                break;
            case 10:
                this.result = 5;
                this.plate_number = 10;
                this.displayResult = "Red-green deficiency: 5";
                break;
            case 11:
                this.result = 7;
                this.plate_number = 11;
                this.displayResult = "Red-green deficiency: most people don’t see anything or see something wrong.";
                break;
            case 12:
                this.result = 16;
                this.plate_number = 12;
                this.displayResult = "Red-green deficiency: most people don’t see anything or see something wrong.";
                break;
            case 13:
                this.result = 73;
                this.plate_number = 13;
                this.displayResult = "Red-green deficiency: most people don’t see anything or see something wrong.";
                break;
            case 14:
                this.NotColorBlind = 1;
                break;
            default:
                break;
        }
    };
    ColorblindComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColorblindComponent.prototype, "keyEvent", null);
    ColorblindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colorblind',
            template: __webpack_require__(/*! ./colorblind.component.html */ "./src/app/colorblind/colorblind.component.html"),
            styles: [__webpack_require__(/*! ./colorblind.component.css */ "./src/app/colorblind/colorblind.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorblindComponent);
    return ColorblindComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  font-size: 50px;\n  font-style: normal;\n  text-align: center;\n  color: black;\n  font-family: 'Fredoka One', cursive;\n  margin-top: 100px;\n  margin: auto;\n}\n\n.background {\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgY3Vyc2l2ZTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJhY2tncm91bmQge1xuICBwYWRkaW5nOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  eyeBot\n</head>\n\n<header>\n  <div class=\"background\">\n      eyeBot\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/instructions/instructions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/instructions/instructions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  padding-top: 20px;\n  font-weight: bold;\n  font-size: 50px;\n  font-family: sans-serif;\n  margin: auto;\n  text-align: center;\n}\n\ndiv {\n  padding-top: 50px;\n  font-size: 40px;\n  font-family: sans-serif;\n  text-align: center;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n.next_page {\n  padding-top: 200px;\n  padding-right: 40px;\n  font-family: sans-serif;\n  font-size: 30px;\n  text-align: right;\n  color: Green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y3Rpb25zL2luc3RydWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uZXh0X3BhZ2Uge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogR3JlZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/instructions/instructions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/instructions/instructions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  Instructions\n</header>\n<div>\n  <p *ngIf=\"this.nextInstruction==0\">1. Lean Forward and place your forehead against the marked area. </p>\n  <p *ngIf=\"this.nextInstruction==1\">2. Look into the testing screen</p>\n  <p *ngIf=\"this.nextInstruction==2\">3. Increase the size of of the testing words usign the \"+\" sign on the keyboard, and decrease using the \"-\" sign.</p>\n  <p *ngIf=\"this.nextInstruction==3\">4. Press the \"Spacebar\" key when the words becomes just a little blurry for you.</p>\n</div>\n\n<div class=\"next_page\">\n    <p *ngIf=\"this.nextInstruction==3\"> Press \"Spacebar\" to Start Testing</p>\n    <p *ngIf=\"this.nextInstruction != 3\">Press Right Arrow for next page <img src=\"https://img.icons8.com/ios/50/000000/circled-right.png\"></p>\n</div>\n"

/***/ }),

/***/ "./src/app/instructions/instructions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/instructions/instructions.component.ts ***!
  \********************************************************/
/*! exports provided: KEY_CODE, InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
})(KEY_CODE || (KEY_CODE = {}));
var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
        this.nextInstruction = 0; //variable to increment to the next instruction
    }
    InstructionsComponent.prototype.keyEvent = function (event) {
        console.log('show:', event.keyCode);
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            this.nextInstruction++;
        }
        else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            this.nextInstruction--;
        }
        console.log("In instructions");
        //Limit the instructions from 0 to 3 incremnts
        if (this.nextInstruction > 3) { //if the counter greater than the last instruction decrement it
            this.nextInstruction--;
        }
        else if (this.nextInstruction < 0) { //if the counter less than the last instruction increment it
            this.nextInstruction++;
        }
    };
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']) //use this to listen to the button press and pass the value to "event"
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InstructionsComponent.prototype, "keyEvent", null);
    InstructionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instructions',
            template: __webpack_require__(/*! ./instructions.component.html */ "./src/app/instructions/instructions.component.html"),
            styles: [__webpack_require__(/*! ./instructions.component.css */ "./src/app/instructions/instructions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ }),

/***/ "./src/app/usertest/usertest.component.css":
/*!*************************************************!*\
  !*** ./src/app/usertest/usertest.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".minus {\n  font-size: 150px;\n  text-align: left;\n  display: inline-block;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n}\n\n.plus {\n  font-size: 150px;\n  text-align: right;\n  display: inline-block;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  /* left: 1275px; */\n}\n\n.readings{\n  display: inline-block;\n  padding-top: 140px;\n  text-align: center;\n  /* position: center; */\n}\n\n.results {\n  font-size: 30px;\n  position: center;\n  padding-top: 200px;\n  padding-bottom: 100px;\n}\n\ndiv {\n  /* padding-top: 200px; */\n  text-align: center;\n}\n\nh2 {\n  font-family: sans-serif;\n  margin: auto;\n  text-align: center;\n  color: black;\n}\n\n/*text size for eye test*/\n\n.one{\n  font-size: 9px;\n}\n\n.one-25{\n  font-size: 10px;\n}\n\n.one-50{\n  font-size: 13px;\n}\n\n.one-75{\n  font-size: 14px;\n}\n\n.two-00{\n  font-size: 15px;\n}\n\n.two-25{\n  font-size: 19px;\n}\n\n.two-50{\n  font-size: 23px;\n}\n\n.two-75{\n  font-size: 28px;\n}\n\n.three-25{\n  font-size: 37px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnRlc3QvdXNlcnRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztDQUNWOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCOztBQUdEO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRCwwQkFBMEI7O0FBQzFCO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJ0ZXN0L3VzZXJ0ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWludXMge1xuICBmb250LXNpemU6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuLnBsdXMge1xuICBmb250LXNpemU6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICAvKiBsZWZ0OiAxMjc1cHg7ICovXG59XG5cbi5yZWFkaW5nc3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogcG9zaXRpb246IGNlbnRlcjsgKi9cbn1cblxuLnJlc3VsdHMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG5cbmRpdiB7XG4gIC8qIHBhZGRpbmctdG9wOiAyMDBweDsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKnRleHQgc2l6ZSBmb3IgZXllIHRlc3QqL1xuLm9uZXtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5vbmUtMjV7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm9uZS01MHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ub25lLTc1e1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udHdvLTAwe1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udHdvLTI1e1xuICBmb250LXNpemU6IDE5cHg7XG59XG4udHdvLTUwe1xuICBmb250LXNpemU6IDIzcHg7XG59XG4udHdvLTc1e1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi50aHJlZS0yNXtcbiAgZm9udC1zaXplOiAzN3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/usertest/usertest.component.html":
/*!**************************************************!*\
  !*** ./src/app/usertest/usertest.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h2> {{title}} </h2>\n<div *ngIf=!this.showSelectedResult>\n  <div class=\"minus\">\n      <!-- <img src=\"https://img.icons8.com/metro/24/000000/minus-2-math.png\"> -->\n      <p>-</p>\n  </div>\n  <div class=\"readings\">\n    <p class=\"one\" *ngIf=\"this.show=='1'\">If this text is clear, your eyes will be happiest with this power</p>\n    <p class=\"one-25\" *ngIf=\"this.show=='2'\">If this text is clear, your eyes will be happiest with this power.</p>\n    <p class=\"one-50\" *ngIf=\"this.show=='3'\">If this text is clear, your eyes will be happiest with this power.</p>\n    <p class=\"one-75\" *ngIf=\"this.show=='4'\">If this text is clear, your eyes will be happiest with this power.</p>\n    <p class=\"two-00\" *ngIf=\"this.show=='5'\">If this text is clear, your eyes will be happiest with this power.</p>\n    <p class=\"two-25\" *ngIf=\"this.show=='6'\">If this text is clear, your eyes will be happiest with this power.</p>\n    <p class=\"two-50\" *ngIf=\"this.show=='7'\">If this text is clear, your eyes will be happiest with this power.</p>\n    <p class=\"two-75\" *ngIf=\"this.show=='8'\">If this text is clear, your eyes will be happiest with this power.</p>\n    <p class=\"three-25\" *ngIf=\"this.show=='9'\">If this text is clear, your eyes will be happiest with this power.</p>\n  </div>\n  <div class=\"plus\">\n    <!-- <img src=\"https://img.icons8.com/material/24/000000/hospital.png\"> -->\n    <p>+</p>\n  </div>\n</div>\n\n<div class=\"results\" *ngIf=this.showSelectedResult>\n  <p> Magnification Selected: {{this.selectedMagnification}}x </p>\n</div>\n"

/***/ }),

/***/ "./src/app/usertest/usertest.component.ts":
/*!************************************************!*\
  !*** ./src/app/usertest/usertest.component.ts ***!
  \************************************************/
/*! exports provided: KEY_CODE, UsertestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsertestComponent", function() { return UsertestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["SPACE_BAR"] = 32] = "SPACE_BAR";
    KEY_CODE[KEY_CODE["PLUS_KEY"] = 187] = "PLUS_KEY";
    KEY_CODE[KEY_CODE["MINUS_KEY"] = 189] = "MINUS_KEY";
})(KEY_CODE || (KEY_CODE = {}));
var UsertestComponent = /** @class */ (function () {
    function UsertestComponent() {
        this.show = 1;
        this.selectedMagnification = 1; //default mangificatin is 1;
        this.showSelectedResult = false;
    }
    UsertestComponent.prototype.keyEvent = function (event) {
        console.log('show:', event.keyCode);
        if (event.keyCode === KEY_CODE.PLUS_KEY) {
            this.show++;
        }
        else if (event.keyCode === KEY_CODE.MINUS_KEY) {
            this.show--;
        }
        if (this.show < 1) {
            // console.log('lesthan');
            this.show++;
        }
        else if (this.show > 9) {
            this.show--;
            // console.log('greater');
        }
        console.log(this.show);
        if (event.keyCode == KEY_CODE.SPACE_BAR) {
            this.showSelectedResult = true;
            switch (this.show) {
                case 1:
                    console.log('your need +1.00');
                    this.selectedMagnification = 1.00;
                    break;
                case 2:
                    console.log('your need +1.25');
                    this.selectedMagnification = 1.25;
                    break;
                case 3:
                    console.log('your need +1.50');
                    this.selectedMagnification = 1.50;
                    break;
                case 4:
                    console.log('your need +1.75');
                    this.selectedMagnification = 1.75;
                    break;
                case 5:
                    console.log('your need +2.00');
                    this.selectedMagnification = 2.00;
                    break;
                case 6:
                    console.log('your need +2.25');
                    this.selectedMagnification = 2.25;
                    break;
                case 7:
                    console.log('your need +2.50');
                    this.selectedMagnification = 2.50;
                    break;
                case 8:
                    console.log('your need +2.75');
                    this.selectedMagnification = 2.75;
                    break;
                case 9:
                    console.log('your need +3.25');
                    this.selectedMagnification = 3.25;
                    break;
                default:
                    console.log('error');
                    break;
            }
        }
    };
    UsertestComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']) //use this to listen to the button press and pass the value to "event"
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UsertestComponent.prototype, "keyEvent", null);
    UsertestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usertest',
            template: __webpack_require__(/*! ./usertest.component.html */ "./src/app/usertest/usertest.component.html"),
            styles: [__webpack_require__(/*! ./usertest.component.css */ "./src/app/usertest/usertest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsertestComponent);
    return UsertestComponent;
}());



/***/ }),

/***/ "./src/app/warning/warning.component.css":
/*!***********************************************!*\
  !*** ./src/app/warning/warning.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nheader {\n  padding-top: 20px;\n  font-weight: bold;\n  font-size: 50px;\n  font-family: sans-serif;\n  margin: auto;\n  text-align: center;\n}\n\n.warning_message {\n  padding-top: 20px;\n  font-size: 50px;\n  font-family: sans-serif;\n  margin: auto;\n  text-align: center;\n}\n\n.next_page {\n  padding-top: 200px;\n  padding-right: 40px;\n  font-family: sans-serif;\n  font-size: 30px;\n  text-align: right;\n  color: Green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FybmluZy93YXJuaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC93YXJuaW5nL3dhcm5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndhcm5pbmdfbWVzc2FnZSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5leHRfcGFnZSB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiBHcmVlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/warning/warning.component.html":
/*!************************************************!*\
  !*** ./src/app/warning/warning.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  Disclamer\n</header>\n\n<div class=\"warning_message\">\n  <p>The test result provided by eyeBot is not a replacement for an optometrist and is not a prescription.</p>\n</div>\n\n<div class=\"next_page\">\n  <p>Press \"Spacebar\" to continue. </p>\n</div>\n"

/***/ }),

/***/ "./src/app/warning/warning.component.ts":
/*!**********************************************!*\
  !*** ./src/app/warning/warning.component.ts ***!
  \**********************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WarningComponent = /** @class */ (function () {
    function WarningComponent() {
    }
    WarningComponent.prototype.ngOnInit = function () {
    };
    WarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warning',
            template: __webpack_require__(/*! ./warning.component.html */ "./src/app/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.css */ "./src/app/warning/warning.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WarningComponent);
    return WarningComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/harivanshmareddy/Projects/eyeBot_ipad/eyeBot_test_ipad/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map