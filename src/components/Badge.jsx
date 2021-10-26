import React from 'react';
import { BadgeDefault } from './Badge.styled';

const Badge = ({ task }) => {
	const TaskPriorityColor = () => {
		const priority = task;

		if (priority === 'Low') {
			return 'blue';
		}

		if (priority === 'Medium') {
			return 'yellow';
		}

		if (priority === 'High') {
			return 'red';
		}
	};

	return <BadgeDefault color={TaskPriorityColor()}>{task}</BadgeDefault>;
};

export default Badge;
