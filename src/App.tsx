
import { useState } from 'react';
import Header from './header.tsx';
import TodoList from './TodoList.tsx';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export default function App() {

    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(text: string) {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }

    function toggleTodo(id: number) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }
    return (
        <div className="min-h-screen w-full">

            <Header onAddTodo={addTodo} />

            <TodoList
                todos={todos}
                onToggleTodo={toggleTodo}
                // onDeleteTodo={deleteTodo}
            />

        </div>
    );
}
