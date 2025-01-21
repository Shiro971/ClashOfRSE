import React from "react";

class DefiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: '',
      description: '',
      date: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Logique pour gérer la soumission du formulaire
    console.log('Titre:', this.state.titre);
    console.log('Description:', this.state.description);
    console.log('Date:', this.state.date);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Titre :
          <input
            name="titre"
            type="text"
            value={this.state.titre}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description :
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Date :
          <input
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Créer Défi</button>
      </form>
    );
  }
}

export default DefiForm;
