import React from 'react';
import styled from 'styled-components';

const StyledNumberBlueprint = styled.p`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

const NumberBlueprint = ({ number }) => {
	const renderNumber = () => {
		if (!number) return 'No number found';
		if (typeof number !== 'number') return 'Must be of type <number>';
		return number;
	};

	return <StyledNumberBlueprint>{renderNumber()}</StyledNumberBlueprint>;
};

export default NumberBlueprint;
