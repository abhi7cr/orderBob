webpackJsonp([1],{

/***/ "../../../../../src/app/order/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
var LocationModel = (function () {
    function LocationModel(name, street, city, state, zipCode, locationId) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.locationId = locationId;
    }
    return LocationModel;
}());

//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-6\">\r\n<form [formGroup]=\"ordersForm\">\r\n    <div class=\"form-container\">\r\n        <md-input-container class=\"user-full-width\">\r\n            <input mdInput placeholder=\"Tracking Number\"\r\n                   [(ngModel)]=\"order.trackingId\"\r\n                   formControlName=\"trackingId\">\r\n        </md-input-container>\r\n        <md-input-container class=\"user-full-width\">\r\n            <input mdInput placeholder=\"Location Name\"\r\n                   [(ngModel)]=\"order.location.name\" formControlName=\"locationName\">\r\n        </md-input-container>\r\n        <p>\r\n            <md-input-container class=\"example-full-width\">\r\n            <textarea mdInput placeholder=\"Street\"\r\n            [(ngModel)]=\"order.location.street\" formControlName=\"street\"></textarea>\r\n            </md-input-container>\r\n  </p>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><md-input-container class=\"example-full-width\">\r\n      <input mdInput placeholder=\"City\" \r\n      [(ngModel)]=\"order.location.city\" formControlName=\"city\">\r\n\r\n    </md-input-container></td>\r\n    <td><md-input-container class=\"example-full-width\">\r\n      <input mdInput placeholder=\"State\"\r\n      [(ngModel)]=\"order.location.state\" formControlName=\"state\">\r\n    </md-input-container></td>\r\n    <td><md-input-container class=\"example-full-width\">\r\n      <input mdInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\"\r\n      [(ngModel)]=\"order.location.zipCode\" formControlName=\"zipCode\">\r\n      <md-hint *ngIf=\"order.location.zipCode !== undefined\" align=\"end\">\r\n          {{order.location.zipCode.length}} / 5</md-hint>\r\n    </md-input-container></td>\r\n  </tr></table>\r\n        <button md-raised-button [disabled]=\"!ordersForm.valid\" (click)=\"createOrUpdate()\">{{mode}}</button>\r\n    </div>\r\n</form>\r\n    </div>\r\n    <div class=\"col-6\" *ngIf=\"id !== undefined\">\r\n        <button md-raised-button color=\"warn\" (click)=\"delete()\"><md-icon>delete</md-icon></button>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/order/order.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".snackBarMessage {\n  color: #ff5722 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_model__ = __webpack_require__("../../../../../src/app/order/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("../../../../../src/app/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_model__ = __webpack_require__("../../../../../src/app/order/location.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderComponent = (function () {
    function OrderComponent(activatedRoute, orderService, router, formBuilder, snackBar) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.createOrUpdate = function () {
            if (_this.mode === 'Update')
                _this.orderService.update(_this.order)
                    .subscribe(_this.successCallback, _this.errorCallback);
            else
                _this.orderService.create(_this.order)
                    .subscribe(_this.successCallback, _this.errorCallback);
        };
        this.delete = function () {
            _this.mode = 'Delete';
            _this.orderService.delete(_this.order)
                .subscribe(_this.successCallback, _this.errorCallback);
        };
        this.successCallback = function (res) {
            if (res !== null) {
                var snackBarRef = void 0;
                var snackBarConfig = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdSnackBarConfig */]();
                snackBarConfig.extraClasses = ['snackBarMessage'];
                switch (_this.mode) {
                    case 'Create':
                        {
                            snackBarRef = _this.snackBar.open('order created successfully!', 'dismiss', snackBarConfig);
                            _this.onSnackBarActionCallback(snackBarRef);
                            break;
                        }
                    case 'Update':
                        {
                            snackBarRef = _this.snackBar.open('order updated successfully!', 'dismiss', snackBarConfig);
                            _this.onSnackBarActionCallback(snackBarRef);
                            break;
                        }
                    case 'Delete':
                        {
                            snackBarRef = _this.snackBar.open('order deleted successfully!', 'dismiss', snackBarConfig);
                            _this.onSnackBarActionCallback(snackBarRef);
                            break;
                        }
                    default: {
                        snackBarRef = _this.snackBar.open('invalid operation!', 'dismiss', snackBarConfig);
                        _this.onSnackBarActionCallback(snackBarRef);
                    }
                }
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            }
            else {
                alert("Error!Unable to " + _this.mode + " order");
            }
        };
        this.errorCallback = function (err) {
            alert("Error:" + err.status + ":" + err.message);
        };
        this.onSnackBarActionCallback = function (snackBarRef) {
            snackBarRef.onAction().subscribe(function () {
                snackBarRef.dismiss();
            });
        };
        this.order = new __WEBPACK_IMPORTED_MODULE_2__order_model__["a" /* OrderModel */]();
        this.order.location = new __WEBPACK_IMPORTED_MODULE_5__location_model__["a" /* LocationModel */]();
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params.id;
        var route = this.router.url;
        var userIdPath = route.split('/orders')[0].split('users/')[1];
        this.order.userId = Number(userIdPath);
        this.ordersForm = this.formBuilder.group({
            trackingId: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            locationName: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            street: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            state: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            city: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            zipCode: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength]]
        });
        //New order, extract userid from route
        if (this.id === 'new') {
            this.mode = 'Create';
        }
        else
            this.mode = 'Update';
        if (this.mode === "Update") {
            this.mode = 'Update';
            this.orderService.getById(Number(this.id), this.order.userId)
                .subscribe(function (res) {
                if (res !== null)
                    _this.order = res;
            }, function (err) {
                throw err;
            });
        }
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'order',
        template: __webpack_require__("../../../../../src/app/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/order.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdSnackBar */]) === "function" && _e || Object])
], OrderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModel; });
var OrderModel = (function () {
    function OrderModel(trackingId, orderId, userId, location) {
        this.trackingId = trackingId;
        this.orderId = orderId;
        this.userId = userId;
        this.location = location;
    }
    return OrderModel;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orders_component__ = __webpack_require__("../../../../../src/app/order/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_service__ = __webpack_require__("../../../../../src/app/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_routing_module__ = __webpack_require__("../../../../../src/app/order/order.routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OrderModule = (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__orders_component__["a" /* OrdersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__order_routing_module__["a" /* OrderRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */]],
    })
], OrderModule);

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_component__ = __webpack_require__("../../../../../src/app/order/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__order_component__["a" /* OrderComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__order_component__["a" /* OrderComponent */] }
];
var OrderRoutingModule = (function () {
    function OrderRoutingModule() {
    }
    return OrderRoutingModule;
}());
OrderRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], OrderRoutingModule);

//# sourceMappingURL=order.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = (function () {
    function OrderService(http) {
        var _this = this;
        this.http = http;
        this.headers = null;
        this.get = function (userId) {
            return _this.http.get('/api/users/+' + userId + '/orders').map(function (res) { return res.json(); });
        };
        this.getById = function (id, userId) {
            return _this.http.get('/api/users/' + userId + '/orders/' + id).map(function (res) { return res.json(); });
        };
        this.create = function (order) {
            var orderToCreate = _this.prepareOrderObjectToSend(order);
            return _this.http.post('/api/users/' + order.userId + '/orders', orderToCreate, { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.update = function (order) {
            var orderToUpdate = _this.prepareOrderObjectToSend(order);
            return _this.http.put('/api/users/' + order.userId + '/orders', orderToUpdate, { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.delete = function (order) {
            var orderToDelete = _this.prepareOrderObjectToSend(order);
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
            request.body = orderToDelete;
            request.method = 'DELETE';
            request.headers = _this.headers;
            return _this.http.delete('/api/users/' + order.userId + '/orders', request)
                .map(function (res) { return res.json(); });
        };
        this.prepareOrderObjectToSend = function (order) {
            return {
                TrackingId: order.trackingId,
                UserId: order.userId,
                OrderId: order.orderId !== 0 ? order.orderId : undefined,
                Location: {
                    Name: order.location.name,
                    City: order.location.city,
                    State: order.location.state,
                    ZipCode: order.location.zipCode,
                    Street: order.location.street,
                    LocationId: order.location.locationId !== 0 ?
                        order.location.locationId : null
                }
            };
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/order/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list>\n    <md-list-item>\n        <div mdTooltip=\"New Order\" [mdTooltipPosition]=\"position\">\n            <a routerLink=\"new\" routerLinkActive=\"active\"><md-icon>add_box</md-icon></a>\n        </div>\n      </md-list-item>\n    <p *ngIf=\"isLoading\">Please Wait...</p>\n    <p *ngIf=\"isOrderListEmpty\">{{noOrdersMessage}}</p>\n    <md-list-item *ngFor=\"let order of pagedOrders\">\n        <md-icon>description</md-icon>\n        <a routerLink=\"{{order.orderId}}\" routerLinkActive=\"active\">{{order.trackingId}}</a>\n    </md-list-item>\n</md-list>\n<md-paginator [length]=\"orders.length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"onPageOptionsChange($event)\">\n</md-paginator>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/order/orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__("../../../../../src/app/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = (function () {
    function OrdersComponent(orderService, activatedRoute) {
        var _this = this;
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.isLoading = true;
        this.noOrdersMessage = "Oops! :( You do not have any orders yet. Go ahead and add one!";
        this.isOrderListEmpty = false;
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.position = 'after';
        this.onPageOptionsChange = function (event) {
            _this.pageSize = event.pageSize;
            var pageIndex = event.pageIndex;
            var startIndex = (pageIndex) * _this.pageSize;
            _this.pagedOrders = _this.orders.slice(startIndex, startIndex + _this.pageSize);
        };
        this.orders = new Array();
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.activatedRoute.snapshot.params.id;
        var ordersSubscription = this.orderService.get(userId);
        ordersSubscription.subscribe(function (res) {
            _this.isLoading = false;
            _this.orders = res;
            if (!_this.orders.length)
                _this.isOrderListEmpty = true;
            else
                _this.pagedOrders = _this.orders.slice(0, 10);
        });
    };
    OrdersComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'orders',
        template: __webpack_require__("../../../../../src/app/order/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/orders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], OrdersComponent);

var _a, _b;
//# sourceMappingURL=orders.component.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map