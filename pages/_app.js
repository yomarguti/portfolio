import '../styles/tailwind.css';
import Head from 'next/head';
import Layout from '@components/Layout';

function App({ Component, pageProps }) {
  //Providers -Context Theme - Data
  //Layout
  // props adicionales
  return (
    <Layout>
      <Head>
        <title>Yomar Gutierrez | Fullstack Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
