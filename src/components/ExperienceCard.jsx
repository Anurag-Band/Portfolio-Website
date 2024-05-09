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
    <div className="relative flex items-center justify-between w-10/12 mx-auto px-16 py-10 my-10 space-x-14 bg-card-bg-color border border-card-border-color shadow-md rounded-md">
      {/* Left Image Section */}
      <Link
        href={companyUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col items-center bg-primary-text-color p-5 rounded-sm"
      >
        <Image
          alt={companyName}
          src={logoUrl}
          width={250}
          height={100}
          className="mt-5"
        />
        <h3>{companyName}</h3>
      </Link>
      {/* Right Details Section */}
      <div className="w-3/5 flex flex-col items-start space-y-2">
        <h3 className="font-medium text-2xl">{jobTitle}</h3>
        <p className="font-normal tracking-wider">{`(${startDate} - ${endDate})`}</p>
        <ul className="space-y-2">
          {workSummery.map((summery, index) => (
            <li
              key={index}
              className="list-disc list-outside font-normal"
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
