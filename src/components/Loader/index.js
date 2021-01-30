import React from 'react';
import Widget from '../Widget';
import Lottie from 'react-lottie';
import animationData from './animation.json';

function Loader() {
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
			<Widget>
				<Widget.Header>Prepare-se!!!</Widget.Header>
			</Widget>

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
