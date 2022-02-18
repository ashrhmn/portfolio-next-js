import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ashik Rahman</title>
      </Head>
      <main className="text-center pt-10 transition-colors dark:bg-gradient-to-tr from-slate-900 to-slate-800 dark:text-white h-[100vh]">
        <h1 className="text-5xl md:text-7xl transition-all">Hello World!!</h1>
        <p className="text-3xl md:text-4xl mb-8 transition-all">
          Website is under development
        </p>
        <span className="text-lg md:text-2xl transition-all">
          Checkout older version on{" "}
          <a
            className="text-blue-700 dark:text-blue-400 p-1 rounded-lg hover:scale-150 hover:text-blue-50 hover:bg-blue-600 transition-all duration-300"
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
