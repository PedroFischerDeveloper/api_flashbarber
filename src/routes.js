import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import Schedule from './pages/Schedule/index';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch >
				<Route path="/" exact component={Home} />
				<Route path="/Agenda" component={Schedule} />
			</Switch>
		</BrowserRouter>
	)
}
export default Routes;