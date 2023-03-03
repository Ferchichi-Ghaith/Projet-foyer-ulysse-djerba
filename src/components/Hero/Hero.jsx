import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements} id="main">
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
          Bienvenue au <br />Foyer universitaire Ulysse<br />  Djerba
           
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          المبيت الجامعي اوليس جربة
            <br />
            {" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./logo.png" alt="" />
        </motion.div>

        

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="secondaryText">
              <div>Depuis</div>
              <div>L'année</div>
            </div>
            <div className="primaryText">2000</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
