'use client'

import { memo } from "react"
import { motion, Variants } from "framer-motion";
import { PullRequest } from "@/types/github"
import PullRequestItem from "./PullRequestItem"

const PullRequestsList = ({ pullRequests }: { pullRequests: PullRequest[] }) => {
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className="w-full mx-auto p-4 space-y-4"
    >
      <motion.header variants={headerVariants}>
        <h2 className="heading text-2xl font-bold text-white mb-6">Pull Requests</h2>
      </motion.header>
      <motion.ul className="space-y-3">
        {pullRequests.map((pr, index) => (
          <PullRequestItem key={pr.id} pr={pr} index={index} />
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default memo(PullRequestsList)