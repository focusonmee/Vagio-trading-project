import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PaymentDetailsForm from "./PaymentDetailsForm";

function PaymentDetails() {
  const [hasPaymentDetails, setHasPaymentDetails] = useState(true);

  const paymentDetails = {
    bank: "Vietinbank",
    accountNumber: "123456789",
    accountHolder: "Trading with Vagio",
    ifsc: "VietinbankB000007",
  };

  const handleAddPaymentDetails = (newDetails) => {
    setHasPaymentDetails(true);
    // Update payment details logic here
  };

  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
      {hasPaymentDetails ? (
        <Card>
          <CardHeader>
            <CardTitle>{paymentDetails.bank}</CardTitle>
            <CardDescription>
              Account Number: {paymentDetails.accountNumber}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <p className="w-32"> A/C Holder</p>
              <p className="text-gray-400"> : {paymentDetails.accountHolder}</p>
            </div>
            <div className="flex items-center">
              <p className="w-32">IFSC</p>
              <p className="text-gray-400"> : {paymentDetails.ifsc}</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Dialog>
          <DialogTrigger>
            <Button className="py-6">Add payment details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Payment Details</DialogTitle>
            </DialogHeader>
            <PaymentDetailsForm onSubmit={handleAddPaymentDetails} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default PaymentDetails;
