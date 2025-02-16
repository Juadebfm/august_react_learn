import { createContext, useContext, useState } from "react";  // import neccesary dependencies from the react library
import { XIcon } from "lucide-react";

// create modal context
const ModalContext = createContext({
  isOpen: false,
  message: "",
  openModal: (message) => {},
  closeModal: () => {},
});

//Modal provider conponent
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = (message) => {
    setMessage(message);
    setIsOpen(true);
    //prevent scrolling
    document.body.style.overflow = "hidden";
  };
 
  const closeModal = () => {
    setIsOpen(false);
    setMessage("");
    //re-enable the scrolling
    document.body.style.overflow = "unset";
  };

  return (
    <ModalContext.Provider value={{ isOpen, message, openModal, closeModal}}>
      {children}
      {isOpen && <Modal />}
    </ModalContext.Provider>
  );
};

//custom hooks
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalContext is not available");
  }
  return context;
};

// Modal component
const Modal = () => {
  const { message, closeModal,add } = useModal();

  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={closeModal} />

      {/* modal card */}
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <XIcon size={24} />
        </button>

        <div className="mt-7">
          <p className="text-gray-700 dark:text-gray-200">{message}</p>
         
        </div>
      </div>
    </div>
  );
};
