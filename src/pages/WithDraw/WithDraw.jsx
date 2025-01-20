import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const WithDraw = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-5">Withdraw</h1>
      <Table className="border w-full text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>June 2, 2024 at 11:43</p>
              </TableCell>
              <TableCell>Bank Transfer</TableCell>
              <TableCell>$1,230</TableCell>
              <TableCell className="text-right">
                <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-600">
                  Pending
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WithDraw;
