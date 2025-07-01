import React from "react";
import { ChatData } from "../context/ChatContaxt";

const Header = () => {
  const { chat } = ChatData();
  return (
    <div>
      <p className=" text-lg mb-6">Hello, How Can i help you ?</p>
      {chat && chat.length === 0 && (
        <p className=" text-lg mb-6">Create a new Chat to continue </p>
      )}
    </div>
  );
};

export default Header;
