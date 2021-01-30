import React from 'react';
import { useRouter } from 'next/router';

import { ErrorAlt } from '@styled-icons/boxicons-solid/ErrorAlt';
import { Verified } from '@styled-icons/material-sharp/Verified';

import TrilhaSonora from '../../assets/audio/song.mp3';
import Widget from '../../components/Widget';
import { Button } from '../../components/Button';

export default function ResultWidget(props) {
	const { results, player } = props;
	const audioFinish = React.useRef();
	const router = useRouter();

	React.useEffect(() => {
		audioFinish.current.play();
	}, []);

	return (
		<>
			<audio ref={audioFinish} src={TrilhaSonora}></audio>
			<Widget>
				<Widget.Header>Seus resultados: {player}</Widget.Header>
			</Widget>

			<Widget>
				<Widget.Content>
					<p>
						Você acertou {results.filter((result) => result).length}{' '}
						perguntas
					</p>
					<ul>
						{results.map((result, index) => (
							<li key={`result__${result}`}>
								{`0${index + 1}º`} Resultado:{' '}
								{result === true ? (
									<Verified size="20" color="green" />
								) : (
									<ErrorAlt size="20" color="red" />
								)}
							</li>
						))}
					</ul>
					<Button type="button" onClick={() => router.push('/')}>
						Voltar para o ínicio
					</Button>
				</Widget.Content>
			</Widget>
		</>
	);
}
