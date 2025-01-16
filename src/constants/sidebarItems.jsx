import { IoSettingsOutline } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import { LuUsersRound } from "react-icons/lu";
import { GoProject } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineTaskAlt } from "react-icons/md";
import { PiPackage } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";

export const menuItems = [
  {
    category: "Main Items",
    items: [
      {
        label: "Dashboard",
        icon: <LuLayoutDashboard size={20} />,
        path: "/home",
        id: "home",
      },
      {
        label: "My Tasks",
        icon: <MdOutlineTaskAlt size={20} />,
        path: "my-tasks",
        id: "my-tasks",
      },
      // {
      //   label: "Task Management",
      //   icon: <GrTask size={20} />,
      //   path: "task-management",
      //   id: "task-management",
      // },
      {
        label: "Projects",
        icon: <GoProject size={20} />,
        path: "projects",
        id: "projects",
      },
      {
        label: "Collections",
        icon: <PiPackage size={20} />,
        path: "collections",
        id: "collections",
      },
    ],
  },
  {
    category: "Analytics",
    items: [
      {
        label: "Reports",
        icon: <TbBrandGoogleAnalytics size={20} />,
        path: "reports",
        id: "reports",
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        label: "Announcements",
        icon: <GrAnnounce size={20} />,
        path: "announcements",
        id: "announcements",
      },
      {
        label: "Members",
        icon: <LuUsersRound size={20} />,
        path: "members",
        id: "members",
      },
      {
        label: "Settings",
        icon: <IoSettingsOutline size={20} />,
        path: "settings",
        id: "settings",
      },
    ],
  },
];
