import React, { Component, ChangeEvent } from 'react';
import './DemoForm.css';
import LabledInput from './LabledInput';

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

  changePerson = (e: { name: string; value: string | number }) => {
    const { name, value } = e;
    const person = { ...this.state.person, [name]: value };
    this.setState({ person });
  };

  render() {
    const { person }: { person: Person } = this.state;

    return (
      <form>
        <h2>Demo</h2>

        <LabledInput
          className="cool stuff"
          name="firstName"
          value={person.firstName}
          onChange={this.changePerson}
          caption="Voornaam:"
        />
        <LabledInput
          name="lastName"
          value={person.lastName}
          onChange={this.changePerson}
          caption="Achternaam: "
        />
        <LabledInput
          name="age"
          value={person.age || ''}
          type="number"
          onChange={this.changePerson}
          caption="Leeftijd: "
        />
        <div>{JSON.stringify(person)}</div>
      </form>
    );
  }
}

export default DemoForm;
