import { Button } from "@/src/components/common/button/button";
import Modal from "@/src/components/common/modal";
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
        <Button modifier="border" disabled={!allowUndo} onClick={() => undo()}>
          <svg
            height="20px"
            width="20px"
            fill="#324BFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 241.631 241.631"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M44.466,90.562c-12.086,16.382-18.475,35.831-18.475,56.245c0,52.287,42.538,94.825,94.825,94.825 s94.825-42.538,94.825-94.825c0-48.509-36.616-88.621-83.66-94.164V0L44.076,59.481l87.904,59.482V67.779 c38.747,5.449,68.66,38.802,68.66,79.027c0,44.016-35.809,79.825-79.825,79.825s-79.825-35.809-79.825-79.825 c0-17.186,5.375-33.555,15.545-47.339L44.466,90.562z M116.98,90.702l-46.138-31.22l46.138-31.22V90.702z"></path>{" "}
            </g>
          </svg>
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
