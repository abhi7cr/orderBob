webpackJsonp([1],{

/***/ "../../../../../src/app/order/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
var LocationModel = (function () {
    function LocationModel(name, street, city, state, zipCode, id) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.id = id;
    }
    return LocationModel;
}());

//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "{{mode}} Order\r\n<div class=\"row\">\r\n    <div class=\"col-6\">\r\n<form [formGroup]=\"ordersForm\">\r\n    <div class=\"form-container\">\r\n        <md-input-container class=\"user-full-width\">\r\n            <input mdInput placeholder=\"Tracking Number\"\r\n                   [(ngModel)]=\"order.trackingId\"\r\n                   formControlName=\"trackingId\">\r\n        </md-input-container>\r\n        <md-input-container class=\"user-full-width\">\r\n            <input mdInput placeholder=\"Location Name\"\r\n                   [(ngModel)]=\"order.location.name\" formControlName=\"locationName\">\r\n        </md-input-container>\r\n        <p>\r\n            <md-input-container class=\"example-full-width\">\r\n            <textarea mdInput placeholder=\"Street\"\r\n            [(ngModel)]=\"order.location.street\" formControlName=\"street\"></textarea>\r\n            </md-input-container>\r\n  </p>\r\n\r\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n    <td><md-input-container class=\"example-full-width\">\r\n      <input mdInput placeholder=\"City\" \r\n      [(ngModel)]=\"order.location.city\" formControlName=\"city\">\r\n\r\n    </md-input-container></td>\r\n    <td><md-input-container class=\"example-full-width\">\r\n      <input mdInput placeholder=\"State\"\r\n      [(ngModel)]=\"order.location.state\" formControlName=\"state\">\r\n    </md-input-container></td>\r\n    <td><md-input-container class=\"example-full-width\">\r\n      <input mdInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\"\r\n      [(ngModel)]=\"order.location.zipCode\" formControlName=\"zipCode\">\r\n      <md-hint *ngIf=\"order.location.zipCode !== undefined\" align=\"end\">\r\n          {{order.location.zipCode.length}} / 5</md-hint>\r\n    </md-input-container></td>\r\n  </tr></table>\r\n        <button md-raised-button [disabled]=\"!ordersForm.valid\" (click)=\"createOrUpdate()\">{{mode}}</button>\r\n    </div>\r\n</form>\r\n    </div>\r\n    <div class=\"col-6\" *ngIf=\"id !== undefined\">\r\n        <button md-raised-button color=\"warn\" (click)=\"delete()\">DELETE</button>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/order/order.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
    function OrderComponent(activatedRoute, orderService, router, formBuilder) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.router = router;
        this.formBuilder = formBuilder;
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
                switch (_this.mode) {
                    case 'Create':
                        {
                            alert('order created successfully!');
                            break;
                        }
                    case 'Update':
                        {
                            alert('order updated successfully!');
                            break;
                        }
                    case 'Delete':
                        {
                            alert('order deleted successfully!');
                            break;
                        }
                    default:
                        alert("invalid operation!");
                }
                _this.router.navigateByUrl('/orders');
            }
            else {
                alert("Error!order was not created/updated");
            }
        };
        this.errorCallback = function (err) {
            alert("Error:" + err.status + ":" + err.message);
        };
        this.order = new __WEBPACK_IMPORTED_MODULE_2__order_model__["a" /* OrderModel */]();
        this.order.location = new __WEBPACK_IMPORTED_MODULE_5__location_model__["a" /* LocationModel */]();
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.params.id;
        //Check whether its an existing order or a new order using the url
        this.mode = isNaN(Number(this.router.url[this.router.url.length - 1])) ?
            "Create" : "Update";
        if (this.id && this.mode === "Update") {
            this.mode = 'Update';
            this.orderService.getById(Number(this.id))
                .subscribe(function (res) {
                _this.order = res;
            }, function (err) {
                throw err;
            });
        }
        else {
            this.order.userId = Number(this.id);
        }
        this.ordersForm = this.formBuilder.group({
            trackingId: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            locationName: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            street: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            state: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            city: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            zipCode: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength]]
        });
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'order',
        template: __webpack_require__("../../../../../src/app/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/order.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object])
], OrderComponent);

var _a, _b, _c, _d;
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
    { path: 'order/:id', component: __WEBPACK_IMPORTED_MODULE_3__order_component__["a" /* OrderComponent */] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_3__order_component__["a" /* OrderComponent */] }
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
            // let searchParams = new URLSearchParams();
            // searchParams.append('userId', userId.toString());
            return _this.http.get('/api/getOrdersByUser/' + userId).map(function (res) { return res.json(); });
        };
        this.getById = function (id) {
            return _this.http.get('/api/getOrder/' + id).map(function (res) { return res.json(); });
        };
        this.create = function (order) {
            var orderToCreate = _this.prepareOrderObjectToSend(order);
            return _this.http.post('/api/createOrder', orderToCreate, { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.update = function (order) {
            var orderToUpdate = _this.prepareOrderObjectToSend(order);
            return _this.http.put('/api/updateOrder/' + order.orderId, orderToUpdate, { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.delete = function (order) {
            var orderToDelete = _this.prepareOrderObjectToSend(order);
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
            request.body = orderToDelete;
            request.method = 'DELETE';
            request.headers = _this.headers;
            return _this.http.delete('/api/deleteOrder', request)
                .map(function (res) { return res.json(); });
        };
        this.prepareOrderObjectToSend = function (order) {
            return {
                TrackingId: order.trackingId,
                UserId: order.userId,
                Id: order.orderId !== 0 ? order.orderId : undefined,
                Location: {
                    Name: order.location.name,
                    City: order.location.city,
                    State: order.location.state,
                    ZipCode: order.location.zipCode,
                    Street: order.location.street,
                    Id: order.location.id !== 0 ? order.location.id : null
                }
            };
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json;charset=utf-8;');
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

module.exports = "<md-list>\n    <md-list-item>\n        <a routerLink=\"order\" routerLinkActive=\"active\">Create Order</a>\n      </md-list-item>\n    <p *ngIf=\"isLoading\">Please Wait...</p>\n    <p *ngIf=\"isOrderListEmpty\">{{noOrdersMessage}}</p>\n    <md-list-item *ngFor=\"let order of orders | async\">\n        <md-icon>perm_identity</md-icon>\n        <a routerLink=\"order/{{order.orderId}}\" routerLinkActive=\"active\">{{order.trackingId}}</a>\n    </md-list-item>\n</md-list>\n\n\n"

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
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.isLoading = true;
        this.noOrdersMessage = "Oops! :( You do not have any orders yet. Go ahead and add one!";
        this.isOrderListEmpty = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.activatedRoute.snapshot.params.id;
        this.orders = this.orderService.get(userId);
        this.orders.subscribe(function (res) {
            _this.isLoading = false;
            if (!res.length)
                _this.isOrderListEmpty = true;
        });
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