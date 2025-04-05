import React, { useState } from "react";
import Header from "./components/header/Header";
import Button from "./components/customButton/Button";
import { FaPercent } from "react-icons/fa";
import CountUp from "react-countup";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

// data
import { ourproject, TopUniversities } from "./Data";
import Carosoul from "./components/swiper/Carosoul";
import CarouselSection from "./components/CarouselSection";
// import { FaPlus,  } from "react-icons/fa";

const faqs = [
  { question: "How do I apply for a study abroad program?" },
  { question: "What if my visa gets rejected?" },
  { question: "Are scholarships available?" },
  { question: "How much does it cost to study abroad?" },
  { question: "Will I get support after I arrive?" },
];

// images
// import {logo} from '/public/Frame 90.png'

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <header>
        <Header />
      </header>

      <section className="grid grid-cols-2 max-sm:grid-cols-1 lg:h-[700px] md:px-3 max-sm:mt-3 px-3">
        <div className="w-full flex justify-center lg:items-center relative max-sm:order-2 ">
          <div className="lg:w-[570px] md:w-[440px] md:mt-10  poppins-semibold ">
            <p className="font-semibold lg:text-[48px] md:text-[32px] lg:w-[520px]  md:w-[330px] lg:leading-14 md:leading-10 text-[32px] max-sm:leading-9 ">
              Why Just Dream? Study & succeed Now!
            </p>

            <span className="max-sm:text-[14px] font-normal inter">
              Turn your study abroad dream into reality. Explore top
              universities, experience new cultures, and build a future without
              limits.
            </span>

            <Button className="md:mt-5 md:flex md:w-64  max-sm:mt-4 max-sm:flex bg-[#EA2029] text-white  hover:bg-white border border-[#EA2029] hover:text-black z-30">
              Book free Consultation
            </Button>

            <img
              src="/Frame 90.png"
              className="absolute w-[800px] lg:right-1 lg:top-[400px] md:top-60 "
              alt=""
            />

            <div className="flex relative md:mt-5 lg:mt-5 max-sm:mt-4">
              <img
                src="/Frame 4.png"
                alt=""
                className="w-[36px] h-[36px]"
              />
              <img
                src="/Frame 5.png"
                className="absolute left-4 max-sm:left-4 z-10 w-[36px] h-[36px]"
                alt=""
              />
              <img
                src="/Frame 6.png"
                className="absolute left-8 max-sm:left-8 z-10 w-[36px] h-[36px]"
              />
              <span className="absolute left-20 top-1 font-normal md:text-[20px] text-[#EA2029]">
                <CountUp end={14000} duration={3} /> +{" "}
                <span className="capitalize text-black">
                  stundents trust us
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end lg:items-start md:mt-20 lg:pe-20 max-sm:order-1 ">
          <img
            src="/unsplash_XkKCui44iM0.png"
            className="lg:w-[600px] lg:h-[662px] md:w-[280px] md:h-[304px] object-cover rounded-[12px]"
            alt=""
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-6 md:grid-cols-2 lg:h-80 max-sm:h-[27rem] max-sm:mb-9 md:h-96 relative md:px-3  px-3 overflow-hidden max-sm:overflow-hidden poppins-semibold ">
        <div className="col-span-2 flex lg:justify-center lg:items-center max-sm:mt-4">
          <p className="font-semibold text-[40px] max-sm:text-[24px]">
            Trusted By
            <p className="text-[#EA2029]">Students Worldwide</p>
          </p>
        </div>

        <div className="col-span-4 flex lg:justify-center items-center max-sm:mb-28 ">
          <div className="grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-10 lg:gap-40 md:gap-36">
            <div className="md:mb-36 lg:m-0 ">
              <p className="text-center font-medium text-[40px] flex lg:justify-center items-center ">
                <CountUp
                  end={5000}
                  duration={3}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />{" "}
                <FaPlus size={25} />
              </p>
              <p className="w-[168px] font-medium text-[18px] inter1">
                Students Worldwide
              </p>
            </div>

            <div>
              <p className="pe-10 font-medium text-[40px] flex items-center lg:justify-center">
                <CountUp
                  end={95}
                  duration={3}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />{" "}
                <FaPercent size={25} />
              </p>
              <p className="w-[158px] font-medium text-[18px] inter1">
                Visa Success Rate
              </p>
            </div>

            <div className="overflow-hidden">
              <p className="text-center font-medium text-[40px] flex lg:justify-center items-center">
                <CountUp
                  end={30}
                  duration={5}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />{" "}
                <FaPlus size={25} />
              </p>
              <p className="w-[184px] font-medium text-[18px] inter1">
                University Partnership
              </p>
              <img
                src="/Vector (1).png"
                className="absolute lg:w-[530px] lg:right-32 lg:top-8 md:w-[380px] md:right-[-50px] max-sm:w-[240px] max-sm:right-[-80px] max-sm:top-57 md:top-5"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-96 lg:h-[45rem] flex flex-col justify-center items-center lg:mt-30 md:mt-50 max-sm:mt-[15rem] relative ">
        <div className="lg:w-[817px]  flex flex-col justify-center items-center">
          <div className="md:flex lg:flex">
            <div className="flex poppins-semibold ">
              <p className="font-semibold text-[40px] max-sm:text-[24px]">
                Looking for the Best{" "}
              </p>
              <img
                src="/Frame 32.png"
                className="w-[108px] h-[64px] max-sm:w-[81px] max-sm:h-[48px]  object-cover animate-bounce"
                alt=""
              />
            </div>
            <p className="text-[#EA2029] flex font-semibold text-[40px] max-sm:text-[24px] max-sm:w-[176px] ">
              MBBS <p className="text-black ps-2"> Options?</p>
            </p>
          </div>
          <p className="lg:w-[800px] max-sm:text-[14px] max-sm:w-[396px] font-normal text-[18px] text-center px-3 max-sm:hidden ">
            Find the perfect MBBS program in India or abroad with expert
            support, smooth admissions, and scholarship assistance tailored for
            you.
          </p>
          <p className="lg:w-[800px] max-sm:text-[14px] max-sm:w-[390px] font-normal text-[18px] text-center px-3 hidden max-sm:flex">
            Trusted by thousands of students for expert guidance, smooth visa
            processing, and global university connections — your success starts
            here
          </p>
          <Button className="bg-[#EA20290D] text-black border-[#EA2029] border-1 max-sm:flex hover:bg-white">
            Enquire
          </Button>
        </div>
        <img
          src="/Cloud 1.png"
          className="lg:w-[610px] max-sm:w-[230px] md:w-[280px] absolute  left-0  max-sm:bottom-96 lg:bottom-72 md:bottom-48"
          alt=""
        />
        <img
          src="/Cloud 2.png"
          className="lg:w-[610px] max-sm:w-[230px] md:w-[280px] absolute  right-0 max-sm:bottom-64 lg:bottom-72 md:bottom-48"
          alt=""
        />

        <div className="w-full lg:h-[900px] md:h-[744px] bg-[#EA2029CC] grid lg:grid-cols-3 md:grid-cols-2 px-3 mt-70 lg:pt-10 lg:ps-10 p-0 m-0 ">
          <div className=" lg:w-[400px] text-white pt-7 ">
            <img src="/Icon.png" alt="" />
            <p className="mt-5 inter1">Top Universities</p>
            <p className="mt-5 max-sm:text-[14px] ">
              Learn from the best medical schools, globally recognized and
              trusted
            </p>
          </div>
          <div className=" lg:w-[400px] text-white pt-7">
            <img src="/Icon (1).png" alt="" />
            <p className="mt-5 inter1">Top Universities</p>
            <p className="mt-5 max-sm:text-[14px]">
              Learn from the best medical schools, globally recognized and
              trusted
            </p>
          </div>
          <div className=" lg:w-[400px] text-white pt-7">
            <img src="/Icon (2).png" alt="" />
            <p className="mt-5 inter1">Top Universities</p>
            <p className="mt-5 ">
              Learn from the best medical schools, globally recognized and
              trusted
            </p>
          </div>
        </div>
      </section>

      <div className="hidden lg:flex">
        <section className="grid grid-cols-2  h-96 ">
          <div className="flex flex-col justify-center items-center lg:px-10">
            <p className="poppins-semibold text-[40px] flex">
              Supporting Your <p className="text-[#EA2029CC] flex"> Journey </p>
              Every Step
            </p>
            <p className="inter text-[18px]">
              At PEF Education, our mission is to compassionately tailor the
              educational journey for each student, irrespective of their chosen
              direction, academic pursuits, or desired institution. With a team
              of seasoned professionals at the helm, we provide personalized
              guidance and unwavering support throughout the entire application
              process. Our comprehensive suite of services spans from empathetic
              counseling and meticulous course selection to seamless admissions
            </p>
          </div>

          <div className="lg:px-10 flex flex-col justify-center items-center ">
            <img src="/Frame 245.png" alt="" />
          </div>
        </section>
      </div>

      <section className="max-sm:mt-80 md:mt-16">
        <CarouselSection />
      </section>
      
      <section className="grid lg:grid-cols-2 md:grid-cols-1 h-[37rem] px-3 max-sm:mt-15  lg:mt-0 lg:px-10 poppins-semibold ">
        <div className="lg:sticky top-20 self-start ">
          <div>
            <p className="text-[18px] font-medium text-[#000000]">
              Our Programs
            </p>
            <p className="text-[40px] max-sm:text-[24px] font-semibold ">
              Find the{" "}
            </p>
            <p className="text-[#EA2029] flex text-[40px] max-sm:text-[24px] font-semibold leading-9 ">
              Right Program <p className="text-black ps-2">for You </p>
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-[#EA2029] flex items-center text-[24px] max-sm:mt-10 md:mt-5">
            Undergraduate Programs{" "}
            <GoArrowUpRight className="ps-2 pt-1" size={35} />
          </p>
          <div className="lg:w-[745px] text-[16px] font-normal flex flex-col justify-start items-start lg:mt-10">
            {ourproject.map((item, index) => (
              <div
                key={index}
                className="w-full pb-4 mb-9 border-b border-[#00000033]"
              >
                <p className="text-[24px] font-medium">{item.heading}</p>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2  max-sm:grid-cols-1 h-[57rem] px-3  max-sm:mt-72 md:mt-36 lg:mt-0 lg:px-10 poppins-semibold ">
        <div className="max-sm:order-2 md:order-2 lg:order-1">
          <div className="max-sm:order-2">
            <p className="text-[18px] font-medium text-[#000000]">
              Our Services
              <p className="text-[#EA2029] flex text-[40px] max-sm:text-[24px] font-semibold leading-9">
                Get<p className="text-black ps-2">Complete Support</p>
              </p>
              <p className="text-[40px] font-semibold max-sm:text-[24px] ">
                For Studying Abroad
              </p>
            </p>
          </div>

          <div className=" lg:mt-36 max-sm:mt-5 md:mt-8 max-sm:order-2">
            <p className="text-[#EA2029] flex items-center text-[24px]">
              Expert Language Training
              <GoArrowUpRight className="ps-2 pt-1" size={35} />
            </p>
            <div className="lg:w-[745px] text-[16px] font-normal flex flex-col justify-start items-start lg:mt-10">
              {ourproject.map((item, index) => (
                <div
                  key={index}
                  className="w-full pb-4 mb-9 border-b border-[#00000033]"
                >
                  <p className="text-[24px] font-medium">{item.heading}</p>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:sticky top-20 self-start max-sm:order-1 md:order-1 lg:order-2">
          <img
            src="/Img.png"
            className="lg:w-[518px] lg:h-[518px] md:w-full md:h-[490px] object-fill"
            alt=""
          />
        </div>
      </section>

      <section
        className="w-full h-96 bg-amber-400 max-sm:mt-56 md:mt-60 lg:mt-0 flex flex-col justify-center items-center poppins-semibold "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <p className="font-semibold text-[40px] text-white">
          Partnered with 30+ Top Universities
        </p>
        <p className="text-white text-[18px] font-normal">
          We’ve partnered with 30+ top universities to help you secure a
          successful future with global
        </p>
        <p className="text-center text-white"> opportunities.</p>
        <div className="w-full flex justify-center items-center py-10 backdrop-blur-md bg-[#e4e4e4]/15 shadow-[0px_10px_15px_10px_rgba(0,0,0,0.15)] overflow-hidden mt-5">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-20%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...TopUniversities, ...TopUniversities].map((item, index) => (
              <div
                key={index}
                className="min-w-[150px] flex items-center justify-center"
              >
                <img
                  src={item.img}
                  alt={`University ${index}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full h-auto py-10 flex flex-col justify-center items-center poppins-semibold ">
        <h2 className="font-semibold text-[40px] max-sm:text-[20px] text-center flex flex-wrap justify-center">
          Start Your Journey in
          <span className="text-[#EA2029] ps-2">3 Easy Steps</span>
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-10 mt-10 px-4 w-full max-w-6xl">
          <div className="h-64  rounded-xl shadow-sm flex flex-col items-center justify-center text-lg font-medium bg-white">
            <img src="/01.png " className="mt-10" alt="" />
            <p className="text-[#EA2029] font-semibold">Expert Consultation</p>
            <p className="lg:w-[383px] text-[12px] px-4 text-center">
              Our experienced counselors will listen to your goals and guide you
              toward the best study options
            </p>
          </div>
          <div className="h-64  rounded-xl shadow-sm flex flex-col items-center justify-center text-lg font-medium bg-white">
            <img src="/02.png" className="mt-10" alt="" />
            <p className="text-[#EA2029] font-semibold">Expert Consultation</p>
            <p className="lg:w-[383px] text-[12px] px-4 text-center">
              Our experienced counselors will listen to your goals and guide you
              toward the best study options
            </p>
          </div>
          <div className="h-64  rounded-xl shadow-sm flex flex-col items-center justify-center text-lg font-medium bg-white ">
            <img src="/03.png" className="mt-10" alt="" />
            <p className="text-[#EA2029] font-semibold">Expert Consultation</p>
            <p className="lg:w-[383px] text-[12px] px-4 text-center ">
              Our experienced counselors will listen to your goals and guide you
              toward the best study options
            </p>
          </div>
        </div>

        <Button className="border border-[#EA2029] mt-5 bg-[#EA20290D] hover:bg-white">
          Start Now
        </Button>
      </section>

      <section className="w-full h-[580px]  lg:px-20">
        <Carosoul />
      </section>

      <section className="grid lg:grid-cols-2 md:grid-cols-1 h-[37rem] px-3 max-sm:mt-1  lg:mt-0 lg:px-20 poppins-semibold ">
        <div className="lg:sticky top-10 self-start ">
          <div>
            <p className="text-[40px] max-sm:text-[24px] font-semibold ">
              Have Questions?
            </p>
            <p className=" flex text-[40px] max-sm:text-[24px] font-semibold leading-9 ">
              We've Got <p className=" ps-2 text-[#EA2029]">Answers </p>
            </p>
            <p className="w-[414px] max-sm:w-[340px] max-sm:text-[14px]">
              Get clear, honest answers to all your study abroad concerns — no
              confusion, just solutions.
            </p>

            <Button className="border mt-3 bg-[#ED1F241F] border-[#EA2029] hover:bg-white">
              Ask More
            </Button>
          </div>
        </div>

        <div className="lg:w-[745px] text-[16px] font-normal flex flex-col justify-start items-start lg:mt-20 lg:px-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full pb-4 mb-10 border-b border-[#00000033] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p>{faq.question}</p>
                {openIndex === index ? (
                  <FaMinus size={20} />
                ) : (
                  <FaPlus size={20} />
                )}
              </div>
              {openIndex === index && (
                <div className="mt-2 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  (Answer placeholder)
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-80 bg-[#F3F3F3] max-sm:h-56 flex justify-center items-center relative overflow-hidden poppins-semibold ">
        <div>
          <p className="flex text-[40px] max-sm:text-[20px] font-semibold">
            Looking for the Best{" "}
            <p className="text-[#EA2029] lg:ps-2"> Study Abroad</p>
          </p>
          <p className="flex text-[40px]  max-sm:text-[20px]  font-semibold justify-center">
            Experience?
          </p>
          <Button className="border bg-[#EA2029] border-[#EA2029] lg:ms-56 lg:mt-7 hover:bg-white text-white z-50">
            Book Conssultation
          </Button>
        </div>
        <img
          src="/Frame 90q.png"
          className="absolute lg:left-[40px] md:top-12 md:w-[820px] max-sm:top-30"
          alt=""
          srcset=""
        />
      </section>

      <footer className="bg-[#ED1F241F] lg:h-96 max-sm:h-auto lg:p-20">
        <div className="grid grid-cols-4  max-sm:grid-cols-2 gap-2">
          <div>
            <img src="x`/Logo.svg " alt="" />
          </div>
          <div>
            <h1 className="text-[20px] ">Programs</h1>
            <p className="mt-5">Undergraduate</p>
            <p>Postgraduate</p>
            <p>Exchange</p>
            <p>Language</p>
            <p>Foundation</p>
            <p>Diploma</p>
          </div>

          <div>
            <h1 className="text-[20px] ">Destination</h1>
            <p className="mt-5">Canada</p>
            <p>UK</p>
            <p>Australia</p>
            <p>New Zealand</p>
            <p>USA</p>
            <p>Europe</p>
          </div>

          <div>
            <h1 className="text-[20px] ">About</h1>
            <p className="mt-5">About us</p>
            <p>123 Fashion Street, Downtown Avenue, Mumbai, India , 400001</p>
            <p>Lorem@gmail.com</p>
            <p>Support & FAQ</p>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-9 max-sm:gap-2 ">
            <BsTwitterX size={20} />
            <FaFacebookF size={20} />
            <IoLogoInstagram size={20} />
            <IoLogoYoutube size={20} />
          </div>

          <div className="flex gap-1 justify-center items-center">
            <FaRegCopyright />
            <p className="max-sm:text-[10px]">2025 Lorem All rights reserved</p>
          </div>

          <div className="max-sm:text-[10px]">
            Terms & Condition Privacy Policy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
