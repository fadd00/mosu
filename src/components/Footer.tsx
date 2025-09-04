import React from "react";
import { Linkedin } from "lucide-react";

// TikTok icon SVG (since lucide-react does not export Tiktok)
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.width || 20} height={props.height || 20} {...props}>
      <path d="M17.5 2c.3 2.2 1.7 3.6 3.5 3.8v3.1c-1.2-.1-2.3-.4-3.3-1v7.7c0 3.2-2.6 5.8-5.8 5.8S6.1 18.8 6.1 15.6c0-2.7 2.2-4.9 4.9-4.9.2 0 .4 0 .6.1v3.2c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V2h3.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-50 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* First Column: Logo & Mission */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <span className="text-2xl font-bold text-blue-600">mosu</span>
          <p className="text-gray-600 text-sm">We're on a mission to get motivated students into great jobs.</p>
        </div>
        {/* Link Columns */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-700">For Students</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Programs</a></li>
            <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-600">Sign Up</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-700">For Enterprise</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Overview</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600">Sign In</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-700">For Educators</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Overview</a></li>
            <li><a href="#" className="hover:text-blue-600">Resources</a></li>
            <li><a href="#" className="hover:text-blue-600">Sign Up</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-700">About Us</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Company</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-700">Support</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t py-6 px-4 flex items-center justify-between mx-auto max-w-7xl text-sm text-gray-500">
        <span>&copy; {new Date().getFullYear()} mosu. All rights reserved.</span>
        <div className="flex space-x-4">
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"><Linkedin size={20} /></a>
          <a href="#" aria-label="TikTok" className="hover:text-blue-600"><TikTokIcon /></a>
        </div>
      </div>
    </footer>
  );
}
