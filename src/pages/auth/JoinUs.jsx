import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const positions = [
  {
    id: 1,
    title: "Writer",
    description: "Create compelling articles for our publication.",
    requirements: "Strong writing skills and creativity.",
  },
  {
    id: 2,
    title: "Photographer",
    description: "Capture stunning visuals for our projects.",
    requirements: "Experience in photography and editing.",
  },
  {
    id: 3,
    title: "Graphic Designer",
    description: "Design graphics that bring ideas to life.",
    requirements: "Proficiency in design tools like Adobe Photoshop.",
  },
];

const JoinUsPage = () => {
  const navigate = useNavigate();

  const handleApply = (positionId) => {
    // Logic for applying to a position (e.g., show a form)
    console.log(`Applying for position ID: ${positionId}`);
  };

  return (
    <div className="join-us-page pb-3">
      <div
        onClick={() => navigate(-1)}
        style={{ top: 0, left: 0 }}
        className="m-2 m-md-3 m-lg-4  bg-hover rounded-circle border shadow-sm text-muted position-absolute p-2 d-flex center"
      >
        <IoMdArrowRoundBack size={20} />
      </div>

      <div className="container">
        {/* Hero Section */}
        <header className="text-center my-5">
          <h1 className="fw-bold txt-primary">Join Our Team</h1>
          <p className="text-muted fw-medium fs-5">
            Be a part of something bigger. Explore opportunities to grow and
            contribute.
          </p>
          <img
            src="/images/teamwork-banner.jpg"
            alt="Teamwork"
            className="img-fluid rounded-3 my-3"
          />
        </header>

        {/* Positions Section */}
        <section>
          <h3 className="txt-primary2 fw-bold">Open Positions</h3>
          <div className="row mt-4">
            {positions.map((position) => (
              <div className="col-md-4 mb-4" key={position.id}>
                <div className="bg-white card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h5 className="card-title txt-black fw-bold">
                      {position.title}
                    </h5>
                    <p className="card-text text-muted">
                      {position.description}
                    </p>

                    <p className="text-muted fs-7 mb-1">Skills needed:</p>
                    <small className="text-secondary">
                      {position.requirements}
                    </small>
                    <button
                      className="btn bg-primary-linear text-white w-100 mt-3"
                      onClick={() => handleApply(position.id)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center mt-5">
          <p className="text-secondary">
            We’re excited to have you onboard. Apply now and take the first step
            toward joining us!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default JoinUsPage;
