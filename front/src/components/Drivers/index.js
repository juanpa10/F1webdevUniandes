import React, {Component} from "react";

class Drivers extends  Component{
    constructor(props)
{
    super(props);
    this.state = {
        drivers:[]
    };


}

       componentDidMount(){
           fetch("/driversinfo", {method: "GET", headers:{accept:"application/json"}})
          .then((res)=> {
              console.log("rest en index");
               if(res.ok)
                  return res.json();
              })
               .then((drivers) =>{
                   this.setState({
                       drivers : drivers
                  })
             })
       }



    renderDrivers()
    {
        return this.state.drivers.map((t)=> {
            return(<div className="col-sm-4 caja">
                <br/>
                <img className="fotoPerfil" src={t.profile_photo} alt=""/>
                <img className="fotoScuderia" src={t.c_image} alt=""/>
                <p className="descripcion">Name: {t.givenName} {t.familyName}</p>
                <p className="descripcion">Number : {t.permanentNumber}</p>
                <p className="descripcion">Date of birth: {t.dateOfBirth}</p>
                <p className="descripcion">Nacionality: {t.nationality}</p>
                <br/>



                </div>);
    });
    }

    render(){
        return(
            <div className="Drivers">
                <br/>
                <h1>Drivers Season 2017</h1>
                <br/>
                <br/>
                <div className="row">

                    {this.renderDrivers()}
                </div>
            </div>
        )
    }
}

export default Drivers;