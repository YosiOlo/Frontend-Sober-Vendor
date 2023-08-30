import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardPage from "./pages/DashboardPage";
import ChatsPage from "./pages/ChatsPage";
import CouponsPage from "./pages/CouponsPage";
import EtalasePage from "./pages/EtalasePage";
import OrderReturnsPage from "./pages/OrderReturnsPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import RevenuePage from "./pages/RevenuePage";
import ReviewsPage from "./pages/ReviewsPage";
import WithdrawalsPage from "./pages/WIthdrawalsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/VenDashboard" element={<DashboardPage />} />
        <Route path="/VenProducts" element={<ProductsPage />} />
        <Route path="/VenChats" element={<ChatsPage />} />
        <Route path="/VenOrders" element={<OrdersPage />} />
        <Route path="/VenOrderReturns" element={<OrderReturnsPage />} />
        <Route path="/VenRevenue" element={<RevenuePage />} />
        <Route path="/VenEtalase" element={<EtalasePage />} />
        <Route path="/VenCoupons" element={<CouponsPage />} />
        <Route path="/VenWithdrawals" element={<WithdrawalsPage />} />
        <Route path="/VenReviews" element={<ReviewsPage />} />
        <Route path="/VenSettings" element={<SettingsPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
