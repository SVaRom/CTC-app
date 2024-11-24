import axios from "axios";
export const getData = async (setData) => {
  try {
    const result = await axios.get(`${import.meta.env.VITE_API_URL}read`);
    const posts = result.data;
    setData(posts);
  } catch (e) {
    console.error(e);
  }
};
export const likePost = async (idPost, setData) => {
  try {
    const query = await axios.post(
      `${import.meta.env.VITE_API_URL}like/${idPost}`
    );
    if (query.status === 200) {
      getData(setData);
    }
  } catch (e) {
    console.error(e);
  }
};
export const handleLike = (idPost, setData) => {
  likePost(idPost, setData);
};
