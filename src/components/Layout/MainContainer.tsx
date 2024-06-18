import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col gap-4 md:gap-8 md:p-8">
      {children}
    </main>
  );
};

export default MainContainer;
