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
var Employee = /** @class */ (function () {
    function Employee(name, age, salary, tasks) {
        if (salary === void 0) { salary = 0; }
        if (tasks === void 0) { tasks = []; }
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.tasks = tasks;
    }
    Employee.prototype.work = function () {
        var currentTask = this.tasks.shift();
        console.log(this.name + currentTask);
        this.tasks.push(currentTask);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.collectSalary = function () {
        console.log(this.name + " received " + this.getSalary() + " this month.");
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(' is working on a simple task.');
        return _this;
    }
    return Junior;
}(Employee));
exports.Junior = Junior;
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(' is working on a complicated task.');
        _this.tasks.push(' is taking time off work.');
        _this.tasks.push(' is supervising junior workers.');
        return _this;
    }
    return Senior;
}(Employee));
exports.Senior = Senior;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, dividend) {
        if (dividend === void 0) { dividend = 0; }
        var _this = _super.call(this, name, age) || this;
        _this.dividend = dividend;
        _this.tasks.push(" schedule a meeting.");
        _this.tasks.push(" is preparing a quarterly meeting.");
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.dividend;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
//# sourceMappingURL=employee.js.map