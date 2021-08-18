import React, { Component } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import './_styleApp.css';
import './_styleUtility.css';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log(`App Component didMount`);
	}

	componentDidUpdate() {
		console.log(`App Component didUpdate`);
	}

	componentWillUnmount() {
		console.log(`App Component willUnmount`);
	}

	render() {
		return (
			<main className='wrapper'>
				<div className='board'>
					<div className='board__form'>
						<Logo />
						<Form />
					</div>
					<div className='board__content'></div>
				</div>
			</main>
		);
	}
}

export default App;
