"use client";
import { useState } from "react";
import { BiMessageRounded, BiPhone } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

// BiMessageRounded
const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and set errors
    if (name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (phone.trim() === "") {
      setPhoneError("Phone is required");
    } else {
      setPhoneError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    // Handle form submission if all fields are valid
    if (name && phone && email) {
      // Your form submission logic here
    }
  };
  return (
    <div className="mt-[70px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-1">
        <span className="text-[50px] font-bold text-darkvl">Contact Form</span>
        <span className="text-2xl font-bold text-gray-600">
          Not sure what to do? We will give you a call back!
        </span>

        <div className="bg-darkvl w-[120px] h-[3px] mt-[10px]"></div>

        {/* section */}

        <div className="w-[600px]">
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 bg-[#cdeef3] rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border border-gray-600"
          >
            <label htmlFor="name">Name</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <BsFillPersonFill className="h-4 w-4 text-gray-400" />
              </span>
            </div>
            <p className="text-red-600 text-sm">{nameError}</p>

            <label htmlFor="phone">Phone</label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your phone *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <BiPhone className="h-4 w-4 text-gray-400" />
              </span>
            </div>
            <p className="text-red-600 text-sm">{phoneError}</p>

            <label htmlFor="email">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
            <p className="text-red-600 text-sm">{emailError}</p>

            <div className="relative">
              <input
                type="message"
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Write your message here"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <BiMessageRounded className="h-4 w-4 text-gray-400" />
              </span>
            </div>

            <button
              type="submit"
              className="block m-auto  w-[500px] rounded-lg bg-darkvl px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>

        {/* section */}
      </div>
    </div>
  );
};

export default Form;
