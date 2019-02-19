import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
	const { children } = props;

	const Container = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	`;

	return <Container>{children}</Container>;
};

export default Container;
