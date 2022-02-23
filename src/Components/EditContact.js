import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div style={{ marginTop: 50 }}>
      {editContacts ? (
        <div style={{ width: "60%", margin: "0 auto" }}>
          <Grid item style={{ width: "80%", margin: "0 auto" }}>
            <TextField
              variant="outlined"
              label="name"
              name="name"
              className="textfields"
              value={contactDetails.name}
              onChange={handleInputChange}
              required
              style={{ width: "100%", fontSize: "10px", marginBottom: 20 }}
            />
          </Grid>
          <Grid item style={{ width: "80%", margin: "0 auto" }}>
            <TextField
              variant="outlined"
              label="phone"
              name="phone"
              className="textfields"
              value={contactDetails.phone}
              onChange={handleInputChange}
              required
              style={{ width: "100%", fontSize: "10px", marginBottom: 20 }}
            />
          </Grid>

          <Grid item style={{ width: "80%", margin: "0 auto" }}>
            <FormControl style={{ width: "100%", marginBottom: 20 }}>
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
          <Grid container style={{ width: "80%", margin: "0 auto" }}>
            <Checkbox
              size={"small"}
              defaultChecked={isWhatsapp}
              onChange={handleCheckbox}
            />
            <Typography variant="subtitle1" style={{ marginTop: 7 }}>
              Whatsapp
            </Typography>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <Button onClick={() => setEditContacts(false)} variant="contained">
              Cancel
            </Button>
            <Button onClick={handleData} variant="contained">
              Save Changes
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {contacts.length ? (
            contacts.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    border: "1px solid black",
                    borderRadius: 10,
                    justifyContent: "space-between",
                    paddingLeft: 20,
                    width: "60%",
                    display: "flex",
                    margin: "0 auto",
                    marginBottom: 20,
                    background: "#7045a8",
                  }}
                >
                  <p style={{ color: "white" }}>{item.name}</p>
                  <Button onClick={() => handleEditContacts(index)} color="error">
                    Edit
                  </Button>
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>No contacts saved</h3>
                <Button variant="contained">
                  <Link
                    to="/add"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Add contact
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditContact;
