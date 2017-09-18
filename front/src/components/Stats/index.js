import React, {Component} from "react";

class Stats extends  Component {
    constructor(props)
    {
        super(props);
        this.state = {
            stats:[


            ]
        };
    }

    componentDidMount(){
        fetch("/statsinfo", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("rest en index");
                if(res.ok)
                    return res.json();
            })
            .then((stats) =>{
                this.setState({
                    stats : stats
                })
            })
    }


    renderStats()
    {
        return this.state.stats.map((t)=> {
            return(
                <tr>
                    <td>   {t.position}  </td>
                    <td>   {t.givenName} {t.familyName}   </td>
                    <td>   {t.name}   </td>
                    <td><img className="car" src={t.car} alt=""/></td>
                    <td>   {t.wins}   </td>
                    <td>   {t.points}   </td>
                </tr>)



        });
    }

    render(){
        return(
            <div className="Stats">
                <br/>
                <h1>Stats Season 2017</h1>
                <br/>
                <br/>
                <div>

                    <table class="table table-striped statsTable" >
                        <thead>
                        <tr>
                            <th>Position</th>
                            <th>Driver</th>
                            <th>Team</th>
                            <th>Vehicle</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderStats()}
                        </tbody>
                    </table>
                    <br/>
                    <br/>

                </div>
            </div>
        )
    }
}


export default Stats;