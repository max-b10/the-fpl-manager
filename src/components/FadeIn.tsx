import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={formVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default FadeIn;
