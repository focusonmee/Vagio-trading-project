import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VerifiedIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AccountVerificationForm from "./AccountVerificationForm";
import { useSelector } from "react-redux";

function Profile() {
  const { auth } = useSelector((store) => store);
  const handleEnableTwoStepVerification = (data) => {
    console.log("con cak");
  };
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                {/* <div className="flex">
                  <p className="w-[9rem]">Email : </p>
                  <p className="text-gray-500">sunny.huytran@gmail.com</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name : </p>
                  <p className="text-gray-500">Vagio</p>
                </div>

                <div className="flex">
                  <p className="w-[9rem]">Date Of Birth : </p>
                  <p className="text-gray-500">22/03/2006</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">National : </p>
                  <p className="text-gray-500">VietNam</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Email : </p>
                  <p className="text-gray-500">sunny.huytran@gmail.com</p>
                </div> */}
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email : </p>
                  <p className="text-gray-500">{auth.user?.result?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name : </p>
                  <p className="text-gray-500">{auth.user?.result?.fullName}</p>
                </div>

                {/* <div className="flex">
                  <p className="w-[9rem]">Date Of Birth : </p>
                  <p className="text-gray-500"></p>
                </div> */}
                {/* <div className="flex">
                  <p className="w-[9rem]">National : </p>
                  <p className="text-gray-500">VietNam</p>
                </div> */}
                {/* <div className="flex">
                  <p className="w-[9rem]">Email : </p>
                  <p className="text-gray-500">sunny.huytran@gmail.com</p>
                </div> */}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle className="font-bold">2 Step Verification</CardTitle>
                {true ? (
                  <Badge className="bg-green-500">
                    <VerifiedIcon></VerifiedIcon>
                    <span> Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                {" "}
                <Dialog>
                  <DialogTrigger>
                    <Button>Enabled Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify your account</DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm
                      handleSubmit={handleEnableTwoStepVerification}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
