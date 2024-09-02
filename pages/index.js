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
import { duration } from "moment";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rishav</title>
        <meta name="description" content="Front-End Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-neutral-100 px-5 dark:bg-neutral-900 md:px-10 lg:px-20">
        <div className="min-h-screen">
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
                  className="bg-teal-800 dark:bg-indigo-500  text-teal-200  px-3 py-1 border-none rounded-md md:mr-4"
                  href="https://drive.google.com/file/d/1FVSz3BrtfaAqCgS_7-yT-ed62HEjWO-l/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* mt-48 sm:mt-28 lg:mt-36 */}
          <section id="home" className="absolute top-0 left-0 right-0 ">
            <motion.div
              className="text-center mt-40 "
              initial = {{ y:200,scale:0}}
              animate = {{ y:0,scale:1}} 
              // animate = {{ y:[200,0],scale:[1.5,1],opacity:[0,1]}} 
              transition={{duration:0.4}}
            >
              <h2 className="text-sm md:text-3xl max-w-3xl mx-auto  antialiased py-2  font-semibold text-teal-800 dark:text-indigo-400 ">
                Hi👋, I am Rishav Mahapatra
              </h2>
              <h3 className="text-md md:text-3xl mx-auto max-w-3xl antialiased  py-2 font-mono font-medium text-cyan-900 dark:text-teal-200 ">
                I am a Front-End/UI Developer
              </h3>
              <motion.div
                initial={{ y:100,opacity: 0 }}
                animate = {{ y:0,opacity:1 }}
                transition={{ delay: 0.4 }}
              >
                <div className=" m-4 mx-auto bg-transparent rounded-full w-52 h-52 md:w-64 md:h-64 relative overflow-hidden">
                  <Image src={dev} className="object-cover " />
                </div>
                <div className="cursor-pointer my-6 py-2 max-w-xs mx-auto text-4xl md:text-5xl flex justify-center gap-6 text-gray-700 dark:text-gray-300">
                {/* hover:text-indigo-500 */}
                  <a href="https://www.linkedin.com/in/rishav-mahapatra/" target="_blank" rel="noreferrer"><AiFillLinkedin className="hover:scale-110" /></a>
                  <a href="https://github.com/rishavmahapatra/" target="_blank" rel="noreferrer"><AiFillGithub className="hover:scale-110" /></a>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>

        <section id="skills" className=" text-left scroll-m-14">
          <div>
            <h3 className="text-4xl text-left py-1 text-cyan-900 dark:text-teal-200">Skills</h3>
            <p className="font-sans text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              I love to try out different libraries and frameworks available in the web. I follow different Dev communities and channels to keep myself updated with latest Tech trends. These are some skill set which I most frequently use.
            </p>
          </div>
          <div className="lg:flex gap-11">
            <motion.div
              className=" shadow-lg p-10 rounded-xl my-14 bg-blue-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
             {/* <Image src={code} width={100} height={100} />  */}
              <h3 className=" text-md font-medium pt-5 pb-2 dark:text-teal-300 ">
                Programming
              </h3>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiJavascript  className="rounded-md bg-zinc-700 text-yellow-400 text-3xl mr-5" />}JAVASCRIPT </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiHtml5  className="text-zinc-900 text-3xl mr-5" />} HTML </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiCss3 className="text-blue-400 text-3xl mr-5  " />}CSS </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<FaJava   className="bg-slate-200 rounded-md text-yellow-800 border-2 text-3xl mr-5 " />}JAVA </p>
            </motion.div>
            <motion.div
              className=" shadow-lg p-10 rounded-xl my-14 bg-blue-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-md font-medium pt-5 pb-2   dark:text-teal-300">
                Front-End Frameworks
              </h3>
              
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiReact  className="text-blue-400 text-3xl mr-5 " />}REACT.JS </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiNextdotjs className="  text-zinc-900 text-3xl mr-5 " />}NEXT.JS </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiTailwindcss className="text-blue-400 text-3xl mr-5 " />}TAILWIND CSS</p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiBootstrap  className="text-violet-400 text-3xl mr-5 " />}BOOTSTRAP </p>

            </motion.div>
            <motion.div
              className="shadow-lg p-10 rounded-xl my-14 bg-blue-200 dark:bg-slate-600 flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
            >
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className="text-md font-medium pt-5 pb-2 dark:text-teal-300">
                Other Dev Tools
              </h3>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<Image src={framer}  className="bg-zinc-900 rounded-md border-zinc-900 border-4 w-7  mr-5" />}FRAMER-MOTION </p>
              <p className="flex  mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<Image src={shadcn}  className="bg-white rounded-md w-7 border-2 mr-5" />}SHADCN-UI</p>
              <p className="flex mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<IoLogoFirebase className="text-yellow-500 text-3xl mr-5 " />}FIREBASE </p>
              <p className="flex mx-auto justify-left items-center text-gray-800 py-1 dark:text-cyan-300">{<SiNodedotjs className="text-green-500 text-3xl mr-5 " />}NODE.JS</p>

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
