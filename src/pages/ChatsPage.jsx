import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Index from "../Components/editOrderReturns";

function ChatsPage() {
  return (
    <div>
      <TopBar title="Chats" />
      <div className="p-4">
        
      <Index/>
      </div>
    </div>
  );
}

export default ChatsPage;
