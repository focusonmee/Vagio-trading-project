import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Cần thay đổi tùy thuộc vào cấu trúc dự án
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ForgotForm() {
  // Sử dụng hook form
  const form = useForm({
    defaultValues: {
      email: "", // Default value cho trường email
    },
  });

  // Xử lý submit form
  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Email</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="vagio@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Send OTP
          </Button>
          <Button type="submit" className="w-full bg-orange-500">
            Try Using Phone Number
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ForgotForm;
