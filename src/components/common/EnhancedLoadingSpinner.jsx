import { motion } from "framer-motion";
import { Code, Terminal, Brackets, Database, Layers } from "lucide-react";

const BackgroundIcon = ({ icon: Icon, color }) => (
  <motion.div
    initial={{
      opacity: 0.1,
      scale: 0.8,
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
    }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute pointer-events-none"
  >
    <Icon color={color} size={60} />
  </motion.div>
);

const FirstLoading = () => {
  const backgroundIcons = [
    { icon: Code, color: "rgba(29, 78, 216, 0.9)" },
    { icon: Terminal, color: "rgba(30, 64, 175, 0.9)" },
    { icon: Brackets, color: "rgba(59, 130, 246, 0.9)" },
    { icon: Database, color: "rgba(37, 99, 235, 0.9)" },
    { icon: Layers, color: "rgba(14, 116, 144, 0.9)" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-black to-gray-950 min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundIcons.map((iconData, index) =>
          [...Array(5)].map((_, subIndex) => (
            <BackgroundIcon
              key={`${index}-${subIndex}`}
              icon={iconData.icon}
              color={iconData.color}
            />
          ))
        )}
      </div>

      <div className="relative w-32 h-32">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-4 border-blue-500 rounded-full"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute inset-0 border-4 border-blue-900/20 rounded-full"
          animate={{
            scale: [1.1, 1.4, 1.1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default FirstLoading;
