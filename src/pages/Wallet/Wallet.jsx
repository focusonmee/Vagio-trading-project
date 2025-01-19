import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  CopyIcon,
  WalletIcon,
  RotateCcw,
  DollarSign,
  UploadIcon,
  Download,
  ShuffleIcon,
  Minimize,
} from "lucide-react";
import TransferForm from "./TransferForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TopUpForm from "./TopUpForm";
import WithdrawForm from "./WithdrawForm";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
function Wallet() {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30}></WalletIcon>
                <div>
                  <CardTitle className="text-2xl"> My Wallet</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-200 text-sm">#2906d</p>
                    <CopyIcon
                      size={12}
                      className="cursor-pointer hover:text-slate-300"
                    ></CopyIcon>
                  </div>
                </div>
              </div>
              <div>
                <RotateCcw className="" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-cemter">
              <DollarSign />
              <span className="text-balance font-semibold">20000</span>
            </div>
            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col
                   items-center justify-center rounded-md shadow-slate-800 shadow-md"
                  >
                    <UploadIcon />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col
                   items-center justify-center rounded-md shadow-slate-800 shadow-md"
                  >
                    <Download />
                    <span className="text-sm mt-2">Withdraw</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdraw</DialogTitle>
                  </DialogHeader>
                  <WithdrawForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col
                   items-center justify-center rounded-md shadow-slate-800 shadow-md"
                  >
                    <ShuffleIcon />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Transfer Money</DialogTitle>
                  </DialogHeader>
                  <TransferForm /> {/* Replace with the actual transfer form */}
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <Minimize size={20} className="cursor-pointer h-7 w-7"></Minimize>
          </div>

          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
              <div key={i}>
                <Card className="px-5 flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon className=""></ShuffleIcon>
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h1>Buy Asset</h1>
                      <p className="texts-sm text-gray-500">2024-06-02</p>
                    </div>
                  </div>
                  <div>
                    <p className={`text-green-500`}>999 USD</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
