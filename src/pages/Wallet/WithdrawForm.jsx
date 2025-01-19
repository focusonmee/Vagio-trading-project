import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

function WithdrawForm() {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");

  const handleChangePaymentMethod = (value) => {
    setPaymentMethod(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Withdrawal Amount:", amount, "Payment Method:", paymentMethod);
    // Add your API call or other logic here
  };

  return (
    <div className="withdraw-form">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available balance</p>
        <p>$9000</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col  mt-5">
        <h1 className="text-lg font-semibold mb-2">Enter Withdrawal amount</h1>
        <div className="flex items-center justify-center w-full mt-2">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawInput py-3 border-none outline-none focus:outline-none px-3 text-2xl text-center"
            placeholder="Enter amount"
            type="number"
          />
        </div>
        <div>
          <p className="pb-2">Transfer to</p>
          <div className="flex items-center gap-5 border px-5 py-2 rounded-md w-28 h-auto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVYXkBd8LVexj7vfVHa7uKTBsYOG0LOQU8w&s"></img>
            <div className="ml-5">
              <p className="text-xl font-bold">Vietinbank</p>
              <p>**********1651</p>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full flex justify-center">
          <DialogClose className="w-full">
            <Button className="w-full py-7">Withdrawa</Button>
          </DialogClose>
        </div>
      </form>
    </div>
  );
}

export default WithdrawForm;
