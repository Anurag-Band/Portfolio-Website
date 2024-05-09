import Image from "next/image";
import Link from "next/link";
import React from "react";

const EducationCard = ({
  instituteName,
  courseName,
  logoUrl,
  instituteUrl,
  startDate,
  endDate,
}) => {
  return (
    <div className="relative flex items-center w-10/12 h-48 mx-auto my-10 space-x-10 bg-card-bg-color border border-card-border-color text-primary-text-color shadow-md rounded-md">
      {/* Left Image Section */}
      <Link
        href={instituteUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col items-center justify-center w-[21rem] h-full"
      >
        <Image
          alt={instituteName}
          src={logoUrl}
          width={450}
          height={200}
          className="object-fill"
        />
      </Link>
      {/* Right Details Section */}
      <div className="flex flex-col items-start space-y-2">
        <h3 className="text-xl font-medium">{instituteName}</h3>
        <h3 className="text-xl">{`(${startDate} - ${endDate})`}</h3>
        <p className="text-lg">{courseName}</p>
      </div>
    </div>
  );
};

export default EducationCard;
