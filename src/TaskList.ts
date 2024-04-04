import Task from "./Task";

class TaskList {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    public addTask(description: string): void {
        const task = new Task(description);
        this.tasks.push(task);
    }

    public markTaskAsCompleted(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].markAsCompleted();
        }
    }

    public getAllTasks(): Task[] {
        return this.tasks;
    }
}

export default TaskList;
