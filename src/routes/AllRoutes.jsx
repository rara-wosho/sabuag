import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/auth/Sign-in";
import PageNotFound from "../pages/PageNotFound";
import Dashboard from "../pages/DashboardLayout/index";
import ProjectList from "../pages/DashboardLayout/ProjectList";
import Project from "../pages/DashboardLayout/Project";
import MyTasks from "../pages/DashboardLayout/MyTasks";
import DashboardLayout from "../pages/DashboardLayout/DashboardLayout";
import Profile from "../pages/DashboardLayout/Profile";
import Notifications from "../pages/DashboardLayout/Notifications";
import Task from "../pages/DashboardLayout/Task";
import ProtectedRoutes from "./ProtectedRoutes";
import Resources from "../pages/DashboardLayout/Resources";
import CollectionItem from "../pages/DashboardLayout/CollectionItem";
import AddItem from "../pages/DashboardLayout/AddItem";
import JoinUs from "../pages/auth/JoinUs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/join-us" element={<JoinUs />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-tasks" element={<MyTasks />} />
          <Route path="project" element={<Project />} />
          <Route path="task/:taskID" element={<Task />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="collections" element={<Resources />} />
          <Route path="collections/:itemID" element={<CollectionItem />} />
          <Route path="add-item/:collectionID" element={<AddItem />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
