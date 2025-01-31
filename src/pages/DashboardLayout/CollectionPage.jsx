import { FiPlus } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

import ItemCard from "../../components/ui/ItemCard";
import SortingTab from "../../components/ui/SortingTab";
import SearchbarOutline from "../../components/ui/SearchbarOutline";

// FIREBASE
import { query, getDocs, collection, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CollectionPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const collectionID = params.collectionID;
  const collectionTitle = params.collectionTitle;

  // variable states
  const [items, setItems] = useState([]);

  // feedbacks
  const [loading, setLoading] = useState(false);

  const fetchCollectionItems = async (id) => {
    setLoading(true); // Start loading state

    const q = query(collection(db, "Items"), where("collectionID", "==", id));

    try {
      const querySnapshot = await getDocs(q);

      const fetchedItems = [];
      querySnapshot.forEach((doc) => {
        fetchedItems.push({ id: doc.id, ...doc.data() });
      });

      setItems(fetchedItems); // Update state with fetched items
      console.log("Fetched items:", fetchedItems);
    } catch (err) {
      console.error("Error fetching items:", err);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  useEffect(() => {
    fetchCollectionItems(collectionID);
  }, []);

  // pass the collection id
  const toggleAddItem = (id, title) => {
    navigate("/home/add-item/" + id + "/t/" + title);
  };
  return (
    <div>
      {/* COLLECTION CONTENT */}
      <div className="collection-content bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-4 pb-lg-4">
        <div className="d-flex align-items-center">
          <div className="pointer bg-hover d-flex align-items-center pe-1 rounded-1">
            <button className="btn outline-0 text-muted me-1 d-flex center p-0">
              <IoChevronBackOutline size={18} />
            </button>
            <h4 className="text-muted fw-medium normal-text-size mb-0">
              {collectionTitle}
            </h4>
          </div>
          <button
            onClick={() => toggleAddItem(collectionID, collectionTitle)}
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
          {loading ? (
            <p className="text-secondary">Loading items...</p>
          ) : items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="col mb-2 px-1">
                <ItemCard />
              </div>
            ))
          ) : (
            <p className="text-secondary">No items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
