import React from 'react';
import Image from 'next/image';

interface ProgramCardProps {
  logoUrl: string;
  title: string;
  company: string;
  skills: string[];
}

export default function ProgramCard({ logoUrl, title, company, skills }: ProgramCardProps) {
  return (
    <div className="border rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <Image src={logoUrl} alt={`${company} logo`} width={48} height={48} className="object-contain mr-4" />
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 mb-4">{company}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
