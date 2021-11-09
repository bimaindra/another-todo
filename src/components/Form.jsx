import PropTypes from 'prop-types';
import {
	FormContainer,
	FormGroup,
	FormInput,
	FormButton,
	SelectInput,
	TextArea
} from './Form.styled';
import { Button } from './Button.styled';

const Form = ({
	dataForm,
	onHandleUpdateDataForm,
	onHandleValidateForm,
	onHandleOnSubmit,
	onHandleResetForm
}) => {
	const onChangeInput = (e, index) => {
		e.preventDefault();
		onHandleUpdateDataForm(e.target.value, index);
	};

	const onSubmit = (e, dataForm) => {
		e.preventDefault();

		if (!dataForm.title) {
			alert('Title is empty!');
			return;
		}

		if (!dataForm.date) {
			alert('Date is empty!');
			return;
		}

		if (!dataForm.description) {
			alert('Description is empty!');
			return;
		}

		if (!dataForm.priority) {
			alert('Priority is empty!');
			return;
		}

		onHandleOnSubmit(dataForm);

		dataForm.title = '';
		dataForm.date = '';
		dataForm.description = '';
		dataForm.priority = '';
	};

	const onResetForm = (e, dataForm) => {
		e.preventDefault();

		onHandleResetForm(dataForm);

		dataForm.title = '';
		dataForm.date = '';
		dataForm.description = '';
		dataForm.priority = '';
	};

	return (
		<div>
			<FormContainer onSubmit={(e) => onSubmit(e, dataForm)}>
				<FormGroup>
					<FormInput
						type='text'
						placeholder='Enter task title'
						value={dataForm.title}
						onChange={(e) => onChangeInput(e, 'title')}
					/>
				</FormGroup>
				<FormGroup>
					<SelectInput>
						<select
							name='priority'
							id='priority'
							value={dataForm.priority}
							onChange={(e) => onChangeInput(e, 'priority')}>
							<option value=''>===Priority===</option>
							<option value='0'>Low</option>
							<option value='1'>Medium</option>
							<option value='2'>High</option>
						</select>
					</SelectInput>
					<FormInput
						type='date'
						placeholder='Due Date'
						value={dataForm.date}
						onChange={(e) => onChangeInput(e, 'date')}
					/>
				</FormGroup>
				<FormGroup>
					<TextArea>
						<textarea
							rows='3'
							placeholder='Enter task description'
							value={dataForm.description}
							onChange={(e) => onChangeInput(e, 'description')}></textarea>
					</TextArea>
				</FormGroup>
				<FormButton>
					<Button type='submit' disabled={!onHandleValidateForm}>
						Submit
					</Button>
					<Button type='button' color='yellow' onClick={(e) => onResetForm(e, dataForm)}>
						Cancel
					</Button>
				</FormButton>
			</FormContainer>
		</div>
	);
};

Form.propTypes = {
	dataForm: PropTypes.object,
	onHandleUpdateDataForm: PropTypes.func,
	onHandleValidateForm: PropTypes.bool,
	onHandleOnSubmit: PropTypes.func,
	onHandleResetForm: PropTypes.func
};

export default Form;
