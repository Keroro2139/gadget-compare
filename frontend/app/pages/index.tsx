import React from 'react';
import Head from 'next/head'

import Layout from '../layouts/Layout';
import HomeContainer from '../containers/Home';

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Gadget Compare Platform</title>
      </Head>
      <HomeContainer />
    </Layout>
  );
};

export default HomePage;
