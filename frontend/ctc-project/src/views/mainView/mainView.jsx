import TableView from "../../components/table/Table";
import { useState, useEffect } from "react";
import { getData } from "./mainViewLogic";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { handleCreate } from "../../components/table/TableLogic";
import BasicModal from "../../components/modalComponent/ModalComponent";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
const MainView = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedPost, setSelectedPost] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data.length === 0) {
      getData(setData);
    }
  }, [data]);
  return (
    <>
      <Box>
        <Fab
          color="primary"
          sx={{
            position: "absolute",
            bottom: 50,
            right: 50,
            transform: "scale(1.5)",
          }}
          aria-label="add"
          onClick={() =>
            handleCreate(setShowModal, setModalType, setSelectedPost)
          }
        >
          <AddCircleIcon />
        </Fab>
      </Box>
      <TableView rows={data} setData={setData} />
      {showModal && (
        <BasicModal
          type={modalType}
          open={showModal}
          setOpen={setShowModal}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
          setData={setData}
        />
      )}
    </>
  );
};
export default MainView;
