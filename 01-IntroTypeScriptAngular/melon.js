"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this._element = this.constructor.name.slice(0, -5);
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: true,
        configurable: true
    });
    Melon.prototype.toString = function () {
        return "Element: " + this._element + "\n" +
            ("Sort: " + this.melonSort + "\n") +
            ("Element Index: " + this.elementIndex + ";");
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Airhmelon = /** @class */ (function (_super) {
    __extends(Airhmelon, _super);
    function Airhmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Airhmelon;
}(Melon));
exports.Airhmelon = Airhmelon;
var Melonlemonmelon = /** @class */ (function (_super) {
    __extends(Melonlemonmelon, _super);
    function Melonlemonmelon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._element = 'Water';
        _this._elementsData = ['Fire', 'Earth', 'Air', 'Water'];
        return _this;
    }
    Melonlemonmelon.prototype.morph = function () {
        this._element = this._elementsData.shift();
        this._elementsData.push(this._element);
    };
    return Melonlemonmelon;
}(Watermelon));
exports.Melonlemonmelon = Melonlemonmelon;
//# sourceMappingURL=melon.js.map