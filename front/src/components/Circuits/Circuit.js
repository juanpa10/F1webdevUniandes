import React, {Component} from "react";
import PropTypes from "prop-types";

 class Circuit extends Component {
    constructor(props){
        super(props);
    }
   
      
    render(){
        return(
            <div>
            <div className="circuitName text-center"><h1>{this.props.circuit.circuitName}</h1></div>
            <div className="row">
            <div className=" col-sm-6"><img className="imagenCircuito" src={this.props.circuit.image} width="300"/></div>
            <div className="circuitPlace col-sm-6">
             <dt>Country:</dt>
             <p>{this.props.circuit.country} </p>
             <dt>City:</dt>
             <p>{this.props.circuit.locality}</p>
             <dt>Race Distance:</dt>
             <p>{this.props.circuit.distaciaCarrera}</p>  
             <dt>Lap Distance:</dt>  
             <p>{this.props.circuit.distaciaCircuito}</p>
              <dt>Total Laps:</dt>  
             <p>{this.props.circuit.numberLaps}    <img class="date-picker" src="https://d30y9cdsu7xlg0.cloudfront.net/png/27291-200.png" height="50" width="50"/></p>
             </div>

            </div>   
           </div>
        );
    }
}
Circuit.PropTypes = {
    circuit : PropTypes.object.isRequired
}

export default Circuit;