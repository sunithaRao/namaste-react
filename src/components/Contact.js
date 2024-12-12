import React from "react";

const Contact = () => {
  return (
    <div className="border border-black shadow-2xl p-4 m-4 rounded-2xl">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="bg-gray-200 border border-black rounded p-4 m-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
