'use client'

import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

const premiumEase = [0.22, 1, 0.36, 1] as const

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: premiumEase as unknown as number[] },
  },
}

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: premiumEase as unknown as number[] },
  },
}

export function useAnimationEnabled() {
  const prefersReduced = useReducedMotion()
  return !prefersReduced
}

export function AnimatedSection({
  children,
  className = '',
  id,
  style,
  variants = sectionVariants,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  style?: React.CSSProperties
  variants?: Variants
}) {
  const shouldAnimate = useAnimationEnabled()

  if (!shouldAnimate) {
    return <div id={id} className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldAnimate = useAnimationEnabled()

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChild({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldAnimate = useAnimationEnabled()

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={childVariants}>
      {children}
    </motion.div>
  )
}

export { motion, premiumEase }
