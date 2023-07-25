import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
const AdviceNTips = () => {
  const { t } = useTranslation();
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    speed: 60000,
    autoplaySpeed: 10,
    cssEase: "linear",
    // adaptiveHeight: true,
    // variableWidth: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="learn">
      <div className="carousel relative bg-[url(https://file.rendit.io/n/YZwJKEcWyijHRrlYbAGM.png)] bg-cover bg-50%_50%  flex flex-col  md:h-[40vh] xs:h-100vh  w-full">
        <div className="before absolute inset-0 bg-text_green opacity-40"></div>
        <div className="text-Poppins leading-[22.7px] text-text_color_body">
          <Slider {...settings}>
            <div className="box rounded-lg md:h-[160px] h-[400px]  ">
              <p className="text-center">
              {t('advices.tip1')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip2')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip3')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip4')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip5')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip6')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip7')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip8')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip9')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip10')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip11')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip12')}
              </p>
            </div>
            <div className="box rounded-lg  md:h-[160px] h-[400px] ">
              <p className="text-center">
              {t('advices.tip13')}.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AdviceNTips;
