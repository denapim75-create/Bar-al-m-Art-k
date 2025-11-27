import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 relative overflow-hidden p-4">
      {/* Decorative background blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="z-10 w-full max-w-lg mx-auto text-center">
        {children}
      </div>
    </div>
  );
};