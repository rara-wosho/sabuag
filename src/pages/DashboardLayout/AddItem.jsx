import { useState, useRef } from "react";
import TextField from "../../components/ui/TextField";
import { useParams } from "react-router-dom";

import { RiLink } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const MAX_LINKS = 5;
const MAX_IMAGES = 10;

const AddItem = () => {
  const navigate = useNavigate();
  const params = useParams();
  const collectionID = params.collectionID;
  const collectionTitle = params.collectionTitle;

  const [full, setFull] = useState(false);
  const [images, setImages] = useState([{ id: Date.now(), value: "" }]);
  const [links, setLinks] = useState([""]);
  const contentRef = useRef(null);

  const [itemData, setItemData] = useState({
    title: "",
    desc: "",
    content: "",
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

  const addItem = async (id, title) => {
    console.log("button clicked");
    try {
      // add new item
      await addDoc(collection(db, "Items"), {
        ...itemData,
        collectionName: name,
        collectionID: id,
        collectionName: title,
        createdAt: serverTimestamp(),
      });

      console.log("added item ok");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-5 pb-lg-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center pe-1">
        <div
          onClick={() => navigate(-1)}
          className="pointer d-flex align-items-center p-1 bg-secondary rounded-2 px-2 px-md-3 text-white"
        >
          <IoMdArrowRoundBack size={18} />
          <div className="fw-medium mb-0 ms-1 fs-7 text-truncate">
            {collectionTitle}
          </div>
        </div>
        <button
          onClick={() => addItem(collectionID, collectionTitle)}
          className="btn btn-sm bg-primary-linear text-white px-2 px-md-4"
        >
          Save
        </button>
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
            <div className="position-relative mb-2" key={index}>
              <TextField
                containerStyle="w-100"
                value={link}
                onChange={(e) => updateField(setLinks, index, e.target.value)}
                icon={<RiLink />}
                label={`Link ${index + 1}`}
              />
              <CgClose
                size={16}
                className="pointer text-white rounded-circle position-absolute shadow-sm bg-secondary"
                style={{ top: -8, right: 10 }}
                onClick={() => removeField(setLinks, index)}
              />
            </div>
          ))}

          {/* Images Section */}
          <div className="d-flex align-items-center mt-3 mb-2">
            <p className="mb-0 fw-medium text-muted fs-7">Images (Max: 10)</p>
            {images.length < MAX_IMAGES && (
              <p
                onClick={() =>
                  addField(setImages, MAX_IMAGES, { id: Date.now(), value: "" })
                }
                className="mb-0 ms-auto pointer text-muted fw-medium fs-7"
              >
                <GoPlus /> Add Image
              </p>
            )}
          </div>
          {images.map((image, index) => (
            <div className="d-flex align-items-center mb-2" key={image.id}>
              <input
                type="file"
                className="form-control bg-none text-muted fs-7"
                value={image.value}
                onChange={(e) =>
                  updateField(setImages, index, {
                    ...image,
                    value: e.target.value,
                  })
                }
              />
              <IoIosRemoveCircleOutline
                size={20}
                className="pointer text-danger ms-2"
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
