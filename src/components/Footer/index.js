import styled from 'styled-components';

const FooterWrapper = styled.footer`
	background-color: #00000070;
	padding: 20px 20px;
	display: flex;
	align-items: center;
	border-radius: 4px;

	@media (max-width: 768px) {
		display: none;
	}

	img {
		width: 58px;
		margin-right: 23px;
	}
	a {
		color: white;
		text-decoration: none;
		transition: 0.3s;
		&:hover,
		&:focus {
			opacity: 0.5;
		}
		span {
			text-decoration: underline;
		}
	}
`;

export default function Footer(props) {
	const { nameClass } = props;
	const year = new Date().getFullYear();

	return (
		<FooterWrapper {...props}>
			<a href="https://www.alura.com.br/">
				<img
					src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
					alt="Logo Alura"
				/>
			</a>
			<p>
				Feito durante a{' '}
				<a href="https://www.alura.com.br/" className={nameClass}>
					<span>{`Imersão React da Alura - ${year}`}</span>
				</a>
			</p>
		</FooterWrapper>
	);
}
