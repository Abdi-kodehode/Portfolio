import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto">
        <div className="sm:text-left pt-20 pl-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600"> Contact Me </p>
          <p className="py-6">
            {" "}
            If you have any question or just want to reach out, drop me an{" "}
            <a className="text-pink-600" href="mailto:abdifatah.hersi@gmail.com?subject=Mail from our Website">email</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
