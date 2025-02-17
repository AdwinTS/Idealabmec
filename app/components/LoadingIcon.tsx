import { motion } from "framer-motion"

const LoadingIcon = () => {
  return (
    <motion.div
      className="w-16 h-16 border-4 border-pink-500 border-t-cyan-400 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
  )
}

export default LoadingIcon