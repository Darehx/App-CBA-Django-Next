import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="https://wa.me/2975686942"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 rounded-full w-13 h-13 text-white hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
