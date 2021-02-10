import Head from "next/head";
import HomeContainer from "../containers/Home/Home.container";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Farmer Lives Matter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeContainer />
      </main>

      <style jsx global>{`
      *{
        margin: 0;
        padding: 0;
      }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
