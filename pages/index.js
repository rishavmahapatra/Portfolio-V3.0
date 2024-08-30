import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import dev from "../public/rishav.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rishav</title>
        <meta name="description" content="Front-End Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden bg-stone-100 px-5 dark:bg-stone-900 md:px-10 lg:px-20">
        <div className="min-h-screen">
          <nav className="fixed top-0 left-0 right-0 z-10  backdrop-blur-md shadow-indigo-200 shadow-sm p-3 flex justify-end lg:justify-between font-mono text-teal-900  dark:text-teal-200">
            <ul className="hidden lg:flex">
              <li>
                <a
                  className="cursor-pointer px-4 py-2 border-none rounded-md ml-8"
                  onClick={() => {
                    const anchor = document.querySelector("#home");
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer px-4 py-2 border-none rounded-md ml-8"
                  onClick={() => {
                    const anchor = document.querySelector("#skills");
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Skills
                </a>
              </li>
            </ul>

            <ul className="flex items-center gap-4">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-b from-indigo-500  to-indigo-800 font-mono text-teal-200  px-3 py-1 border-none rounded-md mr-6"
                  href="https://drive.google.com/file/d/1FVSz3BrtfaAqCgS_7-yT-ed62HEjWO-l/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* mt-48 sm:mt-28 lg:mt-36 */}
          <section id="home" className="absolute top-0 left-0 right-0 ">
            <motion.div
              className="text-center mt-40"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
              <h2 className=" text-2xl md:text-5xl mx-auto max-w-2xl antialiased py-2 text-teal-800 font-semibold dark:text-indigo-400 ">
                Hi👋, I am Rishav Mahapatra
              </h2>
              <h3 className=" text-lg md:text-3xl max-w-xl mx-auto antialiased  py-2 font-mono font-medium text-cyan-900 dark:text-teal-200 ">
                I am a Front-End Developer
              </h3>
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className=" m-4 mx-auto bg-transparent rounded-full w-52 h-52 md:w-64 md:h-64 relative overflow-hidden">
                  <Image src={dev} className="object-cover w-full h-auto" />
                </div>
                <div className="cursor-pointer my-6 py-2 max-w-xs mx-auto text-4xl md:text-5xl flex justify-center gap-8 sm:gap-10 text-gray-700 dark:text-gray-300">
                  <AiFillLinkedin className="hover:scale-110 hover:text-indigo-500" />
                  <AiFillGithub className="hover:scale-110 hover:text-indigo-500" />
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>

        <section id="skills" className=" text-left scroll-m-14">
          <div>
            <h3 className="text-4xl py-1 dark:text-white">Skills</h3>
            {/* <p className="font-sans text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              PS- I have gained these skills after years of experience and not
              just after completing one project/tutorial.
            </p> */}
          </div>
          <div className="lg:flex gap-10">
            <motion.div
              className="text-left shadow-lg p-10 rounded-xl my-10 bg-cyan-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              // transition={{ duration: 0.4 }}
            >
              <Image src={design} width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-white ">
                Front-End Development
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">
                Frontend Tools I Use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">ReactJS</p>
              <p className="text-gray-800 py-1 dark:text-white">NextJS</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-white">Firebase</p>
            </motion.div>
            <motion.div
              className=" shadow-lg p-10 rounded-xl my-10 bg-teal-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              // transition={{ duration: 0.4 }}
            >
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Back-End Development
              </h3>
              <p className="py-2 dark:text-white">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">
                Backend Tools I Use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Spring</p>
              <p className="text-gray-800 py-1 dark:text-white">Spring-Boot</p>
              <p className="text-gray-800 py-1 dark:text-white">Mysql</p>
              <p className="text-gray-800 py-1 dark:text-white">Azure</p>
            </motion.div>
            <motion.div
              className="shadow-lg p-10 rounded-xl my-10 bg-blue-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              // transition={{ duration: 0.4 }}
            >
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Other Dev Tools
              </h3>
              <p className="py-2 dark:text-white">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">
                Design Tools I Use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
