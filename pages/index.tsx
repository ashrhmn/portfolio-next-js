import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ashik Rahman</title>
      </Head>
      <main className="text-center">
        <h1 className="text-5xl md:text-7xl">Hello World!!</h1>
        <p className="text-3xl md:text-4xl mb-8">
          Website is under development
        </p>
        <span className="text-lg md:text-2xl">
          Checkout older version on{" "}
          <a
            className="text-blue-700 p-1 rounded-lg hover:scale-105 hover:text-blue-50 hover:bg-blue-600 transition-all duration-300"
            href="https://www.ashrhmn.com"
          >
            Ashik Rahman
          </a>
        </span>
      </main>
    </>
  );
};

export default Home;
