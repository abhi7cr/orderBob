webpackJsonp([2],{

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "{{mode}} User\r\n<div class=\"row\">\r\n  <div class=\"col-6\">\r\n<form class=\"users-form\" [formGroup]=\"usersForm\">\r\n    <div class=\"form-container\">\r\n        <md-input-container class=\"user-full-width\">\r\n            <input mdInput placeholder=\"First Name\"\r\n                    [(ngModel)]=\"user.firstName\"\r\n                   formControlName=\"firstName\">\r\n        </md-input-container>\r\n        <md-input-container class=\"user-full-width\">\r\n            <input mdInput placeholder=\"Last Name\"\r\n                   [(ngModel)]=\"user.lastName\" formControlName=\"lastName\">\r\n        </md-input-container>\r\n        <button md-raised-button [disabled]=\"!usersForm.valid\" (click)=\"createOrUpdate()\">{{mode}}</button>\r\n      </div>\r\n  </form>\r\n  </div>\r\n  <div class=\"col-6\" *ngIf=\"user.userId !== 0\">\r\n    <md-nav-list>\r\n     <md-list-item>\r\n        <a routerLink=\"orders\" routerLinkActive=\"active\">View Orders</a>\r\n      </md-list-item>\r\n      <!--<md-list-item>\r\n        <a routerLink=\"order\" routerLinkActive=\"active\">Create Order</a>\r\n      </md-list-item>-->\r\n    </md-nav-list>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-form {\n  width: 500px; }\n\n.user-full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__("../../../../../src/app/user/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(activatedRoute, userService, router, formBuilder) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.createOrUpdate = function () {
            _this.user.userId ?
                _this.userService.update(_this.user)
                    .subscribe(_this.successCallback, _this.errorCallback) :
                _this.userService.create(_this.user)
                    .subscribe(_this.successCallback, _this.errorCallback);
        };
        this.successCallback = function (res) {
            if (res !== null) {
                _this.user.userId !== undefined ?
                    alert('user updated successfully!') :
                    alert('user created successfully!');
                _this.router.navigateByUrl('/users');
            }
            else {
                alert("Error!user was not created");
            }
        };
        this.errorCallback = function (err) {
            alert("Error:" + err.status + ":" + err.message);
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* UserModel */]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.userId = this.activatedRoute.snapshot.params.id;
        if (this.user.userId) {
            this.mode = 'Update';
            this.userService.getById(Number(this.user.userId))
                .subscribe(function (res) {
                _this.user = res;
            }, function (err) {
                throw err;
            });
        }
        else {
            this.mode = 'Create';
        }
        this.usersForm = this.formBuilder.group({
            firstName: ['John', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            lastName: ['Son', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel(firstName, lastName, userId, orders) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userId = userId;
        this.orders = orders;
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_component__ = __webpack_require__("../../../../../src/app/user/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user.routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_4__users_component__["a" /* UsersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__user_routing_module__["a" /* UserRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/user/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */] },
    { path: 'user/:id/orders', loadChildren: '../order/order.module#OrderModule' }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], UserRoutingModule);

//# sourceMappingURL=user.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        this.headers = null;
        this.get = function () {
            return _this.http.get('/api/users').map(function (res) { return res.json(); });
        };
        this.getById = function (id) {
            return _this.http.get('/api/users/' + id).map(function (res) { return res.json(); });
        };
        this.create = function (user) {
            var userToSend = _this.prepareUserToSend(user);
            return _this.http.post('/api/users', userToSend, { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.update = function (user) {
            var userToSend = _this.prepareUserToSend(user);
            return _this.http.put('/api/users/' + user.userId, userToSend, { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.prepareUserToSend = function (user) {
            return {
                FirstName: user.firstName,
                LastName: user.lastName,
                UserId: user.userId != 0 ? user.userId : null
            };
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/users.component.html":
/***/ (function(module, exports) {

module.exports = " \n<md-list>\n    <md-list-item>\n     <a routerLink=\"user\" routerLinkActive=\"active\">Create User</a>\n   </md-list-item>\n    <p *ngIf=\"isLoading\">Please Wait...</p>\n    <p *ngIf=\"isUsersListEmpty\">{{noUsersMessage}}</p>\n    <md-list-item *ngFor=\"let user of users | async\">\n        <md-icon>person</md-icon>\n        <a routerLink=\"user/{{user.userId}}\" routerLinkActive=\"active\">{{user.firstName}} {{user.lastName}}</a>\n    </md-list-item>\n</md-list>\n\n"

/***/ }),

/***/ "../../../../../src/app/user/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  font-family: 'Dosis', sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.isLoading = true;
        this.noUsersMessage = "Oops! :( You do not have any users yet. Go ahead and add one!";
        this.isUserListEmpty = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.userService.get();
        this.users.subscribe(function (res) {
            _this.isLoading = false;
            if (!res.length)
                _this.isUserListEmpty = true;
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'users',
        template: __webpack_require__("../../../../../src/app/user/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/users.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map