import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contacts;
  return (
    <div className="item">
      <div className="content">
        <div className="header">
          <h4>{name}</h4>
        </div>
       <button  onClick={()=> props.clickHandler(id)}> <i
          className="trash alternate outline icon red"
          style={{ float: "right" }}
         
        ></i></button>
        <div>
          <p style={{ marginBottom: "15px" }}>{email}</p>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
