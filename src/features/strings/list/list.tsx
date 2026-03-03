import { Item } from "@/src/types";
import classNames from "classnames";
import { useRef } from "react";

type listProps = {
  items: Item[];
  selectedItems: Item[];
  deleteItem: (item?: Item) => void;
  handleSelectItem: (item: Item) => void;
};

const List = ({
  items,
  selectedItems,
  deleteItem,
  handleSelectItem,
}: listProps) => {
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (item: Item) => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      deleteItem(item);
    } else {
      clickTimeout.current = setTimeout(() => {
        handleSelectItem(item);
        clickTimeout.current = null;
      }, 250);
    }
  };
  return (
    <ul
      className="mt-[35px]  h-[227px] border border-[#CCCCCC] bg-[#F7F7F7] py-[13px] px-[11px] overflow-auto"
      aria-live="polite"
      aria-relevant="additions removals"
      aria-label="Lista de items"
    >
      {items.length > 0 &&
        items.map((item) => {
          return (
            <li
              key={item.id}
              className={classNames(
                "w-full h-[40px] flex  items-center hover:cursor-pointer",
                selectedItems.some((si) => si.id === item.id) &&
                  "bg-[#324BFF] text-white",
              )}
              onClick={() => handleClick(item)}
            >
              <p className="mx-[15px] ">{item.text}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default List;
