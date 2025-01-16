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
      {resources.length > 0 ? (
        <>
          <div className="row px-2 px-md-2 row-cols-2 row-cols-md-4 row-cols-lg-6">
            <div className="col mb-2 px-1">
              <CollectionCard color="blue" title="Images" />
            </div>
            <div className="col mb-2 px-1">
              <CollectionCard color="green" title="Captions" />
            </div>
            <div className="col mb-2 px-1">
              <CollectionCard color="pink" title="Articles" />
            </div>
            <div className="col mb-2 px-1">
              <CollectionCard color="pink" title="Links" />
            </div>
          </div>
          {/* COLLECTION CONTENT */}
          <div className="collection-content py-3">
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
        </>
      ) : (
        <div className="d-flex center border p-3"></div>
      )}
    </div>
  );
}

export default Resources;
