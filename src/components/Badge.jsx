import React from 'react';
import { BadgeDefault } from './Badge.styled';

const Badge = ({ task }) => {
	const handlePriorityColor = () => {
		const priority = task;

		if (priority === 'Low' || priority === '0') {
			return 'blue';
		}

		if (priority === 'Medium' || priority === '1') {
			return 'yellow';
		}

		if (priority === 'High' || priority === '2') {
			return 'red';
		}
	};

	const handlePriorityText = () => {
		const priority = task;
		
		if (priority === '0') {
			return 'Low';
		}

		if (priority === '1') {
			return 'Medium';
		}

		if (priority === '2') {
			return 'High';
		}
	};

	return <BadgeDefault color={handlePriorityColor()}>{handlePriorityText()}</BadgeDefault>;
};

export default Badge;
