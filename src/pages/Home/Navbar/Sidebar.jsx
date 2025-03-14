import {
  HomeIcon,
  LayoutDashboard,
  Activity,
  Wallet,
  Laugh,
  DollarSign,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../../State/Auth/Action";
import { useDispatch } from "react-redux";

const menu = [
  { name: "Home", path: "/home", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <Laugh className="h-6 w-6" />,
  },
  { name: "Wallet", path: "/wallet", icon: <Wallet className="h-6 w-6" /> },
  {
    name: "Payment Detail",
    path: "/payment-details", // Updated to match App route
    icon: <DollarSign className="h-6 w-6" />,
  },
  { name: "Withdraw", path: "/withdraw", icon: <LogOut className="h-6 w-6" /> },
  { name: "Profile", path: "/profile", icon: <User className="h-6 w-6" /> },
  { name: "Logout", path: "#", icon: <LogOut className="h-6 w-6" /> },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Thêm useDispatch()

  const handleLogout = () => {
    dispatch(logout()); // Gửi action logout
    localStorage.removeItem("jwt"); // Xóa token khỏi localStorage
    navigate("/signin"); // Chuyển hướng về trang đăng nhập
  };

  return (
    <div className="mt-10 space-y-5">
      {menu.map((item) => (
        <div key={item.name} className="w-full">
          <Button
            variant={"outline"}
            className="flex items-center gap-5 py-6 w-full"
            onClick={() => {
              if (item.name === "Logout") {
                handleLogout();
              } else {
                navigate(item.path);
              }
            }}
          >
            <span className="w-8">{item.icon}</span>
            <p>{item.name}</p>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
