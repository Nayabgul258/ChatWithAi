import { IoIosCloseCircle } from "react-icons/io";
import { ChatData } from "../context/ChatContaxt";
import { MdDelete } from "react-icons/md";
import { LoadingSpinner } from "./Loading";
 import { IoLogOut } from "react-icons/io5";
import { UserData } from "../context/UserContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { chat, createChat, createLod, setSelected, deleteChat } = ChatData();

  const { logoutHandler } = UserData();

  const deleteChatHandler = (id) => {
    console.log("Delete clicked", id);
    const isConfirmed = confirm("Are you sure you want to delete this chat?");
    if (isConfirmed) {
      deleteChat(id);
    }
  };



  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800  p-4  transition-transform transform md:relative md:translate-x-0 md:w-1/4 md:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <button
        className="md:hidden p-2 mb-4 bg-gray-700 rounded text-2xl"
        onClick={toggleSidebar}
      >
        <IoIosCloseCircle />
      </button>

      <div className="text-2xl font-semibold mb-6"> ChatBot </div>
      <div className="mb-4">
        <button
          onClick={createChat}
          className="w-full py-2 bg-gray-500 hover:bg-gray-600 rounded  "
        >
          {createLod ? <LoadingSpinner /> : "New chat +"}
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-2">Recent</p>
        <div className="max-h-[500px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar">
          {chat && chat.length > 0
            ? chat.map((e) => (
                <button
                  key={e.id}
                  className="w-full text-left py-2 px-2 bg-gray-700 hover:bg-gray-600 rounded mt-2 flex justify-between items-center"
                  onClick={() => clickEvent(e._id)}
                >
                  <span>{e.latestMessage.slice(0, 40)}</span>
                  <button
                    className="bg-gray-600 text-white text-sm px-3 py-2 rounded-md hover:bg-red-700"
                    onClick={() => deleteChatHandler(e._id)}>
                   <MdDelete/>
                  </button>
                </button>
              ))
            : "All chat are here..."}
        </div>
      </div>

      <div className="absolute bottom-0 mb-6 w-full">
        <button
          className="bg-red-600 text-white text-sm px-3 py-2 rounded-md hover:bg-red-700"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
