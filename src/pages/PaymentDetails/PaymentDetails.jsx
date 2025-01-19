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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function PaymentDetails() {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>Vietinbank</CardTitle>
          <CardDescription>Account Number: 123456789</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <p className="w-32"> A/C Holder</p>
            <p className="text-gray-400"> : Trading with Vagio</p>
          </div>
          <div className="flex items-center">
            <p className="w-32">IFSC</p>
            <p className="text-gray-400"> : VietinbankB000007</p>
          </div>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger>
          <Button className="py-6">Add payment details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PaymentDetails;
