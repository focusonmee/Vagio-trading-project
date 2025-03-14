import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { login } from "../../State/Auth/Action";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Khởi tạo navigate

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(login(data, navigate)); // ✅ Bây giờ navigate đã được định nghĩa
  };

  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignInForm;
