import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import PictureGrid from '../components/pictureGrid';
import Portfolio from '../components/portfolio';
import Playground from '../components/playground';
import AboutSite from '../components/aboutSite';
import AboutMe from '../components/aboutMe';

interface IndexPageProps {}

const IndexPage: React.SFC<IndexPageProps> = () => (
	<Layout>
		<SEO title="Home" keywords={[ `MattRudin`, `Matthias Rudin`, `react` ]} />
		<Intro />
		<PictureGrid />
		<Portfolio />
		<Playground />
		<AboutSite />
		<AboutMe />
	</Layout>
);

export default IndexPage;
