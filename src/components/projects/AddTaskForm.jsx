import { Dialog, Skeleton } from "@mui/material";
import TextField from "../ui/TextField";
import DropdownSearch from "../ui/DropdownSearch";

import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const AddTaskForm = ({ setOpenDialog, openDialog }) => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({
    taskTitle: "",
    taskDesc: "",
  });

  const [members, setMembers] = useState([
    {
      uid: 1,
      name: "Rael",
      position: "editorial cartoonist",
    },
    {
      uid: 2,
      name: "James",
      position: "Lit president",
    },
    {
      uid: 3,
      name: "Sanny",
      position: "Photojournalist",
    },
    {
      uid: 3,
      name: "Sanny",
      position: "Photojournalist",
    },
    {
      uid: 3,
      name: "Sanny",
      position: "Photojournalist",
    },
  ]);

  const [results, setResults] = useState([1, 2, 3, 4, 5]);
  const [assignedMembers, setAssignedMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setResults(members);
    console.log(members);
  };

  const closeSelect = () => {
    setSearchTerm("");
  };

  const handlePick = (uid) => {
    members.filter((mem) => {
      if (mem.uid == uid) {
        setAssignedMembers((prev) => {
          return [...prev, mem];
        });
      }
    });

    setSearchTerm("");
    console.log(assignedMembers);
  };

  const removePick = (uid) => {
    let newArray = assignedMembers.filter((mem) => {
      if (mem.uid !== uid) {
        return { ...mem };
      }
    });

    setAssignedMembers(newArray);
    console.log(assignedMembers);
  };

  return (
    <Dialog
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
          margin: 1,
        },
      }}
      open={openDialog}
      onClose={() => setOpenDialog(false)}
    >
      <div
        style={{ overflowY: "auto" }}
        className="p-3 py-4 p-md-4 bg-white-linear rounded-3 project-form w-100"
      >
        <div className="dialog-header d-flex align-items-center mb-3">
          <p className="project-form-0 ms-2 mb-0 fs-5 txt-primary3 fw-semibold">
            New Task
          </p>
          <p className="mb-0 fs-8 text-secondary ms-auto">12/32/25</p>
        </div>
        {loading ? (
          <div className="w-100">
            <Skeleton
              variant="rounded"
              sx={{ marginBottom: 2 }}
              width={"100%"}
              height={50}
            />
            <Skeleton
              variant="rounded"
              sx={{ marginBottom: 2 }}
              width={"100%"}
              height={75}
            />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: 100 }} />
            <Skeleton
              variant="rounded"
              sx={{ marginBottom: 2 }}
              width={"100%"}
              height={50}
            />
          </div>
        ) : (
          <div className="dialog-body">
            <TextField name="taskTitle" label="Task Title" />
            <TextField name="taskDesc" rows={2} label="Task Description" />
            <div className="mb-1 text-secondary fs-7 d-flex align-items-center justify-content-between">
              <p className="mb-0">Assign Members ({assignedMembers.length})</p>
              {/* <p className="mb-0">{assignedMembers.length}</p> */}
            </div>
            <DropdownSearch
              inputStyle=" px-3"
              containerStyle="rounded-3 mb-3"
              label="Name/Position"
              handleSearch={handleSearch}
              searchTerm={searchTerm}
              results={results}
              handlePick={handlePick}
              closeSelect={closeSelect}
            />
            <div className="assigned-members">
              {assignedMembers?.map((mem, index) => {
                return (
                  <div key={index} className="py-2 d-flex align-items-center">
                    <img
                      style={{ width: 40, height: 40, objectFit: "cover" }}
                      className="rounded-circle me-2"
                      src="/images/meme.jpg"
                      alt="error"
                    />
                    <div>
                      <p className="mb-0 text-muted">{mem.name}</p>
                      <p className="mb-0 text-secondary fs-7">{mem.position}</p>
                    </div>
                    <span
                      onClick={() => removePick(mem.uid)}
                      className="ms-auto px-2 text-muted pointer"
                    >
                      <IoCloseOutline size={22} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div
          style={{ gap: 8 }}
          className="dialog-footer mt-4 d-flex align-items-center"
        >
          <button
            onClick={handleCancel}
            className="btn py-2 btn-outline-secondary w-100 px-2 rounded-2"
          >
            Cancel
          </button>
          <button className="btn text-white py-2 bg-primary-linear px-2 w-100 rounded2">
            Add Task
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddTaskForm;
