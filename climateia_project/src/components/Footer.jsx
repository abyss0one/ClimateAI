import React from "react";

const Footer = () => {
  return (
    <div id="contact">
      <div>
        <div className="flex flex-col md:flex-row  mb-4 ">
          <div className="md:mx-20 mx-3">
            <div className="text-2xl font-bold font-Poppins  ">Climate AI</div>
            <div className=" font-Poppins leading-[30px] text-text_color_body text-justify  ">
              Innovadora plataforma de predicción climática que proporciona
              previsiones precisas de temperatura, precipitaciones y sequía en
              Cataluña. Manténgase informado y planifique con antelación con
              nuestros datos.
            </div>
          </div>
          <div className="md:mx-20 mx-3">
            <div className="text-2xl font-Poppins">Compañía</div>
            <div className=" font-Poppins leading-[30px] text-text_color_body">
              <a href="#">Sobre nosotros</a>
              <br />
              <a href="#">Ayúdanos a seguir creciendo</a>
            </div>
          </div>

          <div className="md:mx-20 mx-3">
            <div className="text-2xl  font-Poppins">Contacto</div>
            <div className=" font-Poppins leading-[30px] text-text_color_body">
              <a href="#">E-mail</a>
              <br />
              <a href="#">Soporte 24/7</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6 md:justify-start md:mx-20 ">
          <a href="https://github.com/abyss0one/ClimateAI.git">
            <img
              src="https://file.rendit.io/n/fpV4p7tT4c82C4NFNXca.svg"
              alt="Icon-github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jairo-villarroel-rodriguez/"
            className="w-12"
          >
            <img
              src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
              alt="Icon-linkedin"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/laiagomezmessia/"
            className="w-12"
          >
            <img
              src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
              alt="Icon-linkedin"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/zulema-orellana-herrera/#"
            className="w-12"
          >
            <img
              src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
              alt="Icon-linkedin"
            />
          </a>
        </div>
      </div>

      <div className="bg-background_brown w-100% flex h-16 items-center justify-center">
        <div className="text-white text-20 font-Poppins">
          Copyright © 2023 Climate AI
        </div>
      </div>
    </div>
  );
};

export default Footer;
