import Image from "next/image";
import Link from "next/link";

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
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full lg:w-10/12 mx-auto px-4 py-10 my-10 space-y-6 lg:space-y-0 lg:space-x-14 bg-card-bg-color border border-card-border-color shadow-md rounded-md">
      {/* Left Image Section */}
      <Link
        href={companyUrl}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col items-center bg-primary-text-color p-5 rounded-sm lg:w-1/3"
      >
        <Image
          alt={companyName}
          src={logoUrl}
          width={250}
          height={100}
          className="mt-5"
        />
        <h3 className="mt-3">{companyName}</h3>
      </Link>
      {/* Right Details Section */}
      <div className="w-full lg:w-2/3 flex flex-col items-start space-y-2">
        <h3 className="font-medium text-xl lg:text-2xl">
          {jobTitle}{" "}
          <span className="font-normal tracking-wider">{`(${startDate} - ${endDate})`}</span>
        </h3>
        <ul className="space-y-2">
          {workSummery.map((summary, index) => (
            <li
              key={index}
              className="list-disc list-outside font-normal"
            >
              {summary}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
