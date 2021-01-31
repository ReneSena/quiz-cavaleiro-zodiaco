import React from 'react';
import { CommentError } from '@styled-icons/boxicons-solid/CommentError';

import { Container } from './styled';

export default function Modal(props) {
	const { status } = props;

	return (
		<Container className={status}>
			<div>
				<h1>Ops!!! Acabou o tempo :(</h1>
				<CommentError size="80" color="red" />
				<p>
					Mas você pode tentar novamente!{' '}
					<strong>Redirecionando para o início...</strong>
				</p>
			</div>
		</Container>
	);
}
