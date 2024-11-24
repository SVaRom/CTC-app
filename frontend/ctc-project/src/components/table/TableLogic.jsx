import axios from "axios";
import { getData } from "../../views/mainView/mainViewLogic";
export const handleUpdate = (
  setShowModal,
  setModalType,
  row,
  setSelectedPost
) => {
  setShowModal(true);
  setModalType("update");
  setSelectedPost(row);
};
export const handleDelete = async (keyRow, setData, setOpen) => {
  try {
    const query = await axios.delete(
      `${import.meta.env.VITE_API_URL}delete/${keyRow}`
    );
    if (query.status === 200) {
      setOpen(false);
      getData(setData);
    }
  } catch (e) {
    console.error(e);
  }
};
export const handleEdit = async (row, setData, setOpen) => {
  try {
    console.log(row.date);
    const query = await axios.put(
      `${import.meta.env.VITE_API_URL}update/${row.id}`,
      row
    );
    if (query.status === 200) {
      setOpen(false);
      getData(setData);
    }
  } catch (e) {
    console.error(e);
  }
};
export const handleCreate = (setShowModal, setModalType, setSelectedPost) => {
  setShowModal(true);
  setModalType("create");
  setSelectedPost([]);
};
export const handleNew = async (row, setData, setOpen) => {
  if (row.date === undefined) {
    row.date = new Date().toISOString().split("T")[0];
  }
  try {
    console.log(row);
    const query = await axios.post(
      `${import.meta.env.VITE_API_URL}create`,
      row
    );
    if (query.status === 200) {
      setOpen(false);
      getData(setData);
    }
  } catch (e) {
    console.error(e);
  }
};
