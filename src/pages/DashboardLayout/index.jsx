import Announcement from "../../components/dashboard/Announcement";
import OverviewCards from "../../components/dashboard/OverviewCards";
import MemberWidget from "../../components/dashboard/MemberWidget";
import Skeleton from "../../components/ui/Skeleton";
import Loader from "../../components/ui/Loader";

const Dashboard = () => {
  return (
    <div className="dashboard overflow-hidden min-h-vh d-flex flex-column align-items-center pt-2">
      <div className="row w-100">
        <div className="mb-2 col-12 col-md-8 pe-2  ps-2 ps-md-0">
          <OverviewCards />
          <div className="w-100">
            <Loader />
            <Skeleton
              width={90}
              variant="circular"
              height={90}
              marginBottom={1}
            />
            <Skeleton width="100%" height={60} marginBottom={1} />
            <Skeleton width="100%" height={180} />
          </div>
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
