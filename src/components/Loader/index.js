import React from 'react';
import Widget from '../Widget';
import Lottie from 'react-lottie';
import animationData from './animation.json';
import styled from 'styled-components';

const Header = styled(Widget)`
	&.hidden {
		display: none;
	}
`;

function Loader(props) {
	const { header } = props;

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<>
			<Header className={header}>
				<Widget.Header>
					Prepare-se, as perguntas vão começar começar!!!
				</Widget.Header>
			</Header>

			<Widget>
				<div>
					<Lottie
						options={defaultOptions}
						height={'100%'}
						width={200}
					/>
				</div>
			</Widget>
		</>
	);
}

export default Loader;
