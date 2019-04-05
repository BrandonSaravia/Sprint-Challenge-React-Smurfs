import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addNewSmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <div className="nav-links">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to="/addSmurf">
                Add Smurf
              </NavLink>
            </div>
          </nav>
          {/* <Smurfs smurfs={this.state.smurfs} /> */}
          {console.log(this.state.smurfs)}
          <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
          <Route path='/addSmurf' render={props => <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />} />

        </div>
      </Router>
    );
  }
}

export default App;
