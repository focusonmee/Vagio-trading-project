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
import { useNavigate } from "react-router-dom";

const AssetTable = () => {
  const navigator = useNavigate();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell
                onClick={() => navigator(`/market/bitcoin`)}
                className="font-medium flex items-center gap-2"
              >
                <Avatar className="-z-50">
                  <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"></AvatarImage>
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>1230124912</TableCell>
              <TableCell>123012491223</TableCell>
              <TableCell>-0.003</TableCell>

              <TableCell className="text-right">$23330.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetTable;
