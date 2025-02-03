import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import TextField from "../../components/ui/TextField";
import PrimaryButton from "../../components/ui/PrimaryButton";

import { RiLink } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider";
import { serverTimestamp, doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const MAX_LINKS = 5;
const MAX_IMAGES = 5;

const AddItem = () => {
  const navigate = useNavigate();
  const { userDetails } = useAuth();
  const params = useParams();
  const collectionID = params.collectionID;
  const collectionTitle = params.collectionTitle;

  const [loading, setLoading] = useState(false);
  const [full, setFull] = useState(false);
  const [images, setImages] = useState([""]);
  const [links, setLinks] = useState([""]);
  const contentRef = useRef(null);

  const [itemData, setItemData] = useState({
    title: "",
    desc: "",
    content: "",
    isPinned: false,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItemData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFullView = () => {
    setFull((prev) => !prev);
    setTimeout(() => contentRef.current?.focus(), 150);
  };

  const addField = (setter, limit, newField) => {
    setter((prev) => (prev.length < limit ? [...prev, newField] : prev));
  };

  const removeField = (setter, id) => {
    setter((prev) => prev.filter((_, index) => index !== id));
  };

  const updateField = (setter, index, value) => {
    setter((prev) => prev.map((field, i) => (i === index ? value : field)));
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sabuag_upload_preset");
    formData.append("cloud_name", "drr7ha76c");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/drr7ha76c/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      return data.secure_url; // Return the Cloudinary URL
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  // Handle image uploads
  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 9000000) {
      console.log("exceed limit : ", file.size);
      e.target.value = "";
    } else {
      const imageUrl = await uploadImageToCloudinary(file);

      if (imageUrl) {
        console.log(imageUrl);
        setImages((prev) => {
          const updatedImages = [...prev];
          updatedImages[index] = imageUrl;
          return updatedImages;
        });
      }
    }
  };

  // Add new item to Firestore
  const addItem = async (id, title) => {
    setLoading(true);
    try {
      const itemRef = doc(collection(db, "Items"));
      const creator = userDetails.firstName + " " + userDetails.lastName;

      await setDoc(itemRef, {
        ...itemData,
        itemID: itemRef.id,
        collectionID: id,
        collectionName: title,
        images: images.filter((img) => img), // Filter out empty values
        links: links.filter((link) => link), // Filter out empty values
        createdAt: serverTimestamp(),
        creator: creator,
        creatorID: userDetails.userID,
      });

      console.log("Item added successfully!");
      navigate(-1);
    } catch (err) {
      console.error("Error adding item:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-5 pb-lg-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center pe-1">
        <div
          onClick={() => navigate(-1)}
          className="pointer bg-hover d-flex align-items-center pe-1 py-1 rounded-1"
        >
          <button className="btn outline-0 text-muted me-1 d-flex center p-0">
            <IoChevronBackOutline size={18} />
          </button>
          <h4 className="text-muted fw-medium normal-text-size mb-0">
            {collectionTitle}
          </h4>
        </div>

        <PrimaryButton
          containerStyle="text-white px-2 px-md-4 rounded-1"
          handlePress={() => addItem(collectionID, collectionTitle)}
          label="Save"
          isLoading={loading}
        />
      </div>

      {/* Form */}
      <div className="row">
        <div className="col-12 col-md-6 px-2 py-2">
          <p className="py-2 mb-2 text-muted fw-semibold">Details</p>
          <TextField
            value={itemData.title}
            onChange={handleChange}
            name="title"
            label="Item Title"
          />
          <TextField
            value={itemData.desc}
            onChange={handleChange}
            name="desc"
            rows={2}
            label="Description"
          />

          {/* Links Section */}
          <div className="d-flex align-items-center mt-3 mb-2">
            <p className="mb-0 fw-medium text-muted fs-7">Attach Links</p>
            {links.length < MAX_LINKS && (
              <p
                onClick={() => addField(setLinks, MAX_LINKS, "")}
                className="mb-0 ms-auto pointer text-muted fw-medium fs-7"
              >
                <GoPlus /> Add Link
              </p>
            )}
          </div>
          {links.map((link, index) => (
            <div className="d-flex align-items-center" key={index}>
              <TextField
                containerStyle="w-100"
                value={link}
                onChange={(e) => updateField(setLinks, index, e.target.value)}
                icon={<RiLink />}
                label={`Link ${index + 1}`}
              />
              <div
                onClick={() => removeField(setLinks, index)}
                className="ps-1 py-2 mb-3"
              >
                <CgClose
                  size={16}
                  className="pointer text-muted rounded-circle"
                />
              </div>
            </div>
          ))}

          {/* Images Section */}
          <div className="d-flex align-items-center mt-3 mb-2">
            <p className="mb-0 fw-medium text-muted fs-7">Images (Max: 5)</p>
            {images.length < MAX_IMAGES && (
              <p
                onClick={() => addField(setImages, MAX_IMAGES, "")}
                className="mb-0 ms-auto pointer text-muted fw-medium fs-7"
              >
                <GoPlus /> Add Image
              </p>
            )}
          </div>
          {images.map((image, index) => (
            <div className="d-flex align-items-center mb-3" key={index}>
              <input
                type="file"
                className="form-control bg-none outline-0 border-secondary text-muted py-2"
                onChange={(e) => handleImageUpload(e, index)}
              />
              {image && (
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  className="ms-2"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              )}
              <CgClose
                size={17}
                className="pointer text-muted ms-1"
                onClick={() => removeField(setImages, index)}
              />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className={`col-12 col-lg-${full ? "12" : "6"} px-2 py-2`}>
          <div className="d-flex align-items-center mb-1 py-2">
            <p className="fw-semibold mb-0 text-muted">Content</p>
            <div
              onClick={handleFullView}
              className="ms-auto text-muted pointer"
            >
              {full ? (
                <MdFullscreenExit size={26} />
              ) : (
                <MdFullscreen size={26} />
              )}
            </div>
          </div>
          <TextField
            name="content"
            onChange={handleChange}
            value={itemData.content}
            rows={full ? 40 : 25}
            reference={contentRef}
            label="Type something here..."
          />
        </div>
      </div>
    </div>
  );
};

export default AddItem;
