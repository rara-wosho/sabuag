import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import ItemCard from "../../components/ui/ItemCard";
import SortingTab from "../../components/ui/SortingTab";
import SearchbarOutline from "../../components/ui/SearchbarOutline";

const CollectionPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* COLLECTION CONTENT */}
      <div className="collection-content bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-4 pb-lg-4">
        <div className="d-flex align-items-center">
          <h4 className="text-muted fw-medium normal-text-size mb-0">
            Rens patricks projects
          </h4>
          <button
            onClick={() => navigate("/home/add-item/12")}
            className="btn pointer ms-auto ps-2 shadow-none btn-sm btn-outline-secondary d-flex align-items-center"
          >
            <FiPlus /> New Item
          </button>
        </div>
        <div className="row row-reverse align-items-center py-2 mb-2 w-100 mx-auto row-cols-1 row-cols-md-2">
          <div className="col mb-2 mb-md-0   px-0">
            <SearchbarOutline placeholder="search items" />
          </div>
          <div className="col px-0 d-flex align-items-center justify-content-start justify-content-md-end">
            <SortingTab />
          </div>
        </div>
        <div className="row px-2 px-md-2 row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col mb-2 px-1">
            <ItemCard />
          </div>
          <div className="col mb-2 px-1">
            <ItemCard />
          </div>
          <div className="col mb-2 px-1">
            <ItemCard />
          </div>
          <div className="col mb-2 px-1">
            <ItemCard />
          </div>
          <div className="col mb-2 px-1">
            <ItemCard />
          </div>
          <div className="col mb-2 px-1">
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
