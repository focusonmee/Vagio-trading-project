import "./Auth.css";
import ForgotForm from "./ForgotForm";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Tự động chuyển hướng đến /signin nếu đường dẫn không hợp lệ
  // useEffect(() => {
  //   if (
  //     !["/signin", "/signup", "/forgotpassword"].includes(location.pathname)
  //   ) {
  //     navigate("/signin", { replace: true });
  //   }
  // }, [location.pathname, navigate]);

  return (
    <div className="h-screen relative authContainer">
      {/* Overlay background */}
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50">
        {/* Centered authentication card */}
        <div className="bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-5 bg-black bg-opacity-50 shadow-2xl shadow-white">
          <h1 className="mt-2 text-4xl font-bold pb-9 text-white">
            Vagio Trading
          </h1>

          <section className="w-full px-6">
            {/* Hiển thị form dựa vào route */}
            {location.pathname === "/" && <SignInForm />}
            {location.pathname === "/forgotpassword" && <ForgotForm />}
            {location.pathname === "/signup" && <SignUpForm />}

            {/* Nút chuyển đổi giữa Sign In và Sign Up */}
            {location.pathname === "/" && (
              <div className="flex items-center justify-center mt-10 space-x-4">
                <Button onClick={() => navigate("/signup")} variant="link">
                  Don&apos;t have an account? Sign Up
                </Button>
              </div>
            )}
            {location.pathname === "/signup" && (
              <div className="mt-2 flex items-center justify-center mt-10 space-x-4">
                <Button onClick={() => navigate("/")} variant="link">
                  Already have an account? Sign In
                </Button>
              </div>
            )}

            {/* Nút Forgot Password */}
            {location.pathname === "/" && (
              <div className="flex items-center justify-center mt-10 space-x-4">
                <Button
                  className="w-full py-5 bg-orange-500"
                  onClick={() => navigate("/forgotpassword")}
                  variant="link"
                >
                  Forgot Password?
                </Button>
              </div>
            )}
            {location.pathname === "/forgotpassword" && (
              <div className="flex items-center justify-center mt-10 space-x-4">
                <Button onClick={() => navigate("/")} variant="link">
                  Back to Login
                </Button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Auth;
