import React, { useRef, useState } from "react";
import Song from "../../assets/audio/song.mp3";
import { Container } from "./styled";
import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { PauseFill } from "@styled-icons/bootstrap/PauseFill";

export function Player() {
	const audioTrack = useRef();
	const [song, setSong] = useState(true);

	function handlePlay() {
		setSong(false);
		audioTrack.current.play();
	}

	function handleSongPause() {
		audioTrack.current.pause();
		setSong(true);
	}

	return (
		<Container>
			<audio ref={audioTrack} src={Song} />
			{song && (
				<button type="button" onClick={handlePlay}>
					<PlayFill size="24" />
				</button>
			)}

			{!song && (
				<button type="button" onClick={handleSongPause}>
					<PauseFill size="24" />
				</button>
			)}
		</Container>
	);
}
