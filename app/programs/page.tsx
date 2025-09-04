import React from 'react';
import ProgramCard from '@/src/components/ProgramCard';
import Link from 'next/link';

const programs = [
  {
    slug: 'software-engineering-virtual-experience',
    logoUrl: '/path/to/logo1.png', // Replace with actual logo path
    title: 'Software Engineering Virtual Experience',
    company: 'Tech Innovations Inc.',
    skills: ['React', 'Node.js', 'Agile'],
  },
  {
    slug: 'data-analytics-internship',
    logoUrl: '/path/to/logo2.png',
    title: 'Data Analytics Internship',
    company: 'Data Insights Co.',
    skills: ['SQL', 'Python', 'Tableau'],
  },
  {
    slug: 'digital-marketing-program',
    logoUrl: '/path/to/logo3.png',
    title: 'Digital Marketing Program',
    company: 'Market Wizards',
    skills: ['SEO', 'Content Marketing', 'Google Ads'],
  },
  {
    slug: 'ux-design-foundations',
    logoUrl: '/path/to/logo4.png',
    title: 'UX Design Foundations',
    company: 'Creative Minds Studio',
    skills: ['Figma', 'User Research', 'Prototyping'],
  },
];

export default function ProgramsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Virtual Work Experiences</h1>
      <div className="flex items-center space-x-4 mb-8">
        <input type="text" placeholder="Search programs..." className="border p-2 rounded-md w-1/3" />
        <select className="border p-2 rounded-md">
          <option>Industry</option>
        </select>
        <select className="border p-2 rounded-md">
          <option>Company</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Link href={`/programs/${program.slug}`} key={program.slug}>
            <ProgramCard {...program} />
          </Link>
        ))}
      </div>
    </div>
  );
}
