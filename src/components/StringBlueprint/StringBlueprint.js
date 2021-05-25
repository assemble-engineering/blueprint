import React from 'react';
import styled from 'styled-components';

const StyledStringBlueprint = styled.p`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

const StringBlueprint = ({ string }) => {
	const renderString = () => {
		if (!string.length) return 'No string found';
		if (typeof string !== 'string') return 'Must be of type <string>';
		return string;
	};

	return <StyledStringBlueprint>{renderString()}</StyledStringBlueprint>;
};

export default StringBlueprint;
