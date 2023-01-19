import React from "react";

const Quotes = () => {
  return (
    <div className="mt-8 bg-slate-50">
      <div className="mx-4 pt-16 pb-8">
        <div className="text-2xl font-bold mx-4">
          <span>How learners like you are achieving their goals</span>
        </div>

        <div className="flex flex-row my-8 gap-x-2">
          <div className="border py-4 px-3 bg-white">
            <div className="font-serif text-6xl px-4 pt-4">''</div>
            <div className="w-80 pl-4 h-32">
              I am proud to say that after a few months of taking this course...{" "}
              <span className="font-bold">
                I passed my exam and am now an AWS Certified Cloud Practitioner!
              </span>{" "}
              This content was exactly what the CCP exam covered.
            </div>
            <div className="name mt-4 pl-4">
              <span className="rounded-full border bg-black font-semibold text-white p-2">
                WA
              </span>
              <span className="font-semibold mx-2">Will A</span>
            </div>

            <div className="border w-80 my-8 "></div>
            <div className="pl-4  items-center justify-center mb-6">
              <span className="mr-4 text-purple-700 hover:text-purple-800 font-size-2xl font-bold cursor-pointer w-80">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </span>
            </div>
          </div>



          <div className="border py-4 px-3 bg-white">
            <div className="font-serif text-6xl px-4 pt-4">''</div>
            <div className="w-80 pl-4 h-32">
            This course helped me{" "}
              <span className="font-bold">
              freshen up on my product manager skills and land a job at Facebook!
              </span>{" "}
              Thanks guys :)
            </div>
            <div className="name mt-4 pl-4">
              <span className="rounded-full border bg-black font-semibold text-white p-2">
                RF
              </span>
              <span className="font-semibold mx-2">Ron F</span>
            </div>

            <div className="border w-80 my-8"></div>
            <div className="pl-4  items-center justify-center mb-6">
              <span className="mr-4 text-purple-700 hover:text-purple-800 font-size-2xl font-bold cursor-pointer w-80">
              Become a Product Manager | Learn the Skills & Get the Job
              </span>
            </div>
          </div>



          <div className="border py-4 px-3 bg-white">
            <div className="font-serif text-6xl px-4 pt-4">''</div>
            <div className="w-80 pl-4 h-32">
            One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable.{" "}
              <span className="font-bold">
              Would help anyone become a better manager.
              </span>{" "}
            </div>
            <div className="name mt-4 pl-4">
              <span className="rounded-full border bg-black font-semibold text-white p-2">
                PW
              </span>
              <span className="font-semibold mx-2">Phillip W</span>
            </div>

            <div className="border w-80 my-8"></div>
            <div className="pl-4  items-center justify-center mb-6">
              <span className="mr-4 text-purple-700 hover:text-purple-800 font-size-2xl font-bold cursor-pointer w-80">
              Leadership: Practical Leadership Skills
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Quotes;
