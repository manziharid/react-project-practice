import { useState } from "react";
import { Plus } from "lucide-react";

type AddListProps = {
  onAddList: (title: string) => void;
};

export default function AddListButton({ onAddList }: AddListProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddList(title);
    setTitle("");
    setIsAdding(false);
  };

  if (isAdding) {
    return (
      <form
        onSubmit={handleSubmit}
        className="bg-[#101214] rounded-xl p-3 flex flex-col gap-2 w-[271px] shrink-0"
      >
        <input
          type="text"
          placeholder="Enter list title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          className="w-full rounded-md border-2 border-[#85b8ff] bg-[#22252a] px-2.5 py-1.5 text-sm text-[#dee4ee] outline-none"
        />
        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="rounded bg-[#579dff] px-3 py-1.5 text-xs font-semibold text-[#1d2125] hover:bg-[#85b8ff] cursor-pointer"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setIsAdding(false);
            }}
            className="text-xs text-[#b3b9c4] hover:text-white px-2 py-1 cursor-pointer"
          >
            ✕
          </button>
        </div>
      </form>
    );
  }

  return (
    <button
      onClick={() => setIsAdding(true)}
      className="flex items-center gap-2 w-[271px] shrink-0 rounded-xl bg-white/25 hover:bg-white/30 px-4 py-3 text-sm font-semibold text-white transition-colors cursor-pointer"
    >
      <Plus size={18} />
      <span>Add another list</span>
    </button>
  );
}
