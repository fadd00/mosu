import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="mt-auto">
        <div className="font-semibold text-blue-600">{author}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}
