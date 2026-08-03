import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      type={type}
      onClick={onClick}
      className={`
        bg-[#C9A35D]
        text-black
        px-7
        py-3
        rounded-full
        font-semibold
        shadow-lg
        hover:bg-[#D9B878]
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;