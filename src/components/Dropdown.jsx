import styled from "styled-components";
import { colors } from "../utils/GlobalStyled";
import { StyledLink } from "./List/styled";

const ProjectLink = styled(StyledLink)`
	padding: 1rem;
`;
const StyledHeader = styled.div`
	width: 200px;
	height: 200px;
`;
const StyledContainer = styled.ul`
	width: fit-content;
	position: absolute;
	background-color: ${colors.secondaryDarker};
	border-radius: 0.2rem;
	display: flex;
	flex-flow: column;

	color: ${colors.primary};
`;

export function Dropdown(props) {
	const { options, header } = props;
	return (
		<>
			{header && <StyledHeader>{header}</StyledHeader>}
			<StyledContainer>
				<Options options={options} />
			</StyledContainer>
		</>
	);
}

const Options = ({ options }) => {
	return options.map((option, index) => {
		return (
			<ProjectLink key={`${index}${option.id}`} to={option.link}>
				<li> {option.label} </li>
			</ProjectLink>
		);
	});
};
