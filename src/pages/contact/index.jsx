import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../../../public/assets/contact-img.jpg";
import siteMetadata from "@/data/siteMetaData";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Anurag Band | Contact ME</title>
        <meta
          name="description"
          content="Anurag Band | Contact ME"
        />
      </Head>
      <div
        id="contact"
        className="w-full lg:h-screen bg-primary-bg-color text-primary-text-color"
      >
        <div className="w-8/12 m-auto bg-card-bg-color border border-card-border-color rounded-sm shadow-sm shadow-card-border-color px-2 py-10">
          <div className="flex items-center flex-col space-y-3">
            <h2 className="font-mainHeading font-medium text-4xl tracking-widest">
              CONTACT ME
            </h2>
            <hr className="border border-b-4 border-b-teal-500 w-14" />
          </div>
          <h2 className="py-4 text-2xl font-medium">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-6">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="Contact ME"
                />
                <div className="mt-3">
                  <h2 className="py-2 text-2xl font-medium">Anurag Band</h2>
                  <p className="text-lg font-normal">Full Stack Developer</p>
                  <p className="py-4 font-mono italic text-cyan-400 font-semibold">
                    I am Available for Freelance or Full-Time Positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center justify-between flex-wrap py-4">
                    <Link
                      href={siteMetadata.socials.linkedin}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link
                      href={siteMetadata.socials.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>

                    <Link
                      href={`mailto:${siteMetadata.email}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </Link>
                    <Link href="/resume">
                      <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action={siteMetadata.contactFormLink}
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex text-primary-text-color bg-slate-800 border-gray-600"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex text-primary-text-color bg-slate-800 border-gray-600"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex text-primary-text-color bg-slate-800 border-gray-600"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex text-primary-text-color bg-slate-800 border-gray-600"
                      autoComplete="off"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 text-primary-text-color bg-slate-800 border-gray-600"
                      autoComplete="off"
                      rows="5"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 bg-cyan-400 text-xl rounded-md font-semibold hover:bg-cyan-500">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
