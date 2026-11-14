import { BluetoothConnected } from "lucide-react";
import React, { useState } from "react";

export default function Testing() {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const addBtn = () => {
    setShowBtn(true);
  };

  return (
    <div className="bg-red-500 w-[300px] p-4">
      <div className="w-[200px] mb-2">
        {showBtn && (
          <button className="flex items-center gap-2 bg-white px-3 py-1 rounded">
            <BluetoothConnected className="w-4 h-4" />
            Connected
          </button>
        )}
      </div>

      <div>
        <button
          onClick={addBtn}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Add new button
        </button>
      </div>
    </div>
  );
}
