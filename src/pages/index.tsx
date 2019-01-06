import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface IndexPageProps {}

const IndexPage: React.SFC<IndexPageProps> = () => (
	<Layout>
		<SEO title="Home" keywords={[ `MattRudin`, `Matthias Rudin`, `react` ]} />
		<h1>Site under construction</h1>
	</Layout>
);

export default IndexPage;
