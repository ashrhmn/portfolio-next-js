import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:items-center">
        <div className="w-full">
          <h1>Hi there,</h1>
          <h1 className="text-6xl font-bold my-4">I am Ashik</h1>
          <p className="text-xl">
            A self taught{" "}
            <span className="dark:text-darkPrimary text-lightPrimary">
              Fullstack
            </span>{" "}
            Developer and{" "}
            <span className="dark:text-darkPrimary text-lightPrimary">
              Blockchain
            </span>{" "}
            Engineer. I am passionate about{" "}
            <span className="dark:text-darkPrimary text-lightPrimary">
              {" "}
              Technology
            </span>
            . I love things simple and <Link href={`/temp`}>organized</Link>.
          </p>
          <div className="mt-8 justify-center md:justify-start flex gap-10">
            <Link href={`/Resume.pdf`} passHref>
              <a className="py-3 px-6 w-28 border-2 border-lightPrimary text-lightPrimary dark:border-darkPrimary dark:text-darkPrimary hover:bg-lightPrimary hover:text-black dark:hover:bg-darkPrimary hover:scale-110 transition-all">
                Resume
              </a>
            </Link>
            <Link href={`/contact`} passHref>
              <a className="py-3 px-6 w-28 border-2 border-lightPrimary text-lightPrimary dark:border-darkPrimary dark:text-darkPrimary hover:bg-lightPrimary hover:text-black dark:hover:bg-darkPrimary hover:scale-110 transition-all">
                Hire Me
              </a>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[200px] md:min-h-[500px] w-full">
          <Image
            src={`/images/hero-portfolio.png`}
            alt="Hero Image Ashik Rahman"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Home;
