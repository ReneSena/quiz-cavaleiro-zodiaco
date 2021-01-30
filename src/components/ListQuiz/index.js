import React from 'react';
import LinkExterno from '../Link';

import { List } from './styled';

export function ListQuiz(props) {
	const { data, status } = props;

	return (
		<List>
			{data.map((link) => {
				const result = link.replace(
					/\https:\/\/|\.vercel.app\/|\github.com\//g,
					''
				);

				const [project, user] = result.split(/\.|\//g);

				return (
					<li key={link}>
						<a
							className={status}
							as={LinkExterno}
							href={`/quiz/${project}___${user}`}>{`${project} / ${user}`}</a>
					</li>
				);
			})}
		</List>
	);
}
