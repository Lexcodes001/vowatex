'use client';
import React from "react";
import Link from "next/link";
import {
  RiEmotionSadLine,
  RiHome2Line,
  RiSearchLine,
  RiArrowGoBackLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 text-center">
          {/* Illustrative Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <RiEmotionSadLine className="text-8xl text-purple-600" />
              <motion.div
                className="absolute -top-2 -right-2 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                404
              </motion.div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The page you are looking for seems to have wandered off into
            the digital wilderness.
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/"
              className="flex items-center justify-center bg-purple-100 text-purple-700 px-4 py-3 rounded-lg hover:bg-purple-200 transition-colors group"
            >
              <RiHome2Line className="mr-2 group-hover:animate-bounce" />
              Home
            </Link>

            <Link
              href="/search"
              className="flex items-center justify-center bg-blue-100 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-200 transition-colors group"
            >
              <RiSearchLine className="mr-2 group-hover:rotate-12" />
              Search
            </Link>
          </div>

          {/* Additional Context */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4 text-sm text-gray-600 flex items-center">
            <RiArrowGoBackLine className="mr-2 text-gray-500" />
            If you typed the URL manually, please double-check the spelling.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
