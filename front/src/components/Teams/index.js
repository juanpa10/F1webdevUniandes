import React, {Component} from "react";

import TeamsList from "./TeamsList.js";

class Teams extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                teams:[]
            };
         }
    componentDidMount(){
        fetch("/teamsinfo", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("rest en index");
                if(res.ok)
                    return res.json();
            })
            .then((teams) =>{
                this.setState({
                    teams : teams
                })
            })
    }

    render(){
        return(
            <div className="Teams">
            <h1>Teams Season 2017</h1>
                <br/>
                <TeamsList teams={this.state.teams}/>
            </div>
        );
    }
}

export default Teams;