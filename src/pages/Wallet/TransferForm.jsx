import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";

function TransferForm() {
  const [FormData, setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={FormData.amount}
          className="py-7"
          placeholder="$9999"
        ></Input>
      </div>
      <div>
        <h1 className="pb-1">Wallet Id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={FormData.walletId}
          className="py-7"
          placeholder="#AD1234"
        ></Input>
      </div>
      <div>
        <h1 className="pb-1">Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={FormData.purpose}
          className="py-7"
          placeholder="gift for your friend..."
        ></Input>
      </div>
      <DialogClose className="w-full">
        <Button className="w-full py-7">Submit</Button>
      </DialogClose>
    </div>
  );
}

export default TransferForm;
