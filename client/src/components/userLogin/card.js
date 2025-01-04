import React from "react";
import userimage from "../../assets/userimage.png";
import { AiOutlineStar } from "react-icons/ai";

const card = (data) => {
  return (
    <div>
      <div className="w-[280px] h-[380px] rounded-[40px] shadow-xl border-[7px] border-white hover:border-[#00afaf]">
        <img src={userimage} className="mx-auto w-[200px] mt-2" alt="" />
        <h3 className="text-2xl text-center mt-2 ">{data.name}</h3>
        <h3 className="text-2xl text-center mt-2">{data.away} mins away</h3>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ease-in-out duration-300 hover:shadow-lg ml-[34%]">
          Book
        </button>
        <div className="flex justify-between w-[90%] mx-auto">
          <div className="flex">
            <h3
              className="text-[25px]" /*style={{ transform: 'translateY(-25px)' }}*/
            >
              {data.rating}
            </h3>
            <AiOutlineStar className="text-xl ml-[3px] mt-[8px]" />
          </div>
          <p className="text-lg">{data.reviews} Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default card;
