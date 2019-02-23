import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
	const { children, idName, alignItems } = props;

	const Container = styled.div`
		display: flex;
		justify-content: center;
		align-items: ${alignItems ? alignItems : 'flex-start'};
		flex-direction: column;
		height: 100vh;
	`;

	return <Container id={idName}>{children} </Container>;
};

export default Container;
