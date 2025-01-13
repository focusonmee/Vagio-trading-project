import React from "react";
import { Activity, Bookmark } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";

function WatchList() {
  const handleRemoveToWatchList = (value) => {
    console.log(value);
  };
  return (
    <div className="p-5 lg:px-20">
      {/* Tiêu đề với icon */}
      <div className="flex items-center gap-2 pb-5">
        <Activity className="w-6 h-6 text-gray-500" />
        <h1 className="font-bold text-3xl">WatchList</h1>
      </div>

      {/* Bảng */}
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
            <TableHead className="text-right text-red-600">REMOVE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    className="w-full h-full rounded-full"
                    src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                  />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>1230124912</TableCell>
              <TableCell>123012491223</TableCell>
              <TableCell>-0.003</TableCell>
              <TableCell className="text-right">$2333</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleRemoveToWatchList(item.id)}
                  variant="ghost"
                  className="p-2 hover:bg-red-100"
                >
                  <Bookmark className="w-5 h-5 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default WatchList;
