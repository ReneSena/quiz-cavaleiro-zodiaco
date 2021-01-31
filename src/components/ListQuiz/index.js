import React from 'react';
import LinkExterno from '../Link';

import { List } from './styled';

export function ListQuiz(props) {
	const { data, status } = props;

	return (
		<List>
			{data.map((link) => {
				let githubHost = link.includes('github.com');

				const result = link.replace(
					/\https:\/\/|\.vercel.app\/|\github.com\//g,
					''
				);

				const urlOwner = githubHost
					? result.split(/\.|\//g).reverse()
					: result.split(/\.|\//g);

				const [project, user] = urlOwner;

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
