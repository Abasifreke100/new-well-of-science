import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";
import emailjs from "@emailjs/browser";

const EnquiriesForm = () => {
  const [institutionType, setInstitutionType] = useState("");
  const [status, setStatus] = useState("idle");
  const { register, handleSubmit, formState } = useForm();
  const formRef = useRef();

  // const { public_key, service_id } = siteConfig.form; // Ensure these are configured correctly
  // const template_id = "template_r7bahqr";
  const service_id = "service_291nglq";
  const template_id = "template_w33vn43";
  const public_key = "ffWBuTD7u_ZpVuvj7";

  const onSubmit = () => {
    setStatus("pending");
    emailjs.sendForm(service_id, template_id, formRef.current, public_key).then(
      () => {
        setStatus("done");
      },
      () => {
        setStatus("idle");
      }
    );
  };
  const formError = formState.errors;

  return (
    <div className="bg-green_one px-4 py-12">
      <motion.div
        className="max-w-xl mx-auto p-8 my-12 bg-white shadow-xl rounded-lg space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl font-medium mb-6 text-center text-gray-800"
          id="green-club-enquires"
        >
          Join a Green Club
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Interested in joining a Green Club at your school? Complete the form
          below, and we&apos;ll help you get started on your sustainability
          journey.
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="space-y-2">
            <label
              className="block text-gray-700 font-medium"
              id="institution-type"
            >
              Select Institution Type
            </label>
            <motion.select
              {...register("institutionType", {
                required: "Institution type is required",
              })}
              value={institutionType}
              onChange={(e) => setInstitutionType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="tertiary">Tertiary Institution</option>
              <option value="secondary">Secondary School</option>
            </motion.select>
            {formError.institutionType && (
              <span className="text-red-500">
                {formError.institutionType.message}
              </span>
            )}
          </div>

          {institutionType && (
            <>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-gray-700 font-medium">
                  Institution Name
                </label>
                <input
                  type="text"
                  {...register("institutionName", {
                    required: "Institution name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message:
                        "Institution name can only contain letters and spaces",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your institution name"
                />
                {formError.institutionName && (
                  <span className="text-red-500">
                    {formError.institutionName.message}
                  </span>
                )}
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-gray-700 font-medium">
                  Student Name
                </label>
                <input
                  type="text"
                  {...register("studentName", {
                    required: "Student name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message:
                        "Student name can only contain letters and spaces",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                />
                {formError.studentName && (
                  <span className="text-red-500">
                    {formError.studentName.message}
                  </span>
                )}
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-gray-700 font-medium">
                  Student Email
                </label>
                <input
                  type="email"
                  {...register("studentEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
                {formError.studentEmail && (
                  <span className="text-red-500">
                    {formError.studentEmail.message}
                  </span>
                )}
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="block text-gray-700 font-medium">
                  Student Phone
                </label>
                <input
                  type="tel"
                  {...register("studentPhone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10,15}$/,
                      message:
                        "Please enter a valid phone number (10-15 digits)",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                />
                {formError.studentPhone && (
                  <span className="text-red-500">
                    {formError.studentPhone.message}
                  </span>
                )}
              </motion.div>
              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-green_one text-white font-semibold rounded-lg shadow-md hover:bg-green_two focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Start a Green Club
              </motion.button>
            </>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default EnquiriesForm;
