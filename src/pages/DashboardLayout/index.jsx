import Announcement from "../../components/dashboard/Announcement";
import OverviewCards from "../../components/dashboard/OverviewCards";
import MemberWidget from "../../components/dashboard/MemberWidget";
import { PieChart } from "@mui/x-charts/PieChart";
import TopContributors from "../../components/dashboard/TopContributors";

const Dashboard = () => {
  return (
    <div className="dashboard overflow-hidden min-h-vh d-flex flex-column align-items-center pt-2">
      <div className="row w-100">
        <div className="mb-2 col-12 col-md-8 pe-2  ps-2 ps-md-0">
          <OverviewCards />
          {/* <TopContributors /> */}
        </div>
        <div className="mb-2 col-12 col-md-4 pe-md-0 pe-2 ps-2">
          <Announcement />
          <MemberWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
