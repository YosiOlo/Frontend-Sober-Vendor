import React from "react";
import TopBar from "../Components/TopBar/TopBar"
import InputForm from "../Components/Products/AddProducts/InputForm";

function ChatsPage() {
  return (
    <div className="text-black">
      <TopBar title="Chats" />
      <InputForm/>
      </div>
  );
}

export default ChatsPage;
