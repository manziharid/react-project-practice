
import { useState } from "react";
import { PlusCircle } from "lucide-react";

type HeaderProps = {
    onAddTodo: (todo: string) => void;
};

export default function Header({ onAddTodo }: HeaderProps) {

    const [todo, setTodo] = useState("");

    function handleAddTodo() {
        if (todo.trim() === "") return;

        onAddTodo(todo);
        setTodo("");
    }

    return (
        <div>
            <div className="flex items-center justify-center flex-col gap-6">
                <h5 className="text-9xl font-bold text-gray-200 tracking-tight select-none pt-5">todos</h5>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center w-[595px] h-[50px] px-5 rounded-full shadow-lg border border-gray-100">
                    <input type="text" placeholder="Add todo..." value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") handleAddTodo(); }}
                        className="w-full outline-none"
                    />

                    <button onClick={handleAddTodo}>
                        <PlusCircle className="text-teal-700" />
                    </button>

                </div>
            </div>
        </div>
    );
}
