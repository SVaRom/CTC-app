/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import FormComponent from "./createForm";
import DeleteIcon from "@mui/icons-material/Delete";
import { handleDelete, handleNew, handleEdit } from "../table/TableLogic";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#eeeeee",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *": {
    m: 1,
  },
};

export default function BasicModal({
  type,
  open,
  setOpen,
  selectedPost,
  setSelectedPost,
  setData,
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {type === "update" || type === "create" ? (
            <FormComponent
              selectedPost={selectedPost}
              setSelectedPost={setSelectedPost}
            />
          ) : null}
          <Stack spacing={2} direction="row">
            {type === "create" && (
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={() => handleNew(selectedPost, setData, setOpen)}
              >
                Create
              </Button>
            )}
            {type === "update" && (
              <>
                <Button
                  variant="contained"
                  endIcon={<EditIcon />}
                  onClick={() => handleEdit(selectedPost, setData, setOpen)}
                >
                  Update
                </Button>
                <Button
                  onClick={() =>
                    handleDelete(selectedPost.id, setData, setOpen)
                  }
                  variant="contained"
                  color="error"
                  endIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
