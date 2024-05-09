import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";

export default function ProjectCard({
  name,
  imageUrl,
  description,
  tools,
  repoLink,
  deployedLink,
}) {
  return (
    <div className="relative flex flex-col items-center z-10 w-full mx-auto px-4 py-7 space-y-7 my-8 lg:flex-row lg:justify-center lg:space-x-7 lg:w-9/12 xl:w-10/12">
      {/* Card Background */}
      <div className="absolute w-full h-full -z-10 top-0 right-0 bg-card-bg-color border border-card-border-color shadow-lg rounded-lg" />
      {/* Image Section */}
      <div className="w-full lg:w-2/5">
        <Image
          alt={name}
          src={imageUrl}
          width={400}
          height={150}
          className="w-full"
        />
      </div>
      {/* Details Section */}
      <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start space-y-2">
        <h2 className="font-medium text-xl tracking-wide">{name}</h2>
        <p className="text-sm text-slate-300 text-center lg:text-left">
          {description}
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-2">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-1 border-2 m-1 border-slate-600 text-slate-300 bg-slate-700 rounded-sm"
            >
              {tool}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href={repoLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsGithub className="text-2xl" />
          </Link>
          <Link
            href={deployedLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsLink className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
