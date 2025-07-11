import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../component/Sidebar";
import { IoMenu } from "react-icons/io5";
import Header from "../component/Header";
import { ChatData } from "../context/ChatContaxt";
import { IoPersonCircle } from "react-icons/io5";
import { RiRobot3Fill } from "react-icons/ri";
import { LoadingBig, LoadingSmall } from "../component/Loading";
import { IoSendSharp } from "react-icons/io5";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chat,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
    setPrompt("");
  };

  const messageContainerRef = useRef();

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col ">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-gray-800 text-2xl"
        >
          <IoMenu />
        </button>

        <div className=" flex-1 p-6 mb-20 md:mb-0">
          <Header />

          {loading ? (
            <LoadingBig />
          ) : (
            <div
              className=" flex-1 p-6 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar "
              ref={messageContainerRef}
            >
              {messages && messages.length > 0 ? (
                messages.map((e, i) => (
                  <div key={i}>
                    <div className=" mb-4  p-4 rounded bg-blue-700 text-white flex gap-5 ">
                      <div className=" bg-white p-2 rounded-full text-black text-2xl h-10 flex text-center ">
                        <IoPersonCircle />
                      </div>
                      {e.question}
                    </div>

                    <div className="mb-4  p-4 rounded bg-gray-700 text-white flex gap-5">
                      <div className=" bg-white p-2 rounded-full text-black text-2xl h-10 ">
                        <RiRobot3Fill />
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: e.answer }}></p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Chat yet</p>
              )}

              {newRequestLoading && <LoadingSmall />}
            </div>
          )}
        </div>
      </div>

      {chat && chat.length === 0 ? (
        ""
      ) : (
        <div className=" fixed bottom-0 right-0 left-auto p-4 bg-gray-900 w-full md:w-[75%]">
          <form
            onSubmit={submitHandler}
            className=" flex justify-center items-center"
          >
            <input
              className=" flex-grow p-3 bg-gray-700 rounded-l  text-white outline-none "
              type="text"
              placeholder="Search Anything"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button className=" p-3 bg-gray-700 rounded-r text-2xl text-white">
              <IoSendSharp />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
