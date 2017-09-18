//Dependencias
import React, { Component } from 'react';
import PropTypes from "prop-types";

//components

import Content from "./Global/Content";



import '../App.css';

class App extends Component {
    static propTypes =
        {
            children: PropTypes.object.isRequired
        };

  render() {
      const {children} = this.props;
    return (
      <div className="App">

          <Content body={children}/>


      </div>
    );
  }
}

export default App;
