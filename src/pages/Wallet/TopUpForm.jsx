import React from "react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Circle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

function TopUpForm() {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");

  const handleChangePaymentMethod = (value) => {
    setPaymentMethod(value);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(amount, paymentMethod);
  };
  return (
    <div>
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-7 text-lg "
          placeholder="$9999"
          type="number"
        />
      </div>
      <div>
        <h1 className="pb-">Select payment method</h1>
        <RadioGroup
          onValueChange={(value) => handleChangePaymentMethod(value)}
          className="flex mt-2" // Đặt cha là flex để chia các item thành hàng ngang
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md w-1/2">
            <RadioGroupItem
              icon={Circle}
              className="h-9 w-9"
              value="RAZOR PAY"
              id="r1"
            ></RadioGroupItem>
            <Label htmlFor="r1">
              <div>
                <img
                  className="w-16 h-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnxUoqkgfppoKTswq4JCeDNsL2znberwZvw&s"
                  alt=""
                />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md w-1/2">
            <RadioGroupItem
              icon={Circle}
              className="h-9 w-9"
              value="STRIPE"
              id="r2"
            ></RadioGroupItem>
            <Label htmlFor="r2">
              <div>
                <img
                  className="w-16 h-auto"
                  src="https://jnt.asia/wp-content/uploads/2024/01/Stripe-2.png"
                  alt=""
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 mt-3">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
}

export default TopUpForm;
