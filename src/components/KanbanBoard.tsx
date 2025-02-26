import { useBoardStore } from "@/app/store";

const columns = [
    { id: "todo", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" },
];

export default function KanbanBoard() {
    const { tasks } = useBoardStore();

    return (
        <div className="flex gap-4 p-4">
            {columns.map((col) => (
                <div key={col.id} className="w-1/3 bg-gray-100 p-4 rounded-lg">
                    <h2 className="font-bold mb-2">{col.title}</h2>
                    <div className="min-h-[200px] bg-white p-2 rounded-lg">
                        {tasks
                          .filter((task) => task.columnId === col.id)
                          .map((task) => (
                            <div key={task.id} className="p-2 bg-blue-100 rounded-lg mb-2">
                                {task.title}
                            </div>
                          ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}