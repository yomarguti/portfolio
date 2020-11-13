import '../styles/tailwind.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  //Providers -Context Theme - Data
  //Layout
  // props adicionales
  return (
    <>
      <Head>
        <title>Yomar Gutierrez | Fullstack Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
