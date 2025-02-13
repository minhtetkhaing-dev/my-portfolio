"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ 
  children, 
  href, 
  onClick,
  variant = "primary" 
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full inline-block transition-colors";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{buttonContent}</a>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}