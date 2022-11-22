import React, { Component } from "react";

// import PropTypes from "prop-types";
// import { nanoid } from 'nanoid';

export class ContactsForm extends Component {
  state = {
    name: '',
  };
    
  onChange = (e) => { 
      console.log(e.target.name)
      const { name, value } = e.target;
      this.setState({
        [name]: value
    })
  }

    render() {
        return (
        <ContactsForm>
            <label>
            <span>Name</span>
            <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          <button>Add contact</button>
        </ContactsForm>);
    }
}


// ContactsForm.propTypes = {
//      contacts: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         id: PropTypes.string.isRequired,
//     })).isRequired,
// }