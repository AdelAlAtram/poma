import React from "react";
// Assuming you have the logo image to import
import Logo from "./image/Logo.png";

export default function InfoSection() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-[#eaf7f5] p-6 sm:p-8 md:p-10 transition-opacity duration-500">
      
      <img
        src={Logo}
        alt="PoMA Logo"
        className=" h-16 sm:h-20 md:h-24  lg:h-28 mb-6 sm:mb-8 md:mb-10"
      />
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
        Peace of Mind Association (POMA) breaks cycles of suffering by providing
        inclusive, high-quality mental health care to foster sustainable
        development. Our holistic approach strengthens social ties, reduces
        poverty, advances human rights, tackles GBV and child rights, and
        supports research, conflict resolution, and education, empowering
        communities to thrive.
      </p>
    </div>
  );
}
