import PropTypes from 'prop-types';
import Badge from './Badge';
import { BiDotsHorizontalRounded, BiXCircle } from 'react-icons/bi';
import { Tooltip, TooltipContent } from './TooltipTask.styled';
import { CardList, CardTitle, CardDate, CardDetail, CardCol } from './Card.styled';
import { Checkbox } from './Form.styled';
import { SearchClearButton } from './Search.styled';
import { FlexDefault, FlexItemCenter } from './Utility.styled';

const CardTask = ({
	task,
	onHandleDeleteTask,
	onHandleOpenTooltip,
	onHandleShowDetail,
	onHandleCloseDetail,
	onHandleTaskComplete,
	onHandleRef,
	isTooltip
}) => {
	return (
		<div>
			<CardList>
				<FlexItemCenter>
					<FlexDefault>
						<CardCol className='__Border'>
							<Checkbox className='__Checkbox'>
								<input
									id={`checkbox-${task.id}`}
									type='checkbox'
									value={`value-${task.id}`}
									checked={task.isComplete}
									onChange={() => onHandleTaskComplete(task.id)}
								/>
								<label htmlFor={`checkbox-${task.id}`}></label>
							</Checkbox>
						</CardCol>
						<CardCol>
							<CardTitle>{task.title}</CardTitle>
							<CardDate>{task.date}</CardDate>
							<Badge task={task.priority}>{task.priority}</Badge>
						</CardCol>
					</FlexDefault>
					<FlexDefault>
						<CardCol>
							<Tooltip ref={onHandleRef}>
								<BiDotsHorizontalRounded
									className='__icon'
									onClick={(e) => onHandleOpenTooltip(e, task.id)}
								/>
								<TooltipContent isShow={isTooltip}>
									<button
										id={task.id}
										type='button'
										onClick={(e) => onHandleShowDetail(e, task.id)}>
										Detail
									</button>
									<button
										id={task.id}
										type='button'
										onClick={(e) => onHandleDeleteTask(e, task.id)}>
										Delete
									</button>
								</TooltipContent>
							</Tooltip>
						</CardCol>
					</FlexDefault>
				</FlexItemCenter>
				<CardDetail style={task.isShowDetail ? { display: 'block' } : { display: 'none' }}>
					<SearchClearButton className='__Icon'>
						<BiXCircle onClick={(e) => onHandleCloseDetail(e, task.id)}></BiXCircle>
					</SearchClearButton>
					{task.description}
				</CardDetail>
			</CardList>
		</div>
	);
};

CardTask.propTypes = {
	task: PropTypes.object,
	onHandleDeleteTask: PropTypes.func,
	onHandleOpenTooltip: PropTypes.func,
	onHandleShowDetail: PropTypes.func,
	onHandleCloseDetail: PropTypes.func,
	onHandleTaskComplete: PropTypes.func,
	isTooltip: PropTypes.bool
};

export default CardTask;
