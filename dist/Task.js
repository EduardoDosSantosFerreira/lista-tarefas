"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.completed = false;
    }
    Task.prototype.markAsCompleted = function () {
        this.completed = true;
    };
    Task.prototype.getDescription = function () {
        return this.description;
    };
    Task.prototype.isCompleted = function () {
        return this.completed;
    };
    return Task;
}());
exports.default = Task;
