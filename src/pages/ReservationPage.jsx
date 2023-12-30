import React from "react";
import { Footer, Reservation } from "../component";
import { useNavigate } from "react-router-dom";
const ReservationPage = () => {
  const navigate =  useNavigate()
  return (
    <>
      <div className="w-full  h-[50px] fixed z-[100]  shadow-sm  bg-main-bg transition-all text-zinc-800   duration-300 ease-in  shadow-slate-100">
        <div className="flex items-center justify-between mx-8 h-full">
          <div>
            <a href="/">
              <h1> JayKit</h1>
            </a>
          </div>
          <div onClick={()=>{
            navigate('/')
          }}>
            <button className="text-teal-700 ">Go back Home</button>
          </div>
        </div>
      </div>
      <Reservation />
      <Footer />
    </>
  );
};

export default ReservationPage;
