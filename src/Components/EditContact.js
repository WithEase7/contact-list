import React, { useEffect, useState } from "react";
import { Grid, TextField, Checkbox, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const EditContact = () => {
  const [contacts, setContacts] = useState([]);
  const [editContacts, setEditContacts] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [contactDetails, setContactDetails] = useState({});
  const [contactIndex, setContactIndex] = useState(0);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContacts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [JSON.stringify(contacts)]);

  const handleData = () => {
    const temp = contacts;
    temp[contactIndex].id = contactDetails.id;
    temp[contactIndex].name = contactDetails.name;
    temp[contactIndex].phone = contactDetails.phone;
    temp[contactIndex].type = contactDetails.type;
    temp[contactIndex].isWhatsapp = contactDetails.isWhatsapp;
    setContacts(temp);
    setEditContacts(false);
  };

  const handleCheckbox = () => {
    setIsWhatsapp(!isWhatsapp);
    setContactDetails({
      ...contactDetails,
      isWhatsapp: isWhatsapp,
    });
  };

  const handleEditContacts = (index) => {
    setEditContacts(true);
    setContactDetails(contacts[index]);
    setContactIndex(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  return (
    <div className="App">
      {editContacts ? (
        <div>
          <Grid item style={{ width: "100%", marginBottom: 20 }}>
            <TextField
              variant="outlined"
              label="name"
              name="name"
              className="textfields"
              value={contactDetails.name}
              onChange={handleInputChange}
              required
              style={{ width: "80%", fontSize: "10px" }}
            />
          </Grid>
          <Grid item style={{ width: "100%", marginBottom: 20 }}>
            <TextField
              variant="outlined"
              label="phone"
              name="phone"
              className="textfields"
              value={contactDetails.phone}
              onChange={handleInputChange}
              required
              style={{ width: "80%", fontSize: "10px" }}
            />
          </Grid>

          <Grid item style={{ width: "100%" }}>
            <FormControl style={{ width: "80%" }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="type"
                name="type"
                defaultValue={contactDetails.type}
                onChange={handleInputChange}
              >
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="office">Office</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container>
            <Checkbox
              size={"small"}
              defaultChecked={isWhatsapp}
              onChange={handleCheckbox}
            />
            <Typography variant="subtitle1" style={{ marginTop: 7 }}>
              Whatsapp
            </Typography>
          </Grid>
          <div>
            <Button onClick={() => setEditContacts(false)}>Cancel</Button>
            <Button onClick={handleData}>Save Changes</Button>
          </div>
        </div>
      ) : (
        <div>
          {contacts.length
            ? contacts.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      border: "1px solid black",
                      justifyContent: "space-around",
                      width: "40%",
                      display: "flex",
                    }}
                  >
                    <p>{item.name}</p>
                    <Button onClick={() => handleEditContacts(index)}>
                      Edit
                    </Button>
                  </div>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
};

export default EditContact;

