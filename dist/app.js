"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TaskList_1 = __importDefault(require("./TaskList"));
var taskList = new TaskList_1.default();
taskList.addTask("Fazer compras");
taskList.addTask("Estudar TypeScript");
console.log("Tarefas pendentes:");
var tasks = taskList.getAllTasks();
tasks.forEach(function (task, index) {
    console.log("".concat(index + 1, ". ").concat(task.getDescription(), " - ").concat(task.isCompleted() ? "Concluída" : "Pendente"));
});
taskList.markTaskAsCompleted(0);
console.log("\nTarefas após marcação como concluída:");
tasks.forEach(function (task, index) {
    console.log("".concat(index + 1, ". ").concat(task.getDescription(), " - ").concat(task.isCompleted() ? "Concluída" : "Pendente"));
});
