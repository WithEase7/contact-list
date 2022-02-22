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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("personal");
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [contactDetails, setContactDetails] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContacts(data);
  }, []);

  const handleData = () => {
    contacts.push({
      id: contactDetails._id,
      name: contactDetails.name,
      phone: contactDetails.phone,
      type: contactDetails.type,
      isWhatsapp: contactDetails.isWhatsapp,
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setName("");
    setPhone("");
    setType("personal");
    isWhatsapp(false);
    setEditContacts(false);
  };

  const handleCheckbox = () => {
    setIsWhatsapp(!isWhatsapp);
    setContactDetails({
      ...contactDetails,
      isWhatsapp: isWhatsapp,
    });
  };

  const hanldeEditContact = (index) => {
    setEditContacts(true);
    setContactDetails(contacts[index]);
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
          <Grid item xs={12} style={{ width: "100%", marginBottom: 20 }}>
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
          <Grid item xs={12} style={{ width: "100%", marginBottom: 20 }}>
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

          <Grid item xs={12} style={{ width: "100%" }}>
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
          <Grid container xs={6} md={12}>
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
                    <Button onClick={() => hanldeEditContact(index)}>
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
