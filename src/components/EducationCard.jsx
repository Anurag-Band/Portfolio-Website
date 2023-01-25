import Image from "next/image";
import Link from "next/link";
import React from "react";

const EducationCard = ({
  instituteName,
  courseName,
  logoUrl,
  instituteUrl,
  startYear,
  endYear,
}) => {
  return (
    <div className="relative flex items-center w-10/12 mx-auto my-10 space-x-10 bg-white shadow-md rounded-md">
      {/* Left Image Section */}
      <Link
        href={instituteUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col items-center"
      >
        <Image
          alt={instituteName}
          src={logoUrl}
          width={450}
          height={200}
        />
      </Link>
      {/* Right Details Section */}
      <div className="flex flex-col items-start space-y-2">
        <h3 className="text-xl text-slate-800">{instituteName}</h3>
        <h3 className="text-xl text-slate-800">{`(${startYear} - ${endYear})`}</h3>
        <p className="text-lg text-slate-700">{courseName}</p>
      </div>
    </div>
  );
};

export default EducationCard;
