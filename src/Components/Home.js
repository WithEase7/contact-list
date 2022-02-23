import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts") || "[]");
    setContacts(data);
  }, []);

  const deleteContact = (id) => {
    const temp = contacts.filter((item) => item.id !== id);
    localStorage.setItem("contacts", JSON.stringify(temp));
    setContacts(temp);
    alert("Contact deleted");
  };

  return (
    <div style={{ marginTop: 50 }}>
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
              <IconButton
                onClick={() => deleteContact(item.id)}
                sx={{ color: "rgba(240, 0, 0)", marginRight: "10px" }}
              >
                <InfoIcon />
              </IconButton>
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
  );
};

export default Home;
