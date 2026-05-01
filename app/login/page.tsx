"use client";
import { motion } from "framer-motion";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">

      {/* Card Animation */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
      >

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-center text-black mb-2"
        >
          Welcome Back
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-center mb-6"
        >
          Login to your account
        </motion.p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col"
          >
            <label  className="text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8182E2] transition"
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1}}
            className="flex flex-col"
          >
            <label className="text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8182E2] transition"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#8182E2] text-white py-2 cursor-pointer rounded-lg mt-2"
          >
            Login
          </motion.button>
        </form>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between text-sm text-gray-500 mt-4"
        >
          <span className="cursor-pointer hover:text-black">
            Forgot Password?
          </span>
          <span className="cursor-pointer hover:text-black">
            Sign Up
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Login;