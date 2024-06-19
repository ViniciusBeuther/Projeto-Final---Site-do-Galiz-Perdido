import React, { useEffect, useState } from 'react';

const Modal = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 400); // 

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50`} onClick={onClose}>
      <div className={`bg-customBlack-500 p-6 rounded-lg shadow-lg relative max-w-lg w-full mx-4 ${show ? 'animate-scale-up-ver-center' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-2xl font-bold text-red-500 bg-red-300 px-3 py-1 rounded-full hover:bg-red-400 hover:text-red-700" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
