import React, { Component } from 'react';
import './../_styleForm.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			priority: '',
			date: '',
			task: ''
		};
	}
	render() {
		return (
			<form action=''>
				<div className='form-group'>
					<input type='text' placeholder='Enter task title' className='form-input' />
				</div>
				<div className='form-group flex gap'>
					<select name='priority' id='priority' className='form-input'>
						<option value='1'>Low</option>
						<option value='2'>Medium</option>
						<option value='3'>High</option>
					</select>
					<input type='date' placeholder='Due Date' className='form-input' />
				</div>
				<div className='form-group'>
					<textarea rows='3' placeholder='Enter task description' className='form-input' />
				</div>
				<div className='form-group flex gap justify-center form-button'>
					<button type='submit' className='button button--yellow'>
						Submit
					</button>
					<button type='Button' className='button button--blue'>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

export default Form;
