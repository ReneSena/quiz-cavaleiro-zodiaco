import styled from 'styled-components';

export const ListScore = styled.ul`
	margin-bottom: 24px;
	background: #222;
	padding: 8px !important;
	border-radius: 5px;
	border: 1px solid #e4e4e4;

	& li {
		height: 45px;
		display: flex;
		align-items: center;
		padding: 8px;
		font-size: 18px;
		font-family: 600;
		background-color: #3f51b5;
		margin-bottom: 8px;
		border-radius: 5px;

		&:last-child {
			margin-bottom: 0;
		}

		& span {
			margin-right: 10px;
		}
	}
`;
