import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

import Loader from "../../components/ui/Loader";
import TextField from "../../components/ui/TextField";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ImGift } from "react-icons/im";

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

        <div className="ps-2 text-muted ms-auto pointer">
          <SlOptions size={20} />
        </div>
      </div>

      {/* content  */}
      {loading ? (
        <div className="d-flex center pt-5 w-100">
          <Loader />
        </div>
      ) : (
        <>
          <p className="mb-1 text-muted fs-5 fw-medium">{itemData.title}</p>
          <p className="text-secondary fs-7 fw-medium ">
            <IoTimeOutline className="me-1" />
            {itemData.createdAt.toDate().toLocaleString()}
          </p>

          <div className="d-flex flex-column mt-4">
            <TextField rows={2} value={itemData.desc} label="Description" />
          </div>

          <div className="d-inline-flex flex-column">
            <p className="mb-1 text-secondary fs-8 fw-medium mt-4">Links</p>
            {itemData.links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="text-muted bg-gray d-inline-block hover-text-primary link-hover px-2 py-1 rounded-1" // Add hover effect
              >
                {link}
              </a>
            ))}
          </div>

          <p className="mb-0 text-secondary fs-7 fw-medium mt-4">Images</p>

          {itemData.images.map((img, index) => {
            return (
              <img
                onClick={() => window.open(img, "_blank")}
                key={index}
                style={{ width: 290, objectFit: "contain" }}
                src={img}
              />
            );
          })}

          <TextField
            containerStyle="mt-5"
            label="Content"
            rows={25}
            value={itemData.content}
          />
        </>
      )}
    </div>
  );
}

export default CollectionItem;
