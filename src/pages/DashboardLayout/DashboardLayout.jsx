import { useState, useEffect, useRef } from "react";
import SideBar from "../../components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

import { FaArrowUp } from "react-icons/fa";

// FIREBASE
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/AuthProvider";
import { db } from "../../firebase/firebaseConfig";

const DashboardLayout = () => {
  // users data
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState([]);

  const [showScrollButton, setShowScrollButton] = useState(false);
  const viewRef = useRef();

  const location = useLocation();
  const locationParts = location.pathname.split("/");
  const locationName =
    locationParts[2] === "project" ? "projects" : locationParts[2] || "home";

  const [showSidebar, setShowSidebar] = useState(
    () => window.innerWidth >= 992
  );

  const handleScrollUp = () => {
    viewRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // fetch user data
  const fetchUserData = async () => {
    if (!user) return;

    console.log(user);

    try {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log("User details: ", docSnap.data());
      } else {
        console.log("No user data found in Database.");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      case "collection-id":
        return "Collection";
      case "item":
        return "Item";
      case "add-item":
        return "New Item";
      case "task":
        return "Task";
      case "reports":
        return "Reports";
      case "members":
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
      <div
        ref={viewRef}
        className="scroll-to-view bg-secondary position-absolute invisible"
      >
        here
      </div>
      {/* SIDEBAR */}
      <SideBar
        user={userDetails}
        activePage={
          locationName === "collection-id" ? "collections" : locationName
        }
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

      {/* scroll top button  */}
      {showScrollButton && (
        <button
          style={{ bottom: 20, right: 20 }}
          onClick={handleScrollUp}
          className="position-fixed border-0  outline-0 rounded-circle shadow text-white d-inline-flex center bg-secondary p-2"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default DashboardLayout;
