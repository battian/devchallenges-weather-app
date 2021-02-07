import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />

        <title>Weather App</title>
      </Head>

      <main>{children}</main>

      {/* <Footer>battian @devchallenges.io</Footer> */}
    </>
  );
};

export default Layout;
