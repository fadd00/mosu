'use client';
import React, { useState } from 'react';
import { ChevronRight, Download } from 'lucide-react';

const programData = {
  title: 'Software Engineering Virtual Experience',
  modules: [
    {
      title: 'Module 1: Getting Started',
      tasks: [
        { id: '1.1', title: 'Introduction to the Program' },
        { id: '1.2', title: 'Setup Your Environment' },
      ],
    },
    {
      title: 'Module 2: Building the Backend',
      tasks: [
        { id: '2.1', title: 'Designing the API' },
        { id: '2.2', title: 'Implementing User Authentication' },
      ],
    },
  ],
};

export default function LearningInterfacePage() {
  const [activeTask, setActiveTask] = useState('1.2');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Panel (Sidebar) */}
      <aside className="w-1/4 bg-gray-800 text-white p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-6">{programData.title}</h1>
        <nav className="flex-grow">
          {programData.modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className="mb-4">
              <h2 className="font-semibold text-gray-400 mb-2">{module.title}</h2>
              <ul>
                {module.tasks.map((task) => (
                  <li key={task.id}>
                    <button
                      onClick={() => setActiveTask(task.id)}
                      className={`w-full text-left px-3 py-2 rounded-md flex items-center transition ${
                        activeTask === task.id ? 'bg-blue-600' : 'hover:bg-gray-700'
                      }`}
                    >
                      <ChevronRight size={16} className="mr-2" />
                      {task.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Right Panel (Main Content) */}
      <main className="w-3/4 p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Task {activeTask}: Setup Your Environment</h1>
        </header>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="mb-6">
            In this task, you will set up your local development environment. Follow the steps below to install Node.js, Git, and a code editor. This is a crucial step to ensure you can complete the rest of the program smoothly.
          </p>
          
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <div className="bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Embedded Video Player Placeholder</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Resources</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Download size={16} className="mr-2 text-blue-600" />
                <a href="#" className="text-blue-600 hover:underline">Setup Guide.pdf</a>
              </li>
              <li className="flex items-center">
                <Download size={16} className="mr-2 text-blue-600" />
                <a href="#" className="text-blue-600 hover:underline">Project Boilerplate.zip</a>
              </li>
            </ul>
          </div>
        </div>
        
        <footer className="mt-8 flex justify-between items-center">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-200 transition">Previous Task</button>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Mark as Complete
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-200 transition">Next Task</button>
        </footer>
      </main>
    </div>
  );
}
