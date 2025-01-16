import ProjectCard from "../ui/ProjectCard";
const PinnedProjects = ({ toggleList, containerStyle }) => {
  return (
    <div
      className={`${containerStyle} project-card-container mt-1 mt-md-2 row row-cols-1 px-2 px-md-1 row-cols-md-2 row-cols-lg-${
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
    </div>
  );
};

export default PinnedProjects;
