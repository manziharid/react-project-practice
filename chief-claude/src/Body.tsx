import { Plus } from 'lucide-react';
import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((counts) => counts + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <h2 className="p-3 font-bold">Counting rendering: {count}</h2>;
}

export default function Body() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim()) return; // Prevents adding blank items

    setItems([...items, inputValue]);
    setInputValue('');
  }

  return (
    <div>
      
      

      <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 p-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="eg. oregano"
          className="w-[500px] h-[25px] rounded-md border border-solid px-2"
        />
        <button
          type="submit"
          className="w-[150px] h-[25px] text-white bg-black rounded-md gap-1 flex items-center justify-center"
        >
          <Plus />
          <span className="text-white">Add ingredient</span>
        </button>
      </form>

      <div className="flex flex-col items-center justify-center p-2 gap-3">
        <h2 className="font-bold text-2xl text-green-600">Ingredients on hand</h2>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Timer />
    </div>
  );
}
