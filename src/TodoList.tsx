import  {Trash} from 'lucide-react';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoListProps = {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
    onDeleteTodo?: (id: number) => void;
};

export default function TodoList({
    todos,
    onToggleTodo,
    onDeleteTodo
}: TodoListProps) {

    return (
        <div className="flex justify-center mt-8">
        <div className="w-[595px]">
          {todos.map((todo) => (
                    <div key={todo.id}  className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-4">
                            <input type="checkbox" checked={todo.completed} onChange={() => onToggleTodo(todo.id)} className="w-4 h-4 cursor-pointer" />

                            <span className={`text-lg ${
                                todo.completed
                                    ? "line-through text-gray-400"
                                    : "text-gray-700"
                            }`}>
                                {todo.text}
                            </span>

                        </div>

                        <button
                            
                            className="text-red-800 hover:text-red-600"
                        >
                            <Trash strokeWidth={1} nonScalingStroke />
                        </button>

                    </div>
                ))}

            </div>
        </div>
    );
}
