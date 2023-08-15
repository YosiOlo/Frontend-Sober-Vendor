import Sidebar from "../Components/sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 py-4">{children}</main>
    </div>
  );
}

export default RootLayout;
