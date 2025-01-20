import React from "react";
import { Input } from "@/components/ui/input";

function TransferForm() {
  const [FormData, setFormData] = React.useState({
    amount: "",
  });
  const handleChange = (e) => {
    setFormData;
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
    </div>
  );
}

export default TransferForm;
