import React from 'react';
import Widget from '../Widget';

function Loader() {
	return (
		<>
			<Widget>
				<Widget.Header>Prepare-se!!!</Widget.Header>
			</Widget>

			<Widget>
				<img
					src="/pegasos.gif"
					alt="Gif animado do personagem Seya de Pegasus"
					width={'400px'}
					height={'200px'}
				/>
			</Widget>
		</>
	);
}

export default Loader;
