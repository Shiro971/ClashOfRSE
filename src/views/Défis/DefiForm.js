import React from 'react';

class DefiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: '',
      description: '',
      date: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
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
        <div>
          <label>Titre:</label>
          <input
            type="text"
            name="titre"
            value={this.state.titre}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default DefiForm;
