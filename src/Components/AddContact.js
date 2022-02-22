import React, { useEffect, useState } from "react";
import { Grid, TextField, Checkbox, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const AddContact = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("personal");
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContacts(data);
  }, []);

  const handleData = () => {
    contacts.push({
      id: Math.floor(Math.random() * 1000000),
      name: name,
      phone: phone,
      type: type,
      isWhatsapp: isWhatsapp,
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setName("");
    setPhone("");
    setType("personal");
    isWhatsapp(false);
  };

  const handleCheckbox = () => {
    setIsWhatsapp(!isWhatsapp);
  };

  const deleteContact = (id) => {
    const temp = contacts.filter((item) => item.id !== id);
    localStorage.setItem("contacts", JSON.stringify(temp));
    setContacts(temp);
  };

  const clearData = () => {
    localStorage.clear();
  };

  return (
    <div className="App">
       <Grid item xs={12} style={{ width: "100%", marginBottom: 20 }}>
            <TextField
              variant="outlined"
              label="name"
              name="name"
              className="textfields"
              value={name}
              onChange={e => setName(e.target.value)}
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
              value={phone}
              onChange={e => setPhone(e.target.value)}
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
                defaultValue={type}
                onChange={e=> setType(e.target.value)}
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
        <Button onClick={handleData}>Add</Button>
      </div>
    </div>
  );
};

export default AddContact;
