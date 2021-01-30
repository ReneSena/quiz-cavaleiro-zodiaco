import React from 'react';
// import Image from 'next/image';
import Widget from '../Widget';

function Loader() {
	return (
		<>
			<Widget>
				<Widget.Header>Prepare-se!!!</Widget.Header>
			</Widget>

			<Widget>
				<img
					src="https://geekquantico.com.br/wp-content/uploads/2019/11/P%C3%A9gaso-Gif.gif"
					alt="Gif animado do personagem Seya de Pegasus"
					width="100%"
					height="100%"
				/>
			</Widget>
		</>
	);
}

export default Loader;
