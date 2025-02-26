import { create } from "zustand";

interface Task {
    id: string;
    title: string;
    columnId: string;
}

interface BoardState {
    tasks: Task[]; // An array of Task objects
    addTask: (task: Task) => void // A function to add a new task

    // A function to move a task from one column to another
    moveTask: (taskId: string, columnId: string) => void;
}