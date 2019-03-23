import React from 'react';

export default class NewStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newStudent = alert('A name was submitted: ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstname">Firstname:</label>
        <input
          type="text"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
