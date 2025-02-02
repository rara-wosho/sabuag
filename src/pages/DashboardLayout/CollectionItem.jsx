import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { IoArrowBackOutline } from "react-icons/io5";

import Loader from "../../components/ui/Loader";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function CollectionItem() {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [itemData, setItemData] = useState(null);

  const fetchItemData = async () => {
    try {
      const docRef = doc(db, "Items", params.itemID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setItemData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.log("Error fetching : ", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  return (
    <div className="item-page bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-4 pb-lg-4">
      <div className="d-flex align-items-center border-bottom py-2 mb-3">
        <button
          onClick={() => navigate(-1)}
          className="btn p-1 rounded-circle d-flex center bg-hover text-muted"
        >
          <IoArrowBackOutline size={20} />
        </button>
      </div>

      {/* content  */}
      {loading ? (
        <div className="d-flex center pt-5 w-100">
          <Loader />
        </div>
      ) : (
        <>
          <p className="mb-2 text-muted fw-medium">{itemData.title}</p>
          <p className="text-secondary fs-7 fw-medium ">
            {itemData.createdAt.toDate().toLocaleString()}
          </p>
          <p className="mb-0 text-secondary fs-7 fw-medium ">Content</p>
        </>
      )}
    </div>
  );
}

export default CollectionItem;
