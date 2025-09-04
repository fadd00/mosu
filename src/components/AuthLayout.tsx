import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg border shadow-sm w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
