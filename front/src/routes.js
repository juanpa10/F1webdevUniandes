//dependencias
import React from "react";
import {Route, Switch} from "react-router-dom";

//Components

import App from "./components/App";
import Drivers from "./components/Drivers";
import Teams from "./components/Teams";
import Circuits from "./components/Circuits";
import Stats from "./components/Stats";
import FanZone from "./components/FanZone";
import P404 from "./components/Page404";
import home from "./components/Home"


const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/drivers" component={Drivers}/>np
            <Route path="/Teams" component={Teams}/>
            <Route path="/Circuits" component={Circuits}/>
            <Route path="/Stats" component={Stats}/>
            <Route path="/FanZone" component={FanZone}/>
            <Route path="/" component={home}/>
            <Route component={P404}/>

        </Switch>
    </App>

export default AppRoutes;