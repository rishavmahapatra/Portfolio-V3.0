import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rishav</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-5 dark:bg-gray-900 md:px-10 lg:px-20">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-sans text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/uc?id=1fzVJPfUibrSxIqS63to6bn3DRCeOBQ9L&export=download"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-7xl">
              Rishav Mahapatra
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full-Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Developer providing services for programming and design content
              needs. Join me down below!
            </p>
            <div className="text-6xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">ABOUT ME</h3>
            <p className="font-sans text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              Hi there 👋, I am <span className="text-red-500">Rishav Mahapatra </span> . I am a
              full-stack web developer based in Pune who is passionate about
              building exceptional web experiences. Welcome to my personal
              space. Here you will find my Skills, blogs, and other stuff that
              I am working on. I am a continous learner who loves problem-solving, learn
              new things and explore different technologies. I am currently
              working as a full-stack developer at TCS. I have worked on many real-life projects and have
              experience in different technologies. I am always open to new
              opportunities and challenges.
            </p>
            <p className="font-sans text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              I have a wide range of skills, including Programming, Frontend and Backend Development.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-slate-600 flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white ">
                Front End Development
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">Frontend Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">ReactJS</p>
              <p className="text-gray-800 py-1 dark:text-white">NextJS</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-white">Firebase</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-600 flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Full Stack Development
               </h3>
              <p className="py-2 dark:text-white">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">Backend Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Spring</p>
              <p className="text-gray-800 py-1 dark:text-white">Spring-Boot</p>
              <p className="text-gray-800 py-1 dark:text-white">Mysql</p>
              <p className="text-gray-800 py-1 dark:text-white">Azure</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-600 flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Consulting</h3>
              <p className="py-2 dark:text-white">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
          </div>
         </div>
        </section>
                  <section className="py-10">
          
        </section>
      </main>
    </div>
  );
}
