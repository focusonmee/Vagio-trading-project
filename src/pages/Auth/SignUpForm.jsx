import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register as registerUser, clearError } from "../../State/Auth/Action";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SignUpForm() {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const { error } = useSelector((state) => ({
    error: state.auth?.error ?? "",
  }));

  // ✅ Reset lỗi khi mở trang
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    console.log("Form Submitted: ", data);
  };

  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="Vagio"
                    {...field}
                    {...form.register("fullName", {
                      required: "Tên không được để trống",
                      minLength: {
                        value: 3,
                        message: "Tên phải có ít nhất 3 ký tự",
                      },
                    })}
                  />
                </FormControl>
                {form.formState.errors.fullName && (
                  <p className="text-red-500">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="vagio@gmail.com"
                    {...field}
                    {...form.register("email", {
                      required: "Email không được để trống",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Email không hợp lệ",
                      },
                    })}
                  />
                </FormControl>

                {form.formState.errors.email && (
                  <p className="text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Password"
                    {...field}
                    {...form.register("password", {
                      required: "Mật khẩu không được để trống",
                      minLength: {
                        value: 6,
                        message: "Mật khẩu phải có ít nhất 6 ký tự",
                      },
                    })}
                  />
                </FormControl>
                {form.formState.errors.password && (
                  <p className="text-red-500">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Register
          </Button>

          {/* ✅ Chỉ hiển thị lỗi khi có nội dung */}
          {error && error.trim() !== "" && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </form>
      </Form>
    </div>
  );
}

export default SignUpForm;
