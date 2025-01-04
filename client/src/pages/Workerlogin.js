import React from "react";
import WorkerHeader from "../components/workerHeader";
import { useState } from "react";

const Workerlogin = () => {
  const [buttonState, setS] = useState(0);

  function make1() {
    setS(1);
    alert("Accepted!!");
  }

  function make3() {
    setS(3);
  }

  return (
    <div>
      <WorkerHeader />
      <h1 className="text-[#00afaf] text-center mt-4">Bookings</h1>
      <div className="w-32 h-[2px] bg-[#00afaf] mt-2 mx-auto mb-6"></div>
      <div className="w-full h-[2px] mb-4 bg-gray-300"></div>
      {buttonState !== 3 && (
        <div className="mt-8 w-[80%] py-3 rounded-[40px] shadow-xl mx-auto px-4 bg-[#f8f4f4]">
          <div className="flex justify-between mt-2">
            <h3>Name: Avneet</h3>
            <h3>Address: 12-B, L-pocket, Janakpuri</h3>
          </div>
          <div>
            {buttonState === 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg ml-auto block"
                onClick={make1}
              >
                Accept
              </button>
            )}
            <div className="flex justify-between items-center w-full my-4">
              {buttonState === 1 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg"
                  onClick={make3}
                >
                  Service Provided?
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {buttonState === 3 && (
        <div className="mx-auto text-center">
          <h3 className="text-gray-400 mt-24">No New Bookings</h3>
        </div>
      )}
      <div className="h-[100px]"></div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-[80%] {
            width: 95%;
          }
          .mx-auto {
            margin: 0 auto;
          }
          h3 {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 20px;
          }
          h3 {
            font-size: 14px;
          }
          .py-3 {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Workerlogin;
