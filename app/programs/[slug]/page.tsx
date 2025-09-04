import React from 'react';

const programs = [
  {
    slug: 'software-engineering-virtual-experience',
    title: 'Software Engineering Virtual Experience',
    company: 'Tech Innovations Inc.',
    duration: '5-6 hours',
    certificate: 'Yes',
    description: 'A deep dive into modern software engineering practices. You will work on a real-world project, from planning to deployment, using agile methodologies.',
    learnings: [
      'Build a full-stack web application.',
      'Implement RESTful APIs with Node.js.',
      'Develop a responsive UI with React.',
      'Understand agile development cycles.',
    ],
    modules: [
      { title: 'Module 1: Project Setup', description: 'Set up your development environment and initialize the project.' },
      { title: 'Module 2: Backend API', description: 'Design and build the core API endpoints.' },
      { title: 'Module 3: Frontend Development', description: 'Create the user interface and connect it to the backend.' },
      { title: 'Module 4: Deployment', description: 'Deploy your application to a cloud service.' },
    ],
  },
  // Add other program details here...
];

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{program.description}</p>

          <h2 className="text-2xl font-bold mb-4">What you will learn</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            {program.learnings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-4">Modules</h2>
          <div className="space-y-4">
            {program.modules.map((module, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="sticky top-24 border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Program Summary</h3>
            <p><strong>Duration:</strong> {program.duration}</p>
            <p><strong>Certificate:</strong> {program.certificate}</p>
            <p><strong>Company:</strong> {program.company}</p>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Register to Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
