import "./App.css";
import Navbar from "./pages/Home/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Auth />
      {false && (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
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
      )}
    </>
  );
}

export default App;
