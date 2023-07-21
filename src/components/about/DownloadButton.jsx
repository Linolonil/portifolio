import React from "react";
import Pdf from "../../assets/pdf/Lino_curriculo.pdf";

const DownloadButton = () => {
  return (
    <div>
      <a
        href={Pdf}
        download="Lino_Jorge_curriculo.pdf"
        className="btn download_cv"
      >
        Download CV
      </a>
    </div>
  );
};
export default DownloadButton;
