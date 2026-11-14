import { useState } from "react";
import type { LucideIcon } from "lucide-react";

type Item = {
  Icon: LucideIcon;
  title: string;
  heading?: string;
  heading2?: string;
  cards?: string[];
  count: number;
  Icons: LucideIcon;
  Iconv: LucideIcon;
  onSaveTitle?: (newTitle: string) => void;
  onAddCard?: (newCard: string) => void;
};

export default function BodyItem({
  Icon,
  title,
  heading,
  heading2,
  cards = [],
  count,
  Icons,
  Iconv,
  onSaveTitle,
  onAddCard,
}: Item) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardText, setCardText] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentTitle.trim()) return;
    if (onSaveTitle) onSaveTitle(currentTitle);
    setIsEditing(false);
  };

  const handleSaveCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardText.trim()) return;
    if (onAddCard) onAddCard(cardText);
    setCardText("");
    setIsAddingCard(false);
  };

  return (
    <div className="bg-[#101214] rounded-xl p-3 flex flex-col gap-2 w-[271px] shrink-0 text-[#b3b9c4]">
      {/* Title Row */}
      {isEditing ? (
        <form onSubmit={handleSave} className="flex flex-col gap-2 px-1 py-1">
          <input
            type="text"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            autoFocus
            className="w-full rounded-md border-2 border-[#85b8ff] bg-[#22252a] px-2.5 py-1 text-sm text-[#dee4ee] outline-none"
          />
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="rounded bg-[#579dff] px-3 py-1 text-xs font-semibold text-[#1d2125] hover:bg-[#85b8ff] cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentTitle(title);
                setIsEditing(false);
              }}
              className="text-xs text-[#b3b9c4] hover:text-white px-1 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between px-1 py-1">
          <p
            onClick={() => setIsEditing(true)}
            title="Click to edit title"
            className="text-sm font-semibold text-[#dee4ee] cursor-pointer hover:opacity-80 flex-1"
          >
            {currentTitle}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-sm text-[#b3b9c4]">{count}</p>
            <Icon
              size={16}
              className="text-[#b3b9c4] hover:text-white cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Cards Section */}
      {(heading || heading2 || cards.length > 0) && (
        <div className="flex flex-col gap-1.5 w-full">
          {heading && (
            <button className="text-left px-3 rounded-lg bg-[#22252a] w-full h-[38px] text-sm text-[#dee4ee] font-normal hover:bg-[#2c3036] transition-colors">
              {heading}
            </button>
          )}
          {heading2 && (
            <button className="text-left px-3 rounded-lg bg-[#22252a] w-full h-[38px] text-sm text-[#dee4ee] font-normal hover:bg-[#2c3036] transition-colors">
              {heading2}
            </button>
          )}
          {cards.map((card, index) => (
            <button
              key={index}
              className="text-left px-3 py-2 rounded-lg bg-[#22252a] w-full min-h-[38px] text-sm text-[#dee4ee] font-normal hover:bg-[#2c3036] transition-colors break-words"
            >
              {card}
            </button>
          ))}
        </div>
      )}

      {/* Add Card Form or Footer */}
      {isAddingCard ? (
        <form onSubmit={handleSaveCard} className="flex flex-col gap-2 mt-1">
          <input
            type="text"
            placeholder="Enter a title for this card..."
            value={cardText}
            onChange={(e) => setCardText(e.target.value)}
            autoFocus
            className="w-full rounded-md border-2 border-[#85b8ff] bg-[#22252a] px-2.5 py-1.5 text-sm text-[#dee4ee] outline-none"
          />
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="rounded bg-[#579dff] px-3 py-1 text-xs font-semibold text-[#1d2125] hover:bg-[#85b8ff] cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setCardText("");
                setIsAddingCard(false);
              }}
              className="text-xs text-[#b3b9c4] hover:text-white px-2 py-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between mt-1 px-1 pt-1">
          <div
            onClick={() => setIsAddingCard(true)}
            className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff0a] py-1 px-2 rounded-md -ml-2 transition-colors flex-1"
          >
            <Icons size={16} className="text-[#b3b9c4]" />
            <p className="text-sm font-medium text-[#b3b9c4]">Add a card</p>
          </div>
          <Iconv
            size={16}
            className="text-[#b3b9c4] cursor-pointer hover:text-white"
          />
        </div>
      )}
    </div>
  );
}
