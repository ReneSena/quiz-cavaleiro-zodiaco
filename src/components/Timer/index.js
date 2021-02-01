import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

function Timer(props) {
	const { count } = props;

	return (
		<>
			<Container>
				<span className={count <= 10 && 'danger'}>{count}</span>
			</Container>
		</>
	);
}

Timer.protoType = {
	count: PropTypes.number.isRequired,
};

export default Timer;
