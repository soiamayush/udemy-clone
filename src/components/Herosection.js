import React from "react";
import watch from "../assests/watch.png"

const Herosection = () => {
  return (
    <div className="bg-slate-100 w-full h-80">
      <div className="herosection">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50 relative left-16 top-8">
          <div className="p-5">
            <div className="font-semibold font-serif text-3xl mb-2 leading-10">
              New to Udemy? Lucky you.
            </div>
            <p className="text-gray-700 text-base leading-7">
              Courses start at ₹449. Get your new-student offer before it
              expires.
            </p>
          </div>
        </div>

        <div className="image absolute right-16 top-24">
            <img src={watch} alt="" className="h-64"/>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
