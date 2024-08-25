import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import pro from "../public/1.png";

import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rishav</title>
        <meta name="description" content="Front-End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-5 dark:bg-gray-900 md:px-10 lg:px-20">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-sans text-xl"></h1>
            <motion.ul className="flex items-center"
            initial={{ y:-100,opacity: 0 }}
            animate={{ y:1, opacity: 1 }}
            transition={{duration:0.5}}
            >
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-b from-cyan-600 text-teal-200 to-indigo-500  px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1FVSz3BrtfaAqCgS_7-yT-ed62HEjWO-l/view?usp=sharing"
                >Resume ⬇</a>
              </li>
            </motion.ul>
          </nav>
          <motion.div className="sm:mt-24 text-center"
            initial={{ x:-100,opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{delay:0.1, duration:0.7}}
          >
            <h2 className=" text-2xl md:text-5xl mx-auto antialiased py-2 text-teal-600 font-medium dark: text-indigo-400 ">
              Hi👋, I am Rishav Mahapatra
            </h2>
            <h3 className="text-lg md:text-3xl max-w-xl mx-auto antialiased  py-2 dark:text-teal-200  hover:scale-110">
            &lt;&gt; I am a Front-End Web Developer &lt;/&gt;
            </h3>
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Developer providing services for programming and design content
              needs. Join me down below!
            </p> */}
            <motion.div className="max-w-xs mx-auto text-2xl md:text-5xl flex justify-center gap-7 sm:gap-14 py-3 text-gray-700 hover:text-gray-100 hover:bg-indigo-700 hover:rounded-full hover:scale-110 dark:text-gray-300">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillGithub />
            </motion.div>
            {/* bg-gradient-to-b from-indigo-400 */}
            <motion.div className="mt-4 mx-auto rounded-full w-52 h-52 md:w-64 md:h-64 relative overflow-hidden  "
                initial={{ y:-1000  ,opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{delay:0.1, type:"spring",stiffness:200}}
            >
              <Image src={deved} layout="fill" objectFit="cover" />
              
            </motion.div>
          </motion.div>
        </section>
        <section>
          <div>
            <h3 className="font-mono text-4xl py-1 dark:text-white ">About Me</h3>
            <p className="fo-sans text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              Hi there 👋, I am Rishav Mahapatra. I am a
              full-stack developer based in Pune who is passionate about
              building exceptional web experiences. Welcome to my personal
              space. Here you will find my Skills, work-experience, and other stuff that
              I am working on. I am a continous learner who loves problem-solving, learn
              new things and explore different technologies. I am currently
              working as a full-stack developer at TCS. I have worked on many real-life projects and have
              experience in different technologies. I am always open to new
              opportunities and challenges.
            </p>
                <h3 className="text-4xl mt-6 py-1 dark:text-white">Skills</h3>
            <p className="font-sans text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              I have a wide range of skills, including Programming, Frontend and Backend Development.
            </p>
          </div>
          <div className="lg:flex gap-10">
                
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-slate-600 flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white ">
                Front-End Development
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
                Back-End Development
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
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Other Dev Tools</h3>
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
          scasc
        </section>
      </main>
    </div>
  );
}
