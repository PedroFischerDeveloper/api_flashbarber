import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';

import Schedule from './pages/Schedule/index';

//register/auth
import AuthComponent from './pages/Auth';
import RegisterComponent from './pages/Register';

// admin
import DashboardComponent from './pages/Admin/Dashboard';
import ProfileComponent from './pages/Admin/Perfil';
import WorkComponent from './pages/Admin/Trabalho';



const Routes = () => {
	return (
		<BrowserRouter>
			<Switch >
				<Route path="/" exact component={Home} />
				<Route path="/Agenda" component={Schedule} />
				<Route path="/Login" component={AuthComponent} />
				<Route path="/Registro" component={RegisterComponent} />
				<Route path="/Dashboard" component={DashboardComponent} />
				<Route path="/Dashboard/Perfil" component={ProfileComponent} />
				<Route path="/Dashboard/Trabalho" component={WorkComponent} />
			</Switch>
		</BrowserRouter>
	)
}
export default Routes;