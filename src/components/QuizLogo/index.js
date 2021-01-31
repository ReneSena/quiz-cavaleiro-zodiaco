import React from 'react';
import { motion } from 'framer-motion';

import { Container, Icon } from './styled';

function QuizLogo() {
	return (
		<Container>
			<Icon
				as={motion.img}
				transition={{
					delay: 0.8,
					duration: 2,
				}}
				variants={{
					show: { opacity: 1 },
					hidden: { opacity: 0 },
				}}
				initial="hidden"
				animate="show"
				src="/banner.png"
				width="200"
			/>
		</Container>
	);
}

export default QuizLogo;
