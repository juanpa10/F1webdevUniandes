import React, {Component} from "react";

class FanZone extends  Component{
    constructor(props)
    {
        super(props);
        this.state = {
            fanZone:[]
        };


    }

    obtenerdatos()
    {

    }
    componentDidMount(){
        fetch("/fans", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("rest en index");
                if(res.ok)
                    return res.json();
            })
            .then((fanZone) =>{
                this.setState({
                    fanZone : fanZone
                })
            })
    }

    renderFZ()
    {
        return this.state.fanZone.map((t)=> {
            return(<div className="col-sm-6 caja">
                <br/>
                  <iframe width="420" height="345" src={t.video}></iframe>


                <p className="descripcion">Name: {t.name}</p>
                <p className="descripcion">From : {t.from}</p>
                 <br/>



            </div>);
        });
    }

    render(){
        return(
            <div className="Drivers">
                <br/>
                <h1>FanZone</h1>
                <br/>
                <br/>
                <div className="row">

                    {this.renderFZ()}
                </div>
                <br/><br/><br/><br/>
                <h1>You can do some cool stuff in your car ? Show us !!</h1>
                <br/>
                <br/>

                <form>
                    <label>
                        Name: <br/>
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        From: <br/>
                        <input type="text" name="from" />
                    </label>
                    <br/>
                    <label>
                        Url of your video: <br/>
                        <input type="text" name="url" />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FanZone;