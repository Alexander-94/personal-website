import Head from 'next/head';
import MainContent from '../components/MainContent';
import Layout from '../components/layout';

/* todo MainContent components */
export default function Home() {
  return (
    <Layout home>    
      <Head>
        <title>Personal Website</title>
      </Head>
      <MainContent/> 
    </Layout>
  );
}
