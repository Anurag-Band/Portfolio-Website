import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceCard = ({
  companyName,
  jobTitle,
  logoUrl,
  companyUrl,
  startDate,
  endDate,
  workSummery,
}) => {
  return (
    <div className="relative flex items-center justify-between w-10/12 mx-auto px-16 py-10 my-10 space-x-14 bg-white shadow-md rounded-md">
      {/* Left Image Section */}
      <Link
        href={companyUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col items-center"
      >
        <Image
          alt={companyName}
          src={logoUrl}
          width={250}
          height={100}
        />
        <h3>{companyName}</h3>
      </Link>
      {/* Right Details Section */}
      <div className="w-3/5 flex flex-col items-start space-y-2">
        <h3 className="font-medium text-xl">
          {jobTitle}{" "}
          <span className="font-normal tracking-wider text-slate-700">{`(${startDate} - ${endDate})`}</span>
        </h3>
        <ul className="space-y-2">
          {workSummery.map((summery, index) => (
            <li
              key={index}
              className="list-disc list-outside text-slate-800 font-normal"
            >
              {summery}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
