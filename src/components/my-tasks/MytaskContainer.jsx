import MytaskCard from "./MytaskCard";

function MytaskContainer() {
  return (
    <div className="row row-cols-1">
      <div className="col px-2">
        <MytaskCard />
      </div>
      <div className="col px-2">
        <MytaskCard />
      </div>
    </div>
  );
}

export default MytaskContainer;
