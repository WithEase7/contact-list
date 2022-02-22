import React, { useEffect, useState } from "react";

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
                }}
              >
                <p>{item.name}</p>
                <button onClick={() => deleteContact(item.id)}>Delete</button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Home;
