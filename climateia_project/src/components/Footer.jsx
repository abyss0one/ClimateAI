import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex  justify-between items-stretch mb-4  md:mx-20">
        <div className=" text-2xl font-['Poppins'] font-bold ">
          Climate AI
          <div className=" text-justify text-sm font-['Corbel'] leading-[22.4px] text-[#565656] w-[350px] ">
            Innovative climate prediction platform providing accurate forecasts
            for temperature, rainfall, and drought in Catalonia. Stay informed
            and plan ahead with our reliable insights to make informed
            decisions.
          </div>
        </div>
        <div className="whitespace-nowrap text-xl font-['Corbel'] w-24 ">
          What We Do
          <div className="whitespace-nowrap text-sm font-Corbel leading-[28px] self-center w-[148px]  mb-px">
            <a href="#">Climate prediction</a>
            <br />
            <a href="#">Data Analysis</a>
            <br />
            <a href="#">Risk Assesment</a>
            <br />
            <a href="#">Education and Awareness</a>
          </div>
        </div>
        <div className="text-xl font-['Corbel']  w-20 ">
          Company
          <div className="whitespace-nowrap text-sm font-Corbel leading-[28px] w-24 ">
            <a href="#">About Us</a>
            <br />
            <a href="#">Become Investor</a>
          </div>
        </div>
        <div className="text-xl font-['Corbel']  w-16 ">
          Support
          <div className="text-sm font-Corbel leading-[28px] w-12 ">
            <a href="#">FAQ</a>
            <br />
            <a href="#">Policy</a>
            <br />
            <a href="#">Business</a>
          </div>
        </div>
        <div className="text-xl font-['Corbel']  w-16 ">
          Contact
          <div className="whitespace-nowrap text-sm font-Corbel leading-[28px] w-16 ">
            <a href="#">E-mail</a>
            <br />
            <a href="#">Support 24</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-4 items-center mb-6 ml-20">
        <a href="https://github.com/abyss0one/ClimateAI.git" className="w-12">
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
        <a href="https://www.linkedin.com/in/laiagomezmessia/" className="w-12">
          <img
            src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
            alt="Icon-linkedin"
          />
        </a>{" "}
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
      <div className="bg-[#415c2e] flex gap-4 h-16 items-center justify-center">
        <div className="whitespace-nowrap text-20 font-Corbel text-white">
          Copyright © 2023 Climate AI
        </div>
      </div>
    </div>
  );
};

export default Footer;
