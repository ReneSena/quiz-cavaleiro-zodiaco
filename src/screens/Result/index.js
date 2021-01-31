import React from 'react';
import { useRouter } from 'next/router';
import db from '../../../db.json';

import { ErrorAlt } from '@styled-icons/boxicons-solid/ErrorAlt';
import { Verified } from '@styled-icons/material-sharp/Verified';

import TrilhaSonora from '../../assets/audio/song.mp3';
import Widget from '../../components/Widget';
import { Button } from '../../components/Button';
import { ListScore } from './styled';

export default function ResultWidget(props) {
	const { results, player } = props;
	const audioFinish = React.useRef();
	const router = useRouter();

	let score = results.filter((result) => result).length;

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
					<p
						style={{
							fontSize: '18px',
						}}>
						{score > 2 && `Você fez ${score}0 pontos, parabéns!`}
						{score <= 2 &&
							`Ops!! Você fez ${score}0 pontos, tenho certeza que na próxima se sairá melhor! :)`}
					</p>
					<ListScore>
						{results.map((result, index) => (
							<li key={`result__${result}`}>
								<span>{`0${index + 1}º`} Pergunta</span>
								{result === true ? (
									<Verified size="24" color="green" />
								) : (
									<ErrorAlt size="24" color="red" />
								)}
							</li>
						))}
					</ListScore>
					<Button type="button" onClick={() => router.push('/')}>
						Jogar novamente
					</Button>
				</Widget.Content>
			</Widget>
		</>
	);
}
