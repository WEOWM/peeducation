import React from "react";
import { MdMenu } from "react-icons/md";
import Button from "../customButton/Button";

const Header = () => {
  return (
    <div className="w-full h-20 border-b border-[#00000029] flex justify-between items-center lg:px-24  lg:fixed bg-white z-30  px-2">
      <img src="src/assets/Logo.svg " className="max-sm:w-[151px]" alt="" />
      <div className=" space-x-[56px] lg:flex hidden">
        <p className="font-medium text-[16px] ">Programs</p>
        <p className="font-medium text-[16px] ">Destination</p>
        <p className="font-medium text-[16px] ">Services</p>
        <p className="font-medium text-[16px] ">About us</p>
        <p className="font-medium text-[16px] ">Contact</p>
      </div>
      <Button className="bg-[#EA2029] text-white hover:bg-white border border-[#EA2029] hover:text-black">Register Now</Button>
      <MdMenu size={34} color="#EA2029" className="lg:hidden" />
    </div>
  );
};

export default Header;
