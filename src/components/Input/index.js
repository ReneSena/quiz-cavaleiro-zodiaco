import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.input`
	width: 100%;
	height: 38px;
	border-radius: 5px;
	border: 1px solid #c1c1c1;
	outline: none;
	margin-bottom: 25px;
	padding: 0 16px;
	color: #222;
	font-size: 14px;
	background-color: rgba(0, 0, 0 0.2);
`;

export function Input(props) {
	return (
		<Container
			as={motion.input}
			transition={{ delay: 0.3, duration: 0.2 }}
			variants={{
				show: { opacity: 1, x: '0' },
				hidden: { opacity: 0, x: '100%' },
			}}
			type="text"
			{...props}
		/>
	);
}
