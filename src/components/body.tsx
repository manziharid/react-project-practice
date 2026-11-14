import { useState } from 'react';
import {
  SquareKanban,
  ChevronDown,
  Plug,
  Zap,
  TextAlignJustifyCenter,
  Star,
  LockKeyhole,
  UserRoundPlus,
  Ellipsis,
  Plus,
  StickyNotePlus,
} from 'lucide-react';
import backgroundimage from '/src/image/backgroundimage.webp';
import mk from '/src/image/mk.png';
import BodyItem from './BodyItem.tsx';
import AddListButton from './AddListButton.tsx';

type ListData = {
  id: number;
  title: string;
  heading?: string;
  heading2?: string;
  cards: string[];
  count: number;
};

export default function Body() {
  const [lists, setLists] = useState<ListData[]>([
    {
      id: 1,
      title: 'weekely archieve',
      cards: [],
      count: 0,
    },
  ]);

  const handleAddList = (newTitle: string) => {
    const newList: ListData = {
      id: Date.now(),
      title: newTitle,
      cards: [],
      count: 0,
    };
    setLists([...lists, newList]);
  };

  const handleUpdateTitle = (id: number, updatedTitle: string) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, title: updatedTitle } : list
      )
    );
  };

  const handleAddCard = (id: number, newCard: string) => {
    setLists(
      lists.map((list) =>
        list.id === id
          ? {
              ...list,
              cards: [...list.cards, newCard],
              count: list.count + 1,
            }
          : list
      )
    );
  };

  return (
    <div
      className="border-1 border-gray-500 w-[1049px] -mt-25 rounded-xl bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      {/* Top Board Header */}
      <div className="bg-[#8a512b] w-full h-[59px] flex text-white py-2 justify-between px-3">
        <div className="flex gap-2 justify-between items-center">
          <p className="rounded w-[240px] h-[25px] px-4 ml-2 hover:bg-[#807d77] transition-colors">
            my daily activities and recarp
          </p>
          <div className="flex rounded h-[25px] w-[53px] hover:bg-[#807d77] transition-colors items-center justify-center">
            <SquareKanban strokeWidth={1.5} nonScalingStroke size={19} />
            <ChevronDown strokeWidth={1.5} nonScalingStroke size={19} />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center">
          <img src={mk} className="w-[28px] h-[30px]" />
          <Plug strokeWidth={1} nonScalingStroke size={19} />
          <Zap strokeWidth={1} nonScalingStroke size={19} />
          <TextAlignJustifyCenter strokeWidth={1.5} nonScalingStroke size={19} />
          <Star strokeWidth={1} nonScalingStroke size={19} />
          <LockKeyhole strokeWidth={1} nonScalingStroke size={19} />
          <button className="bg-[#dcdfe5] rounded w-[85px] h-[28px] flex gap-2 text-black justify-center items-center">
            <UserRoundPlus size={12} />
            Share
          </button>
          <Ellipsis strokeWidth={1} nonScalingStroke size={19} />
        </div>
      </div>

      {/* Lists Container inside Body */}
      <div className="flex items-start p-4 gap-3 overflow-x-auto min-h-[500px]">
        {lists.map((item) => (
          <BodyItem
            key={item.id}
            Icon={Ellipsis}
            Icons={Plus}
            Iconv={StickyNotePlus}
            title={item.title}
            heading={item.heading}
            heading2={item.heading2}
            cards={item.cards}
            count={item.count}
            onSaveTitle={(newTitle) => handleUpdateTitle(item.id, newTitle)}
            onAddCard={(newCard) => handleAddCard(item.id, newCard)}
          />
        ))}

        <AddListButton onAddList={handleAddList} />
      </div>
    </div>
  );
}
