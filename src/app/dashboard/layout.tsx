import Navbar from "../components/dashboard/navbar/navbar";
import Sidebar from "../components/dashboard/sidebar/sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      <div>
        <Sidebar/>      
      </div>
      <div>
         <Navbar/>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}