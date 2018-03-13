import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from './api';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		};
	}
	componentDidMount = () => {
		new Client().getMessage().then(result => {
			console.log(result);
			this.setState({ message: result.message });
		});
	};

	render() {
		return (
			<div className="home">
				<h1>Welcome to Express React Starter</h1>
				<p className="message">message from api: {this.state.message}</p>
				<Link to="/search">Search</Link>
			</div>
		);
	}
}
export default Home;
