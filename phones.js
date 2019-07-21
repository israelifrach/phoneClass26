"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var device = /** @class */ (function () {
    function device(Model, NumOfApp, OpSystem, ScreenSize, Manufacturer) {
        this.Model = Model;
        this.NumOfApp = NumOfApp;
        this.OpSystem = OpSystem;
        this._ScreenSize = ScreenSize;
        this.Manufacturer = Manufacturer;
        device.counter++;
        if (this.Manufacturer.CompName == 'Apple') {
            device.AppleCounter++;
        }
    }
    Object.defineProperty(device.prototype, "ScreenSize", {
        get: function () {
            return this._ScreenSize;
        },
        set: function (x) {
            if (x < 5 || x > 20) {
                throw "the screen size have to be between 5-20 inch";
            }
            else {
                this._ScreenSize = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    device.prototype.printDevice = function () {
        return "Model: " + this.Model + ", Number of apps: " + this.NumOfApp + ", \n        operatos system: " + this.OpSystem + ", screen size" + this.ScreenSize + "},number of devices" + device.counter;
    };
    device.counter = 0;
    device.AppleCounter = 0;
    device.AndroidCounter = device.counter - device.AppleCounter;
    return device;
}());
var Tablet = /** @class */ (function (_super) {
    __extends(Tablet, _super);
    function Tablet(Model, NumOfApp, OpSystem, ScreenSize, Pro, Manufacturer) {
        var _this = _super.call(this, Model, NumOfApp, OpSystem, ScreenSize, Manufacturer) || this;
        _this.Pro = Pro;
        return _this;
    }
    Tablet.prototype.printTablet = function () {
        return this.printDevice() + ", " + this.Manufacturer.printMan() + " pro" + this.Pro;
    };
    return Tablet;
}(device));
var CellPhone = /** @class */ (function (_super) {
    __extends(CellPhone, _super);
    function CellPhone(Model, NumOfApp, OpSystem, ScreenSize, SimComp, Manufacturer) {
        var _this = _super.call(this, Model, NumOfApp, OpSystem, ScreenSize, Manufacturer) || this;
        _this.SimComp = SimComp;
        return _this;
    }
    CellPhone.prototype.printCellPhone = function () {
        return this.printDevice() + ", " + this.Manufacturer.printMan() + ", sim company" + this.SimComp;
    };
    return CellPhone;
}(device));
var Manufacturer = /** @class */ (function () {
    function Manufacturer(Country, EsYear, ServiceEr, WebAd, CompName) {
        this.Country = Country;
        this.EsYear = EsYear;
        this.ServiceEr = ServiceEr;
        this.WebAd = WebAd;
        this.CompName = CompName;
    }
    Manufacturer.prototype.printMan = function () {
        return "country: " + this.Country + ", establish year: " + this.EsYear + ", service erya: " + this.ServiceEr + ", website" + this.WebAd + ", company" + this.CompName;
    };
    return Manufacturer;
}());
var apple = new Manufacturer('israel', 1989, ['israel', 'jorden'], 'www.google.com', 'apple');
var device1 = new CellPhone('iPhone X', 40, 'ios', 5, "orange", apple);
console.log(device1.printCellPhone());
