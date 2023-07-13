import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row gap-[113px] items-center mb-4 mx-32">
        <div className="whitespace-nowrap text-2xl font-['Poppins'] font-bold mr-56 w-32 shrink-0">
          Climate AI
        </div>
        <div className="whitespace-nowrap text-xl font-['Corbel'] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] mr-12 w-24 shrink-0">
          What We Do
        </div>
        <div className="text-xl font-['Corbel'] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] mr-5 w-20 shrink-0">
          Company
        </div>
        <div className="text-xl font-['Corbel'] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] w-16 shrink-0">
          Support
        </div>
        <div className="text-xl font-['Corbel'] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] w-16 shrink-0">
          Contact
        </div>
      </div>
      <div className="flex flex-row gap-[115px] items-start mb-4 mx-32">
        <div className="text-justify text-sm font-['Corbel'] leading-[22.4px] text-[#565656] self-center mr-20 w-[270px] shrink-0">
          Innovative climate prediction platform providing accurate forecasts
          for temperature, rainfall, and drought in Catalonia. Stay informed and
          plan ahead with our reliable insights to make informed decisions.
        </div>
        <div className="whitespace-nowrap text-sm font-['Corbel'] leading-[28px] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] self-center w-[148px] shrink-0 mb-px mr-2">
          Climate prediction
          <br />
          Data Analysis
          <br />
          Risk Assesment
          <br />
          Education and Awareness
        </div>
        <div className="whitespace-nowrap text-sm font-['Corbel'] leading-[28px] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] w-24 shrink-0">
          About Us
          <br />
          Become Investor
        </div>
        <div className="text-sm font-['Corbel'] leading-[28px] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] mr-3 w-12 shrink-0">
          FAQ
          <br />
          Policy
          <br />
          Business
        </div>
        <div className="whitespace-nowrap text-sm font-['Corbel'] leading-[28px] bg-[linear-gradient(180deg,_#000000_0%,_#000000_100%)] w-16 shrink-0">
          E-mail
          <br />
          Support 24
        </div>
      </div>
      <div className="self-start flex flex-row justify-between gap-4 items-center mb-6 ml-32">
        <img
          src="https://file.rendit.io/n/ebtFJmGv4ZhjWRivEZE4.svg"
          className="min-h-0 min-w-0 w-8 shrink-0"
        />
        <img
          src="https://file.rendit.io/n/yfms0s15Y8QHjtF3jl0o.svg"
          className="min-h-0 min-w-0 w-8 shrink-0"
        />
        <img
          src="https://file.rendit.io/n/z208jEY4F3oVVPFRf6Ss.svg"
          className="min-h-0 min-w-0 w-8 shrink-0"
        />
      </div>
      <div className="border-solid border-[#f2f2f2] h-px shrink-0 mx-32 bordert borderb-0 borderx-0" />
      <div className="bg-[#415c2e] flex flex-col gap-4 h-16 shrink-0 items-start px-32">
        <div className="border-solid border-[#f1f1f1] self-stretch ml-px h-px shrink-0 bordert borderb-0 borderx-0" />
        <div className="whitespace-nowrap text-sm font-['Corbel'] leading-[22.4px] text-[#f5f5f5] ml-[508px] w-40">
          Copyright © 2023 Climate AI
        </div>
      </div>
    </div>
  );
};

export default Footer;
