import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AdviceNTips = () => {
  var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
            <div className="box rounded-lg md:h-[120px] h-[300px]  ">
              <p className="text-center">
                Cataluña es una región con una gran variedad de precipitaciones,
                que van desde los 2.000 mm anuales de la costa hasta los 1.000
                mm anuales de las montañas.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                Las temperaturas más altas se registran en verano, cuando pueden
                llegar a los 40 grados centígrados.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                Las temperaturas más bajas se registran en invierno, cuando
                pueden llegar a los -10 grados centígrados.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                El SPI se basa en la cantidad de precipitación que ha caído en
                un lugar, el nivel de los ríos y la humedad del suelo.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                Para hacer frente a la sequía puedes: Reducir el consumo de agua
                ,reutilizar y reciclar el agua
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                Cataluña ha sufrido varios episodios de sequía en los últimos
                años, el más grave de los cuales fue en 2018.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                La "Gran Nevada" de 1962 en Cataluña fue un evento climático
                extremo que cubrió casi toda la región durante semanas.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                Estudios paleoclimáticos en Cataluña han descubierto evidencias
                de sequías severas desde hace siglos, a través del análisis de
                anillos de árboles y sedimentos de lagos
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                La urbanización en Cataluña puede generar "islas de calor"
                debido al crecimiento de ciudades, lo que afecta a las
                predicciones meteorológicas y la evaporación del agua al
                aumentar la temperatura local.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                Cataluña ha experimentado cambios climáticos en el pasado.
                Durante la Edad Media, hubo un período cálido llamado "Óptimo
                Medieval", y en la Pequeña Edad de Hielo (siglos XIV-XIX), se
                registraron inviernos más fríos y sequías más intensas.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                En 1947, Cataluña sufrió una grave sequía que afectó la
                agricultura y el suministro de agua, considerada una de las
                sequías más severas del siglo XX en la región.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                La "Festa Major de Sant Medir" en Barcelona, el 3 de marzo, se
                originó en 1830 como agradecimiento por las lluvias que
                aliviaron una sequía prolongada.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                En 1862 fue inaugurado el famoso Canal de Urgell que lleva agua
                a miles de hectáreas de tierras de cultivo en la provincia de
                Lleida.
              </p>
            </div>
            <div className="box rounded-lg  md:h-[120px] h-[300px] ">
              <p className="text-center">
                En El Priorat, se mantienen los "noriales", antiguos sistemas de
                riego con ruedas hidráulicas que elevan agua desde ríos o pozos
                a campos agrícolas.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AdviceNTips;
