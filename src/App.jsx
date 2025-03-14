import "./App.css";
import Navbar from "./pages/Home/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Activity from "./pages/Activity/Activity";
import Wallet from "./pages/Wallet/Wallet";
import WithDraw from "./pages/WithDraw/WithDraw";
import PaymentDetail from "./pages/PaymentDetails/PaymentDetails";
import StockDetails from "./pages/StockDetails/StockDetails";
import WatchList from "./pages/WatchList/WatchList";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import SearchCoin from "./pages/Search/SearchCoin";
import Auth from "./pages/Auth/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./State/Auth/Action";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Thêm useNavigate để điều hướng

  console.log(auth);

  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt, dispatch]);

  // useEffect(() => {
  //   console.log("Auth state:", auth);
  //   if (auth.user?.result) {
  //     console.log("User found! Navigating to /home...");
  //     navigate("/home");
  //   }
  // }, [auth.user, navigate]);
  useEffect(() => {
    console.log("Auth state changed:", auth);
    if (auth.user?.result && window.location.pathname === "/signin") {
      navigate("/home");
    }
  }, [auth.user, navigate]);

  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/withdraw" element={<WithDraw />} />
            <Route path="/payment-details" element={<PaymentDetail />} />
            <Route path="/market/:id" element={<StockDetails />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchCoin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
