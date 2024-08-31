import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

import { SiNextdotjs,SiCss3 ,SiReact,SiBootstrap,SiTailwindcss,SiJavascript,SiHtml5,SiNodedotjs  } from "react-icons/si";
import framer from "../public/framer-motion.svg"
import shadcn from "../public/shadcn-ui.svg"

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

      <main className="overflow-hidden bg-neutral-100 px-5 dark:bg-neutral-900 md:px-10 lg:px-20">
        <div className="lg:h-screen">
          <nav className="fixed top-0 left-0 right-0 z-10 backdrop-blur-xl md:dark:shadow-stone-800 shadow-sm p-3 flex justify-end lg:justify-between font-mono text-teal-900  dark:text-teal-200">
            <ul className="hidden lg:flex">
              <li>
                <a
                  className="cursor-pointer p-3 border-none rounded-md"
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
                  className="cursor-pointer p-3 border-none rounded-md "
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
              <li>
                <a
                  className="cursor-pointer p-3 border-none rounded-md "
                  onClick={() => {
                    const anchor = document.querySelector("#skills");
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                 Projects
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
                  className="bg-indigo-500  text-teal-200  px-3 py-1 border-none rounded-md md:mr-4"
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
              <h2 className="text-lg md:text-3xl max-w-3xl mx-auto  antialiased py-2  font-semibold text-teal-800 dark:text-indigo-400 ">
                Hi👋, I am Rishav Mahapatra
              </h2>
              <h3 className="text-xl md:text-3xl mx-auto max-w-3xl antialiased  py-2 font-mono font-medium text-cyan-900 dark:text-teal-200 ">
                I am a Front-End/UI Developer
              </h3>
              <motion.div
                initial={{ x:-100, opacity: 0 }}
                animate={{ x:0, opacity: 1 }}
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

        <section id="skills" className=" text-center scroll-m-14">
          <div>
            <h3 className="text-4xl text-left py-1 text-cyan-900 dark:text-teal-200">Skills</h3>
            {/* <p className="font-sans text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              PS- I have gained these skills after years of experience and not
              just after completing one project/tutorial.
            </p> */}
          </div>
          <div className="lg:flex gap-10">
            <motion.div
              className=" shadow-lg p-10 rounded-xl my-10 bg-cyan-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
             {/* <Image src={code} width={100} height={100} />  */}
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-white ">
                Programming Languages
              </h3>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiJavascript  className="text-yellow-400 text-3xl mr-3 " />}JAVASCRIPT </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiHtml5  className="text-orange-500 text-3xl mr-3" />} HTML </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiCss3 className="text-blue-400 text-3xl mr-3 " />}CSS </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<FaJava   className="text-orange-500 text-3xl mr-3 " />}JAVA </p>
            </motion.div>
            <motion.div
              className=" shadow-lg p-10 rounded-xl my-10 bg-teal-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Front-End Frameworks
              </h3>
              
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiReact  className="text-blue-400 text-3xl mr-3 " />}REACT.JS </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiNextdotjs className="  text-zinc-900 text-3xl mr-3 " />}NEXT.JS </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiTailwindcss className="text-blue-400 text-3xl mr-3 " />}TAILWIND CSS</p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiBootstrap  className="text-violet-400 text-3xl mr-3 " />}BOOTSTRAP </p>

            </motion.div>
            <motion.div
              className="shadow-lg p-10 rounded-xl my-10 bg-blue-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              // transition={{ duration: 0.4 }}
            >
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Other Dev Tools
              </h3>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<Image src={framer}  className="w-6 ml-1 mr-3" />}FRAMER-MOTION </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<Image src={shadcn}  className="bg-white rounded-md w-6 ml-1 mr-3" />}SHADCN-UI</p>
              <p className="flex mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<IoLogoFirebase className="text-yellow-500 text-3xl mr-3 " />}FIREBASE </p>
              <p className="flex mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiNodedotjs className="text-green-500 text-3xl mr-3 " />}NODE.JS</p>

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
