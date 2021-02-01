import React from 'react';
import { useRouter } from 'next/router';

import { Medal as Score } from '@styled-icons/boxicons-regular/Medal';
import { Medal } from '@styled-icons/fa-solid/Medal';

import TrilhaSonora from '../../assets/audio/song.mp3';
import Widget from '../../components/Widget';
import Loader from '../../components/Loader';

import { Button } from '../../components/Button';
import { ListScore, ListHeader } from './styled';

export default function ResultWidget(props) {
	const { results, player } = props;
	const audioFinish = React.useRef();
	const router = useRouter();

	let score = results.filter((result) => result).length;
	let [listPlayer, setListPlayer] = React.useState([]);
	let [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		audioFinish.current.play();
		setLoading(true);
		async function buildScoreBoard() {
			await fetch('https://api-fake-quiz.herokuapp.com/scoreboard', {
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				method: 'POST',
				body: JSON.stringify({ name: `${player}`, score: `${score}` }),
			})
				.then((response) => {
					return response.json();
				})
				.then((response) => console.log(response))
				.catch((error) => console.log(error.status));

			await fetch('https://api-fake-quiz.herokuapp.com/scoreboard')
				.then((response) => {
					return response.json();
				})
				.then((response) => setListPlayer(response))
				.catch((error) => console.log(error.status));
		}

		buildScoreBoard();
		setLoading(false);
	}, []);

	React.useEffect(() => {
		const result = listPlayer.sort((a, b) =>
			a.score < b.score ? -1 : a.score > b.score ? 1 : 0
		);

		setListPlayer(result.reverse());
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
					{loading === true && <Loader header="hidden" />}
					{loading === false && (
						<>
							<ListHeader>
								<h1 className="title">
									Ranking <Medal size="30" color="yellow" />
								</h1>
								<div className="subtitle">
									<span>Nome</span> <span>Pontos</span>
								</div>
							</ListHeader>
							<ListScore>
								{listPlayer.map((player) => {
									return (
										<li key={player.id}>
											<span>{player.name}</span>
											<div>
												<span>
													{`${player.score}0`}{' '}
												</span>
												<Score
													size="24"
													color="yellow"
												/>
											</div>
										</li>
									);
								})}
							</ListScore>
						</>
					)}

					<Button type="button" onClick={() => router.push('/')}>
						Jogar novamente
					</Button>
				</Widget.Content>
			</Widget>
		</>
	);
}
