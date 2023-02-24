import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion';
import {BsFacebook} from "react-icons/bs"
import {GoVerified} from "react-icons/go"
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="contact"></a>
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          </span>
          <span className="location">
        <a href="https://www.google.com/maps/place/Foyer+Universitaire+Ulysse+Djerba/@33.8197453,10.9736619,208m/data=!3m1!1e3!4m16!1m9!4m8!1m3!2m2!1d10.9734432!2d33.8180599!1m3!2m2!1d10.9728766!2d33.8194098!3m5!1s0x13aabd5dc0e03eeb:0x799d77cc1fd41494!8m2!3d33.819829!4d10.9738076!16s%2Fg%2F11bbydr5nl" target="_blank">Midoun,Tunisia Médenine, 4116</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
          <span className="TherdText">Contacts</span>
          </div>
          <ul className={css.menu}>
            <li>Tél :  <a className={css.email} href="tel:+21675732300">(+216) - 75 732 300</a> </li>
            <li> Fax : <a className={css.email} href="fax:75732515">75732515</a></li>

            <li>Email : <a className={css.email} href="mailto:foyerunivjerba@gmail.com" target="blanck">foyerunivjerba@gmail.com</a></li>
        <li> <a className={css.media} href="https://www.facebook.com/profile.php?id=100054891514295" target="_blank"> <BsFacebook size={"30px"} color='#3b5998'/></a></li>
          
          </ul>
        </div>
        <div className={css.rightmax}>
          <div className={css.info}>
          <span className="TherdText">Liens connexes</span>
          </div>
          <ul className={css.menu}>
            <li><a className={css.email} href="https://www.oous.rnu.tn/oous_new/index.php" target="_blank">OUUS</a> </li>
            <li><a className={css.email} href="https://www.inscription.tn/" target="_blank">Inscription.tn</a></li>
            <li><a className={css.email} href="http://www.isetjb.rnu.tn/" target="blanck">ISET</a></li>
            <li><a className={css.email} href="http://www.mes.tn/?langue=fr" target="blanck">MESRS</a></li>



          
          </ul>
          <br /> <br />
          <GoVerified size={"30px"} color='	#7CFC00'/>
        </div>

        
        

      </motion.div>
  
    </motion.section>
  );
};

export default Footer;
