import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl border-b-4 inline border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below or drop an email at hamzadev55@gnail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 
          px-8 py-3 my-8 mx-auto flex items-center duration-300 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
