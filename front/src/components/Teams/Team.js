import React, {Component} from "react";
import PropTypes from "prop-types";

 class Team extends Component {
    constructor(props){
        super(props);
    }
   
      
    render(){
        return(
            <div>
            <div className="nombreTeam text-center"><h2>{this.props.team.name}</h2></div>
            <div className="row"> 
            <div className="col-sm-4">
            <img className="imagenETeam" src={this.props.team.imagen_escuderia}  width="300"/>
            </div>
            <div className="col-sm-4">
            <img className="imagenCarroTeam" src={this.props.team.imagen_carro} width="300"/>
            </div>
            <div className="col-sm-4">
            <div>
             <div className="row border">
             <div className="col-md-6"><h4>Nationality:</h4></div>
            <div className="nacionalidadTeam col-md-6">{this.props.team.nationality}</div>   
            </div> 
           <div className="row"> 
            <div className="text-center col-md-6"><h4>Pilots:</h4></div>
            <div className="col-md-6">
            <div className="piloto1Team"><img class="date-picker" src="https://s-media-cache-ak0.pinimg.com/originals/95/b5/73/95b573457ae683307e6fa4eeb5f021db.png" height="20" width="20"/>  {this.props.team.piloto1}</div>
            <div className="piloto2Team"><img class="date-picker" src="https://s-media-cache-ak0.pinimg.com/originals/95/b5/73/95b573457ae683307e6fa4eeb5f021db.png" height="20" width="20"/>  {this.props.team.piloto2}</div>
            </div>
            </div> 
            <div className="row"> 
            <div className="text-center title col-md-6"><h4>Titles:</h4>


            </div>
                <div className="col-md-6">
                    <div className="numTitulosTeam"><br/><img class="date-picker" src="http://www.free-icons-download.net/images/gold-cup-icon-71803.png" height="20" width="20"/>  {this.props.team.numero_titulos}</div>
                   </div>

                <div className="text-center title col-md-6"><h4>Podiums:</h4>


                </div>
                <div className="col-md-6">
                        <div className="numPodiosTeam"><br/><img class="date-picker" src="https://cdn1.iconfinder.com/data/icons/sports-glyphs-3/128/106-512.png" height="20" width="20"/>  {this.props.team.numero_podios}</div>
                </div>

            </div>
            </div>
            </div> 
            </div>
                <br/>
            </div>

        );
    }
}
Team.PropTypes = {
    team : PropTypes.object.isRequired
}

export default Team;