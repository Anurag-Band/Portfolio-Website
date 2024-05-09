import Image from "next/image";
import Link from "next/link";

const EducationCard = ({
  instituteName,
  courseName,
  logoUrl,
  instituteUrl,
  startDate,
  endDate,
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center w-full lg:w-10/12 h-auto lg:h-48 mx-auto my-8 lg:my-10 space-y-4 lg:space-y-0 lg:space-x-10 bg-card-bg-color border border-card-border-color text-primary-text-color shadow-md rounded-md">
      {/* Left Image Section */}
      <Link
        href={instituteUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="flex justify-center items-center w-full lg:w-[21rem] h-48 lg:h-full"
      >
        <Image
          alt={instituteName}
          src={logoUrl}
          width={450}
          height={200}
          className="object-cover"
        />
      </Link>
      {/* Right Details Section */}
      <div className="flex flex-col items-start justify-center w-full lg:w-auto px-4 lg:px-0 space-y-2">
        <h3 className="text-lg lg:text-xl font-medium">{instituteName}</h3>
        <h3 className="text-lg lg:text-xl">{`(${startDate} - ${endDate})`}</h3>
        <p className="text-base lg:text-lg">{courseName}</p>
      </div>
    </div>
  );
};

export default EducationCard;
