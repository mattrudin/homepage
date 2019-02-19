import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import StartContainer from '../components/startContainer';
import PictureContainer from '../components/pictureContainer';

interface IndexPageProps {}

const IndexPage: React.SFC<IndexPageProps> = () => (
	<Layout>
		<SEO title="Home" keywords={[ `MattRudin`, `Matthias Rudin`, `react` ]} />
		<StartContainer />
		<PictureContainer />
	</Layout>
);

export default IndexPage;
