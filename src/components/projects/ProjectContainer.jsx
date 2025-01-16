import { useState } from "react";
import AOS from "aos";
import { Skeleton } from "@mui/material";

import ProjectCard from "../ui/ProjectCard";
const ProjectContainer = ({ toggleList }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    AOS.refresh();
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return (
      <div
        className={`loading-container mt-2 row row-cols-1 row-cols-md-2 row-cols-lg-${
          toggleList ? "2" : "4"
        } `}
      >
        <div className="col mb-3">
          {!toggleList && (
            <Skeleton variant="rounded" width="100%" height={90} />
          )}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </div>
        <div className="col mb-3">
          {!toggleList && (
            <Skeleton variant="rounded" width="100%" height={90} />
          )}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </div>
        <div className="col mb-3">
          {!toggleList && (
            <Skeleton variant="rounded" width="100%" height={90} />
          )}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </div>
        <div className="col mb-3">
          {!toggleList && (
            <Skeleton variant="rounded" width="100%" height={90} />
          )}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </div>
      </div>
    );
  }

  return (
    <div
      //   data-aos="fade-up"
      //   data-aos-duration="600"
      className={`project-card-container mt-1 mt-md-2 row row-cols-1 px-2 px-md-1 row-cols-md-2 row-cols-lg-${
        toggleList ? "2" : "4"
      } `}
    >
      <div className="mb-md-3 mb-2 px-1 px-md-2 col">
        <ProjectCard
          toggleList={toggleList}
          number={1}
          title="Volume 2"
          value={100}
        />
      </div>
      <div className="mb-md-3 mb-2 px-1 px-md-2 col">
        <ProjectCard
          toggleList={toggleList}
          number={2}
          title="Intramurals"
          value={45}
        />
      </div>
      <div className="mb-md-3 mb-2 px-1 px-md-2 col">
        <ProjectCard
          toggleList={toggleList}
          number={3}
          title="Week of welcome"
          value={95}
        />
      </div>
      <div className="mb-md-3 mb-2 px-1 px-md-2 col">
        <ProjectCard
          toggleList={toggleList}
          number={4}
          title="Week of welcome day 2"
          value={33}
        />
      </div>
      <div className="mb-md-3 mb-2 px-1 px-md-2 col">
        <ProjectCard
          toggleList={toggleList}
          number={5}
          title="Year end party"
          value={67}
        />
      </div>
      <div className="mb-md-3 mb-2 px-1 px-md-2 col">
        <ProjectCard
          toggleList={toggleList}
          number={6}
          title="College Days"
          value={10}
        />
      </div>
      <div className="mb-md-3 mb-2 px-1 px-md-2 col">
        <ProjectCard
          toggleList={toggleList}
          number={7}
          title="IT days"
          value={78}
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
