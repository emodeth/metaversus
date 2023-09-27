"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse&nbsp;</span>
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the
        <span className="font-extrabold text-white">
          &nbsp;madness of the metaverse&nbsp;
        </span>
        of today, using only
        <span className="font-extrabold text-white">&nbsp;VR&nbsp;</span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's
        <span className="font-extrabold text-white">&nbsp;explore&nbsp;</span>
        the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrown down"
        className="w-[18px] h-[28px] object-contain mt-[28px] cursor-pointer"
      />
    </motion.div>
  </section>
);

export default About;
