import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

export const Modal = ({ children, isOpen, close }: ModalProps) => {
  const handledCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div className={` relative z-10`}>
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
          isOpen ? "fixed" : "hidden"
        }`}
        onClick={close}
      >
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              onClick={handledCloseModal}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col">
                <h1 className="cursor-pointer self-end" onClick={close}>
                  &times;
                </h1>
                {children}
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div> */}
        </div>
      </div>
    </div>
  );
};
