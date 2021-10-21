import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import shortid from "shortid";
import Filter from "./components/Filter/Filter";
import contactFilter from "./utils/filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  handleSubmiteForme = (contact) => {
    this.state.contacts.some(({ name }) => name === contact.name)
      ? alert("Contact alredy exists")
      : this.setState((prevState) => ({
          contacts: [
            ...prevState.contacts,
            { id: shortid.generate(), ...contact },
          ],
        }));
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleChangeFilter = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmite={this.handleSubmiteForme} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          onDelete={this.removeContact}
          contacts={contactFilter(this.state.contacts, this.state.filter)}
        />
      </Container>
    );
  }
}

export default App;
