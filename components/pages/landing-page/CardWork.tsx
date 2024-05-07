import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Item {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
}

interface CardWorkProps {
  item: Item;
}

const CardWork: React.FC<CardWorkProps> = ({ item }) => {
  const itemShow = (delay: number = 0): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay
      }
    },
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative aspect-square sm:w-[250px] sm:h-[250px] sm:mx-auto lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-md bg-gray-200 bg-opacity-10 backdrop-blur-sm overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full relative">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end px-6 py-10 group-hover:bg-black group-hover:bg-opacity-70 transition">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? 'visible' : 'hidden'}
          variants={itemShow()}
          className="sm:text-2xl font-semibold uppercase text-gradient-2 animate-cursor-hovered"
        >
          {item.type}
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default CardWork;
