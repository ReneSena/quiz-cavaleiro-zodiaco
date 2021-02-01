import styled from 'styled-components';

export const ListScore = styled.ul`
	margin-bottom: 24px;
	background: #222;
	padding: 8px !important;
	border-radius: 5px;
	border: 1px solid #e4e4e4;
	border: 1px solid #888;
	max-height: 180px;
	overflow-y: auto;

	::-webkit-scrollbar {
		background-color: #222;
		width: 8px;
		border-radius: 50px;
	}

	::-webkit-scrollbar-thumb {
		background-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.1),
			#fff
		);
		backdrop-filter: blur(4px);
		border-radius: 50px;
	}

	& li {
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px;
		font-size: 18px;
		font-weight: 700;
		background-color: #333;
		margin-bottom: 8px;
		border-radius: 5px;
		border: 1px solid #555;

		&:last-child {
			margin-bottom: 0;
		}

		& span {
			margin-right: 10px;
		}

		& div {
			display: flex;
			align-items: center;
		}
	}
`;

export const ListHeader = styled.div`
	padding: 0 20px;
	margin-bottom: 10px !important;

	& .title {
		font-size: 24px !important;
		font-weight: 700;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	& .subtitle {
		display: flex;
		font-weight: 400;
		justify-content: space-between;
		font-size: 18px !important;
	}
`;
