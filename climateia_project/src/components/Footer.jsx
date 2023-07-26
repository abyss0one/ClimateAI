import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="dark:bg-bkg_dark_mode dark:text-txt_dark_mode bg-white_soft"
    >
      <div>
        <div className="flex flex-col md:flex-row  mb-4  md:text-base text-sm pt-10">
          <div className="md:mx-20 mx-3 ">
            <div className="text-2xl font-bold font-Poppins  ">Climate AI</div>
            <div className=" font-Poppins leading-[30px] text-text_color_body text-justify dark:text-txt_dark_mode ">
              {t("footer.intro")}
            </div>
          </div>
          
          <div className="md:mx-20 mx-3">
            <div className="text-2xl  font-Poppins">{t("footer.contact")}</div>
            <div className=" font-Poppins leading-[30px] text-text_color_body dark:text-txt_dark_mode">
            <a href="mailto:contacto@climateai.com">{t("footer.email")}</a>
              <br />
              <a href="https://www.google.com/maps/place/Fundaci%C3%B3+Catalana+de+l'Esplai/@41.3156732,2.0798735,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49e947b49f78f:0x35233620ad0e081a!8m2!3d41.3156732!4d2.0824484!16s%2Fg%2F122whf_j?entry=ttu" target="_blank">{t("footer.support")}</a>
            </div>
          </div>

          <div className="md:mx-20 mx-3">
            <div className="text-2xl font-Poppins">{t("footer.company")}</div>
            <div className=" font-Poppins leading-[30px] text-text_color_body dark:text-txt_dark_mode">
              <a href="#context">{t("footer.about")}</a>
              <br />
              {/* <a href="#">{t("footer.help")}</a> */}
            </div>
          </div>

          
        </div>

        <div className="flex justify-center gap-4 mb-6 md:justify-start md:mx-20  align-middle">
          <a href="https://github.com/abyss0one/ClimateAI.git" target="_blank">
            {/* <img
              src="https://file.rendit.io/n/fpV4p7tT4c82C4NFNXca.svg"
              alt="Icon-github"
            /> */}
            <AiFillGithub className="w-12 h-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/jairo-villarroel-rodriguez/" 
            className="w-12"  target="_blank"
          >
            {/* <img
              src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
              alt="Icon-linkedin"
            /> */}
            <AiFillLinkedin className="w-12 h-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/laiagomezmessia/"
            className="w-12" target="_blank"
          >
            {/* <img
              src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
              alt="Icon-linkedin"
            /> */}{" "}
            <AiFillLinkedin className="w-12 h-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/zulema-orellana-herrera/#"
            className="w-12" target="_blank"
          >
            {/* <img
              src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
              alt="Icon-linkedin"
            /> */}{" "}
            <AiFillLinkedin className="w-12 h-9" />
          </a>
        </div>
      </div>

      <div className="bg-background_brown w-100% flex h-16 items-center justify-center">
        <div className="text-white text-sm font-Poppins">
          Copyright © 2023 Climate AI
        </div>
      </div>
    </div>
  );
};

export default Footer;
