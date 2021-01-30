import React from "react";
import Link from "../Link";

import { List } from "./styled";

export function ListQuiz(props) {
	const { data } = props;

	return (
		<List>
			{data.map((link) => {
				const result = link.replace(
					/\https:\/\/|\.vercel.app\/|\github.com\//g,
					""
				);

				const [project, user] = result.split(/\.|\//g);

				return (
					<li key={link}>
						<a
							as={Link}
							href={`/quiz/${project}___${user}`}
						>{`${project} / ${user}`}</a>
					</li>
				);
			})}
		</List>
	);
}
