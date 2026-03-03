"use client";
import { useState } from "react";
import ListButtons from "./list-buttons/list-buttons";
import List from "./list/list";
import { createItem } from "@/src/utils";
import { Item } from "@/src/types";

const ListContainer = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [lastDeletedItems, setLastDeletedItems] = useState<Item[]>([]);

  const deleteItem = (itemToDelete?: Item) => {
    if (itemToDelete) {
      setItems(items.filter((e) => itemToDelete.id != e.id));
      setLastDeletedItems([itemToDelete]);
      setSelectedItems(selectedItems.filter((el) => el.id != itemToDelete.id));
    } else {
      setItems(
        items.filter((item) => !selectedItems.some((i) => i.id === item.id)),
      );
      setLastDeletedItems(selectedItems);
      setSelectedItems([]);
    }
  };

  const handleSelectedItem = (item: Item) => {
    setSelectedItems((prev) => {
      if (prev.some((it) => it.id === item.id)) {
        return prev.filter((it) => it.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const addItem = (text: string) => {
    setItems([...items, createItem(text)]);
    setNewItem("");
  };

  const handleUndo = () => {
    setItems([...items, ...lastDeletedItems]);
    setLastDeletedItems([]);
  };
  return (
    <section className="flex-col justify-self-center items-center w-[900px] h-[577px] bg-white bg-no-repeat bg-origin-padding shadow-[0px_5px_12px_#0000001F] rounded-[20px] p-[50px]">
      <section className="w-[800px]" aria-labelledby="titulo-principal">
        <header>
          <h1
            id="titulo-principal"
            className="  h-[49px] text-center text-[40px] leading-[44px] font-medium tracking-[0px]  opacity-100 "
          >
            This is a technical proof
          </h1>

          <p className="text-lg  mt-[13px] text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis
            nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam
            nunc, hendrerit posuere augue fames dictumst placerat porttitor, dis
            mi pharetra vestibulum venenatis phasellus.
          </p>
        </header>
      </section>
      <section aria-label="Sección de items">
        <List
          items={items}
          selectedItems={selectedItems}
          deleteItem={deleteItem}
          handleSelectItem={handleSelectedItem}
        />
        <ListButtons
          addItem={addItem}
          setNewItem={setNewItem}
          newItem={newItem}
          deleteItem={deleteItem}
          undo={handleUndo}
          allowDelete={selectedItems.length > 0}
          allowUndo={lastDeletedItems.length > 0}
        />
      </section>
    </section>
  );
};

export default ListContainer;
