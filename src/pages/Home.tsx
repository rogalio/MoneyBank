import React from "react";
import banktree from "../assets/img/bank-tree.jpeg";
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSafe from "../assets/img/icon-security.png";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-[400px] w-full object-cover "
          src={banktree}
          alt="hero"
        />
        <div className="md:absolute :mdmx-auto md:justify-center md:top-16 md:right-10 bg-white p-6 space-y-6">
          <div className=" font-bold text-xl">
            <p>No fees</p>
            <p>No minimum deposit</p>
            <p>High interest rates</p>
          </div>

          <div className="text-xl">
            <p>Open a savings account with Argent Bank today!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  p-4  md:flex-row">
        <div className=" md:w-1/3">
          <div className=" mx-auto rounded-full border-green-600 border-[8px] w-fit  p-4">
            <img className="w-24" src={iconChat} alt="chat" />
          </div>
          <div className="flex flex-col justify-center mx-auto p-8">
            <p className="mx-auto mb-4 font-bold text-xl">
              You are our #1 priority
            </p>
            <p className=" text-center">
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 ">
          <div className=" mx-auto rounded-full border-green-600 border-[8px] w-fit  p-4">
            <img className="w-24" src={iconMoney} alt="chat" />
          </div>
          <div className="flex flex-col justify-center mx-auto p-8">
            <p className="mx-auto mb-4 font-bold text-xl text-center">
              More savings means higher rates
            </p>
            <p className=" text-center">
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
        </div>

        <div className="md:w-1/3 ">
          <div className=" mx-auto rounded-full border-green-600 border-[8px] w-fit  p-4">
            <img className="w-24" src={iconSafe} alt="chat" />
          </div>
          <div className="flex flex-col justify-center mx-auto p-8">
            <p className="mx-auto mb-4 font-bold text-xl">
              Security you can trust
            </p>
            <p className=" text-center">
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </div>
      </div>

      <hr />
      <p className="text-center mt-4 text-lg">Copyright 2020 Argent Bank</p>
    </div>
  );
};

export default Home;
