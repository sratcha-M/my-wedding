import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import flower1 from "../assets/flower_1.png";
import flower2 from "../assets/flower_2.png";
import flower3 from "../assets/flower_3.png";
import flower4 from "../assets/flower_4.png";

const AnimatedFlowers = () => {
  const [flowers, setFlowers] = useState<
    Array<{
      id: number;
      icon: Array<string>;
      x: number;
      y: number;
    }>
  >([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      icon: [flower1, flower2, flower3, flower4],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {flowers.map((flower, i) => (
        <motion.div
          key={flower.id}
          initial={{ x: flower.x, y: flower.y, opacity: 0, scale: 0 }}
          animate={{
            y: [flower.y, flower.y - 20, flower.y],
            rotate: [0, 10, -10, 0],
            opacity: [0, 0.2, 0.2, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            fontSize: "2rem",
            pointerEvents: "none",
          }}
        >
          <img
            src={flower.icon[Math.floor(Math.random() * flower.icon.length)]}
            alt="flower"
            className="w-8 h-8"
            loading="lazy"
          ></img>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedFlowers;
