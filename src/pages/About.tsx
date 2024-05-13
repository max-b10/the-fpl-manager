import Navbar from '../components/Navbar';
import { stack } from '../constants/stack';
import TechStackCard from '../components/Cards/TechStackCard';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import { useState } from 'react';

const About = () => {
  const handleSubmit = useNavigationWithId();
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <>
      <Navbar showIdForm={false} handleSubmit={handleSubmit} />
      <main className="flex h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <TechStackCard
                title={tech.title}
                key={index}
                icon={<Icon className="h-8 w-8" />}
                description={tech.description}
                isOpen={openCard === index}
                onOpenChange={(isOpen: boolean) => {
                  setOpenCard(isOpen ? index : null);
                }}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default About;
