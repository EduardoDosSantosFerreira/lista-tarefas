"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Task_1 = __importDefault(require("./Task"));
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (description) {
        var task = new Task_1.default(description);
        this.tasks.push(task);
    };
    TaskList.prototype.markTaskAsCompleted = function (index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].markAsCompleted();
        }
    };
    TaskList.prototype.getAllTasks = function () {
        return this.tasks;
    };
    return TaskList;
}());
exports.default = TaskList;
