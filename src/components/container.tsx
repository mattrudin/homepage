import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
	const { children, idName } = props;

	const Container = styled.div`
		/* display: flex; */
		justify-content: center;
		align-items: center;
		flex-direction: row;
		height: 100vh;
	`;

	return <Container id={idName}>{children} </Container>;
};

export default Container;
