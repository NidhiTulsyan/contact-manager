import React, { useState, useEffect } from "react";
// import { uuid } from "uuidv4";
import {v4} from 'uuid';
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./contactList";

function App() {
  const LOCAL_STORAGE_KEY = "CONTACTS";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: v4(), ...contact }]);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* <ContactList contacts={contacts}  /> */}
    </div>
  );
}

export default App;
