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

/* Create Zustand store using the `create` function */
export const useBoardStore = create<BoardState>((set) => ({
    // The initial state of the store includes two tasks
    tasks: [
      { id: "1", title: "Task 1", columnId: "todo" },
      { id: "2", title: "Task 2", columnId: "in-progress" },
    ],
    // Takes a `task` object as an argument and adds it to the `tasks` array in the state.
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    
    /*
    The `moveTask` function takes a `taskId` and a `columnId` as arguments.
    It updates the `columnId` of the task with the matching `taskId`.
    The `set` function updates the state with the modified tasks array.
    */
    moveTask: (taskId, columnId) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, columnId } : task
        ),
      })),
  }));
  