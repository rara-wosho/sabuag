import { Link } from "react-router-dom";
import { menuItems } from "../constants/sidebarItems";
import sabuag from "../assets/logos/official-sabuag.png";
import pic from "../assets/images/meme.jpg";

// ICONS
import { LuLogOut } from "react-icons/lu";
import { FaRegSquareCaretLeft } from "react-icons/fa6";

const SideBar = ({ activePage, setShowSidebar, showSidebar }) => {
  const handleClick = () => {
    if (window.innerWidth < 992) setShowSidebar(false);
  };

  return (
    <>
      <div
        onClick={() => setShowSidebar((s) => !s)}
        className={`sidebar-backdrop ${
          showSidebar ? "d-block d-lg-none" : "d-none"
        } `}
      ></div>
      <div
        className={`sidebar ${showSidebar ? "" : "shrink"} px-3 py-1 bg-white`}
      >
        {/* Header */}
        <div className="sidebar-header d-flex align-items-center justify-content-between w-100 py-2">
          <div className="sidebar-label ps-2 d-flex align-items-center">
            <div
              className="icon-container d-flex justify-content-center"
              style={{ width: 40, height: 40 }}
            >
              <img className="img-fluid" src={sabuag} alt="error" />
            </div>
            <p className="mb-0 sidebar-label fs-5 txt-primary fw-semibold">
              SABUAG
            </p>
          </div>
          <div
            className="sidebar-toggler text-muted ms-auto pointer d-flex align-items-center"
            style={{ height: 40 }}
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <FaRegSquareCaretLeft size={23} />
          </div>
        </div>

        {/* User Info */}
        <div className="sidebar-user">
          <Link to="profile">
            <div
              onClick={handleClick}
              className="sidebar-item bg-body rounded-3"
            >
              <img
                style={{ width: 40, height: 40, objectFit: "contain" }}
                className="rounded-circle"
                src={pic}
                alt="user account"
              />
              <div className="sidebar-user-info ps-2 sidebar-label">
                <h5 className="txt-primary fs-6 mb-0">Rael De Vera</h5>
                <p className="mb-0 txt-nowrap text-secondary fs-7">
                  Editorial Cartoonist
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* SIDEBAR BODY Menu Items */}
        <div className="sidebar-body">
          {menuItems.map((category) => (
            <div
              key={category.category}
              className="category-border border-top position-relative"
            >
              <p className="mb-1 sidebar-category-label text-nowrap fs-8 fw-semibold mt-3 text-muted">
                {category.category}
              </p>
              {/* Render menu items for each category */}
              {category.items.map((item) => (
                <Link key={item.id} to={item.path}>
                  <div
                    onClick={() => handleClick(item.id)}
                    className={`sidebar-item rounded-3 ${
                      activePage === item.id ? "active shadow" : ""
                    }`}
                  >
                    <div className="icon-container text-muted">{item.icon}</div>
                    <p className="mb-0 sidebar-label ">{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* SIDEBAR Footer */}
        <div className="sidebar-footer border-top pt-2">
          <div className="sidebar-item rounded-3">
            <div className="icon-container text-danger">
              <LuLogOut size={22} />
            </div>
            <p className="mb-0 sidebar-label text-danger">Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
