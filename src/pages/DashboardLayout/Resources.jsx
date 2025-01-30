import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import CollectionCard from "../../components/ui/CollectionCard";
import SortingTab from "../../components/ui/SortingTab";
import CollectionForm from "../../components/collections/CollectionForm";
import Skeleton from "../../components/ui/Skeleton";
import { useNavigate } from "react-router-dom";

// FIREBASE
import {
  collection,
  onSnapshot,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useAuth } from "../../hooks/AuthProvider";

function Resources() {
  const { userDetails } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [collectionForm, setCollectionForm] = useState(false);
  const [editingCollection, setEditingCollection] = useState(null); // State for editing

  const toggleCollection = (collection = null) => {
    setEditingCollection(collection); // Set the collection to edit (or null for adding)
    setCollectionForm((c) => !c);
  };

  const clickCollection = (collectionID) => {
    navigate("/home/collection-id/" + collectionID);
  };

  // FETCH COLLECTIONS
  const fetchCollections = (setResources, setLoading) => {
    const q = query(
      collection(db, "Collections"),
      orderBy("createdAt", "desc")
    );

    // Use onSnapshot for real-time updates
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const collections = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResources(collections);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching collections: ", error);
        setLoading(false);
      }
    );

    // Return unsubscribe function to stop listening when component unmounts
    return unsubscribe;
  };

  // FETCH COLLECTIONS ON COMPONENT MOUNT
  useEffect(() => {
    setLoading(true);
    const unsubscribe = fetchCollections(setResources, setLoading);

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-4 pb-lg-4">
      {/* COLLECTION FORM  */}
      <CollectionForm
        userDetails={userDetails}
        toggleCollectionForm={toggleCollection}
        open={collectionForm}
        editingCollection={editingCollection} // Pass the collection to edit
        fetchCollections={fetchCollections} // Pass the fetch function to refresh the list
      />

      <div className="project-header pb-2 mb-2 align-items-center rounded-3 pt-2 pb-2 position-relative d-flex">
        <button
          onClick={() => toggleCollection()} // Open form for adding a new collection
          className="btn d-flex align-items-center btn-sm btn-outline-secondary shadow-none"
        >
          <FiPlus /> New Collection
        </button>

        <p className="fs-7 ms-auto mb-0 text-muted">
          {resources.length} Collections
        </p>
      </div>

      <SortingTab containerStyle="mb-3" />

      {loading ? (
        <div className="row px-2 px-md-2 row-cols-2 row-cols-md-4 row-cols-lg-6">
          {[...Array(5)].map((_, index) => (
            <div className="col mb-2 px-1" key={index}>
              <Skeleton width="100%" height={39} />
            </div>
          ))}
        </div>
      ) : resources.length > 0 ? (
        <div className="row px-2 px-md-2 row-cols-2 row-cols-md-4 row-cols-lg-6">
          {resources.map((collection) => (
            <div className="col mb-2 px-1" key={collection.id}>
              <CollectionCard
                handlePress={() => clickCollection(collection.id)}
                color={collection.color || "default"}
                title={collection.title}
                creatorID={collection.creatorID}
                toggleCollection={() => toggleCollection(collection)} // Open form for editing
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex center p-2">
          <p className="text-secondary">No collections found.</p>
        </div>
      )}
    </div>
  );
}

export default Resources;
