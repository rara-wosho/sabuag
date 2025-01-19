import { useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { RiLink } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import PrimaryButton from "../../components/ui/PrimaryButton";
import TextField from "../../components/ui/TextField";
import { useState } from "react";

const MAX_LINKS = 5;
const MAX_IMAGES = 5;

function Task() {
  const { taskID } = useParams();

  const [links, setLinks] = useState([""]);
  const [images, setImages] = useState([{ id: Date.now(), value: "" }]);

  const [taskForm, setTaskForm] = useState({
    comment: "",
    content: "",
  });

  const addField = (setter, limit, field) => {
    setter((prev) => (prev.length < limit ? [...prev, field] : prev));
  };

  const removeField = (setter, i) => {
    if (links.length > 1) {
      setter((prev) => prev.filter((_, index) => index != i));
    }
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setTaskForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="task-page bg-white min-h-vh rounded-4 px-3 px-lg-5 pt-lg-4 pt-2 pb-lg-4">
      <div className="task-page-header mb-2 pb-2 pt-2 d-flex align-items-center">
        <div className="p-2 text-muted me-1 me-md-2 bg-hover rounded-circle d-flex center">
          <FaAngleLeft />
        </div>
        <p className="mb-0 fs-7 text-white bg-secondary px-2 rounded-pill">
          Pending
        </p>

        <PrimaryButton
          containerStyle="px-3 shadow-sm ms-auto rounded-2"
          label="Save"
        />
      </div>
      <div className="task-page-body">
        <div className="d-flex mb-2 justify-content-center flex-column">
          <p className="mb-0 txt-black fw-medium">
            Make caption for day 2 events: {taskID}
          </p>
          <p className="mb-0 fs-8 text-muted">Jan 12 2025</p>
        </div>
        {/* <p className="mb-3 text-secondary fs-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          placeat mollitia nam nihil animi dolor.
        </p> */}
        <p className="mb-3 fs-7 shadow-sm text-white rounded-2 py-1 px-2 d-inline-flex align-items-center bg-secondary">
          <span className="fw-medium me-1">Deadline:</span>
          <span className="">12/22/22</span>
        </p>

        <div className="row">
          <div className="col-12 col col-md-6">
            <TextField
              value={taskForm.comment}
              onChange={handleChangeForm}
              name="comment"
              icon={<FaRegComment />}
              label="Add Comment"
              rows={2}
            />

            {/* ADD LINKS  */}
            <div className="d-flex align-items-center mb-2">
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
              <div className="position-relative">
                <TextField
                  key={index}
                  value={link}
                  onChange={() => {}}
                  name="link"
                  icon={<RiLink />}
                  label={"Link " + (index + 1)}
                />

                <CgClose
                  size={16}
                  style={{ top: -8, right: 10 }}
                  className="position-absolute text-white rounded-circle pointer shadow-sm bg-secondary"
                  onClick={() => removeField(setLinks, index)}
                />
              </div>
            ))}

            {/* ADD IMAGES  */}
            <div className="d-flex align-items-center mb-2">
              <p className="mb-0 fw-medium text-muted fs-7">
                Images: (max: {MAX_IMAGES})
              </p>

              {links.length < MAX_LINKS && (
                <p
                  onClick={() => addField(setLinks, MAX_LINKS, "")}
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
                  className="form-control border-secondary border-hover bg-white text-muted fs-7"
                  value={image.value}
                />
                <IoIosRemoveCircleOutline
                  size={20}
                  className="pointer text-danger ms-2"
                  onClick={() => removeField(setImages, index)}
                />
              </div>
            ))}
          </div>
        </div>
        <p className="mb-2 mt-3 text-muted fs-7 fw-semibold">Content</p>
        <TextField
          value={taskForm.content}
          onChange={handleChangeForm}
          name="content"
          rows={20}
          label="Type here..."
        />
      </div>
    </div>
  );
}

export default Task;
