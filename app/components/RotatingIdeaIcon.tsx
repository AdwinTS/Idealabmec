import { motion } from "framer-motion"

const RotatingIdeaIcon = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="w-24 h-24"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-yellow-400"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8c0-1-.26-1.9-.78-2.71-.32-.51-.74-.93-1.26-1.27C14.64 3.33 12.38 3 12 3c-.38 0-2.64.33-3.96 1.02-.52.34-.94.76-1.26 1.27C6.26 6.1 6 7 6 8c0 1.36.44 2.55 1.32 3.5.76.76 1.24 1.52 1.41 2.5" />
      </svg>
    </motion.div>
  )
}

export default RotatingIdeaIcon

