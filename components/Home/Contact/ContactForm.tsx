/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:tex-3xl lg:text-[2.5rem] p-1.5 font-bold">
        Let's Work Together!
      </h1>
      <p className="text-gray-200 lg:text-base mt-3 text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ipsum
        tenetur voluptatum esse ipsam blanditiis incidunt, aut et itaque soluta,
        doloribus obcaecati adipisci maxime quae iusto nobis animi possimus id.
      </p>
      {/* input fields */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-black text-white flex-1 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-black text-white flex-1 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className=" flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-black text-white flex-1 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="bg-black text-white flex-1 placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select className="w-full mt-5 bg-black text-white outline-none placeholder:text-gray-600 rounded-md border-[1.5px] border-gray-200 border-opacity-15 px-4 py-3.5">
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">FullStack Development</option>
          </select>
        </div>
        <textarea
          className="w-full mt-5 bg-black text-white outline-none placeholder:text-gray-600 rounded-md border-[1.5px] border-gray-200 border-opacity-15 px-4 py-3.5"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div>
          <button className="bg-[#7947df] text-white rounded-lg px-8 py-3.5 hover:text-[#5c2fb7] transition-all durtion-150">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
