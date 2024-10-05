import React from "react";
import appLogo from "../assets/Attendify.png";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const InputForm = ({ type, category }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    orgCode: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  const [showPassword, setShowPassword] = React.useState(true);

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={appLogo}
          alt="application logo"
          loading="lazy"
          className="w-[12rem] h-[12rem]"
        />
        <p className="absolute top-[13rem] text-gray-500 text-xl font-semibold">
          Register {category === "ORG" ? "your Organisation" : " as a Student"}
        </p>
      </div>

      <div className="w-[90%] md:w-[60%] h-[2px] bg-slate-200 mx-auto"></div>

      <form
        action=""
        className="md:w-[50%] md:mx-auto font-garamond p-3 flex flex-col gap-3 my-4"
      >
        {type === "REGISTER" && category === "ORG" && (
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={`Enter ${category === "ORG" ? "Organisation's" : "Student's"} Name`}
              className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
            />
          </div>
        )}

        {category === "STUDENT" && type === "REGISTER" && (
          <>
            <div className="flex flex-col">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Organisation Code</label>
              <input
                type="text"
                name="lastName"
                value={formData.orgCode}
                onChange={handleChange}
                required
                placeholder="Enter the unique code provided by your Institue"
                className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
              />
            </div>
          </>
        )}

        <div className="flex gap-2 justify-center items-center">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="">
               Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder = {`Enter ${category === "ORG" ? "Organisation's" : "Student's"} Email address`}
              className="p-3 shadow-md rounded placeholder:text-[12px] focus:outline-none focus:ring focus:ring-secondary"
            />
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="">
               <span className="text-s">Phone Number</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              placeholder= {`Enter ${category === "ORG" ? "Organisation's" : "Student's"} Phone Number`}
              className="p-3 shadow-md rounded placeholder:text-[12px] focus:outline-none focus:ring focus:ring-secondary"
            />
          </div>
        </div>

        {type === "REGISTER" && category === "ORG" && (
          <>
            <div className="flex flex-col">
              <label htmlFor="">Address Line 1</label>
              <input
                type="text"
                name="line1"
                value={formData.address.line1}
                onChange={handleChange}
                required
                placeholder="Eg. Locality, Street name..."
                className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Address Line 2</label>
              <input
                type="text"
                name="line2"
                value={formData.address.line2}
                onChange={handleChange}
                placeholder="Eg. Additional Info, Landmark... (optional)"
                className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
              />
            </div>

            <div className="flex gap-2 justify-center items-center">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.address.state}
                  onChange={handleChange}
                  required
                  placeholder="Enter name of the State"
                  className="p-3 shadow-md rounded placeholder:text-[12px] focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.address.city}
                  onChange={handleChange}
                  required
                  placeholder="Enter name of the City"
                  className="p-3 shadow-md rounded placeholder:text-[12px] focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Pin Code</label>
              <input
                type="text"
                name="pincode"
                value={formData.address.pincode}
                onChange={handleChange}
                required
                placeholder="Enter pincode/postal code"
                className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
              />
            </div>
          </>
        )}

        <div className="flex flex-col relative">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "password" : "text"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter a password"
            className="p-3 shadow-md rounded focus:outline-none focus:ring focus:ring-secondary"
          />
          <button
            className="absolute top-[50%] right-3"
            onClick={toggleShowPassword}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <button className="bg-primary text-white font-medium p-3 rounded-lg">
          Register
        </button>
      </form>

      <div className="w-[90%] md:w-[60%] h-[2px] bg-slate-200 mx-auto"></div>

      <p className="font-roboto flex justify-center items-center my-2 gap-1 text-sm">
        {type === "REGISTER" ? "Already Registered?" : "Don't have an account?"}
        <Link
          to={type === "REGISTER" ? "/login" : "/register"}
          className="text-blue-500"
        >
          {type === "REGISTER" ? "Login Now" : "Register"}
        </Link>
      </p>
    </>
  );
};

export default InputForm;
