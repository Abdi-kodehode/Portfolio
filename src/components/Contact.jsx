import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#0a192f] text-gray-300">
      <div class="max-w-[1000px] mx-auto">
        <div class="text-center pb-20">
          <h3 class="text-3xl mb-3"> Contact Me </h3>
          <p>
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
