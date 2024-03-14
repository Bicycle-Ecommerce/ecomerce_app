import React, { useState } from "react";
import zaloLogo from "../../../../assets/images/zalo.png";
import { PhoneOutlined } from "@ant-design/icons";
import facebookLogo from "../../../../assets/images/facebook-svgrepo-com.svg";
const ButtonForContact = () => {
  const [isClick, setIsClick] = useState(true);
  const Style = {
    style: isClick ? { display: "block" } : { display: "none" },
  };

  return (
    <div className="flex flex-col justify-start">
      <div
        style={Style.style}
        className="shadow-2xl bg-gray-100  p-6 font-medium text-slate-800 w-48 rounded-lg transition-all duration-1000 ease-in-out m-3"
      >
        <a
          href="https://zalo.me/0974294781"
          className="flex items-center mb-3 w-5 -mx-2 no-underline"
        >
          <img src={zaloLogo} alt="zalo" className="w-8 h-8" />
          <span className="ml-3 font-bold">Zalo</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61550772461381"
          className="flex items-center mb-3 w-5 -mx-2 no-underline "
        >
          <img src={facebookLogo} alt="message" className="w-8 h-8" />
          <span className="ml-3 font-bold">Facebook</span>
        </a>
        <a
          href="tel:0974294781"
          className="flex items-center -mx-2 no-underline"
        >
          <PhoneOutlined className="text-2xl" />
          <span className="ml-3 font-bold">0974.294.781</span>
        </a>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-7"
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        Liên Hệ
      </button>
    </div>
  );
};

export default ButtonForContact;
