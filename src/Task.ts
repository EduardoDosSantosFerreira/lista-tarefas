class Task {
    private description: string;
    private completed: boolean;

    constructor(description: string) {
        this.description = description;
        this.completed = false;
    }

    public markAsCompleted(): void {
        this.completed = true;
    }

    public getDescription(): string {
        return this.description;
    }

    public isCompleted(): boolean {
        return this.completed;
    }
}

export default Task;
