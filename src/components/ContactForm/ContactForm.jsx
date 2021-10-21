import React from "react";
import "../ContactForm/ContactForm.css";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmite = (e) => {
    e.preventDefault();
    this.props.onSubmite(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form id="contact" onSubmit={this.handleSubmite}>
        <label>
          <p>Name:</p>
          <input
            className="input-field"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Number:</p>
          <input
            className="input-field"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="submit-button">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
