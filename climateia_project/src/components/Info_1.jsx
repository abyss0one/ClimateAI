import React from "react";
import { useTranslation } from "react-i18next";
const Info_1 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-10 text-sm md:text-base dark:text-txt_dark_mode">
        <h2 className="text-text_green text-base"> {t("info_1.title")}</h2>
        {t("info_1.text1")} <br />
      </div>
    </div>
  );
};

export default Info_1;
