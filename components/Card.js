import React from "react";

const Card = () => {
  return (
    <card className="flex flex-col max-w-6xl mx-auto space-y-4 ">
      <div className="bg-green-500 rounded-lg py-6 p-3">card 1</div>
      <div className="flex  justify-between space-x-5">
        <div className="bg-yellow-500 rounded-lg sm:h-[70vh] py-6 w-full h-[80vh] p-3">
          card 2
        </div>
        <div className="bg-red-500 rounded-lg py-6 w-full p-3">card 3</div>
        <div className="hidden md:inline-block bg-purple-500 rounded-lg py-6 w-full p-3">
          card 4
        </div>
      </div>
      <div className=" md:hidden bg-purple-500 rounded-lg py-6 w-full p-3">
        card 4
      </div>
      <div className="bg-blue-500 rounded-lg py-6 p-3">card 5</div>
    </card>
    
  );
};

export default Card;
