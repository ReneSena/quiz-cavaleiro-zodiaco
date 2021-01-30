import React from 'react';
import { Container } from './styled';
import { motion } from 'framer-motion';

export function Button(props) {
	const { children } = props;

	return (
		<Container
			as={motion.button}
			transition={{ delay: 0.3, duration: 0.2 }}
			variants={{
				show: { opacity: 1, x: '0' },
				hidden: { opacity: 0, x: '100%' },
			}}
			{...props}>
			{children}
		</Container>
	);
}
