import React from "react";
import ContactCard from "./contactCard";

const ContactList =(props)=>{
    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }

    const RenderContactList = props.contacts.map((con)=>{
        return(
           <ContactCard contacts ={con} clickHandler={deleteContactHandler} key={con.id}/>
        //    <ContactCard contacts ={con} />
        )
    })

    return(
        <div className="ui celled list">
           <h3>Contact List</h3>
           {RenderContactList}
        </div>
    )
};

export default ContactList;