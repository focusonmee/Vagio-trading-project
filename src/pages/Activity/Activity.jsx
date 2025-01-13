import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Laugh } from "lucide-react";

function WatchList() {
  return (
    <div className="p-5 lg:px-20">
      {/* Tiêu đề với icon */}
      <div className="flex items-center gap-2 pb-5">
        <Laugh className="w-6 h-6 text-gray-500" />
        <h1 className="font-bold text-3xl">Trading History Activity</h1>
      </div>

      {/* Bảng */}
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Trading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead>Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              {/* Date & Time */}
              <TableCell>
                <p>2025/07/02</p>
                <p className="text-gray-400">12:39:32</p>
              </TableCell>

              {/* Trading Pair */}
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    className="w-full h-full rounded-full"
                    src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                  />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>

              {/* Buy Price */}
              <TableCell>12301</TableCell>

              {/* Sell Price */}
              <TableCell>1230</TableCell>

              {/* Order Type */}
              <TableCell>Market</TableCell>

              {/* Profit/Loss */}
              <TableCell>-0.003</TableCell>

              {/* Value */}
              <TableCell className="text-right">$2333</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default WatchList;
