import React from 'react';
import Link from 'next/link';

interface DashboardProgramCardProps {
  slug: string;
  title: string;
  company: string;
  status: 'in-progress' | 'completed';
  progress?: number; // Percentage from 0 to 100
}

export default function DashboardProgramCard({ slug, title, company, status, progress }: DashboardProgramCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col h-full transition-shadow duration-300 hover:shadow-lg">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 mb-4">{company}</p>
      
      <div className="mt-auto">
        {status === 'in-progress' && progress !== undefined && (
          <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm text-gray-500">{progress}% complete</p>
          </div>
        )}
        {status === 'completed' && (
          <Link href={`/dashboard/certificate/${slug}`}>
            <a className="inline-block mt-2 text-sm font-semibold text-blue-600 hover:underline">
              View Certificate
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
