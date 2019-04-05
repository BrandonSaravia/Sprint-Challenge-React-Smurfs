import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
      
    };
  }

  addSmurf = event => {
    event.preventDefault();
    
    // add code to create the smurf using the api
    this.props.addNewSmurf(this.state.smurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
    console.log(this.state.smurf)
  }

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
       smurf: {
         ...prevState.smurf,
         [e.target.name]: value
       }
        
  }))};

  render() {
    console.log(this.state.smurf)
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
