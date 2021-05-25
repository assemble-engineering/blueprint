import React from 'react';
import styled from 'styled-components';

const StyledBooleanBlueprint = styled.p`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

const BooleanBlueprint = ({ boolean }) => {
	const renderBoolean = () => {
		if (!boolean) return 'No Boolean found';
		if (typeof boolean !== 'boolean') return 'Must be of type <boolean>';
		return `${boolean}`;
	};

	return <StyledBooleanBlueprint>{renderBoolean()}</StyledBooleanBlueprint>;
};

export default BooleanBlueprint;
