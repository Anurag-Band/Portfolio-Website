import Image from "next/image";
import React from "react";

const SkillCard = ({ name, icon }) => {
  return (
    <div className="flex flex-col justify-between px-1 m-8 sm:m-5 py-3 items-center w-16 h-16 sm:w-36 sm:h-40 space-y-1 bg-card-bg-color shadow-md rounded-sm border border-card-border-color">
      <Image
        alt={name}
        src={icon}
        width={90}
        height={90}
      />
      <p className="sm:h-1/5 font-medium text-primary-text-color text-sm sm:text-xl">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;
