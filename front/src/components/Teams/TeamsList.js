import React, {Component} from "react";

import PropTypes from "prop-types";

import Team from "./Team.js";

class TeamsList extends Component {
    constructor(props){
        super(props);
    }
    
    renderTeams(){        
       return this.props.teams.map((t,i) =>{
            return <Team team ={t} key={i}/>
        });
    }
    
    render(){
        return(<div>
             {this.renderTeams()}
        </div>);
    }
}

TeamsList.PropTypes = {
    teams : PropTypes.array.isRequired
};

export default TeamsList;