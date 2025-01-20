import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Bookmark, BookmarkCheck, DotIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";
function StockDetails() {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex gap-5 items-center">
          {/* Avatar */}
          <Avatar>
            <AvatarImage
              src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
              alt="Bitcoin Logo"
            />
          </Avatar>

          {/* Stock Info */}
          <div>
            {/* Name and Symbol */}
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">Bitcoin</p>
            </div>
            {/* Price and Change */}
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">$65645</p>
              <p className="text-red-600">
                <span>-1312323123.567 </span>
                <span>(-0.213123%)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bookmark Button */}
        <div className="flex gap-2 items-center">
          {/* Bookmark Button */}
          <Button className="flex items-center gap-2">
            {true ? (
              <BookmarkCheck className="h-6 w-6" />
            ) : (
              <Bookmark className="h-6 w-6" />
            )}
          </Button>

          {/* Trade Dialog */}
          <Dialog>
            <DialogTrigger>
              <Button>Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-10">
        <StockChart></StockChart>
      </div>
    </div>
  );
}

export default StockDetails;
