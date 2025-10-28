import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '' }) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
