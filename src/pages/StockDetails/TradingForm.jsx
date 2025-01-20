import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function TradingForm() {
  const [orderType, setOrderType] = useState("BUY");

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="space-y-10 p-5">
      {/* Nhập số lượng */}
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none border rounded-lg px-3"
            placeholder="Enter Amount..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div className="border rounded-md w-36 h-14 flex items-center justify-center">
            <p className="text-2xl">12313</p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-600 text-center pt-4">
            Insufficient wallet balance to buy
          </h1>
        )}
      </div>

      {/* Thông tin về Ethereum */}
      <div className="flex gap-5 items-center">
        <Avatar>
          <AvatarImage src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628" />
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">ETH</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">Ethereum</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">5464</p>
            <p className="text-red-600 text-sm">
              <span>-12323423523.54</span>
              <span>(-0.231312%)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Thông tin bổ sung */}
      <div className="flex items-center justify-between">
        <p className="font-medium text-gray-700">Order Type</p>
        <p className="font-semibold text-gray-800">Market Order</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-medium text-gray-700">
          {orderType === "BUY" ? "Available Cash" : "Available Quantity"}
        </p>
      </div>

      {/* Nút hành động */}
      <div className="space-y-4">
        <Button
          className={`w-full py-6 rounded-lg ${
            orderType === "SELL"
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          } text-white font-bold transition-all`}
        >
          {orderType === "SELL" ? "Sell Now" : "Buy Now"}
        </Button>
        <Button
          onClick={() => setOrderType(orderType === "BUY" ? "SELL" : "BUY")}
          variant="outline"
          className="w-full py-6 border rounded-lg hover:bg-gray-500 transition-all"
        >
          {orderType === "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
}

export default TradingForm;
