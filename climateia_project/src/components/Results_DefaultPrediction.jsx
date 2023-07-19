import React from "react";

const Results_DefaultPrediction = () => {
  const commonShadow =
    "shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-row justify-end h-32 shrink-0 items-center rounded-[30px]";
  const commonImg = "min-h-0 min-w-0 w-8 shrink-0";
  const commonText =
    "text-center font-Poppins text-[#415c2e] bg-[transparent] h-full";

  return (
    <>
      <div className={commonShadow + " gap-4"}>
        <img
          src="https://file.rendit.io/n/YEd8w5sfU8i9gyOuN5qM.svg"
          className={commonImg}
        />
        <div className="relative flex flex-col pb-5 w-[180px]">
          <div className="text-center w-[180px] h-[42.03%] font-bold leading-[22.4px] text-[#658e47] absolute top-10 left-0">
            25 º C
          </div>
          <div className={commonText + " text-2xl font-bold"}>Temperatura</div>
        </div>
      </div>

      <div className={commonShadow + " gap-1"}>
        <img
          src="https://file.rendit.io/n/sOBspRzRkGrffSNZxAIj.svg"
          className="min-h-0 min-w-0 w-12 shrink-0"
        />
        <div className="relative flex flex-col pb-5 w-[180px]">
          <div className="text-center w-[180px] h-[42.03%] font-bold leading-[22.4px] text-[#658e47] absolute top-10 left-0">
            12 mm
          </div>
          <div className={commonText + " text-2xl font-bold"}>
            Precipitación
          </div>
        </div>
      </div>

      <div className={commonShadow + " pt-6"}>
        <img
          src="https://file.rendit.io/n/BFDKisltuTtE978bOMpq.svg"
          className="min-h-0 min-w-0 self-start mt-2 w-8 shrink-0"
        />
        <div className="relative flex flex-col pb-5 w-48">
          <div className="text-center w-48 h-[42.03%] font-bold leading-[22.4px] text-[#658e47] absolute top-10 left-0">
            1.4 %
          </div>
          <div className={commonText + " text-2xl font-bold"}>Sequía IPS</div>
        </div>
      </div>
    </>
  );
};

export default Results_DefaultPrediction;

// // ORIGINAL CODE
// <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-row justify-end gap-4 h-32 shrink-0 items-center rounded-[30px]">
// <img
//   src="https://file.rendit.io/n/YEd8w5sfU8i9gyOuN5qM.svg"
//   className="min-h-0 min-w-0 w-8 shrink-0"
// />
// <div className="relative flex flex-col pb-5 w-[180px]">
//   <div className="text-center w-[180px] h-[42.03%] font-['Poppins'] font-bold leading-[22.4px] text-[#658e47] absolute top-10 left-0">
//     25 º C
//   </div>
//   <div className="text-center text-2xl font-['Poppins'] text-[#415c2e] bg-[transparent] h-full">
//     Temperatura
//   </div>
// </div>
// </div>
// <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-row justify-end gap-1 h-32 shrink-0 items-center rounded-[30px]">
// <img
//   src="https://file.rendit.io/n/sOBspRzRkGrffSNZxAIj.svg"
//   className="min-h-0 min-w-0 w-12 shrink-0"
// />
// <div className="relative flex flex-col pb-5 w-[180px]">
//   <div className="text-center w-[180px] h-[42.03%] font-['Poppins'] font-bold leading-[22.4px] text-[#658e47] absolute top-10 left-0">
//     12 mm
//   </div>
//   <div className="text-center text-2xl font-['Poppins'] text-[#415c2e] bg-[transparent] h-full">
//     Precipitación
//   </div>
// </div>
// </div>
// <div className="shadow-[0px_10px_30px_0px_rgba(16,_51,_30,_0.2)] bg-white flex flex-row justify-end pt-6 gap-1 h-32 shrink-0 items-center rounded-[30px]">
// <img
//   src="https://file.rendit.io/n/BFDKisltuTtE978bOMpq.svg"
//   className="min-h-0 min-w-0 self-start mt-2 w-8 shrink-0"
// />
// <div className="relative flex flex-col pb-5 w-48">
//   <div className="text-center w-48 h-[42.03%] font-['Poppins'] font-bold leading-[22.4px] text-[#658e47] absolute top-10 left-0">
//     1.4 %
//   </div>
//   <div className="text-center text-2xl font-['Poppins'] text-[#415c2e] bg-[transparent] h-full">
//     Sequía IPS
//   </div>
// </div>
// </div>
// </div>
