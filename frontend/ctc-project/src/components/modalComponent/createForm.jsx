/* eslint-disable react/prop-types */
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const FormComponent = ({ selectedPost, setSelectedPost }) => {
  const onChangeText = (e) => {
    e.persist();
    setSelectedPost({ ...selectedPost, [e.target.name]: e.target.value });
  };
  return (
    <>
      <FormControl sx={{ width: 500, maxWidth: "100%" }}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          margin="dense"
          value={selectedPost.title}
          name="title"
          onChange={(e) => onChangeText(e)}
        />
        <TextField
          id="outlined-basic"
          multiline
          rows={6}
          label="Description"
          variant="outlined"
          margin="dense"
          value={selectedPost.description}
          name="description"
          onChange={(e) => onChangeText(e)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Basic date picker"
            value={dayjs(selectedPost.date)}
            margin="dense"
            name="date"
            onChange={(newValue) =>
              setSelectedPost({
                ...selectedPost,
                ["date"]: new Date(newValue).toISOString().split("T")[0],
              })
            }
          />
        </LocalizationProvider>
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          margin="dense"
          value={selectedPost.location}
          name="location"
          onChange={(e) => onChangeText(e)}
        />
        <TextField
          id="fullWidth"
          label="Responsible"
          variant="outlined"
          value={selectedPost.responsible}
          margin="dense"
          name="responsible"
          onChange={(e) => onChangeText(e)}
        />
      </FormControl>
    </>
  );
};
export default FormComponent;
