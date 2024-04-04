import TaskList from "./TaskList";

const taskList = new TaskList();

taskList.addTask("Fazer compras");
taskList.addTask("Estudar TypeScript");

console.log("Tarefas pendentes:");
const tasks = taskList.getAllTasks();
tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.getDescription()} - ${task.isCompleted() ? "Concluída" : "Pendente"}`);
});

taskList.markTaskAsCompleted(0);

console.log("\nTarefas após marcação como concluída:");
tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.getDescription()} - ${task.isCompleted() ? "Concluída" : "Pendente"}`);
});
