import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    console.log(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2 style={{textAlign:"center"}}>Add Contact </h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <button className="ui primary button" >Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
