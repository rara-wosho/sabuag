import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import CollectionCard from "../../components/ui/CollectionCard";
import ItemCard from "../../components/ui/ItemCard";
import SortingTab from "../../components/ui/SortingTab";
import SearchbarOutline from "../../components/ui/SearchbarOutline";
import CollectionForm from "../../components/collections/CollectionForm";
import { useNavigate } from "react-router-dom";

function Resources() {
  const [resources, setResources] = useState([1]);
  const [collectionForm, setCollectionForm] = useState(false);
  const navigate = useNavigate();

  const toggleCollection = () => {
    setCollectionForm((c) => !c);
  };

  const clickCollection = (collectionID) => {
    navigate("/home/collection-id/" + collectionID);
  };

  return (
    <div className="bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-4 pb-lg-4">
      {/* COLLECTION FORM  */}
      <CollectionForm
        toggleCollectionForm={toggleCollection}
        open={collectionForm}
      />

      <div className="project-header pb-2 mb-2 align-items-center rounded-3 pt-2 pb-2 position-relative d-flex">
        <button
          onClick={toggleCollection}
          className="btn d-flex align-items-center btn-sm btn-outline-secondary shadow-none"
        >
          <FiPlus /> New Collection
        </button>
        <p className="fs-7 ms-auto mb-0 text-muted">7 Collections</p>
      </div>

      <SortingTab containerStyle="mb-3" />
      {resources.length > 0 ? (
        <div className="row px-2 px-md-2 row-cols-2 row-cols-md-4 row-cols-lg-6">
          <div className="col mb-2 px-1">
            <CollectionCard
              handlePress={() => clickCollection(12)}
              color="pink"
              title="valentines 2025"
            />
          </div>
          <div className="col mb-2 px-1">
            <CollectionCard
              handlePress={() => clickCollection(12)}
              color="blue"
              title="Images"
            />
          </div>
          <div className="col mb-2 px-1">
            <CollectionCard
              handlePress={() => clickCollection(12)}
              color="green"
              title="Captions"
            />
          </div>
          <div className="col mb-2 px-1">
            <CollectionCard
              handlePress={() => clickCollection(12)}
              color="pink"
              title="Articles"
            />
          </div>
          <div className="col mb-2 px-1">
            <CollectionCard
              handlePress={() => clickCollection(12)}
              color="pink"
              title="Links"
            />
          </div>
        </div>
      ) : (
        <div className="d-flex center border p-3"></div>
      )}
    </div>
  );
}

export default Resources;
