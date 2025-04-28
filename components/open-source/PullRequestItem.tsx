'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { PullRequest } from "@/types/github";
import Link from 'next/link';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const PullRequestItem = ({ pr, index }: { pr: PullRequest; index: number; }) => {
  const colors = [
    'bg-green-50/10',
    'bg-pink-50/10',
    'bg-purple-50/10',
    'bg-blue-50/10'
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 45,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
    },
  };

  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className={`${colors[index % colors.length]} p-4 rounded-lg overflow-hidden custom-shadow`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-start">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <Link
            prefetch={false}
            href={pr.html_url}
            target='_blank'
            className="text-base font-medium text-white hover:underline"
          >
            <h3 className="text-base font-medium text-white">
              {pr.title}
            </h3>
          </Link>
          <div className="text-sm text-gray-400 space-y-1">
            <div>
              #{pr.number} opened on {formatDate(pr.created_at)}
            </div>
            <div>
              Repository: <Link prefetch={false} href={pr.repository.html_url} className="text-blue-400 hover:underline">{pr.repository.name}</Link>
            </div>
          </div>
          <motion.div
            className="flex items-center gap-2 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <span className="text-green-400">+{pr.additions}</span>
            <span className="text-red-400">-{pr.deletions}</span>
            <span className="text-gray-400">{pr.changed_files} Files Changed</span>
          </motion.div>
        </motion.div>
        <Link href={pr.html_url}>
          <motion.svg
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="w-5 h-5 text-gray-400 hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </motion.svg>
        </Link>
      </div>
    </motion.li>
  );
};

export default memo(PullRequestItem);