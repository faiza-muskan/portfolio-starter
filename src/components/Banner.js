import React from "react";
// images
import Image from "../assets/photo.jpeg";
// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className=" min-h=[85vh] lg:min-h-[78vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Faiza <span>Muskan</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-1"
            >
              <span>I Am A</span>{" "}
              <TypeAnimation
                sequence={["React Developer", 5000]}
                speed={10}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {" "}
              Hi, I am Faiza Muskan, a self-motivated, hardworking and
              passionate woman with keen interest in building web applications.
              I believe myself to be a forward-thinking individual with refined
              interpersonal and multitasking skills.
            </motion.p>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:text-5xl"
            >
              <a href="https://github.com/faiza-muskan" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/faiza-muskan-9794b724b/ "
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" relative mx-auto w-60 h-60 rounded-full overflow-hidden mt-10 md:h-96 md:w-96"
          >
            <img src={Image} alt="person" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
