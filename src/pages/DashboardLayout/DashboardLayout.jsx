import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

const DashboardLayout = () => {
  const location = useLocation();
  const locationParts = location.pathname.split("/");
  const locationName =
    locationParts[2] === "project" ? "projects" : locationParts[2] || "home";

  const [showSidebar, setShowSidebar] = useState(
    () => window.innerWidth >= 992
  );

  const getDashboardTitle = (name) => {
    switch (name) {
      case "notifications":
        return "Notifications";
      case "profile":
        return "Profile";
      case "my-tasks":
        return "My Tasks";
      case "projects":
        return "Projects";
      case "collections":
        return "Collections";
      case "add-item":
        return "New Item";
      case "task":
        return "Task";
      case "reports":
        return "Reports";
      case "member":
        return "Members";
      default:
        return "Dashboard";
    }
  };

  const dashboardTitle = getDashboardTitle(locationName);

  // Use useEffect to update the document title on route change
  useEffect(() => {
    document.title = dashboardTitle;
  }, [dashboardTitle]);

  return (
    <div className="min-h-vh d-flex">
      {/* SIDEBAR */}
      <SideBar
        activePage={locationName}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      {/* CONTENT */}
      <div
        className={`${
          !showSidebar && "expand"
        } home-content min-h-100 d-flex flex-column justify-content-start px-0 px-md-3 w-100`}
      >
        <DashboardHeader
          activePage={locationName}
          title={dashboardTitle}
          setShowSidebar={setShowSidebar}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
