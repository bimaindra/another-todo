import React from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Card from './components/Card';
import Search from './components/Search';
import { GlobalStyles } from './components/GlobalStyles.styled';
import { Wrapper } from './components/Wrapper.styled';
import { Board, BoardForm, BoardContent } from './components/Board.styled';
import { Centered } from './components/Utility.styled';
import ImageEmptyTask from './empty-task.png';

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataForm: {
				title: '',
				description: '',
				priority: '',
				date: '',
				isComplete: false,
				isShowDetail: false
			},
			dataTask: [],
			dataFilter: {
				keyword: '',
				sortBy: 0
			},
			dataSort: [
				{
					0: 'Sort By'
				},
				{
					1: 'Low'
				},
				{
					2: 'High'
				}
			],
			isValidate: false,
			tooltipActive: ''
		};

		// Bind function
		this.handleUpdateDataForm = this.handleUpdateDataForm.bind(this);
		this.handleAddTask = this.handleAddTask.bind(this);
		this.handleDeleteTask = this.handleDeleteTask.bind(this);
		this.handleResetForm = this.handleResetForm.bind(this);
		this.handleOpenTooltip = this.handleOpenTooltip.bind(this);
		this.handleShowDetail = this.handleShowDetail.bind(this);
		this.handleCloseDetail = this.handleCloseDetail.bind(this);
		this.handleCompleteTask = this.handleCompleteTask.bind(this);
		this.wrapperRef = React.createRef();
		this.handleCloseTooltip = this.handleCloseTooltip.bind(this);
		this.handleFilterTask = this.handleFilterTask.bind(this);
	}

	componentDidMount() {
		//console.log(`App Component didMount`)
		document.addEventListener('mousedown', this.handleCloseTooltip);

		// Get dataTask from localstorage
		this.handleGetFromLocal();
	}

	componentDidUpdate() {
		//console.log(`App Component didUpdate`);

		// Save/push dataTask to localstorage
		this.handleSaveToLocal();
	}

	componentWillUnmount() {
		//console.log(`App Component willUnmount`);
		document.addEventListener('mousedown', this.handleCloseTooltip);
	}

	handleValidateForm() {
		let dataForm = this.state.dataForm;
		let valid = true;

		if (dataForm.title.length === 0) {
			valid = false;
		}

		if (dataForm.date.length === 0) {
			valid = false;
		}

		if (dataForm.description.length === 0) {
			valid = false;
		}

		if (dataForm.priority.length === 0) {
			valid = false;
		}

		this.setState({
			isValidate: valid
		});
	}

	handleUpdateDataForm(value, index) {
		let dataForm = this.state.dataForm;
		let tempDataForm = { ...dataForm, [index]: value };

		this.setState({ dataForm: tempDataForm }, () => {
			this.handleValidateForm();
		});
	}

	handleResetForm(dataForm) {
		this.setState({ dataForm: dataForm });
	}

	handleAddTask(dataForm) {
		const dataTask = this.state.dataTask;
		const id = Math.floor(Math.random() * 100) + 1;
		const newTask = { id, ...dataForm };

		this.setState({
			dataTask: [...dataTask, newTask]
		});
	}

	handleDeleteTask(e, id) {
		e.preventDefault();
		let dataTask = this.state.dataTask;
		let filteredState = dataTask.filter((task) => task.id !== id);

		this.setState({
			dataTask: filteredState
		});
	}

	handleSaveToLocal() {
		localStorage.setItem('dataTask', JSON.stringify(this.state.dataTask));
	}

	handleGetFromLocal() {
		if (localStorage.getItem('dataTask') === null) {
		} else {
			let dataTaskLocal = JSON.parse(localStorage.getItem('dataTask'));
			this.setState({ dataTask: dataTaskLocal });
		}
	}

	handleOpenTooltip(e, id) {
		e.preventDefault();
		this.setState({ tooltipActive: id });
	}

	handleCloseTooltip(e, id) {
		console.log('current ===> ', this.wrapperRef);
		console.log('contain ===> ', e.target);
		console.log('id ===> ', id);

		//if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
		//	this.setState({ tooltipActive: id });
		//}
	}

	handleShowDetail(e, id) {
		e.preventDefault();
		let dataTask = this.state.dataTask;
		const updateState = dataTask.map((task) =>
			task.id === id ? { ...task, isShowDetail: !task.isShowDetail } : task
		);

		this.setState({
			dataTask: updateState
		});
	}

	handleCloseDetail(e, id) {
		e.preventDefault();
		let dataTask = this.state.dataTask;
		const updateState = dataTask.map((task) =>
			task.id === id ? { ...task, isShowDetail: false } : task
		);

		this.setState({
			dataTask: updateState
		});
	}

	handleCompleteTask(id) {
		let dataTask = this.state.dataTask;
		const updateState = dataTask.map((task) =>
			task.id === id ? { ...task, isComplete: !task.isComplete } : task
		);

		this.setState({
			dataTask: updateState
		});
	}

	handleFilterTask(e, index) {
		let dataFilter = this.state.dataFilter;
		let tempDataFilter = { ...dataFilter, [index]: e };

		this.setState({ dataFilter: tempDataFilter });
	}

	render() {
		const { dataForm, dataTask, dataFilter, tooltipActive } = this.state;
		let taskIncompleted = [];
		let taskCompleted = [];

		// DATA TASK INCOMPLETED
		dataTask
			.filter((isComplete) => isComplete.isComplete === false)
			.map((task) =>
				taskIncompleted.push(
					<Card
						key={`cardTask-${task.id}`}
						task={task}
						onHandleDeleteTask={this.handleDeleteTask}
						onHandleOpenTooltip={this.handleOpenTooltip}
						onHandleShowDetail={this.handleShowDetail}
						onHandleCloseDetail={this.handleCloseDetail}
						onHandleTaskComplete={this.handleCompleteTask}
						onHandleRef={this.wrapperRef}
						isTooltip={task.id === tooltipActive}
					/>
				)
			);

		// DATA TASK COMPLETED
		dataTask
			.filter((isComplete) => isComplete.isComplete === true)
			.map((task) =>
				taskCompleted.push(
					<Card
						key={`cardTask-${task.id}`}
						task={task}
						onHandleDeleteTask={this.handleDeleteTask}
						onHandleOpenTooltip={this.handleOpenTooltip}
						onHandleShowDetail={this.handleShowDetail}
						onHandleCloseDetail={this.handleCloseDetail}
						onHandleTaskComplete={this.handleCompleteTask}
						onHandleRef={this.wrapperRef}
						isTooltip={task.id === tooltipActive}
					/>
				)
			);

		return (
			<div>
				<GlobalStyles />
				<Wrapper>
					<Board>
						<BoardForm>
							<Logo />
							<Form
								dataForm={dataForm}
								onHandleUpdateDataForm={this.handleUpdateDataForm}
								onHandleValidateForm={this.state.isValidate}
								onHandleOnSubmit={this.handleAddTask}
								onHandleResetForm={this.handleResetForm}
							/>
						</BoardForm>
						<BoardContent>
							<Search dataFilter={dataFilter} onHandleFilterTask={this.handleFilterTask} />
							{dataTask.length > 0 ? (
								<div>
									{taskIncompleted}

									{taskCompleted.length === 0 ? (
										true
									) : (
										<div>
											<h2>Task Completed</h2>
											{taskCompleted}
										</div>
									)}
								</div>
							) : (
								<Centered>
									<div>
										<img src={ImageEmptyTask} alt='BIM' />
										<p>Pertukangan belum ada proyek lagi nih...</p>
									</div>
								</Centered>
							)}
						</BoardContent>
					</Board>
				</Wrapper>
			</div>
		);
	}
}

export default App;
