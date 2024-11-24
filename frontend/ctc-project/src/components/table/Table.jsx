/* eslint-disable react/prop-types */
import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { handleLike } from "../../views/mainView/mainViewLogic";
import BasicModal from "../modalComponent/ModalComponent";
import { handleUpdate } from "./TableLogic";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Stack from "@mui/material/Stack";

const TableView = ({ rows, setData }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedPost, setSelectedPost] = useState([]);
  return (
    <>
      <div style={{ width: "100%" }}>
        <List
          sx={{
            width: "100vh",
            height: "100vh",
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          {rows.map((row) => (
            <>
              <ListItem alignItems="flex-start" key={row.id}>
                <ListItemAvatar>
                  <Avatar alt={row.responsible} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: "text.primary",
                        display: "inline",
                        fontWeight: "bold",
                      }}
                    >
                      {row.title}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {row.responsible}
                      </Typography>
                      {" — "}
                      {row.description}
                      <Stack>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.secondary", display: "inline" }}
                        >
                          {"Expected date: "}
                          {row.date}
                          {" at "}
                          {row.location}
                        </Typography>
                      </Stack>
                    </React.Fragment>
                  }
                />
                <Stack>
                  <IconButton
                    color="primary"
                    aria-label="Like"
                    onClick={() => handleLike(row.id, setData)}
                  >
                    <ThumbUpAltIcon />
                  </IconButton>
                  <ListItem>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "#1976D2" }}
                    >
                      {row.likes}
                    </Typography>
                  </ListItem>
                </Stack>
                <IconButton
                  color="primary"
                  aria-label="Like"
                  sx={{ transform: "scale(1.5)" }}
                  onClick={() =>
                    handleUpdate(
                      setShowModal,
                      setModalType,
                      row,
                      setSelectedPost
                    )
                  }
                >
                  <EditNoteIcon />
                </IconButton>
              </ListItem>
              <Divider variant="middle" component="li" />
            </>
          ))}
        </List>
      </div>
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
export default TableView;
