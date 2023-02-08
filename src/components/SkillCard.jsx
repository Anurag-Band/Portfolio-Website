import Image from "next/image";
import React from "react";

const SkillCard = ({ name, icon }) => {
  return (
    <div className="flex flex-col justify-between px-1 m-5 py-3 items-center w-36 h-40 space-y-1 bg-card-bg-color shadow-md rounded-sm border border-card-border-color">
      <Image
        alt={name}
        src={icon}
        width={90}
        height={90}
      />
      <p className="h-1/5 font-medium text-primary-text-color text-xl">{name}</p>
    </div>
  );
};

export default SkillCard;
