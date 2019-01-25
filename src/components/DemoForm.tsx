import React, { Component } from 'react';
import './DemoForm.css';

type Person = {
  firstName: string;
  lastName: string;
  age?: number;
};

type DemoFormState = {
  person: Person;
};

class DemoForm extends Component<{}, DemoFormState> {
  state = {
    person: {
      firstName: 'Maurice',
      lastName: 'de Beijer'
    }
  };

  changePerson = (e: any) => {
    const { name, value } = e.target;
    const person = { ...this.state.person, [name]: value };
    this.setState({ person });
  };

  render() {
    const { person }: { person: Person } = this.state;

    return (
      <form>
        <h2>Demo</h2>

        <div>
          <label className="label" htmlFor="firstName">
            Voornaam:
          </label>
          <input
            type="text"
            id="firstName"
            value={person.firstName}
            name="firstName"
            onChange={this.changePerson}
          />
        </div>
        <div>
          <label className="label" htmlFor="lastName">
            Achternaam:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={person.lastName}
            onChange={this.changePerson}
          />
        </div>
        <div>{JSON.stringify(person)}</div>
      </form>
    );
  }
}

export default DemoForm;
