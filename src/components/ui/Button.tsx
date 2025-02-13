"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick,
  variant = "primary",
  className = ""
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full inline-block transition-all duration-300 shadow-lg";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white hover:shadow-[0_10px_30px_rgba(147,51,234,0.3)]",
    secondary: "relative overflow-hidden border-2 border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-[0_10px_30px_rgba(147,51,234,0.2)]"
  };

  const secondaryTextStyles = variant === "secondary" ? 
    "relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text font-medium" : "";

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {variant === "secondary" && (
        <span className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-full" />
      )}
      <span className={secondaryTextStyles}>
        {children}
      </span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}