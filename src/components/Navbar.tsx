"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Forage</span>
        </div>
        {/* Center: Nav Links */}
        <div className="hidden md:flex space-x-8 relative">
          <div
            className="flex items-center cursor-pointer relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <span className="font-medium text-gray-700 hover:text-blue-600 transition">Explore</span>
            <ChevronDown className="ml-1 w-4 h-4 text-gray-500" />
            {/* Dropdown Panel */}
            {exploreOpen && (
              <div className="absolute left-0 top-full mt-2 w-[600px] bg-white border rounded-lg shadow-lg p-6" onMouseEnter={() => setExploreOpen(true)} onMouseLeave={() => setExploreOpen(false)}>
                <div className="font-semibold text-lg mb-4">Explore Programs</div>
                <div className="grid grid-cols-3 gap-4">
                  {/* Placeholder cards */}
                  <div className="h-24 bg-gray-100 rounded-lg" />
                  <div className="h-24 bg-gray-100 rounded-lg" />
                  <div className="h-24 bg-gray-100 rounded-lg" />
                </div>
              </div>
            )}
          </div>
          <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Jobs</a>
          <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Blog</a>
          <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">For Enterprise</a>
          <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">For Educators</a>
        </div>
        {/* Right: Auth Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition">Sign In</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
