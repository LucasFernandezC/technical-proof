"use client";
import { Button } from "@/src/components/common/button/button";
import Modal from "@/src/components/common/modal";
import Image from "next/image";
import { useState } from "react";

type ListButtonsProps = {
  addItem: (text: string) => void;
  setNewItem: (newItem: string) => void;
  newItem: string;
  deleteItem: () => void;
  undo: () => void;
  allowDelete: boolean;
  allowUndo: boolean;
};

const ListButtons = ({
  addItem,
  setNewItem,
  newItem,
  deleteItem,
  undo,
  allowDelete,
  allowUndo,
}: ListButtonsProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.currentTarget.value);
  };
  const handleClick = () => {
    addItem(newItem);
    setOpenModal(false);
  };
  return (
    <div className="flex flex-row justify-between mt-[30px]">
      {openModal && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(!openModal)}>
          {" "}
          <div className="flex flex-col gap-[30px]">
            <h3>Add item to list</h3>
            <input
              type="text"
              className="w-[600px] h-[60px] bg-[#F7F7F7] border border-[#CCCCCC] p-1"
              onChange={handleChange}
              autoFocus
              placeholder="Type the text here"
            />
            <div className="flex gap-[30px] justify-end">
              <Button
                modifier="solid"
                onClick={() => handleClick()}
                disabled={newItem.length <= 0}
              >
                Add
              </Button>
              <Button
                modifier="border"
                onClick={() => setOpenModal(!openModal)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="flex gap-[30px]">
        <Button
          modifier="border"
          disabled={!allowUndo}
          onClick={() => undo()}
          aria-label="Deshacer"
        >
          <Image src="../icons/undo.svg" alt="" width={20} height={20} />
        </Button>
        <Button
          modifier="border"
          disabled={!allowDelete}
          onClick={() => deleteItem()}
        >
          delete
        </Button>
      </div>
      <div>
        <Button modifier="solid" onClick={() => setOpenModal(true)}>
          add
        </Button>
      </div>
    </div>
  );
};

export default ListButtons;
