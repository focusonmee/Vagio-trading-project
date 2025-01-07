import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon, MessageCircle, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [showChat, setShowChat] = useState(false); // Chatbox initially hidden
  const [messages, setMessages] = useState([
    { text: "Hi, Vagio", sender: "bot" },
    { text: "You can ask me any questions about crypto", sender: "bot" },
    { text: "Like price, market cap, or something else...", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleCategory = (value) => {
    setCategory(value);
  };

  const toggleChatBox = () => {
    setShowChat((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages((prev) => [...prev, { text: userInput, sender: "user" }]);
      setUserInput("");
      // Simulate bot reply
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "I'm your assistant! Let me help you.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category === "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category === "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628" />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-12323423523.54</span>
                  <span>(-0.231312%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        {showChat && (
          <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900 flex flex-col">
            <div className="flex justify-between items-center border-b px-6 h-[10%]">
              <p className="text-white">Chat Bot</p>
              <Button variant="ghost" size="icon" onClick={toggleChatBox}>
                <XIcon />
              </Button>
            </div>
            <div className="h-[80%] flex flex-col overflow-y-auto gap-3 px-5 py-3">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`${
                    message.sender === "bot"
                      ? "self-start bg-slate-800"
                      : "self-end bg-blue-600"
                  } p-3 rounded-md`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            <div className="h-[10%] border-t flex items-center px-3">
              <Input
                className="w-full outline-none"
                placeholder="Write your question"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <Button variant="default" onClick={handleSendMessage}>
                Send
              </Button>
            </div>
          </div>
        )}

        <div className="relative w-[10rem] cursor-pointer group">
          <Button
            className="w-full h-[3rem] gap-2 items-center"
            onClick={toggleChatBox}
          >
            <MessageCircle
              size={30}
              style={{ fill: "#1e293b" }}
              className="-rotate-90 group-hover:fill-[#1a1a1a]"
            />
            <span className="text-2xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
