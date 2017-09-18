import React, {Component} from "react";

import PropTypes from "prop-types";

import Circuit from "./Circuit.js";

class CircuitsList extends Component {
    constructor(props){
        super(props);
    }
    
    renderCircuits(){        
       return this.props.circuits.map((t,i) =>{
            return <Circuit circuit ={t} key={i}/>
        });
    }
    
    render(){
        return(<div>
             {this.renderCircuits()}
        </div>);
    }
}

CircuitsList.PropTypes = {
    circuits : PropTypes.array.isRequired
};

export default CircuitsList;