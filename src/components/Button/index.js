import React from 'react';
import { Container } from './styled';
import { motion } from 'framer-motion';

export function Button(props) {
	const { children } = props;
	const [load, setLoad] = React.useState();

	function handleLoad() {
		setLoad(true);

		setTimeout(() => {
			setLoad(false);
		}, 5 * 1000);
	}

	return (
		<Container
			className={load && 'disabled'}
			onClick={handleLoad}
			as={motion.button}
			transition={{ delay: 0.3, duration: 0.2 }}
			variants={{
				show: { opacity: 1, x: '0' },
				hidden: { opacity: 0, x: '100%' },
			}}
			{...props}>
			{children}
			<span className={load && 'loading'}></span>
		</Container>
	);
}
