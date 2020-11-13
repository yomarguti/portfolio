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
        <meta
          name="description"
          content="Portafolio de Yomar Gutiérrez | Desarrollador Web Fullstack | Información profesional y de contacto"
        />
        <meta name="keywords" content="Portafolio, Desarollador Web, Fullstack, Reactjs, Nextjs" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
