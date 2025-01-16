import { useState, useRef } from "react";
import TextField from "../../components/ui/TextField";

import { RiLink } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";

import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const [full, setFull] = useState(false);
  const [images, setImages] = useState([{ id: Date.now(), value: "" }]);
  const [links, setLinks] = useState([""]);
  const contentRef = useRef(null);

  const [itemData, setItemData] = useState({
    title: "",
    desc: "",
    link1: "",
    link2: "",
    link3: "",
    content: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItemData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFullView = () => {
    setFull((f) => !f);
    setTimeout(() => contentRef.current?.focus(), 100);
  };

  const addLinkField = () => {
    if (links.length < 5) {
      setLinks((prev) => [...prev, ""]);
    }
  };

  const removeLinkField = (id) => {
    setLinks((prev) => prev.filter((_, index) => index != id));
  };

  const handleChangeLink = (i, value) => {
    setLinks((prev) => prev.map((link, index) => (index === i ? value : link)));
  };

  const addImageField = () => {
    if (images.length < 10) {
      setImages((prev) => [...prev, { id: Date.now(), value: "" }]);
    }
  };

  const removeImageField = (id) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  const handleImageChange = (id, value) => {
    setImages((prev) =>
      prev.map((image) => (image.id === id ? { ...image, value } : image))
    );
  };

  return (
    <div className="bg-white min-h-vh rounded-4 px-3 pt-3 px-lg-5 pt-lg-5 pb-lg-4">
      <div className="d-flex justify-content-between align-items-center pe-1">
        <div
          onClick={() => navigate(-1)}
          className="pointer d-flex align-items-center p-1 bg-secondary rounded-2 px-2 px-md-3 text-white"
        >
          <IoMdArrowRoundBack size={18} />
          <div className="fw-medium mb-0 ms-1 fs-7 text-truncate">
            Renx patrick projects bison
          </div>
        </div>
        <button className="btn btn-sm bg-primary-linear text-white px-2 px-md-4">
          Save
        </button>
      </div>
      <div className={`row`}>
        <div className="col col-12 col-md-6 col-lg-6 px-2 py-2 mb-2 d-flex flex-column">
          <div className="w-100 d-flex flex-column">
            <p className="mb-1 text-muted fw-semibold py-2">Details</p>

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

            <div className="d-flex align-items-center mb-3 mt-2">
              <p className="mb-0 fw-medium text-muted fs-7">Attach Links</p>
              {links.length < 5 && (
                <p
                  onClick={addLinkField}
                  className="mb-0 ms-auto d-flex align-items-center pointer hover-primary fw-medium text-muted fs-7"
                >
                  <GoPlus />
                  Add Link
                </p>
              )}
            </div>
            {links.map((value, index) => (
              <div className="d-flex align-items-center position-relative">
                <TextField
                  containerStyle="w-100"
                  value={value}
                  onChange={(e) => handleChangeLink(index, e.target.value)}
                  key={index}
                  name="link3"
                  icon={<RiLink />}
                  label={"Link " + (index + 1)}
                />
                <div
                  style={{ top: -9, right: 10 }}
                  onClick={() => removeLinkField(index)}
                  className="d-inline-flex text-white mb-3 pointer center bg-secondary center rounded-circle shadow-sm p-1 position-absolute"
                >
                  <CgClose size={12} />
                </div>
              </div>
            ))}
            <p>{links[0]} </p>
            <p>{links[1]} </p>
            <div className="d-flex align-items-center mt-2">
              <p className="mb-2 fw-medium text-muted fs-7">
                Images (maximum: 10)
              </p>
              {images.length < 10 && (
                <p
                  onClick={addImageField}
                  className="mb-2 ms-auto d-flex align-items-center pointer hover-primary fw-medium text-muted fs-7"
                >
                  <GoPlus />
                  Add Image
                </p>
              )}
            </div>
            {images.map((image) => (
              <div key={image.id} className="d-flex align-items-center mb-2">
                <input
                  className="bg-none text-muted shadow-0 border-hover outline-0 form-control w-100 fs-7 border"
                  type="file"
                  value={image.value}
                  onChange={(e) => handleImageChange(image.id, e.target.value)}
                />
                <div
                  onClick={() => removeImageField(image.id)}
                  className="p-1 pointer text-secondary"
                >
                  <IoIosRemoveCircleOutline size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`col col-12 col-lg-${
            full ? "12" : "6"
          } px-0 px-md-2 py-2 mb-2 d-flex flex-column`}
        >
          <div className="ations d-flex align-items-center mb-2">
            <p className="mb-0 text-muted fw-semibold px-3 px-md-2 px-lg-0">
              Content
            </p>
            <div
              onClick={handleFullView}
              className="action-tab p-1 ms-auto d-none d-lg-inline-block text-muted pointer"
            >
              {full ? (
                <MdFullscreenExit size={26} />
              ) : (
                <MdFullscreen size={26} />
              )}
            </div>
          </div>
          <div className="content-wrapper w-100">
            <TextField
              name="content"
              onChange={handleChange}
              value={itemData.content}
              label="Type something here..."
              rows={25}
              reference={contentRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
