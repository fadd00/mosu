import React from 'react';
import DashboardProgramCard from '@/src/components/DashboardProgramCard';
import Link from 'next/link';

const inProgressPrograms = [
  {
    slug: 'software-engineering-virtual-experience',
    title: 'Software Engineering Virtual Experience',
    company: 'Tech Innovations Inc.',
    status: 'in-progress' as const,
    progress: 60,
  },
  {
    slug: 'data-analytics-internship',
    title: 'Data Analytics Internship',
    company: 'Data Insights Co.',
    status: 'in-progress' as const,
    progress: 25,
  },
];

const completedPrograms = [
  {
    slug: 'digital-marketing-program',
    title: 'Digital Marketing Program',
    company: 'Market Wizards',
    status: 'completed' as const,
  },
];

export default function DashboardPage() {
  const userName = "Alex"; // Placeholder for user name

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Welcome back, {userName}!</h1>
        <p className="text-lg text-gray-600">Let's continue learning</p>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6">In Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inProgressPrograms.map((program) => (
            <Link href={`/dashboard/program/${program.slug}`} key={program.slug}>
                <DashboardProgramCard {...program} />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Completed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedPrograms.map((program) => (
            <DashboardProgramCard key={program.slug} {...program} />
          ))}
        </div>
      </section>
    </div>
  );
}
