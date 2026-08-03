import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="
      bg-[#1A1A1A]
      rounded-3xl
      p-8
      border
      border-[#2D2D2D]
      hover:border-[#C9A35D]
      transition-all
      duration-300
      "
    >
      <div
        className="
        w-16
        h-16
        rounded-full
        bg-[#C9A35D]
        flex
        items-center
        justify-center
        text-2xl
        text-black
        mb-6
        "
      >
        <Icon />
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {service.title}
      </h3>

      <p className="text-gray-400 leading-7">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;