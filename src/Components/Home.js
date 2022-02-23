import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Delete";
import {Link} from 'react-router-dom'

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
    <div className="App">
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
                  marginBottom: 20,
                }}
              >
                <p>{item.name}</p>
                <Button onClick={() => deleteContact(item.id)}><InfoIcon /></Button>
              </div>
            );
          })
        : (
          <div>
            <h3>No contacts saved</h3>
            <Link to="/add">Add contact</Link>
          </div>
        )}
    </div>
  );
};

export default Home;
