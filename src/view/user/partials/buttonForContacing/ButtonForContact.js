import React, { useState } from "react";

const ButtonForContact = () => {
  const [isClick, setIsClick] = useState(false);

  const Style = {
    style: isClick ? { display: "block" } : { display: "none" },
  };

  return (
    <div className="flex flex-col">
      <div
        style={Style.style}
        className="shadow-xl bg-blue-300 p-6 font-medium text-slate-800 w-48 rounded-lg transition-all duration-1000 ease-in-out"
      >
        <p className="text-sm text-slate-800">Hotline: 1900 1000</p>
        <p className="text-sm text-slate-800">Email: </p>
        <a href="tel:0948815058">0948815058</a>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-7"
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        Liên hệ
      </button>
    </div>
  );
};

export default ButtonForContact;
