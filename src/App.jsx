import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Chats from "./pages/Chats";
import Coupons from "./pages/Coupons";
import Etalase from "./pages/Etalase";
import OrderReturns from "./pages/OrderReturns";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Revenue from "./pages/Revenue";
import Reviews from "./pages/Reviews";
import Withdrawals from "./pages/WIthdrawals";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/VenDashboard" element={<Dashboard />} />
        <Route path="/VenProducts" element={<Products />} />
        <Route path="/VenChats" element={<Chats />} />
        <Route path="/VenOrders" element={<Orders />} />
        <Route path="/VenOrderReturns" element={<OrderReturns />} />
        <Route path="/VenRevenue" element={<Revenue />} />
        <Route path="/VenEtalase" element={<Etalase />} />
        <Route path="/VenCoupons" element={<Coupons />} />
        <Route path="/VenWithdrawals" element={<Withdrawals />} />
        <Route path="/VenReviews" element={<Reviews />} />
        <Route path="/VenSettings" element={<Settings />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
